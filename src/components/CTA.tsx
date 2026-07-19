import ScrollReveal from './ScrollReveal';
export default function CTA() {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up"><h2 className="text-3xl md:text-5xl font-bold mb-5" style={{fontFamily:"'Space Grotesk', sans-serif"}}>Interested in <span className="text-gradient-red">working together?</span></h2></ScrollReveal>
        <ScrollReveal direction="up" delay={0.15}><p className="text-zinc-300 max-w-2xl mx-auto mb-8 leading-relaxed">I'm always excited to collaborate on creative ideas, learn from new challenges, and build meaningful web experiences. Feel free to reach out—I'd love to connect.</p></ScrollReveal>
        <ScrollReveal direction="up" delay={0.3}><a href="#contact" className="inline-block px-7 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-rose-500/40 hover:-translate-y-0.5">Let's Connect</a></ScrollReveal>
      </div>
    </section>
  );
}
