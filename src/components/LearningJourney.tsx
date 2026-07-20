import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const journey = [
  {year:'2025',text:'Started studying Business Technology at Canadian International College (CIC).'},
  {year:'2025',text:'Began learning Frontend Development with HTML, CSS, and JavaScript.'},
  {year:'2025',text:'Built my first responsive web applications and strengthened my understanding of modern web development fundamentals.'},
  {year:'2026',text:'Started developing interactive React applications using modern development tools like React, Vite, Git, and GitHub.'},
  {year:'2026',text:'Built StudyVerse, a university productivity platform designed to help students organize their academic life.'},
  {year:'2026',text:'Developed +ToDo, a modern task and habit management application focused on improving daily productivity.'},
  {year:'Present',text:'Currently learning Python and Data Science while continuously improving my Frontend Development skills.'},
];

export default function LearningJourney() {
  return (
    <section id="journey" className="relative py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="right">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--accent-rose)' }}>Learning Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-14" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            My <span className="text-gradient-red">path</span> so far
          </h2>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, rgba(225,29,72,0.4), rgba(147,51,234,0.2), transparent)' }} />
          {journey.map((it, i) => (
            <ScrollReveal key={i} direction={i%2===0?'left':'right'}>
              <div className={`relative flex mb-8 ${i%2===0?'md:flex-row-reverse':''}`}>
                <div className="flex-1 md:px-8">
                  <motion.div whileHover={{ scale:1.02 }} className="card rounded-2xl p-5">
                    <span className="font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--accent-rose)' }}>{it.year}</span>
                    <p className="mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{it.text}</p>
                  </motion.div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10" style={{ background: 'var(--accent-rose)', border: '4px solid var(--bg-base)' }} />
                <div className="flex-1 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
