import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ArrowUp } from 'lucide-react';

const quickLinks = [
  {label:'About',href:'#about'},
  {label:'Skills',href:'#skills'},
  {label:'Work Process',href:'#process'},
  {label:'Learning Journey',href:'#journey'},
  {label:'Featured Projects',href:'#projects'},
  {label:'Contact',href:'#contact'},
];
const socials = [
  {icon:Mail,href:'mailto:mernashenouda596@gmail.com',label:'Email'},
  {icon:Linkedin,href:'https://www.linkedin.com/in/merna-shenouda-691053409',label:'LinkedIn'},
  {icon:Github,href:'https://github.com/mernashenouda596-gif',label:'GitHub'},
  {icon:Phone,href:'https://wa.me/201212583360',label:'WhatsApp'},
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8" style={{ background: 'var(--bg-base)', borderTop: '1px solid rgba(225,29,72,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-gradient-red mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Mirna Shenouda</h3>
            <p className="text-sm mb-3" style={{ color: 'var(--accent-rose-soft)', opacity: 0.7 }}>Frontend Developer • Business Technology Student</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>Building modern, responsive, and user-friendly web experiences with clean code and thoughtful design.</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--accent-rose)' }}>Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map(l => <a key={l.href} href={l.href} className="text-sm transition-colors" style={{ color: 'var(--text-muted)' }}>{l.label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--accent-rose)' }}>Connect</p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-11 h-11 rounded-full glass-light flex items-center justify-center transition-all hover:-translate-y-1" style={{ color: 'var(--text-muted)' }}>
                  <s.icon size={18}/>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(225,29,72,0.1)' }}>
          <p className="text-sm text-center md:text-left" style={{ color: 'var(--text-faint)' }}>
            © 2026 Mirna Shenouda. All rights reserved.<span className="block md:inline md:ml-1">Designed & Developed by Mirna Shenouda</span>
          </p>
          <motion.a href="#home" whileHover={{ y:-3 }} className="flex items-center gap-2 px-4 py-2 rounded-full glass-light text-sm transition-all" style={{ color: 'var(--accent-rose)' }}>Back To Top <ArrowUp size={14}/></motion.a>
        </div>
      </div>
    </footer>
  );
}
