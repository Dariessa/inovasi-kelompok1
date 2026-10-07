import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface PemanasanViewProps {
  onNavigate: (view: ViewType) => void;
  onOpenTimer: () => void;
}

export const PemanasanView: React.FC<PemanasanViewProps> = ({ onNavigate, onOpenTimer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [discussionOpinion, setDiscussionOpinion] = useState<'ya' | 'ragu' | null>(null);

  const youtubeId = LEARNING_CONFIG.videoPemanasan.youtubeId;

  const handleStartVideo = () => {
    sound.playTap();
    setIsPlaying(true);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Top Breadcrumb & Title */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            sound.playTap();
            onNavigate('dashboard');
          }}
          className="text-xs sm:text-sm font-handwriting font-bold text-[#0F304E] hover:text-[#2B79A6] flex items-center gap-2 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Kembali ke Beranda</span>
        </button>

        <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs">
          Tahap 1 dari 7 · Feel (Pemanasan Apersepsi)
        </span>
      </div>

      {/* Main Scrapbook Warmup Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 text-center relative">
        
        {/* Top washi tape sticker */}
        <div className="washi-tape washi-tape-sky w-36 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 text-xs font-handwriting font-bold uppercase tracking-wider text-[#2B79A6] bg-[#E0F0FA] px-4 py-1.5 rounded-full border border-[#2B79A6]/30 mb-3 -rotate-1">
          <span className="text-base">🧊</span>
          <span>PEMANASAN & APERSEPSI KELAS</span>
        </div>

        {/* Big Provocative Starter Question with Aesthetic Handwritten Font */}
        <h2 className="font-doodle text-3xl sm:text-5xl text-[#0F304E] leading-snug max-w-2xl mx-auto mb-2 font-bold">
          “Pernahkah kamu membantu seseorang tanpa berharap dipuji?”
        </h2>

        <p className="text-xs sm:text-sm text-[#0F304E]/75 max-w-xl mx-auto mb-6 font-sans">
          Saksikan tayangan video inspiratif di bawah ini di layar Smartboard/Proyektor kelas untuk mengawali penyelaman batin tentang hakikat keikhlasan:
        </p>

        {/* Companion Polaroid Strip & Video Description Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 max-w-4xl mx-auto mb-4 px-2 text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#0F304E]/20 shadow-xs shrink-0">
              <img
                src={ILLUSTRATIONS.warmup}
                alt="Ilustrasi Kebaikan Tulus Tanpa Kamera"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-handwriting font-bold text-sm sm:text-base text-[#0F304E] block">
                {LEARNING_CONFIG.videoPemanasan.title}
              </span>
              <span className="text-[11px] text-[#2B79A6] font-sans">
                {LEARNING_CONFIG.videoPemanasan.description}
              </span>
            </div>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#E0F0FA] text-[#0F304E] text-xs font-mono font-bold border border-[#2B79A6]/20">
            <span>📺 Layar Lebar Smartboard</span>
          </div>
        </div>

        {/* BIG ENLARGED VIDEO CONTAINER (CINEMATIC 16:9 PROYECTOR DISPLAY) */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="washi-tape washi-tape-sea w-32 -top-3 right-8"></div>
          <div className="washi-tape washi-tape-sky w-28 -bottom-3 left-8"></div>

          <div className="p-3 sm:p-4 bg-[#E0F0FA] rounded-3xl border-2 border-[#0F304E]/20 shadow-scrapbook-lg rotate-[0.3deg] hover:rotate-0 transition-transform">
            {!isPlaying ? (
              <div 
                onClick={handleStartVideo}
                className="group w-full aspect-video min-h-[260px] sm:min-h-[380px] md:min-h-[460px] rounded-2xl bg-gradient-to-br from-[#0F304E] via-[#1a4a75] to-[#2B79A6] flex flex-col items-center justify-center p-6 text-white cursor-pointer shadow-inner hover:shadow-2xl transition-all relative overflow-hidden"
              >
                {/* Decorative background grid rays */}
                <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-15"></div>

                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform shadow-lg border-2 border-white/40">
                  <i className="fa-solid fa-play text-[#38BDF8] ml-1"></i>
                </div>

                <span className="relative z-10 font-heading font-extrabold text-base sm:text-2xl text-center tracking-wide">
                  ▶ PUTAR VIDEO PEMANASAN DI LAYAR PENUH
                </span>

                <span className="relative z-10 text-xs sm:text-sm text-white/90 mt-2 text-center max-w-md font-sans">
                  {LEARNING_CONFIG.videoPemanasan.title}
                </span>

                <div className="relative z-10 mt-4 px-4 py-1 rounded-full bg-white/10 text-white/80 text-[11px] font-mono border border-white/20">
                  Klik untuk menonton bersama di Smartboard
                </div>
              </div>
            ) : (
              <div className="w-full aspect-video min-h-[260px] sm:min-h-[380px] md:min-h-[460px] rounded-2xl overflow-hidden shadow-md border-2 border-[#0F304E]/25 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="Video Pemanasan Pembelajaran"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* Diskusi Interaktif di dalam Box Doodle Biru Laut */}
        <div className="bg-[#E0F0FA] rounded-3xl p-6 sm:p-7 border-2 border-[#2B79A6]/30 max-w-3xl mx-auto text-left mb-8 shadow-scrapbook relative">
          <div className="flex items-center gap-2 text-xs font-handwriting font-bold uppercase tracking-wider text-[#0F304E] mb-2">
            <span>💭</span>
            <span>Pertanyaan Diskusi Kelas Smartboard:</span>
          </div>

          <h3 className="font-doodle text-2xl sm:text-3xl font-bold text-[#0F304E] mb-4">
            “Apakah kamu tetap mau berbuat baik jika tidak ada seorang pun yang melihat perbuatanmu?”
          </h3>

          {/* Quick Smartboard Classroom Polling Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                sound.playCorrect();
                setDiscussionOpinion('ya');
              }}
              className={`w-full sm:w-1/2 py-3.5 px-4 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 border-2 ${
                discussionOpinion === 'ya'
                  ? 'bg-[#0F304E] text-white border-[#0F304E] shadow-scrapbook-btn -rotate-1'
                  : 'bg-white hover:bg-white/90 text-[#0F304E] border-[#0F304E]/20 shadow-xs'
              }`}
            >
              <span>🌊 Ya, Tetap Mau (Lillahi Ta'ala)</span>
            </button>

            <button
              onClick={() => {
                sound.playTap();
                setDiscussionOpinion('ragu');
              }}
              className={`w-full sm:w-1/2 py-3.5 px-4 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 border-2 ${
                discussionOpinion === 'ragu'
                  ? 'bg-[#38BDF8] text-[#0F304E] border-[#0F304E] shadow-scrapbook-btn rotate-1'
                  : 'bg-white hover:bg-white/90 text-[#0F304E] border-[#0F304E]/20 shadow-xs'
              }`}
            >
              <span>🤔 Terkadang Masih Ragu / Sulit</span>
            </button>
          </div>

          {discussionOpinion && (
            <div className="mt-4 p-4 bg-white rounded-2xl text-xs sm:text-sm text-[#0F304E] border-2 border-[#2B79A6]/30 leading-relaxed shadow-xs animate-fadeIn font-sans">
              <strong className="text-[#2B79A6] font-handwriting text-base block mb-1">Catatan Refleksi Guru:</strong> 
              {discussionOpinion === 'ya' 
                ? "Luar biasa! Inilah fitrah murni seorang muslim yang menyadari Allah senantiasa Maha Melihat (Al-Bashir)." 
                : "Kejujuran yang sangat mulia! Manusiawi ada godaan ingin diakui. Itulah sebabnya kita mempelajari ilmu keikhlasan agar hati senantiasa terlatih."}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-[#2B79A6]/20 flex items-center justify-between text-xs text-[#0F304E]/70 font-sans">
            <span>Beri waktu 2 menit bagi siswa untuk saling bertukar pandangan.</span>
            <button
              onClick={() => {
                sound.playTap();
                onOpenTimer();
              }}
              className="text-[#0F304E] font-handwriting font-bold hover:underline flex items-center gap-1.5 cursor-pointer text-sm"
            >
              <i className="fa-solid fa-stopwatch text-[#2B79A6]"></i>
              <span>Buka Timer Kelas</span>
            </button>
          </div>
        </div>

        {/* Navigation Buttons: Kembali & Lanjut ke Ice Breaking */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('dashboard');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] font-handwriting font-bold text-xs sm:text-sm border border-[#0F304E]/15 transition-colors cursor-pointer"
          >
            🏠 Kembali ke Beranda
          </button>

          <button
            onClick={() => {
              sound.playTap();
              onNavigate('icebreaking');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-[#0F304E]"
          >
            <span>Lanjut ke Ice Breaking</span>
            <i className="fa-solid fa-bolt text-[#38BDF8]"></i>
          </button>
        </div>

      </div>

    </div>
  );
};
