import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            07 — CONSULTATION REGISTRAR
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            Corporate <span className="font-sans font-bold not-italic font-black text-gold-500">HEADQUARTERS</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm">
            Reach out directly to our corporate offices to establish custom software partnerships, design cloud-native architectures, or structure automated QA engineering modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch" id="contact-wrapper">
          {/* Left Block: Bangalore Registered Address Details */}
          <div className="flex flex-col h-full">
            <div className="p-8 rounded-none bg-[#1A1A1A] text-white border border-[#1A1A1A] relative overflow-hidden flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-serif italic text-gold-300 mb-8 font-semibold">Registered Corporate Office</h3>
                
                <div className="flex flex-col gap-8 font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2A2A2A] border border-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono tracking-widest text-[#A3A3A3] uppercase">Headquarters Address</h4>
                      <p className="text-xs text-slate-200 mt-2 font-light leading-relaxed">
                        95B, 3rd Floor, Matrushree Krupa,<br />
                        20 Cross 2 Block, Near SBI, Doorvaninagar,<br />
                        Bangalore North, Karnataka, India – 560016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2A2A2A] border border-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono tracking-widest text-[#A3A3A3] uppercase">Electronic Mail</h4>
                      <p className="text-sm text-gold-300 font-semibold mt-1.5 font-mono">
                        vstadmin@vsquarethoughts.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#2A2A2A] border border-white/5 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-mono tracking-widest text-[#A3A3A3] uppercase">Director Hotlines</h4>
                      <p className="text-sm text-slate-200 mt-1.5 font-light leading-relaxed">
                        +91 80 4912 2500
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Registration details */}
              <div className="border-t border-white/10 mt-12 pt-6 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-mono text-slate-400">CORPORATE STATUS STATUS</div>
                  <div className="text-xs font-bold text-slate-200">Incorporated March 2025 (Govt. of India)</div>
                </div>
                <div className="px-3 py-1 bg-gold-500 text-[#1A1A1A] rounded-none font-mono font-bold text-[10px] tracking-widest uppercase">
                  ACTIVE REG
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Elegant abstract location visualization */}
          <div className="flex flex-col h-full justify-between p-8 rounded-none bg-[#F7F7F5] border border-[#1A1A1A]/10 text-left">
            <div>
              <h4 className="text-xs font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-4">
                Office Coordinates (Bangalore North)
              </h4>
              <p className="text-xs text-[#1A1A1A]/70 font-sans font-light leading-relaxed mb-6">
                Our Bangalore North engineering pavilion is equipped with dedicated automated delivery structures, CI/CD validation nodes, and cloud sandbox testing facilities.
              </p>
            </div>
            
            {/* Fake clean abstract circuit block symbolizing location */}
            <div className="h-56 rounded-none bg-white border border-dashed border-[#1A1A1A]/20 relative flex flex-col items-center justify-center overflow-hidden flex-1 select-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-[0.03]" />
              <div className="absolute w-28 h-28 bg-gold-400/20 rounded-full blur-xl animate-pulse" />
              
              {/* Visual landmark pin */}
              <span className="w-12 h-12 bg-[#1A1A1A] flex items-center justify-center border border-gold-500 relative z-10 text-gold-500 animate-bounce shadow-md">
                <MapPin className="w-5 h-5" />
              </span>
              
              <span className="text-[10px] font-mono font-bold text-[#1A1A1A] relative z-10 mt-4 bg-white px-3.5 py-1.5 border border-[#1A1A1A]/10 shadow-xs">
                Matrushree Krupa | Near SBI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
