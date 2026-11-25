import { useEffect, useMemo, useRef, useState } from "react";

type Category = "AI & agents" | "Security" | "Web3 infra" | "Payments" | "Analytics" | "Education";

type Project = {
  title: string;
  desc: string;
  overview: string;
  architecture: string[];
  chain: string;
  year: string;
  hackathon?: string;
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

const categories: ("All" | Category)[] = [
  "All",
  "AI & agents",
  "Security",
  "Web3 infra",
  "Payments",
  "Analytics",
  "Education",
];

const projects: Project[] = [
  {
    title: "NEXUS-FORGE",
    desc: "Autonomous AI hackathon agent that generates production-grade React apps with multi-LLM fallback.",
    overview:
      "Built for the Seedstr $10K Blind Hackathon, NEXUS-FORGE listens to live prompts, synthesizes full React + TypeScript application architectures, validates output, and packages deployable builds automatically with multi-LLM failover.",
    architecture: [
      "Multi-LLM routing engine with Groq Llama 3.3 70B primary and DeepSeek fallback",
      "Automated AST & runtime build verification pipeline before package assembly",
      "Real-time telemetry console tracking token throughput, latency, and build stages",
    ],
    chain: "Multi-LLM / Agnostic",
    year: "2026",
    hackathon: "Seedstr $10K Blind Hackathon",
    link: "https://nexus-forge-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/Nexus-Forge",
    tags: ["React", "AI", "LLM", "Autonomous Agents"],
    image: "/nexus-forge.jpg",
    category: "AI & agents",
  },
  {
    title: "NEXUS-CASH",
    desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout and CashTokens loyalty rewards.",
    overview:
      "A merchant-ready point-of-sale terminal engineered for instant Bitcoin Cash acceptance. Every checkout mints or distributes native CashTokens loyalty rewards while routing settlement to a non-custodial merchant treasury.",
    architecture: [
      "Instant QR invoice generation with real-time mempool & 0-conf transaction detection",
      "Native CashTokens minting and automatic loyalty distribution per receipt",
      "Merchant analytics ledger with fiat-BCH conversion and exportable accounting",
    ],
    chain: "Bitcoin Cash",
    year: "2026",
    link: "https://nexus-cash.vercel.app",
    github: "https://github.com/panzauto46-bot/NEXUS-CASH",
    tags: ["Bitcoin Cash", "POS", "CashTokens", "Web3"],
    image: "/nexus-cash.jpg",
    category: "Payments",
  },
  {
    title: "AEGIS.OS",
    desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow and autonomous DeFi operations.",
    overview:
      "Developed for the PinionOS Hackathon, AEGIS.OS is a self-sustaining security agent on Base L2. Developers pay in USDC per audit, and the agent autonomously allocates treasury reserves while running deep static + LLM vulnerability sweeps.",
    architecture: [
      "On-chain USDC micro-payment gating on Base L2 with instant receipt verification",
      "Line-by-line Solidity vulnerability detection powered by Groq high-speed inference",
      "Autonomous agent treasury dashboard monitoring audit revenue and compute spend",
    ],
    chain: "Base L2",
    year: "2026",
    hackathon: "PinionOS Hackathon",
    link: "https://aegis-os-id.vercel.app/",
    github: "https://github.com/panzauto46-bot/AEGIS.OS",
    tags: ["Base L2", "DeFi", "AI", "Security"],
    image: "/aegis-os.jpg",
    category: "Security",
  },
  {
    title: "OMNI-CORE",
    desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.",
    overview:
      "Shipped for Cortensor Hackathon #4 on DoraHacks, OMNI-CORE visualizes and orchestrates decentralized AI inference nodes. Tasks are decomposed, delegated across specialized agent workers, and verified with cryptographic receipts.",
    architecture: [
      "Interactive 3D neural topology visualizing live agent consensus and node delegation",
      "Decentralized inference routing across Cortensor session nodes with Groq acceleration",
      "Verifiable execution logs pairing prompt hashes with multi-agent consensus scores",
    ],
    chain: "Cortensor",
    year: "2026",
    hackathon: "Cortensor Hackathon #4 · DoraHacks",
    link: "https://omni-core-id.vercel.app",
    github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-",
    tags: ["AI", "Web3", "Groq", "Cortensor"],
    image: "/omni-core.jpg",
    category: "AI & agents",
  },
  {
    title: "SSS-FORGE",
    desc: "Solana Stablecoin Standard protocol with Anchor smart contracts, watchtower backend, and admin dashboard.",
    overview:
      "Full-stack implementation of the Solana Stablecoin Standard using Token-2022 extensions. Combines Anchor smart contracts, a TypeScript SDK & CLI, and an automated risk watchtower for institutional stablecoin issuers.",
    architecture: [
      "Anchor programs leveraging Token-2022 transfer hooks, permanent delegate, and freeze authorities",
      "TypeScript SDK and CLI tooling for minting, role management, and compliance hooks",
      "24/7 watchtower daemon monitoring supply invariants and anomalous velocity",
    ],
    chain: "Solana",
    year: "2026",
    link: "https://sss-forge.vercel.app",
    github: "https://github.com/panzauto46-bot/SSS-Forge",
    tags: ["Solana", "Anchor", "Token-2022", "DeFi"],
    image: "/sss-forge.jpg",
    category: "Web3 infra",
  },
  {
    title: "AEGIS-NET",
    desc: "Decentralized AI security subnet for smart contract auditing powered by Bittensor miners and validator consensus.",
    overview:
      "A Bittensor-inspired security subnet where competing AI miners analyze smart contracts for exploits and validators score findings by precision, severity, and proof-of-concept reproducibility.",
    architecture: [
      "Miner-validator consensus loop ranking vulnerability reports by exploit validity",
      "Real-time subnet telemetry showing miner emissions, stake weight, and audit queues",
      "Automated severity classification covering reentrancy, access control, and flash-loan vectors",
    ],
    chain: "Bittensor",
    year: "2026",
    link: "https://aegis-net-pi.vercel.app",
    github: "https://github.com/panzauto46-bot/AEGIS-NET",
    tags: ["Bittensor", "AI", "Security", "Subnet"],
    image: "/aegis-net.jpg",
    category: "Security",
  },
  {
    title: "SUPERTEAM-ACADEMY",
    desc: "Gamified Solana learning hub with interactive coding lessons, wallet-based progression, and an XP system.",
    overview:
      "An interactive developer onboarding portal for the Solana ecosystem. Learners connect their Phantom wallet, complete hands-on Rust and Anchor challenges in the browser, earn XP, and mint compressed NFT completion credentials.",
    architecture: [
      "In-browser interactive code sandbox for Rust, Anchor, and Solana Web3.js exercises",
      "Wallet-bound progression state with streak tracking, leaderboards, and XP tiers",
      "On-chain achievement badges minted as Solana NFTs upon track graduation",
    ],
    chain: "Solana",
    year: "2026",
    link: "https://super-team-academy.vercel.app/",
    github: "https://github.com/panzauto46-bot/superteam-academy",
    tags: ["Solana", "Education", "Gamification", "cNFT"],
    image: "/superteam-academy.jpg",
    category: "Education",
  },
  {
    title: "Singular Yield",
    desc: "Autonomous self-driving yield engine on BNB Chain with automated harvesting and compounding strategies.",
    overview:
      "An algorithmic yield aggregator on BNB Chain that continuously evaluates pool APYs, slippage, and gas overhead to rebalance user vaults into optimal risk-adjusted strategies without manual intervention.",
    architecture: [
      "Non-custodial vault architecture with automated harvest and auto-compound cycles",
      "AI risk-scoring engine monitoring liquidity depth, IL exposure, and protocol health",
      "Real-time APY projection simulator and historical rebalance audit trail",
    ],
    chain: "BNB Chain",
    year: "2026",
    link: "https://singular-yield.vercel.app",
    github: "https://github.com/panzauto46-bot/SingularYield",
    tags: ["BNB Chain", "DeFi", "Yield", "Vaults"],
    image: "/singular-yield.jpeg",
    category: "Web3 infra",
  },
  {
    title: "agent.os",
    desc: "An autonomous AI agent operating system designed for complex task execution and orchestration.",
    overview:
      "A desktop-inspired operating environment in the browser where autonomous AI agents negotiate, bid on tasks, execute on-chain commerce deals, and coordinate workflows via Groq LLM reasoning.",
    architecture: [
      "Multi-window workspace UI with live agent terminal, deal arena, and state inspector",
      "Autonomous agent-to-agent negotiation protocol with deterministic budget constraints",
      "Low-latency Groq inference stream powering real-time decision trees",
    ],
    chain: "Multi-chain",
    year: "2026",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os",
    tags: ["AI", "Agents", "OS", "Groq"],
    image: "/agent-os.jpeg",
    category: "AI & agents",
  },
  {
    title: "InstaDrop",
    desc: "Instant pay-to-download protocol built on the Stacks blockchain, enabling seamless digital asset monetization.",
    overview:
      "Built on Stacks (Bitcoin L2) using HTTP 402 Payment Required semantics. Creators upload encrypted digital files, set a price in STX/sBTC, and buyers unlock instant downloads the moment their Clarity contract payment confirms.",
    architecture: [
      "Clarity smart contracts managing per-asset escrow, creator royalties, and access proofs",
      "Xverse & Leather wallet integration for one-click Bitcoin L2 settlement",
      "Client-side gated payload delivery triggered by on-chain transaction verification",
    ],
    chain: "Stacks · Bitcoin L2",
    year: "2026",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web",
    tags: ["Stacks", "Bitcoin", "Clarity", "Payments"],
    image: "/instadrop.jpeg",
    category: "Payments",
  },
  {
    title: "AnchorGuard AI",
    desc: "AI-powered security and monitoring workspace for protecting digital assets and infrastructure.",
    overview:
      "A specialized reasoning auditor for Solana & Anchor smart contracts. Unlike black-box scanners, AnchorGuard exposes the step-by-step chain-of-thought used to verify account constraints, PDA seeds, and signer checks.",
    architecture: [
      "Transparent chain-of-thought reasoning trace for every Anchor constraint and account check",
      "Automated detection of missing signer checks, unverified PDAs, and arithmetic overflow",
      "One-click patched Rust diff generation with remediation explanations",
    ],
    chain: "Solana",
    year: "2026",
    link: "https://anchor-guard-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI",
    tags: ["AI", "Security", "Solana", "Anchor"],
    image: "/anchorguard-ai.jpeg",
    category: "Security",
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    overview:
      "A low-latency market terminal engineered for active crypto traders. Consolidates orderflow delta, volatility bands, whale movement alerts, and multi-exchange price feeds into a single zero-clutter viewport.",
    architecture: [
      "High-frequency WebSocket feed aggregation with throttled canvas & DOM updates",
      "Real-time orderbook imbalance indicators and momentum scanner",
      "Customizable layout presets optimized for rapid execution analysis",
    ],
    chain: "Multi-chain",
    year: "2024",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW",
    tags: ["Trading", "Analytics", "Crypto", "WebSockets"],
    image: "/bit-shadow.jpeg",
    category: "Analytics",
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system for streamlined sat-invoicing and settlement.",
    overview:
      "Created during Midl VibeHack, SatsProcure bridges enterprise B2B procurement with native Bitcoin settlement via Midl. Suppliers issue sat-denominated purchase orders, track SKU inventory, and reconcile vendor payouts on-chain.",
    architecture: [
      "B2B purchase order lifecycle from quotation to on-chain Bitcoin settlement via Midl",
      "Real-time SKU inventory valuation in both sats and fiat reference currencies",
      "Automated supplier reconciliation ledger with verifiable payment proofs",
    ],
    chain: "Bitcoin · Midl",
    year: "2026",
    hackathon: "Midl VibeHack",
    link: "https://sats-procure.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-",
    tags: ["Bitcoin", "Midl", "Inventory", "B2B"],
    image: "/satsprocure.jpeg",
    category: "Payments",
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    overview:
      "Structured curriculum platform guiding Web2 engineers into Solana protocol development. Covers account model fundamentals, PDA architecture, CPI composition, and production security testing.",
    architecture: [
      "Modular curriculum tracks from Solana core primitives to advanced Anchor patterns",
      "Interactive quizzes, code walkthroughs, and milestone verification",
      "NFT certificate issuance for verified track completions",
    ],
    chain: "Solana",
    year: "2025",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy",
    tags: ["Solana", "Education", "Rust", "Dev"],
    image: "/solforge.jpeg",
    category: "Education",
  },
  {
    title: "CrediProcure",
    desc: "Decentralized B2B invoice financing platform on Creditcoin, connecting real-world assets to on-chain credit.",
    overview:
      "An RWA (Real-World Asset) trade finance protocol on Creditcoin. SMEs tokenize verified B2B invoices to unlock immediate working capital from on-chain liquidity pools, building an immutable credit history.",
    architecture: [
      "Invoice tokenization engine with risk-tiered discount rates and maturity tracking",
      "On-chain credit scoring derived from historical repayment performance on Creditcoin",
      "Liquidity provider vaults with transparent yield distribution and default protection",
    ],
    chain: "Creditcoin",
    year: "2026",
    link: "https://credi-procure.vercel.app/",
    github: "https://github.com/panzauto46-bot/CrediProcure",
    tags: ["Creditcoin", "B2B", "RWA", "DeFi"],
    image: "/crediprocure.jpeg",
    category: "Web3 infra",
  },
  {
    title: "CredPOS",
    desc: "DeFi-integrated point of sale with multi-chain wallet connect, built as a native Android application.",
    overview:
      "Built for Hacktoon 2026, CredPOS brings multi-chain crypto checkout (Tezos & Sui) to physical retail on native Android while automatically routing idle merchant balances into DeFi yield vaults.",
    architecture: [
      "Native Kotlin & Jetpack Compose Android POS terminal with NFC / QR checkout",
      "Dual-ecosystem wallet integration supporting Tezos and Sui payment rails",
      "Automated merchant sweep into background DeFi yield strategies",
    ],
    chain: "Tezos · Sui",
    year: "2026",
    hackathon: "Hacktoon 2026",
    link: "https://credposappreview.vercel.app/",
    github: "https://github.com/panzauto46-bot/CredPOS",
    tags: ["DeFi", "POS", "Android", "Tezos", "Sui"],
    image: "/cred-pos.png",
    category: "Payments",
  },
  {
    title: "Trading Analytics Dashboard",
    desc: "AI-driven trading insights with a GitHub-style consistency heatmap for tracking execution over time.",
    overview:
      "Built for Superteam.fun on Solana, this journal and analytics suite turns raw on-chain trade history into behavioral insights—featuring a 365-day GitHub-style discipline heatmap, win-rate attribution, and AI coaching.",
    architecture: [
      "365-day execution consistency heatmap mapping daily PnL, volume, and trade discipline",
      "AI behavioral coach analyzing drawdown triggers, overtrading, and session edge",
      "Direct Solana wallet import parsing DEX swaps and perp positions",
    ],
    chain: "Solana",
    year: "2026",
    hackathon: "Superteam.fun",
    link: "https://trading-analytics-dashboard-chi.vercel.app/",
    github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard",
    tags: ["AI", "Trading", "Analytics", "Solana"],
    image: "/trading-analytics.jpeg",
    category: "Analytics",
  },
  {
    title: "StableFlow",
    desc: "Institutional treasury and expense management system on Solana with automated USDC disbursement.",
    overview:
      "A programmable corporate treasury platform on Solana designed for DAOs and remote teams. Automates recurring USDC payroll, milestone grants, and department expense approvals with multi-sig policy guardrails.",
    architecture: [
      "Batch USDC payroll and vendor disbursement engine on Solana with sub-second finality",
      "Role-based spending policies, approval workflows, and real-time runway forecasting",
      "Exportable audit trails pairing on-chain signatures with invoice metadata",
    ],
    chain: "Solana",
    year: "2026",
    link: "https://stableflowweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/StableFlow",
    tags: ["Solana", "Treasury", "USDC", "DeFi"],
    image: "/stableflow.jpeg",
    category: "Web3 infra",
  },
  {
    title: "VibeAgent",
    desc: "AI-powered financial assistant on BNB Chain with natural language transactions across Android and web.",
    overview:
      "Built for BNB Chain Hackathon 2026, VibeAgent lets users execute swaps, transfers, portfolio checks, and yield allocations on BNB Chain through conversational natural language on both native Android and Web.",
    architecture: [
      "Natural-language intent parser translating chat commands into deterministic BNB Chain transactions",
      "Cross-platform availability across native Kotlin Android app and React web companion",
      "Pre-execution transaction simulation and human-in-the-loop safety confirmation",
    ],
    chain: "BNB Chain",
    year: "2026",
    hackathon: "BNB Chain Hackathon 2026",
    link: "https://vibeagentweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/VibeAgent",
    tags: ["AI", "BNB Chain", "Android", "Intent Engine"],
    image: "/vibe-agent.jpeg",
    category: "AI & agents",
  },
];

const featuredTitles = ["NEXUS-FORGE", "NEXUS-CASH", "AEGIS.OS"];
const featuredProjects = projects.filter((project) => featuredTitles.includes(project.title));

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
  { project: "Trading Analytics Dashboard", event: "Superteam.fun", chain: "Solana" },
];

const chainBadges = [
  "Solana",
  "Base L2",
  "BNB Chain",
  "Bitcoin / BCH",
  "Stacks",
  "Bittensor",
  "Creditcoin",
  "Tezos / Sui",
];

const formatIndex = (value: number) => String(value).padStart(2, "0");

export default function App() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"All" | Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const previewRef = useRef<HTMLDivElement | null>(null);
  const indexSectionRef = useRef<HTMLDivElement | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    for (const cat of categories) {
      if (cat !== "All") {
        counts[cat] = projects.filter((p) => p.category === cat).length;
      }
    }
    return counts;
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;
      const matchesQuery =
        project.title.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.chain.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

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
    if (!menuOpen && !activeProject) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setActiveProject(null);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      if (menuOpen && !target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen, activeProject]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleIndexPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = previewRef.current;
    const container = indexSectionRef.current;
    if (!el || !container) return;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    el.style.setProperty("--px", `${x}px`);
    el.style.setProperty("--py", `${y}px`);
  };

  const openProjectByTitle = (title: string) => {
    const match = projects.find(
      (p) => p.title.toLowerCase() === title.toLowerCase() || p.title.toLowerCase().includes(title.toLowerCase()),
    );
    if (match) {
      setActiveProject(match);
    }
  };

  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            <span>Pandu Darma Anugrah</span>
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
              <div className="hero-eyebrow">
                <span className="status-pill mono">
                  <span className="status-dot" aria-hidden="true" />
                  Available for Web3 &amp; AI mandates
                </span>
                <p className="hero-role mono">Web3 architect &amp; AI engineer</p>
              </div>

              <h1 className="hero-title">
                Pandu Darma
                <br />
                <em>Anugrah</em>
                <span className="hero-dot">.</span>
              </h1>

              <p className="hero-lede">
                I build autonomous AI agents, on-chain infrastructure and payment systems. Nineteen products
                shipped across ten-plus chains, from hackathon prototypes to production payment and treasury tools.
              </p>

              <div className="hero-chains" aria-label="Ecosystems shipped">
                <span className="hero-chains-label mono">Shipped across</span>
                <ul className="chain-ribbon">
                  {chainBadges.map((chain) => (
                    <li key={chain} className="chain-chip mono">
                      {chain}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hero-actions">
                <a className="btn-editorial btn-primary mono" href="#work">
                  Explore 19 builds <span aria-hidden="true">↓</span>
                </a>
                <button
                  type="button"
                  className="btn-editorial btn-secondary mono"
                  onClick={handleCopyEmail}
                >
                  {copiedEmail ? "Copied to clipboard ✓" : "Copy email"}
                </button>
                <ul className="hero-links">
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
            </div>

            <aside className="hero-facts" aria-label="Architect dossier">
              <div className="dossier-head">
                <img
                  src="/avatar.png"
                  alt="Pandu Darma Anugrah"
                  className="dossier-avatar"
                  width={56}
                  height={56}
                />
                <div className="dossier-id">
                  <p className="dossier-kicker mono">Dossier · No. 2026-PDA</p>
                  <p className="dossier-name">Full-Stack &amp; Protocol Builder</p>
                </div>
              </div>
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
                  <dd>19 live products</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Hackathons</dt>
                  <dd>9 builds shipped</dd>
                </div>
                <div className="fact-row">
                  <dt className="mono">Ecosystems</dt>
                  <dd>10+ L1 / L2 chains</dd>
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
              <p className="section-note">
                Three flagship builds highlighted first. Filter or inspect all 19 shipped systems in the interactive
                archive below.
              </p>
            </header>

            <div className="plates">
              {featuredProjects.map((project, position) => (
                <article className="plate" key={project.title}>
                  <div
                    className="plate-media"
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect ${project.title} architecture and case study`}
                    onClick={() => setActiveProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveProject(project);
                      }
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.category} product screenshot`}
                      width={1600}
                      height={900}
                      loading={position === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <p className="plate-tag mono" aria-hidden="true">
                    {formatIndex(position + 1)} / {project.category} · {project.chain}
                  </p>
                  <div className="plate-caption">
                    <div className="plate-copy">
                      <h3>
                        <button
                          type="button"
                          className="plate-title-btn"
                          onClick={() => setActiveProject(project)}
                        >
                          {project.title}
                          <span aria-hidden="true"> ↗</span>
                        </button>
                      </h3>
                      <p className="plate-desc">{project.desc}</p>
                    </div>
                    <div className="plate-aside">
                      <dl>
                        <div>
                          <dt className="mono">Chain</dt>
                          <dd>{project.chain}</dd>
                        </div>
                        <div>
                          <dt className="mono">Stack</dt>
                          <dd>{project.tags.slice(0, 3).join(", ")}</dd>
                        </div>
                      </dl>
                      <div className="plate-links mono">
                        <button
                          type="button"
                          className="link-btn mono"
                          onClick={() => setActiveProject(project)}
                        >
                          Case study <span aria-hidden="true">+</span>
                        </button>
                        <a href={project.link} target="_blank" rel="noreferrer">
                          Live site <span aria-hidden="true">↗</span>
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer">
                          Source <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div
              className="index-block"
              ref={indexSectionRef}
              onPointerMove={handleIndexPointerMove}
              onPointerLeave={() => setHoveredProject(null)}
            >
              <div className="index-toolbar">
                <div className="index-head">
                  <div>
                    <p className="index-kicker mono">Complete Archive · Interactive Index</p>
                    <h3 className="index-heading">All 19 shipped systems</h3>
                  </div>
                  <p className="mono index-counter">
                    Showing {formatIndex(filteredProjects.length)} of {formatIndex(projects.length)} projects
                  </p>
                </div>

                <div className="index-controls">
                  <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
                    {categories.map((cat) => {
                      const isSelected = selectedCategory === cat;
                      return (
                        <button
                          key={cat}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          className={`filter-pill mono ${isSelected ? "is-active" : ""}`}
                          onClick={() => setSelectedCategory(cat)}
                        >
                          <span>{cat}</span>
                          <span className="filter-count">{categoryCounts[cat]}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="search-box">
                    <input
                      type="search"
                      className="search-input mono"
                      placeholder="Filter by chain, stack, or title..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Filter projects by chain, stack, or title"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="search-clear mono"
                        onClick={() => setSearchQuery("")}
                        aria-label="Clear search"
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {filteredProjects.length === 0 ? (
                <div className="index-empty">
                  <p className="index-empty-title">No projects match "{searchQuery}" in {selectedCategory}.</p>
                  <button
                    type="button"
                    className="btn-editorial btn-secondary mono"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                <ol className="index-list">
                  {filteredProjects.map((project, position) => {
                    const number = position + 1;
                    return (
                      <li
                        className="index-row"
                        key={project.title}
                        onPointerEnter={() => setHoveredProject(project)}
                        onClick={() => setActiveProject(project)}
                      >
                        <span className="index-no mono">{formatIndex(number)}</span>
                        <div className="index-thumb-wrap" aria-hidden="true">
                          <img
                            src={project.image}
                            alt=""
                            className="index-thumb"
                            width={160}
                            height={90}
                            loading="lazy"
                          />
                        </div>
                        <div className="index-body">
                          <div className="index-title-row">
                            <h4 className="index-title">
                              <button
                                type="button"
                                className="index-title-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveProject(project);
                                }}
                              >
                                {project.title}
                              </button>
                            </h4>
                            <span className="index-chain-badge mono">{project.chain}</span>
                          </div>
                          <p className="index-desc">{project.desc}</p>
                        </div>
                        <p className="index-meta mono">
                          <span className="index-cat">{project.category}</span>
                          <br />
                          <span className="index-tags">{project.tags.slice(0, 3).join(" · ")}</span>
                        </p>
                        <div
                          className="index-links mono"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            type="button"
                            className="link-btn mono"
                            onClick={() => setActiveProject(project)}
                          >
                            Inspect <span aria-hidden="true">+</span>
                          </button>
                          <a href={project.link} target="_blank" rel="noreferrer">
                            Live <span aria-hidden="true">↗</span>
                          </a>
                          <a href={project.github} target="_blank" rel="noreferrer">
                            Source <span aria-hidden="true">↗</span>
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              )}

              <div
                ref={previewRef}
                className={`floating-preview ${hoveredProject ? "is-visible" : ""}`}
                aria-hidden="true"
              >
                {hoveredProject && (
                  <div className="floating-preview-card">
                    <div className="floating-preview-img-wrap">
                      <img src={hoveredProject.image} alt="" />
                      <span className="floating-preview-badge mono">{hoveredProject.chain}</span>
                    </div>
                    <div className="floating-preview-foot">
                      <span className="floating-preview-title">{hoveredProject.title}</span>
                      <span className="floating-preview-hint mono">Click row for architecture ↗</span>
                    </div>
                  </div>
                )}
              </div>
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
              <p className="section-note">
                Nine builds shipped under hackathon deadlines. Click a build to inspect its architecture.
              </p>
            </header>

            <div className="record">
              <div className="record-head mono" aria-hidden="true">
                <span />
                <span>Project</span>
                <span>Event</span>
                <span>Track</span>
              </div>
              <ol className="record-list">
                {hackathons.map((item, position) => {
                  const hasCaseStudy = projects.some(
                    (p) =>
                      p.title.toLowerCase() === item.project.toLowerCase() ||
                      p.title.toLowerCase().includes(item.project.toLowerCase()),
                  );
                  return (
                    <li
                      className={`record-row ${hasCaseStudy ? "is-interactive" : ""}`}
                      key={item.project}
                      onClick={() => hasCaseStudy && openProjectByTitle(item.project)}
                    >
                      <span className="record-no mono">{formatIndex(position + 1)}</span>
                      <span className="record-project">
                        {item.project}
                        {hasCaseStudy && (
                          <span className="record-inspect mono" aria-hidden="true">
                            Inspect ↗
                          </span>
                        )}
                      </span>
                      <span className="record-event">{item.event}</span>
                      <span className="record-track mono">{item.chain}</span>
                    </li>
                  );
                })}
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
                <div className="contact-email-group">
                  <a className="contact-email" href={`mailto:${email}`}>
                    {email}
                    <span aria-hidden="true">↗</span>
                  </a>
                  <button
                    type="button"
                    className="btn-editorial btn-secondary mono"
                    onClick={handleCopyEmail}
                  >
                    {copiedEmail ? "Address copied ✓" : "Copy address"}
                  </button>
                </div>
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
                          HTML / PDF <span aria-hidden="true">↗</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="contact-block">
                  <h3 className="mono">Based in</h3>
                  <p>Indonesia · remote-first (UTC+7)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Pandu Darma Anugrah</p>
          <p className="mono">19 Shipped Systems · React · TypeScript · Vite</p>
        </div>
      </footer>

      {activeProject && (
        <div
          className="drawer-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-project-title"
          onClick={() => setActiveProject(null)}
        >
          <aside className="project-drawer" onClick={(e) => e.stopPropagation()}>
            <header className="drawer-header">
              <div className="drawer-meta mono">
                <span>{activeProject.category}</span>
                <span>·</span>
                <span>{activeProject.chain}</span>
                <span>·</span>
                <span>{activeProject.year}</span>
              </div>
              <button
                type="button"
                className="drawer-close mono"
                onClick={() => setActiveProject(null)}
                aria-label="Close project case study"
              >
                Close [Esc]
              </button>
            </header>

            <div className="drawer-body">
              <div className="drawer-media">
                <img
                  src={activeProject.image}
                  alt={`${activeProject.title} interface preview`}
                  width={1600}
                  height={900}
                />
              </div>

              <div className="drawer-content">
                <div className="drawer-title-block">
                  {activeProject.hackathon && (
                    <p className="drawer-hackathon mono">🏆 {activeProject.hackathon}</p>
                  )}
                  <h2 className="drawer-title" id="drawer-project-title">
                    {activeProject.title}
                  </h2>
                  <p className="drawer-lead">{activeProject.desc}</p>
                </div>

                <div className="drawer-actions">
                  <a
                    className="btn-editorial btn-primary mono"
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch live deployment <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="btn-editorial btn-secondary mono"
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inspect GitHub repository <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="drawer-section">
                  <h3 className="drawer-section-title mono">System Overview</h3>
                  <p className="drawer-copy">{activeProject.overview}</p>
                </div>

                <div className="drawer-section">
                  <h3 className="drawer-section-title mono">Key Architecture &amp; Primitives</h3>
                  <ul className="drawer-arch-list">
                    {activeProject.architecture.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="drawer-section">
                  <h3 className="drawer-section-title mono">Technical Stack</h3>
                  <ul className="drawer-tags">
                    {activeProject.tags.map((tag) => (
                      <li key={tag} className="chain-chip mono">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}

      <div className={`toast-notice mono ${copiedEmail ? "is-visible" : ""}`} role="status" aria-live="polite">
        Copied {email} to clipboard
      </div>
    </div>
  );
}
