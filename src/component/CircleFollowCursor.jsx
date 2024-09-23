import React, { useState, useEffect } from 'react';

const CircleFollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position as the mouse moves
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        className="circle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
};

export default CircleFollowCursor;