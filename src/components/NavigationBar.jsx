import React from 'react';
import logo from "../../public/images/supermemoryailogo.svg";
import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';

const NavigationBar = () => {
    const { user } = useClerk();
  return (
    <div className='hidden lg:block'>
      <nav className="bg-[#1F2C74] backdrop-blur-sm px-4 py-3 w-1/2 max-w-4xl mx-auto  flex items-center justify-between shadow-sm rounded-full border-gray-700 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-5" />
                   <h1 className="text-base font text-transparent" style={{
                     background: 'linear-gradient(154deg, rgb(221, 230, 232), rgb(221, 230, 232), rgb(51, 152, 219))',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                   }}>
                     Welcome back, {user.firstName}
                   </h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* <button className="text-gray-400 hover:text-gray-300 transition-colors">
            <span className="text-sm">Add member</span>
          </button> */}
          {/* <button className="flex items-center text-gray-400 hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
            <span className="ml-1">Share Session</span>
          </button> */}
          <UserButton />
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
