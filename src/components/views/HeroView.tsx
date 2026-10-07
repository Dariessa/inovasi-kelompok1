import React from 'react';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface HeroViewProps {
  onStart: () => void;
}

export const HeroView: React.FC<HeroViewProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-10 overflow-hidden">
      
      {/* Decorative Hand-drawn Doodles in Corners */}
      <div className="absolute top-6 left-6 text-2xl sm:text-3xl text-[#2B79A6]/40 select-none pointer-events-none font-doodle rotate-[-12deg]">
        🌊 ✧ ˚
      </div>
      <div className="absolute top-10 right-10 text-xl sm:text-2xl text-[#38BDF8]/60 select-none pointer-events-none font-doodle rotate-[15deg]">
        ✨ ✦ ⋆
      </div>
      <div className="absolute bottom-12 left-10 text-xl sm:text-2xl text-[#2B79A6]/40 select-none pointer-events-none font-doodle rotate-[8deg]">
        🏮 ༚ ✧
      </div>
      <div className="absolute bottom-8 right-12 text-2xl sm:text-3xl text-[#0F304E]/30 select-none pointer-events-none font-doodle rotate-[-6deg]">
        🌱 ⋆ ˚
      </div>

      {/* Main Scrapbook Cover Canvas */}
      <div className="max-w-5xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        
        {/* Left Column: Scrapbook Headline & Sticky Note Quote */}
        <div className="lg:col-span-7 text-center lg:text-left">
          
          {/* Badge doodle di atas */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border-2 border-[#0F304E]/20 shadow-[2px_3px_0px_rgba(15,48,78,0.15)] mb-5 -rotate-1 relative">
            {/* Tiny washi tape strip at top */}
            <div className="washi-tape washi-tape-sky w-14 -top-2 left-6"></div>
            <span className="text-sm font-handwriting font-bold text-[#0F304E]">
              🌊 PAI • AKIDAH AKHLAK
            </span>
            <span className="text-[#38BDF8] font-bold">|</span>
            <span className="text-xs font-mono font-bold text-[#2B79A6]">XI / FASE F</span>
          </div>

          {/* Judul Utama Teks Besar & Estetik */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0F304E] tracking-tight leading-tight mb-5">
            MENGUATKAN IMAN <br />
            <span className="text-[#2B79A6] relative inline-block">
              DENGAN MENJAGA KEIKHLASAN
              {/* Hand-drawn underline doodle */}
              <svg className="w-full h-3 -mt-1 text-[#38BDF8]" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M0,7 Q25,12 50,7 T100,7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Kartu Kutipan Hikmah bergaya Sticky Note / Stiker */}
          <div className="relative inline-block my-3 max-w-lg text-left">
            {/* Washi tape on sticky note */}
            <div className="washi-tape washi-tape-sea w-24 -top-3 left-1/2 -translate-x-1/2"></div>
            
            <div className="bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border-2 border-[#2B79A6]/30 shadow-scrapbook rotate-[-1.5deg] hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2 mb-1.5 text-xs font-handwriting font-bold text-[#2B79A6]">
                <i className="fa-solid fa-thumbtack text-[#38BDF8] -rotate-45"></i>
                <span>Catatan Hikmah Hari Ini:</span>
              </div>
              <p className="font-doodle text-2xl sm:text-3xl text-[#0F304E] leading-snug font-bold">
                “Berbuat baik bukan untuk dilihat, tetapi karena Allah.”
              </p>
              <div className="mt-2 text-[11px] font-sans font-semibold text-[#0F304E]/60 flex items-center justify-between">
                <span>— Hakikat Ikhlas Batiniah</span>
                <span className="font-doodle text-sm text-[#2B79A6]">✧ lillahi ta'ala</span>
              </div>
            </div>
          </div>

          {/* Tombol Utama Besar bergaya Tombol Scrapbook */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 mb-6">
            <button
              onClick={() => {
                sound.playCorrect();
                onStart();
              }}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-base sm:text-lg border-2 border-[#0F304E] shadow-scrapbook-btn active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-3 relative group"
            >
              <span>🚀 MULAI PEMBELAJARAN</span>
              <i className="fa-solid fa-arrow-right text-sm text-[#38BDF8] group-hover:translate-x-1 transition-transform"></i>
            </button>

            <span className="text-xs text-[#0F304E]/75 font-handwriting font-bold flex items-center gap-1.5">
              <span>📌</span>
              <span>Siap untuk Smartboard & Proyektor</span>
            </span>
          </div>

          {/* Subtitle dengan Doodle Daun & Lentera */}
          <div className="flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm font-handwriting font-bold text-[#2B79A6]">
            <span>🌊 Ikhlas</span>
            <span aria-hidden="true" className="text-[#38BDF8]">✦</span>
            <span>Malu (Haya')</span>
            <span aria-hidden="true" className="text-[#38BDF8]">✦</span>
            <span>Zuhud</span>
          </div>

        </div>

        {/* Right Column: Photo Scrapbook Collage with Washi Tape */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative max-w-sm sm:max-w-md w-full">
            
            {/* Washi tape stickers at top and bottom-right corners */}
            <div className="washi-tape washi-tape-sky w-28 -top-3 left-10"></div>
            <div className="washi-tape washi-tape-sea w-20 -bottom-2 right-8 rotate-[5deg]"></div>

            {/* Scrapbook Polaroids / Photo Frame */}
            <div className="p-3 bg-white rounded-3xl border-2 border-[#0F304E]/20 shadow-scrapbook rotate-[1.5deg] hover:rotate-0 transition-transform">
              <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10">
                <img
                  src={ILLUSTRATIONS.hero}
                  alt="Ilustrasi Estetik Pelajar SMA Muslim Ikhlas Berbuat Kebaikan"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Photo Caption Label in handwriting font */}
              <div className="pt-3 pb-1 px-2 flex items-center justify-between">
                <div>
                  <span className="font-handwriting font-bold text-sm text-[#0F304E] block">
                    Remaja Berakhlak Mulia ✨
                  </span>
                  <span className="text-[11px] font-sans text-[#2B79A6]">
                    Kebaikan sejati yang mekar dalam sunyi
                  </span>
                </div>
                <span className="font-doodle text-lg text-[#2B79A6] font-bold">
                  #Ikhlas
                </span>
              </div>
            </div>

            {/* Small Sticky Badge on Photo Frame */}
            <div className="absolute -bottom-4 -left-4 bg-[#BAE6FD] px-3 py-1.5 rounded-xl border border-[#0F304E]/20 shadow-xs -rotate-6 font-handwriting font-bold text-xs text-[#0F304E]">
              🌊 Fase F Kelas XI
            </div>

          </div>
        </div>

      </div>

      {/* Classroom Smartboard footer note */}
      <div className="mt-8 text-center text-xs text-[#0F304E]/60 font-sans">
        Website Pembelajaran Interaktif PAI · Islamic Scrapbook Sea Blue Edition
      </div>

    </div>
  );
};
