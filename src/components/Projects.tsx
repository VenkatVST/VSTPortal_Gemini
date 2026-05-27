import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Database, ArrowRight, Eye, Sparkles, Trophy, Calendar, CheckSquare, X } from 'lucide-react';
import { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    id: 'digital-transformation',
    title: 'Enterprise Digital Transformation Platform',
    tagline: 'Scalable .NET Cloud Monolith to Microservice Modernization',
    category: 'Architecture',
    overview: 'Modernizing corporate infrastructure from rigid legacy configurations into lightweight cloud-services layouts.',
    problem: 'Siloed database contention, dependency locks, and heavy scaling overheads across legacy monolithic application architectures.',
    solution: 'Engineered clean .NET 9 microservice domain blocks communicating asynchronously via Message Queues and deployed as scaled Docker containers.',
    impactMetrics: [
      { value: '35%', label: 'Infrastructure Cost Decrease' },
      { value: 'sub-80ms', label: 'Internal DB Latency' }
    ],
    techStack: ['.NET 9 Core', 'Docker', 'MS SQL Server', 'Azure Kubernetes', 'RabbitMQ'],
    timeline: 'March 2025'
  },
  {
    id: 'cloud-api',
    title: 'Cloud API & Integration Services',
    tagline: 'Enterprise Integration Pathways & Secure Endpoint Architectures',
    category: 'Cloud APIs',
    overview: 'Engineering robust transactional REST endpoints backing high-volume data transmissions safely.',
    problem: 'Disjointed ERP and tracking systems generating synchronisation bottlenecks and unsecured public data vectors.',
    solution: 'Designed robust contract-first ASP.NET Web API gateways secured meticulously with JWT authorization schemas and Azure API Manager limits.',
    impactMetrics: [
      { value: '99.99%', label: 'Uptime Availability SLA' },
      { value: 'Zero', label: 'Data Dispatch Failures' }
    ],
    techStack: ['ASP.NET Web API', 'Azure Functions', 'JWT Security', 'Redis Cache', 'MS SQL Server'],
    timeline: 'April 2025'
  },
  {
    id: 'ai-portal',
    title: 'AI-Assisted Web Portal Solutions',
    tagline: 'Generative Portal Ensembles with Tailored Dashboards',
    category: 'Web Solutions',
    overview: 'Accelerating traditional development lifecycles to deliver rich, customizable administrative analytics dashboards.',
    problem: 'Repetitive front-end development patterns draining resources and delaying fast corporate deployments.',
    solution: 'Created multi-view administration React client frameworks structured by advanced AI-augmented scaffold codes, with built-in telemetry audits.',
    impactMetrics: [
      { value: '45%', label: 'Software Shipment Acceleration' },
      { value: '100%', label: 'Responsive Mobile Score' }
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion React'],
    timeline: 'May 2025'
  },
  {
    id: 'qa-framework',
    title: 'Automated Testing Framework',
    tagline: 'Continuous Assurance & Multi-Threaded Browser Tests',
    category: 'Quality Engineering',
    overview: 'Unifying testing processes into automated, non-breaking validation gateways inside CI/CD lines.',
    problem: 'Repetitive manual regression testing workflows causing delayed release cycles and high risk of code regression leakage.',
    solution: 'Built a robust multithreaded test library using Selenium WebDriver and C# NUnit adopting strict Page Object Model (POM) standards.',
    impactMetrics: [
      { value: '70%', label: 'Regression Execution reduction' },
      { value: '0-Bug', label: 'Post-Deploy Regression Leaks' }
    ],
    techStack: ['Selenium WebDriver', 'NUnit', 'Page Object Model', 'C#', 'Azure DevOps Pipelines'],
    timeline: 'May 2025'
  }
];

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || null;

  return (
    <section id="projects" className="py-24 bg-white border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            04 — CASE STUDIES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            Featured <span className="font-sans font-bold not-italic font-black text-gold-500">PROJECTS</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm">
            Real enterprise solutions designed with absolute technical precision, engineered to scale effortlessly under high-throughput workloads.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group bg-[#F7F7F5]/40 rounded-none border border-[#1A1A1A]/10 overflow-hidden hover:border-[#1A1A1A] transition-all duration-300 flex flex-col justify-between"
              id={`project-card-${project.id}`}
            >
              {/* Card Upper Body */}
              <div className="p-8">
                {/* Category and timeline tags */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1 bg-[#1A1A1A] text-white">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/40 flex items-center gap-1.5 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    {project.timeline}
                  </span>
                </div>

                <h3 className="font-serif italic text-xl md:text-2xl text-[#1A1A1A] group-hover:text-gold-500 transition-colors mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[#1A1A1A]/40 mb-4 font-bold">
                  {project.tagline}
                </p>
                <p className="text-[#1A1A1A]/70 font-sans font-light text-xs md:text-sm leading-relaxed mb-6">
                  {project.overview}
                </p>

                {/* KPI numbers row */}
                <div className="grid grid-cols-2 gap-4 bg-white p-5 border border-[#1A1A1A]/10">
                  {project.impactMetrics.map((m, idx) => (
                    <div key={idx} className="border-l-2 border-[#1A1A1A]/20 pl-3">
                      <div className="text-xl md:text-2xl font-serif italic text-gold-500">
                        {m.value}
                      </div>
                      <div className="text-[9px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest mt-0.5 font-bold">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Badges inline */}
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {project.techStack.slice(0, 3).map((item) => (
                    <span key={item} className="text-[9px] font-mono bg-[#F7F7F5] border border-[#1A1A1A]/10 px-2.5 py-1 text-[#1A1A1A]/60">
                      {item}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[9px] font-mono bg-[#F7F7F5] border border-[#1A1A1A]/10 px-1.5 py-1 text-gold-600 font-bold">
                      +{project.techStack.length - 3} MORE
                    </span>
                  )}
                </div>
              </div>

              {/* Action Trigger row */}
              <div className="bg-[#F7F7F5] p-6 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <span className="text-[9px] font-mono text-[#1A1A1A]/30 uppercase tracking-widest font-bold">
                  Case Dossier Available
                </span>
                <button
                  onClick={() => setSelectedProjectId(project.id)}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A] hover:text-gold-500 font-bold group cursor-pointer"
                  id={`project-btn-${project.id}`}
                >
                  <span>Review Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Details Modal Overlay */}
        <AnimatePresence>
          {selectedProjectId && activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Glass backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProjectId(null)}
                className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-xs"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.98, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.98, y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative bg-white border border-[#1A1A1A]/20 shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 p-8 flex flex-col"
                id="project-detail-modal"
              >
                {/* Close Button Button */}
                <button
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-6 right-6 p-1.5 text-[#1A1A1A]/40 hover:text-[#1A1A1A] hover:bg-[#F7F7F5] transition-colors"
                  aria-label="Close case study details"
                  id="modal-close-btn"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header info */}
                <div className="mb-8 border-b border-[#1A1A1A]/10 pb-6">
                  <span className="text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1 bg-gold-400 text-[#1A1A1A]">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl font-serif italic text-[#1A1A1A] mt-4 leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-[10px] font-mono tracking-widest text-[#1A1A1A]/40 mt-1 uppercase font-bold">
                    {activeProject.tagline}
                  </p>
                </div>

                {/* Content details grids */}
                <div className="flex flex-col gap-6 text-left">
                  
                  {/* Problem & Challenge */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-2">
                      The Operational Challenge:
                    </h4>
                    <p className="text-[#1A1A1A]/80 font-sans font-light text-xs leading-relaxed bg-[#F7F7F5] p-5 border-l-2 border-[#1A1A1A]/20">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Engineered Solution */}
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-2">
                      Our Engineered Solution:
                    </h4>
                    <p className="text-[#1A1A1A]/80 font-sans font-light text-xs leading-relaxed bg-[#F7F7F5] p-5 border-l-2 border-gold-500">
                      {activeProject.solution}
                    </p>
                  </div>

                  {/* Impact Metrics and tech stack row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-4">
                    {/* Metrics */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-3">
                        Performance Metrics:
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {activeProject.impactMetrics.map((m, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-[#F7F7F5] border border-[#1A1A1A]/10">
                            <span className="text-xs text-[#1A1A1A]/60 font-medium font-sans">{m.label}</span>
                            <span className="text-sm font-serif italic font-bold text-gold-600">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Stack Badging */}
                    <div>
                      <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-3">
                        Architectural Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-[#F7F7F5] border border-[#1A1A1A]/10 text-[9px] font-mono font-bold text-[#1A1A1A] tracking-wide"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer close */}
                <div className="border-t border-[#1A1A1A]/10 mt-8 pt-6 text-right">
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="px-6 py-3 bg-[#1A1A1A] text-white text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-[#1A1A1A] transition-all duration-300 cursor-pointer"
                    id="modal-close-action"
                  >
                    Dismiss Case STUDY
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
