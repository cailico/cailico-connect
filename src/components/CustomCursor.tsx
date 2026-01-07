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
    
    setTrail(prev => [...prev.slice(-25), newPoint]);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
    setTrail([]);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  // Remove old trail points from the beginning
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 40);
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect - solid black line */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9998]"
        style={{ width: '100vw', height: '100vh' }}
      >
        {trail.length > 1 && (
          <polyline
            points={trail.map(p => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
      
      {/* Pencil cursor - tip at top-left of image */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-6px, -2px) ${isClicking ? 'scale(0.85)' : 'scale(1)'}`,
        }}
      >
        <img
          src="/images/pencil-cursor.png"
          alt=""
          className="w-10 h-10 object-contain drop-shadow-[0_0_2px_white] [filter:drop-shadow(0_0_1px_white)_drop-shadow(0_0_1px_white)]"
          draggable={false}
        />
      </div>
    </>
  );
};

export default CustomCursor;
