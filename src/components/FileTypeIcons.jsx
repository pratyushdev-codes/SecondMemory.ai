import React from 'react';
import { FileText, FileCode, File } from 'lucide-react';

export function FileTypeIcons() {
  return (
    <div className="flex items-center gap-4">
      <FileText className="w-6 h-6 text-white" />
      <FileCode className="w-6 h-6 text-white" />
      <File className="w-6 h-6 text-white" />
    </div>
  );
}