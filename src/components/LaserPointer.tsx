import React, { useEffect, useState } from 'react';

interface LaserPointerProps {
  isActive: boolean;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ isActive }) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    if (!isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      className="fixed z-50 pointer-events-none transition-transform duration-75"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer halo */}
      <div className="w-10 h-10 rounded-full bg-rose-500/25 animate-ping absolute -inset-2"></div>
      {/* Middle glow */}
      <div className="w-6 h-6 rounded-full bg-rose-500/50 blur-[2px] absolute -inset-0.5"></div>
      {/* Bright center laser core */}
      <div className="w-4 h-4 rounded-full bg-rose-400 border border-white shadow-[0_0_15px_rgba(244,63,94,1)] relative"></div>
    </div>
  );
};
