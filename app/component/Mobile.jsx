"use client";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Mobile = () => {
  const phoneVariants = {
    hidden: { opacity: 0, x: -60, rotate: -3 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div id="mobile" className="w-full py-20 overflow-hidden">
      <motion.div
        className="w-11/12 lg:w-2/3 mx-auto rounded-3xl flex flex-col md:flex-start md:flex-row items-center md:items-start md:space-x-20 lg:space-x-32 py-12 px-6 md:px-20 lg:px-40 border border-gray-600 bg-gray-900 backdrop-blur-sm shadow-[0_0_50px_rgba(253,186,116,0.02)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={phoneVariants}
          className="w-48 lg:w-52 shrink-0 select-none mb-10 md:mb-0"
        >
          <img
            className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
            src="mobile.png"
            alt="Mobile Responsive"
          />
        </motion.div>

        <motion.div
          variants={contentVariants}
          className="mt-2 flex flex-col items-start w-full"
        >
          <motion.p
            variants={itemVariants}
            className="px-5 py-1 text-xs border border-orange-300 text-orange-300 rounded-full select-none font-medium"
          >
            RESPONSİVE TASARIM
          </motion.p>

          <motion.h3
            variants={itemVariants}
            className="text-3xl text-white font-semibold mt-6 tracking-wide leading-tight"
          >
            Uygulama Kalitesinde <br />
            <span className="text-orange-300">Pürüzsüz Mobil Deneyim</span>
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm mt-4 leading-relaxed font-sans font-light"
          >
            Cihazınıza hiçbir şey indirmenize gerek yok. İleri düzey responsive
            mimarimiz ve PWA altyapımız sayesinde, platforma mobilden
            girdiğinizde tıpkı bir mobil uygulama hızında, ekran boyutunuza tam
            optimize edilmiş pürüzsüz bir deneyim yaşarsınız.
          </motion.p>

          <div className="w-full mt-6 space-y-4">
            {/* Madde 1 */}
            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 group"
            >
              <div className="w-6 h-6 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 group-hover:border-orange-400 duration-300">
                <FaCheck
                  className="text-orange-400 group-hover:text-black duration-300"
                  size={10}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm group-hover:text-orange-300 duration-300">
                  Hafif ve Hızlı
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Sifir indirme boyutu, anında erişim.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 group"
            >
              <div className="w-6 h-6 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 group-hover:border-orange-400 duration-300">
                <FaCheck
                  className="text-orange-400 group-hover:text-black duration-300"
                  size={10}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm group-hover:text-orange-300 duration-300">
                  Dokunmatik Optimizasyon
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Mobil cihazlar için özel tasarlanmış ilan sihirbazı ve
                  filtreleme paneli.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start space-x-4 group"
            >
              <div className="w-6 h-6 rounded-full bg-orange-400/10 border border-orange-400/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-orange-400 group-hover:border-orange-400 duration-300">
                <FaCheck
                  className="text-orange-400 group-hover:text-black duration-300"
                  size={10}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-semibold text-sm group-hover:text-orange-300 duration-300">
                  Ana Ekrana Ekleme
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Tek tıkla web sitesini telefonunuza bir uygulama gibi
                  konumlandırma kolaylığı.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mobile;
