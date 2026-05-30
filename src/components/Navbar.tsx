import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import HeaderLogo from './HeaderLogo';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Competencies', href: '#competencies' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why VSquareThoughts', href: '#why-choose-us' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor page scroll position to change background state and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scrollspy implementation
      const scrollPosition = window.scrollY + 120;
      const sections = ['about', 'competencies', 'leadership', 'projects', 'why-choose-us', 'contact'];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#1A1A1A]/10 py-3'
            : 'bg-[#F7F7F5]/50 border-b border-[#1A1A1A]/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Company Brand Logo */}
          <div>
            <img 
              src="/VSquareThoughts.png" 
              alt="VSquarethoughts" 
              style={{ width: '290px', height: '70px', objectFit:'fill', transition:'transform var(--transition-fast)'}}
              referrerPolicy="no-referrer"
            />
          </div> 

          {/* Desktop Navigation Link Items (Editorial spaced lowercase/uppercase blend) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  id={`nav-link-${item.href.replace('#', '')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] font-medium relative py-2 transition-colors duration-300 hover:text-[#1A1A1A]"
                  style={{ color: isActive ? 'var(--color-gold-500)' : 'rgba(26, 26, 26, 0.6)' }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBubble"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#1A1A1A]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>



          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#F7F7F5] border-b border-[#1A1A1A]/10 shadow-lg md:hidden overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex items-center justify-between py-2 text-left font-mono text-xs uppercase tracking-widest group"
                    style={{ color: isActive ? 'var(--color-gold-500)' : '#1A1A1A' }}
                    id={`mobile-nav-link-${item.href.replace('#', '')}`}
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 text-gold-500 transition-opacity">
                      &rarr;
                    </span>
                  </button>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
