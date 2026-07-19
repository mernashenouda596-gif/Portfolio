import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
interface P { children: ReactNode; direction?: 'left'|'right'|'up'|'down'; delay?: number; className?: string; }
export default function ScrollReveal({ children, direction='up', delay=0, className='' }: P) {
  const off = { left:{x:-80}, right:{x:80}, up:{y:60}, down:{y:-60} }[direction];
  return <motion.div initial={{ opacity:0, ...off }} whileInView={{ opacity:1, x:0, y:0 }} viewport={{ once:true, amount:0.2 }} transition={{ duration:0.7, delay, ease:[0.22,1,0.36,1] }} className={className}>{children}</motion.div>;
}
