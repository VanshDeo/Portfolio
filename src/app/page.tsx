import CinematicFooter from '@/components/common/CinematicFooter';
import CinematicNavbar from '@/components/common/CinematicNavbar';
import AboutSection from '@/components/landing/AboutSection';
import AchievementsSection from '@/components/landing/AchievementsSection';
import CinematicHero from '@/components/landing/CinematicHero';
import ContactSection from '@/components/landing/ContactSection';
import ExperienceTimeline from '@/components/landing/ExperienceTimeline';
import ProjectsSection from '@/components/landing/ProjectsSection';
import ResearchSection from '@/components/landing/ResearchSection';
import SkillsSection from '@/components/landing/SkillsSection';
import React from 'react';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#101010] text-[#F0EFEC] overflow-x-hidden selection:bg-[#C65B4D]/30 selection:text-[#F0EFEC]">
      {/* Cinematic Navigation */}
      <CinematicNavbar />

      {/* Hero Section with Scroll-Driven Zoom */}
      <CinematicHero />

      {/* Narrative & About Me */}
      <AboutSection />

      {/* Technical Skills Categorization */}
      <SkillsSection />

      {/* Selected Featured Projects */}
      <ProjectsSection />

      {/* Research, Edge AI & Web3 Tracks */}
      <ResearchSection />

      {/* Experience & Journey Timeline */}
      <ExperienceTimeline />

      {/* Achievements, Hackathons & Community */}
      <AchievementsSection />

      {/* Contact & Inquiries */}
      <ContactSection />

      {/* Footer */}
      <CinematicFooter />
    </main>
  );
}
