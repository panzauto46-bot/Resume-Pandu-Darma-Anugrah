import { Suspense, lazy, useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code,
  Github,
  Linkedin,
  Play,
  Twitter,
  Home,
  FolderOpen,
  GraduationCap,
  Languages,
  ChevronDown,
  ExternalLink,
  Award,
} from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

const Hero3D = lazy(() => import("./Hero3D"));

/* ═══════════════════════════════════════════════════ */
/*                    DATA (ALL ORIGINAL)              */
/* ═══════════════════════════════════════════════════ */

type NavItem = { id: string; label: string; icon: LucideIcon };
type SkillBar = { name: string; percent: number; icon: string };
type Project = { title: string; desc: string; link: string; github: string; tags: string[] };
type ContactLink = { label: string; value: string; href: string };
type EduItem = { degree: string; school: string; year: string };
type CertItem = { name: string; issuer: string };
type LangItem = { name: string; level: string; code: string; percent: number };


const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "skills", label: "Skills", icon: Code },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "languages", label: "Languages", icon: Languages },
  { id: "contact", label: "Contact", icon: Briefcase },
];


const skillBars: SkillBar[] = [
  { name: "React", percent: 90, icon: "⚛" },
  { name: "Tailwind", percent: 85, icon: "🎨" },
  { name: "Python", percent: 80, icon: "🐍" },
  { name: "Vue", percent: 75, icon: "💚" },
];

const skillTickerA = ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Groq", "DeepSeek", "Solana", "Base", "Bitcoin", "Clarity", "Rust"];
const skillTickerB = ["Anchor", "Kotlin", "Web3j", "Firebase", "Docker", "Ethers.js", "Phantom", "MetaMask", "Bittensor", "RWA systems", "Trading dashboards", "Prompt orchestration"];

const projects: Project[] = [
  { title: "NEXUS-FORGE", desc: "Autonomous AI hackathon agent that generates production-grade React apps with multi-LLM fallback.", link: "https://nexus-forge-ai.vercel.app/", github: "https://github.com/panzauto46-bot/Nexus-Forge", tags: ["React", "AI", "LLM"] },
  { title: "NEXUS-CASH", desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout, CashTokens loyalty rewards.", link: "https://nexus-cash.vercel.app", github: "https://github.com/panzauto46-bot/NEXUS-CASH", tags: ["Bitcoin", "POS", "Web3"] },
  { title: "OMNI-CORE", desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.", link: "https://omni-core-id.vercel.app", github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-", tags: ["AI", "Web3", "Groq"] },
  { title: "AEGIS.OS", desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow and autonomous DeFi operations.", link: "https://aegis-os-id.vercel.app/", github: "https://github.com/panzauto46-bot/AEGIS.OS", tags: ["Base", "DeFi", "AI"] },
  { title: "SSS-FORGE", desc: "Solana Stablecoin Standard protocol with Anchor smart contracts, watchtower backend, and admin dashboard.", link: "https://sss-forge.vercel.app", github: "https://github.com/panzauto46-bot/SSS-Forge", tags: ["Solana", "Anchor", "DeFi"] },
  { title: "AEGIS-NET", desc: "Decentralized AI security subnet for smart contract auditing powered by Bittensor miners and validator consensus.", link: "https://aegis-net-pi.vercel.app", github: "https://github.com/panzauto46-bot/AEGIS-NET", tags: ["Bittensor", "AI", "Security"] },
  { title: "SUPERTEAM-ACADEMY", desc: "Gamified Solana learning hub with interactive coding lessons, wallet-based progression, and XP system.", link: "https://super-team-academy.vercel.app/", github: "https://github.com/panzauto46-bot/superteam-academy", tags: ["Solana", "Education", "Gamification"] },
  { title: "Singular Yield", desc: "Autonomous Self-Driving Yield Engine on BNB Chain with automated harvesting and compounding strategies.", link: "https://singular-yield.vercel.app", github: "https://github.com/panzauto46-bot/SingularYield", tags: ["BNB", "DeFi", "Yield"] },
  { title: "agent.os", desc: "An autonomous AI Agent Operating System designed for complex task execution and orchestration.", link: "https://agent-os-id.vercel.app", github: "https://github.com/panzauto46-bot/agent.os", tags: ["AI", "Agents", "OS"] },
  { title: "InstaDrop", desc: "Instant Pay-to-Download Protocol built on the Stacks Blockchain, enabling seamless digital asset monetization.", link: "https://instadrop402.vercel.app/", github: "https://github.com/panzauto46-bot/InstaDrop402web", tags: ["Stacks", "Bitcoin", "Payments"] },
  { title: "AnchorGuard AI", desc: "Advanced AI-powered security and monitoring solution for protecting digital assets and infrastructure.", link: "https://anchor-guard-ai.vercel.app/", github: "https://github.com/panzauto46-bot/AnchorGuard-AI", tags: ["AI", "Security", "Monitoring"] },
  { title: "BIT-SHADOW", desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.", link: "https://bit-shadow.vercel.app", github: "https://github.com/panzauto46-bot/BIT-SHADOW", tags: ["Trading", "Analytics", "Crypto"] },
  { title: "SatsProcure", desc: "Bitcoin inventory and procurement management system aimed at streamlining detailed sat-invoicing.", link: "https://sats-procure.vercel.app", github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-", tags: ["Bitcoin", "Inventory", "B2B"] },
  { title: "SolForge Academy", desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.", link: "https://solforge-academy.vercel.app", github: "https://github.com/panzauto46-bot/SolForge-Academy", tags: ["Solana", "Education", "Dev"] },
  { title: "CrediProcure", desc: "Decentralized B2B Invoice Financing Platform on Creditcoin.", link: "https://credi-procure.vercel.app/", github: "https://github.com/panzauto46-bot/CrediProcure", tags: ["Creditcoin", "B2B", "Finance"] },
  { title: "CredPOS", desc: "DeFi-Integrated Point of Sale with Multi-Chain Wallet Connect.", link: "https://credposappreview.vercel.app/", github: "https://github.com/panzauto46-bot/CredPOS", tags: ["DeFi", "POS", "Multi-Chain"] },
  { title: "Trading Analytics Dashboard", desc: "AI-Driven Trading Insights and Consistency Heatmap.", link: "https://trading-analytics-dashboard-chi.vercel.app/", github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard", tags: ["AI", "Trading", "Analytics"] },
  { title: "StableFlow", desc: "Institutional Treasury and Expense Management System on Solana.", link: "https://stableflowweb.vercel.app/", github: "https://github.com/panzauto46-bot/StableFlow", tags: ["Solana", "Treasury", "DeFi"] },
  { title: "VibeAgent", desc: "AI-Powered Financial Assistant on BNB Chain (Android App).", link: "https://vibeagentweb.vercel.app/", github: "https://github.com/panzauto46-bot/VibeAgent", tags: ["AI", "BNB", "Android"] },
];

const contactLinks: ContactLink[] = [
  { label: "Email", value: "pandudargah202@gmail.com", href: "mailto:pandudargah202@gmail.com" },
  { label: "GitHub", value: "@panzauto46-bot", href: "https://github.com/panzauto46-bot" },
  { label: "LinkedIn", value: "Pandu Darma", href: "https://linkedin.com/in/pandu-darma-195a621b2" },
];

const educationData: EduItem[] = [
  { degree: "Bachelor of Computer Science", school: "University of Technology", year: "2018 - 2022" },
  { degree: "Full Stack Web Development", school: "Online Platform", year: "2021" },
  { degree: "Advanced JavaScript", school: "Online Platform", year: "2020" },
];

const certsData: CertItem[] = [
  { name: "AWS Certified", issuer: "Amazon" },
  { name: "React Professional", issuer: "Meta" },
  { name: "Google Cloud", issuer: "Google" },
];

const langData: LangItem[] = [
  { name: "English", level: "Fluent", code: "US", percent: 94 },
  { name: "French", level: "Intermediate", code: "FR", percent: 70 },
  { name: "Spanish", level: "Intermediate", code: "ES", percent: 45 },
  { name: "German", level: "Basic", code: "DE", percent: 48 },
];

/* ═══════════════════════════════════════════════════ */
/*              COMPONENTS                             */
/* ═══════════════════════════════════════════════════ */

function RunningStrip({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track${reverse ? " marquee-track-reverse" : ""}`}>
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="marquee-item">
            <span className="marquee-dot" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionDot({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" className="section-dot" onClick={onClick}>
      <ChevronDown size={12} />
    </button>
  );
}

/* ═══════════════════════════════════════════════════ */
/*                     APP                             */
/* ═══════════════════════════════════════════════════ */

export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((s): s is HTMLElement => s !== null);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveNav(visible.target.id);
      },
      { threshold: [0.2, 0.45, 0.7], rootMargin: "-20% 0px -35% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const nextSection = (currentId: string) => {
    const idx = navItems.findIndex((n) => n.id === currentId);
    if (idx >= 0 && idx < navItems.length - 1) scrollTo(navItems[idx + 1].id);
  };

  return (
    <div className="site-shell min-h-screen overflow-x-clip bg-[#050a14] text-white selection:bg-sky-500/30 selection:text-white">
      {/* Particle Background */}
      <ParticleCanvas dark />

      {/* Aurora / Grid Background */}
      <div className="background-veil" aria-hidden="true">
        <div className="aurora-blob aurora-blob-one" />
        <div className="aurora-blob aurora-blob-two" />
        <div className="aurora-blob aurora-blob-three" />
        <div className="animated-grid" />
        <div className="scan-overlay" />
      </div>

      {/* ─── LEFT SIDEBAR NAV ─── */}
      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`sidebar-btn ${activeNav === item.id ? "sidebar-btn-active" : ""}`}
              title={item.label}
            >
              <Icon size={18} />
            </button>
          );
        })}
      </nav>

      {/* ─── MAIN CONTENT ─── */}
      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-10 lg:pl-24 lg:pt-16">

        {/* ══════════ HERO ══════════ */}
        <section id="home" className="relative glass-card p-8 lg:p-16 min-h-[75vh] flex flex-col items-center justify-center overflow-hidden">
          {/* 3D Background */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Suspense fallback={<div className="absolute inset-0 bg-white/5" />}>
              <Hero3D />
            </Suspense>
          </div>

          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Avatar with glowing ring */}
            <div className="avatar-ring mb-8" style={{ animation: "float-y 6s ease-in-out infinite" }}>
              <img src="/avatar.png" alt="Pandu Darma Anugrah" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-3">
              Hi, I'm <span className="text-gradient">Pandu Darma</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl text-sky-400 font-semibold mb-6 typing-cursor">
              I'm a Full-Stack Web3 Developer
            </h2>

            <p className="max-w-2xl text-slate-400 text-sm lg:text-base leading-relaxed mb-10">
              I create beautiful, responsive web experiences using modern technologies.
              Passionate about clean code and user-centered design.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <button type="button" onClick={() => scrollTo("portfolio")} className="cta-primary">
                View My Work
              </button>
              <button type="button" onClick={() => scrollTo("contact")} className="cta-secondary">
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-5">
              <a href="https://github.com/panzauto46-bot" target="_blank" rel="noreferrer" className="social-link">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/in/pandu-darma-195a621b2" target="_blank" rel="noreferrer" className="social-link">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/BTC_SEANA" target="_blank" rel="noreferrer" className="social-link">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <SectionDot onClick={() => nextSection("home")} />
        </section>

        {/* Running Marquee Strips */}
        <div className="mt-8 space-y-3">
          <RunningStrip items={skillTickerA} />
          <RunningStrip items={skillTickerB} reverse />
        </div>

        {/* ═══════ SKILLS + PORTFOLIO (2-column) ═══════ */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">

          {/* ── MY SKILLS ── */}
          <section id="skills" className="glass-card p-6 lg:p-8">
            <div className="flex items-start gap-5 mb-8">
              <div className="hidden md:block flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden border border-sky-500/20" style={{ animation: "float-y 6s ease-in-out infinite" }}>
                <img src="/skills-hand.png" alt="Skills" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">My Skills</h2>
                <p className="text-slate-400 text-xs leading-relaxed">
                  I'm a passionate web developer with over 3 years of experience
                  creating modern, responsive web applications. I specialize in
                  frontend development using cutting-edge technologies to deliver
                  exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {skillBars.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="text-sky-400">{skill.icon}</span>
                      {skill.name}
                    </span>
                    <span className="text-xs text-sky-400 font-bold">{skill.percent}%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${skill.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <SectionDot onClick={() => nextSection("skills")} />
          </section>

          {/* ── MY PORTFOLIO ── */}
          <section id="portfolio" className="glass-card p-6 lg:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">My Portfolio</h2>
              <p className="text-slate-400 text-xs">A collection of my recent projects</p>
            </div>

            <div className="grid grid-cols-2 gap-3 max-h-[28rem] overflow-y-auto no-scrollbar pr-1">
              {projects.slice(0, 6).map((proj) => (
                <div key={proj.title} className="project-card group">
                  <div className="project-card-preview">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 z-10">{proj.title}</span>
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className="tag-chip">BUILD COMPLETE</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-white mb-1 truncate">{proj.title}</h4>
                    <p className="text-[10px] text-slate-400 line-clamp-2 mb-3">{proj.desc}</p>
                    <div className="flex gap-2 flex-wrap">
                      {proj.tags.map((t) => (
                        <span key={t} className="tag-chip">{t}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <a href={proj.link} target="_blank" rel="noreferrer" className="text-[10px] text-sky-400 hover:text-white flex items-center gap-1 transition-colors">
                        <ExternalLink size={10} /> Demo
                      </a>
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                        <Github size={10} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SectionDot onClick={() => nextSection("portfolio")} />
          </section>
        </div>

        {/* ═══════ EDUCATION + LANGUAGES (2-column) ═══════ */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">

          {/* ── EDUCATION ── */}
          <section id="education" className="glass-card p-6 lg:p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 mb-3">
                <GraduationCap size={22} className="text-sky-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Education</h2>
              <p className="text-slate-400 text-xs mt-1">My learning journey and certifications</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Education Column */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap size={14} className="text-sky-400" /> Education
                </h3>
                <div className="space-y-3">
                  {educationData.map((edu, i) => (
                    <div key={i} className="edu-item">
                      <div className="edu-dot" />
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{edu.degree}</h4>
                        <p className="text-[10px] text-slate-400">{edu.school}</p>
                        <span className="text-[9px] text-sky-400 font-semibold">{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications Column */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <Award size={14} className="text-sky-400" /> Certifications
                </h3>
                <div className="space-y-3">
                  {certsData.map((cert, i) => (
                    <div key={i} className="edu-item">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                        <Award size={14} className="text-sky-400" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{cert.name}</h4>
                        <p className="text-[10px] text-slate-400">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="footer-tag">📚 Always learning and growing</span>
            </div>

            <SectionDot onClick={() => nextSection("education")} />
          </section>

          {/* ── LANGUAGES ── */}
          <section id="languages" className="glass-card p-6 lg:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-sky-400 mb-1">Languages</h2>
              <p className="text-slate-400 text-xs">The languages I speak and my proficiency level in each</p>
            </div>

            <div className="space-y-4">
              {langData.map((lang) => (
                <div key={lang.code} className="lang-item">
                  <div className="lang-code">{lang.code}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <span className="text-sm font-bold text-white">{lang.name}</span>
                        <span className="text-[10px] text-slate-500 ml-2">{lang.level}</span>
                      </div>
                      <span className="text-xs text-sky-400 font-bold">{lang.percent}%</span>
                    </div>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${lang.percent}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-slate-500 mt-6 text-center italic">
              Always learning and improving my language skills.
            </p>

            <SectionDot onClick={() => nextSection("languages")} />
          </section>
        </div>

        {/* ══════════ ALL PROJECTS (FULL WIDTH) ══════════ */}
        <section className="mt-12 glass-card p-6 lg:p-10">
          <div className="text-center mb-10">
            <div className="section-eyebrow justify-center mb-3">All Projects</div>
            <h2 className="text-3xl font-bold text-white">Complete Portfolio</h2>
            <p className="text-slate-400 text-sm mt-2">All 19 deployed projects and live demos</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {projects.map((proj, idx) => (
              <article key={proj.title} className="flow-card">
                <div className="edge-beam" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                      Launch {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="tag-chip">LIVE</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{proj.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">{proj.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((t) => (
                      <span key={t} className="tag-chip">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={proj.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-white transition-colors font-semibold">
                      <Play size={12} /> LIVE DEMO
                    </a>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-semibold">
                      <Github size={12} /> SOURCE
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════ CONTACT ══════════ */}
        <section id="contact" className="mt-12 glass-card p-6 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="section-eyebrow mb-3">Contact</div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Build Together</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                If you want a page with animated background, flowing visual rhythm, and a stronger first impression,
                we can shape it into a clean production-ready build.
              </p>

              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block p-4 rounded-xl border border-sky-500/10 bg-sky-500/3 hover:border-sky-500/25 transition-all">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-1">{link.label}</div>
                    <div className="text-sm text-white">{link.value}</div>
                  </a>
                ))}
              </div>
            </div>

            <form className="space-y-4">
              <div className="section-eyebrow mb-2">Start Here</div>
              <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
              <input type="text" placeholder="Your name" className="w-full rounded-xl border border-sky-500/10 bg-white/[0.03] p-3 text-white text-sm outline-none focus:border-sky-500/30 transition-colors" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-sky-500/10 bg-white/[0.03] p-3 text-white text-sm outline-none focus:border-sky-500/30 transition-colors" />
              <textarea placeholder="Tell me about your project..." rows={5} className="w-full rounded-xl border border-sky-500/10 bg-white/[0.03] p-3 text-white text-sm outline-none focus:border-sky-500/30 transition-colors resize-none" />
              <button type="button" className="cta-primary">Stay Connected</button>
            </form>
          </div>
        </section>

        {/* Running Strip at bottom */}
        <div className="mt-8">
          <RunningStrip items={["Animated background systems", "Running marquee motion", "Flowing section transitions", "3D hero atmosphere", "Responsive storytelling", "Web3 and AI launch pages"]} />
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-slate-500 text-xs">
        <p>© 2024 Pandu Darma Anugrah. All rights reserved.</p>
      </footer>
    </div>
  );
}
