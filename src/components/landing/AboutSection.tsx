'use client';

import { about } from '@/config/About';
import { motion } from 'motion/react';
import React from 'react';

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Vansh Deo"
      className="relative pt-14 sm:pt-20 pb-28 sm:pb-36 bg-[#101010] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with fine label */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                01 // Narrative & Perspective
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Engineering at the Intersection
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Decentralized Protocols ✕ Edge AI ✕ Scalable Software
          </p>
        </div>

        {/* Editorial Narrative Split Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Lead Statement */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-light text-[#F0EFEC] leading-relaxed tracking-tight">
              &ldquo;{about.tagline}&rdquo;
            </h3>

            <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2A] relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 size-32 bg-[#C65B4D]/10 rounded-full blur-2xl pointer-events-none"
              />
              <span className="text-xs font-mono uppercase tracking-widest text-[#C65B4D] block mb-2">
                Core Philosophy
              </span>
              <p className="text-sm text-[#A3A09C] leading-relaxed">
                Software is at its best when computation is decentralized, models run privately on-device, and architecture is engineered with mathematical clarity.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-base sm:text-lg text-[#A3A09C] leading-relaxed">
            {about.longBio.map((paragraph, idx) => (
              <p key={idx} className="text-pretty">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#A3A09C]">
              <div className="px-3 py-1.5 rounded-md bg-[#181818] border border-[#2A2A2A] flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for high-impact technical initiatives</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#181818] border border-[#2A2A2A]">
                Location: Kalyani / Remote
              </div>
            </div>
          </div>

        </div>

        {/* 4 Focus Areas Cards Grid */}
        <div className="mt-20 pt-16 border-t border-[#2A2A2A]/60">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A3A09C] mb-8">
            Key Architectural Pillars
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-xl bg-[#161616] border border-[#2A2A2A] hover:border-[#C65B4D]/60 transition-colors group relative flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#A3A09C] group-hover:text-[#C65B4D] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="size-1 rounded-full bg-[#C65B4D]" />
                  </div>
                  <h5 className="font-semibold text-lg text-[#F0EFEC] group-hover:text-white transition-colors mb-2">
                    {area.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-[#A3A09C] leading-relaxed">
                    {area.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#2A2A2A]/40 flex justify-end">
                  <span className="text-xs font-mono text-[#C65B4D] opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
