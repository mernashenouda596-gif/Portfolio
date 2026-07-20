import { motion } from 'framer-motion';
import { Code2, Wrench, TestTube, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const categories = [
  {icon:Code2,title:'Frontend Development',items:['HTML5','CSS3','JavaScript','React','Bootstrap','Responsive Design']},
  {icon:Sparkles,title:'Programming',items:['Python']},
  {icon:Wrench,title:'Tools',items:['Git','GitHub','VS Code','Vite','npm','Chrome DevTools','Vercel']},
  {icon:TestTube,title:'Testing',items:['Jest / Vitest']},
];
const arsenal = ['HTML5','CSS3','JavaScript (ES6+)','React','Bootstrap','Python','Git','GitHub','Vercel'];
const soft = ['Communication','Problem Solving','Teamwork','Time Management','Adaptability','Fast Learner','Critical Thinking','Attention to Detail'];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="right">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent-rose)' }}>My Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Technical <span className="text-gradient-red">Arsenal</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left" className="mb-14">
          <div className="flex flex-wrap gap-3">
            {arsenal.map((t, i) => (
              <motion.span key={t} initial={{ opacity:0, scale:.8 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay: i*.05 }} whileHover={{ y:-4, scale:1.05 }} className="px-4 py-2 rounded-full glass-light text-sm font-medium" style={{ color: 'var(--accent-rose-soft)', border: '1px solid rgba(225,29,72,0.2)' }}>{t}</motion.span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {categories.map((c, i) => (
            <ScrollReveal key={c.title} direction="up" delay={i*.1}>
              <motion.div whileHover={{ y:-6 }} className="card-purple rounded-2xl p-6 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(147,51,234,0.2)', color: 'var(--accent-purple-light)' }}><c.icon size={22}/></div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--accent-purple-soft)' }}>{c.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {c.items.map(it => <span key={it} className="text-xs px-3 py-1 rounded-md" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid rgba(147,51,234,0.15)' }}>{it}</span>)}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="left">
          <h3 className="text-xl font-semibold mb-5" style={{ color: 'var(--accent-rose-soft)' }}>Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {soft.map((s, i) => (
              <motion.span key={s} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay: i*.05 }} className="px-4 py-2 rounded-full text-sm" style={{ background: 'linear-gradient(135deg, rgba(225,29,72,0.2), rgba(147,51,234,0.2))', color: 'var(--accent-rose-pale)', border: '1px solid rgba(225,29,72,0.3)' }}>{s}</motion.span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" className="mt-10">
          <div className="card-purple rounded-2xl p-6">
            <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-faint)' }}>Currently Learning</p>
            <p className="font-medium" style={{ color: 'var(--accent-purple-soft)' }}>Microsoft Data Science Professional Certificate</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
