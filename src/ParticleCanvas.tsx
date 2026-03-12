import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface ParticleCanvasProps {
  dark: boolean;
}

export default function ParticleCanvas({ dark }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return undefined;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particleCount = reducedMotion ? 28 : window.innerWidth < 768 ? 42 : 74;
    const particles: Particle[] = [];

    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        radius: Math.random() * 1.8 + 0.8,
        opacity: Math.random() * 0.38 + 0.16,
      });
    }

    particlesRef.current = particles;

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    const connectionDistance = window.innerWidth < 768 ? 110 : 150;
    const mouseDistance = 180;
    const glowColor = dark ? [255, 96, 108] : [190, 24, 42];
    const linkColor = dark ? [104, 212, 255] : [14, 116, 144];

    const drawScene = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > window.innerWidth) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > window.innerHeight) {
          particle.vy *= -1;
        }

        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const safeDistance = distance || 1;

        if (!reducedMotion && distance < mouseDistance) {
          const force = (mouseDistance - distance) / mouseDistance;
          particle.vx += (dx / safeDistance) * force * 0.015;
          particle.vy += (dy / safeDistance) * force * 0.015;
        }

        particle.vx *= 0.996;
        particle.vy *= 0.996;

        const glow = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 8,
        );
        glow.addColorStop(
          0,
          `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, ${particle.opacity * 0.9})`,
        );
        glow.addColorStop(1, `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, 0)`);
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius * 8, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, ${particle.opacity})`;
        context.fill();

        for (let secondIndex = index + 1; secondIndex < particles.length; secondIndex += 1) {
          const secondParticle = particles[secondIndex];
          const cdx = particle.x - secondParticle.x;
          const cdy = particle.y - secondParticle.y;
          const connection = Math.sqrt(cdx * cdx + cdy * cdy);

          if (connection < connectionDistance) {
            const lineOpacity = (1 - connection / connectionDistance) * 0.16;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(secondParticle.x, secondParticle.y);
            context.strokeStyle = `rgba(${linkColor[0]}, ${linkColor[1]}, ${linkColor[2]}, ${lineOpacity})`;
            context.lineWidth = 0.85;
            context.stroke();
          }
        }

        if (!reducedMotion && distance < mouseDistance) {
          const lineOpacity = (1 - distance / mouseDistance) * 0.22;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(mouseRef.current.x, mouseRef.current.y);
          context.strokeStyle = `rgba(${glowColor[0]}, ${glowColor[1]}, ${glowColor[2]}, ${lineOpacity})`;
          context.lineWidth = 0.9;
          context.stroke();
        }
      }
    };

    const animate = () => {
      drawScene();
      animationRef.current = window.requestAnimationFrame(animate);
    };

    if (reducedMotion) {
      drawScene();
    } else {
      animate();
    }

    return () => {
      window.cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: dark ? 0.72 : 0.48 }}
    />
  );
}
