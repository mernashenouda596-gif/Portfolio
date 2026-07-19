import ScrollReveal from './ScrollReveal';
const stats=[{value:'2+',label:'Featured Projects'},{value:'6+',label:'Technologies'},{value:'7+',label:'Development Tools'},{value:'3.65',label:'Current GPA'}];
export default function Statistics() {
  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s,i)=>(<ScrollReveal key={s.label} direction="up" delay={i*.1}><div className="card-purple rounded-2xl p-6 text-center"><p className="text-4xl md:text-5xl font-bold text-gradient-red mb-2" style={{fontFamily:"'Space Grotesk', sans-serif"}}>{s.value}</p><p className="text-zinc-400 text-sm">{s.label}</p></div></ScrollReveal>))}
        </div>
      </div>
    </section>
  );
}
