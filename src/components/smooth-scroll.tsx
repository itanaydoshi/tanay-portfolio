"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

import "lenis/dist/lenis.css";

function MotionPreference() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (media.matches) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: {
          offset: -80,
        },
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <MotionPreference />
      {children}
    </ReactLenis>
  );
}
