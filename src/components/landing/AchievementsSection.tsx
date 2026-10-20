'use client';

import { achievements } from '@/config/Achievements';
import React from 'react';

export default function AchievementsSection() {
  return (
    <section
      id="community"
      aria-label="Achievements and Community"
      className="relative py-28 sm:py-36 bg-[#0E0E0E] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                06 // Community & Milestones
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Achievements & Impact
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Community initiatives, hackathon participation, and technical leadership.
          </p>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#383838] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#A3A09C] mb-3">
                  <span className="text-[#C65B4D] tracking-widest uppercase">
                    {item.roleOrAward}
                  </span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F0EFEC] mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs font-mono text-[#A3A09C] mb-4">
                  {item.organization}
                </div>

                <p className="text-sm text-[#A3A09C] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#222222] flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#262626] text-xs font-mono text-[#A3A09C]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
