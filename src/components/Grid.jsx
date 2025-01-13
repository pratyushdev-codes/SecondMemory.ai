import React from 'react';

export const Grid = () => (
  <div className="absolute inset-0 grid grid-cols-[repeat(40,minmax(0,1fr))] grid-rows-[repeat(40,minmax(0,1fr))] gap-4 opacity-20">
    {Array.from({ length: 1600 }).map((_, i) => (
      <div key={i} className="w-0.5px h-0.5px bg-blue-800" />
    ))}
  </div>
);