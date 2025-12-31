
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Why KonnectMD', href: '#why-choose' },
    { label: 'Services', href: '#services' },
    { label: 'For Business', href: '#business' },
    { label: 'GLP-1', href: '#glp-program' },
    { label: 'Plans', href: '#pricing' }
  ];

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetStarted = () => {
    toast({
      description: "🚧 Membership portals are opening soon. Join the waitlist! 🚀",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#F5F9FF]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#4169E1] rounded-full flex items-center justify-center text-white font-serif italic font-bold text-xl shadow-lg group-hover:bg-[#0F1D3A] transition-colors duration-300">
                K
              </div>
              <span className="text-2xl font-serif font-bold text-[#0F1D3A] tracking-tight">KonnectMD</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-sm font-medium text-[#0F1D3A]/80 hover:text-[#4169E1] transition-colors font-sans tracking-wide uppercase text-xs"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button 
                onClick={handleGetStarted}
                className="bg-[#0F1D3A] hover:bg-[#4169E1] text-[#F5F9FF] px-8 py-2 rounded-full font-serif italic transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Start Now
              </Button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 z-10 text-[#0F1D3A]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed inset-0 bg-gradient-to-br from-[#DDEBFF] to-white z-40 pt-24"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-3xl font-serif text-[#0F1D3A] hover:text-[#4169E1] transition-colors italic"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button 
                onClick={() => {
                  handleGetStarted();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#4169E1] text-white px-10 py-6 rounded-full text-xl font-serif mt-8"
              >
                Start Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
