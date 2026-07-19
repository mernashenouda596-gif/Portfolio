import { useEffect, useRef } from 'react';

// Slow-moving particles covering the ENTIRE page background (fixed canvas).
const COLORS = ['rgba(225,29,72,','rgba(244,63,94,','rgba(251,113,133,','rgba(147,51,234,','rgba(192,58,210,','rgba(168,85,247,'];
interface P { x:number; y:number; vx:number; vy:number; r:number; o:number; ci:number; pulse:number; }

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    let id: number; let t = 0;

    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; }; resize();

    // Fewer, slower particles — gentle drift
    const count = Math.min(70, Math.floor((innerWidth * innerHeight) / 22000));
    const ps: P[] = Array.from({ length: count }, () => ({
      x: Math.random()*cv.width,
      y: Math.random()*cv.height,
      vx: (Math.random()-0.5)*0.12,   // very slow
      vy: (Math.random()-0.5)*0.12,
      r: Math.random()*2.2+0.6,
      o: Math.random()*0.5+0.15,
      ci: Math.floor(Math.random()*COLORS.length),
      pulse: Math.random()*Math.PI*2,
    }));

    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = cv.width+10;
        if (p.x > cv.width+10) p.x = -10;
        if (p.y < -10) p.y = cv.height+10;
        if (p.y > cv.height+10) p.y = -10;
        const pulse = p.o + Math.sin(t*1.0 + p.pulse)*0.15;
        const op = Math.max(0.05, Math.min(0.7, pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `${COLORS[p.ci]}${op})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${COLORS[p.ci]}${op*0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      // faint connecting lines
      for (let i = 0; i < ps.length; i++) {
        for (let j = i+1; j < ps.length; j++) {
          const dx = ps[i].x-ps[j].x, dy = ps[i].y-ps[j].y, d = Math.sqrt(dx*dx+dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(147,51,234,${0.08*(1-d/130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    addEventListener('resize', resize);
    return () => { cancelAnimationFrame(id); removeEventListener('resize', resize); };
  }, []);

  // fixed: covers the whole viewport, stays behind all content
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}
