import { motion } from 'framer-motion';
import { ExternalLink, Github, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const projects=[
  {name:'StudyVerse',tag:'University Productivity Platform',description:'StudyVerse is a modern productivity dashboard designed specifically for university students. It helps students organize their academic life by managing subjects, assignments, exams, deadlines, study sessions, and personal productivity in one intuitive platform.',features:['Subject Management','Smart Task Management','Deadlines & Calendar','Notes System','Pomodoro Timer','Focus Farm','Study Analytics','AI-Powered Productivity Features','Responsive Design'],stack:['React','JavaScript','Bootstrap','Vite','Git','GitHub','Vercel'],live:'https://study-verse-oogy.vercel.app',github:'https://github.com/mernashenouda596-gif/StudyVerse.git', image: '/images/projects/StudyVerse.png'  },
  {name:'+ToDo',tag:'Smart Productivity & Task Management',description:'+ToDo is a modern task management application built to simplify daily planning and improve productivity. It enables users to organize tasks, track personal habits, monitor progress, and build consistent routines through a clean interface and an intuitive user experience.',features:['Task Management','Habit Tracking','Progress Analytics','Productivity Dashboard','Workspace Organization','Notes Management','AI Companion','Responsive Design'],stack:['React','JavaScript','Bootstrap','Vite','Git','GitHub','Vercel'],live:'https://todo-premium-saas.vercel.app/',github:'https://github.com/mernashenouda596-gif/todo-premium-saas.git', image: '/images/projects/ToDo.png'},
];
export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="left"><p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">Featured Projects</p><h2 className="text-4xl md:text-5xl font-bold mb-14" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Things I've <span className="text-gradient-red">built</span></h2></ScrollReveal>
        <div className="space-y-10">
          {projects.map((p,i)=>(
            <ScrollReveal key={p.name} direction={i%2===0?'left':'right'}>
              <motion.div whileHover={{y:-4}} className="card rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden group">
                    <motion.img src={p.image} alt={p.name} className="w-full h-full object-cover" whileHover={{scale:1.05}} transition={{duration:.5}}/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0414] via-[#0d0414]/40 to-transparent"/>
                    <div className="absolute bottom-4 left-4"><span className="px-3 py-1 rounded-full bg-rose-600/80 text-white text-xs font-medium backdrop-blur">{p.tag}</span></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gradient-red" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{p.name}</h3>
                    <p className="text-zinc-300 leading-relaxed mb-5">{p.description}</p>
                    <p className="text-xs text-rose-400 uppercase tracking-wider mb-2">Key Features</p>
                    <div className="grid grid-cols-2 gap-1.5 mb-5">{p.features.map(f=><div key={f} className="flex items-center gap-1.5 text-xs text-zinc-300"><Check size={12} className="text-rose-500 flex-shrink-0"/>{f}</div>)}</div>
                    <p className="text-xs text-rose-400 uppercase tracking-wider mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2 mb-6">{p.stack.map(s=><span key={s} className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/60 text-zinc-300 border border-purple-500/15">{s}</span>)}</div>
                    <div className="flex flex-wrap gap-3">
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"><ExternalLink size={15}/> Live Demo</a>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-rose-500/40 text-rose-300 hover:bg-rose-500/10 rounded-full text-sm font-medium transition-all"><Github size={15}/> GitHub</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
