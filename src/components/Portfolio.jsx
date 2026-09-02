import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const projectData = [
  {
    image: "/projects/placeholder.webp",
    title: "Canadian Redistribution Map Platform",
    desc: "Interactive MapLibre/PMTiles heatmap surfacing which of Canada's 338 electoral ridings drew the most public commentary, with click-to-popup breakdowns and Keycloak OIDC auth. Raised test coverage from 66% to 100% (backend) and 46% to ~99.9% (frontend) across 500+ tests, uncovering real production bugs.",
    tags: ["FastAPI", "React", "PostgreSQL", "MapLibre", "PMTiles", "Keycloak"],
    link: "",
    github: "https://github.com/7AbdUrRehman7/c01-project-to-be-replaced-by-ai",
  },
  {
    image: "/projects/telecom-agent-1.webp",
    title: "Telecom Support Agent",
    desc: "Multi-agent AI troubleshooting system (Supervisor, Planning and 4 domain agents) for Nokia's 5G core network functions. Cut query resolution from 2-3 min to 30-40s and repeated LLM inference costs by ~60% via a two-tier Redis semantic cache.",
    tags: ["LangGraph", "FastAPI", "React", "MCP", "ChromaDB", "Redis", "OpenShift"],
    link: "",
    github: "",
  },
  {
    image: "/projects/financial-agent-1.webp",
    title: "AI Financial Agent",
    desc: "Workflow automation agent orchestrating OAuth-secured APIs across 41 financial workflows. Reduced turnaround from 5-10 min to 1-2 min and cut average response latency by 80% through routing and error-handling optimizations.",
    tags: ["n8n", "JavaScript", "LLMs", "OAuth 2.0", "REST APIs"],
    link: "",
    github: "",
  },
  {
    image: "/projects/finance-dashboard-1.webp",
    title: "AI Finance Dashboard",
    desc: "Full-stack personal finance application with LLM-assisted transaction categorization and spending insights.",
    tags: ["TypeScript", "Next.js", "MongoDB", "LLMs"],
    link: "",
    github: "https://github.com/7AbdUrRehman7/AI-finance-dashboard",
  },
  {
    image: "/projects/planetze-1.webp",
    title: "PlanetZe",
    desc: "Carbon-footprint tracking Android app built with a 6-person Agile team. Delivered core navigation, reusable UI components and an XML-based sustainability questionnaire, with sub-second sync via Firebase Realtime Database.",
    tags: ["Java", "Android Studio", "Firebase", "XML"],
    link: "https://www.youtube.com/watch?v=P-J9M93AbB4",
    github: "https://github.com/shamrita11/Planetze_B07",
  },
  {
    image: "/projects/allumino-1.webp",
    title: "Allumino",
    desc: "AI-powered STEM talent and career-matching platform built at Hack the Valley X.",
    tags: ["JavaScript", "AI/ML", "Career Matching"],
    link: "",
    github: "https://github.com/Beyonder0CRt/Allumino-HTW-MVP",
  },
  {
    image: "/projects/placeholder.webp",
    title: "Linux FD Table Monitor",
    desc: "C-based Linux monitoring tool giving real-time visibility into file descriptor usage across all user processes by traversing /proc. Supports 5+ CLI flags and custom binary serialization that improved export performance by 30%.",
    tags: ["C", "Linux", "Bash", "Systems Programming"],
    link: "",
    github: "https://github.com/7AbdUrRehman7/Linux-System-Wide-FD-Table-Monitor",
  },
  {
    image: "/projects/assembly-game-1.webp",
    title: "MIPS Platformer",
    desc: "Platform game written in MIPS assembly, rendered to a bitmap display in the MARS simulator.",
    tags: ["MIPS Assembly", "MARS", "Bitmap Display"],
    link: "https://play.library.utoronto.ca/watch/23423fcb1f1ee4b34b22ec09feaac13c",
    github: "https://github.com/7AbdUrRehman7/Assembly-GAME",
  },
  {
    image: "/projects/task-manager-1.webp",
    title: "Task Manager",
    desc: "Full-stack task management web app with a REST API, persistent storage and a vanilla JavaScript front end.",
    tags: ["Node.js", "Express", "SQLite", "JavaScript"],
    link: "",
    github: "https://github.com/7AbdUrRehman7/Full-Stack-Task-Manager-App",
  },
];

const Portfolio = () => {
  return (
    <section id="projects" className="bg-[#020202] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-blue-500 font-mono tracking-[0.4em] uppercase text-[10px] mb-4"
        >
          Project Showcase
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter"
        >
          Selected Works<span className="text-blue-500">.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2rem] bg-white/5 border border-white/10"
          >
            <div className="relative overflow-hidden aspect-[4/3] rounded-[1.5rem] m-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{project.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest font-mono px-3 py-1 bg-white/10 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code on GitHub`} className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                    <FiGithub size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="p-3 bg-white/5 text-white rounded-xl hover:bg-blue-600 transition-all border border-white/10">
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
