'use client';

import Image from 'next/image';
import React from 'react';

interface HeroScreenContentProps {
  isFullView?: boolean;
}

export default function HeroScreenContent({ isFullView = false }: HeroScreenContentProps) {
  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between bg-[#101010] text-[#F0EFEC] select-none overflow-hidden ${
        isFullView
          ? 'min-h-screen px-4 sm:px-8 md:px-14 lg:px-20 pt-24 pb-12'
          : 'p-3 sm:p-5 md:p-7'
      }`}
    >
      {/* Subtle warm terracotta radial ambient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_68%_50%,rgba(198,91,77,0.18)_0%,transparent_65%)]"
      />

      {/* Top mini-bar inside screen (only shown when inside laptop, full view uses main navbar) */}
      {!isFullView ? (
        <div className="relative z-20 flex items-center justify-between w-full pb-2 sm:pb-3 border-b border-[#2A2A2A]/40">
          {/* Brand Asterisk */}
          <div className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer">
            <span className="text-[#F0EFEC] text-base sm:text-lg md:text-xl font-bold transition-transform duration-300 group-hover:rotate-45">
              ✳
            </span>
          </div>

          {/* Center Links */}
          <nav className="hidden sm:flex items-center gap-4 md:gap-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#A3A09C]">
            <span className="text-[#F0EFEC] font-semibold relative py-0.5">
              Home
              <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F0EFEC]" />
            </span>
            <span className="hover:text-[#F0EFEC] transition-colors">About</span>
            <span className="hover:text-[#F0EFEC] transition-colors">Projects</span>
            <span className="hover:text-[#F0EFEC] transition-colors">Experience</span>
            <span className="hover:text-[#F0EFEC] transition-colors">Contact</span>
          </nav>

          {/* Pill Button */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-[#3A3A3A] bg-[#141414] text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-wider text-[#F0EFEC]">
            <span>Let&apos;s Talk</span>
            <span className="text-[#C65B4D]">→</span>
          </div>
        </div>
      ) : (
        /* In full view, clean top spacer */
        <div className="w-full h-2" />
      )}

      {/* Main Grid: Left Vertical Tag + Content + Portrait Visual + Right Vertical Tag */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-4 sm:gap-6 md:gap-8 my-auto w-full max-w-7xl mx-auto">
        
        {/* Left Vertical Side Indicator */}
        <div className="hidden xl:flex col-span-1 flex-col items-center justify-center gap-4 select-none opacity-80">
          <div className={`w-[1px] ${isFullView ? 'h-16' : 'h-10'} bg-[#2A2A2A]`} />
          <span
            className={`[writing-mode:vertical-lr] rotate-180 font-mono ${
              isFullView ? 'text-[10px]' : 'text-[8px]'
            } tracking-[0.25em] text-[#A3A09C] uppercase`}
          >
            WEB3 | AI/ML | FULL STACK
          </span>
          <div className={`w-[1px] ${isFullView ? 'h-16' : 'h-10'} bg-[#2A2A2A]`} />
        </div>

        {/* Left Column: Heading, Subtitle, Description, CTA */}
        <div
          className={`lg:col-span-6 xl:col-span-5 flex flex-col justify-center items-start ${
            isFullView ? 'gap-4 sm:gap-6 pl-0 xl:pl-4' : 'gap-1.5 sm:gap-2.5 md:gap-3 pl-0'
          }`}
        >
          {/* Eyebrow */}
          <span
            className={`font-mono uppercase tracking-[0.25em] text-[#A3A09C] ${
              isFullView ? 'text-xs sm:text-sm' : 'text-[9px] sm:text-[10px] md:text-xs'
            }`}
          >
            HELLO, I&apos;M
          </span>

          {/* Giant Condensed Headline in Bebas Neue */}
          <h1
            className={`font-display uppercase tracking-tight leading-[0.88] text-[#F0EFEC] select-none drop-shadow-sm ${
              isFullView
                ? 'text-7xl sm:text-8xl md:text-9xl lg:text-[10rem]'
                : 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
            }`}
          >
            VANSH
          </h1>

          {/* Role Subtitle */}
          <div
            className={`font-mono uppercase tracking-[0.18em] font-semibold text-[#F0EFEC] ${
              isFullView ? 'text-sm sm:text-base md:text-lg' : 'text-[9px] sm:text-[11px] md:text-xs'
            }`}
          >
            WEB3 DEVELOPER <span className="text-[#C65B4D] font-bold">&</span> AI ENGINEER
          </div>

          {/* Description Paragraph */}
          <p
            className={`text-[#A3A09C] leading-relaxed font-sans ${
              isFullView
                ? 'text-sm sm:text-base max-w-md'
                : 'text-[9px] sm:text-[11px] md:text-xs max-w-xs'
            }`}
          >
            I build scalable web experiences, explore decentralized technologies and leverage AI to solve real world problems.
          </p>

          {/* Action Button */}
          <div className={isFullView ? 'pt-3' : 'pt-1.5 sm:pt-2'}>
            <a
              href="#projects"
              className={`inline-flex items-center gap-2.5 rounded-sm border border-[#3A3A3A] bg-[#141414] hover:bg-[#1E1E1E] hover:border-[#C65B4D] text-[#F0EFEC] font-mono uppercase tracking-widest transition-all duration-300 group shadow-lg ${
                isFullView
                  ? 'px-6 py-3 text-xs sm:text-sm'
                  : 'px-3.5 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px]'
              }`}
            >
              <span>VIEW MY WORK</span>
              <span className="text-[#C65B4D] group-hover:translate-x-1.5 transition-transform duration-200">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Terracotta Backdrop + Vansh Portrait + Rotating Badge */}
        <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center">
          <div
            className={`relative flex items-center justify-center ${
              isFullView
                ? 'size-[280px] sm:size-[340px] md:size-[400px] lg:size-[440px]'
                : 'size-[180px] sm:size-[220px] md:size-[260px] lg:size-[290px]'
            }`}
          >
            {/* Terracotta Rust Circle Backdrop */}
            <div
              aria-hidden="true"
              className="absolute inset-2 sm:inset-3 rounded-full bg-gradient-to-tr from-[#B24A3D] via-[#C65B4D] to-[#D66555] shadow-[0_0_80px_rgba(198,91,77,0.35)] pointer-events-none"
            />

            {/* Vansh Portrait */}
            <div className="relative z-10 w-full h-full flex items-end justify-center overflow-visible">
              <Image
                src="/assets/vansh-cutout-test.png"
                alt="Vansh Deo - Web3 Developer & AI Engineer"
                width={500}
                height={500}
                priority
                className="w-[92%] sm:w-[96%] h-auto object-contain object-bottom pointer-events-none select-none drop-shadow-2xl"
              />
            </div>

            {/* Floating Rotating "OPEN TO NEW PROJECTS" Badge */}
            <div className="absolute top-2 sm:top-4 -right-1 sm:-right-3 z-20 flex items-center justify-center pointer-events-none">
              <div
                className={`relative flex items-center justify-center ${
                  isFullView
                    ? 'size-24 sm:size-28 md:size-32'
                    : 'size-16 sm:size-20 md:size-22'
                }`}
              >
                {/* Spinning SVG Dashed Orbit with Code Glyphs */}
                <svg
                  className="absolute inset-0 size-full animate-[spin_20s_linear_infinite]"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id={isFullView ? 'fullCirclePath' : 'laptopCirclePath'}
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="37"
                    fill="none"
                    stroke="#A3A09C"
                    strokeWidth="0.75"
                    strokeDasharray="2 3"
                    opacity="0.45"
                  />
                  <text
                    fontSize="6.5"
                    fill="#A3A09C"
                    letterSpacing="2.2"
                    opacity="0.8"
                    className="font-mono uppercase font-medium"
                  >
                    <textPath href={isFullView ? '#fullCirclePath' : '#laptopCirclePath'}>
                      · AIML · DECENTRALIZED · FULLSTACK ·
                    </textPath>
                  </text>
                </svg>

                {/* Inner Bold Text */}
                <div
                  className={`flex flex-col items-center justify-center text-center font-mono uppercase font-bold text-[#C65B4D] leading-tight tracking-wider ${
                    isFullView
                      ? 'text-[8px] sm:text-[9px] md:text-[10px]'
                      : 'text-[6px] sm:text-[7px] md:text-[8px]'
                  }`}
                >
                  <span>OPEN</span>
                  <span>TO NEW</span>
                  <span>PROJECTS</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Vertical Side Indicator */}
        <div className="hidden xl:flex col-span-1 flex-col items-center justify-center gap-4 select-none opacity-80">
          <div className={`w-[1px] ${isFullView ? 'h-16' : 'h-10'} bg-[#2A2A2A]`} />
          <span
            className={`[writing-mode:vertical-lr] rotate-180 font-mono ${
              isFullView ? 'text-[10px]' : 'text-[8px]'
            } tracking-[0.25em] text-[#A3A09C] uppercase`}
          >
            BUILD | INNOVATE | SCALE
          </span>
          <div className={`w-[1px] ${isFullView ? 'h-16' : 'h-10'} bg-[#2A2A2A]`} />
        </div>

      </div>

      {/* Subtle bottom footer info inside the screen */}
      <div
        className={`w-full flex items-center justify-between font-mono text-[#A3A09C]/60 uppercase tracking-widest pt-2 ${
          isFullView ? 'text-[10px] sm:text-xs' : 'text-[8px] sm:text-[9px]'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-[#C65B4D]" />
          <span>Vansh Deo // Portfolio</span>
        </div>
        <div className="hidden sm:block">
          Web3 ✕ AI/ML ✕ Systems
        </div>
      </div>
    </div>
  );
}
