'use client';

import { experiences } from '@/config/Experience';
import React from 'react';

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      aria-label="Experience & Journey"
      className="relative py-28 sm:py-36 bg-[#101010] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                05 // Experience & Roles
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Technical Journey
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Leadership, research projects, and open-source milestones.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="mt-16 relative border-l border-[#2A2A2A] ml-3 sm:ml-8 pl-6 sm:pl-10 space-y-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Glowing Timeline Marker */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1 size-4 rounded-full border-2 bg-[#101010] transition-all duration-300 ${
                  exp.isCurrent
                    ? 'border-[#C65B4D] shadow-[0_0_12px_#C65B4D]'
                    : 'border-[#444444] group-hover:border-[#C65B4D]'
                }`}
              />

              <div className="p-6 sm:p-8 rounded-2xl bg-[#161616] border border-[#2A2A2A] group-hover:border-[#383838] transition-colors">
                
                {/* Header with Role and Dates */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono text-[#C65B4D] tracking-widest uppercase block mb-1">
                      {exp.company}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F0EFEC]">
                      {exp.position}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A3A09C] bg-[#1F1F1F] px-3 py-1 rounded-md border border-[#2A2A2A] w-fit">
                    <span>
                      {exp.startDate} — {exp.endDate}
                    </span>
                    {exp.isCurrent && (
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                  </div>
                </div>

                <div className="text-xs font-mono text-[#A3A09C] mb-4">
                  {exp.location}
                </div>

                {/* Description Bullets */}
                <div className="space-y-2 mb-6">
                  {exp.description.map((bullet, bulletIdx) => (
                    <p
                      key={bulletIdx}
                      className="text-sm text-[#A3A09C] leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[#C65B4D] font-mono mt-0.5">›</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-4 border-t border-[#242424] flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t.name}
                      className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-xs font-mono text-[#A3A09C]"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
