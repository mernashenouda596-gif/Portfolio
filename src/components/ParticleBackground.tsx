import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const COLORS_DARK = [
  'rgba(225,29,72,',
  'rgba(244,63,94,',
  'rgba(251,113,133,',
  'rgba(147,51,234,',
  'rgba(192,58,210,',
  'rgba(168,85,247,',
];
const COLORS_LIGHT = [
  'rgba(225,29,72,',
  'rgba(244,63,94,',
  'rgba(251,113,133,',
  'rgba(124,58,237,',
  'rgba(139,92,246,',
  'rgba(167,139,250,',
];

interface P { x:number; y:number; vx:number; vy:number; r:number; o:number; ci:number; pulse:number; }

export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    let id: number; let t = 0;

    const resize = () => { cv.width = innerWidth; cv.height = innerHeight; }; resize();

    const count = Math.min(70, Math.floor((innerWidth * innerHeight) / 22000));
    const ps: P[] = Array.from({ length: count }, () => ({
      x: Math.random()*cv.width,
      y: Math.random()*cv.height,
      vx: (Math.random()-0.5)*0.12,
      vy: (Math.random()-0.5)*0.12,
      r: Math.random()*2.2+0.6,
      o: Math.random()*0.5+0.15,
      ci: Math.floor(Math.random()*6),
      pulse: Math.random()*Math.PI*2,
    }));

    const draw = () => {
      t += 0.004;
      const colors = themeRef.current === 'light' ? COLORS_LIGHT : COLORS_DARK;
      const opacityMul = themeRef.current === 'light' ? 0.7 : 1;
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = cv.width+10;
        if (p.x > cv.width+10) p.x = -10;
        if (p.y < -10) p.y = cv.height+10;
        if (p.y > cv.height+10) p.y = -10;
        const pulse = p.o + Math.sin(t*1.0 + p.pulse)*0.15;
        const op = Math.max(0.05, Math.min(0.7, pulse)) * opacityMul;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `${colors[p.ci]}${op})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `${colors[p.ci]}${op*0.8})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      for (let i = 0; i < ps.length; i++) {
        for (let j = i+1; j < ps.length; j++) {
          const dx = ps[i].x-ps[j].x, dy = ps[i].y-ps[j].y, d = Math.sqrt(dx*dx+dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            const lineOp = themeRef.current === 'light' ? 0.1 : 0.08;
            ctx.strokeStyle = `rgba(147,51,234,${lineOp*(1-d/130)})`;
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

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />;
}
