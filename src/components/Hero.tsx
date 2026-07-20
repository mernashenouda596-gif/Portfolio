import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const socials = [
  { icon: Github,   href: 'https://github.com/mernashenouda596-gif',              label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/merna-shenouda-691053409', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:mernashenouda596@gmail.com',                    label: 'Email' },
];
const tech = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Python'];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeLeft  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] as const } } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full pt-28 pb-20">

          {/* LEFT: text */}
          <motion.div className="flex flex-col justify-center" variants={container} initial="hidden" animate="show">
            <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 w-fit" style={{ background: 'var(--bg-glass-light)', border: '1px solid var(--border-purple)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent-rose)' }} />
              <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>Available for opportunities</span>
            </motion.div>

            <motion.h1 variants={fadeLeft} className="font-bold leading-[1.06] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.6rem, 5vw, 4.2rem)', color: 'var(--text-primary)' }}>
              Hi, I'm<br /><span className="text-gradient-red">Mirna Shenouda</span>
            </motion.h1>

            <motion.p variants={fadeLeft} className="text-lg md:text-xl font-medium mb-5" style={{ color: 'var(--accent-rose-soft)' }}>
              Frontend Developer &nbsp;·&nbsp; Business Technology Student
            </motion.p>

            <motion.p variants={fadeLeft} className="text-base md:text-lg leading-relaxed mb-8 max-w-[420px]" style={{ color: 'var(--text-secondary)' }}>
              I transform ideas into fast, modern, and responsive web experiences that people enjoy using.
            </motion.p>

            <motion.div variants={fadeLeft} className="flex flex-wrap gap-2 mb-9">
              {tech.map(t => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(225,29,72,0.15)', border: '1px solid var(--border-rose)', color: 'var(--accent-rose-pale)' }}>{t}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeLeft} className="flex flex-wrap items-center gap-3 mb-9">
              <a href="#projects" className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, var(--accent-rose), #be123c)', boxShadow: 'var(--shadow-cta-hover)' }}>View Projects</a>
              <a href="#contact" className="px-7 py-3 rounded-full text-sm font-medium transition-all" style={{ color: 'var(--text-muted)', border: '1px solid var(--border-purple)' }}>Contact Me</a>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex items-center gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1" style={{ background: 'rgba(147,51,234,0.15)', border: '1px solid var(--border-purple)', color: 'var(--accent-purple-light)' }}>
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: character (transparent PNG) with 3D motion */}
          <motion.div
            className="flex items-center justify-center order-first md:order-last"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
            style={{ perspective: '1200px' }}
          >
            <motion.div
              className="relative w-full max-w-[440px]"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -22, 0], rotateY: [10, -8, 10], rotateX: [3, -3, 3], scale: [1, 1.05, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
             <img
  src="/hero.png"
  alt="Cyberpunk character"
  draggable={false}
  className="w-full h-auto select-none"
  style={{
    filter: 'var(--hero-drop-shadow)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 80%)',
    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
  }}
/>
              <div className="absolute -inset-10 -z-10 rounded-full blur-3xl opacity-50" style={{ background: 'var(--hero-glow)' }} />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors" style={{ color: 'var(--text-faint)' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <span className="text-xs block text-center mb-1 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="mx-auto" />
        </motion.div>
      </motion.a>
    </section>
  );
}
