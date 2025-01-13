"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./moving-border";

export const Menu = ({ setActive, children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarWidth, setNavbarWidth] = useState("w-full");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const show = scrollY > 50;
      setIsScrolled(show);

      // Calculate the width based on scroll position
      const newWidth = Math.max(768, 1280 - scrollY * 2); // Adjust the values as needed
      setNavbarWidth(`max-w-${newWidth}px`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      onMouseLeave={() => setActive(null)}
      className={`relative rounded-full backdrop-blur-md shadow-sm  border-white/[0.2] shadow-input flex justify-between space-x-4 px-8 py-6 
        ${isScrolled ? "bg-opacity-40 rounded-full backdrop-blur-md shadow-sm transition-all ease-in-out" : ""}
        ${navbarWidth}
      `}
    >
      {children}
    </Button>
  );
};