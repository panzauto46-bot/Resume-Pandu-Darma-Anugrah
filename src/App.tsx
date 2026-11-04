import { useEffect, useState } from "react";

type Category = "AI & agents" | "Security" | "Web3 infra" | "Payments" | "Analytics" | "Education";

type Project = {
  title: string;
  desc: string;
  link: string;
  github: string;
  tags: string[];
  image: string;
  category: Category;
};

type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

const email = "pandudargah202@gmail.com";
const resumeUrl = "/resume.html";

const navLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "record", label: "Track record" },
  { id: "contact", label: "Contact" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", handle: "@panzauto46-bot", href: "https://github.com/panzauto46-bot" },
  { label: "LinkedIn", handle: "pandu-darma", href: "https://linkedin.com/in/pandu-darma-195a621b2" },
  { label: "X", handle: "@BTC_SEANA", href: "https://x.com/BTC_SEANA" },
];

const projects: Project[] = [
  {
    title: "NEXUS-FORGE",
    desc: "Autonomous AI hackathon agent that generates production-grade React apps with multi-LLM fallback.",
    link: "https://nexus-forge-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/Nexus-Forge",
    tags: ["React", "AI", "LLM"],
    image: "/nexus-forge.jpg",
    category: "AI & agents",
  },
  {
    title: "NEXUS-CASH",
    desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout and CashTokens loyalty rewards.",
    link: "https://nexus-cash.vercel.app",
    github: "https://github.com/panzauto46-bot/NEXUS-CASH",
    tags: ["Bitcoin", "POS", "Web3"],
    image: "/nexus-cash.jpg",
    category: "Payments",
  },
  {
    title: "OMNI-CORE",
    desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.",
    link: "https://omni-core-id.vercel.app",
    github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-",
    tags: ["AI", "Web3", "Groq"],
    image: "/omni-core.jpg",
    category: "AI & agents",
  },
  {
    title: "AEGIS.OS",
    desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow and autonomous DeFi operations.",
    link: "https://aegis-os-id.vercel.app/",
    github: "https://github.com/panzauto46-bot/AEGIS.OS",
    tags: ["Base", "DeFi", "AI"],
    image: "/aegis-os.jpg",
    category: "Security",
  },
  {
    title: "SSS-FORGE",
    desc: "Solana Stablecoin Standard protocol with Anchor smart contracts, watchtower backend, and admin dashboard.",
    link: "https://sss-forge.vercel.app",
    github: "https://github.com/panzauto46-bot/SSS-Forge",
    tags: ["Solana", "Anchor", "DeFi"],
    image: "/sss-forge.jpg",
    category: "Web3 infra",
  },
  {
    title: "AEGIS-NET",
    desc: "Decentralized AI security subnet for smart contract auditing powered by Bittensor miners and validator consensus.",
    link: "https://aegis-net-pi.vercel.app",
    github: "https://github.com/panzauto46-bot/AEGIS-NET",
    tags: ["Bittensor", "AI", "Security"],
    image: "/aegis-net.jpg",
    category: "Security",
  },
  {
    title: "SUPERTEAM-ACADEMY",
    desc: "Gamified Solana learning hub with interactive coding lessons, wallet-based progression, and an XP system.",
    link: "https://super-team-academy.vercel.app/",
    github: "https://github.com/panzauto46-bot/superteam-academy",
    tags: ["Solana", "Education", "Gamification"],
    image: "/superteam-academy.jpg",
    category: "Education",
  },
  {
    title: "Singular Yield",
    desc: "Autonomous self-driving yield engine on BNB Chain with automated harvesting and compounding strategies.",
    link: "https://singular-yield.vercel.app",
    github: "https://github.com/panzauto46-bot/SingularYield",
    tags: ["BNB", "DeFi", "Yield"],
    image: "/singular-yield.jpeg",
    category: "Web3 infra",
  },
  {
    title: "agent.os",
    desc: "An autonomous AI agent operating system designed for complex task execution and orchestration.",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os",
    tags: ["AI", "Agents", "OS"],
    image: "/agent-os.jpeg",
    category: "AI & agents",
  },
  {
    title: "InstaDrop",
    desc: "Instant pay-to-download protocol built on the Stacks blockchain, enabling seamless digital asset monetization.",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web",
    tags: ["Stacks", "Bitcoin", "Payments"],
    image: "/instadrop.jpeg",
    category: "Payments",
  },
  {
    title: "AnchorGuard AI",
    desc: "AI-powered security and monitoring workspace for protecting digital assets and infrastructure.",
    link: "https://anchor-guard-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI",
    tags: ["AI", "Security", "Monitoring"],
    image: "/anchorguard-ai.jpeg",
    category: "Security",
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW",
    tags: ["Trading", "Analytics", "Crypto"],
    image: "/bit-shadow.jpeg",
    category: "Analytics",
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system for streamlined sat-invoicing and settlement.",
    link: "https://sats-procure.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-",
    tags: ["Bitcoin", "Inventory", "B2B"],
    image: "/satsprocure.jpeg",
    category: "Payments",
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy",
    tags: ["Solana", "Education", "Dev"],
    image: "/solforge.jpeg",
    category: "Education",
  },
  {
    title: "CrediProcure",
    desc: "Decentralized B2B invoice financing platform on Creditcoin, connecting real-world assets to on-chain credit.",
    link: "https://credi-procure.vercel.app/",
    github: "https://github.com/panzauto46-bot/CrediProcure",
    tags: ["Creditcoin", "B2B", "RWA"],
    image: "/crediprocure.jpeg",
    category: "Web3 infra",
  },
  {
    title: "CredPOS",
    desc: "DeFi-integrated point of sale with multi-chain wallet connect, built as a native Android application.",
    link: "https://credposappreview.vercel.app/",
    github: "https://github.com/panzauto46-bot/CredPOS",
    tags: ["DeFi", "POS", "Android"],
    image: "/cred-pos.png",
    category: "Payments",
  },
  {
    title: "Trading Analytics Dashboard",
    desc: "AI-driven trading insights with a GitHub-style consistency heatmap for tracking execution over time.",
    link: "https://trading-analytics-dashboard-chi.vercel.app/",
    github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard",
    tags: ["AI", "Trading", "Analytics"],
    image: "/trading-analytics.jpeg",
    category: "Analytics",
  },
  {
    title: "StableFlow",
    desc: "Institutional treasury and expense management system on Solana with automated USDC disbursement.",
    link: "https://stableflowweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/StableFlow",
    tags: ["Solana", "Treasury", "DeFi"],
    image: "/stableflow.jpeg",
    category: "Web3 infra",
  },
  {
    title: "VibeAgent",
    desc: "AI-powered financial assistant on BNB Chain with natural language transactions across Android and web.",
    link: "https://vibeagentweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/VibeAgent",
    tags: ["AI", "BNB", "Android"],
    image: "/vibe-agent.jpeg",
    category: "AI & agents",
  },
];

const featuredTitles = ["NEXUS-FORGE", "NEXUS-CASH", "AEGIS.OS"];
const featuredProjects = projects.filter((project) => featuredTitles.includes(project.title));
const indexProjects = projects.filter((project) => !featuredTitles.includes(project.title));

const experience = [
  {
    period: "2024 — present",
    role: "Web3 Architect & AI Engineer",
    org: "Freelance / open source",
    copy: "Architecting AI agent operating systems and decentralized protocols on Stacks and Solana, and leading modular DeFi application design.",
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer",
    org: "Tech projects",
    copy: "Built high-frequency trading dashboards and crypto inventory systems, tuning React rendering and backend throughput.",
  },
];

const capabilities = [
  { label: "AI & agents", value: "Groq (Llama 3.3 70B), DeepSeek, agent orchestration, prompt systems" },
  { label: "Contracts", value: "Solidity, Clarity, Rust / Anchor, Token-2022" },
  { label: "Chains", value: "Solana, Base, BNB Chain, Bitcoin, Stacks, Tezos, Sui, Creditcoin" },
  { label: "Frontend", value: "React 18/19, Next.js, TypeScript, Tailwind CSS, Vite" },
  { label: "Backend", value: "Node.js, Express, Firebase, Docker" },
  { label: "Mobile", value: "Kotlin, Jetpack Compose, Android / Web3j" },
  { label: "Wallets", value: "Phantom, MetaMask, Xverse, Trust Wallet, Ethers.js, Web3.js" },
];

const hackathons = [
  { project: "NEXUS-FORGE", event: "Seedstr $10K Blind Hackathon", chain: "Open track" },
  { project: "OMNI-CORE", event: "Cortensor Hackathon #4 · DoraHacks", chain: "Cortensor" },
  { project: "AEGIS.OS", event: "PinionOS Hackathon", chain: "Base L2" },
  { project: "VibeAgent", event: "BNB Chain Hackathon 2026", chain: "BNB Chain" },
  { project: "Argus Protocol", event: "Somnia Reactivity Mini Hackathon", chain: "Somnia" },
  { project: "LuminaSave", event: "YO SDK Hackathon", chain: "Multi-chain" },
  { project: "CredPOS", event: "Hacktoon 2026", chain: "Tezos / Sui" },
  { project: "SatsProcure", event: "Midl VibeHack", chain: "Bitcoin / Midl" },
  { project: "Trading Analytics", event: "Superteam.fun", chain: "Solana" },
];

const formatIndex = (value: number) => String(value).padStart(2, "0");

export default function App() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-28% 0px -58% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (target.closest(".mobile-menu") || target.closest(".menu-toggle")) {
        return;
      }
      setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            Pandu Darma Anugrah
          </a>

          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={active === link.id ? "is-active" : undefined}
                aria-current={active === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
            <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">
              Résumé <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu" id="mobile-menu">
            <div className="container mobile-menu-inner">
              <nav aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={active === link.id ? "is-active" : undefined}
                    aria-current={active === link.id ? "location" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </nav>
              <div className="mobile-menu-foot">
                <a href={resumeUrl} target="_blank" rel="noreferrer">
                  Résumé <span aria-hidden="true">↗</span>
                </a>
                <div className="mobile-socials">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                      {social.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-role mono">Web3 architect &amp; AI engineer</p>
              <h1 className="hero-title">
                Pandu Darma
                <br />
                <em>Anugrah</em>
                <span className="hero-dot">.</span>
              </h1>
              <p className="hero-lede">
                I build autonomous AI agents, on-chain infrastructure and payment systems. Nineteen products
                shipped across ten-plus chains, from hackathon prototypes to payment and treasury tools.
              </p>
              <ul className="hero-links">
                <li>
                  <a href={`mailto:${email}`}>
                    Email <span aria-hidden="true">↗</span>
                  </a>
                </li>
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={resumeUrl} target="_blank" rel="noreferrer">
                    Résumé <span aria-hidden="true">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            <aside className="hero-facts" aria-label="Quick facts">
              <dl>
                <div className="fact-row">
                  <dt className="mono">Based in</dt>
                  <dd>Indonesia · remote-first</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Focus</dt>
                  <dd>AI agents, DeFi, payments</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Shipped</dt>
                  <dd>19 products</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Hackathons</dt>
                  <dd>9</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Chains</dt>
                  <dd>10+</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="section-label mono">01 / Work</p>
                <h2 className="section-title" id="work-title">
                  Selected work
                </h2>
              </div>
              <p className="section-note">Three recent builds. The full index follows below.</p>
            </header>

            <div className="plates">
              {featuredProjects.map((project, position) => (
                <article className="plate" key={project.title}>
                  <a
                    className="plate-media"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} product screenshot`}
                      width={1600}
                      height={900}
                      loading={position === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </a>
                  <p className="plate-tag mono" aria-hidden="true">
                                      {formatIndex(position + 1)} / {project.category}
                                    </p>
                                    <div className="plate-caption">
                                      <div className="plate-copy">
                                        <h3>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.title}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                      </h3>
                      <p className="plate-desc">{project.desc}</p>
                    </div>
                    <div className="plate-aside">
                      <dl>
                        <div>
                          <dt className="mono">Built with</dt>
                          <dd>{project.tags.join(", ")}</dd>
                        </div>
                      </dl>
                      <p className="plate-links mono">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Live site <span aria-hidden="true">↗</span>
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          Source <span aria-hidden="true">↗</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="index-block">
              <div className="index-head">
                <p className="mono">Index</p>
                <p className="mono">
                  {formatIndex(featuredProjects.length + 1)}—{formatIndex(projects.length)} ·{" "}
                  {indexProjects.length} projects
                </p>
              </div>
              <ol className="index-list">
                {indexProjects.map((project, position) => {
                  const number = featuredProjects.length + position + 1;
                  return (
                    <li className="index-row" key={project.title}>
                      <span className="index-no mono">{formatIndex(number)}</span>
                      <div className="index-body">
                        <h3 className="index-title">
                          <a href={project.link} target="_blank" rel="noreferrer">
                            {project.title}
                          </a>
                        </h3>
                        <p className="index-desc">{project.desc}</p>
                      </div>
                      <p className="index-meta mono">
                        {project.category}
                        <br />
                        {project.tags.join(" · ")}
                      </p>
                      <p className="index-links mono">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Live <span aria-hidden="true">↗</span>
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          Source <span aria-hidden="true">↗</span>
                        </a>
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="section-label mono">02 / About</p>
                <h2 className="section-title" id="about-title">
                  About
                </h2>
              </div>
              <p className="section-note">
                Freelance Web3 and AI work since 2024; full-stack product work before that.
              </p>
            </header>

            <div className="about-grid">
              <div className="about-main">
                <p className="about-statement">
                  I like the unglamorous part: making complex systems usable.
                </p>
                <p>
                  I work as a freelance Web3 architect and AI engineer, mostly on agent systems and on-chain
                  infrastructure. My projects tend to start with a protocol primitive that is hard to use, and
                  end with an interface a normal person can operate.
                </p>
                <p>
                  That has meant writing Clarity and Anchor contracts, wiring wallets and payment rails, and
                  building the React front ends that make them legible. I ship across Solana, Base, BNB Chain,
                  Bitcoin, Stacks and Creditcoin.
                </p>

                <div className="experience">
                  <h3 className="subsection-title mono">Experience</h3>
                  <ol className="exp-list">
                    {experience.map((item) => (
                      <li className="exp-item" key={item.role}>
                        <p className="exp-period mono">{item.period}</p>
                        <div>
                          <h4 className="exp-role">{item.role}</h4>
                          <p className="exp-org">{item.org}</p>
                          <p className="exp-copy">{item.copy}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <aside className="capabilities" aria-label="Capabilities">
                <h3 className="subsection-title mono">Capabilities</h3>
                <dl>
                  {capabilities.map((item) => (
                    <div className="cap-row" key={item.label}>
                      <dt className="mono">{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="record" aria-labelledby="record-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="section-label mono">03 / Record</p>
                <h2 className="section-title" id="record-title">
                  Track record
                </h2>
              </div>
              <p className="section-note">Nine builds shipped under hackathon deadlines.</p>
            </header>

            <div className="record">
              <div className="record-head mono" aria-hidden="true">
                <span />
                <span>Project</span>
                <span>Event</span>
                <span>Track</span>
              </div>
              <ol className="record-list">
                {hackathons.map((item, position) => (
                  <li className="record-row" key={item.project}>
                    <span className="record-no mono">{formatIndex(position + 1)}</span>
                    <span className="record-project">{item.project}</span>
                    <span className="record-event">{item.event}</span>
                    <span className="record-track mono">{item.chain}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <header className="section-head">
              <div>
                <p className="section-label mono">04 / Contact</p>
                <h2 className="section-title" id="contact-title">
                  Contact
                </h2>
              </div>
              <p className="section-note">For product, protocol or hackathon work.</p>
            </header>

            <div className="contact-grid">
              <div className="contact-main">
                <p className="contact-copy">Email is the fastest way to reach me. I read everything.</p>
                <a className="contact-email" href={`mailto:${email}`}>
                  {email}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="contact-side">
                <div className="contact-block">
                  <h3 className="mono">Elsewhere</h3>
                  <ul className="contact-links">
                    {socialLinks.map((social) => (
                      <li key={social.label}>
                        <a href={social.href} target="_blank" rel="noreferrer">
                          <span>{social.label}</span>
                          <span className="contact-handle">
                            {social.handle} <span aria-hidden="true">↗</span>
                          </span>
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href={resumeUrl} target="_blank" rel="noreferrer">
                        <span>Résumé</span>
                        <span className="contact-handle">
                          HTML <span aria-hidden="true">↗</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contact-block">
                  <h3 className="mono">Based in</h3>
                  <p>Indonesia · remote-first</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Pandu Darma Anugrah</p>
          <p className="mono">React · TypeScript · Vite</p>
        </div>
      </footer>
    </div>
  );
}
