import React from 'react';
import HeaderLogo from './HeaderLogo';
import { Linkedin, Mail, Phone, MapPin, ArrowUp, GitBranch } from 'lucide-react';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-slate-300 pt-20 pb-10 border-t border-[#2A2A2A] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16" id="footer-top-grid">
          
          {/* Logo brand module */}
          <div className="md:col-span-5 flex flex-col items-start gap-4 text-left">
            <HeaderLogo size="md" layout="horizontal" />
            
            <p className="text-xs font-sans text-slate-400 max-w-sm leading-relaxed mt-2 font-light">
              Corporate software advising and research consulting organization delivering scalable C# core APIs, robust Azure hosting configurations, and multithreaded test validation modules.
            </p>

            <span className="text-[9px] uppercase tracking-wider font-mono text-gold-400 font-bold bg-[#1D1D1D] border border-white/5 px-3 py-1.5 rounded-none block mt-2">
              CIN Incorporated March 2025 | Karnataka India
            </span>
          </div>

          {/* Navigational map quick directions links */}
          <div className="md:col-span-3 flex flex-col items-start gap-4 text-left">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest border-l border-gold-400 pl-3">
              Secure Segments
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-sans text-slate-400">
              <a href="#about" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Corporate History & Profile</a>
              <a href="#competencies" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Core Capabilities Tab</a>
              <a href="#leadership" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Board Director Biographies</a>
              <a href="#projects" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Showcased Case Dossiers</a>
              <a href="#why-choose-us" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Core Strengths</a>
              <a href="#contact" className="hover:text-gold-400 transition-colors uppercase font-mono text-[10px] tracking-wide">Live Architecture Quote</a>
            </div>
          </div>

          {/* Address contacts short recap */}
          <div className="md:col-span-4 flex flex-col items-start gap-4 text-left">
            <h4 className="text-white font-mono text-xs font-bold uppercase tracking-widest border-l border-gold-400 pl-3">
              Registrars Information
            </h4>
            
            <div className="flex flex-col gap-3 text-xs font-sans text-slate-400 leading-relaxed font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                <span>95B, Matrushree Krupa, 20 Cross 2 Block, Near SBI, Doorvaninagar, Bangalore North, 560016</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href="mailto:vstadmin@vsquarethoughts.com" className="hover:text-gold-400">vstadmin@vsquarethoughts.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 80 4912 2500</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Legal Bar & Socials Links */}
        <div className="border-t border-[#222222] pt-10 flex flex-col sm:flex-row items-center justify-between gap-6" id="footer-bottom-bar">
          
          {/* Copyright legal credit */}
          <div className="text-center sm:text-left text-[11px] font-sans text-slate-400/80 leading-normal font-light">
            <p>&copy; {currentYear} <strong className="font-bold text-slate-200">VSquareThoughts Pvt Ltd</strong>. All Rights Reserved.</p>
            <p className="mt-1 text-[9px] text-slate-500 font-mono">Engineering Intelligent Software Solutions for Modern Businesses. CIN: U72900KA2025PTC184132</p>
          </div>

          {/* Socials & Top Scroll links */}
          <div className="flex items-center gap-3">
            
            {/* LinkedIn custom board button */}
            <a
              href="https://www.linkedin.com/company/vsquarethoughts"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#1C1C1C] border border-white/5 text-slate-300 hover:text-gold-400 hover:bg-[#252525] transition-all rounded-none"
              aria-label="LinkedIn Corporate Profile"
              id="footer-soc-linkedin"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>

            {/* Simulated GitHub check pipeline validation representation */}
            <a
              href="https://github.com/VenkatVST/VSTProfile_Gemini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#1C1C1C] border border-white/5 text-slate-300 hover:text-gold-400 hover:bg-[#252525] transition-all rounded-none"
              aria-label="GitHub Repository"
              id="footer-soc-github"
            >
              <GitBranch className="w-3.5 h-3.5" />
            </a>

            {/* Back to top scroll button */}
            <button
              onClick={scrolltoTop}
              className="p-2.5 bg-gold-500 text-[#121212] font-bold rounded-none hover:bg-gold-400 transition-all cursor-pointer select-none ml-2"
              aria-label="Scroll back to top of screen"
              id="footer-scroll-top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
