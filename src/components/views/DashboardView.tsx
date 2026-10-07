import React from 'react';
import { ViewType } from '../HeaderBar';
import { sound } from '../../utils/audio';

interface DashboardViewProps {
  onSelectMenu: (view: ViewType) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onSelectMenu }) => {
  const menuCards = [
    {
      view: 'pemanasan' as ViewType,
      iconEmoji: '🧊',
      sticker: '🎬',
      tag: 'Apersepsi',
      tagColor: 'bg-sky-100 text-sky-800 border-sky-300',
      rotation: 'rotate-[-1.5deg]',
      tapeColor: 'washi-tape-sky',
      title: 'PEMANASAN',
      desc: 'Video inspiratif layar lebar & pertanyaan pemantik awal pembelajaran'
    },
    {
      view: 'icebreaking' as ViewType,
      iconEmoji: '⚡',
      sticker: '🎉',
      tag: 'Energizer Ceria',
      tagColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      rotation: 'rotate-[1.2deg]',
      tapeColor: 'washi-tape-sea',
      title: 'ICE BREAKING',
      desc: 'Video senam konsentrasi & game seru penyegar suasana kelas'
    },
    {
      view: 'materi' as ViewType,
      iconEmoji: '📚',
      sticker: '📖',
      tag: 'Konsep & Dalil',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
      rotation: 'rotate-[1deg]',
      tapeColor: 'washi-tape-sky',
      title: 'MATERI',
      desc: 'Pelajari pengertian al-Jurjani, QS. Az-Zumar: 2, 3 tingkatan & ciri Dzun Nun'
    },
    {
      view: 'game' as ViewType,
      iconEmoji: '🎮',
      sticker: '🏆',
      tag: 'Turnamen TGT',
      tagColor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      rotation: 'rotate-[-0.8deg]',
      tapeColor: 'washi-tape',
      title: 'ARENA TGT (GAME)',
      desc: 'Turnamen kelompok ceria untuk 4 tim kelas berhadiah bintang ⭐'
    },
    {
      view: 'kuis' as ViewType,
      iconEmoji: '📝',
      sticker: '🎯',
      tag: 'Uji Pemahaman',
      tagColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      rotation: 'rotate-[1.2deg]',
      tapeColor: 'washi-tape-sky',
      title: 'KUIS',
      desc: 'Uji pemahaman mandiri secara bertahap dan raih skor tertinggi'
    },
    {
      view: 'refleksi' as ViewType,
      iconEmoji: '💬',
      sticker: '💭',
      tag: 'Muhasabah',
      tagColor: 'bg-teal-100 text-teal-900 border-teal-300',
      rotation: 'rotate-[-1.2deg]',
      tapeColor: 'washi-tape-sea',
      title: 'REFLEKSI',
      desc: 'Muhasabah batin: Periksa niat dan renungkan makna amal tulus'
    },
    {
      view: 'tugas' as ViewType,
      iconEmoji: '📋',
      sticker: '🌱',
      tag: 'Aksi Nyata',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-300',
      rotation: 'rotate-[0.8deg]',
      tapeColor: 'washi-tape',
      title: 'TUGAS',
      desc: 'Latihan aksi nyata perilaku ikhlas di rumah dan lingkungan sekolah'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
      
      {/* Welcome Banner on Scrapbook Dashboard */}
      <div className="text-center mb-10 sm:mb-12 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border-2 border-[#0F304E]/15 text-[#0F304E] text-xs font-handwriting font-bold mb-3 shadow-[2px_2px_0px_rgba(15,48,78,0.1)]">
          <span>🌊 Papan Pembelajaran Interaktif</span>
          <span className="text-[#38BDF8]">✦</span>
          <span>Fase F Kelas XI</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0F304E] tracking-tight">
          Hari ini kita belajar tentang{' '}
          <span className="text-[#2B79A6] relative inline-block font-heading">
            KEIKHLASAN
            <svg className="w-full h-2.5 -mt-0.5 text-[#38BDF8]" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
              <path d="M0,8 Q30,12 60,6 T100,8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h2>
        
        <p className="text-xs sm:text-sm font-handwriting font-semibold text-[#0F304E]/80 max-w-xl mx-auto mt-2">
          Pilih salah satu kartu scrapbook di bawah ini untuk memulai belajar bersama di Smartboard:
        </p>
      </div>

      {/* Grid 6 Kartu Utama mirip layout scrapbook dengan rotasi acak tipis */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {menuCards.map((card) => (
          <div key={card.view} className="relative group">
            
            {/* Washi tape on top edge of card */}
            <div className={`washi-tape ${card.tapeColor} w-24 -top-2.5 left-1/2 -translate-x-1/2`}></div>

            {/* Scrapbook card button with playful angle */}
            <button
              onClick={() => {
                sound.playTap();
                onSelectMenu(card.view);
              }}
              className={`w-full bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#0F304E]/15 hover:border-[#2B79A6] shadow-scrapbook hover:shadow-scrapbook-lg ${card.rotation} hover:rotate-0 hover:-translate-y-1 transition-all duration-200 text-left cursor-pointer flex flex-col justify-between min-h-[210px] relative overflow-hidden`}
            >
              {/* Corner decorative stamp */}
              <div className="absolute top-2 right-2 text-2xl opacity-15 group-hover:opacity-30 transition-opacity font-doodle">
                {card.sticker}
              </div>

              {/* Top row with big emoji & tag badge */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="text-3xl sm:text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                    {card.iconEmoji}
                  </span>
                </div>
                
                <span className={`text-[11px] font-handwriting font-bold px-2.5 py-0.5 rounded-full border shadow-xs ${card.tagColor}`}>
                  {card.tag}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0F304E] group-hover:text-[#2B79A6] transition-colors mb-1.5 flex items-center justify-between">
                  <span>{card.title}</span>
                  <i className="fa-solid fa-arrow-right text-xs opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all text-[#2B79A6]"></i>
                </h3>
                <p className="text-xs sm:text-sm text-[#0F304E]/75 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>

              {/* Hand-drawn style bottom footer line */}
              <div className="flex items-center justify-between mt-4 pt-2 border-t border-[#0F304E]/10 text-[11px] font-doodle text-[#2B79A6] font-bold">
                <span>Klik untuk membuka ➔</span>
                <span>✧</span>
              </div>
            </button>

          </div>
        ))}
      </div>

      {/* Suggested Scrapbook Stepper Flow */}
      <div className="mt-12 bg-white/95 border-2 border-[#0F304E]/15 rounded-3xl p-5 shadow-scrapbook -rotate-0.5">
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#0F304E]">
          <div className="flex items-center gap-2 font-handwriting font-bold text-sm">
            <span>🧭</span>
            <span>Alur Belajar Nuansa Biru:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-sans font-medium text-[11px] sm:text-xs">
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">1. Pemanasan</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#BAE6FD] text-[#0F304E] px-2.5 py-1 rounded-xl font-bold border border-[#2B79A6]/30">2. Ice Breaking</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">3. Materi</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">4. Arena TGT</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">5. Kuis</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">6. Refleksi</span>
            <span className="text-[#2B79A6] font-bold">→</span>
            <span className="bg-[#E0F0FA] px-2.5 py-1 rounded-xl font-semibold border border-[#0F304E]/10">7. Tugas</span>
          </div>
        </div>
      </div>

    </div>
  );
};
