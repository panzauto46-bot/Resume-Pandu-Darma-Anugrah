import { Suspense, lazy, useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  FileCode,
  Github,
  Globe,
  Linkedin,
  Play,
  Server,
  Smartphone,
  Twitter,
} from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

const Hero3D = lazy(() => import("./Hero3D"));

type NavItem = {
  id: string;
  label: string;
};

type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type Highlight = {
  value: string;
  label: string;
  note: string;
};

type SkillColumn = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  desc: string;
  link: string;
  github: string;
};

type ContactLink = {
  label: string;
  value: string;
  href: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const services: Service[] = [
  {
    title: "AI Agent Systems",
    desc: "Building autonomous systems and orchestration networks using Groq, DeepSeek, and modern LLM frameworks.",
    icon: Server,
  },
  {
    title: "Multi-Chain Web3",
    desc: "Designing robust integrations for EVM, Solana, and Bitcoin/Stacks ecosystems.",
    icon: Globe,
  },
  {
    title: "Full-Stack Dev",
    desc: "End-to-end product execution with React, Next.js, Node, and TypeScript.",
    icon: Code,
  },
  {
    title: "Smart Contracts",
    desc: "Secure programming in Solidity, Clarity, Rust, and Anchor for decentralized applications.",
    icon: FileCode,
  },
  {
    title: "Mobile Integration",
    desc: "Native Kotlin Android development intertwined with Web3j wallet capabilities.",
    icon: Smartphone,
  },
  {
    title: "Fintech & DeFi",
    desc: "Architecting high-frequency trading dashboards, RWA platforms, and stablecoin treasuries.",
    icon: Briefcase,
  },
];

const highlights: Highlight[] = [
  {
    value: "19+",
    label: "featured launches",
    note: "from hackathons to production demos",
  },
  {
    value: "7",
    label: "chains explored",
    note: "Solana, EVM, Bitcoin, Stacks, and more",
  },
  {
    value: "24/7",
    label: "motion-ready UI",
    note: "layered backgrounds, flow lines, and live energy",
  },
];

const workflowSteps = [
  {
    title: "Concept framing",
    desc: "We shape the story, user flow, and visual direction before touching final components.",
  },
  {
    title: "System animation",
    desc: "Background drift, running strips, and interface pulses make the page feel alive without becoming noisy.",
  },
  {
    title: "Product polish",
    desc: "Cards, CTAs, typography, and interaction states are tuned so the motion supports the message.",
  },
  {
    title: "Fast iteration",
    desc: "Once the visual system lands, sections can expand quickly for new launches, demos, and client pitches.",
  },
];

const motionStrip = [
  "Animated background systems",
  "Running marquee motion",
  "Flowing section transitions",
  "3D hero atmosphere",
  "Responsive storytelling",
  "Web3 and AI launch pages",
];

const skillTickerA = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vite",
  "Node.js",
  "Groq",
  "DeepSeek",
  "Solana",
  "Base",
  "Bitcoin",
  "Clarity",
  "Rust",
];

const skillTickerB = [
  "Anchor",
  "Kotlin",
  "Web3j",
  "Firebase",
  "Docker",
  "Ethers.js",
  "Phantom",
  "MetaMask",
  "Bittensor",
  "RWA systems",
  "Trading dashboards",
  "Prompt orchestration",
];

const skillColumns: SkillColumn[] = [
  {
    title: "Frontend Motion",
    items: ["React", "Next.js", "Tailwind CSS", "Vite", "Responsive UI", "Micro-interactions"],
  },
  {
    title: "Blockchain Systems",
    items: ["Solana", "EVM", "Bitcoin", "Stacks", "Anchor", "Solidity"],
  },
  {
    title: "AI Product Layer",
    items: ["Groq", "DeepSeek", "LLM orchestration", "Autonomous agents", "Prompt design", "Workflow automation"],
  },
];

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "pandudargah202@gmail.com",
    href: "mailto:pandudargah202@gmail.com",
  },
  {
    label: "GitHub",
    value: "@panzauto46-bot",
    href: "https://github.com/panzauto46-bot",
  },
  {
    label: "LinkedIn",
    value: "Pandu Darma",
    href: "https://linkedin.com/in/pandu-darma-195a621b2",
  },
];

const projects: Project[] = [
  {
    title: "NEXUS-FORGE",
    desc: "Autonomous AI hackathon agent that generates production-grade React apps with multi-LLM fallback.",
    link: "https://nexus-forge-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/Nexus-Forge",
  },
  {
    title: "NEXUS-CASH",
    desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout, CashTokens loyalty rewards.",
    link: "https://nexus-cash.vercel.app",
    github: "https://github.com/panzauto46-bot/NEXUS-CASH",
  },
  {
    title: "OMNI-CORE",
    desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.",
    link: "https://omni-core-id.vercel.app",
    github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-",
  },
  {
    title: "AEGIS.OS",
    desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow and autonomous DeFi operations.",
    link: "https://aegis-os-id.vercel.app/",
    github: "https://github.com/panzauto46-bot/AEGIS.OS",
  },
  {
    title: "SSS-FORGE",
    desc: "Solana Stablecoin Standard protocol with Anchor smart contracts, watchtower backend, and admin dashboard.",
    link: "https://sss-forge.vercel.app",
    github: "https://github.com/panzauto46-bot/SSS-Forge",
  },
  {
    title: "AEGIS-NET",
    desc: "Decentralized AI security subnet for smart contract auditing powered by Bittensor miners and validator consensus.",
    link: "https://aegis-net-pi.vercel.app",
    github: "https://github.com/panzauto46-bot/AEGIS-NET",
  },
  {
    title: "SUPERTEAM-ACADEMY",
    desc: "Gamified Solana learning hub with interactive coding lessons, wallet-based progression, and XP system.",
    link: "https://super-team-academy.vercel.app/",
    github: "https://github.com/panzauto46-bot/superteam-academy",
  },
  {
    title: "Singular Yield",
    desc: "Autonomous Self-Driving Yield Engine on BNB Chain with automated harvesting and compounding strategies.",
    link: "https://singular-yield.vercel.app",
    github: "https://github.com/panzauto46-bot/SingularYield",
  },
  {
    title: "agent.os",
    desc: "An autonomous AI Agent Operating System designed for complex task execution and orchestration.",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os",
  },
  {
    title: "InstaDrop",
    desc: "Instant Pay-to-Download Protocol built on the Stacks Blockchain, enabling seamless digital asset monetization.",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web",
  },
  {
    title: "AnchorGuard AI",
    desc: "Advanced AI-powered security and monitoring solution for protecting digital assets and infrastructure.",
    link: "https://anchor-guard-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI",
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW",
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system aimed at streamlining detailed sat-invoicing.",
    link: "https://sats-procure.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-",
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy",
  },
  {
    title: "CrediProcure",
    desc: "Decentralized B2B Invoice Financing Platform on Creditcoin.",
    link: "https://credi-procure.vercel.app/",
    github: "https://github.com/panzauto46-bot/CrediProcure",
  },
  {
    title: "CredPOS",
    desc: "DeFi-Integrated Point of Sale with Multi-Chain Wallet Connect.",
    link: "https://credposappreview.vercel.app/",
    github: "https://github.com/panzauto46-bot/CredPOS",
  },
  {
    title: "Trading Analytics Dashboard",
    desc: "AI-Driven Trading Insights and Consistency Heatmap.",
    link: "https://trading-analytics-dashboard-chi.vercel.app/",
    github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard",
  },
  {
    title: "StableFlow",
    desc: "Institutional Treasury and Expense Management System on Solana.",
    link: "https://stableflowweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/StableFlow",
  },
  {
    title: "VibeAgent",
    desc: "AI-Powered Financial Assistant on BNB Chain (Android App).",
    link: "https://vibeagentweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/VibeAgent",
  },
];

function RightTimeline({ isTop = false }: { isTop?: boolean }) {
  return (
    <div className="timeline-rail pointer-events-none absolute right-4 top-0 hidden h-full xl:flex xl:right-10">
      {!isTop && <div className="timeline-line" />}
      <div className="timeline-dot timeline-dot-active" />
      <div className="timeline-dot" />
      <div className="timeline-dot" />
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="section-eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">{description}</p>
    </div>
  );
}

function RunningStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track${reverse ? " marquee-track-reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="marquee-item">
            <span className="marquee-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveNav(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-20% 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell min-h-screen overflow-x-clip bg-[#07111f] text-white selection:bg-[#FF4A57] selection:text-white">
      <ParticleCanvas dark />

      <div className="background-veil" aria-hidden="true">
        <div className="aurora-blob aurora-blob-one" />
        <div className="aurora-blob aurora-blob-two" />
        <div className="aurora-blob aurora-blob-three" />
        <div className="animated-grid" />
        <div className="scan-overlay" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-4 md:px-6">
          <div className="glass-nav rounded-[30px] border border-white/10 px-3 py-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-semibold tracking-[0.22em] text-white/70 uppercase">
                    Pandu Darma
                  </div>
                  <div className="text-xl font-bold text-white md:text-2xl">
                    Anugrah <span className="text-[#FF4A57]">Portfolio</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="hidden rounded-full border border-[#FF4A57]/30 bg-[#FF4A57]/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#FFD1D5] transition hover:border-[#FF4A57]/60 hover:bg-[#FF4A57]/20 sm:inline-flex"
                >
                  LET&apos;S BUILD
                </button>
              </div>

              <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeNav === item.id
                        ? "bg-white text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
                        : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-6 md:pt-36">
        <section id="home" className="relative min-h-[92vh] py-8 md:py-16">
          <RightTimeline isTop />

          <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-[#FF4A57]/15 blur-3xl md:h-72 md:w-72" />

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
            <div className="relative">
              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Available for launch-ready builds
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Web experiences with
                <span className="text-gradient"> flowing motion</span> and cinematic depth.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                I design and build portfolio, product, and Web3 landing pages that feel alive:
                animated backgrounds, running bands, flowing UI rhythm, and strong structure that
                still keeps the message clear.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("portfolio")}
                  className="cta-primary"
                >
                  See featured builds
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="cta-secondary"
                >
                  Start a project
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="highlight-card">
                    <div className="text-3xl font-bold tracking-[-0.05em] text-white">{item.value}</div>
                    <div className="mt-2 text-sm font-semibold text-[#FFD1D5]">{item.label}</div>
                    <p className="mt-2 text-xs leading-6 text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-6">
                <a
                  href="https://github.com/panzauto46-bot"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/pandu-darma-195a621b2"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/BTC_SEANA"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="relative h-[430px] sm:h-[520px] lg:h-[570px]">
              <div className="hero-frame">
                <div className="hero-panel">
                  <div className="hero-panel-glow" />
                  <Suspense fallback={<div className="absolute inset-0 bg-white/5" />}>
                    <Hero3D />
                  </Suspense>

                  <div className="floating-badge left-5 top-5">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-[#FFD1D5]">
                      Neural Flow
                    </div>
                    <div className="mt-1 text-sm text-white/[0.85]">3D mesh + ambient drift</div>
                  </div>

                  <div className="floating-badge right-5 top-24 hidden md:block">
                    <div className="text-[11px] uppercase tracking-[0.35em] text-[#FFD1D5]">
                      Running Layer
                    </div>
                    <div className="mt-1 text-sm text-white/[0.85]">Particles reacting to cursor</div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                    <div className="mini-panel">
                      <div className="mini-panel-label">Motion stack</div>
                      <div className="mini-panel-value">particles, aurora, grid, 3D, marquee</div>
                    </div>
                    <div className="mini-panel">
                      <div className="mini-panel-label">Design intent</div>
                      <div className="mini-panel-value">bold, fluid, still readable on mobile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-4">
            <RunningStrip items={motionStrip} />
            <RunningStrip items={skillTickerA} reverse />
          </div>
        </section>

        <section id="about" className="relative py-24">
          <RightTimeline />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
            <div>
              <SectionHeader
                eyebrow="About"
                title="Motion-first design that still feels structured."
                description="The goal is not to add random effects. I build visual systems where the background moves, the sections breathe, and the page feels premium from the first scroll to the final CTA."
              />

              <div className="glass-panel mt-8 p-6 md:p-8">
                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  For product showcases and personal brands, motion helps communicate confidence and
                  depth. The important part is balance: a dramatic atmosphere, but with clean
                  reading paths, fast scanning, and strong contrast for every section.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="stat-chip">
                    <div className="stat-chip-label">Visual rhythm</div>
                    <div className="stat-chip-value">running strips + hover lift</div>
                  </div>
                  <div className="stat-chip">
                    <div className="stat-chip-label">Depth system</div>
                    <div className="stat-chip-value">particles + aurora + glass panels</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel flow-board p-6 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="section-eyebrow">Build Flow</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                    From rough idea to polished launch page
                  </h3>
                </div>
                <div className="rounded-full border border-[#FF4A57]/30 bg-[#FF4A57]/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-[#FFD1D5]">
                  ALWAYS MOVING
                </div>
              </div>

              <div className="mt-8 space-y-5">
                {workflowSteps.map((step, index) => (
                  <div key={step.title} className="flow-step">
                    <div className="flow-step-index">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="relative py-24">
          <RightTimeline />

          <SectionHeader
            eyebrow="Services"
            title="Production-ready builds with motion built in."
            description="The interaction layer can be subtle or bold, but the end result stays purposeful: cleaner hierarchy, stronger storytelling, and a page that feels active from the first frame."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.title} className="flow-card">
                  <div className="edge-beam" />
                  <div className="relative z-10">
                    <div className="service-icon-wrap">
                      <Icon size={24} className="text-[#FF8891]" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{service.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="relative py-24">
          <RightTimeline />

          <SectionHeader
            eyebrow="Skills"
            title="Running stacks, adaptable tools, flexible systems."
            description="These are the layers I usually combine when a landing page needs more than static sections: brand atmosphere, frontend polish, blockchain context, and AI-oriented product storytelling."
          />

          <div className="glass-panel mt-12 p-5 md:p-6">
            <RunningStrip items={skillTickerA} />
            <div className="mt-4" />
            <RunningStrip items={skillTickerB} reverse />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {skillColumns.map((column) => (
              <div key={column.title} className="glass-panel p-6">
                <h3 className="text-xl font-semibold text-white">{column.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {column.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="relative py-24">
          <RightTimeline />

          <SectionHeader
            eyebrow="Portfolio"
            title="Selected builds that benefit from bold visual movement."
            description="This showcase keeps the cards clean, but the surrounding system stays in motion so the page never feels flat. The same direction can be pushed further for product pages, pitch sites, and founder portfolios."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-card-glow" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#FFD1D5]">
                      Launch {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/70">
                      LIVE
                    </div>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{project.desc}</p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link project-link-primary"
                    >
                      <Play size={14} />
                      LIVE DEMO
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Github size={14} />
                      SOURCE
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="relative py-24">
          <RightTimeline />

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Need a web design that moves?"
                description="If you want a page with animated background, flowing visual rhythm, and a stronger first impression, we can shape it into a clean production-ready build."
              />

              <div className="mt-8 space-y-4">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="link-card">
                    <div className="link-card-label">{link.label}</div>
                    <div className="link-card-value">{link.value}</div>
                  </a>
                ))}
              </div>
            </div>

            <form className="glass-panel p-6 md:p-8">
              <div className="mb-6">
                <div className="section-eyebrow">Start Here</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                  Tell me the kind of motion you want on the page
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                <input type="text" placeholder="Your name" className="field-input" />
                <input type="email" placeholder="Email" className="field-input" />
                <textarea
                  placeholder="Example: animated hero background, running text, glowing cards, flowing section transitions..."
                  rows={6}
                  className="field-input resize-none"
                />

                <div className="pt-2">
                  <button type="button" className="cta-primary">
                    Stay Connected
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
