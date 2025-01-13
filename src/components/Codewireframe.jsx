import React, { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';

export const Codewireframe = () => {
  const [path, setPath] = useState([
    { x: 50, y: 150 },    // Left point
    { x: 200, y: 150 },   // Middle control point
    { x: 350, y: 150 },   // Right point
  ]);
  const [events, setEvents] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPointIndex, setDragPointIndex] = useState(null);
  const svgRef = useRef(null);

  const handleMouseDown = (index) => {
    setIsDragging(true);
    setDragPointIndex(index);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragPointIndex === null || !svgRef.current) return;
    const svgRect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - svgRect.left;
    const y = e.clientY - svgRect.top;
    const newPath = [...path];
    newPath[dragPointIndex] = { x, y };
    setPath(newPath);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragPointIndex(null);
  };

  const addEvent = () => {
    const newEvent = {
      id: Math.random().toString(36).substr(2, 9),
      position: Math.random(),
      label: `Event ${events.length + 1}`,
    };
    setEvents([...events, newEvent]);
  };

  const getPathString = () => {
    return `M ${path[0].x},${path[0].y} 
            Q ${path[1].x},${path[1].y} 
              ${path[2].x},${path[2].y}`;
  };

  const getEventPosition = (position) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const pathLength = svgRef.current.querySelector('path')?.getTotalLength() || 0;
    const point = svgRef.current.querySelector('path')?.getPointAtLength(position * pathLength);
    return point || { x: 0, y: 0 };
  };

  return (
    <div className="flex flex-col items-center gap-4">
        
      <svg
        ref={svgRef}
        width="400"
        height="300"
        className="border border-gray-200 rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <path
          d={getPathString()}
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
        
        {path.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="6"
            fill="black"
            cursor="move"
            onMouseDown={() => handleMouseDown(index)}
          />
        ))}
        {events.map((event) => {
          const point = getEventPosition(event.position);
          return (
            <g key={event.id}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="red"
              />
              <text
                x={point.x + 10}
                y={point.y}
                fontSize="12"
                fill="black"
              >
                {event.label}
              </text>
            </g>
          );
        })}
      </svg>
      <button
        onClick={addEvent}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Plus size={16} />
        Add Event
      </button>
    </div>
  );
};