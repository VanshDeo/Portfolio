'use client';

import { skillGroups } from '@/config/Skills';
import { cn } from '@/lib/utils';
import React from 'react';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative py-28 sm:py-36 bg-[#121212] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                02 // Tooling & Technologies
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Technical Capability
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Practiced tooling across machine learning, decentralized systems, and web architecture.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={group.category}
              className="p-6 sm:p-7 rounded-2xl bg-[#161616] border border-[#2A2A2A] hover:border-[#333333] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#A3A09C]">
                    Group 0{groupIdx + 1}
                  </span>
                  <span className="size-1 rounded-full bg-[#C65B4D]" />
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#F0EFEC] mb-2">
                  {group.category}
                </h3>
                <p className="text-xs text-[#A3A09C] leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Badges / Typographic Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        'px-3 py-1.5 rounded-md text-xs font-mono transition-colors border',
                        skill.highlight
                          ? 'bg-[#1C1C1C] border-[#C65B4D]/40 text-[#F0EFEC] hover:border-[#C65B4D]'
                          : 'bg-[#181818] border-[#2A2A2A] text-[#A3A09C] hover:text-[#F0EFEC]'
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-[11px] font-mono text-[#A3A09C]/60">
                <span>Production & Labs</span>
                <span className="text-[#C65B4D]">●</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
