import { motion } from 'framer-motion';
import { Search, ClipboardList, Palette, Code2, Rocket } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
const steps=[
  {num:'01',icon:Search,title:'Discover',desc:'Understanding the project goals, user needs, and technical requirements before writing any code.'},
  {num:'02',icon:ClipboardList,title:'Plan',desc:'Planning the application structure, organizing components, and selecting the right technologies for the project.'},
  {num:'03',icon:Palette,title:'Design',desc:'Creating clean, modern, and responsive user interfaces with a strong focus on usability and user experience.'},
  {num:'04',icon:Code2,title:'Develop',desc:'Building scalable and responsive web applications using modern frontend technologies and best practices.'},
  {num:'05',icon:Rocket,title:'Test & Deploy',desc:'Testing the application, fixing issues, optimizing performance, and deploying the final product for users.'},
];
export default function WorkProcess() {
  return (
    <section id="process" className="relative py-24 bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="left"><p className="text-rose-400 text-sm font-medium tracking-widest uppercase mb-3">Work Process</p><h2 className="text-4xl md:text-5xl font-bold mb-14" style={{fontFamily:"'Space Grotesk', sans-serif"}}>How I <span className="text-gradient-red">build</span></h2></ScrollReveal>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-500/40 via-purple-500/30 to-transparent"/>
          {steps.map((s,i)=>(
            <ScrollReveal key={s.num} direction={i%2===0?'left':'right'}>
              <div className={`relative flex items-center mb-10 ${i%2===0?'md:flex-row':'md:flex-row-reverse'}`}>
                <div className="flex-1 md:px-10">
                  <motion.div whileHover={{scale:1.03,y:-4}} className="card rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-3"><div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-600/25 to-purple-600/25 flex items-center justify-center text-rose-400"><s.icon size={22}/></div><span className="text-3xl font-bold text-purple-500/30" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{s.num}</span></div>
                    <h3 className="text-xl font-semibold text-rose-200 mb-2">{s.title}</h3><p className="text-zinc-300 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-rose-500 border-4 border-[#0d0414] z-10 shadow-lg shadow-rose-500/50"/>
                <div className="flex-1 hidden md:block"/>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
