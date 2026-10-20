'use client';

import { socialLinks } from '@/config/Hero';
import React, { useState } from 'react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const email = 'vanshdeo@example.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Vansh Deo"
      className="relative py-28 sm:py-36 bg-[#101010] text-[#F0EFEC] border-t border-[#2A2A2A]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#2A2A2A]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C65B4D]">
                07 // Connectivity & Inquiries
              </span>
            </div>
            <h2 className="font-display uppercase text-4xl sm:text-6xl lg:text-7xl tracking-wide leading-none text-[#F0EFEC]">
              Initiate Dialogue
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A3A09C] max-w-xs text-left sm:text-right">
            Open to technical collaborations, AI systems engineering, and Web3 protocol initiatives.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Invitation & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h3 className="font-display uppercase text-3xl sm:text-4xl text-[#F0EFEC] mb-4">
                Let&apos;s Build Something Resilient.
              </h3>
              <p className="text-base text-[#A3A09C] leading-relaxed">
                Whether you are exploring on-device edge AI, designing zero-knowledge smart contracts, or architecting robust full-stack applications, I am always keen to discuss engineering opportunities.
              </p>
            </div>

            {/* Copy Email Box */}
            <div className="p-6 rounded-2xl bg-[#161616] border border-[#2A2A2A]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3A09C] block mb-2">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-sm sm:text-base text-[#F0EFEC] select-all">
                  {email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-md bg-[#202020] hover:bg-[#C65B4D] hover:text-white border border-[#2E2E2E] text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Verified Profiles */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#A3A09C] block mb-4">
                Verified Channels
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#161616] border border-[#2A2A2A] hover:border-[#C65B4D] hover:bg-[#1E1E1E] transition-all text-sm font-mono text-[#F0EFEC]"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#C65B4D] text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-[#161616] border border-[#2A2A2A] flex flex-col gap-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#242424]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#A3A09C]">
                  Transmission Form
                </span>
                <span className="size-1.5 rounded-full bg-[#C65B4D]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A3A09C] mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-[#2A2A2A] text-[#F0EFEC] placeholder-[#555] text-sm font-sans focus:outline-none focus:border-[#C65B4D] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#A3A09C] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-[#2A2A2A] text-[#F0EFEC] placeholder-[#555] text-sm font-sans focus:outline-none focus:border-[#C65B4D] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#A3A09C] mb-2"
                >
                  Message / Project Scope
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline your thoughts, research inquiry, or project overview..."
                  className="w-full px-4 py-3 rounded-lg bg-[#101010] border border-[#2A2A2A] text-[#F0EFEC] placeholder-[#555] text-sm font-sans focus:outline-none focus:border-[#C65B4D] transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <span className="text-xs font-mono text-[#A3A09C]">
                  {status === 'sent' && (
                    <span className="text-emerald-400">
                      ✓ Message dispatched successfully.
                    </span>
                  )}
                  {status === 'sending' && (
                    <span className="text-[#A3A09C] animate-pulse">
                      Dispatched...
                    </span>
                  )}
                  {status === 'idle' && (
                    <span>Encrypted & delivered directly.</span>
                  )}
                </span>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-6 py-3 rounded-lg bg-[#C65B4D] hover:bg-[#943E35] text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-200 self-end sm:self-auto disabled:opacity-50"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Send Message →'}
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
