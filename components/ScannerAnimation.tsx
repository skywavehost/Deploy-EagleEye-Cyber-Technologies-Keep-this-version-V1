import React, { useEffect, useRef } from 'react';

const ScannerAnimation: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let scanY = 0;
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; label: string }[] = [];

    const labels = ['NODE_AUTH', 'SSL_VALID', 'IP_ENC', 'THREAT_NULL', 'PACKET_IN', 'SEC_DNS'];

    const initParticles = () => {
      particles.length = 0;
      const count = Math.floor(canvas.width / 40);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.2 + 0.05,
          opacity: theme === 'dark' ? (Math.random() * 0.3 + 0.1) : (Math.random() * 0.15 + 0.05),
          label: labels[Math.floor(Math.random() * labels.length)]
        });
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scanlineColor = theme === 'dark' ? 'rgba(0, 242, 255, 0.02)' : 'rgba(0, 173, 239, 0.015)';
      const beamGlow1 = theme === 'dark' ? 'rgba(0, 242, 255, 0.05)' : 'rgba(0, 173, 239, 0.01)';
      const beamGlow2 = theme === 'dark' ? 'rgba(0, 242, 255, 0.2)' : 'rgba(0, 173, 239, 0.06)';
      const beamLineColor = theme === 'dark' ? 'rgba(0, 242, 255, 0.6)' : 'rgba(0, 173, 239, 0.2)';
      const nodeColor = theme === 'dark' ? 'rgba(0, 242, 255, ' : 'rgba(0, 173, 239, ';
      const labelColor = theme === 'dark' ? 'rgba(0, 242, 255, ' : 'rgba(0, 0, 0, ';

      ctx.strokeStyle = scanlineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.height; i += theme === 'dark' ? 4 : 10) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      scanY += theme === 'dark' ? 2.5 : 1.8;
      if (scanY > canvas.height + 100) scanY = -100;

      const beamGradient = ctx.createLinearGradient(0, scanY - 60, 0, scanY);
      beamGradient.addColorStop(0, 'transparent');
      beamGradient.addColorStop(0.5, beamGlow1);
      beamGradient.addColorStop(1, beamGlow2);

      ctx.fillStyle = beamGradient;
      ctx.fillRect(0, scanY - 60, canvas.width, 60);

      ctx.strokeStyle = beamLineColor;
      if (theme === 'dark') {
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 242, 255, 0.8)';
      }
      ctx.lineWidth = theme === 'dark' ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
      ctx.shadowBlur = 0;

      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;

        const distanceToBeam = Math.abs(p.y - scanY);
        const inBeamRange = distanceToBeam < 80;
        const intensity = inBeamRange ? Math.max(0, 1 - distanceToBeam / 80) : 0;
        
        ctx.fillStyle = `${nodeColor}${p.opacity + intensity * (theme === 'dark' ? 0.7 : 0.4)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, theme === 'dark' ? p.size + intensity * 1 : p.size, 0, Math.PI * 2);
        ctx.fill();

        if (intensity > (theme === 'dark' ? 0.6 : 0.8)) {
          ctx.font = '800 8px Inter';
          ctx.fillStyle = `${labelColor}${intensity * (theme === 'dark' ? 0.5 : 0.2)})`;
          ctx.fillText(p.label, p.x + 10, p.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none">
       <div className={`absolute inset-0 z-10 transition-colors duration-500 ${
         theme === 'dark' 
           ? 'bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505]' 
           : 'bg-radial-gradient from-transparent via-white/20 to-white/70'
       }`} />
       <canvas 
         ref={canvasRef} 
         className={`absolute inset-0 w-full h-full z-20 ${theme === 'dark' ? 'opacity-80' : 'opacity-100'}`}
       />
    </div>
  );
};

export default ScannerAnimation;