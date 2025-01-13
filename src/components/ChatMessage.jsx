import React from 'react';
import { Bot } from 'lucide-react';
import { useUser } from '@clerk/clerk-react'; // Import useUser from Clerk
import logo from "../../public/images/supermemoryailogo.svg";

const ChatMessage = ({ message, isUser }) => {
  const { user } = useUser(); // Access the current user from Clerk
  
  return (
    <div className={`flex gap-4 ${isUser ? 'flex-row-reverse' : ''} mb-6`}>
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
        isUser 
          ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
          : 'bg-black'
      } shadow-lg ring-2 ring-gray-800/50`}>
        {isUser ? (
          user?.profileImageUrl ? ( // Check if the user has a profile image
            <img 
              className="w-10 h-10 rounded-full" 
              src={user.profileImageUrl} 
              alt="User Profile"
            />
          ) : (
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white">
              {user?.firstName?.[0] || '?'}{/* Fallback to first letter of the user's first name */}
            </div>
          )
        ) : (
          <img 
            className="w-8 h-8 rounded-full opacity-60" 
            src="../../public/images/AIAvatar.png" 
            alt="AI Avatar"
          />
        )}
      </div>
      <div className={`group relative max-w-[75%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`rounded-2xl px-6 py-2 shadow-md ${
          isUser 
            ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl' 
            : 'border border-gray-600 p-6 rounded-3xl text-gray-100'
        }`}>
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {new Date().toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
