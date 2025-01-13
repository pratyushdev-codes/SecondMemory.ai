import React, { useState } from 'react';
import { useClerk } from '@clerk/clerk-react';
import ChatMessageMain from './ChatMessageMain';
import { useChatHandler } from '../hooks/useChatHandler';

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out" />
      <div 
        className="relative bg-black rounded-lg p-6 max-w-lg w-full mx-4 transform transition-all duration-300 ease-in-out scale-100 opacity-100 border border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

// Main ChatUI Component
const ChatUI = () => {
  const { handleNewChat } = useChatHandler();
  const { user } = useClerk();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: 'ai',
      timestamp: new Date(Date.now() - 3600000)
    },
    {
      id: 2,
      text: "I need help understanding my project documentation.",
      sender: 'user',
      timestamp: new Date(Date.now() - 1800000)
    },
    {
      id: 3,
      text: "I'll analyze your documentation and help you understand it better. What specific aspects would you like to explore?",
      sender: 'ai',
      timestamp: new Date(Date.now() - 1200000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      }]);
      setNewMessage('');
      handleNewChat();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessageMain 
            key={message.id} 
            message={message} 
            userImage={user?.imageUrl}
          />
        ))}
      </div>

      <div className="p-4">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask your query..."
            className="flex-1 bg-transparent text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-500"
          />
      
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="p-2 text-blue-500 bg-blue-500 rounded-full bg-blue-500 hover:text-blue-400 transition-colors"
          >
            <div className=" rounded-full p-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#FFFFFF">
                <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/>
              </svg>
            </div>
          </button>

          <button
            type="submit"
            className="p-2 text-blue-500 hover:text-blue-400 transition-colors"
          >
            <div className="bg-gray-300 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#1A3A9D">
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
              </svg>
            </div>
          </button>
        </form>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-gray-200 transition-delay-1500 bg-black">
          <h2 className="text-xl font-normal mb-4">Speak Now</h2>
          <div className="space-y-4">
            <img src="./images/AI Voice.gif" alt="Voice Assistant" className="w-full rounded-lg h-[180px]" />
            <button
              className="w-full bg-none hover:bg-gray-700 border border-gray-500 text-white font-medium py-2 px-4 rounded-2xl transition-colors "
              onClick={() => {
                // Add voice recording logic here
                console.log('Start recording');
              }}
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChatUI;