"use client";

import { ReactNode, useEffect, useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
};

export function ScrollReveal({ children, delayMs = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`.trim()} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}

