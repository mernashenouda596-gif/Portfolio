import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const links = [{label:'About',href:'#about'},{label:'Skills',href:'#skills'},{label:'Process',href:'#process'},{label:'Journey',href:'#journey'},{label:'Projects',href:'#projects'},{label:'Contact',href:'#contact'}];
export default function Navbar() {
  const [s,setS]=useState(false); const [o,setO]=useState(false);
  useEffect(()=>{ const f=()=>setS(scrollY>30); addEventListener('scroll',f); return()=>removeEventListener('scroll',f); },[]);
  return (
    <motion.nav initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6,ease:'easeOut'}} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?'glass py-3':'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group"><span className="text-2xl font-bold text-gradient-red" style={{fontFamily:"'Space Grotesk', sans-serif"}}>M</span><span className="text-sm font-medium text-zinc-200 group-hover:text-rose-400 transition-colors hidden sm:inline">Mirna Shenouda</span></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l=><a key={l.href} href={l.href} className="text-sm text-zinc-300 hover:text-rose-400 transition-colors relative group">{l.label}<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"/></a>)}
          <a href="#contact" className="px-5 py-2 text-sm font-medium text-white rounded-full transition-all hover:-translate-y-0.5" style={{background:'linear-gradient(135deg, #e11d48, #be123c)',boxShadow:'0 4px 15px rgba(225,29,72,0.3)'}}>Hire Me</a>
        </div>
        <button onClick={()=>setO(!o)} className="md:hidden text-zinc-100">{o?<X size={24}/>:<Menu size={24}/>}</button>
      </div>
      <AnimatePresence>{o&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} className="md:hidden glass overflow-hidden"><div className="px-6 py-4 flex flex-col gap-4">{links.map(l=><a key={l.href} href={l.href} onClick={()=>setO(false)} className="text-sm text-zinc-200 hover:text-rose-400 transition-colors">{l.label}</a>)}</div></motion.div>}</AnimatePresence>
    </motion.nav>
  );
}
