import { useEffect, useRef } from 'react';
const PALETTE = ['rgba(225,29,72,','rgba(244,63,94,','rgba(167,28,100,','rgba(147,51,234,','rgba(251,113,133,','rgba(253,164,175,'];
interface P { x:number;y:number;vx:number;vy:number;size:number;opacity:number;ci:number; }
interface R { cx:number;cy:number;r:number;s:number;o:number;c:string;w:number;d:boolean; }
interface W { y:number;a:number;f:number;s:number;p:number;c:string;o:number; }
export default function AnimatedBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if(!cv) return;
    const ctx = cv.getContext('2d'); if(!ctx) return;
    let id:number; let t=0; let H=document.body.scrollHeight;
    const rs=()=>{ H=document.body.scrollHeight; cv.width=innerWidth; cv.height=H; }; rs();
   const ps:P[]=Array.from({length:70},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,vx:(Math.random()-.5)*1.2,vy:(Math.random()-.5)*1.2,size:Math.random()*2.2+.4,opacity:Math.random()*.45+.1,ci:Math.floor(Math.random()*PALETTE.length)}));
    (Math.random()-.5)*.35,size:Math.random()*2.2+.4,opacity:Math.random()*.45+.1,ci:Math.floor(Math.random()*PALETTE.length)}));
    const rs2:R[]=[]; const cc=Math.ceil(H/700);
    for(let i=0;i<cc;i++){ const cy=(i+.5)*(H/cc); const cx=i%2?cv.width*.8:cv.width*.2; [240,320,420,540].forEach((r,j)=>rs2.push({cx,cy,r,s:(j%2?-.12:.15)*(.8+Math.random()*.4),o:Math.random()*Math.PI*2,c:j<2?'rgba(225,29,72,':j===2?'rgba(147,51,234,':'rgba(253,164,175,',w:j%2?1.2:.7,d:j%2!==0})); }
    const ws:W[] = Array.from({length:10},(_,i)=>({y:(i/10)*H,a:60+Math.random()*80,f:.004+Math.random()*.003,s:.3+Math.random()*.4,p:Math.random()*Math.PI*2,c:i%3===0?'rgba(225,29,72,':i%3===1?'rgba(147,51,234,':'rgba(253,164,175,',o:.04+Math.random()*.04}));
    const d=()=>{ t+=.006; ctx.clearRect(0,0,cv.width,cv.height);
      rs2.forEach(r=>{ const a=t*r.s+r.o; ctx.save(); ctx.translate(r.cx,r.cy); ctx.rotate(a); ctx.setLineDash(r.d?[8,12]:[]); ctx.beginPath(); ctx.arc(0,0,r.r,0,Math.PI*2); ctx.strokeStyle=`${r.c}${.12+Math.sin(t+r.o)*.04})`; ctx.lineWidth=r.w; ctx.stroke(); ctx.setLineDash([]); ctx.beginPath(); ctx.arc(0,-r.r,3,0,Math.PI*2); ctx.fillStyle=`${r.c}0.6)`; ctx.shadowBlur=8; ctx.shadowColor=`${r.c}0.8)`; ctx.fill(); ctx.shadowBlur=0; ctx.restore(); });
      ws.forEach(w=>{ ctx.beginPath(); for(let x=0;x<=cv.width;x+=4){ const y=w.y+Math.sin(x*w.f+t*w.s+w.p)*w.a; x===0?ctx.moveTo(x,y):ctx.lineTo(x,y); } ctx.setLineDash([]); ctx.strokeStyle=`${w.c}${w.o})`; ctx.lineWidth=1; ctx.stroke(); });
      ps.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.x<0)p.x=cv.width; if(p.x>cv.width)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0; const pu=p.opacity+Math.sin(t*1.8+p.x*.01)*.12; ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fillStyle=`${PALETTE[p.ci]}${Math.max(.05,Math.min(.7,pu))})`; ctx.fill(); });
      for(let i=0;i<ps.length;i++)for(let j=i+1;j<ps.length;j++){ const dx=ps[i].x-ps[j].x,dy=ps[i].y-ps[j].y,dd=Math.sqrt(dx*dx+dy*dy); if(dd<100){ ctx.beginPath(); ctx.moveTo(ps[i].x,ps[i].y); ctx.lineTo(ps[j].x,ps[j].y); ctx.strokeStyle=`rgba(225,29,72,${.07*(1-dd/100)})`; ctx.lineWidth=.5; ctx.stroke(); } }
      id=requestAnimationFrame(d);
    };
    d();
    const ro=new ResizeObserver(rs); ro.observe(document.body); addEventListener('resize',rs);
    return ()=>{ cancelAnimationFrame(id); ro.disconnect(); removeEventListener('resize',rs); };
  },[]);
  return <canvas ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex:0 }} />;
}
