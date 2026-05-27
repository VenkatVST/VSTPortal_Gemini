import React from 'react';
import { Award, ShieldCheck, Cpu, Layers, HelpCircle, Users, Activity, CheckCircle2 } from 'lucide-react';

const ADVANTAGES = [
  {
    title: '50+ Years Combined IT Experience',
    desc: 'Our leadership team consists of seasoned directors who have led software engineering pipelines for major global enterprises.',
    icon: Award,
  },
  {
    title: 'Expertise in Microsoft Technology Stack',
    desc: 'Native engineering specialists in .NET Core implementations, ASP.NET Core integrations, and optimal MS SQL configurations.',
    icon: Layers,
  },
  {
    title: 'Scalable Cloud & Microservices Solutions',
    desc: 'Deep capabilities designing stateless cloud-native topologies on Microsoft Azure, leveraging container assemblies.',
    icon: ShieldCheck,
  },
  {
    title: 'AI-Driven Development Approach',
    desc: 'We adopt advanced AI development toolsets to dramatically streamline software shipment life-cycles without risking safety.',
    icon: Cpu,
  },
  {
    title: 'Strong Focus on Quality & Automation',
    desc: 'We eliminate manual human overheads through robust multi-threaded test pipelines running on Selenium frameworks.',
    icon: CheckCircle2,
  },
  {
    title: 'Customer-Centric Consulting & Innovation',
    desc: 'We reject generic solutions; instead, we directly audit and optimize specific architectural bottlenecks to maximize efficiency.',
    icon: Users,
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#F7F7F5] border-t border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            06 — OUR VALUE PROPOSITION
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            Why Partner with <span className="font-sans font-bold not-italic font-black text-gold-500">VSquareThoughts</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm">
            We deliver enterprise software engineering with absolute accountability, backed by seasoned leadership, cutting-edge AI acceleration, and rigorous automated validation.
          </p>
        </div>

        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-none border border-[#1A1A1A]/10 hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between"
                id={`advantage-card-${idx}`}
              >
                {/* Visual Highlight Upper Section */}
                <div>
                  <div className="inline-flex w-12 h-12 bg-[#1A1A1A] text-gold-500 items-center justify-center border border-[#1A1A1A]/15 mb-6 group-hover:bg-gold-500 group-hover:text-[#1A1A1A] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif italic text-lg text-[#1A1A1A] leading-snug mb-3">
                    {adv.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 font-sans font-light text-xs leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                {/* Micro accent block */}
                <div className="h-[2px] w-8 bg-gold-500/30 group-hover:w-full group-hover:bg-gold-500 transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Interactive Highlight Bar Statement */}
        <div className="mt-16 p-8 md:p-12 rounded-none bg-[#1A1A1A] text-white relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-left">
            <div className="max-w-xl">
              <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest block mb-2">Architectural Motto</span>
              <p className="text-lg md:text-2xl font-serif italic font-light text-slate-100 leading-snug">
                &ldquo;Accelerating enterprise delivery through intelligence, engineering systems with absolute software automated quality.&rdquo;
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-gold-400 text-[#1A1A1A] hover:bg-gold-500 font-bold text-[10px] font-mono uppercase tracking-widest shrink-0 transition-colors duration-200 cursor-pointer"
              id="motto-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('contact');
                if (target) {
                  const offset = 80;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = target.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Collaborate With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
