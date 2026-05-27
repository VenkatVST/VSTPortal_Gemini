import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Server, Cloud, ShieldCheck, CheckCircle2, Cpu, Sparkles } from 'lucide-react';
import { CompetencyCategory } from '../types';

const COMPETENCY_DATA: CompetencyCategory[] = [
  {
    id: 'development',
    title: 'Software Development',
    iconName: 'Code',
    description: 'Engineering resilient backend kernels, performant administrative portals, and AI-accelerated systems tailored to enterprise scalability.',
    technologies: ['C#', 'TypeScript', 'Vite', 'React', 'RESTful Core'],
    items: [
      {
        title: 'Enterprise Application Development',
        description: 'Bespoke corporate application architectures configured safely for multi-tier isolation and reliable concurrent workloads.',
        badge: 'Enterprise Core'
      },
      {
        title: 'Web Portal & Dashboard Development',
        description: 'Interactive analytics frameworks and responsive administration suites using modern SPA architectures with instant render speeds.',
        badge: 'Modern SPA'
      },
      {
        title: 'RESTful Web APIs',
        description: 'Secure, contract-first HTTP endpoints featuring precise payload compression, token validation, and rate-limiting rules.',
        badge: 'Hyper-Performant'
      },
      {
        title: 'AI-Assisted App Development',
        description: 'Next-gen software delivery workflows matching standard structures with context-aware code-gen and automated pipeline scaffolding.',
        badge: 'AI Accelerated'
      },
      {
        title: 'Legacy System Modernization',
        description: 'Systematic decoupled migrations converting legacy monolithic codebases to microservices, removing architectural dependencies.',
        badge: 'Modernization'
      }
    ]
  },
  {
    id: 'microsoft',
    title: 'Microsoft Technologies',
    iconName: 'Server',
    description: 'Harnessing the complete capabilities of Microsoft enterprise solutions to provide reliable systems.',
    technologies: ['.NET 9 Core', 'ASP.NET Core', 'C# 13', 'MS SQL Server', 'Azure App Services'],
    items: [
      {
        title: '.NET Framework & .NET Core',
        description: 'Highlyoptimized cross-platform runtimes deploying high-performant system kernels in container platforms like Docker.',
        badge: 'CLR Optimized'
      },
      {
        title: 'ASP.NET MVC & Web API',
        description: 'Standard modern framework designs built to expose resilient JSON/gRPC data pathways to client consumers.',
        badge: 'Unified Stacks'
      },
      {
        title: 'MS SQL Server Database Systems',
        description: 'Robust operational relational storage designed alongside indexed staging, custom views, and trigger gateways.',
        badge: 'Secure DB'
      },
      {
        title: 'Azure Functions & Serverless',
        description: 'Serverless execution instances triggering instantly off blob uploads, service buses, or direct HTTP webhooks.',
        badge: 'Zero-Idle'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & Architecture',
    iconName: 'Cloud',
    description: 'Architecting modern distributed microservice infrastructures to achieve high uptime and resilient scalability.',
    technologies: ['Azure Cloud', 'Docker', 'Kubernetes', 'gRPC', 'RabbitMQ'],
    items: [
      {
        title: 'Microservices Architecture',
        description: 'Independent, loosely-coupled domain microservices talking smoothly over rabbitMQ message buses or ultra-fast gRPC protocols.',
        badge: 'Decoupled'
      },
      {
        title: 'Microsoft Azure Hosting Platforms',
        description: 'Engineered secure networking, virtual networks, and redundant App Service plans configuring maximum load distribution.',
        badge: 'High Availability'
      },
      {
        title: 'Cloud-Native Solutions',
        description: 'Cloud native execution patterns adopting auto-scaling groups, cloud logging frameworks, and configuration vaults.',
        badge: 'Fail-Safe'
      },
      {
        title: 'Distributed Systems Design',
        description: 'Designing fault-tolerant transactional workflows utilizing Saga patterns, distributed locks, and horizontal scale pathways.',
        badge: 'Resilient Design'
      }
    ]
  },
  {
    id: 'quality',
    title: 'Quality Engineering',
    iconName: 'ShieldCheck',
    description: 'Transforming testing pipelines into automated assurance networks, lowering manual effort and production defects to 0.',
    technologies: ['Selenium WebDriver', 'NUnit / C#', 'POM Pattern', 'CI/CD Pipelines'],
    items: [
      {
        title: 'Selenium Automation Testing',
        description: 'Multi-threaded, reliable browser automated testing execution maps built with Page Object Model (POM) standards.',
        badge: 'Selenium POM'
      },
      {
        title: 'Functional & Regression Testing',
        description: 'Verifying end-to-end operational behaviors, critical paths, security profiles, and edge-case exceptions.',
        badge: 'Exhaustive Coverage'
      },
      {
        title: 'Test Automation Frameworks',
        description: 'Designing bespoke modular automation frameworks built natively inside CI/CD gateways (Azure DevOps / GitHub Actions).',
        badge: 'DevOps Native'
      },
      {
        title: 'QA Process Engineering',
        description: 'Architecting early quality checks and static analysis tools direct inside git commit cycles (Shift-Left validation).',
        badge: 'Shift-Left'
      }
    ]
  }
];

export default function CoreCompetencies() {
  const [activeTab, setActiveTab] = useState('development');

  const selectedCategory = COMPETENCY_DATA.find((cat) => cat.id === activeTab) || COMPETENCY_DATA[0];

  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Code': return <Code className={className} />;
      case 'Server': return <Server className={className} />;
      case 'Cloud': return <Cloud className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      default: return <Code className={className} />;
    }
  };

  return (
    <section id="competencies" className="py-24 bg-white border-t border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 border-l border-[#1A1A1A] pl-6">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-3 block">
            02 — SKILLS & EXPERTISE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic font-light text-[#1A1A1A] tracking-tight">
            Our Core <span className="font-sans font-bold not-italic font-black text-gold-500">COMPETENCIES</span>
          </h2>
          <p className="mt-4 text-[#1A1A1A]/70 font-sans font-light leading-relaxed text-sm">
            Delivering future-ready modular enterprise networks, microservices configurations, and high-performance automated quality gateways.
          </p>
        </div>

        {/* Tab Selection Row - Flat & sharp rectangular buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12 border-b border-[#1A1A1A]/10 pb-8">
          {COMPETENCY_DATA.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-4 font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-[#F7F7F5] text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5 border border-[#1A1A1A]/5'
                }`}
                id={`tab-btn-${cat.id}`}
              >
                {renderIcon(cat.iconName, `w-4 h-4 ${isActive ? 'text-gold-500' : 'text-[#1A1A1A]/40'}`)}
                <span className="font-semibold">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Showcase Pane - Sharp black and beige frame block */}
        <div className="border border-[#1A1A1A]/10 bg-white p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-stretch" id="competency-detail-pane">
          
          {/* Left Side: Category Meta Data */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div>
              <div className="inline-flex p-3 bg-[#F7F7F5] border border-[#1A1A1A]/10 text-gold-500 mb-6">
                {renderIcon(selectedCategory.iconName, 'w-8 h-8')}
              </div>
              <h3 className="text-2xl md:text-3.51xl font-serif italic text-[#1A1A1A] mb-4">
                {selectedCategory.title}
              </h3>
              <p className="text-[#1A1A1A]/70 font-sans font-light text-sm leading-relaxed mb-8">
                {selectedCategory.description}
              </p>
            </div>

            {/* Stack items - Editorial Technical look */}
            <div className="border-t border-[#1A1A1A]/10 pt-6">
              <div className="text-[10px] font-mono font-bold text-[#1A1A1A]/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-pulse" />
                Primary Technology Vector:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCategory.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 bg-[#F7F7F5] border border-[#1A1A1A]/10 text-[10px] font-mono font-medium text-[#1A1A1A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Specific Bullet Cases & Badges */}
          <div className="lg:w-7/12 flex flex-col gap-6">
            <div className="text-[10px] font-mono font-bold text-[#1A1A1A]/30 uppercase tracking-[0.2em] mb-2">
              Operational Framework Capabilities:
            </div>

            <div className="grid grid-cols-1 gap-4">
              {selectedCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#F7F7F5]/40 border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 hover:bg-[#F7F7F5]/80 transition-all duration-300 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="p-1.5 bg-white border border-[#1A1A1A]/10 text-gold-500 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-serif italic text-base text-[#1A1A1A] mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#1A1A1A]/60 font-sans font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <span className="sm:self-start text-[9px] font-mono font-bold uppercase px-3 py-1.5 bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 shrink-0 select-none tracking-widest">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
