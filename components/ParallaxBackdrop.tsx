"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

type ParallaxBackdropProps = {
  src: string;
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
  overlayClassName?: string;
  imageClassName?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function ParallaxBackdrop({
  src,
  width,
  height,
  children,
  className = "",
  overlayClassName = "bg-gradient-to-b from-black/90 via-black/80 to-black/90",
  imageClassName = "object-center",
}: ParallaxBackdropProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const sceneTopRef = useRef(0);
  const sceneHeightRef = useRef(0);
  const trackHeightRef = useRef(0);
  const viewportHeightRef = useRef(0);

  useEffect(() => {
    const scene = sceneRef.current;
    const track = trackRef.current;
    if (!scene || !track) {
      return;
    }

    const measure = () => {
      const rect = scene.getBoundingClientRect();

      sceneTopRef.current = rect.top + window.scrollY;
      sceneHeightRef.current = scene.offsetHeight;
      trackHeightRef.current = track.offsetHeight;
      viewportHeightRef.current = window.innerHeight;
    };

    const getProgressFromScroll = (scrollY: number) => {
      const sceneTop = sceneTopRef.current;
      const sceneHeight = sceneHeightRef.current;
      const viewportHeight = viewportHeightRef.current;

      if (sceneHeight > viewportHeight) {
        return clamp((scrollY - sceneTop) / (sceneHeight - viewportHeight), 0, 1);
      }

      return clamp((scrollY + viewportHeight - sceneTop) / (sceneHeight + viewportHeight), 0, 1);
    };

    const updatePosition = () => {
      frameRef.current = null;

      const progress = getProgressFromScroll(window.scrollY);
      const maxOffset = Math.max(0, sceneHeightRef.current - trackHeightRef.current);
      const offset = progress * maxOffset;

      track.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const queueUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updatePosition);
      }
    };

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            measure();
            queueUpdate();
          });

    const handleResize = () => {
      measure();
      queueUpdate();
    };

    measure();
    resizeObserver?.observe(scene);
    resizeObserver?.observe(track);

    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    queueUpdate();

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }

      resizeObserver?.disconnect();
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={sceneRef} className={`relative isolate overflow-hidden bg-black ${className}`.trim()}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div ref={trackRef} className="absolute inset-x-0 top-0 z-0 flex justify-center will-change-transform">
          <Image
            src={src}
            alt=""
            width={width}
            height={height}
            sizes="100vw"
            className={`h-auto w-[max(100vw,1240px)] sm:w-[max(100vw,920px)] max-w-none object-cover ${imageClassName}`.trim()}
            unoptimized
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/45" />
        <div className={`absolute inset-0 z-20 ${overlayClassName}`.trim()} />
      </div>

      <div className="relative z-30">{children}</div>
    </div>
  );
}
