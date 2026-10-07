import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface IceBreakingViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenTimer: () => void;
}

interface EnergizerGame {
  id: number;
  title: string;
  badge: string;
  emoji: string;
  rule: string;
  action: string;
}

export const IceBreakingView: React.FC<IceBreakingViewProps> = ({ onNavigate, onOpenTimer }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedGameIndex, setSelectedGameIndex] = useState(0);
  const [clapCount, setClapCount] = useState(0);

  const youtubeId = LEARNING_CONFIG.videoIceBreaking?.youtubeId || "ZanHgPprl-0";

  const energizerGames: EnergizerGame[] = [
    {
      id: 1,
      title: "Game 1: Tepuk 3 Tingkatan Ikhlas",
      badge: "Gerak & Irama",
      emoji: "👏",
      rule: "Guru menyebutkan tingkatan ikhlas secara acak. Seluruh siswa harus merespons dengan gerakan tepat:",
      action: "• Jika Guru berseru 'AWAM!' → Tepuk tangan 1x di atas paha.\n• Jika Guru berseru 'KHAWASH!' → Tepuk tangan 2x di depan dada.\n• Jika Guru berseru 'KHAWASHUL KHAWAS!' → Angkat kedua tangan ke atas sambil berucap 'Alhamdulillah!' dengan senyum tulus!"
    },
    {
      id: 2,
      title: "Game 2: Detektor Pujian & Hinaan",
      badge: "Uji Refleks Cepat",
      emoji: "⚡",
      rule: "Melatih ciri ikhlas menurut Imam Dzun Nun: tetap tenang menghadapi pujian maupun hinaan manusia.",
      action: "• Saat guru menyebut kalimat pujian ('Kamu pintar sekali!', 'Hebat!') → Siswa tetap diam tersenyum tenang (tidak sombong).\n• Saat guru menyebut kalimat hinaan ('Ah biasa saja tuh!') → Siswa juga tetap diam tersenyum tenang (tidak marah).\n• Yang bergerak atau bereaksi berlebihan harus maju memimpin doa atau yel-yel tim!"
    },
    {
      id: 3,
      title: "Game 3: Sambung Kata 'Lillahi Ta'ala'",
      badge: "Kekompakan Kelas",
      emoji: "🎯",
      rule: "Berputar cepat antar teman sebangku menyebutkan satu kebaikan kecil tanpa berpikir lebih dari 3 detik.",
      action: "Contoh: Siswa A: 'Saya tersenyum...', Siswa B: '...karena Allah!', Siswa C: 'Saya buang sampah...', Siswa D: '...karena Allah!'. Tempo semakin dipercepat!"
    }
  ];

  const handleClap = () => {
    sound.playTap();
    setClapCount((prev) => prev + 1);
    if ((clapCount + 1) % 5 === 0) {
      sound.playCorrect();
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            sound.playTap();
            onNavigate('pemanasan');
          }}
          className="text-xs sm:text-sm font-handwriting font-bold text-[#0F304E] hover:text-[#2B79A6] flex items-center gap-2 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Kembali ke Pemanasan</span>
        </button>

        <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs">
          Tahap 2 dari 7 · Energizer (Ice Breaking Ceria)
        </span>
      </div>

      {/* Main Scrapbook Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 text-center relative">
        
        {/* Washi Tape Accent */}
        <div className="washi-tape washi-tape-sky w-36 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-handwriting font-bold uppercase tracking-wider text-[#2B79A6] bg-[#E0F0FA] px-4 py-1.5 rounded-full border border-[#2B79A6]/30 mb-3 -rotate-1">
          <span className="text-base">⚡</span>
          <span>ICE BREAKING & ENERGIZER KELAS</span>
        </div>

        {/* Headline */}
        <h2 className="font-doodle text-3xl sm:text-5xl text-[#0F304E] leading-snug max-w-2xl mx-auto mb-2 font-bold">
          “Segarkan Pikiran, Satukan Semangat!”
        </h2>

        <p className="text-xs sm:text-sm text-[#0F304E]/75 max-w-xl mx-auto mb-6 font-sans">
          Sebelum masuk ke materi inti, ayo lakukan ice breaking menyenangkan bersama guru dan teman sekelas lewat video & games seru di bawah ini:
        </p>

        {/* Top Info Banner with Cheerful Illustration */}
        <div className="mb-6 rounded-3xl overflow-hidden border-2 border-[#2B79A6]/30 bg-[#E0F0FA] grid grid-cols-1 md:grid-cols-12 items-center text-left shadow-scrapbook relative">
          <div className="p-6 md:col-span-7">
            <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs inline-block mb-2 -rotate-1">
              🎉 Pembangkit Konsentrasi Siswa SMA
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E] tracking-tight">
              {LEARNING_CONFIG.videoIceBreaking.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#0F304E]/80 mt-1 leading-relaxed font-sans">
              {LEARNING_CONFIG.videoIceBreaking.description}
            </p>
          </div>
          <div className="md:col-span-5 h-44 md:h-full overflow-hidden p-2.5">
            <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10 shadow-xs h-full">
              <img
                src={ILLUSTRATIONS.icebreaking}
                alt="Ilustrasi Senam Ceria Ice Breaking Pelajar SMA"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* SECTION 1: EMBEDDED YOUTUBE VIDEO ICE BREAKING (LARGE & PROMINENT) */}
        <div className="relative max-w-4xl mx-auto mb-8 text-left">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-[#0F304E] text-white flex items-center justify-center text-xs">
                <i className="fa-brands fa-youtube text-[#38BDF8]"></i>
              </span>
              <div>
                <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0F304E]">
                  Video Panduan Ice Breaking / Senam Fokus
                </h4>
                <span className="text-[11px] text-[#2B79A6] font-handwriting font-bold">
                  Bisa diputar di Smartboard / Proyektor Kelas
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playTap();
                onOpenTimer();
              }}
              className="px-3 py-1.5 rounded-xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] text-xs font-handwriting font-bold border border-[#2B79A6]/30 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-stopwatch text-[#2B79A6]"></i>
              <span>Set Timer Ice Breaking</span>
            </button>
          </div>

          <div className="p-3 sm:p-4 bg-[#E0F0FA] rounded-3xl border-2 border-[#0F304E]/20 shadow-scrapbook-lg rotate-[0.3deg] hover:rotate-0 transition-transform">
            {!isVideoPlaying ? (
              <div 
                onClick={() => {
                  sound.playTap();
                  setIsVideoPlaying(true);
                }}
                className="group w-full aspect-video min-h-[260px] sm:min-h-[380px] md:min-h-[440px] rounded-2xl bg-gradient-to-br from-[#0F304E] via-[#1a4a75] to-[#2B79A6] flex flex-col items-center justify-center p-6 text-white cursor-pointer shadow-inner hover:shadow-2xl transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>

                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/40">
                  <i className="fa-solid fa-play text-[#38BDF8] ml-1"></i>
                </div>

                <span className="relative z-10 font-heading font-extrabold text-base sm:text-2xl text-center tracking-wide">
                  ▶ PUTAR VIDEO ICE BREAKING KELAS
                </span>

                <span className="relative z-10 text-xs sm:text-sm text-white/90 mt-2 text-center max-w-md font-sans">
                  {LEARNING_CONFIG.videoIceBreaking.title}
                </span>

                <div className="relative z-10 mt-3 px-4 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-mono border border-white/20">
                  Klik untuk memutar video seru bersama siswa
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video min-h-[260px] sm:min-h-[380px] md:min-h-[440px] rounded-2xl overflow-hidden shadow-md border-2 border-[#0F304E]/25 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="Video Ice Breaking Pembelajaran PAI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* SECTION 2: INTERACTIVE CLASSROOM ENERGIZER GAME CARDS */}
        <div className="max-w-4xl mx-auto text-left mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#0F304E]">
                🎲 Pilihan Game Energizer Tanpa Alat di Kelas
              </h4>
              <p className="text-xs text-[#0F304E]/70 font-sans">
                Pilih salah satu game cepat untuk dimainkan bersama dipandu oleh guru:
              </p>
            </div>

            {/* Interactive Virtual Clap Button */}
            <button
              onClick={handleClap}
              className="px-3.5 py-2 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white text-xs font-heading font-bold shadow-scrapbook-btn border border-[#0F304E] cursor-pointer flex items-center gap-1.5 transition-transform active:scale-95"
              title="Tepuk Tangan Virtual Bersama"
            >
              <span>👏 Tepuk ({clapCount})</span>
            </button>
          </div>

          {/* Game Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            {energizerGames.map((game, idx) => {
              const isSelected = selectedGameIndex === idx;
              return (
                <button
                  key={game.id}
                  onClick={() => {
                    sound.playTap();
                    setSelectedGameIndex(idx);
                  }}
                  className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0F304E] text-white border-[#0F304E] shadow-scrapbook-btn -rotate-1'
                      : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{game.emoji}</span>
                    <span className={`text-[10px] font-handwriting font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#38BDF8] text-[#0F304E]' : 'bg-[#E0F0FA] text-[#2B79A6]'
                    }`}>
                      {game.badge}
                    </span>
                  </div>
                  <h5 className="font-heading font-extrabold text-xs sm:text-sm leading-snug">
                    {game.title}
                  </h5>
                </button>
              );
            })}
          </div>

          {/* Active Game Instructions Box */}
          <div className="bg-[#F0F7FD] rounded-3xl p-6 sm:p-7 border-2 border-[#2B79A6]/30 shadow-scrapbook relative">
            <div className="washi-tape washi-tape-sea w-24 -top-2.5 right-8"></div>

            <div className="flex items-center gap-2 mb-2 text-xs font-handwriting font-bold text-[#2B79A6] uppercase tracking-wider">
              <span>{energizerGames[selectedGameIndex].emoji}</span>
              <span>Panduan Instruksi Game untuk Guru & Siswa:</span>
            </div>

            <h4 className="font-heading font-extrabold text-lg sm:text-xl text-[#0F304E] mb-2">
              {energizerGames[selectedGameIndex].title}
            </h4>

            <p className="text-xs sm:text-sm text-[#0F304E]/80 mb-4 font-sans leading-relaxed">
              {energizerGames[selectedGameIndex].rule}
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#2B79A6]/20 text-xs sm:text-sm text-[#0F304E] leading-relaxed whitespace-pre-line font-sans shadow-xs">
              {energizerGames[selectedGameIndex].action}
            </div>

            <div className="mt-4 pt-3 border-t border-[#2B79A6]/20 flex flex-wrap items-center justify-between gap-3 text-xs text-[#0F304E]/70 font-sans">
              <span>💡 Siswa yang ceria dan fokus akan lebih mudah menyerap materi keikhlasan!</span>
              <button
                onClick={() => {
                  sound.playTap();
                  onOpenTimer();
                }}
                className="text-[#0F304E] font-handwriting font-bold hover:underline flex items-center gap-1.5 cursor-pointer text-sm"
              >
                <i className="fa-solid fa-stopwatch text-[#2B79A6]"></i>
                <span>Mulai Stopwatch 3 Menit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons: Kembali & Lanjut ke Materi */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#0F304E]/10">
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('pemanasan');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] font-handwriting font-bold text-xs sm:text-sm border border-[#0F304E]/15 transition-colors cursor-pointer"
          >
            ← Kembali ke Pemanasan
          </button>

          <button
            onClick={() => {
              sound.playTap();
              onNavigate('dashboard');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] font-handwriting font-bold text-xs sm:text-sm border-2 border-[#0F304E]/20 transition-colors cursor-pointer"
          >
            🏠 Beranda
          </button>

          <button
            onClick={() => {
              sound.playTap();
              onNavigate('materi');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-[#0F304E]"
          >
            <span>Lanjut ke Materi Utama</span>
            <i className="fa-solid fa-book-open text-[#38BDF8]"></i>
          </button>
        </div>

      </div>

    </div>
  );
};
