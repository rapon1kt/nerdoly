"use client";

import { useState, useEffect, useRef } from "react";

export default function Mascot() {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const mascotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!mascotRef.current) return;

      const rect = mascotRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = Math.max(-4, Math.min(4, (event.clientX - cx) / 60));
      const dy = Math.max(-3, Math.min(3, (event.clientY - cy) / 60));

      setPupilOffset({ x: dx, y: dy });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <svg
      id="mascot"
      ref={mascotRef}
      className="w-full h-auto"
      viewBox="0 0 200 200"
    >
      <ellipse cx="100" cy="188" rx="58" ry="9" fill="rgba(0,0,0,0.12)" />
      <path d="M60 38 L100 20 L140 38 L100 56 Z" fill="#1A1A1A" />
      <path d="M100 56 L100 70" stroke="#1A1A1A" strokeWidth="3" />
      <circle cx="100" cy="70" r="4" fill="#FF3D81" />
      <circle
        cx="100"
        cy="110"
        r="62"
        fill="#B6E44D"
        stroke="#1A1A1A"
        strokeWidth="4"
      />
      <circle
        cx="76"
        cy="104"
        r="16"
        fill="#fff"
        stroke="#1A1A1A"
        strokeWidth="3.5"
      />
      <circle
        cx="124"
        cy="104"
        r="16"
        fill="#fff"
        stroke="#1A1A1A"
        strokeWidth="3.5"
      />
      <line
        x1="92"
        y1="104"
        x2="108"
        y2="104"
        stroke="#1A1A1A"
        strokeWidth="3.5"
      />
      <circle
        id="pupilL"
        className="transition-transform duration-50 linear"
        cx={76 + pupilOffset.x}
        cy={104 + pupilOffset.y}
        r="6"
        fill="#1A1A1A"
      />
      <circle
        id="pupilR"
        className="transition-transform duration-50 linear"
        cx={124 + pupilOffset.x}
        cy={104 + pupilOffset.y}
        r="6"
        fill="#1A1A1A"
      />
      <path
        d="M92 138 Q100 146 108 138"
        stroke="#1A1A1A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
