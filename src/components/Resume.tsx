import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ResumeProps {
  onDownloadCV: () => void;
}

export default function Resume({ onDownloadCV }: ResumeProps) {
  return (
    <section id="resume" className="section-red-pink relative py-24 bg-grid">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal direction="left">
          <p className="text-rose-500 text-sm font-medium tracking-widest uppercase mb-3">Resume & CV</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            A closer <span className="text-gradient-red">look</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Looking for a more detailed overview of my education, technical skills, featured projects, and development journey? Feel free to explore my resume for a complete summary of my qualifications, experience, and the technologies I work with.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <motion.div whileHover={{ y: -6 }} className="card-theme-red rounded-3xl p-8 md:p-10 neon-border">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-600/20 flex items-center justify-center text-rose-400 flex-shrink-0">
                  <FileText size={26} />
                </div>
                <div>
                  <p className="text-xl font-bold text-gradient-red" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Mirna Shenouda</p>
                  <p className="text-sm text-zinc-400">Frontend Developer • Business Technology Student</p>
                  <p className="text-sm text-zinc-500 mt-2 max-w-md">A concise overview of my education, technical skills, featured projects, and continuous learning journey.</p>
                </div>
              </div>
              <button onClick={onDownloadCV} className="flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-rose-500/40 hover:-translate-y-0.5 whitespace-nowrap">
                <Download size={18} /> Download CV
              </button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
