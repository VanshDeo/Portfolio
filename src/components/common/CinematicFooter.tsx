'use client';

import { navbarConfig } from '@/config/Navbar';
import React from 'react';

export default function CinematicFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      aria-label="Footer"
      className="py-16 bg-[#0B0B0B] text-[#F0EFEC] border-t border-[#222222]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#222222]">
          
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#C65B4D] font-mono">✳</span>
              <span className="font-display uppercase text-2xl tracking-wider font-bold">
                VANSH DEO
              </span>
            </div>
            <p className="text-xs font-mono text-[#A3A09C]">
              Web3 Developer & AI/ML Engineer
            </p>
          </div>

          {/* Quick Nav */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-wider text-[#A3A09C]">
            {navbarConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#F0EFEC] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#161616] border border-[#2A2A2A] text-xs font-mono uppercase tracking-wider text-[#A3A09C] hover:text-[#F0EFEC] hover:border-[#C65B4D] transition-colors"
          >
            <span>Top</span>
            <span className="text-[#C65B4D]">↑</span>
          </button>
        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A3A09C]/60">
          <p>
            © {new Date().getFullYear()} Vansh Deo. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Palette: #101010 & #C65B4D</span>
            <span className="size-1.5 rounded-full bg-[#C65B4D]" />
            <span>Built with Next.js & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
