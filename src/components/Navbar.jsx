import React, { useState } from 'react';
import { cn } from "../utils/cn";
import { Menu } from "./ui/navbar-menu";
import logo from "../../public/images/supermemoryailogo.svg";
import { Button } from "./ui/moving-border";
import { SignInButton } from '@clerk/clerk-react';
import Chat from '../pages/Chat';
export function Navbar() {
  return (
    <Navbar1 className="top-2" />
  );
}

function Navbar1({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={cn(`fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex flex-row rounded-full`, className)}>
    <Menu setActive={setActive} className="bg-white flex flex-row">
      <a href="#" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-7" />
        <p className='text-xl font-semibold'>Secondmemory.ai</p>
      </a>


<div className="flex flex-row py-2 px-3 gap-1 border border-[#666] rounded-full text-white">
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#D9D9D9">
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/>
        </svg>
      <SignInButton mode="modal" redirectUrl="/Chat" />
    </div>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </Menu>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black shadow-lg">
          <div className='flex flex-col space-y-4 px-8 py-6'>
            <a href="#" className='text-white'>Login</a>
          </div>
        </div>
      )}
    </div>
  );
}