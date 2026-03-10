import { useState, Suspense, lazy } from "react";
import {
  Server, Globe, Code, FileCode, Smartphone, Briefcase,
  Github, Linkedin, Twitter, Play
} from "lucide-react";

const Hero3D = lazy(() => import("./Hero3D"));

// --- DATA ---
const navItems = ["Home", "Services", "About", "Skills", "Portfolio", "Contact"];

const services = [
  {
    title: "AI Agent Systems",
    desc: "Building autonomous systems and orchestration networks using Groq, DeepSeek, and modern LLM frameworks.",
    icon: <Server size={24} className="text-[#FF4A57]" />
  },
  {
    title: "Multi-Chain Web3",
    desc: "Designing robust integrations for EVM, Solana, and Bitcoin/Stacks ecosystems.",
    icon: <Globe size={24} className="text-[#FF4A57]" />
  },
  {
    title: "Full-Stack Dev",
    desc: "End-to-end product execution with React, Next.js, Node, and TypeScript.",
    icon: <Code size={24} className="text-[#FF4A57]" />
  },
  {
    title: "Smart Contracts",
    desc: "Secure programming in Solidity, Clarity, Rust, and Anchor for decentralized applications.",
    icon: <FileCode size={24} className="text-[#FF4A57]" />
  },
  {
    title: "Mobile Integration",
    desc: "Native Kotlin Android development intertwined with Web3j wallet capabilities.",
    icon: <Smartphone size={24} className="text-[#FF4A57]" />
  },
  {
    title: "Fintech & DeFi",
    desc: "Architecting high-frequency trading dashboards, RWA platforms, and stablecoin treasuries.",
    icon: <Briefcase size={24} className="text-[#FF4A57]" />
  }
];

const projects = [
  {
    title: "NEXUS-FORGE",
    desc: "Autonomous AI hackathon agent that generates production-grade React apps with multi-LLM fallback.",
    link: "https://nexus-forge-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/Nexus-Forge"
  },
  {
    title: "NEXUS-CASH",
    desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout, CashTokens loyalty rewards.",
    link: "https://nexus-cash.vercel.app",
    github: "https://github.com/panzauto46-bot/NEXUS-CASH"
  },
  {
    title: "OMNI-CORE",
    desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.",
    link: "https://omni-core-id.vercel.app",
    github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-"
  },
  {
    title: "AEGIS.OS",
    desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow and autonomous DeFi operations.",
    link: "https://aegis-os-id.vercel.app/",
    github: "https://github.com/panzauto46-bot/AEGIS.OS"
  },
  {
    title: "SSS-FORGE",
    desc: "Solana Stablecoin Standard protocol with Anchor smart contracts, watchtower backend, and admin dashboard.",
    link: "https://sss-forge.vercel.app",
    github: "https://github.com/panzauto46-bot/SSS-Forge"
  },
  {
    title: "AEGIS-NET",
    desc: "Decentralized AI security subnet for smart contract auditing powered by Bittensor miners and validator consensus.",
    link: "https://aegis-net-pi.vercel.app",
    github: "https://github.com/panzauto46-bot/AEGIS-NET"
  },
  {
    title: "SUPERTEAM-ACADEMY",
    desc: "Gamified Solana learning hub with interactive coding lessons, wallet-based progression, and XP system.",
    link: "https://super-team-academy.vercel.app/",
    github: "https://github.com/panzauto46-bot/superteam-academy"
  },
  {
    title: "Singular Yield",
    desc: "Autonomous Self-Driving Yield Engine on BNB Chain with automated harvesting and compounding strategies.",
    link: "https://singular-yield.vercel.app",
    github: "https://github.com/panzauto46-bot/SingularYield"
  },
  {
    title: "agent.os",
    desc: "An autonomous AI Agent Operating System designed for complex task execution and orchestration.",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os"
  },
  {
    title: "InstaDrop",
    desc: "Instant Pay-to-Download Protocol built on the Stacks Blockchain, enabling seamless digital asset monetization.",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web"
  },
  {
    title: "AnchorGuard AI",
    desc: "Advanced AI-powered security and monitoring solution for protecting digital assets and infrastructure.",
    link: "https://anchor-guard-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI"
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW"
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system aimed at streamlining detailed sat-invoicing.",
    link: "https://sats-procure.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-"
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy"
  },
  {
    title: "CrediProcure",
    desc: "Decentralized B2B Invoice Financing Platform on Creditcoin.",
    link: "https://credi-procure.vercel.app/",
    github: "https://github.com/panzauto46-bot/CrediProcure"
  },
  {
    title: "CredPOS",
    desc: "DeFi-Integrated Point of Sale with Multi-Chain Wallet Connect.",
    link: "https://credposappreview.vercel.app/",
    github: "https://github.com/panzauto46-bot/CredPOS"
  },
  {
    title: "Trading Analytics Dashboard",
    desc: "AI-Driven Trading Insights and Consistency Heatmap.",
    link: "https://trading-analytics-dashboard-chi.vercel.app/",
    github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard"
  },
  {
    title: "StableFlow",
    desc: "Institutional Treasury and Expense Management System on Solana.",
    link: "https://stableflowweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/StableFlow"
  },
  {
    title: "VibeAgent",
    desc: "AI-Powered Financial Assistant on BNB Chain (Android App).",
    link: "https://vibeagentweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/VibeAgent"
  }
];

// --- COMPONENTS ---

const RightTimeline = ({ isTop = false }) => {
  return (
    <div className="absolute right-8 md:right-16 top-0 bottom-0 flex flex-col items-center justify-center opacity-70">
      {!isTop && <div className="w-[1px] h-full bg-[#FF4A57]/30 absolute"></div>}
      <div className="flex flex-col gap-16 py-32 z-10 w-full items-center">
        <div className="w-4 h-4 rounded-full bg-[#FF4A57] shadow-[0_0_15px_rgba(255,74,87,0.6)]" />
        <div className="w-4 h-4 rounded-full border-2 border-[#FF4A57] bg-[#1B1F2D]" />
        <div className="w-4 h-4 rounded-full border-2 border-[#FF4A57] bg-[#1B1F2D]" />
      </div>
    </div>
  );
};

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const scrollTo = (id: string) => {
    setActiveNav(id);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1B1F2D] text-white font-sans selection:bg-[#FF4A57] selection:text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-[#1B1F2D]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wide">
            Pandu Darma <span className="text-[#FF4A57]">Anugrah</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`transition-colors hover:text-[#FF4A57] ${activeNav === item ? 'text-white' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-24 relative max-w-7xl mx-auto px-6">

        {/* Hero Section */}
        <section id="home" className="relative min-h-[85vh] flex flex-col justify-center">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
          <RightTimeline isTop />
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-medium mb-3">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              a Web3 & AI <br /> Architect
            </h1>
            <p className="text-slate-400 max-w-md text-sm md:text-base leading-relaxed mb-10">
              Versatile Full-Stack Engineer. Fond of creating production-grade Web3 infrastructure
              and bringing them to life using autonomous AI agents and scalable protocols.
            </p>
            <button
              onClick={() => scrollTo("Portfolio")}
              className="bg-[#FF4A57] hover:bg-[#ff3344] text-white px-8 py-4 text-sm font-bold tracking-wider transition-colors"
            >
              Creator journey
            </button>

            <div className="mt-16 flex items-center gap-6">
              <a href="https://github.com/panzauto46-bot" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/pandu-darma-195a621b2" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/BTC_SEANA" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-24">
          <RightTimeline />
          <div className="relative z-10 w-full lg:w-4/5">
            <h4 className="text-white text-lg mb-2">Services</h4>
            <h2 className="text-[#FF4A57] text-4xl md:text-5xl font-bold mb-16">Skill-Set</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-[#25293C] p-8 hover:-translate-y-2 transition-transform duration-300">
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-4">{s.title}</h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="relative py-24">
          <RightTimeline />
          <div className="relative z-10 w-full lg:w-4/5">
            <h4 className="text-white text-lg mb-2">Portfolio</h4>
            <h2 className="text-[#FF4A57] text-4xl md:text-5xl font-bold mb-16">Featured Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <div key={i} className="bg-[#25293C] p-8 group overflow-hidden relative flex flex-col justify-between min-h-[220px]">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-[#FF4A57] hover:text-white transition-colors">
                      <Play size={14} /> LIVE DEMO
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors">
                      <Github size={14} /> SOURCE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-24 mb-24">
          <RightTimeline />
          <div className="relative z-10 w-full md:w-3/4 lg:w-1/2">
            <h2 className="text-[#FF4A57] text-4xl md:text-5xl font-bold mb-12">Connect with me</h2>

            <form className="flex flex-col gap-5">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#25293C] text-white p-5 w-full focus:outline-none focus:ring-1 focus:ring-[#FF4A57] placeholder:text-slate-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="bg-[#25293C] text-white p-5 w-full focus:outline-none focus:ring-1 focus:ring-[#FF4A57] placeholder:text-slate-500 resize-none"
              ></textarea>
              <div className="mt-4">
                <button
                  type="button"
                  className="bg-[#FF4A57] hover:bg-[#ff3344] text-white px-8 py-4 text-sm font-bold tracking-wider transition-colors flex items-center gap-2"
                >
                  Stay Connected <span>&#9654;</span>
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
