import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 backdrop-blur-md flex items-center gap-3">
      <div className="flex items-center gap-3 rounded-full bg-gray-700/50 p-2 border border-gray-700/100 flex-grow">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter Prompt..."
          className="flex-1 bg-transparent px-4 py-2.5 focus:outline-none text-gray-100 placeholder-gray-500 text-sm"
        />
      </div>
      <button
        type="submit"
        className="p-2.5 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-full"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9">
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
        </svg>
      </button>
    </form>
  );
};

export default ChatInput;
