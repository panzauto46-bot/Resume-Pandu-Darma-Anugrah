/**
 * motion.ts — semua interaksi dinamis, tanpa dependency.
 *
 * Sengaja kecil dan idempoten: React StrictMode memanggil effect dua kali,
 * jadi setiap pemasangan dijaga oleh flag dan listener yang sudah ada
 * dibersihkan lewat AbortController.
 *
 * Menghormati prefers-reduced-motion: kalau user minta minim gerak,
 * semua efek dimatikan dan konten langsung dalam keadaan akhir.
 */

type Cleanup = () => void;

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let installed = false;
const cleanups: Cleanup[] = [];

/** Tandai elemen untuk reveal, berurutan sesuai urutan DOM di dalam induknya. */
function markReveals(root: ParentNode) {
  const groups = root.querySelectorAll<HTMLElement>(
    ".hero > .container, .section > .container, .plate, .index-row, .record-row, .exp-item",
  );

  groups.forEach((el, i) => {
    if (el.hasAttribute("data-reveal")) return;

    // media punya animasi clip sendiri; sisanya fade + rise
    if (el.classList.contains("plate")) {
      const media = el.querySelector<HTMLElement>(".plate-media");
      const caption = el.querySelector<HTMLElement>(".plate-caption");
      if (media) media.setAttribute("data-reveal", "media");
      if (caption) caption.setAttribute("data-reveal", "");
      return;
    }

    el.setAttribute("data-reveal", "");
    el.style.setProperty("--reveal-delay", `${Math.min(i % 4, 3) * 70}ms`);
  });

  root.querySelectorAll<HTMLElement>(".section-head").forEach((el) => {
    if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
  });
}

function observeReveals(observer: IntersectionObserver) {
  document
    .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)')
    .forEach((el) => observer.observe(el));
}

/** 1px progress bar di atas halaman. */
function mountProgress(): Cleanup {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  let raf = 0;
  const paint = () => {
    raf = 0;
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(paint);
  };

  paint();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    bar.remove();
  };
}

/** Header jadi glass penuh setelah konten mulai lewat di belakangnya. */
function mountHeaderState(): Cleanup {
  const header = document.querySelector<HTMLElement>(".site-header");
  if (!header) return () => {};

  const apply = () => {
    header.classList.toggle("is-stuck", window.scrollY > 12);
  };
  apply();
  window.addEventListener("scroll", apply, { passive: true });

  return () => window.removeEventListener("scroll", apply);
}

/** Parallax tipis pada judul hero (maks 26px, tidak pernah mengganggu baca). */
function mountHeroParallax(): Cleanup {
  const title = document.querySelector<HTMLElement>(".hero-title");
  if (!title) return () => {};

  let raf = 0;
  const paint = () => {
    raf = 0;
    const y = Math.min(26, window.scrollY * 0.06);
    title.style.transform = `translate3d(0, ${y}px, 0)`;
  };
  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(paint);
  };

  paint();
  window.addEventListener("scroll", onScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", onScroll);
    title.style.transform = "";
  };
}

/** Sorot kursor di dalam screenshot proyek. */
function mountSpotlight(): Cleanup {
  const media = Array.from(document.querySelectorAll<HTMLElement>(".plate-media"));

  const onMove = (e: PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  media.forEach((el) => el.addEventListener("pointermove", onMove, { passive: true }));

  return () => media.forEach((el) => el.removeEventListener("pointermove", onMove));
}

/** Tombol resume sedikit "tertarik" ke kursor — maksimal 6px. */
function mountMagnetic(): Cleanup {
  const targets = Array.from(
    document.querySelectorAll<HTMLElement>(".nav-resume, .contact-email"),
  );

  const onMove = (e: PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const dx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 12;
    const dy = ((e.clientY - (r.top + r.height / 2)) / r.height) * 8;
    el.style.transform = `translate(${Math.max(-6, Math.min(6, dx))}px, ${Math.max(
      -4,
      Math.min(4, dy),
    )}px)`;
  };
  const onLeave = (e: PointerEvent) => {
    (e.currentTarget as HTMLElement).style.transform = "";
  };

  targets.forEach((el) => {
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
  });

  return () =>
    targets.forEach((el) => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    });
}

/**
 * Pasang semua motion. Panggil sekali setelah render; pemanggilan berikutnya
 * tidak menghasilkan duplikat.
 */
export function initMotion() {
  if (typeof window === "undefined" || installed) return () => {};
  installed = true;

  markReveals(document);

  if (reduced()) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
    document.querySelectorAll(".site-header").forEach((el) => el.classList.add("is-stuck"));
    return () => {};
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  observeReveals(io);

  // Jaring aman: kalau ada elemen di dalam viewport yang belum ter-reveal
  // (observer telat, layout bergeser), tampilkan setelah 1.4s. Konten tidak
  // boleh pernah tertinggal tak terlihat.
  const sweep = window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-in");
    });
  }, 1400);

  cleanups.push(
    () => io.disconnect(),
    () => window.clearTimeout(sweep),
    mountProgress(),
    mountHeaderState(),
    mountHeroParallax(),
    mountSpotlight(),
    mountMagnetic(),
  );

  return () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
    installed = false;
  };
}