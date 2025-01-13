import React from 'react';
import CodeChat from '../components/CodeChat';
import CodeEditor from '../components/CodeEditor';
import { Terminal, Github, FolderUp, Waypoints, Workflow } from 'lucide-react';
import logo from '../../public/images/supermemoryailogo.svg';

function TalktoCode() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat hidden lg:block">
      <div className="flex flex-col lg:flex-row h-screen text-gray-100 p-4 lg:p-8 gap-3">
        {/* Left side - Chat */}
        <div className="w-1/3 flex flex-col gap-4 h-full">
        <p
  className="text-4xl px-3 shadow-lg flex items-center"
  style={{
    background: "linear-gradient(to bottom, #6b7280, #a2a2a2)", // Gray-500 to White
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    style={{
      fill: "currentColor", // Ensure the icon is visible
    }}
  >
    <path d="M600-40q-33 0-56.5-23.5T520-120q0-23 11-41t29-29v-221q-18-11-29-28.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 23-11 40.5T640-411v115l160-53v-62q-18-11-29-28.5T760-480q0-33 23.5-56.5T840-560q33 0 56.5 23.5T920-480q0 23-11 40.5T880-411v119l-240 80v22q18 11 29 29t11 41q0 33-23.5 56.5T600-40ZM160-160v-560 560Zm0 0q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480h280v80H160Z"/>
  </svg> */}
  Select codebase
</p>
          <div className="flex flex-row gap-2">
            <button className="flex items-center p-1 rounded-full backdrop-blur-sm">
            </button>
            {/* Chat with Uploaded Code Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-700/50 rounded-full backdrop-blur-sm">
              <FolderUp size={18} className="text-blue-400" />
              Uploaded Code
            </button>

            {/* Connect GitHub Repo Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-700/50 rounded-full backdrop-blur-sm">
              <Github size={18} className="text-blue-400" />
              Connect GitHub Repo
            </button>
          </div>

          {/* Chat Section */}
          <div className="h-full rounded-2xl overflow-hidden shadow-xl backdrop-blur-sm bg-black border border-gray-700/50">
            <div className="h-full flex flex-col">
              <div className="bg-gradient-to-b  from-black to-gray-900 border-gray-800/50 opacity-85 bg-cover flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                <CodeChat />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 bg-[url('./images/3.jpg')] bg-cover bg-center flex flex-col space-y-6 rounded-3xl p-3" >
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-[#3398DB] via-[#DDE6E8] to-[#DDE6E8] bg-clip-text">
              Chat with Your Codebase.
            </h1>
            <p className="text-gray-300 text-base lg:text-lg">
              Deeply integrated, context-aware AI assistance.
            </p>

            {/* Action Bar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                {/* Talk to Code Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-700/50 rounded-full backdrop-blur-sm">
                  <img src={logo} alt="Logo" className="h-5" />
                  <span className="text-gray-300">/</span>
                  <Terminal size={18} className="text-blue-400" />
                  <span className="text-gray-300">Talk to Code</span>
                </div>

                {/* Date Badge */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 border border-gray-700/50 rounded-full backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#D9D9D9"
                  >
                    <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                  </svg>
                  <span className="text-gray-300">
                    {new Date().toLocaleString('en-GB', { day: 'numeric', month: 'long' })}
                  </span>
                </div>
              </div>

              {/* Talk to Code Button */}
              <button className="relative group w-full lg:w-auto">
                <div className="absolute transition-all duration-300 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1"></div>
                <span className="relative flex items-center justify-center gap-2 px-6 py-2.5 bg-gray-900 text-gray-300 rounded-full hover:text-white transition-colors w-full lg:w-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#D9D9D9"
                  >
                    <path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" />
                  </svg>
                  Chat
                </span>
              </button>
            </div>
          </div>

          {/* Code Editor Section */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl bg-gray-900/90 backdrop-blur-sm border border-gray-700/50">
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalktoCode;