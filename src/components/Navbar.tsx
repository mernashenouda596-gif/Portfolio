import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const links = [
  {label:'About',href:'#about'},
  {label:'Skills',href:'#skills'},
  {label:'Process',href:'#process'},
  {label:'Journey',href:'#journey'},
  {label:'Projects',href:'#projects'},
  {label:'Contact',href:'#contact'},
];

export default function Navbar() {
  const [s, setS] = useState(false);
  const [o, setO] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const f = () => setS(scrollY > 30);
    addEventListener('scroll', f);
    return () => removeEventListener('scroll', f);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s ? 'glass py-3' : 'py-5 bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold text-gradient-red" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>M</span>
          <span className="text-sm font-medium hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>Mirna Shenouda</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm relative group" style={{ color: 'var(--text-secondary)' }}>
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: 'var(--accent-rose)' }} />
            </a>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--bg-glass-light)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="px-5 py-2 text-sm font-medium text-white rounded-full transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg, var(--accent-rose), #be123c)', boxShadow: 'var(--shadow-cta)' }}>Hire Me</a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
            style={{ background: 'var(--bg-glass-light)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setO(!o)} style={{ color: 'var(--text-primary)' }}>
            {o ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {o && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setO(false)} className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
