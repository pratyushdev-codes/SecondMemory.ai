import React from 'react';
import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import Chathistory from '../components/ChatHistory';
import logo from "../../public/images/supermemoryailogo.svg";
import date from 'date-and-time';
import NavigationBar from '../components/NavigationBar';
import Sidebar from '../components/Sidebar';
import { FileUploadCard } from '../components/FileUploadCard';
import Data from '../components/data';
import Activity from '../components/Activity';
import ChatUI from '../components/ChatUI';

import talktocode from './talktocode';

const Dashboard = () => {
  const { user } = useClerk();

  return (
    <div className="min-h-screen bg-cover">
      <div className="flex min-h-screen">
        <div className="">
          <Sidebar />
        </div>

        <div className="flex-1 h-screen bg-cover bg-center p-5 bg-[url('./images/3.jpg')]  rounded-br-md rounded-tr-xl">
          <NavigationBar />
          <div className="mb-6">
            <h1 className="text-5xl pt-8 pl-4 font-normal text-transparent bg-gradient-to-r from-[#3398DB] via-[#DDE6E8] to-[#DDE6E8] bg-clip-text">
              Chat with Your Memory.
            </h1>

            <p className="text-gray-400 mt-2 pl-4">
              Build a smart, enduring knowledge base for your workstream.
            </p>
            <div className='flex flex-row justify-between items-center '>
              <div className='flex flex-row gap-4 px-4'>
                <div className="flex flex-row items-center space-x-1 border border-[#666] rounded-full p-2 mt-4 ">
                  <img src={logo} alt="Logo" className="h-5" />
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5FA5F9"><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z" /></svg></span>
                  <span className="text-gray-400 px-1">Chat</span>
                </div>

                <div className="flex flex-row items-center space-x-2 px-4 border border-[#666] rounded-full p-2 mt-4">
                  <div className="flex flex-row items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9">
                      <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                    </svg>
                    <span className="text-gray-400">
                      {new Date().toLocaleString('en-GB', { day: 'numeric', month: 'long' })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative inline-flex group mt-4 ">
                <div className=" absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>

                <a href="" title="Talk to Code"
                  className="relative inline-flex items-center justify-center px-4 py-2 text-gray-300 transition-all duration-200 bg-gray-900 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button">
                  <i className="fa-solid fa-terminal"></i>&nbsp; Talk to Code
                </a>
              </div>
            </div>
          </div>

          <div className="h-[calc(100vh-16.7rem)] rounded-tl-2xl rounded-tr-2xl overflow-hidden shadow-lg bg-[#1a1f37]/80 backdrop-blur-sm border border-gray-700">
            <ChatUI />
          </div>
        </div>

        <div className="w-1/4 pr-4 py-4 h-screen overflow-hidden hidden lg:block">
            <div className="h-full rounded-2xl shadow-lg flex flex-col">
              <div className="flex-1 p-4 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <div className="bg-[url('./images/nexx.jpg')] opacity-95 border border-gray-700 rounded-xl p-4 h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                  <Data />
                </div>
                <div className=" bg-gradient-to-b to-gray-900 from-black border border-gray-800 rounded-xl p-1">
                  <Activity />
                </div>
                <div className="bg-[url('./images/nexx8.jpg')] opacity-75 border border-gray-700 bg-cover rounded-xl p-2">
                  <FileUploadCard />
                </div>
                {/* "bg-[url('./images/nexx.jpg')] */}

              </div>
            </div>
          </div>
    
        </div>
      </div>
      );
};

      export default Dashboard;