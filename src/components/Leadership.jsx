import React from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import chancellor from "../assets/chancellor.png";
import vp from "../assets/vp.png";
import avp from "../assets/avp.png";
import vc from "../assets/vc.png";
import registrar from "../assets/registrar.png";
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
// import { Highlight } from "../ui/hero-highlight";

export function Leadership() {
  const LeadershipItems = [
    {
      title: "Dr. G. Viswanathan",
      description: "Chancellor",
      img: chancellor,
    },
    {
      title: "Mr. Sankar Viswanathan",
      description: "Vice President",
      img: vp,
    },
    {
      title: "Ms. Kadhambari S Viswanathan",
      description: "Assistant Vice President",
      img: avp,
    },
    {
      title: "Dr. Senthil Kumar Arumugam",
      description: "Vice Chancellor",
      img: vc,
    },
    {
      title: "Dr. Debashis Adhikari",
      description: "Registrar",
      img: registrar,
    },
  ];
  return (
    <>
    <LampContainer>
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl text-white"
    >
      Meet Our Leadership
      {/* <div className="mt-[]">
        <HoverEffect items={LeadershipItems} />
      </div> */}
    </motion.h1>
    
  </LampContainer>
  <motion.div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row flex-wrap items-center justify-center bg-slate-950 rounded-2xl">
      {/* <Highlight className="text-yellow-300 text-6xl md:text-8xl">
        LEADERSHIP
      </Highlight> */}
      <HoverEffect items={LeadershipItems} />
      </motion.div>
</>
  );
}
