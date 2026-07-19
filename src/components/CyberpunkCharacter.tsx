import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * Cyberpunk character displayed on the right side of the hero.
 *
 * The image already has a dark blue/maroon background that closely
 * matches the page's dark theme. We use mix-blend-mode: screen so
 * the dark pixels disappear and only the glowing character remains,
 * making her feel like she's part of the page — not a pasted photo.
 *
 * 3D: CSS perspective on wrapper + framer-motion rotateX/Y oscillation.
 * Blink: JS timer briefly dims brightness via data attribute.
 * Rings: SVG & CSS circles spinning at different speeds behind her.
 */
export default function CyberpunkCharacter() {
  const hostRef = useRef<HTMLDivElement>(null);

  // Random eye-blink
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const blink = () => {
      el.setAttribute('data-blink', '1');
      setTimeout(() => {
        el.removeAttribute('data-blink');
        t = setTimeout(blink, 2500 + Math.random() * 5000);
      }, 130);
    };
    t = setTimeout(blink, 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    /* Perspective wrapper — gives real 3D depth to child transforms */
    <div
      className="absolute right-0 top-0 bottom-0 w-[52%] pointer-events-none"
      style={{ perspective: '1400px', perspectiveOrigin: '40% 50%' }}
    >
      {/* ── Animated red rings that orbit behind the character ── */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        {/* Ring 1 — outermost, slow */}
        <div className="absolute rounded-full" style={{ width: 540, height: 540, border: '1.5px solid rgba(225,29,72,0.15)', animation: 'spinSlow 60s linear infinite' }} />
        {/* Ring 2 — dashed, reverse */}
        <div className="absolute rounded-full" style={{ width: 430, height: 430, border: '1px dashed rgba(225,29,72,0.22)', animation: 'spinReverse 42s linear infinite' }} />
        {/* Ring 3 — solid glow */}
        <div className="absolute rounded-full" style={{ width: 330, height: 330, border: '2px solid rgba(225,29,72,0.32)', boxShadow: '0 0 16px rgba(225,29,72,0.1) inset', animation: 'spinSlow 28s linear infinite' }} />
        {/* Ring 4 — tight dashed */}
        <div className="absolute rounded-full" style={{ width: 240, height: 240, border: '1px dashed rgba(251,113,133,0.28)', animation: 'spinReverse 18s linear infinite' }} />

        {/* Orbiting glow dot — outer track */}
        <div className="absolute rounded-full" style={{ width: 12, height: 12, background: '#e11d48', boxShadow: '0 0 22px 6px rgba(225,29,72,0.7)', animation: 'orbitOuter 26s linear infinite' }} />
        {/* Orbiting glow dot — inner track, opposite */}
        <div className="absolute rounded-full" style={{ width: 8, height: 8, background: '#fb7185', boxShadow: '0 0 14px 4px rgba(251,113,133,0.65)', animation: 'orbitInner 18s linear infinite reverse' }} />

        {/* Flowing SVG curves */}
        <svg className="absolute opacity-35" style={{ width: 620, height: 620, animation: 'spinSlow 80s linear infinite' }} viewBox="0 0 620 620" fill="none">
          <path d="M310 12 Q540 112 608 310 Q540 508 310 608 Q80 508 12 310 Q80 112 310 12Z" stroke="url(#rg1)" strokeWidth="1.2" fill="none" strokeDasharray="10 22" />
          <path d="M310 55 Q500 155 565 310 Q500 465 310 565 Q120 465 55 310 Q120 155 310 55Z" stroke="rgba(225,29,72,0.22)" strokeWidth="0.8" fill="none" />
          <defs>
            <linearGradient id="rg1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%"   stopColor="#e11d48" stopOpacity="0.7" />
              <stop offset="50%"  stopColor="#fb7185" stopOpacity="1"   />
              <stop offset="100%" stopColor="#e11d48" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient glow behind character */}
        <div className="absolute rounded-full" style={{ width: 460, height: 460, background: 'radial-gradient(circle, rgba(225,29,72,0.13) 0%, rgba(225,29,72,0.04) 50%, transparent 72%)' }} />
      </div>

      {/* ── 3D floating character ── */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          y:       [0, -16, -6, -20, 0],
          rotateY: [-6,  4, -3,  6, -6],
          rotateX: [ 3, -2,  3, -3,  3],
          scale:   [1, 1.012, 1, 1.012, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div ref={hostRef} className="character-host relative w-full h-full flex items-end justify-center">
          {/* Ground reflection */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full" style={{ width: '50%', height: 24, background: 'radial-gradient(ellipse, rgba(225,29,72,0.45) 0%, transparent 70%)', filter: 'blur(10px)' }} />

          {/* THE CHARACTER IMAGE
              mix-blend-mode: screen — dark navy/maroon bg becomes transparent.
              Only the neon-lit figure stays visible, blending into the dark page.  */}
          <img
            src="/Gemini_Generated_Image_fee8e4fee8e4fee8.png"
            alt="Cyberpunk developer"
            draggable={false}
            className="character-img select-none"
            style={{
              /* fill the whole column height */
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center bottom',
              /* key: removes dark background */
              mixBlendMode: 'screen',
              filter: [
                'brightness(1.1)',
                'contrast(1.05)',
                'saturate(1.15)',
                'drop-shadow(0 0 45px rgba(225,29,72,0.65))',
                'drop-shadow(0 0 100px rgba(225,29,72,0.25))',
              ].join(' '),
            }}
          />
        </div>
      </motion.div>

      {/* Blink: data attribute swaps filter on the img */}
      <style>{`
        .character-host .character-img { transition: filter .09s ease; }
        .character-host[data-blink] .character-img {
          filter:
            brightness(.4)
            contrast(1.05)
            saturate(1.15)
            drop-shadow(0 0 45px rgba(225,29,72,0.65))
            drop-shadow(0 0 100px rgba(225,29,72,0.25)) !important;
        }
      `}</style>
    </div>
  );
}
