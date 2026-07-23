"use client";
import { useState, useEffect, useRef } from "react";

const idlePhrases = [
  "Bora nerdar hoje?",
  "A gente tá começando agora",
  "Seus rascunhos podem ajudar alguém",
];

export default function SigninMascot({
  className,
  coverEyes = false,
}: {
  className?: string;
  coverEyes?: boolean;
}) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [phraseIndex, setPhraseIndex] = useState(0);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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
  useEffect(() => {
    if (coverEyes) return;
    const timer = setInterval(() => {
      setPhraseIndex((i) => (i + 1) % idlePhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [coverEyes]);

  const speechText = coverEyes
    ? "Não vou espiar, prometo"
    : idlePhrases[phraseIndex];

  return (
    <div ref={mascotRef} className="flex flex-col items-center">
      <div className="relative mb-4 max-w-[300px]">
        <div
          key={speechText}
          className="bg-white border-[2.5px] border-ink rounded-2xl px-4 py-2.5
            font-baloo font-semibold text-sm text-center
            animate-[pop_0.2s_ease-out]"
        >
          {speechText}
        </div>
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-[10px]
            w-0 h-0 border-l-[10px] border-l-transparent
            border-r-[10px] border-r-transparent
            border-t-[12px] border-t-ink"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-[7px]
            w-0 h-0 border-l-[8px] border-l-transparent
            border-r-[8px] border-r-transparent
            border-t-[10px] border-t-white"
        />
      </div>

      <svg id="mascot" className={`${className ?? ""}`} viewBox="0 0 200 200">
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
          className="transition-transform duration-75 ease-linear"
          cx={76 + pupilOffset.x}
          cy={104 + pupilOffset.y}
          r="6"
          fill="#1A1A1A"
        />
        <circle
          id="pupilR"
          className="transition-transform duration-75 ease-linear"
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

        <g
          id="handL"
          className={`transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            coverEyes ? "-translate-y-[46px]" : "translate-y-0"
          }`}
          style={{ transformOrigin: "76px 150px" }}
        >
          <ellipse
            cx="76"
            cy="150"
            rx="20"
            ry="18"
            fill="#B6E44D"
            stroke="#1A1A1A"
            strokeWidth="4"
          />
        </g>
        <g
          id="handR"
          className={`transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            coverEyes ? "-translate-y-[46px]" : "translate-y-0"
          }`}
          style={{ transformOrigin: "124px 150px" }}
        >
          <ellipse
            cx="124"
            cy="150"
            rx="20"
            ry="18"
            fill="#B6E44D"
            stroke="#1A1A1A"
            strokeWidth="4"
          />
        </g>
      </svg>
    </div>
  );
}
