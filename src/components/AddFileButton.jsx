import React from 'react';
import { Plus } from 'lucide-react';

export function AddFileButton({ onFileSelect }) {
  return (
    <label className="inline-flex items-center px-4 py-2 bg-black border border-gray-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
      <Plus className="w-4 h-4 mr-2" />
      Add file
      <input
        type="file"
        className="hidden"
        onChange={onFileSelect}
        accept="application/pdf"
      />
    </label>
  );
}
