import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Landmark, ShieldCheck, Milestone as MilestoneIcon } from 'lucide-react';
import { Milestone } from '../types';

const TIMELINE_MILESTONES: Milestone[] = [
  {
    date: 'March 3, 2025',
    title: 'Strategic Incorporation',
    description: 'Officially founded in Bangalore (India) with a combined leadership pool of 50+ IT years, specializing in Microsoft cloud stacks.',
    badge: 'Launch'
  },
  {
    date: 'April 2025',
    title: 'Ecosystem Blueprints',
    description: 'Established ready-to-use microservice templates, secure ASP.NET API designs, and AI-assisted development practices.',
    badge: 'Framework'
  },
  {
    date: 'May 2025 & Beyond',
    title: 'Quality Automation Rollout',
    description: 'Deployed enterprise Selenium testing frameworks, delivering 0-bug deployment regressions for our initial clientele.',
    badge: 'Scaling'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F7F7F5] border-t border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            01 — COMPANY PROFILE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            About <span className="font-sans font-bold not-italic font-black text-gold-500">VSquareThoughts</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm md:text-base">
            A software consulting and research enterprise focused on helping modern organizations design, build, and optimize enterprise-grade digital solutions.
          </p>
        </div>

        {/* Core Vision & Mission Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-serif italic text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-4">
              Modernizing Technology Ecosystems
            </h3>
            <p className="text-[#1A1A1A]/70 font-light leading-relaxed text-sm">
              At VSquareThoughts Pvt Ltd, we combine deep technical expertise with practical industry experience to create secure, scalable, and high-performing software solutions. Built on Microsoft technologies including .NET, MS SQL Server, Azure Functions, Web APIs, and cloud-native frameworks, our mission is to deliver secure applications that accelerate business growth and digital transformation.
            </p>
            <p className="text-[#1A1A1A]/70 font-light leading-relaxed text-sm">
              Our leadership team consists of experienced professionals with strong backgrounds in enterprise software development, software architecture, testing automation, and technology consulting. We help client organisations transition away from legacy technical debts to responsive modern cloud fabrics.
            </p>

            {/* Strategic Core Values Cards - Clean, Sharp, Square */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-6 bg-white border border-[#1A1A1A]/10 flex items-start gap-4">
                <Target className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#1A1A1A]">Customer-Centric</h4>
                  <p className="text-xs text-[#1A1A1A]/60 mt-2 leading-relaxed">Direct consulting alignment targeting specific bottleneck constraints.</p>
                </div>
              </div>
              <div className="p-6 bg-white border border-[#1A1A1A]/10 flex items-start gap-4">
                <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-[#1A1A1A]">Enterprise Quality</h4>
                  <p className="text-xs text-[#1A1A1A]/60 mt-2 leading-relaxed">Automated validation pipelines ensuring robust code shipments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual KPI Banner - Flat and solid charcoal black in editorial layout */}
            <div className="p-8 bg-[#1A1A1A] text-[#F7F7F5] relative overflow-hidden">
              <span className="text-[10px] font-mono text-gold-500 tracking-[0.2em] uppercase mb-4 block">01.1 — FOUNDATION STRENGTH</span>
              <p className="text-xl font-serif italic font-light text-[#F7F7F5]/90 mb-8">
                Uncompromising commitment to quality-focused software delivery.
              </p>

              <div className="grid grid-cols-2 gap-6 border-t border-[#F7F7F5]/10 pt-8">
                <div>
                  <div className="text-4xl font-serif italic text-gold-500">50+</div>
                  <div className="text-[9px] font-mono text-[#F7F7F5]/50 uppercase tracking-widest mt-1">Combined IT Years</div>
                </div>
                <div>
                  <div className="text-4xl font-serif italic text-[#F7F7F5]">100%</div>
                  <div className="text-[9px] font-mono text-[#F7F7F5]/50 uppercase tracking-widest mt-1">Microsoft Centric</div>
                </div>
              </div>
            </div>

            {/* Bangalore Registration Badge Card - Sharp & Square */}
            <div className="p-6 bg-white border border-[#1A1A1A]/10 flex items-center gap-4">
              <div className="p-3 bg-[#F7F7F5] border border-[#1A1A1A]/5 text-[#1A1A1A] shrink-0">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#1A1A1A]/30 uppercase tracking-widest block">Registered Entity</span>
                <h4 className="text-sm font-bold text-[#1A1A1A] mt-0.5">Bangalore North, Karnataka</h4>
                <p className="text-xs text-[#1A1A1A]/50">Karnataka, India – Reg. March 3, 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline Segment */}
        <div className="mt-16 border-t border-[#1A1A1A]/10 pt-16">
          <div className="flex items-center gap-3 justify-center mb-12">
            <MilestoneIcon className="w-4 h-4 text-gold-500" />
            <h3 className="text-xs font-mono tracking-[0.3em] font-bold text-[#1A1A1A] text-center uppercase">
              Our Journey Sequence
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#1A1A1A]/10">
            {TIMELINE_MILESTONES.map((milestone, idx) => (
              <div key={idx} className="bg-white p-8 border border-[#1A1A1A]/10 md:border-0 hover:bg-[#F7F7F5]/50 transition-colors duration-300 flex flex-col justify-between min-h-[220px]">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#1A1A1A] text-white font-mono text-[9px] font-bold uppercase tracking-widest mb-4">
                    {milestone.badge}
                  </div>
                  <span className="block text-[10px] font-mono text-[#1A1A1A]/40 font-semibold mb-2">{milestone.date}</span>
                  <h4 className="font-serif italic text-lg text-[#1A1A1A] mb-3">
                    {milestone.title}
                  </h4>
                  <p className="text-[#1A1A1A]/70 font-light text-xs leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
