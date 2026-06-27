"use client";
import React from "react";
import { FaCheck, FaGithub } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mockupVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <div className="w-full pt-20 bg-gray-950 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_0),linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:40px_40px] pb-20 overflow-hidden">
      <motion.div
        className="container flex flex-col items-center justify-start pt-20 mx-auto drop-shadow-2xl drop-shadow-orange-300"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-80 flex items-center justify-center py-1 text-xs border rounded-full text-orange-300 shadow-2xl animate-bounce"
          variants={fadeInUpVariants}
        >
          <p>Next.js + Node.js + Redis Gücüyle Optimize Edildi</p>
        </motion.div>

        <div className="mt-10 text-center select-none">
          <motion.h1
            className="text-6xl lg:text-7xl text-white font-semibold font-serif text-shadow-lg text-shadow-black leading-tight"
            variants={titleVariants}
          >
            Otomobil ticaretinde
          </motion.h1>
          <motion.h2
            className="text-6xl lg:text-7xl text-white font-semibold font-serif text-shadow-lg text-shadow-black mt-2"
            variants={titleVariants}
          >
            <span className="text-orange-300 text-shadow-sm text-shadow-white animate-pulse">
              yeni nesil
            </span>{" "}
            ilan deneyimi !
          </motion.h2>
        </div>

        <motion.div className="text-center mt-6" variants={fadeInUpVariants}>
          <p className="text-gray-400 text-shadow-sm text-shadow-orange-300">
            Gelişmiş filtreleme motoru dinamik kurumsal/bireysel rozet
            yönetimi...
          </p>
          <p className="text-gray-400 text-shadow-sm text-shadow-orange-300">
            Arka planda Node.js ve Redis ile işlenen yüksek frekanslı
          </p>
          <p className="text-gray-400 text-shadow-sm text-shadow-orange-300">
            veri mimarisini canlı ekran görüntüleriyle keşfedin
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-9 mt-10 w-full sm:w-auto px-6"
          variants={fadeInUpVariants}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById("özellikler");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="w-full sm:w-64 h-12 bg-orange-400 rounded-xl font-semibold text-sm tracking-wide text-white cursor-pointer shadow-lg shadow-orange-500/10 hover:bg-orange-500 active:scale-98 transition-all duration-300 ease-out"
            whileHover={{ y: -2 }}
          >
            Proje Özelliklerini İncele
          </motion.button>

          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-56 h-12 bg-gray-900 border border-gray-800 rounded-xl font-medium text-sm tracking-wide text-gray-300 flex items-center justify-center space-x-2.5 cursor-pointer hover:border-gray-700 hover:text-white hover:bg-gray-800/30 active:scale-98 transition-all duration-300 ease-out"
            whileHover={{ y: -2 }}
          >
            <FaGithub className="text-base" />
            <span>GitHub İncele</span>
          </motion.a>
        </motion.div>

        <motion.div
          className="flex items-center space-x-4 mt-8"
          variants={fadeInUpVariants}
        >
          <div className="flex items-center space-x-1 text-gray-400">
            <FaCheck size={14} color="orange" />
            <p className="text-xs">Next.js SSR & SEO Uyumlu</p>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <FaCheck size={14} color="orange" />
            <p className="text-xs">NoSQL Esnek Veri Modeli</p>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <FaCheck size={14} color="orange" />
            <p className="text-xs">Gelişmiş Dashboard Yönetimi</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full lg:w-2/3 mx-auto mt-12 lg:mt-28 border border-gray-500 rounded-2xl shadow-2xl shadow-orange-300"
        initial="hidden"
        animate="visible"
        variants={mockupVariants}
      >
        <div className="w-full h-14 bg-gray-800 rounded-t-2xl flex items-center space-x-3 px-5">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <div className="w-full h-10 flex items-center space-x-1.5 bg-gray-950 rounded-2xl px-5">
            <IoIosLock size={16} color="orange" />
            <p className="text-gray-400 text-sm">http://localhost:3000/</p>
          </div>
        </div>
        <div className="w-full h-64 lg:h-[640px] rounded-b-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover object-top filter brightness-[0.98]"
            src="home-page.png"
            alt="Home Page Blueprint"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
