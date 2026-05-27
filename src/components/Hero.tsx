import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Code2, Database, ShieldCheck, Cpu } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-24 bg-[#F7F7F5] text-[#1A1A1A] overflow-hidden"
    >
      {/* Background elegant architectural line dividers */}
      <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-[#1A1A1A]/5 hidden lg:block" />
      <div className="absolute left-0 right-0 top-[28%] h-[1px] bg-[#1A1A1A]/5" />

      <div className="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Compelling copy and headers */}
        <div className="lg:col-span-7 flex flex-col items-start text-left lg:pr-8">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <Cpu className="w-3.5 h-3.5 text-gold-500" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-[#1A1A1A]/40 font-mono">
              Incorp: March 2025 | India
            </span>
          </motion.div>

          {/* Core Title (Elegant display serif) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl font-serif font-light italic tracking-tight leading-[0.95] mb-8"
          >
            Engineering <br />
            <span className="font-sans font-black not-italic text-[#1A1A1A] tracking-tighter uppercase text-3xl md:text-[56px] block my-1">
              Intelligent Cloud
            </span>
            Architectures
          </motion.h1>

          {/* Tagline / Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-[#1A1A1A]/70 max-w-xl font-light leading-relaxed mb-10 font-sans"
          >
            VSquareThoughts is a premier software consulting and research enterprise. We specialize in robust .NET cloud-native application architectures, automated test infrastructure gateways, and smart AI-assisted delivery pathways.
          </motion.p>

          {/* CTA Buttons Row - Elegant rectangular sharp style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={scrollToContact}
              className="px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-semibold bg-[#1A1A1A] text-[#F7F7F5] hover:bg-gold-500 hover:text-[#1A1A1A] active:scale-98 transition-all duration-300"
              id="hero-cta-quote"
            >
              Consult an Architect
            </button>
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] font-semibold bg-transparent border border-[#1A1A1A]/20 hover:border-[#1A1A1A] hover:bg-[#1A1A1A]/5 text-[#1A1A1A] flex items-center justify-center gap-2 transition-all duration-300 group"
              id="hero-cta-explore"
            >
              <span>Explore Ecosystem</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#1A1A1A]/50 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Technology Badges Row - Clean and Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden sm:flex items-center gap-6 border-t border-[#1A1A1A]/10 pt-6 text-[#1A1A1A]"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase opacity-40">Enterprise:</span>
            <div className="flex gap-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1A1A1A]/70 bg-white border border-[#1A1A1A]/10 px-3 py-1.5">
                <Code2 className="w-3.5 h-3.5 text-gold-500" /> .NET 9 Core / C#
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1A1A1A]/70 bg-white border border-[#1A1A1A]/10 px-3 py-1.5">
                <Database className="w-3.5 h-3.5 text-gold-500" /> MS SQL / Azure
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#1A1A1A]/70 bg-white border border-[#1A1A1A]/10 px-3 py-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-500" /> Selenium QA
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Elegant Editorial layout box */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-w-[400px] border border-[#1A1A1A]/10 bg-white p-12 flex flex-col justify-between shadow-xs"
          >
            <div className="flex flex-col items-start text-left gap-6 justify-center flex-1">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#1A1A1A]/40 uppercase">
                Core Focus Sectors
              </span>
              <div className="flex flex-col gap-4 w-full">
                <div className="border-l-2 border-gold-500 pl-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                    01 / Application Design
                  </h4>
                  <p className="text-[11px] text-[#1A1A1A]/70 mt-1 leading-normal font-sans font-light">
                    Scalable cloud architectures built with modular .NET 9 systems.
                  </p>
                </div>
                <div className="border-l-2 border-[#1C304A] pl-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1C304A]">
                    02 / Quality Assurance
                  </h4>
                  <p className="text-[11px] text-[#1A1A1A]/70 mt-1 leading-normal font-sans font-light">
                    Automated Selenium pipelines for rigorous multi-layer testing.
                  </p>
                </div>
                <div className="border-l-2 border-[#A47522] pl-4">
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                    03 / Technology Advisory
                  </h4>
                  <p className="text-[11px] text-[#1A1A1A]/70 mt-1 leading-normal font-sans font-light">
                    Expert corporate solutions aligning software with strategic goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-[#1A1A1A]/40">
              <span>SYSTEM V1.0.0</span>
              <span>© {new Date().getFullYear()} VS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Indicators bottom decoration */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#F7F7F5] to-transparent pointer-events-none" />
    </section>
  );
}
