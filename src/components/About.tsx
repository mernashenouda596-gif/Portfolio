import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, BookOpen, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const facts = [
  {icon:GraduationCap,label:'Education',value:'Business Technology Student'},
  {icon:MapPin,label:'Location',value:'Egypt'},
  {icon:Code2,label:'Specialization',value:'Frontend Development'},
  {icon:BookOpen,label:'Currently Learning',value:'Data Science'},
  {icon:Globe,label:'Languages',value:'Arabic, English'},
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="left">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent-rose)' }}>About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            Building modern web <span className="text-gradient-red">experiences</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-5 leading-relaxed text-lg" style={{ color: 'var(--text-secondary)' }}>
              <p>I build modern, responsive, and user-friendly web applications.</p>
              <p>I focus on building clean interfaces, writing maintainable code, and creating experiences that are both visually appealing and easy to use. Every project I build is an opportunity to improve my skills, solve real problems, and deliver better user experiences.</p>
              <p>I'm continuously learning new technologies and always looking for opportunities to grow as a Frontend Developer while building products that make a real impact.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-3">
              {facts.map((f, i) => (
                <motion.div key={f.label} initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay: i*.1, duration: .5 }} className="card-red rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(225,29,72,0.2)', color: 'var(--accent-rose)' }}><f.icon size={22}/></div>
                  <div>
                    <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-faint)' }}>{f.label}</p>
                    <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{f.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" className="mt-12">
          <div className="card-red rounded-3xl p-8 neon">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={28} style={{ color: 'var(--accent-rose)' }} />
              <h3 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl font-semibold mb-1" style={{ color: 'var(--accent-rose-soft)' }}>Canadian International College (CIC)</p>
                <p style={{ color: 'var(--text-muted)' }}>Major: Business Technology</p>
                <div className="mt-4 flex flex-wrap gap-6">
                  <div>
                    <p className="text-xs uppercase" style={{ color: 'var(--text-faint)' }}>GPA</p>
                    <p className="text-2xl font-bold text-gradient-red">3.65</p>
                    <p className="text-xs" style={{ color: 'var(--text-faint)' }}>/ 4.00</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase" style={{ color: 'var(--text-faint)' }}>Expected Graduation</p>
                    <p className="text-2xl font-bold" style={{ color: 'var(--accent-rose-soft)' }}>2029</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase mb-3" style={{ color: 'var(--text-faint)' }}>Activities</p>
                <div className="flex flex-wrap gap-2">
                  {['Enactus','Frontend Development','Microsoft | Data Science'].map(a => (
                    <span key={a} className="px-4 py-2 rounded-full text-sm" style={{ background: 'rgba(225,29,72,0.15)', color: 'var(--accent-rose-soft)', border: '1px solid rgba(225,29,72,0.3)' }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
