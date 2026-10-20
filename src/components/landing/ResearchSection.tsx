'use client';

import { researchTracks } from '@/config/Research';
import React from 'react';

export default function ResearchSection() {
  return (
    <section
      id="research"
      aria-label="Research and Applied Engineering"
      className="relative py-28 sm:py-36 bg-[#0E0E0E] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                04 // Applied Research & Experiments
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Research Tracks
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Deep-dive explorations across on-device quantization, cryptographic proofs, and space telemetry.
          </p>
        </div>

        {/* Research Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {researchTracks.map((track) => (
            <div
              key={track.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#C65B4D]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge and Status */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-[#C65B4D] tracking-widest uppercase bg-[#1F1F1F] px-3 py-1 rounded-full border border-[#2A2A2A]">
                    {track.badge}
                  </span>
                  <span className="text-[11px] font-mono text-[#A3A09C] flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    {track.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F0EFEC] group-hover:text-white transition-colors mb-2 leading-snug">
                  {track.title}
                </h3>

                <p className="text-xs font-mono text-[#A3A09C] mb-4 text-pretty">
                  {track.subtitle}
                </p>

                <p className="text-sm text-[#A3A09C] leading-relaxed mb-6">
                  {track.summary}
                </p>

                {/* Key Insights List */}
                <div className="space-y-2.5 pt-4 border-t border-[#222222] mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#F0EFEC] block mb-2">
                    Key Outcomes & Findings:
                  </span>
                  {track.keyInsights.map((insight, insightIdx) => (
                    <div
                      key={insightIdx}
                      className="flex items-start gap-2 text-xs text-[#A3A09C] leading-relaxed"
                    >
                      <span className="text-[#C65B4D] font-mono mt-0.5">›</span>
                      <span>{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-[#222222] flex flex-wrap gap-1.5">
                {track.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#1A1A1A] border border-[#262626] text-[#A3A09C]"
                  >
                    {t}
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
