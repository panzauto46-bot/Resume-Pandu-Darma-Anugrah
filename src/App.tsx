import { useState, useEffect, useRef, ReactNode } from "react";
import { Moon, Sun, Mail, MapPin, ExternalLink, Github, Linkedin, Twitter, ChevronDown, Code, Palette, Globe, Server, ArrowUp, Star, Calendar, Briefcase, GraduationCap, Award, Eye, Database } from "lucide-react";

// Define interfaces for data structures
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

// Hook with proper types
const useInView = (threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isInView];
};

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ children, delay = 0, className = "" }: AnimatedSectionProps) => {
  const [ref, isInView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(60px) scale(0.92)",
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const projects: Project[] = [
  {
    title: "agent.os",
    desc: "An autonomous AI Agent Operating System designed for complex task execution and orchestration.",
    tags: ["TypeScript", "AI Agents", "LLM", "Automation"],
    image: "/agent-os.jpeg",
    color: "from-violet-500 to-purple-600",
    link: "https://agent-os-id.vercel.app",
    github: "https://github.com/panzauto46-bot/agent.os",
  },
  {
    title: "InstaDrop",
    desc: "Instant Pay-to-Download Protocol built on the Stacks Blockchain, enabling seamless digital asset monetization.",
    tags: ["TypeScript", "Stacks", "Blockchain", "Web3"],
    image: "⚡",
    color: "from-orange-500 to-red-600",
    link: "https://instadrop402.vercel.app/",
    github: "https://github.com/panzauto46-bot/InstaDrop402web",
  },
  {
    title: "AnchorGuard AI",
    desc: "Advanced AI-powered security and monitoring solution for protecting digital assets and infrastructure.",
    tags: ["TypeScript", "AI", "Security", "Monitoring"],
    image: "🛡️",
    color: "from-cyan-500 to-blue-600",
    link: "https://anchorguard-ai.vercel.app",
    github: "https://github.com/panzauto46-bot/AnchorGuard-AI",
  },
  {
    title: "BIT-SHADOW",
    desc: "High-frequency crypto trading dashboard and analytics platform for real-time market insights.",
    tags: ["TypeScript", "Crypto", "Trading", "Analytics"],
    image: "📈",
    color: "from-emerald-500 to-green-600",
    link: "https://bit-shadow.vercel.app",
    github: "https://github.com/panzauto46-bot/BIT-SHADOW",
  },
  {
    title: "SatsProcure",
    desc: "Bitcoin inventory and procurement management system aimed at streamlining detailed satinvoicing.",
    tags: ["TypeScript", "Bitcoin", "Procurement", "Inventory"],
    image: "₿",
    color: "from-amber-500 to-orange-600",
    link: "https://satsprocure-atau-btcinventory.vercel.app",
    github: "https://github.com/panzauto46-bot/SatsProcure-atau-BtcInventory-",
  },
  {
    title: "SolForge Academy",
    desc: "Educational platform and resource hub for Solana blockchain development and smart contract engineering.",
    tags: ["TypeScript", "Solana", "Education", "Web3"],
    image: "🎓",
    color: "from-purple-500 to-indigo-600",
    link: "https://solforge-academy.vercel.app",
    github: "https://github.com/panzauto46-bot/SolForge-Academy",
  },
];

const skills: Skill[] = [
  { name: "TypeScript / JavaScript", level: 95, icon: <Code size={16} /> },
  { name: "React / Next.js", level: 90, icon: <Code size={16} /> },
  { name: "Web3 / Blockchain", level: 92, icon: <Globe size={16} /> },
  { name: "AI / LLM Integration", level: 88, icon: <Server size={16} /> },
  { name: "Solana / Stacks", level: 85, icon: <Database size={16} /> },
  { name: "System Architecture", level: 85, icon: <Palette size={16} /> },
];

const experiences: Experience[] = [
  { year: "2024 — Present", role: "Web3 Architect & AI Engineer", company: "Freelance / Open Source", desc: "Building next-gen AI agent operating systems and decentralized protocols on Stacks and Solana." },
  { year: "2023 — 2024", role: "Full Stack Developer", company: "Tech Projects", desc: "Developed high-frequency trading dashboards and secure inventory management systems for crypto assets." },
  { year: "2022 — 2023", role: "Frontend Developer", company: "Digital Solutions", desc: "Specialized in building responsive, interactive user interfaces for various web applications." },
];

const education: Education[] = [
  { year: "2026", degree: "Continuous Learning", school: "Open Source Community", desc: "Active contributor and builder in the Web3 and AI space, constantly mastering new technologies." },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
      setShowTop((window.scrollY || document.documentElement.scrollTop) > 400);
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && (window.scrollY || document.documentElement.scrollTop) >= el.offsetTop - 200) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = dark ? "bg-gray-950" : "bg-gray-50";
  const text = dark ? "text-gray-100" : "text-gray-900";
  const textSub = dark ? "text-gray-400" : "text-gray-500";
  const card = dark ? "bg-gray-900/70 border-gray-800" : "bg-white/80 border-gray-200";
  const navBg = dark ? "bg-gray-950/80 border-gray-800" : "bg-white/80 border-gray-200";
  const accent = "text-violet-400";
  const accentBg = "bg-violet-500";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <div className={`${bg} ${text} min-h-screen transition-colors duration-500 relative`}>
      {/* Floating Nav */}
      <nav
        className={`fixed top-4 left-1/2 z-50 border rounded-full px-2 py-2 flex items-center gap-1 backdrop-blur-xl ${navBg}`}
        style={{ transform: "translateX(-50%)", transition: "all 0.3s ease" }}
      >
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium capitalize transition-all duration-300 ${activeSection === item
              ? `${accentBg} text-white shadow-lg shadow-violet-500/25`
              : `${textSub} hover:text-violet-400`
              }`}
          >
            {item}
          </button>
        ))}
        <div className={`w-px h-5 mx-1 ${dark ? "bg-gray-700" : "bg-gray-300"}`} />
        <button
          onClick={() => setDark(!dark)}
          className={`p-2 rounded-full transition-all duration-300 ${dark ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {dark ? <Sun size={14} /> : <Moon size={14} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated BG orbs */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-violet-600"
          style={{
            top: "10%", left: "15%",
            transform: `translate(${Math.sin(scrollY * 0.002) * 30}px, ${Math.cos(scrollY * 0.002) * 20}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div
          className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl bg-cyan-500"
          style={{
            bottom: "15%", right: "10%",
            transform: `translate(${Math.cos(scrollY * 0.003) * 25}px, ${Math.sin(scrollY * 0.003) * 25}px)`,
            transition: "transform 0.1s linear",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl bg-pink-500"
          style={{
            top: "50%", left: "60%",
            transform: `translate(${Math.sin(scrollY * 0.004) * 20}px, ${Math.cos(scrollY * 0.004) * 15}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        <div className="text-center z-10 px-6">
          <AnimatedSection delay={0}>
            <div className="mb-6 inline-block">
              <div
                className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 mx-auto flex items-center justify-center text-4xl shadow-2xl shadow-violet-500/30"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                👨‍💻
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-6 border ${dark ? "bg-violet-500/10 border-violet-500/30 text-violet-300" : "bg-violet-50 border-violet-200 text-violet-600"}`}>
              ✨ Available for Freelance Work
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Pandu Darma Anugrah
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.45}>
            <p className={`text-lg md:text-xl ${textSub} max-w-xl mx-auto mb-8 leading-relaxed`}>
              Versatile Full-Stack Engineer & Web3 Architect. I turn complex problems into shipping products.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <div className="flex items-center justify-center gap-4 mb-10">
              <button onClick={() => scrollTo("projects")} className={`${accentBg} text-white px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5`}>
                View Projects
              </button>
              <button onClick={() => scrollTo("contact")} className={`border ${dark ? "border-gray-700 hover:border-violet-500" : "border-gray-300 hover:border-violet-400"} px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:-translate-y-0.5`}>
                Contact Me
              </button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.75}>
            <div className="flex items-center justify-center gap-4">
              {[
                { Icon: Github, href: "https://github.com/panzauto46-bot" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/pandu-darma-195a621b2/" },
                { Icon: Twitter, href: "https://x.com/BTC_SEANA" }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${dark ? "border-gray-800 bg-gray-900/50 hover:border-violet-500 hover:shadow-violet-500/10" : "border-gray-200 bg-white hover:border-violet-400 hover:shadow-violet-500/10"}`}>
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.9}>
            <button onClick={() => scrollTo("about")} className={`mt-16 ${textSub} flex flex-col items-center gap-2 mx-auto`} style={{ animation: "bounce 2s infinite" }}>
              <span className="text-xs">Scroll Down</span>
              <ChevronDown size={16} />
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className={`text-xs font-medium uppercase tracking-widest ${accent}`}>About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Passionate About Code & Design</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className={`p-6 rounded-2xl border backdrop-blur-sm ${card}`}>
                <p className={`${textSub} leading-relaxed text-sm`}>
                  Versatile Full-Stack Engineer & Web3 Architect. I turn complex problems into shipping products. From AI-Agent OS to High-Frequency Trading Dashboards—I build scalable systems that bridge the gap between traditional web and decentralized technologies.
                </p>
                <p className={`${textSub} leading-relaxed text-sm mt-4`}>
                  I'm passionate about clean code, autonomous agents, and blockchain innovation. When I'm not coding, you'll find me exploring new DeFi protocols or contributing to the open-source community.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "50+", label: "Projects Completed", icon: <Briefcase size={18} /> },
                  { num: "30+", label: "Happy Clients", icon: <Star size={18} /> },
                  { num: "5+", label: "Years Experience", icon: <Calendar size={18} /> },
                  { num: "10+", label: "Awards Won", icon: <Award size={18} /> },
                ].map((stat, i) => (
                  <div key={i} className={`p-4 rounded-2xl border text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${card}`}>
                    <div className={`${accent} mb-2 flex justify-center`}>{stat.icon}</div>
                    <div className="text-2xl font-bold">{stat.num}</div>
                    <div className={`text-xs ${textSub} mt-1`}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className={`text-xs font-medium uppercase tracking-widest ${accent}`}>My Skills</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Technologies I Work With</h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`p-4 rounded-2xl border backdrop-blur-sm ${card} transition-all duration-300 hover:-translate-y-0.5`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${dark ? "bg-violet-500/10 text-violet-400" : "bg-violet-50 text-violet-600"}`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className={`text-xs font-semibold ${accent}`}>{skill.level}%</span>
                  </div>
                  <div className={`h-1.5 rounded-full ${dark ? "bg-gray-800" : "bg-gray-100"} overflow-hidden`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                      style={{
                        width: `${skill.level}%`,
                        transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className={`text-xs font-medium uppercase tracking-widest ${accent}`}>Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
              <p className={`${textSub} mt-3 text-sm max-w-lg mx-auto`}>
                A curated selection of projects showcasing my expertise in design, development, and problem-solving.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className={`group rounded-2xl border overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card} ${hoveredProject === i ? (dark ? "shadow-violet-500/10 border-violet-500/30" : "shadow-violet-500/15 border-violet-300") : ""
                    }`}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    {(project.image.startsWith("/") || project.image.startsWith("http")) ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <span className="relative z-10 group-hover:scale-125 transition-transform duration-500">{project.image}</span>
                    )}
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button
                        onClick={() => setPreviewProject(project)}
                        className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white"
                      >
                        <Eye size={16} />
                      </button>
                      <a href={project.github} className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white">
                        <Github size={16} />
                      </a>
                      <a href={project.link} className="p-2.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors text-white">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-base mb-2">{project.title}</h3>
                    <p className={`text-xs ${textSub} leading-relaxed mb-4`}>{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, j) => (
                        <span key={j} className={`text-xs px-2.5 py-1 rounded-full font-medium ${dark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ animation: "fadeIn 0.3s ease" }}
          onClick={() => setPreviewProject(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className={`relative w-full max-w-2xl rounded-3xl border overflow-hidden ${card}`}
            style={{ animation: "zoomIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-52 bg-gradient-to-br ${previewProject.color} flex items-center justify-center text-7xl relative`}>
              <div className="absolute inset-0 bg-black/10" />
              {(previewProject.image.startsWith("/") || previewProject.image.startsWith("http")) ? (
                <img
                  src={previewProject.image}
                  alt={previewProject.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="relative z-10">{previewProject.image}</span>
              )}
              <button
                onClick={() => setPreviewProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-black/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center text-sm hover:bg-black/50 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{previewProject.title}</h3>
              <p className={`${textSub} leading-relaxed text-sm mb-6`}>{previewProject.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {previewProject.tags.map((tag, j) => (
                  <span key={j} className={`text-xs px-3 py-1.5 rounded-full font-medium ${dark ? "bg-violet-500/10 text-violet-300 border border-violet-500/20" : "bg-violet-50 text-violet-600 border border-violet-200"}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={previewProject.link} className={`${accentBg} text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-violet-500/30 transition-all`}>
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a href={previewProject.github} className={`border ${dark ? "border-gray-700" : "border-gray-300"} px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all hover:-translate-y-0.5`}>
                  <Github size={14} /> Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience & Education */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className={`text-xs font-medium uppercase tracking-widest ${accent}`}>Background</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Experience & Education</h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase size={18} className="text-violet-400" />
                  <h3 className="text-lg font-semibold">Work Experience</h3>
                </div>
              </AnimatedSection>
              <div className="space-y-4">
                {experiences.map((exp, i) => (
                  <AnimatedSection key={i} delay={i * 0.12}>
                    <div className={`p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${card} relative`}>
                      <div className={`absolute top-5 left-5 w-2 h-2 rounded-full ${accentBg}`} />
                      <div className="pl-5">
                        <span className={`text-xs ${accent} font-medium`}>{exp.year}</span>
                        <h4 className="font-semibold text-sm mt-1">{exp.role}</h4>
                        <p className={`text-xs ${textSub} mt-0.5`}>{exp.company}</p>
                        <p className={`text-xs ${textSub} mt-2 leading-relaxed`}>{exp.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap size={18} className="text-cyan-400" />
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
              </AnimatedSection>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <AnimatedSection key={i} delay={i * 0.12}>
                    <div className={`p-5 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${card} relative`}>
                      <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-cyan-500" />
                      <div className="pl-5">
                        <span className="text-xs text-cyan-400 font-medium">{edu.year}</span>
                        <h4 className="font-semibold text-sm mt-1">{edu.degree}</h4>
                        <p className={`text-xs ${textSub} mt-0.5`}>{edu.school}</p>
                        <p className={`text-xs ${textSub} mt-2 leading-relaxed`}>{edu.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className={`text-xs font-medium uppercase tracking-widest ${accent}`}>Get In Touch</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
              <p className={`${textSub} mt-3 text-sm`}>
                Have a project in mind? Feel free to reach out and let's create something amazing.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {[
                { icon: <Mail size={16} />, label: "pandudargah202@gmail.com", color: "violet" },
                { icon: <Github size={16} />, label: "panzauto46-bot", color: "cyan" },
                { icon: <MapPin size={16} />, label: "Indonesia", color: "pink" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm ${card} transition-all hover:-translate-y-0.5`}>
                  <span className={accent}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form
              action="https://formsubmit.co/pandudargah202@gmail.com"
              method="POST"
              className={`p-8 rounded-3xl border backdrop-blur-sm ${card}`}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New submission from Portfolio!" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`text-xs font-medium ${textSub} mb-1.5 block`}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${dark ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  />
                </div>
                <div>
                  <label className={`text-xs font-medium ${textSub} mb-1.5 block`}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${dark ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className={`text-xs font-medium ${textSub} mb-1.5 block`}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project Discussion"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${dark ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                />
              </div>
              <div className="mb-6">
                <label className={`text-xs font-medium ${textSub} mb-1.5 block`}>Message</label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-300 resize-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${dark ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
                />
              </div>
              <button type="submit" className={`w-full ${accentBg} text-white py-3.5 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0`}>
                Send Message ✉️
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${dark ? "border-gray-800" : "border-gray-200"}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${textSub}`}>© 2026 Pandu Darma Anugrah. Crafted with ❤️ and lots of ☕</p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/panzauto46-bot" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/pandu-darma-195a621b2/" },
              { Icon: Twitter, href: "https://x.com/BTC_SEANA" }
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`${textSub} hover:text-violet-400 transition-colors`}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full ${accentBg} text-white shadow-lg shadow-violet-500/30 transition-all duration-500 hover:-translate-y-1 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <ArrowUp size={18} />
      </button>

      {/* Global Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        * { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 999px; }
      `}</style>
    </div>
  );
}
