import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const contacts=[
  {icon:Mail,label:'Email',value:'mernashenouda596@gmail.com',href:'mailto:mernashenouda596@gmail.com'},
  {icon:Linkedin,label:'LinkedIn',value:'www.linkedin.com/in/merna-shenouda-691053409',href:'https://www.linkedin.com/in/merna-shenouda-691053409'},
  {icon:Github,label:'GitHub',value:'https://github.com/mernashenouda596-gif',href:'https://github.com/mernashenouda596-gif'},
  {icon:Phone,label:'WhatsApp',value:'01212583360',href:'https://wa.me/201212583360'},
];
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-grid">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="right"><p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">Let's Connect</p><h2 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Get in <span className="text-gradient-red">touch</span></h2><p className="text-zinc-300 max-w-2xl mb-12 leading-relaxed">I'm always open to discussing new opportunities, collaborations, or exciting projects. Feel free to reach out through any of the platforms below.</p></ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c,i)=>(
            <ScrollReveal key={c.label} direction={i%2===0?'left':'right'} delay={i*.05}>
              <motion.a href={c.href} target="_blank" rel="noopener noreferrer" whileHover={{y:-4}} className="card-purple rounded-2xl p-5 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600/25 to-purple-600/25 flex items-center justify-center text-rose-400 flex-shrink-0"><c.icon size={22}/></div>
                <div className="flex-1 min-w-0"><p className="text-xs text-zinc-500 uppercase tracking-wider">{c.label}</p><p className="text-zinc-100 font-medium truncate">{c.value}</p></div>
                <ArrowUpRight size={18} className="text-zinc-600 group-hover:text-rose-400 transition-colors flex-shrink-0"/>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
