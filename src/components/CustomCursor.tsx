import { useEffect, useState, useCallback, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const trailIdRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const newX = e.clientX;
    const newY = e.clientY;
    
    setPosition({ x: newX, y: newY });
    setIsVisible(true);
    
    // Add new trail point
    trailIdRef.current += 1;
    const newPoint: TrailPoint = {
      x: newX,
      y: newY,
      id: trailIdRef.current,
    };
    
    setTrail(prev => [...prev.slice(-20), newPoint]); // Keep last 20 points
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ width: '100vw', height: '100vh' }}
      >
        {trail.length > 1 && trail.map((point, index) => {
          if (index === 0) return null;
          const prevPoint = trail[index - 1];
          const opacity = (index / trail.length) * 0.6;
          const strokeWidth = (index / trail.length) * 3 + 1;
          
          return (
            <line
              key={point.id}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              stroke="#F7941D"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              opacity={opacity}
            />
          );
        })}
      </svg>
      
      {/* Pencil cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-8px, -8px) rotate(-45deg) ${isClicking ? 'scale(0.8)' : 'scale(1)'}`,
        }}
      >
        <img
          src="/images/pencil-cursor.png"
          alt=""
          className="w-10 h-10 object-contain"
          draggable={false}
        />
      </div>
    </>
  );
};

export default CustomCursor;
