"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Mobil menü ikonları

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobil menü açık/kapalı state'i
  const { scrollY } = useScroll();

  // Sayfa kaydırıldıkça navbar'ın dikey padding'ini pürüzsüzce daraltıyoruz
  const paddingAnimation = useTransform(scrollY, [0, 50], ["24px", "14px"]);
  // Sayfa kaydırıldıkça arka planın opasitesini artırıyoruz
  const bgOpacityAnimation = useTransform(
    scrollY,
    [0, 50],
    ["rgba(0, 0, 0, 0)", "rgba(10, 10, 10, 0.75)"],
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pürüzsüz Kaydırma Fonksiyonu (ID'ye göre)
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  const scrollToSection = (id, isMobile = false) => {
    if (isMobile) {
      setIsOpen(false); // Önce mobil menüyü kapat

      // Menü kapanırken animasyonun bitmesini bekle, sonra kaydır
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150); // 150ms gecikme çakışmayı önler
    } else {
      // Masaüstü için normal akış
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Navigasyon link listesi (Kodu temiz tutmak ve DRY prensibi için)
  const navLinks = [
    { id: "özellikler", label: "Özellikler" },
    { id: "teknik-sunum", label: "Teknik Sunum" },
    { id: "mobile", label: "Mobile" },
    { id: "profiller", label: "Profiller" },
    { id: "sss", label: "SSS" },
  ];

  return (
    <motion.header
      style={{
        paddingTop: paddingAnimation,
        paddingBottom: paddingAnimation,
        backgroundColor: bgOpacityAnimation,
      }}
      className={`w-full fixed top-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled
          ? "backdrop-blur-md border-b border-gray-900/50 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "border-b border-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24">
        {/* LOGO ALANI - Üzerine gelince hafif parlar */}
        <motion.div
          className="cursor-pointer shrink-0 z-50"
          whileHover={{ opacity: 0.9, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsOpen(false); // Logo tıklanınca menüyü kapat
          }}
        >
          <img
            className="w-36 sm:w-44 md:w-52 h-auto"
            src="dostagider-logo.png"
            alt="Dosta Gider Logo"
          />
        </motion.div>

        {/* MASAÜSTÜ NAVİGASYON LİNKLERİ (md ve sonrasında görünür) */}
        <nav className="hidden md:block">
          <ul className="flex items-center text-gray-400 space-x-8 font-sans text-sm tracking-wide font-medium">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative cursor-pointer hover:text-white duration-300 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-orange-400 group-hover:w-full transition-all duration-300 ease-out" />
              </li>
            ))}
          </ul>
        </nav>

        {/* SAĞ ALAN: CTA Butonu & Hamburger İkonu */}
        <div className="flex items-center space-x-4 shrink-0 z-50">
          {/* CTA BUTONU (Çok küçük ekranlarda taşmayı önlemek için sm:block yapıldı) */}
          <div className="hidden sm:block">
            <motion.button
              className="w-40 md:w-48 h-10 rounded-full text-xs font-semibold tracking-wider uppercase text-gray-200 border border-gray-800 bg-gray-950/40 backdrop-blur-sm cursor-pointer relative overflow-hidden group transition-all duration-300"
              whileHover={{
                scale: 1.03,
                borderColor: "rgba(253, 186, 116, 0.4)",
                boxShadow: "0 0 20px rgba(253, 186, 116, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Buton Hover Parlama Efekti */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="relative z-10 group-hover:text-orange-300 duration-300">
                İnceleme Talep Et
              </span>
            </motion.button>
          </div>

          {/* MOBİL HAMBURGER BUTONU (Sadece md ekranlardan küçükse görünür) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer p-1"
          >
            {isOpen ? (
              <HiX size={24} className="text-orange-400" />
            ) : (
              <HiMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* MOBİL DRAWER MENÜ (AnimatePresence ile Yumuşak Açılış) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full bg-gray-950/95 backdrop-blur-lg border-b border-gray-900 absolute top-full left-0 md:hidden overflow-hidden shadow-2xl"
          >
            <ul className="flex flex-col px-8 pt-4 pb-8 space-y-4 text-gray-400 font-medium text-base">
              {/* {navLinks.map((link) => (
                <li 
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsOpen(false); // Linke basınca menüyü kapat
                  }} 
                  className="cursor-pointer hover:text-orange-300 duration-200 transition-colors py-1.5 border-b border-gray-900/40"
                >
                  {link.label}
                </li>
              ))} */}

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => scrollToSection(link.id, true)} // true parametresi mobil olduğunu belirtir
                  className="cursor-pointer hover:text-orange-300 duration-200 transition-colors py-1.5 border-b border-gray-900/40"
                >
                  {link.label}
                </li>
              ))}

              {/* Çok küçük ekranlarda (sm altı) üst barda gizlenen CTA butonu burada listeye eklenir */}
              <li className="block sm:hidden pt-2">
                <button className="w-full h-11 rounded-xl text-xs font-semibold bg-orange-400 text-white active:scale-98 transition-all">
                  İnceleme Talep Et
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
