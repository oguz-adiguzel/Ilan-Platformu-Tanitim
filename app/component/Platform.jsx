"use client";
import React, { useEffect, useRef } from "react";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiAxios } from "react-icons/si";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const Counter = ({ value, direction = "up", suffix = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? 100 : 0);
  const springValue = useSpring(motionValue, {
    stiffness: 45,
    damping: 15,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          Intl.NumberFormat("tr-TR", {
            maximumFractionDigits: 0,
          }).format(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} />;
};

const Platform = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
      },
    },
  };

  return (
    <div className="w-full py-20 overflow-hidden bg-gray-950/10">
      <div className="container mx-auto flex flex-col items-center">
        <motion.div
          className="flex flex-col items-center text-center px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="px-6 py-1 text-xs text-orange-300 border border-orange-300 rounded-full select-none font-medium">
            Proje Metrikleri & Veri Yapısı
          </p>
          <h2 className="text-4xl text-white font-semibold mt-7 tracking-wide">
            Platform Mimarisi
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 lg:px-24 mt-14 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={gridVariants}
        >
          <motion.div
            className="border border-gray-800/80 rounded-2xl bg-gray-900/30 backdrop-blur-sm p-6 relative flex flex-col justify-between group hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(253,186,116,0.03)] duration-300 transition-all"
            variants={cardVariants}
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-400/30 duration-300">
                  <SiAxios
                    size={28}
                    className="text-white group-hover:text-orange-300 duration-300"
                  />
                </div>

                <div className="text-3xl font-mono font-extrabold text-orange-300 tracking-tight">
                  +<Counter value={125} />
                </div>
              </div>

              <h3 className="text-white font-semibold mt-5 text-base group-hover:text-orange-300 duration-300 transition-colors">
                API Endpoint ve Rota Çeşitliliği
              </h3>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed font-sans font-light">
                Platform genelinde bireysel kullanıcı, kurumsal galeri ve izole
                Next.js admin paneli için kurgulanmış toplam aktif API endpoint
                sayısı. Güvenli JWT yetkilendirmesi ve rol tabanlı erişim
                kontrolüyle (RBAC) korunan kararlı backend rotaları.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-800/80 rounded-2xl bg-gray-900/30 backdrop-blur-sm p-6 relative flex flex-col justify-between group hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(253,186,116,0.03)] duration-300 transition-all"
            variants={cardVariants}
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-400/30 duration-300">
                  <DiMongodb
                    size={28}
                    className="text-white group-hover:text-emerald-400 duration-300"
                  />
                </div>
                <div className="text-3xl font-mono font-extrabold text-orange-300 tracking-tight">
                  <Counter value={21} />{" "}
                  <span className="text-sm text-gray-500 font-sans font-normal">
                    Koleksiyon
                  </span>
                </div>
              </div>

              <h3 className="text-white font-semibold mt-5 text-base group-hover:text-orange-300 duration-300 transition-colors">
                Veri Modeli ve İlişkisel Derinlik
              </h3>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed font-sans font-light">
                Kullanıcılar, galeriler, ekip üyeleri, ilanlar, loglar ve
                hiyerarşik araç opsiyon ağacı (parent-child) gibi birbiriyle
                entegre çalışan çekirdek veri modeli (Schema). MongoDB üzerinde
                optimize edilmiş ilişkisel döküman yapısı.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border border-gray-800/80 rounded-2xl bg-gray-900/30 backdrop-blur-sm p-6 relative flex flex-col justify-between group hover:border-orange-400/40 hover:shadow-[0_0_30px_rgba(253,186,116,0.03)] duration-300 transition-all"
            variants={cardVariants}
          >
            <div>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-400/30 duration-300">
                  <DiRedis
                    size={28}
                    className="text-white group-hover:text-rose-500 duration-300"
                  />
                </div>

                <div className="relative flex items-center justify-center w-14 h-14">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      className="stroke-gray-800"
                      strokeWidth="3"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="28"
                      cy="28"
                      r="24"
                      className="stroke-orange-400"
                      strokeWidth="3"
                      fill="transparent"
                      initial={{
                        strokeDasharray: "150 150",
                        strokeDashoffset: 150,
                      }}
                      whileInView={{ strokeDashoffset: 30 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="absolute text-xs font-mono font-bold text-orange-300">
                    %<Counter value={80} />
                  </div>
                </div>
              </div>

              <h3 className="text-white font-semibold mt-5 text-base group-hover:text-orange-300 duration-300 transition-colors">
                Optimizasyon ve Canlılık Katmanı
              </h3>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed font-sans font-light">
                Redis in-memory caching katmanı sayesinde ana sayfa ve katalog
                sorgularında veri tabanına binen yükün azaltılma oranı.
                Socket.io mimarisiyle desteklenen anlık bildirim ve mesajlaşma
                süreçlerinde sıfır gecikmeli veri akışı.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Platform;
