import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LaptopShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Phase 1 (0 - 0.15): laptop slides up into view
  const laptopY = useTransform(scrollYProgress, [0, 0.15], [80, 0]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Phase 2 (0.15 - 0.6): zoom into the screen — scale up dramatically
  const scale = useTransform(scrollYProgress, [0.15, 0.6], [1, 6]);
  const zoomY = useTransform(scrollYProgress, [0.15, 0.6], [0, -40]);

  // Phase 3 (0.55 - 0.75): fade out laptop frame, screen takes over
  const frameOpacity = useTransform(scrollYProgress, [0.55, 0.72], [1, 0]);

  // Screen "projects" content fades in during zoom
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const contentScale = useTransform(scrollYProgress, [0.3, 0.55], [0.9, 1]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.55], [30, 0]);

  // Final hint that fades out
  const hintOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [0, 1, 0]);

  return (
    <section ref={ref} style={{ height: '300vh' }} className="relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-[0.3em]" style={{ color: 'var(--accent-rose)' }}>Scroll to enter</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-lg"
            style={{ color: 'var(--accent-rose)' }}
          >↓</motion.span>
        </motion.div>

        {/* Laptop */}
        <motion.div
          style={{ scale, y: zoomY }}
          className="relative"
        >
          <motion.div
            style={{ opacity: laptopOpacity, y: laptopY }}
            className="relative"
          >
            <motion.div style={{ opacity: frameOpacity }} className="relative">
              {/* Screen bezel */}
              <div
                className="p-3 rounded-t-2xl relative"
                style={{
                  background: 'linear-gradient(135deg, #2a2a2e, #1a1a1e)',
                  boxShadow: '0 -2px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
                  width: '600px',
                  maxWidth: '85vw',
                }}
              >
                {/* Camera dot */}
                <div className="w-1.5 h-1.5 rounded-full mx-auto mb-2" style={{ background: '#0a0a0a' }} />

                {/* Screen */}
                <div
                  className="rounded-lg overflow-hidden aspect-video relative"
                  style={{ background: 'var(--bg-base)', border: '1px solid rgba(0,0,0,0.3)' }}
                >
                  {/* Browser chrome */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2"
                    style={{ background: 'var(--bg-elevated)', borderBottom: '1px solid rgba(147,51,234,0.15)' }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                    <div
                      className="ml-3 flex-1 h-5 rounded-md flex items-center px-2"
                      style={{ background: 'var(--bg-base)' }}
                    >
                      <span className="text-[9px]" style={{ color: 'var(--text-faint)' }}>mirna-portfolio.com/projects</span>
                    </div>
                  </div>

                  {/* Screen content — preview of projects */}
                  <div className="absolute inset-0 top-9 flex flex-col items-center justify-center px-4">
                    <motion.div style={{ opacity: contentOpacity, scale: contentScale, y: contentY }} className="text-center w-full">
                      <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-rose)' }}>Featured Work</p>
                      <h2 className="text-5xl md:text-6xl font-bold text-gradient-red mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Projects
                      </h2>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>StudyVerse · +ToDo</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div
                className="mx-auto"
                style={{
                  width: '106%',
                  marginLeft: '-3%',
                  height: '16px',
                  background: 'linear-gradient(to bottom, #3a3a3e 0%, #2a2a2e 40%, #1a1a1e 100%)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
                  borderRadius: '0 0 16px 16px',
                }}
              >
                <div className="w-14 h-1.5 mx-auto rounded-b" style={{ background: '#0a0a0a' }} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
