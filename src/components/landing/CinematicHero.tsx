'use client';

import { useLenis } from 'lenis/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import HeroScreenContent from './HeroScreenContent';

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomProgress, setZoomProgress] = useState(0);
  const lenis = useLenis();

  // Trigger Zoom In animation
  const triggerZoomIn = useCallback(() => {
    if (isZooming || isZoomed) return;
    setIsZooming(true);

    const startTime = performance.now();
    const duration = 1100; // 1.1s silky smooth transition

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3.5);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(t);

      setZoomProgress(easedProgress);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setZoomProgress(1);
        setIsZoomed(true);
        setIsZooming(false);
        // Inform navbar and system
        if (typeof document !== 'undefined') {
          document.documentElement.dataset.heroZoomed = 'true';
          window.dispatchEvent(
            new CustomEvent('hero-zoom', { detail: { isZoomed: true } })
          );
        }
      }
    };

    requestAnimationFrame(animate);
  }, [isZooming, isZoomed]);

  // Trigger Zoom Out animation (when scrolling back to the very top)
  const triggerZoomOut = useCallback(() => {
    if (isZooming || !isZoomed) return;
    setIsZooming(true);

    const startTime = performance.now();
    const duration = 900;

    const easeOutCubic = (t: number) => {
      return 1 - Math.pow(1 - t, 3);
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - easeOutCubic(t);

      setZoomProgress(easedProgress);

      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        setZoomProgress(0);
        setIsZoomed(false);
        setIsZooming(false);
        if (typeof document !== 'undefined') {
          document.documentElement.dataset.heroZoomed = 'false';
          window.dispatchEvent(
            new CustomEvent('hero-zoom', { detail: { isZoomed: false } })
          );
        }
      }
    };

    requestAnimationFrame(animate);
  }, [isZooming, isZoomed]);

  // Manage Scroll Lock
  useEffect(() => {
    // When not zoomed, lock page scroll so user cannot scroll down past hero
    if (!isZoomed) {
      document.body.style.overflow = 'hidden';
      if (typeof lenis?.stop === 'function') {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = '';
      if (typeof lenis?.start === 'function') {
        lenis.start();
      }
    }

    return () => {
      document.body.style.overflow = '';
      if (typeof lenis?.start === 'function') {
        lenis.start();
      }
    };
  }, [isZoomed, lenis]);

  // Listen for user wheel & touch gestures to control zoom and scroll lock
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isZoomed) {
        // Any downward scroll triggers zoom in and locks page scroll
        if (e.deltaY > 0) {
          e.preventDefault();
          triggerZoomIn();
        } else {
          e.preventDefault();
        }
      } else {
        // When zoomed in, if at the very top of page (scrollY <= 0) and scrolling up, zoom out
        if (window.scrollY <= 0 && e.deltaY < -25 && !isZooming) {
          e.preventDefault();
          triggerZoomOut();
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchCurrentY = e.touches[0].clientY;
      const deltaY = touchStartY - touchCurrentY;

      if (!isZoomed) {
        if (deltaY > 15) {
          e.preventDefault();
          triggerZoomIn();
        } else {
          e.preventDefault();
        }
      } else {
        if (window.scrollY <= 0 && deltaY < -25 && !isZooming) {
          triggerZoomOut();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isZoomed) {
        if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
          e.preventDefault();
          triggerZoomIn();
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed, isZooming, triggerZoomIn, triggerZoomOut]);

  // Handle external hash links (e.g. from navbar clicks while in unzoomed state)
  useEffect(() => {
    const handleHashNav = () => {
      if (!isZoomed) {
        setZoomProgress(1);
        setIsZoomed(true);
        setIsZooming(false);
        document.body.style.overflow = '';
        if (typeof document !== 'undefined') {
          document.documentElement.dataset.heroZoomed = 'true';
        }
      }
    };

    window.addEventListener('hashchange', handleHashNav);
    return () => window.removeEventListener('hashchange', handleHashNav);
  }, [isZoomed]);

  // Calculate dynamic scale factor to merge laptop screen into full viewport
  const currentScale = 1 + zoomProgress * 1.38; // scales from 1.0 to 2.38
  const frameOpacity = Math.max(0, 1 - zoomProgress * 1.6); // outer laptop frame fades to 0 as zoom nears completion

  return (
    <section
      ref={containerRef}
      id="hero"
      aria-label="Cinematic Portfolio Hero"
      className="relative w-full bg-[#101010] text-[#F0EFEC] select-none"
    >
      {/* State A: When Fully Zoomed and Merged into Viewport */}
      {isZoomed && !isZooming ? (
        <div className="relative w-full min-h-screen flex flex-col justify-center">
          <HeroScreenContent isFullView={true} />
        </div>
      ) : (
        /* State B: In-flight Zoom Transition or Initial Laptop View */
        <div
          onClick={() => !isZoomed && triggerZoomIn()}
          className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-pointer bg-[#101010]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,#C65B4D_0%,transparent_70%)]"
          />

          {/* Scaling Laptop Stage */}
          <div
            style={{
              transform: `scale(${currentScale})`,
              transformOrigin: '50% 49%',
              willChange: 'transform',
            }}
            className="relative w-[96vw] max-w-[1360px] aspect-[16/9] flex items-center justify-center"
          >
            {/* Photorealistic Outer Laptop Frame & Cinematic Environment */}
            <div
              style={{ opacity: frameOpacity }}
              className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl overflow-hidden transition-opacity"
            >
              <Image
                src="/assets/hero-laptop.png"
                alt="Laptop Stage Scene"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1360px"
                className="object-contain object-center"
              />
            </div>

            {/* Live React Screen Content Mounted Inside the Laptop Screen Rectangle */}
            {/* Exact screen coords: Top 14.89%, Left 17.58%, Width 64.54%, Height 68.32% */}
            <div
              style={{
                position: 'absolute',
                top: '14.89%',
                left: '17.58%',
                width: '64.54%',
                height: '68.32%',
              }}
              className="rounded-[6px] sm:rounded-[10px] md:rounded-[14px] overflow-hidden bg-[#101010] shadow-2xl flex flex-col"
            >
              {/* Laptop Camera Notch */}
              <div
                style={{ opacity: frameOpacity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-3.5 sm:h-4.5 bg-[#050505] rounded-b-lg flex items-center justify-center gap-1.5 z-40 border-b border-x border-[#1a1a1a]/80 transition-opacity"
              >
                <div className="size-1.5 sm:size-2 rounded-full bg-[#111] ring-1 ring-[#222]" />
                <div className="size-0.5 sm:size-1 rounded-full bg-emerald-500/70" />
              </div>

              {/* Real, Interactive Hero Screen Built From Scratch */}
              <HeroScreenContent isFullView={false} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
