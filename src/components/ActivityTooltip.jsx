import React from 'react';

export const ActivityTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg shadow-lg">
      <p className="text-gray-300 text-sm mb-1">
        {new Date(label).toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        })}
      </p>
      <p className="text-cyan-400 font-medium">
        {payload[0].value} {payload[0].value === 1 ? 'chat' : 'chats'}
      </p>
    </div>
  );
};