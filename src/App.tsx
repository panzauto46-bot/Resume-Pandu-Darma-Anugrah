import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Languages,
  Github,
  ExternalLink,
} from "lucide-react";

// Existing Data extracted from the old App.tsx
const projects = [
  { title: "NEXUS-FORGE", desc: "Autonomous AI hackathon agent that generates production-grade React apps...", link: "https://nexus-forge-ai.vercel.app/", github: "https://github.com/panzauto46-bot/Nexus-Forge", img: "" },
  { title: "NEXUS-CASH", desc: "Bitcoin Cash point-of-sale system for merchants with real-time BCH checkout...", link: "https://nexus-cash.vercel.app", github: "https://github.com/panzauto46-bot/NEXUS-CASH", img: "" },
  { title: "OMNI-CORE", desc: "On-chain multi-agent neural interface that combines Groq-powered AI reasoning with smart node delegation.", link: "https://omni-core-id.vercel.app", github: "https://github.com/panzauto46-bot/OMNI-CORE-On-chain-Multi-agent-Neural-Interface-", img: "" },
  { title: "AEGIS.OS", desc: "Self-funding AI smart contract auditor on Base L2 with USDC payment flow.", link: "https://aegis-os-id.vercel.app/", github: "https://github.com/panzauto46-bot/AEGIS.OS", img: "" },
  { title: "SSS-FORGE", desc: "Solana Stablecoin Standard protocol with Anchor smart contracts...", link: "https://sss-forge.vercel.app", github: "https://github.com/panzauto46-bot/SSS-Forge", img: "" },
  { title: "agent.os", desc: "An autonomous AI Agent Operating System designed for complex task execution.", link: "https://agent-os-id.vercel.app", github: "https://github.com/panzauto46-bot/agent.os", img: "" },
];

const skills = [
  { name: "React", percent: 90 },
  { name: "Tailwind CSS", percent: 85 },
  { name: "AI/LLM (Groq, DeepSeek)", percent: 85 },
  { name: "Solana/Web3", percent: 80 },
  { name: "Node.js", percent: 75 },
];

const educationData = [
  { degree: "Blockchain Dev", school: "Superteam Academy", year: "2023 - 2024" },
  { degree: "Full Stack Web Development", school: "Tech Academy", year: "2020 - 2023" },
];

const certsData = [
  { name: "Web3 Expert", issuer: "Solana Foundation" },
  { name: "Advanced React", issuer: "Frontend Masters" },
];

const langData = [
  { name: "Indonesian", level: "Native", code: "ID", percent: 100 },
  { name: "English", level: "Fluent", code: "EN", percent: 85 },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", icon: Home },
    { id: "skills", icon: Briefcase },
    { id: "portfolio", icon: FolderOpen },
    { id: "education", icon: GraduationCap },
    { id: "languages", icon: Languages },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050810] text-slate-300 font-sans pb-24 selection:bg-cyan-500/30">
      
      {/* Floating Left Navigation */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4 glass-card p-3 rounded-[3rem]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`p-3 rounded-full transition-all duration-300 border ${
                isActive
                  ? "nav-item-active"
                  : "border-transparent text-slate-500 hover:text-cyan-400 hover:bg-cyan-900/20"
              }`}
            >
              <Icon size={20} className={isActive ? "drop-shadow-[0_0_8px_rgba(14,165,233,1)]" : ""} />
            </button>
          );
        })}
      </nav>

      <main className="max-w-6xl mx-auto px-4 lg:pl-28 pt-10 lg:pt-20 space-y-12 lg:space-y-24">
        
        {/* HERO SECTION */}
        <section id="home" className="relative glass-card rounded-3xl p-8 lg:p-16 overflow-hidden min-h-[60vh] flex flex-col items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-[600px] bg-radial-glow opacity-60 z-0"></div>
          
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full avatar-glow p-1 bg-gradient-to-br from-cyan-400 to-blue-600 mb-8 animate-float">
              <img src="/avatar.png" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-gradient">Pandu Darma</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-cyan-400 font-semibold mb-6">
              I'm a Full-Stack Web3 Developer
            </h2>
            <p className="max-w-2xl text-slate-400 mb-10 text-sm lg:text-base leading-relaxed">
              Building autonomous systems, orchestration networks, and decentralized applications using modern technologies. Passionate about clean code, UI motion, and intelligent user-centered design.
            </p>

            <div className="flex gap-4">
              <button onClick={() => scrollTo("portfolio")} className="px-8 py-3 rounded-full bg-cyan-500 text-slate-900 font-bold hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all">
                View My Work
              </button>
              <a href="https://github.com/panzauto46-bot" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-slate-600 text-white font-medium hover:bg-slate-800 transition-all flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center hidden md:flex">
                <div className="absolute inset-0 bg-radial-glow z-0"></div>
                <img src="/skills-hand.png" alt="Skills Hand" className="relative z-10 max-w-[80%] rounded-xl shadow-2xl animate-float" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Briefcase className="text-cyan-400" /> My Skills
              </h2>
              <p className="text-slate-400 mb-10 text-sm">
                I'm a passionate web and blockchain developer specializing in creating modern, responsive, and intelligent applications.
              </p>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-cyan-400">{skill.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 progress-bar-glow rounded-full" 
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">My Portfolio</h2>
            <p className="text-slate-400 text-sm">A collection of my recent deployed projects and systems.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#0a101f] border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:-translate-y-2 transition-all group">
                <div className="h-40 bg-slate-900 border-b border-slate-800 p-4 relative flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-radial-glow opacity-30 group-hover:opacity-100 transition-opacity"></div>
                   <h3 className="text-2xl font-bold text-slate-700 z-10 uppercase tracking-widest opacity-20 group-hover:opacity-40">{proj.title}</h3>
                   <div className="absolute bottom-3 left-3 flex gap-2">
                     <span className="px-2 py-1 bg-cyan-900/40 text-cyan-400 text-[10px] rounded uppercase font-bold border border-cyan-800/50">BUILD COMPLETE</span>
                   </div>
                </div>
                <div className="p-5">
                  <h4 className="border-l-2 border-cyan-400 pl-3 text-lg font-bold text-white mb-3">{proj.title}</h4>
                  <p className="text-xs text-slate-400 mb-5 line-clamp-3">{proj.desc}</p>
                  <div className="flex items-center gap-3">
                    <a href={proj.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-cyan-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education" className="glass-card rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-radial-glow opacity-40 rounded-full"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">Education & Certifications</h2>
            <p className="text-slate-400 text-sm">My learning journey and milestones</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-3"> <GraduationCap className="text-cyan-400" /> Education</h3>
              <div className="space-y-6 border-l border-slate-800 pl-4">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="bg-[#0a101f] border border-slate-800 p-5 rounded-xl hover:border-cyan-500/30 transition-all flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white text-md mb-1">{edu.degree}</h4>
                      <p className="text-slate-400 text-xs">{edu.school}</p>
                    </div>
                    <span className="text-[10px] px-2 py-1 border border-slate-700 rounded text-slate-300 bg-slate-800">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-3"> <FolderOpen className="text-cyan-400" /> Certifications</h3>
              <div className="space-y-6">
                {certsData.map((cert, idx) => (
                  <div key={idx} className="bg-[#0a101f] border border-slate-800 p-5 rounded-xl hover:border-cyan-500/30 transition-all flex gap-4 items-center">
                    <div className="w-12 h-12 rounded bg-cyan-900/20 text-cyan-400 flex items-center justify-center border border-cyan-800/50">
                      <FolderOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-md mb-1">{cert.name}</h4>
                      <p className="text-slate-400 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section id="languages" className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Languages</h2>
            <p className="text-slate-400 text-sm">The languages I speak and my proficiency level in each</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
             {langData.map((lang, idx) => (
                <div key={idx} className="bg-[#0a101f] border border-slate-800 p-4 rounded-xl flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center gap-4 w-1/3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-cyan-400 shadow-inner">
                      {lang.code}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{lang.name}</h4>
                      <p className="text-xs text-slate-500">{lang.level}</p>
                    </div>
                  </div>
                  <div className="w-1/2 flex items-center gap-4">
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${lang.percent}%` }}></div>
                    </div>
                    <span className="text-cyan-400 text-xs font-bold w-10 text-right">{lang.percent}%</span>
                  </div>
                </div>
             ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center mt-24 text-slate-500 text-xs">
         <p>© 2024 Pandu Darma Anugrah. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
