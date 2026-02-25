import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Moon,
  Sun,
  Mail,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Code,
  Palette,
  Globe,
  Server,
  Briefcase,
  GraduationCap,
  Eye,
  Database,
} from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  color: string;
  link: string;
  github: string;
}

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

interface Experience {
  year: string;
  role: string;
  company: string;
  desc: string;
}

interface Education {
  year: string;
  degree: string;
  school: string;
  desc: string;
}

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface SectionBackdropProps {
  image: string;
  dark: boolean;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Resume" },
  { id: "projects", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const sectionBackgrounds: Record<string, string> = {
  home: "/agent-os.jpeg",
  about: "/vibe-agent.jpeg",
  skills: "/stableflow.jpeg",
  projects: "/crediprocure.jpeg",
  experience: "/trading-analytics.jpeg",
  contact: "/anchorguard-ai.jpeg",
};

const projects: Project[] = [
  {
    title: "Singular Yield",
    desc: "Autonomous Self-Driving Yield Engine on BNB Chain with automated harvesting and compounding strategies.",
    tags: ["Solidity", "React", "BNB Chain", "DeFi"],
    image: "/singular-yield.jpeg",
    color: "from-sky-500 to-cyan-500",
    link: "https://singular-yield.vercel.app",
    github: "https://github.com/panzauto46-bot/SingularYield",
  },
  {
    title: "agent.os",
    desc: "An autonomous AI Agent Operating System designed for complex task execution and orchestration.",
    tags: ["TypeScript", "AI Agents", "LLM", "Automation"],
    image: "/agent-os.jpeg",
    color: "from-indigo-500 to-cyan-500",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os",
  },
  {
    title: "InstaDrop",
    desc: "Instant Pay-to-Download Protocol built on the Stacks Blockchain, enabling seamless digital asset monetization.",
    tags: ["TypeScript", "Stacks", "Blockchain", "Web3"],
    image: "/instadrop.jpeg",
    color: "from-amber-500 to-orange-500",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web",
  },
  {
    title: "AnchorGuard AI",
    desc: "Advanced AI-powered security and monitoring solution for protecting digital assets and infrastructure.",
    tags: ["TypeScript", "AI", "Security", "Monitoring"],
    image: "/anchorguard-ai.jpeg",
    color: "from-cyan-500 to-blue-500",
    link: "https://anchor-guard-ai.vercel.app/",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI",
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    tags: ["TypeScript", "Crypto", "Trading", "Analytics"],
    image: "/bit-shadow.jpeg",
    color: "from-emerald-500 to-lime-500",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW",
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system aimed at streamlining detailed satinvoicing.",
    tags: ["TypeScript", "Bitcoin", "Procurement", "Inventory"],
    image: "/satsprocure.jpeg",
    color: "from-yellow-500 to-amber-500",
    link: "https://sats-procure.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-",
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    tags: ["TypeScript", "Solana", "Education", "Web3"],
    image: "/solforge.jpeg",
    color: "from-violet-500 to-indigo-500",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy",
  },
  {
    title: "CrediProcure",
    desc: "Decentralized B2B Invoice Financing Platform on Creditcoin.",
    tags: ["Solidity", "React", "Creditcoin", "RWA"],
    image: "/crediprocure.jpeg",
    color: "from-blue-500 to-indigo-500",
    link: "https://credi-procure.vercel.app/",
    github: "https://github.com/panzauto46-bot/CrediProcure",
  },
  {
    title: "CredPOS",
    desc: "DeFi-Integrated Point of Sale with Multi-Chain Wallet Connect.",
    tags: ["Kotlin", "Android", "Tezos", "Sui"],
    image: "/cred-pos.png",
    color: "from-green-500 to-teal-500",
    link: "https://credposappreview.vercel.app/",
    github: "https://github.com/panzauto46-bot/CredPOS",
  },
  {
    title: "Trading Analytics Dashboard",
    desc: "AI-Driven Trading Insights and Consistency Heatmap.",
    tags: ["Next.js", "AI", "Trading", "Analytics"],
    image: "/trading-analytics.jpeg",
    color: "from-slate-600 to-slate-800",
    link: "https://trading-analytics-dashboard-chi.vercel.app/",
    github: "https://github.com/panzauto46-bot/Trading-Analytics-Dashboard",
  },
  {
    title: "StableFlow",
    desc: "Institutional Treasury and Expense Management System on Solana.",
    tags: ["Solana", "USDC", "Treasury", "DeFi"],
    image: "/stableflow.jpeg",
    color: "from-cyan-400 to-blue-500",
    link: "https://stableflowweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/StableFlow",
  },
  {
    title: "VibeAgent",
    desc: "AI-Powered Financial Assistant on BNB Chain (Android App).",
    tags: ["Kotlin", "Android", "AI", "BNB Chain"],
    image: "/vibe-agent.jpeg",
    color: "from-yellow-400 to-orange-500",
    link: "https://vibeagentweb.vercel.app/",
    github: "https://github.com/panzauto46-bot/VibeAgent",
  },
];

const skills: Skill[] = [
  { name: "AI Agents and LLM (Groq, DeepSeek)", level: 95, icon: <Server size={16} /> },
  { name: "Multi-Chain Web3 (Solana, Stacks, BNB)", level: 92, icon: <Globe size={16} /> },
  { name: "Full-Stack (React, Next.js, Node.js)", level: 90, icon: <Code size={16} /> },
  { name: "Mobile Development (Kotlin, Android)", level: 88, icon: <Database size={16} /> },
  { name: "Smart Contracts (Solidity, Clarity, Rust)", level: 85, icon: <Code size={16} /> },
  { name: "RWA and Fintech Architecture", level: 88, icon: <Palette size={16} /> },
];

const experiences: Experience[] = [
  {
    year: "2024 - Present",
    role: "Web3 Architect and AI Engineer",
    company: "Freelance / Open Source",
    desc: "Building next-gen AI agent operating systems and decentralized protocols on Stacks and Solana.",
  },
  {
    year: "2023 - 2024",
    role: "Full Stack Developer",
    company: "Tech Projects",
    desc: "Developed high-frequency trading dashboards and secure inventory management systems for crypto assets.",
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Digital Solutions",
    desc: "Specialized in building responsive, interactive user interfaces for various web applications.",
  },
];

const education: Education[] = [
  {
    year: "2026",
    degree: "Continuous Learning",
    school: "Open Source Community",
    desc: "Active contributor and builder in the Web3 and AI space, constantly mastering new technologies.",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/panzauto46-bot", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pandu-darma-195a621b2/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/BTC_SEANA", label: "Twitter" },
];

const useInView = (threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
};

const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
  const [ref, isInView] = useInView(0.12);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity 0.62s ease ${delay}s, transform 0.62s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

const SectionBackdrop = ({ image, dark }: SectionBackdropProps) => (
  <div className="absolute inset-0">
    <img src={image} alt="" className="animate-bg-drift h-full w-full object-cover opacity-30" />
    <div
      className="absolute inset-0"
      style={{
        background: dark
          ? "linear-gradient(105deg, rgba(3,8,16,0.97) 0%, rgba(6,14,28,0.85) 45%, rgba(2,8,20,0.97) 100%)"
          : "linear-gradient(105deg, rgba(248,250,252,0.95) 0%, rgba(226,232,240,0.85) 45%, rgba(241,245,249,0.95) 100%)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: dark
          ? "radial-gradient(circle at 18% 20%, rgba(56,189,248,0.16), transparent 46%), radial-gradient(circle at 85% 80%, rgba(251,191,36,0.12), transparent 42%)"
          : "radial-gradient(circle at 18% 20%, rgba(14,116,144,0.1), transparent 48%), radial-gradient(circle at 85% 80%, rgba(217,119,6,0.1), transparent 42%)",
      }}
    />
  </div>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = [...navItems]
        .reverse()
        .find((item) => {
          const section = document.getElementById(item.id);
          return section ? window.scrollY + 220 >= section.offsetTop : false;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const theme = dark
    ? {
        shell: "bg-[#020712] text-slate-100",
        nav: "bg-[#040a16]/80 border-slate-700/60 shadow-[0_10px_40px_rgba(2,6,23,0.55)]",
        navItem: "text-slate-300 hover:text-cyan-300",
        navActive: "bg-cyan-300 text-slate-950 shadow-[0_8px_24px_rgba(34,211,238,0.32)]",
        panel: "bg-[#081220]/72 border-cyan-500/25",
        card: "bg-[#0a172a]/78 border-slate-700/70",
        textMuted: "text-slate-300/85",
        textSoft: "text-slate-400",
        accentText: "text-cyan-300",
        primaryButton: "bg-cyan-300 text-slate-950 hover:bg-cyan-200",
        secondaryButton: "border-slate-500/70 text-slate-100 hover:border-cyan-300 hover:text-cyan-300",
        socialButton: "border-slate-600/70 bg-[#091428]/80 hover:border-cyan-300 hover:text-cyan-300",
        chip: "border-slate-600/70 bg-[#091428]/85",
        input:
          "bg-[#081423]/85 border-slate-600/70 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:ring-cyan-300/25",
        footer: "border-slate-700/70",
      }
    : {
        shell: "bg-slate-100 text-slate-900",
        nav: "bg-white/85 border-slate-300/80 shadow-[0_10px_35px_rgba(15,23,42,0.08)]",
        navItem: "text-slate-600 hover:text-sky-700",
        navActive: "bg-sky-700 text-white shadow-[0_8px_20px_rgba(3,105,161,0.24)]",
        panel: "bg-white/75 border-sky-200/70",
        card: "bg-white/85 border-slate-200/90",
        textMuted: "text-slate-700",
        textSoft: "text-slate-500",
        accentText: "text-sky-700",
        primaryButton: "bg-sky-700 text-white hover:bg-sky-600",
        secondaryButton: "border-slate-300 text-slate-800 hover:border-sky-600 hover:text-sky-700",
        socialButton: "border-slate-300 bg-white/90 hover:border-sky-600 hover:text-sky-700",
        chip: "border-slate-300 bg-white/90",
        input:
          "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-sky-600 focus:ring-sky-500/25",
        footer: "border-slate-300/90",
      };

  return (
    <div className={`${theme.shell} relative min-h-screen overflow-hidden transition-colors duration-500`}>
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          className={`animate-aurora-a absolute -left-28 -top-24 h-[26rem] w-[26rem] rounded-full blur-3xl ${
            dark ? "bg-cyan-400/20" : "bg-sky-400/20"
          }`}
        />
        <div
          className={`animate-aurora-b absolute -bottom-28 right-[-7rem] h-[30rem] w-[30rem] rounded-full blur-3xl ${
            dark ? "bg-blue-500/16" : "bg-indigo-400/18"
          }`}
        />
        <div
          className={`animate-grid-float absolute inset-0 ${dark ? "opacity-[0.18]" : "opacity-[0.16]"}`}
          style={{
            backgroundImage: dark
              ? "linear-gradient(rgba(56,189,248,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)"
              : "linear-gradient(rgba(14,116,144,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,144,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <nav className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-1.5rem))] -translate-x-1/2">
        <div className={`rounded-2xl border px-4 py-3 backdrop-blur-xl transition-colors ${theme.nav}`}>
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={() => scrollTo("home")}
              className="display-font text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300"
            >
              Pandu Darma
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition-all duration-300 ${
                    activeSection === item.id ? theme.navActive : theme.navItem
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="mailto:pandudargah202@gmail.com"
                className={`hidden lg:flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] ${theme.chip}`}
              >
                <Mail size={12} />
                pandudargah202@gmail.com
              </a>
              <button
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
                className={`rounded-full border p-2 transition-colors ${theme.secondaryButton}`}
              >
                {dark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </div>
          </div>

          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.08em] transition-all duration-300 ${
                  activeSection === item.id ? theme.navActive : theme.navItem
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className={`mt-2 h-px overflow-hidden rounded-full ${dark ? "bg-cyan-200/10" : "bg-sky-900/10"}`}>
            <div className={`run-line h-full w-20 ${dark ? "bg-cyan-300/70" : "bg-sky-700/60"}`} />
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.home} dark={dark} />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-[62%]"
            style={{
              background: dark
                ? "linear-gradient(125deg, rgba(4,10,20,0.92) 0%, rgba(4,10,20,0.76) 50%, rgba(4,10,20,0.0) 100%)"
                : "linear-gradient(125deg, rgba(248,250,252,0.92) 0%, rgba(248,250,252,0.78) 50%, rgba(248,250,252,0.0) 100%)",
            }}
          />

          <div className="relative z-10 mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl flex-col justify-center">
            <AnimatedSection className="max-w-3xl">
              <span
                className={`inline-flex rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                  dark ? "border-cyan-400/40 bg-cyan-500/10 text-cyan-200" : "border-sky-300 bg-sky-50 text-sky-700"
                }`}
              >
                Available for freelance work
              </span>
              <h1 className="display-font mt-6 text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Pandu Darma
                <br />
                <span className={theme.accentText}>Anugrah</span>
              </h1>
              <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${theme.textMuted}`}>
                Versatile Full-Stack Engineer and Web3 Architect. I turn complex technical systems into products that
                ship, scale, and generate impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("projects")}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${theme.primaryButton}`}
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${theme.secondaryButton}`}
                >
                  Contact Me
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="mt-10">
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${theme.socialButton}`}
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.18} className="mt-10">
              <button
                onClick={() => scrollTo("about")}
                className={`group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] ${theme.textSoft}`}
              >
                Scroll
                <ChevronDown size={14} className="animate-bounce-soft" />
              </button>
            </AnimatedSection>
          </div>
        </section>

        <section id="about" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.about} dark={dark} />
          <div className="relative z-10 mx-auto max-w-4xl items-center">
            <AnimatedSection>
              <div className={`rounded-3xl border p-8 backdrop-blur-md sm:p-10 ${theme.panel}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>About</p>
                <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">Passionate About Code and Design</h2>
                <p className={`mt-6 text-sm leading-relaxed sm:text-base ${theme.textMuted}`}>
                  I am a Versatile Full-Stack Engineer and Web3 Architect with a deep focus on <strong>Autonomous AI
                  Agents</strong> and <strong>Multi-Chain DeFi Ecosystems</strong>.
                </p>
                <p className={`mt-4 text-sm leading-relaxed sm:text-base ${theme.textMuted}`}>
                  My work spans from engineering AI-driven Operating Systems and Financial Assistants (like <em>agent.os</em>
                  and <em>VibeAgent</em>) to architecting Institutional Treasury Systems and RWA Financing Platforms
                  (like <em>StableFlow</em> and <em>CrediProcure</em>).
                </p>
                <p className={`mt-4 text-sm leading-relaxed sm:text-base ${theme.textMuted}`}>
                  I specialize in merging Artificial Intelligence with Blockchain Technology across Solana, BNB Chain,
                  and EVM networks to build systems that are not just functional, but revolutionary.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${theme.chip}`}>
                    <Mail size={14} />
                    pandudargah202@gmail.com
                  </span>
                  <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs ${theme.chip}`}>
                    <MapPin size={14} />
                    Indonesia
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="skills" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.skills} dark={dark} />
          <div className="relative z-10 mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-10">
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>Resume</p>
                <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">Software Skills and Capabilities</h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <AnimatedSection key={skill.name} delay={index * 0.06}>
                    <div className={`rounded-2xl border p-5 backdrop-blur-md transition-all duration-300 ${theme.card}`}>
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-lg ${
                              dark ? "bg-cyan-400/12 text-cyan-200" : "bg-sky-100 text-sky-700"
                            }`}
                          >
                            {skill.icon}
                          </span>
                          <span className="text-sm font-semibold">{skill.name}</span>
                        </div>
                        <span className={`text-xs font-semibold ${theme.accentText}`}>{skill.level}%</span>
                      </div>
                      <div className={`h-2 overflow-hidden rounded-full ${dark ? "bg-slate-800" : "bg-slate-200"}`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-[width] duration-[1200ms]"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="space-y-5">
                <AnimatedSection delay={0.16}>
                  <div className={`rounded-2xl border p-6 backdrop-blur-md ${theme.panel}`}>
                    <h3 className="display-font text-lg font-semibold">What Can I Do?</h3>
                    <ul className={`mt-4 space-y-2 text-sm leading-relaxed ${theme.textMuted}`}>
                      <li>Autonomous AI Agent System Architecture</li>
                      <li>Multi-Chain dApp and DeFi Product Engineering</li>
                      <li>Smart Contract and Treasury Infrastructure Design</li>
                      <li>Crypto Trading Analytics and Monitoring Platforms</li>
                    </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.22}>
                  <div className={`rounded-2xl border p-6 backdrop-blur-md ${theme.card}`}>
                    <h3 className="display-font text-lg font-semibold">Design and Build Focus</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "AI Agents",
                        "Web3 Ecosystem",
                        "Fintech",
                        "Automation",
                        "RWA",
                        "Product Strategy",
                        "Security",
                        "Performance",
                      ].map((item) => (
                        <span key={item} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${theme.chip}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.projects} dark={dark} />
          <div className="relative z-10 mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-10">
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>Portfolio</p>
                <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">Featured Projects</h2>
                <p className={`mt-4 max-w-2xl text-sm leading-relaxed ${theme.textMuted}`}>
                  A curated selection of projects showcasing expertise in design, development, and end-to-end product
                  execution.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <AnimatedSection key={project.title} delay={index * 0.04}>
                  <article
                    className={`group overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                      hoveredProject === index
                        ? `${theme.panel} shadow-[0_16px_35px_rgba(8,145,178,0.22)]`
                        : theme.card
                    }`}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.color}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <button
                          onClick={() => setPreviewProject(project)}
                          className="rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
                          aria-label={`Preview ${project.title}`}
                        >
                          <Eye size={14} />
                        </button>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
                          aria-label={`Open ${project.title} source`}
                        >
                          <Github size={14} />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/35"
                          aria-label={`Open ${project.title} demo`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="display-font text-lg font-semibold">{project.title}</h3>
                      <p className={`mt-2 text-sm leading-relaxed ${theme.textMuted}`}>{project.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${theme.chip}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.experience} dark={dark} />
          <div className="relative z-10 mx-auto max-w-6xl">
            <AnimatedSection>
              <div className="mb-10">
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>Experience</p>
                <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">Background and Education</h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className={`rounded-3xl border p-6 backdrop-blur-md sm:p-8 ${theme.panel}`}>
                <div className="mb-6 flex items-center gap-2">
                  <Briefcase size={18} className={dark ? "text-cyan-300" : "text-sky-700"} />
                  <h3 className="display-font text-xl font-semibold">Work Experience</h3>
                </div>
                <div className="space-y-4">
                  {experiences.map((item, index) => (
                    <AnimatedSection key={item.role} delay={index * 0.06}>
                      <div className={`rounded-2xl border p-5 ${theme.card}`}>
                        <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${theme.accentText}`}>{item.year}</p>
                        <h4 className="mt-2 text-base font-semibold">{item.role}</h4>
                        <p className={`mt-1 text-sm ${theme.textSoft}`}>{item.company}</p>
                        <p className={`mt-3 text-sm leading-relaxed ${theme.textMuted}`}>{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <div className={`rounded-3xl border p-6 backdrop-blur-md sm:p-8 ${theme.card}`}>
                <div className="mb-6 flex items-center gap-2">
                  <GraduationCap size={18} className={dark ? "text-amber-300" : "text-amber-700"} />
                  <h3 className="display-font text-xl font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((item, index) => (
                    <AnimatedSection key={item.degree} delay={index * 0.06}>
                      <div className={`rounded-2xl border p-5 ${theme.card}`}>
                        <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${theme.accentText}`}>{item.year}</p>
                        <h4 className="mt-2 text-base font-semibold">{item.degree}</h4>
                        <p className={`mt-1 text-sm ${theme.textSoft}`}>{item.school}</p>
                        <p className={`mt-3 text-sm leading-relaxed ${theme.textMuted}`}>{item.desc}</p>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative min-h-screen overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
          <SectionBackdrop image={sectionBackgrounds.contact} dark={dark} />
          <div className="relative z-10 mx-auto max-w-4xl">
            <AnimatedSection>
              <div className="mb-10 text-center">
                <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${theme.accentText}`}>Contact</p>
                <h2 className="display-font mt-3 text-3xl font-bold sm:text-4xl">Let's Work Together</h2>
                <p className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${theme.textMuted}`}>
                  Have a project in mind? Send your details and I will get back to you with the best execution plan.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <div className="mb-8 flex flex-wrap justify-center gap-3">
                <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${theme.chip}`}>
                  <Mail size={15} />
                  pandudargah202@gmail.com
                </span>
                <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${theme.chip}`}>
                  <Github size={15} />
                  panzauto46-bot
                </span>
                <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${theme.chip}`}>
                  <MapPin size={15} />
                  Indonesia
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <form
                action="https://formsubmit.co/pandudargah202@gmail.com"
                method="POST"
                className={`rounded-3xl border p-6 backdrop-blur-md sm:p-8 ${theme.panel}`}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New submission from Portfolio!" />
                <input type="hidden" name="_template" value="table" />

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] ${theme.textSoft}`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${theme.input}`}
                    />
                  </div>
                  <div>
                    <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] ${theme.textSoft}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${theme.input}`}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] ${theme.textSoft}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Discussion"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${theme.input}`}
                  />
                </div>

                <div className="mb-6">
                  <label className={`mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] ${theme.textSoft}`}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 ${theme.input}`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${theme.primaryButton}`}
                >
                  Send Message
                </button>
              </form>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className={`border-t px-4 py-8 sm:px-6 lg:px-8 ${theme.footer}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className={`text-xs ${theme.textSoft}`}>© 2026 Pandu Darma Anugrah. Crafted with focus and consistency.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full border p-2 transition-colors ${theme.socialButton}`}
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {previewProject && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreviewProject(null)}
        >
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-3xl overflow-hidden rounded-3xl border ${theme.panel}`}
            onClick={(event) => event.stopPropagation()}
            style={{ animation: "zoomIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className={`relative h-56 bg-gradient-to-br ${previewProject.color}`}>
              <img src={previewProject.image} alt={previewProject.title} className="h-full w-full object-cover" />
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/55 bg-black/35 px-3 py-1 text-sm text-white backdrop-blur-sm"
              >
                Close
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="display-font text-2xl font-bold">{previewProject.title}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${theme.textMuted}`}>{previewProject.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {previewProject.tags.map((tag) => (
                  <span key={tag} className={`rounded-full border px-3 py-1.5 text-xs font-medium ${theme.chip}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={previewProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${theme.primaryButton}`}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={previewProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${theme.secondaryButton}`}
                >
                  <Github size={14} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        * {
          scroll-behavior: smooth;
        }
        .no-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes auroraA {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(8%, 6%, 0) scale(1.06);
          }
          100% {
            transform: translate3d(0, 12%, 0) scale(0.98);
          }
        }
        .animate-aurora-a {
          animation: auroraA 22s ease-in-out infinite alternate;
        }
        @keyframes auroraB {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-8%, -5%, 0) scale(1.04);
          }
          100% {
            transform: translate3d(-2%, 6%, 0) scale(0.96);
          }
        }
        .animate-aurora-b {
          animation: auroraB 26s ease-in-out infinite alternate;
        }
        @keyframes gridFloat {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-14px, -10px, 0);
          }
          100% {
            transform: translate3d(0, -20px, 0);
          }
        }
        .animate-grid-float {
          animation: gridFloat 20s linear infinite;
        }
        @keyframes bgDrift {
          0% {
            transform: scale(1.08) translate3d(0, 0, 0);
          }
          50% {
            transform: scale(1.04) translate3d(-1.1%, 1%, 0);
          }
          100% {
            transform: scale(1) translate3d(0, 0, 0);
          }
        }
        .animate-bg-drift {
          animation: bgDrift 18s ease-in-out infinite alternate;
          transform-origin: center;
        }
        @keyframes runLine {
          0% {
            opacity: 0;
            transform: translateX(-140%);
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(420%);
          }
        }
        .run-line {
          animation: runLine 4.8s linear infinite;
          will-change: transform;
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.88);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounceSoft {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(6px);
          }
        }
        .animate-bounce-soft {
          animation: bounceSoft 2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-aurora-a,
          .animate-aurora-b,
          .animate-grid-float,
          .animate-bg-drift,
          .run-line,
          .animate-bounce-soft {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

