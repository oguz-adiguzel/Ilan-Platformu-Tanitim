"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const SSS_DATA = [
  {
    q: "Bireysel ve kurumsal hesaplar için ilan yayınlama limitleri nelerdir?",
    a: (
      <>
        <p className="text-sm text-gray-400 leading-relaxed">
          <strong className="text-orange-300/90 font-medium">Bireysel Kullanıcılar:</strong> Yayında aynı anda 1 adet aktif ilan bulundurma hakkına sahiptir. Bireysel satıcılar için süreç tamamen ücretsizdir.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2.5">
          <strong className="text-orange-300/90 font-medium">Kurumsal Galeriler (Mağazalar):</strong> Ticari operasyonlarını ve yüksek araç stoklarını yönetebilmeleri için bu limit 20 aktif ilana yükseltilmektedir.
        </p>
      </>
    )
  },
  {
    q: "Kurumsal galeri başvuruları sisteme nasıl dahil oluyor ve onaylanıyor?",
    a: (
      <>
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="text-white font-medium">Başvuru ve Bilgi Girişi:</span> Kurumsal hesap açmak isteyen galeriler; galeri adı, yetkili bilgileri, vergi numarası, vergi dairesi ve resmi adres verilerini girerek kayıt olurlar.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2.5">
          <span className="text-white font-medium">Admin Askıya Alma (Pending State):</span> Kayıt işlemi bittiği anda, backend mimarisi hesabı otomatik olarak 'pasif' duruma getirir ve kurumsal özellikleri kullanmasını kısıtlar. Başvuru, ana projeden tamamen bağımsız olarak çalışan izole Next.js Admin Paneli üzerindeki onay kuyruğuna düşer.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2.5">
          <span className="text-white font-medium">İnceleme Belgesi ve Aktivasyon:</span> Sistem yöneticileri (admin) tarafından yapılan resmi evrak ve vergi bilgileri incelemesinin ardından, onay verildiği anda hesap durumu dinamik olarak 'aktif' hale getirilir.
        </p>
      </>
    )
  },
  {
    q: "Kullanıcılar arasında anlık iletişim ve bildirim sistemi nasıl çalışıyor?",
    a: (
      <>
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="text-white font-medium">Anlık Mesajlaşma (Sohbet):</span> Bir ilan detay sayfasından başlatılan sohbetler, arka planda Socket.io mimarisiyle desteklenir. Alıcı ve satıcı çevrimiçi olduğunda, mesajlar sıfır gecikmeyle (instant) ekrana düşer. Aynı zamanda tüm konuşma geçmişi veri tabanında asenkron olarak saklanarak kalıcılığı sağlanır.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2.5">
          <span className="text-white font-medium">Sistem ve Admin Bildirimleri:</span> Kullanıcıların aldığı önemli aksiyonlar (örneğin bir galerinin kurumsal başvurusunun onaylanması) veya sistem yöneticilerinin admin panelinden gönderdiği toplu duyurular, anlık bildirim motoru tarafından tetiklenir.
        </p>
      </>
    )
  },
  {
    q: "Yönetim (Admin) paneli neden ana projeden ayrı bir Next.js uygulaması olarak geliştirildi?",
    a: (
      <p className="text-sm text-gray-400 leading-relaxed">
        Admin panelinde kullanılan devasa analitik grafik kütüphaneleri, veri yoğun tablolar ve yönetimsel bağımlılıklar, ana sitenin kod boyutunu (bundle size) şişirmez. Son kullanıcılar sadece kendi ihtiyaçları olan hafif ve hızlı kodu yüklerken, admin tarafı kendi içinde bağımsız ve performanslı çalışır.
      </p>
    )
  },
  {
    q: "Kritik API endpoint'lerinin güvenliği ve kullanıcı yetkilendirmesi (RBAC) nasıl yönetiliyor?",
    a: (
      <>
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="text-white font-medium">JWT ve Güvenli Kimlik Doğrulama:</span> Kullanıcı giriş yaptığında, sunucu tarafından imzalanmış güvenli bir JWT (JSON Web Token) üretilir. Bu token, XSS (Cross-Site Scripting) saldırılarına karşı tam koruma sağlamak amacıyla tarayıcı tarafında erişilemeyen, yalnızca sunucuyla iletişim kurabilen şifreli HTTP-Only Cookie katmanında saklanır.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mt-2.5">
          <span className="text-white font-medium">Rol Tabanlı Middleware Denetimi:</span> Backend tarafındaki kritik API endpoint'leri, özel geliştirilmiş yetkilendirme ara yazılımları (middleware) ile sarmalanmıştır. Bir istek geldiğinde, token çözülerek kullanıcının rolü (Bireysel, Kurumsal veya Admin) kontrol edilir. Eğer rol eşleşmiyorsa istek doğrudan 403 Forbidden hatasıyla engellenir.
        </p>
      </>
    )
  },
  {
    q: "Gerçek zamanlı mesajlaşma ve anlık sistem bildirimlerinde veri tutarlılığı nasıl sağlanıyor?",
    a: (
      <p className="text-sm text-gray-400 leading-relaxed">
        Bir kullanıcı mesaj gönderdiğinde veya sistem bir bildirim tetiklediğinde işlem iki koldan yürür. Veri, Socket.io üzerinden o an çevrimiçi olan istemcilere anlık olarak fırlatılırken (emit), eşzamanlı olarak arka planda MongoDB veri tabanına asenkron olarak yazılır. Böylece ağ kesintisi yaşansa bile verinin ana kaynağı güvenceye alınır.
      </p>
    )
  }
];

const SSS = () => {
  const baseId = React.useId();
  // Hangi panelin açık olduğunu tutan state (Açık olan panelin border'ı parlayacak)
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <div id="sss" className="w-full py-24 bg-black flex flex-col items-center relative overflow-hidden scroll-mt-24">
      {/* İnce Geometrik Arka Plan Detayı */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* ÜST ETİKET */}
      <motion.span 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-orange-400 px-4 py-1.5 text-xs font-mono tracking-wider border border-orange-500/30 bg-orange-500/5 rounded-full uppercase"
      >
        Dökümantasyon & Destek
      </motion.span>

      {/* ANA BAŞLIK */}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-white text-3xl md:text-4xl font-semibold mt-5 tracking-tight font-sans text-center px-4"
      >
        Merak Edilen <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-orange-400/80">Teknik Detaylar</span>
      </motion.h2>

      {/* ACCORDION CONTAINER */}
      <div className="w-full max-w-3xl mx-auto mt-14 px-6 flex flex-col space-y-4 z-10">
        {SSS_DATA.map((item, index) => {
          const panelName = `panel${index}`;
          const isOpen = expandedPanel === panelName;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Accordion
                expanded={isOpen}
                onChange={handleChange(panelName)}
                disableGutters
                elevation={0}
                sx={{
                  backgroundColor: isOpen ? "#0b0f19" : "#070a12",
                  border: "1px border",
                  borderColor: isOpen ? "rgba(251, 146, 60, 0.25)" : "rgba(255, 255, 255, 0.03)",
                  borderRadius: "16px !important",
                  overflow: "hidden",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:before": { display: "none" }, // MUI'ın varsayılan üst çizgisini kaldırır
                  boxShadow: isOpen ? "0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)" : "none"
                }}
              >
                {/* Soru Alanı */}
                <AccordionSummary
                  expandIcon={
                    <div className={`p-1.5 rounded-lg bg-gray-900/60 border border-gray-800 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-400 border-orange-500/20" : ""}`}>
                      <IoIosArrowDown size={16} color="currentColor" />
                    </div>
                  }
                  aria-controls={`${baseId}-${panelName}-content`}
                  id={`${baseId}-${panelName}-header`}
                  sx={{
                    padding: "18px 24px",
                    "& .MuiAccordionSummary-content": { margin: 0 },
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.01)" }
                  }}
                >
                  <Typography
                    component="span"
                    className={`text-sm md:text-base font-medium tracking-wide pr-4 transition-colors duration-300 ${isOpen ? "text-orange-300" : "text-gray-200"}`}
                  >
                    {item.q}
                  </Typography>
                </AccordionSummary>

                {/* Cevap Alanı */}
                <AccordionDetails
                  sx={{
                    padding: "0 24px 24px 24px",
                    backgroundColor: "transparent",
                    borderTop: "1px solid rgba(255,255,255,0.02)"
                  }}
                >
                  <div className="pt-4 border-t border-gray-900/50">
                    {item.a}
                  </div>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SSS;