import React, { useState } from 'react';
import { 
  MessageSquare, 
  Terminal,
  LogOut,
  Link,
  Plus,
  History
} from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import logo from "../../public/images/supermemoryailogo.svg";
const ChatHistoryItem = ({ title }) => (
  <div className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-lg cursor-pointer transition-all duration-200 group">
    <History className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
    <span className="text-sm font-medium truncate group-hover:text-gray-300 transition-colors">{title}</span>
  </div>
);

const Sidebar = () => {
  const [url, setUrl] = useState('');
  const recentChats = [
    "How to fix React DOM error",
    "Implementing authentication",
    "Redux state management",
    "API integration best practices"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted URL:', url);
    setUrl('');
  };

  const sendWebData = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url
      })
    };

    try {
      const res = await fetch('https://secondmemoryai-default-rtdb.firebaseio.com/websiteData.json', options);

      if (res.ok) {
        console.log("Website Data dispatched to DB");
        toast.success("Website Uploaded to you Knowledge Base")
      } else {
        console.error("Error occurred while saving website details to DB", res.statusText);
        toast.error("Error occurred while saving website.")
      }
    } catch (error) {
      console.error("Network error while saving website details to DB", error);
      toast.error("Network error while saving website.")
    }
  };

  return (
    <div className="w-70 h-screen rounded-tr-2xl rounded-br-xl bg-gradient-to-b from-gray-900 to-black  border-gray-800/50 flex flex-col hidden lg:block">
      {/* Header */}
      <div className="p-6 space-y-7">
        <div className='flex flex-row items-center justify-center'>
        {/* <img src={logo} alt="Logo" className="h-6" /> */}
        <h1 className='text-xl font-semibold bg-gradient-to-r from-blue-400 via-blue-200 to-gray-200 bg-clip-text text-transparent'>Secondmemory.ai</h1>
        </div>


{/* 
        <div className="p-6 space-y-7">
        <div className="flex items-center gap-3 px-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-200 to-gray-200 bg-clip-text text-transparent">
            Secondmemory.ai
          </h1>
        </div>

        <button className="w-full flex items-center justify-center gap-2 text-sm text-gray-300 p-2.5 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl hover:border-gray-600/50 transition-all duration-300 group">
          <Command className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
          <span>Download Extension</span>
        </button> */}


        <button className="w-full flex items-center justify-center gap-2 text-ascent-1 p-2 px-3 bg-gray-900/80 border border-gray-700 rounded-full backdrop-blur-sm text-white">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9">
            <path d="M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z" />
          </svg>
          &nbsp; Download Extension
        </button>
        <h1 className="text-lg font-semibold text-gray-400  px-2"  style={{
          background: "linear-gradient(to bottom, #6b7280, white)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>AI Assistants</h1>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/20">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">New Chat</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-800/50 hover:bg-gray-800 text-gray-300 rounded-xl transition-all duration-200">
            <Terminal className="w-5 h-5" />
            <span className="font-medium">Code Assistant</span>
          </button>
        </div>

        {/* URL Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-lg font-semibold text-gray-400  px-2"  style={{
            background: "linear-gradient(to bottom, #6b7280, white)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Memory Bank</h1>
          <div className="space-y-3">
            <div className="relative">
              <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter website URL"
                className="w-full bg-gray-800/30 border border-gray-700 rounded-xl text-gray-300 pl-11 pr-4 py-2.5 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gray-800/50 hover:bg-gray-800 rounded-xl text-gray-300 py-2.5 transition-all duration-200"
              onClick={sendWebData}
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium">Add to Memory</span>
            </button>
          </div>
        </form>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <h1 className="text-lg font-semibold text-gray-400  px-2"  style={{
          background: "linear-gradient(to bottom, #6b7280, white)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>Recent Chats</h1>
        <div className="space-y-1">
          {recentChats.map((chat, index) => (
            <ChatHistoryItem key={index} title={chat} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800/50">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 rounded-xl transition-all duration-200 group">
          <LogOut className="w-5 h-5 group-hover:text-red-400 transition-colors" />
          <span className="font-medium group-hover:text-gray-300 transition-colors">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
