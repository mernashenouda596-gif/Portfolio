import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const socials = [
  { icon: Github,   href: 'https://github.com/mernashenouda596-gif',           label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/merna-shenouda-691053409', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:mernashenouda596@gmail.com',                    label: 'Email' },
];
const tech = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Python'];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeLeft  = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] as const } } };

export default function Hero() {
  // ── 1. Advanced REALISTIC CHARACTER INTERACTION SETUP ──
  const heroRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ── التعديل الأساسي للحركة الحقيقية (REAL depth):
  // بدلاً من الدوران البسيط، سنقوم بعمل Morphing و Distorting
  // هذا يجعل الشخصية تبدو وكأنها تميل من زوايا مختلفة دون أن تدور الحافة.
  const skewX = useTransform(mouseX, [-0.5, 0.5], [6, -6]); // تشويه أفقي خفيف
  const skewY = useTransform(mouseY, [-0.5, 0.5], [-4, 4]); // تشويه رأسي خفيف

  const perspectiveY = useTransform(mouseX, [-0.5, 0.5], [18, -18]); // دوران Perspective أفقي
  const perspectiveX = useTransform(mouseY, [-0.5, 0.5], [-14, 14]); // دوران Perspective رأسي

  // إضافة زنبرك ناعم جداً
  const springConfig = { damping: 25, stiffness: 130 }; // تقليل الـ stiffness قليلاً
  const smoothSkewX = useSpring(skewX, springConfig);
  const smoothSkewY = useSpring(skewY, springConfig);
  const smoothPerspectiveX = useSpring(perspectiveX, springConfig);
  const smoothPerspectiveY = useSpring(perspectiveY, springConfig);

  // دالة معالجة حركة الماوس
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
      // تفعيل الـ Perspective من هنا لتأثير 3D أفضل
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ perspective: '1200px' }} 
    >
      {/* Two-column layout: text on LEFT, character on RIGHT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full pt-28 pb-20">

          {/* ── LEFT: text ── */}
          <motion.div
            className="flex flex-col justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7 w-fit" style={{ background: 'rgba(30,16,50,0.7)', border: '1px solid rgba(147,51,234,0.35)', backdropFilter: 'blur(8px)' }}>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs text-zinc-200 font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1 variants={fadeLeft} className="font-bold leading-[1.06] mb-5" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2.6rem, 5vw, 4.2rem)' }}>
              Hi, I'm<br /><span className="text-gradient-red">Mirna Shenouda</span>
            </motion.h1>

            <motion.p variants={fadeLeft} className="text-lg md:text-xl font-medium mb-5" style={{ color: '#f9a8d4' }}>
              Frontend Developer &nbsp;·&nbsp; Business Technology Student
            </motion.p>

            <motion.p variants={fadeLeft} className="text-zinc-200 text-base md:text-lg leading-relaxed mb-8 max-w-[420px]">
              I transform ideas into fast, modern, and responsive web experiences that people enjoy using.
            </motion.p>

            <motion.div variants={fadeLeft} className="flex flex-wrap gap-2 mb-9">
              {tech.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ background: 'rgba(225,29,72,0.15)', border: '1px solid rgba(225,29,72,0.4)', color: '#fda4af' }}>{t}</span>)}
            </motion.div>

            <motion.div variants={fadeLeft} className="flex flex-wrap items-center gap-3 mb-9">
              <a href="#projects" className="px-7 py-3 rounded-full font-semibold text-sm text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#e11d48,#be123c)', boxShadow: '0 0 0 1px rgba(225,29,72,0.4), 0 8px 28px rgba(225,29,72,0.4)' }}>View Projects</a>
              <a href="#contact" className="px-7 py-3 rounded-full text-sm font-medium transition-all hover:text-rose-300" style={{ color: '#a1a1aa', border: '1px solid rgba(147,51,234,0.3)' }}>Contact Me</a>
            </motion.div>

            <motion.div variants={fadeLeft} className="flex items-center gap-3">
              {socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 hover:text-white" style={{ background: 'rgba(147,51,234,0.15)', border: '1px solid rgba(147,51,234,0.35)', color: '#c084fc' }}><s.icon size={18} /></a>)}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: character (transparent PNG) with 3D MOUSE INTERACTION ── */}
          <motion.div
            className="flex items-center justify-center order-first md:order-last"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
          >
            <motion.div
              className="relative w-full h-auto flex items-center justify-center"
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              {/* glow behind the character */}
              <div
                className="absolute inset-0 -z-10 rounded-full blur-3xl opacity-50"
                style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.5), rgba(147,51,234,0.4), transparent 70%)' }}
              />

              {/* The character image — background already removed (transparent PNG) */}
              <motion.img
                src="/images/projects/A55f587940bf34fae8297a6fd65bff62bk copy copy copy.png"
                alt="Mirna Shenouda"
                className="w-auto h-auto max-w-full mix-blend-screen scale-125"
                style={{
                  // ده هو السحر، بيعمل تدرج يخلي الحواف تختفي
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',

                  // ─── الجزء الجديد للحركة الواقعية (REAL depth/Distortion) ───
                  transformOrigin: '50% 50%', 
                  
                  // سنقوم بدمج الـ Skew مع الـ Rotate لخلق شعور "تغيير المنظور" الحقيقي
                  // هذا يجعل الشخصية تبدو وكأنها تميل وتتحول (Morph) وتظهر عمق داخلي
                  rotateX: smoothPerspectiveX,
                  rotateY: smoothPerspectiveY,
                  skewX: smoothSkewX,
                  skewY: smoothSkewY,
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors hover:text-rose-400" style={{ color: 'rgba(161,161,170,0.7)' }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <span className="text-xs block text-center mb-1 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="mx-auto" />
        </motion.div>
      </motion.a>
    </section>
  );
}