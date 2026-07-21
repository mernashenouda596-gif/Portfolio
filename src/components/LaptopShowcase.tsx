import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function LaptopShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  // Phase 1 (0-0.3): laptop fades in and lid opens
  const lidRotate = useTransform(scrollYProgress, [0, 0.3], [88, 0]);
  const laptopOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  // Phase 2 (0.3-0.65): zoom into the screen
  const scale = useTransform(scrollYProgress, [0.3, 0.65], [1, 4.5]);
  const translateY = useTransform(scrollYProgress, [0.3, 0.65], [0, -60]);

  // Phase 3 (0.65-0.9): fade out the laptop frame
  const frameOpacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0]);

  // Screen content
  const contentOpacity = useTransform(scrollYProgress, [0.4, 0.6, 0.85, 0.95], [0, 1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0.4, 0.6], [0.85, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [20, 0]);

  return (
    <section ref={ref} style={{ height: '260vh' }} className="relative">
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
        style={{ perspective: '1500px' }}
      >
        <motion.div style={{ scale, y: translateY }} className="relative">
          <motion.div style={{ opacity: frameOpacity }} className="relative">
            {/* Screen / Lid */}
            <motion.div
              style={{
                rotateX: lidRotate,
                opacity: laptopOpacity,
                transformOrigin: 'bottom center',
                transformStyle: 'preserve-3d',
              }}
              className="relative"
            >
              {/* Bezel */}
              <div
                className="p-3 rounded-t-2xl"
                style={{
                  background: 'linear-gradient(135deg, #2a2a2e, #1a1a1e)',
                  boxShadow: '0 -2px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                  width: '560px',
                  maxWidth: '85vw',
                }}
              >
                {/* Camera dot */}
                <div className="w-1.5 h-1.5 rounded-full mx-auto mb-2" style={{ background: '#0a0a0a' }} />
                {/* Screen */}
                <div
                  className="rounded-lg overflow-hidden aspect-video relative"
                  style={{ background: 'var(--bg-base)', border: '1px solid rgba(0,0,0,0.4)' }}
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
                  {/* Screen content */}
                  <div className="absolute inset-0 top-9 flex flex-col items-center justify-center">
                    <motion.div
                      style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
                      className="text-center px-4"
                    >
                      <p className="text-xs uppercase tracking-[0.3em] mb-3" style={{ color: 'var(--accent-rose)' }}>Featured Work</p>
                      <h2
                        className="text-5xl md:text-6xl font-bold text-gradient-red mb-4"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Projects
                      </h2>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Keep scrolling to explore</p>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        className="mt-6 text-2xl"
                        style={{ color: 'var(--accent-rose)' }}
                      >
                        ↓
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Base / Keyboard deck */}
            <div
              className="mx-auto rounded-b-2xl"
              style={{
                width: '105%',
                marginLeft: '-2.5%',
                height: '14px',
                background: 'linear-gradient(to bottom, #3a3a3e 0%, #2a2a2e 40%, #1a1a1e 100%)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.6)',
                borderRadius: '0 0 16px 16px',
              }}
            >
              {/* Notch */}
              <div className="w-12 h-1 mx-auto rounded-b" style={{ background: '#0a0a0a', marginTop: '0' }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
