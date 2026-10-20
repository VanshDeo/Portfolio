'use client';

import { projects } from '@/config/Projects';
import React from 'react';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="relative py-28 sm:py-36 bg-[#101010] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                03 // Selected Works
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Featured Engineering
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Selected systems across edge intelligence, zero-knowledge contracts, and scientific analysis.
          </p>
        </div>

        {/* Alternating Project Showcases */}
        <div className="mt-16 flex flex-col gap-24 sm:gap-32">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <article
                key={project.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center group"
              >
                {/* Visual / Graphic Presentation */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-[#161616] border border-[#2A2A2A] group-hover:border-[#C65B4D]/50 transition-all duration-300 p-8 sm:p-12 min-h-[300px] sm:min-h-[380px] flex flex-col justify-between">
                    
                    {/* Background glow and subtle geometry */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#C65B4D]/10 to-transparent rounded-full blur-3xl pointer-events-none"
                    />

                    {/* Top graphic indicator */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#A3A09C] relative z-10">
                      <span className="px-3 py-1 rounded-full bg-[#1F1F1F] border border-[#2A2A2A] text-[#C65B4D]">
                        {project.category || 'Engineering'}
                      </span>
                      <span className="tracking-widest">
                        CASE // 0{idx + 1}
                      </span>
                    </div>

                    {/* Center high-impact graphic moniker */}
                    <div className="my-8 relative z-10">
                      <div className="text-5xl sm:text-7xl lg:text-8xl font-display uppercase tracking-tight text-[#2A2A2A] group-hover:text-[#383838] transition-colors select-none">
                        {project.title}
                      </div>
                      <div className="text-xs font-mono text-[#C65B4D] mt-2 flex items-center gap-2">
                        <span>●</span>
                        <span>DEPLOYED / REPRODUCIBLE SYSTEM</span>
                      </div>
                    </div>

                    {/* Bottom technology pills */}
                    <div className="flex flex-wrap gap-2 relative z-10 pt-4 border-t border-[#242424]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="px-2.5 py-1 rounded bg-[#1A1A1A] border border-[#2A2A2A] text-[11px] font-mono text-[#A3A09C]"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content & Problem-Approach Description */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-[#C65B4D]">
                      0{idx + 1}.
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#A3A09C]">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display uppercase text-3xl sm:text-5xl tracking-wide text-[#F0EFEC]">
                    {project.title}
                  </h3>

                  <p className="text-base text-[#A3A09C] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem & Approach breakdown */}
                  <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#141414] border border-[#262626]">
                    {project.problem && (
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#C65B4D] block mb-1">
                          Problem
                        </span>
                        <p className="text-xs sm:text-sm text-[#A3A09C] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.contribution && (
                      <div className="pt-3 border-t border-[#222222]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#F0EFEC] block mb-1">
                          Approach & Contribution
                        </span>
                        <p className="text-xs sm:text-sm text-[#A3A09C] leading-relaxed">
                          {project.contribution}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md bg-[#181818] border border-[#2A2A2A] text-[#F0EFEC] hover:border-[#C65B4D] hover:bg-[#1F1F1F] transition-all"
                      >
                        <span>Source Code</span>
                        <span className="text-[#C65B4D]">↗</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-md bg-[#1C1C1C] border border-[#C65B4D]/40 text-[#F0EFEC] hover:bg-[#C65B4D] hover:text-white transition-all"
                      >
                        <span>Explore Project</span>
                        <span>→</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
