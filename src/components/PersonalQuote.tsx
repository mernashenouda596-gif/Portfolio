import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
export default function PersonalQuote() {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <motion.blockquote initial={{opacity:0,scale:.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.8}} className="relative">
            <span className="text-6xl text-rose-500/30 absolute -top-4 -left-2" style={{fontFamily:'Georgia, serif'}}>"</span>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed text-zinc-100 italic" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Every line of code is an opportunity to build something meaningful.</p>
            <span className="text-6xl text-rose-500/30 absolute -bottom-10 -right-2" style={{fontFamily:'Georgia, serif'}}>"</span>
          </motion.blockquote>
          <p className="mt-8 text-rose-400 text-sm uppercase tracking-widest">— Mirna Shenouda</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
