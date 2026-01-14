import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  // On home page, we want a transparent header initially
  // On mobile, if the menu is open, we force it to be non-transparent for readability
  const isTransparent = currentPage === 'home' && !isScrolled && !isMobileMenuOpen;
  
  const navLinks: { label: string; page: Page }[] = [
    { label: 'Destinations', page: 'destinations' },
    { label: 'Tours', page: 'tours' },
    { label: 'Cruises', page: 'cruises' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isTransparent 
            ? 'bg-transparent border-transparent py-5 md:py-6' 
            : 'bg-white/95 backdrop-blur-md border-b border-[#f4f3f0] py-3 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo Area */}
            <div 
              className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0" 
              onClick={() => onNavigate('home')}
            >
              <div className="text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl filled">panorama_vertical</span>
              </div>
              <span className={`text-lg md:text-xl font-black tracking-tighter ${isTransparent ? 'text-white' : 'text-text-main'} hidden xs:block`}>
                TravelEgypt
              </span>
            </div>

            {/* Desktop Navigation (Center) */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`text-sm font-bold tracking-tight transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full ${
                    isTransparent ? 'text-white/90 hover:text-white' : 'text-text-main hover:text-primary'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions (Right) */}
            <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
              
              {/* Currency/Lang - Hidden on mobile, visible on large */}
              <div className={`hidden lg:flex items-center gap-4 border-r pr-4 ${isTransparent ? 'border-white/20' : 'border-gray-200'}`}>
                <button className={`text-xs font-black uppercase tracking-widest ${isTransparent ? 'text-white' : 'text-text-main'} hover:text-primary transition-colors`}>USD ($)</button>
              </div>
              
              {/* Auth / Dashboard Profile */}
              {currentPage === 'dashboard' ? (
                 <div className="flex items-center gap-3">
                   <button className={`p-2 transition-colors ${isTransparent ? 'text-white/80 hover:text-white' : 'text-text-muted hover:text-primary'}`}>
                     <span className="material-symbols-outlined text-[22px]">notifications</span>
                   </button>
                   <div 
                    onClick={() => onNavigate('dashboard')}
                    className="size-8 md:size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black border-2 border-primary/20 hover:border-primary transition-all cursor-pointer text-xs md:text-sm"
                   >
                      AH
                   </div>
                 </div>
              ) : (
                <div className="flex items-center gap-2 sm:gap-3">
                  <button 
                    onClick={() => onNavigate('auth')}
                    className={`text-xs md:text-sm font-black uppercase tracking-widest px-2 py-2 transition-all hover:text-primary ${isTransparent ? 'text-white' : 'text-text-main'}`}
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => onNavigate('auth')}
                    className="bg-primary hover:bg-primary-hover text-[#181511] text-[10px] md:text-xs font-black uppercase tracking-widest px-3 md:px-6 py-2 md:py-3 rounded-full transition-all shadow-lg shadow-primary/20 active:scale-95"
                  >
                    Join
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle (Only on md and below) */}
              <button 
                className={`lg:hidden p-2 rounded-full transition-all ${isTransparent ? 'text-white hover:bg-white/10' : 'text-text-main hover:bg-gray-100'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="material-symbols-outlined text-[28px]">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[60] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-3xl filled">panorama_vertical</span>
                  <span className="text-xl font-black tracking-tight text-text-main">TravelEgypt</span>
                </div>
                <button 
                  className="p-2 text-text-main"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.page}
                      onClick={() => onNavigate(link.page)}
                      className="text-2xl font-black text-text-main py-4 text-left border-b border-gray-50 flex items-center justify-between group"
                    >
                      {link.label}
                      <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-all">arrow_forward</span>
                    </button>
                  ))}
                </div>
              </nav>

              <div className="p-8 bg-gray-50/80 border-t border-gray-100">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Experience Excellence</p>
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="w-full py-4 bg-white border border-gray-200 rounded-2xl font-bold text-text-main shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-primary">support_agent</span>
                    Get Help
                  </button>
                  <div className="flex gap-4 justify-center pt-4">
                    {['public', 'photo_camera', 'mail'].map((icon) => (
                      <button key={icon} className="size-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-text-muted hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[20px]">{icon}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};