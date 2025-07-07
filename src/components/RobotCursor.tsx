import React, { useEffect, useRef } from 'react';

const RobotCursor: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const particleRefs = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const positions = useRef<{ x: number; y: number }[]>([]);

  const PARTICLE_COUNT = 10;

  useEffect(() => {
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.current[i] = { x: 0, y: 0 };
    }

    const handleMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMove);
    document.body.style.cursor = 'none';

    const animate = () => {
      let prev = { ...mouse.current };

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const current = positions.current[i];

        // delay movement by blending with previous
        current.x += (prev.x - current.x) * 0.15;
        current.y += (prev.y - current.y) * 0.15;

        const el = particleRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
        }

        prev = current;
      }

      if (mainRef.current) {
        mainRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main Robot Cursor */}
      <div
        ref={mainRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div className="w-4 h-4 rounded-full border-[2px] border-cyan-400 bg-black/80 shadow-[0_0_6px_#22d3ee] animate-pulse" />
      </div>

      {/* Floating Trail Particles */}
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particleRefs.current[i] = el;
          }}
          className="fixed top-0 left-0 z-[9998] pointer-events-none"
          style={{
            width: `${3 - i * 0.1}px`,
            height: `${3 - i * 0.1}px`,
            borderRadius: '50%',
            backgroundColor: '#22d3ee',
            opacity: 0.05 + (0.1 * (PARTICLE_COUNT - i)),
            filter: 'blur(1px)',
            transition: 'transform 0.04s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default RobotCursor;
