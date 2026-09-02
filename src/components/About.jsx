import React from 'react';
import { FiAward, FiBookOpen, FiCode, FiDownload } from "react-icons/fi";
import { 
  SiPython, 
  SiTypescript, 
  SiReact, 
  SiFastapi, 
  SiLangchain, 
  SiDocker, 
  SiKubernetes, 
  SiPostgresql 
} from "react-icons/si";

export default function About() {
  const Aboutdata = [
    {
      icon: <FiCode size={20} />,
      title: "Languages",
      desc: "Python, Java, TypeScript, JavaScript, SQL, C",
    },
    {
      icon: <FiBookOpen size={20} />,
      title: "Education",
      desc: "HBSc Computer Science Specialist (Co-op), University of Toronto",
    },
    {
      icon: <FiAward size={20} />,
      title: "Experience",
      desc: "Software engineering co-ops at Nokia and DTCForce",
    },
  ];

  const Tools = [
    { icon: <SiPython size={24} />, title: "Python" },
    { icon: <SiTypescript size={24} />, title: "TypeScript" },
    { icon: <SiReact size={24} />, title: "React" },
    { icon: <SiFastapi size={24} />, title: "FastAPI" },
    { icon: <SiLangchain size={24} />, title: "LangGraph" },
    { icon: <SiDocker size={24} />, title: "Docker" },
    { icon: <SiKubernetes size={24} />, title: "Kubernetes" },
    { icon: <SiPostgresql size={24} />, title: "PostgreSQL" },
  ];

  return (
    <div id="about" className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide py-20 px-6 md:px-12">
        
        {/* --- BG EFFECTS --- */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute inset-0 z-[15] pointer-events-none" style={{ background: "radial-gradient(circle at 30% 50%, transparent 20%, rgba(0,0,0,0.9) 100%)" }}></div>

        {/* --- STATIC FRAME IMAGE (LEFT 45%) --- */}
        <div className="absolute inset-y-0 left-0 w-[45%] z-10 pointer-events-none overflow-hidden hidden lg:block" style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)' }}>
            <img 
               src="/images/ezgif-frame-240.jpg" 
               alt="Abd Ur Rehman" 
               className="w-full h-full object-cover opacity-50 grayscale" 
            />
        </div>

        {/* --- CONTENT (RIGHT 55%) --- */}
        <div className="relative z-[50] w-full lg:w-[80%] flex flex-col md:flex-row items-center justify-end">
            
            {/* Visual Gap for the face mask area */}
            <div className="hidden lg:block w-[35%] h-full"></div>

            {/* Main Content Pane */}
            <div className="w-full lg:w-[65%] flex flex-col space-y-10 pointer-events-auto bg-black/40 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-2xl">
                {/* Header */}
                <div className="space-y-2">
                    <p className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em]">SYSTEM INFO</p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase">
                        About Me<span className="text-blue-500">.</span>
                    </h2>
                </div>

                {/* Bio Paragraph */}
                <div className="robotic-section">
                    <p className="text-gray-400 text-sm md:text-md lg:text-xl font-light leading-relaxed max-w-2xl">
                        I'm a <span className="text-white font-medium">Computer Science Specialist (Co-op)</span> student at the 
                        University of Toronto who enjoys building clean, dependable software and learning by shipping 
                        real projects. I work across full-stack development, cloud systems and AI automation &mdash; 
                        especially when they make workflows simpler and products more useful. I care about strong 
                        fundamentals: clear code, good design and collaboration.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Aboutdata.map((item) => (
                        <div key={item.title} className="group p-6 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 rounded-xl">
                            <div className="text-blue-500 mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                {item.icon}
                            </div>
                            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-gray-500 text-[11px] leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Tech Dock */}
                <div className="space-y-4">
                    <h4 className="text-[10px] font-mono text-gray-500 tracking-[0.3em] uppercase">Core Tech Stack</h4>
                    <div className="flex flex-wrap gap-5">
                        {Tools.map((tool) => (
                            <div key={tool.title} className="group relative p-4 bg-black/50 border border-white/5 hover:border-blue-500/50 transition-all rounded-xl flex items-center justify-center cursor-help">
                                <div className="text-gray-500 group-hover:text-blue-400 transition-colors">
                                    {tool.icon}
                                </div>
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-mono py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[70] whitespace-nowrap shadow-xl">
                                    {tool.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                    <a 
                        href="/Abd_Ur_Rehman_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center space-x-6 px-12 py-4 bg-blue-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 rounded-full shadow-lg shadow-blue-900/20"
                    >
                        <span>Download Resume</span>
                        <FiDownload size={16} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
