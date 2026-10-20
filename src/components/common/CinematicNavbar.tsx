'use client';

import { navbarConfig } from '@/config/Navbar';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function CinematicNavbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroZoomed, setIsHeroZoomed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleZoomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ isZoomed: boolean }>;
      setIsHeroZoomed(Boolean(customEvent.detail?.isZoomed));
    };

    if (typeof document !== 'undefined') {
      setIsHeroZoomed(document.documentElement.dataset.heroZoomed === 'true');
    }

    window.addEventListener('hero-zoom', handleZoomEvent);
    return () => window.removeEventListener('hero-zoom', handleZoomEvent);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section tracking
      const sections = ['about', 'projects', 'skills', 'research', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isVisible = isHeroZoomed || isScrolled;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8',
          isVisible
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4',
          isScrolled
            ? 'py-3 bg-[#101010]/85 backdrop-blur-md border-b border-[#2A2A2A]/80 shadow-lg shadow-black/40'
            : 'py-5 bg-gradient-to-b from-[#101010]/90 to-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-[#F0EFEC] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C65B4D]"
          >
            <span className="text-[#C65B4D] font-mono text-lg transition-transform duration-300 group-hover:rotate-45 inline-block">
              ✳
            </span>
            <div className="flex flex-col">
              <span className="font-display tracking-wider text-xl uppercase font-bold text-[#F0EFEC] group-hover:text-white transition-colors">
                {navbarConfig.brand}
              </span>
              <span className="text-[10px] tracking-widest text-[#A3A09C] uppercase font-mono -mt-1 hidden sm:block">
                {navbarConfig.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#181818]/60 border border-[#2A2A2A]/60 backdrop-blur-sm"
          >
            {navbarConfig.navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'relative px-3.5 py-1 text-xs uppercase tracking-widest font-medium transition-all duration-200 rounded-full',
                    isActive
                      ? 'text-[#F0EFEC] font-semibold'
                      : 'text-[#A3A09C] hover:text-[#F0EFEC] hover:bg-[#202020]'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-[#252525] rounded-full border border-[#C65B4D]/40"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {isActive && <span className="size-1 rounded-full bg-[#C65B4D]" />}
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-widest font-medium rounded-full border border-[#C65B4D]/60 text-[#F0EFEC] bg-[#181818] hover:bg-[#C65B4D] hover:text-white transition-all duration-200 shadow-sm hover:shadow-[#C65B4D]/20 hover:shadow-lg"
            >
              <span>Let&apos;s Talk</span>
              <span className="text-[#C65B4D] group-hover:text-white">→</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden flex flex-col justify-center items-center size-9 rounded-md bg-[#181818] border border-[#2A2A2A] text-[#F0EFEC] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C65B4D]"
            >
              <span
                className={cn(
                  'w-4 h-0.5 bg-[#F0EFEC] transition-all duration-200 mb-1',
                  mobileMenuOpen && 'rotate-45 translate-y-1.5'
                )}
              />
              <span
                className={cn(
                  'w-4 h-0.5 bg-[#F0EFEC] transition-all duration-200',
                  mobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-4 h-0.5 bg-[#F0EFEC] transition-all duration-200 mt-1',
                  mobileMenuOpen && '-rotate-45 -translate-y-1.5'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#141414] border-b border-[#2A2A2A] p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {navbarConfig.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm uppercase tracking-wider font-medium text-[#A3A09C] hover:text-[#F0EFEC] hover:bg-[#1C1C1C] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#C65B4D] font-mono">→</span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#2A2A2A] mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block px-4 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold bg-[#C65B4D] text-white hover:bg-[#943E35] transition-colors"
                >
                  Let&apos;s Talk →
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
