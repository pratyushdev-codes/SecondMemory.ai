import React from 'react';
import { Code2, Terminal } from 'lucide-react';

function Features() {
  return (
    <div className="min-h-screen bg-[black] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex gap-4">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          {/* Top Left Card */}
          <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-[300px]">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-purple-400" size={24} />
              <h2 className="text-2xl font-light text-white">The Inside Scoop</h2>
            </div>
            <p className="text-gray-300">
              Tech enthusiast with a passion for problem solving and building innovative solutions.
            </p>
          </div>

          {/* Bottom Left Card */}
          <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-[300px]">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="text-purple-400" size={24} />
              <h2 className="text-2xl font-light text-white">Let&apos;s Build Together</h2>
            </div>
            <p className="text-gray-300">
              Do you want to build something together? Let&apos;s create amazing projects!
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 h-[616px]">
            <div className="h-full flex flex-col">
              <h2 className="text-2xl font-light text-white mb-4">Upcoming DevOps Engineer</h2>
              <div className="flex-1 bg-black/30 rounded-lg p-4 font-mono text-sm text-purple-300">
                <div className="mb-4">
                  <span className="text-gray-500"> Importing a single module</span>
                  <div>
                    <span className="text-pink-500">import</span>
                    <span className="text-purple-300"> moduleName </span>
                    <span className="text-pink-500">from</span>
                    <span className="text-orange-300"> &apos;modulePath&apos;</span>;
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Importing multiple modules</span>
                  <div>
                    <span className="text-pink-500">import</span>
                    <span className="text-purple-300"> {'{ module1, module2 }'} </span>
                    <span className="text-pink-500">from</span>
                    <span className="text-orange-300"> &apos;modulePath&apos;</span>;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Features;
