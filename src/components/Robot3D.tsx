import { motion } from 'framer-motion';

/**
 * 3D-styled cute robot character built entirely with SVG + CSS transforms.
 * No image background — pure vector. Slowly tilts head, blinks eyes, floats gently.
 */
export default function Robot3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1400px' }}>
      {/* Spinning red rings behind robot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute w-[440px] h-[440px] rounded-full border-2 border-rose-500/25"
          style={{ animation: 'spinSlow 30s linear infinite' }}
        />
        <div
          className="absolute w-[360px] h-[360px] rounded-full border border-rose-400/20 border-dashed"
          style={{ animation: 'spinReverse 45s linear infinite' }}
        />
        <div
          className="absolute w-[520px] h-[520px] rounded-full border border-rose-500/10"
          style={{ animation: 'spinSlow 60s linear infinite' }}
        />
        <div
          className="absolute w-3 h-3 rounded-full bg-rose-500"
          style={{ animation: 'orbitSlow 22s linear infinite', boxShadow: '0 0 15px rgba(225,29,72,0.8)' }}
        />
      </div>

      {/* The robot — pure 3D SVG character */}
      <motion.div
        className="relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          y: [0, -16, -8, -18, 0],
          rotateY: [-4, 4, -2, 5, -4],
          rotateX: [3, -2, 3, -3, 3],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg
          width="360"
          height="480"
          viewBox="0 0 360 480"
          style={{ filter: 'drop-shadow(0 0 35px rgba(225,29,72,0.55)) drop-shadow(0 20px 40px rgba(0,0,0,0.4))' }}
        >
          <defs>
            {/* Glossy body gradient — cream to rose */}
            <radialGradient id="bodyMain" cx="35%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#fff5f7" />
              <stop offset="35%" stopColor="#fda4af" />
              <stop offset="70%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#9f1239" />
            </radialGradient>
            <radialGradient id="headMain" cx="35%" cy="25%" r="85%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#ffe4e6" />
              <stop offset="65%" stopColor="#fda4af" />
              <stop offset="100%" stopColor="#e11d48" />
            </radialGradient>
            <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a0a0e" />
              <stop offset="100%" stopColor="#09090b" />
            </linearGradient>
            <radialGradient id="eye" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#fff5f7" />
              <stop offset="45%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#9f1239" />
            </radialGradient>
            <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9f1239" />
              <stop offset="50%" stopColor="#fb7185" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
            <radialGradient id="highlight" cx="30%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Antenna */}
          <line x1="180" y1="58" x2="180" y2="28" stroke="url(#metal)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="180" cy="22" r="8" fill="url(#eye)">
            <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="177" cy="19" r="2.5" fill="#fff" opacity="0.9" />

          {/* Head group with tilt animation */}
          <motion.g
            animate={{ rotate: [-3, 3, -2, -3] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '180px 120px' }}
          >
            {/* Head — rounded glossy dome */}
            <ellipse cx="180" cy="115" rx="78" ry="72" fill="url(#headMain)" stroke="#9f1239" strokeWidth="2" />
            {/* Top highlight */}
            <ellipse cx="155" cy="85" rx="32" ry="22" fill="url(#highlight)" />

            {/* Ear modules */}
            <rect x="92" y="100" width="16" height="42" rx="8" fill="url(#metal)" />
            <rect x="252" y="100" width="16" height="42" rx="8" fill="url(#metal)" />
            <circle cx="100" cy="121" r="4" fill="#09090b" />
            <circle cx="260" cy="121" r="4" fill="#09090b" />

            {/* Face screen */}
            <rect x="118" y="78" width="124" height="74" rx="22" fill="url(#screen)" stroke="#e11d48" strokeWidth="1.5" />

            {/* Eyes with blink */}
            <g style={{ transformOrigin: '152px 115px' }}>
              <ellipse cx="152" cy="115" rx="13" ry="15" fill="url(#eye)">
                <animate attributeName="ry" values="15;15;15;0.5;15;15" dur="5s" repeatCount="indefinite" keyTimes="0;0.82;0.86;0.89;0.93;1" />
              </ellipse>
            </g>
            <g style={{ transformOrigin: '208px 115px' }}>
              <ellipse cx="208" cy="115" rx="13" ry="15" fill="url(#eye)">
                <animate attributeName="ry" values="15;15;15;0.5;15;15" dur="5s" repeatCount="indefinite" keyTimes="0;0.82;0.86;0.89;0.93;1" />
              </ellipse>
            </g>
            {/* Eye highlights */}
            <circle cx="156" cy="110" r="3.5" fill="#fff" opacity="0.95" />
            <circle cx="212" cy="110" r="3.5" fill="#fff" opacity="0.95" />

            {/* Smile */}
            <path d="M158 140 Q180 152 202 140" stroke="#fb7185" strokeWidth="3" fill="none" strokeLinecap="round" />

            {/* Cheeks */}
            <ellipse cx="130" cy="132" rx="7" ry="5" fill="#fb7185" opacity="0.5" />
            <ellipse cx="230" cy="132" rx="7" ry="5" fill="#fb7185" opacity="0.5" />
          </motion.g>

          {/* Neck */}
          <rect x="168" y="170" width="24" height="20" rx="6" fill="url(#metal)" />

          {/* Body — rounded glossy torso */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ellipse cx="180" cy="270" rx="92" ry="95" fill="url(#bodyMain)" stroke="#9f1239" strokeWidth="2" />
            {/* Body highlight */}
            <ellipse cx="150" cy="235" rx="38" ry="28" fill="url(#highlight)" />

            {/* Chest screen */}
            <rect x="130" y="225" width="100" height="85" rx="20" fill="url(#screen)" stroke="#e11d48" strokeWidth="1.5" />

            {/* Chest indicators */}
            <circle cx="150" cy="250" r="5" fill="#fb7185">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="180" cy="250" r="5" fill="#fda4af">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="210" cy="250" r="5" fill="#e11d48">
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            </circle>

            {/* Heart emblem */}
            <path d="M180 285 C174 276, 158 276, 158 290 C158 302, 180 312, 180 312 C180 312, 202 302, 202 290 C202 276, 186 276, 180 285 Z" fill="url(#eye)" opacity="0.95" />
            <ellipse cx="174" cy="285" rx="5" ry="3" fill="#fff" opacity="0.5" />

            {/* Side buttons */}
            <rect x="92" y="255" width="8" height="34" rx="4" fill="#9f1239" />
            <rect x="260" y="255" width="8" height="34" rx="4" fill="#9f1239" />
          </motion.g>

          {/* Arms with sway */}
          <motion.g
            animate={{ rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '92px 215px' }}
          >
            <rect x="64" y="210" width="32" height="88" rx="16" fill="url(#metal)" />
            <circle cx="80" cy="304" r="16" fill="url(#headMain)" stroke="#e11d48" strokeWidth="1.5" />
            <ellipse cx="74" cy="298" rx="6" ry="4" fill="#fff" opacity="0.4" />
          </motion.g>
          <motion.g
            animate={{ rotate: [0, -4, 0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '268px 215px' }}
          >
            <rect x="264" y="210" width="32" height="88" rx="16" fill="url(#metal)" />
            <circle cx="280" cy="304" r="16" fill="url(#headMain)" stroke="#e11d48" strokeWidth="1.5" />
            <ellipse cx="274" cy="298" rx="6" ry="4" fill="#fff" opacity="0.4" />
          </motion.g>

          {/* Legs */}
          <rect x="128" y="360" width="38" height="78" rx="16" fill="url(#metal)" />
          <rect x="194" y="360" width="38" height="78" rx="16" fill="url(#metal)" />
          <ellipse cx="147" cy="442" rx="26" ry="11" fill="#9f1239" />
          <ellipse cx="213" cy="442" rx="26" ry="11" fill="#9f1239" />

          {/* Ground shadow */}
          <ellipse cx="180" cy="465" rx="110" ry="9" fill="rgba(225,29,72,0.25)">
            <animate attributeName="rx" values="110;95;110" dur="4s" repeatCount="indefinite" />
          </ellipse>
        </svg>
      </motion.div>
    </div>
  );
}
