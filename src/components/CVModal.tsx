import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Globe, GraduationCap, Github, Linkedin, Download, Code2, Wrench, Sparkles, Rocket } from 'lucide-react';

interface CVModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CVModal({ open, onClose }: CVModalProps) {
  const handleDownload = () => {
    const cvText = `MIRNA SHENOUDA
Frontend Developer • Business Technology Student

CONTACT
Email: mernashenouda596@gmail.com
Phone: 01212583360
LinkedIn: www.linkedin.com/in/merna-shenouda-691053409
GitHub: https://github.com/mernashenouda596-gif

EDUCATION
Canadian International College (CIC)
Major: Business Technology
GPA: 3.65 / 4.00
Expected Graduation: 2029
Activities: Enactus, Frontend Development, Microsoft | Data Science

TECHNICAL SKILLS
Frontend: HTML5, CSS3, JavaScript (ES6+), React, Bootstrap, Responsive Design
Programming: Python
Tools: Git, GitHub, VS Code, Vite, npm, Chrome DevTools, Vercel
Testing: Jest / Vitest

FEATURED PROJECTS
1. StudyVerse
   University productivity platform for managing subjects, assignments, exams, deadlines, study sessions, and analytics.
   Stack: React • JavaScript • Bootstrap • Vite
   Live: https://study-verse-oogy.vercel.app
   GitHub: https://github.com/mernashenouda596-gif/StudyVerse.git

2. +ToDo
   Modern task & habit management app with progress analytics and productivity dashboard.
   Stack: React • JavaScript • Bootstrap • Vite
   Live: https://todo-premium-saas.vercel.app/
   GitHub: https://github.com/mernashenouda596-gif/todo-premium-saas.git

CURRENTLY LEARNING
Microsoft Data Science Professional Certificate

© 2026 Mirna Shenouda
`;

    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mirna-Shenouda-CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, y: 40, opacity: 0, rotateX: -8 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.92, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-zinc-100 shadow-2xl"
            style={{ boxShadow: '0 30px 80px rgba(225,29,72,0.35), 0 0 0 1px rgba(225,29,72,0.2)' }}
          >
            <button onClick={onClose} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-zinc-900/80 text-white hover:bg-rose-600 transition-colors flex items-center justify-center" aria-label="Close">
              <X size={20} />
            </button>

            <div className="bg-white text-zinc-800">
              <div className="relative bg-gradient-to-br from-rose-700 via-rose-600 to-rose-500 px-8 md:px-12 py-10 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border-2 border-white/40" style={{ animation: 'spinSlow 30s linear infinite' }} />
                  <div className="absolute -right-20 top-20 w-40 h-40 rounded-full border border-white/30 border-dashed" style={{ animation: 'spinReverse 40s linear infinite' }} />
                </div>
                <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MIRNA SHENOUDA</h1>
                    <p className="text-rose-100 mt-2 text-lg">Frontend Developer • Business Technology Student</p>
                  </div>
                  <div className="text-sm space-y-1 text-rose-50">
                    <a href="mailto:mernashenouda596@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail size={14} /> mernashenouda596@gmail.com</a>
                    <a href="tel:01212583360" className="flex items-center gap-2 hover:text-white"><Phone size={14} /> 01212583360</a>
                    <a href="https://www.linkedin.com/in/merna-shenouda-691053409" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Linkedin size={14} /> LinkedIn</a>
                    <a href="https://github.com/mernashenouda596-gif" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Github size={14} /> GitHub</a>
                  </div>
                </div>
              </div>

              <div className="px-8 md:px-12 py-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1 space-y-6">
                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><GraduationCap size={16} /> Education</h2>
                    <p className="font-semibold text-zinc-800 text-sm">Canadian International College (CIC)</p>
                    <p className="text-zinc-600 text-xs mt-0.5">Major: Business Technology</p>
                    <div className="mt-2 flex gap-4 text-xs">
                      <div><p className="text-zinc-500">GPA</p><p className="font-bold text-rose-700">3.65 / 4.00</p></div>
                      <div><p className="text-zinc-500">Graduation</p><p className="font-bold text-rose-700">2029</p></div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><Sparkles size={16} /> Activities</h2>
                    <div className="flex flex-wrap gap-1.5">
                      {['Enactus', 'Frontend Development', 'Microsoft | Data Science'].map((a) => (
                        <span key={a} className="text-xs px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200">{a}</span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><Code2 size={16} /> Skills</h2>
                    <div className="space-y-2 text-xs">
                      <div><p className="text-zinc-500 font-medium">Frontend</p><p className="text-zinc-700">HTML5, CSS3, JavaScript, React, Bootstrap, Responsive Design</p></div>
                      <div><p className="text-zinc-500 font-medium">Programming</p><p className="text-zinc-700">Python</p></div>
                      <div><p className="text-zinc-500 font-medium">Tools</p><p className="text-zinc-700">Git, GitHub, VS Code, Vite, npm, Chrome DevTools, Vercel</p></div>
                      <div><p className="text-zinc-500 font-medium">Testing</p><p className="text-zinc-700">Jest / Vitest</p></div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><Wrench size={16} /> Learning</h2>
                    <p className="text-xs text-zinc-700">Microsoft Data Science Professional Certificate</p>
                  </section>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><Rocket size={16} /> Featured Projects</h2>
                    <div className="space-y-4">
                      {[
                        { name: 'StudyVerse', desc: 'University productivity platform for managing subjects, assignments, exams, deadlines, study sessions, and analytics.', stack: 'React • JavaScript • Bootstrap • Vite', live: 'https://study-verse-oogy.vercel.app', github: 'https://github.com/mernashenouda596-gif/StudyVerse.git' },
                        { name: '+ToDo', desc: 'Modern task & habit management app with progress analytics and productivity dashboard.', stack: 'React • JavaScript • Bootstrap • Vite', live: 'https://todo-premium-saas.vercel.app/', github: 'https://github.com/mernashenouda596-gif/todo-premium-saas.git' },
                      ].map((p) => (
                        <div key={p.name} className="border-l-2 border-rose-400 pl-4">
                          <p className="font-bold text-zinc-800">{p.name}</p>
                          <p className="text-zinc-600 text-sm mt-1">{p.desc}</p>
                          <p className="text-xs text-zinc-500 mt-1">Stack: {p.stack}</p>
                          <div className="flex flex-wrap gap-3 mt-1.5">
                            <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"><Globe size={12} /> Live Demo</a>
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-medium"><Github size={12} /> Code</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-rose-700 font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2 border-b border-rose-200 pb-1"><Sparkles size={16} /> About</h2>
                    <p className="text-sm text-zinc-600 leading-relaxed">I build modern, responsive, and user-friendly web applications with clean interfaces and maintainable code. Continuously learning new technologies and growing as a Frontend Developer while building products that make a real impact.</p>
                  </section>
                </div>
              </div>

              <div className="bg-zinc-100 border-t border-rose-200 px-8 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-xs text-zinc-500">© 2026 Mirna Shenouda • Designed & Developed by Mirna Shenouda</p>
                <button onClick={handleDownload} className="flex items-center gap-2 px-5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-full text-sm font-medium transition-colors">
                  <Download size={16} /> Download CV
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
