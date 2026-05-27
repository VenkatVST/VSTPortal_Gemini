import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Briefcase, GraduationCap, Link, Linkedin, Trophy, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Leader } from '../types';

const LEADERSHIP_TEAM: Leader[] = [
  {
    id: 'veera',
    name: 'Veera Venkata Rao Pentakota',
    title: 'Director – Software Development & Architect',
    experienceYears: 22,
    bio: 'Veera is a senior system architect and consultant with 22 years of experience designing secure, high-throughput cloud-native environments and microservice patterns. He specializes in designing robust ASP.NET Core infrastructures and aligning development cycles with AI-assisted software engineering practices.',
    certifications: [
      'Microsoft Certified: Azure Solutions Architect Expert',
      'Microsoft Certified: DevOps Engineer Expert',
      'Certified ScrumMaster (CSM) – Scrum Alliance'
    ],
    keyStrengths: [
      'Microservices & Distributed Systems Design',
      'Cloud-Native Solution Architecture (Azure)',
      'Legacy Monolith Systematic Migrations',
      'AI-Assisted Delivery Governance'
    ],
    achievements: [
      'Overlooked system migration of legacy banking monolith structure to containerized Azure workloads.',
      'Designed a multi-tenant enterprise portal handling over 10M simulated active transactions daily.',
      'Consulted for global engineering enterprises to reduce server infrastructure overhead costs by 35%.'
    ],
    linkedInUrl: 'https://www.linkedin.com/in/veera-venkata-rao-pentakota'
  },
  {
    id: 'lalitha',
    name: 'Lalitha Soundarya Chirravuri',
    title: 'Director – Quality Engineering & Testing',
    experienceYears: 18,
    bio: 'Lalitha is an expert testing manager specializing in Shift-Left QA pipelines and enterprise-grade test automation frameworks. With 18 years of expert domain focus, she designs multi-threaded Selenium test scripts integrated inside continuous CI/CD loops to guarantee zero regression leaks.',
    certifications: [
      'ISTQB Advanced Level Test Manager (CTAL-TM)',
      'Selenium Automation Architect Senior Certification',
      'Certified SAFe® 5 Agilist'
    ],
    keyStrengths: [
      'Selenium POM Test Automation Modeling',
      'Functional & Automation Regression Pipelines',
      'CI/CD Shift-Left Release Gateways',
      'QA Metrics & SLA Compliance Audits'
    ],
    achievements: [
      'Architected custom multi-dataset Selenium testing frameworks reducing core regression verification cycles by 70%.',
      'Ensured flawless continuous releases (99.99% pass-rate) across critical FinTech application servers.',
      'Trained and managed QA operations of 60+ junior automation engineers across offshore operations.'
    ],
    linkedInUrl: 'https://www.linkedin.com/in/lalitha-soundarya-chirravuri'
  },
  {
    id: 'vivek',
    name: 'Vivek Adiveppa Ramanavar',
    title: 'Director – Enterprise Architect',
    experienceYears: 23,
    bio: 'Vivek is a backend engineering director with 23 years of specialized experience in C# systems optimization and SQL Server sharding architecture. He leads backend developer guilds to build distributed services and low-latency transactional architectures.',
    certifications: [
      'Microsoft Certified: Solutions Developer (MCSD)',
      'Microsoft Certified: Azure Database Administrator Associate',
      'Certified Scaled Agile Framework Professional'
    ],
    keyStrengths: [
      'Advanced MS SQL Performance Tuning & Sharding',
      'Resilient C# Cloud Backend Design',
      'Asynchronous Broker Systems (RabbitMQ / Kafka)',
      'Secure Distributed Operations Strategy'
    ],
    achievements: [
      'Optimized query performance for high-traffic financial databases, reducing lock timeout exceptions by 55%.',
      'Refactored scalable REST APIs reducing average server payload processing latencies to sub-80ms bounds.',
      'Developed high-availability Azure Functions triggering off heavy event streams smoothly without data loss.'
    ],
    linkedInUrl: 'https://www.linkedin.com/in/vivek-adiveppa-ramanavar'
  }
];

export default function Leadership() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="leadership" className="py-24 bg-[#F7F7F5] border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            03 — KEY LEADERSHIP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            Director <span className="font-sans font-bold not-italic font-black text-gold-500">PROFILES</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm">
            Led by elite engineers with over 50 years of combined IT industry experience, bringing deep technological expertise from high-stakes corporate software environments.
          </p>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {LEADERSHIP_TEAM.map((leader) => {
            const isExpanded = expandedId === leader.id;
            
            // Extract initials for beautiful dynamic avatar placeholders
            const initials = leader.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 3)
              .join('');

            return (
              <div
                key={leader.id}
                className={`group bg-white border transition-all duration-300 overflow-hidden ${
                  isExpanded 
                    ? 'border-[#1A1A1A] shadow-xs' 
                    : 'border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30'
                }`}
                id={`leader-card-${leader.id}`}
              >
                {/* Visual Avatar Header Top bar */}
                <div className="p-6 pb-4 flex items-center gap-4 border-b border-[#1A1A1A]/10">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-gold-500 flex items-center justify-center font-mono font-semibold tracking-wider text-xs shrink-0 border border-[#1A1A1A]/15">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-serif italic text-lg leading-snug text-[#1A1A1A]">
                      {leader.name}
                    </h3>
                    <p className="text-[10px] font-mono text-gold-600 font-semibold mt-0.5 uppercase tracking-wide">
                      {leader.experienceYears} Years Experience
                    </p>
                  </div>
                </div>

                {/* Main Body */}
                <div className="p-6">
                  {/* Title Bar - Elegant Minimalist Bar */}
                  <div className="flex items-center gap-2 mb-4 bg-[#F7F7F5] px-3 py-2 border border-[#1A1A1A]/10">
                    <Briefcase className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#1A1A1A] font-bold">
                      {leader.title}
                    </span>
                  </div>

                  {/* Bio statement */}
                  <p className="text-[#1A1A1A]/70 font-light text-xs leading-relaxed mb-6 font-sans">
                    {leader.bio}
                  </p>

                  {/* Key Strengths Tags */}
                  <div className="mb-6">
                    <div className="text-[9px] font-mono font-bold uppercase text-[#1A1A1A]/40 tracking-widest mb-2.5">
                      Technical Vectors:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.keyStrengths.slice(0, 3).map((strength, idx) => (
                        <span key={idx} className="text-[9px] font-mono bg-[#F7F7F5] border border-[#1A1A1A]/10 text-[#1A1A1A]/70 px-2 py-1 uppercase tracking-wider">
                          {strength}
                        </span>
                      ))}
                      {leader.keyStrengths.length > 3 && (
                        <span className="text-[9px] font-mono bg-white border border-[#1A1A1A]/10 text-gold-600 px-1.5 py-1 font-bold">
                          +{leader.keyStrengths.length - 3} MORE
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expand-Collapse and LinkedIn actions row */}
                  <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5 mt-4">
                    <a
                      href={leader.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono tracking-widest text-[#1A1A1A] hover:text-gold-500 transition-colors py-1.5 px-3 bg-white border border-[#1A1A1A]/10 font-bold"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>LinkedIn</span>
                    </a>

                    <button
                      onClick={() => toggleExpand(leader.id)}
                      className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-gold-600 hover:text-gold-700 font-bold cursor-pointer group hover:underline"
                    >
                      <span>{isExpanded ? 'Hide Dossier' : 'View Dossier'}</span>
                    </button>
                  </div>
                </div>

                {/* Dossier Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-[#1A1A1A]/10 bg-[#F7F7F5]/40 overflow-hidden"
                    >
                      <div className="p-6 flex flex-col gap-6">
                        
                        {/* Certifications Block */}
                        <div>
                          <p className="text-[9px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <GraduationCap className="w-3.5 h-3.5 text-gold-500" /> Certifications & Credentials
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {leader.certifications.map((cert, certIdx) => (
                              <div key={certIdx} className="flex items-start gap-2 bg-white px-3.5 py-2.5 border border-[#1A1A1A]/10">
                                <Award className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                <span className="text-xs font-semibold text-[#1A1A1A]/80 leading-snug font-sans">{cert}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements / Milestones */}
                        <div>
                          <p className="text-[9px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                            <Trophy className="w-3.5 h-3.5 text-gold-500" /> Key Corporate Highlights
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {leader.achievements.map((ach, achIdx) => (
                              <div key={achIdx} className="flex items-start gap-2.5 bg-white px-3.5 py-3 border border-[#1A1A1A]/10">
                                <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                                <span className="text-xs text-[#1A1A1A]/70 font-light leading-relaxed font-sans">{ach}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Expanded All key strengths */}
                        <div>
                          <p className="text-[9px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-widest mb-2.5">
                            Full Architectural Strengths
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {leader.keyStrengths.map((str, strIdx) => (
                              <span key={strIdx} className="text-[9px] font-mono bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] px-2.5 py-1.5 tracking-wide">
                                {str}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
