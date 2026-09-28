"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  angle: number;
  orbitRadius: number;
  speed: number;
}

export const HeroParticleSwarm: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 800);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        mouse.x = mouseX;
        mouse.y = mouseY;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initialize 30 Golden Orbit Particles around face (center-right area)
    const numParticles = 32;
    const particles: Particle[] = [];

    const centerX = width * 0.55;
    const centerY = height * 0.45;

    for (let i = 0; i < numParticles; i++) {
      const angle = (i / numParticles) * Math.PI * 2;
      const orbitRadius = 90 + Math.random() * 140;
      particles.push({
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
        originX: centerX,
        originY: centerY,
        vx: 0,
        vy: 0,
        radius: 1.5 + Math.random() * 2.5,
        alpha: 0.4 + Math.random() * 0.6,
        angle: angle,
        orbitRadius: orbitRadius,
        speed: (0.005 + Math.random() * 0.008) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const currentCenterX = width * 0.55;
      const currentCenterY = height * 0.45;

      particles.forEach((p) => {
        p.angle += p.speed;
        const targetX = currentCenterX + Math.cos(p.angle) * p.orbitRadius;
        const targetY = currentCenterY + Math.sin(p.angle) * p.orbitRadius;

        if (mouse.active) {
          // Calculate distance to mouse cursor
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220) {
            // Magnetic attraction to cursor
            const force = (220 - dist) / 220;
            p.x += (mouse.x - p.x) * force * 0.08;
            p.y += (mouse.y - p.y) * force * 0.08;
          } else {
            p.x += (targetX - p.x) * 0.04;
            p.y += (targetY - p.y) * 0.04;
          }
        } else {
          // Smooth return to orbit around face
          p.x += (targetX - p.x) * 0.05;
          p.y += (targetY - p.y) * 0.05;
        }

        // Render Glowing Gold Particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 193, 88, ${p.alpha})`;
        ctx.shadowColor = "#E5C158";
        ctx.shadowBlur = 12;
        ctx.fill();

        // Subtle connecting golden thread lines when close
        particles.forEach((other) => {
          const odx = other.x - p.x;
          const ody = other.y - p.y;
          const odist = Math.sqrt(odx * odx + ody * ody);
          if (odist < 70) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(229, 193, 88, ${(1 - odist / 70) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) {
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15 w-full h-full"
    />
  );
};

export default HeroParticleSwarm;
