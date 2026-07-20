import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const contacts = [
  {icon:Mail,label:'Email',value:'mernashenouda596@gmail.com',href:'mailto:mernashenouda596@gmail.com'},
  {icon:Linkedin,label:'LinkedIn',value:'www.linkedin.com/in/merna-shenouda-691053409',href:'https://www.linkedin.com/in/merna-shenouda-691053409'},
  {icon:Github,label:'GitHub',value:'https://github.com/mernashenouda596-gif',href:'https://github.com/mernashenouda596-gif'},
  {icon:Phone,label:'WhatsApp',value:'01212583360',href:'https://wa.me/201212583360'},
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-grid">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="right">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent-rose)' }}>Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Get in <span className="text-gradient-red">touch</span>
          </h2>
          <p className="max-w-2xl mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I'm always open to discussing new opportunities, collaborations, or exciting projects. Feel free to reach out through any of the platforms below.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c, i) => (
            <ScrollReveal key={c.label} direction={i%2===0?'left':'right'} delay={i*.05}>
              <motion.a href={c.href} target="_blank" rel="noopener noreferrer" whileHover={{ y:-4 }} className="card-purple rounded-2xl p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(225,29,72,0.25), rgba(147,51,234,0.25))', color: 'var(--accent-rose)' }}>
                  <c.icon size={22}/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>{c.label}</p>
                  <p className="font-medium truncate" style={{ color: 'var(--text-primary)' }}>{c.value}</p>
                </div>
                <ArrowUpRight size={18} className="flex-shrink-0 transition-colors" style={{ color: 'var(--text-faint)' }} />
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
