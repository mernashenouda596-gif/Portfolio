import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from 'lucide-react';

const socials = [
  { icon: Github,   href: 'https://github.com/mernashenouda596-gif',        label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/merna-shenouda-691053409', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:mernashenouda596@gmail.com',                    label: 'Email' },
];
const tech = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Python'];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeLeft  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] as const } } };

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // حسابات الدوران والتحريك للكاراكتر بس
  // دوران (Tilt) خفيف عشان يبان الـ depth
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  // تحريك (Translate) عشان يخرج لبرة
  const moveX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]); 
  const moveY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]); 

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);
  const smoothX = useSpring(moveX, springConfig);
  const smoothY = useSpring(moveY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full pt-28 pb-20">

          {/* LEFT: text */}
          <motion.div
            className="flex flex-col justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div 
              variants={fadeLeft} 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 w-fit backdrop-blur-md" 
              style={{ 
                background: 'rgba(30, 10, 45, 0.6)', 
                border: '1px solid rgba(225, 29, 72, 0.4)',
                boxShadow: '0 0 15px rgba(225, 29, 72, 0.2)' 
              }}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs text-zinc-200 font-medium tracking-wide">Available for opportunities</span>
            </motion.div>

            <motion.h1 variants={fadeLeft} className="font-bold leading-[1.06] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}>
              Hi, I'm<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 drop-shadow-[0_0_25px_rgba(225,29,72,0.4)]">
                Mirna Shenouda
              </span>
            </motion.h1>

            <motion.p variants={fadeLeft} className="text-lg md:text-xl font-medium mb-5" style={{ color: '#f472b6' }}>
              Frontend Developer &nbsp;·&nbsp; Business Technology Student
            </motion.p>

            <motion.p variants={fadeLeft} className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8 max-w-[440px]">
              I transform ideas into fast, modern, and responsive web experiences that people enjoy using.
            </motion.p>

            <motion.div variants={fadeLeft} className="flex flex-wrap gap-2 mb-9">
              {tech.map(t => (
                <span 
                  key={t} 
                  className="text-xs px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 hover:scale-105" 
                  style={{ 
                    background: 'rgba(225, 29, 72, 0.12)', 
                    border: '1px solid rgba(225, 29, 72, 0.35)', 
                    color: '#fda4af',
                    boxShadow: '0 0 10px rgba(225, 29, 72, 0.15)'
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeLeft} className="flex flex-wrap items-center gap-4 mb-9">
              <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(225,29,72,0.6)]" 
                style={{ 
                  background: 'linear-gradient(135deg, #e11d48, #8a2be2)', 
                  boxShadow: '0 0 20px rgba(225, 29, 72, 0.4)' 
                }}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:text-white hover:border-rose-500 hover:bg-rose-500/10" 
                style={{ color: '#d4d4d8', border: '1px solid rgba(138, 43, 226, 0.4)' }}
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex items-center gap-3">
              {socials.map(s => (
                <a 
                  key={s.label} 
                  href={s.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={s.label} 
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:text-white hover:border-rose-500 hover:shadow-[0_0_15px_rgba(225,29,72,0.4)]" 
                  style={{ background: 'rgba(138, 43, 226, 0.15)', border: '1px solid rgba(138, 43, 226, 0.35)', color: '#c084fc' }}
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Static Frame + 3D Moving Character */}
          <motion.div
            className="flex items-center justify-center order-first md:order-last perspective-[1000px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
          >
            {/* الإطار الخلفي الثابت */}
            <div 
              className="relative w-full max-w-[460px] p-6 rounded-3xl backdrop-blur-xl border border-rose-500/30 shadow-[0_0_50px_rgba(225,29,72,0.25)]"
              style={{
                background: 'linear-gradient(145deg, rgba(30, 10, 45, 0.7), rgba(15, 5, 25, 0.8))',
              }}
            >
              {/* Neon Glow خلف الصورة داخل الكرت (ثابت) */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl blur-2xl opacity-60 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.6), rgba(138,43,226,0.5), transparent 70%)' }}
              />

              {/* Floating UI Badge -Cyberpunk Style (ثابتة في الإطار) */}
              <div className="absolute -top-4 -right-2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-fuchsia-500/40 bg-purple-950/80 backdrop-blur-md shadow-lg text-xs font-semibold text-fuchsia-300">
                <Sparkles size={14} className="text-rose-400 animate-spin" />
                <span>Creative Developer</span>
              </div>

              {/* الكاراكتر هو الوحيد اللي بيتحرك وبيميل */}
              <motion.img
                src="/images/projects/A55f587940bf34fae8297a6fd65bff62bk copy copy copy.png"
                alt="Mirna Shenouda"
                className="w-full h-auto object-cover mix-blend-screen scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 85%)',
                  // تطبيق الحركة والدوران هنا بس
                  rotateX: smoothRotateX,
                  rotateY: smoothRotateY,
                  x: smoothX,
                  y: smoothY,
                  transformStyle: 'preserve-3d',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.a 
        href="#about" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2 }} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors hover:text-rose-400" 
        style={{ color: 'rgba(212, 212, 216, 0.7)' }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <span className="text-xs block text-center mb-1 tracking-widest uppercase font-semibold">Scroll</span>
          <ArrowDown size={16} className="mx-auto text-rose-500" />
        </motion.div>
      </motion.a>
    </section>
  );
}