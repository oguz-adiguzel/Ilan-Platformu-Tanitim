'use client'
import React, { useState } from "react";
import { IoIosLock, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Images = () => {
  // Gösterilecek 4 adet ekran görüntüsünün verisi
  const screens = [
    {
      id: 1,
      title: "Anasayfa Vitrini",
      url: "http://localhost:3000/",
      src: "home-page.png"
    },
    {
      id: 2,
      title: "Bireysel & Kurumsal Galeri Dashboard",
      url: "http://localhost:3000/user/dashboard",
      src: "dashboard.png" // Kendi görsel isminle değiştirebilirsin
    },
    {
      id: 3,
      title: "İlan Detay",
      url: "http://localhost:3000/ilan/ilanNo",
      src: "ilan-detay.png" 
    },
    {
      id: 4,
      title: "İlan Listesi",
      url: "http://localhost:3000/kategori",
      src: "ilan-list.png"
    },
    {
      id: 5,
      title: "Galeri Mini ERP",
      url: "http://localhost:3000/user/galeri-yonetimi",
      src: "erp.png"
    },
    {
      id: 6,
      title: "Favori İlan Listesi",
      url: "http://localhost:3000/user/my-favorite",
      src: "fav-list.png"
    },
    {
      id: 7,
      title: "Vitrin İlanları",
      url: "http://localhost:3000/kategori?vitrin=true&page=1",
      src: "vitrin.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Slayt yönünü kontrol etmek için (Sağa basınca sağdan, sola basınca soldan gelsin diye)
  const [direction, setDirection] = useState(0); 

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screens.length) % screens.length);
  };

  // Yumuşak sayfa geçiş animasyon varyantları
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" }
    })
  };

  return (
    <div className="w-full py-20 bg-gray-900 relative flex flex-col items-center">
    <p className="px-5 py-1 text-xs text-orange-300 border border-orange-300 rounded-full">Ekran Görüntüleri</p>
      
      {/* Galeri Alanı Başlığı */}
      <div className="text-center mb-10 select-none mt-7">
        <h3 className="text-4xl md:text-5xl text-white font-semibold  tracking-tight text-shadow-md text-shadow-orange-300">
          Platform Mimarisini <span className="text-orange-300">Canlı</span> Keşfedin
        </h3>
        <p className="text-gray-300 text-xs font-mono mt-2 uppercase tracking-widest">
          Şu an incelenen: {screens[currentIndex].title}
        </p>
      </div>

      {/* Tarayıcı Ekran Görüntüsü Mockup Katmanı (Orijinal w-2/3 Genişlikte) */}
      <div className="w-full lg:w-2/3 mx-auto border border-gray-500 rounded-2xl shadow-2xl shadow-orange-300/20 bg-gray-950 relative group">
        
        {/* Mac Style Üst Bar */}
        <div className="w-full h-14 bg-gray-800 rounded-t-2xl flex items-center justify-between px-5 border-b border-gray-900">
          
          {/* Sol Pencere Butonları */}
          <div className="flex items-center space-x-2 w-1/4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          {/* Orta Adres Çubuğu (URL dinamik değişiyor) */}
          <div className="w-2/4 h-10 flex items-center justify-center space-x-1.5 bg-gray-950 rounded-2xl px-5 border border-gray-850">
            <IoIosLock size={16} color="orange" />
            <p className="text-gray-400 text-xs lg:text-sm font-mono select-none truncate">
              {screens[currentIndex].url}
            </p>
          </div>

          {/* Sağ Alan: Navigasyon Tuşları Tarayıcının İçine Entegre */}
          <div className="flex items-center justify-end space-x-3 w-1/4">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 rounded-lg bg-gray-900/60 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95 border border-gray-750"
              title="Önceki Ekran"
            >
              <IoIosArrowBack size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 rounded-lg bg-gray-900/60 hover:bg-gray-700 text-gray-400 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-95 border border-gray-750"
              title="Sonraki Ekran"
            >
              <IoIosArrowForward size={18} />
            </button>
          </div>
        </div>

        {/* Görsel Alanı (AnimatePresence ile Pürüzsüz Geçişli) */}
        <div className="w-full h-56 lg:h-[685px] rounded-b-2xl overflow-hidden bg-gray-950 relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full absolute inset-0"
            >
              <img
                className="w-full h-full object-fill object-top filter brightness-[0.98]"
                src={screens[currentIndex].src}
                alt={screens[currentIndex].title}
              />
            </motion.div>
          </AnimatePresence>

          {/* Alt Kısım İndikatör Noktaları (Hangi ekranda olduğunu gösteren minik barlar) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-800">
            {screens.map((screen, index) => (
              <div
                key={screen.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? "w-6 bg-orange-400" : "w-1.5 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Images;