"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion without causing a hydration mismatch.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(reducedMotionTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
          clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.01, rootMargin: "0px 0px 120px 0px" }
    );
    observer.observe(el);

    // Some mobile browsers defer intersection updates for content below the fold.
    const fallbackTimer = setTimeout(() => setVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transform-gpu transition-[opacity,transform] duration-[700ms] will-change-transform [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"
      }`}
      style={{ transitionDelay: `${delay}ms`, backfaceVisibility: "hidden" as const }}
    >
      {children}
    </div>
  );
}