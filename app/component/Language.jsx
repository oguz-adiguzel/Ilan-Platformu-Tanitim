"use client";
import React from "react";
import { DiMongodb, DiRedis } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiAxios,
  SiCloudinary,
  SiJsonwebtokens,
  SiSocketdotio,
  SiSwagger,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const Language = () => {
  const technologies = [
    { icon: <FaReact size={30} className="text-cyan-400" />, name: "React" },
    {
      icon: <RiNextjsLine size={30} className="text-white" />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs size={30} className="text-green-500" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={30} className="text-gray-400" />,
      name: "Express.js",
    },
    {
      icon: <DiMongodb size={30} className="text-green-600" />,
      name: "MongoDB",
    },
    {
      icon: <SiJsonwebtokens size={30} className="text-pink-500" />,
      name: "JWT",
    },
    {
      icon: <SiCloudinary size={30} className="text-blue-400" />,
      name: "Cloudinary",
    },
    { icon: <DiRedis size={30} className="text-red-500" />, name: "Redis" },
    {
      icon: <SiSocketdotio size={30} className="text-white" />,
      name: "Socket.io",
    },
    {
      icon: <SiSwagger size={30} className="text-green-400" />,
      name: "Swagger",
    },
    { icon: <SiAxios size={30} className="text-purple-500" />, name: "Axios" },
  ];

  return (
    <div className="w-full py-16 bg-gray-900 overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      <div className="w-full flex whitespace-nowrap select-none">
        <motion.div
          className="flex items-center space-x-8 pr-8 text-white"
          animate={{ x: [0, "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* 1. Set Logolar */}
          {technologies.map((tech, index) => (
            <div
              key={`set1-${index}`}
              className="flex items-center space-x-3 px-8 py-3 bg-black/60 border border-gray-800 rounded-2xl shrink-0"
            >
              {tech.icon}
              <span className="font-medium text-sm tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex items-center space-x-8 pr-8 text-white"
          animate={{ x: [0, "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {technologies.map((tech, index) => (
            <div
              key={`set2-${index}`}
              className="flex items-center space-x-3 px-8 py-3 bg-black/60 border border-gray-800 rounded-2xl shrink-0"
            >
              {tech.icon}
              <span className="font-medium text-sm tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Language;
