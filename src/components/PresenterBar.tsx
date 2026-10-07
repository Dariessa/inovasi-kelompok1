import React, { useState } from 'react';
import { ViewType } from './HeaderBar';
import { sound } from '../utils/audio';

export interface StageInfo {
  id: ViewType;
  number: number;
  title: string;
  subtitle: string;
  emoji: string;
}

export const STAGES_LIST: StageInfo[] = [
  { id: 'hero', number: 1, title: 'Halaman Sampul', subtitle: 'Cover Pembelajaran & Catatan Hikmah', emoji: '🌿' },
  { id: 'dashboard', number: 2, title: 'Papan Menu Utama', subtitle: 'Dashboard Scrapbook & Alur Belajar', emoji: '🏠' },
  { id: 'pemanasan', number: 3, title: 'Pemanasan (Feel)', subtitle: 'Apersepsi, Video Layar Lebar & Pemantik', emoji: '🧊' },
  { id: 'icebreaking', number: 4, title: 'Ice Breaking (Energizer)', subtitle: 'Video Senam Fokus & Game Ceria Kelas', emoji: '⚡' },
  { id: 'materi', number: 5, title: 'Materi (Imagine)', subtitle: 'Pengertian, QS Az-Zumar: 2, 3 Tingkatan & Ciri', emoji: '📚' },
  { id: 'game', number: 6, title: 'Arena TGT (Game)', subtitle: 'Turnamen 4 Tim Ceria Berhadiah Bintang', emoji: '🎮' },
  { id: 'kuis', number: 7, title: 'Kuis Evaluasi', subtitle: 'Uji Pemahaman Mandiri & Skor', emoji: '📝' },
  { id: 'refleksi', number: 8, title: 'Refleksi (Share)', subtitle: 'Muhasabah Batin & Komitmen Ikhlas', emoji: '💭' },
  { id: 'tugas', number: 9, title: 'Tugas (Do) & Penutup', subtitle: 'Aksi Nyata & Doa Kafaratul Majelis', emoji: '🌱' }
];

interface PresenterBarProps {
  currentView: ViewType;
  onSelectView: (view: ViewType) => void;
  onNext: () => void;
  onPrev: () => void;
  onOpenTimer: () => void;
  onOpenConfig: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  isSoundActive: boolean;
  onToggleSound: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const PresenterBar: React.FC<PresenterBarProps> = ({
  currentView,
  onSelectView,
  onNext,
  onPrev,
  onOpenTimer,
  onOpenConfig,
  isLaserActive,
  onToggleLaser,
  isSoundActive,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const currentIndex = STAGES_LIST.findIndex((s) => s.id === currentView);
  const currentStage = STAGES_LIST[currentIndex] || STAGES_LIST[0];
  const isFirst = currentIndex <= 0;
  const isLast = currentIndex >= STAGES_LIST.length - 1;

  return (
    <>
      {/* Slide Navigation Drawer / Modal ala Scrapbook */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div 
            className="bg-[#F0F7FD] border-2 border-[#0F304E]/20 rounded-3xl p-6 sm:p-8 max-w-4xl w-full shadow-scrapbook-lg max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Washi tape header */}
            <div className="washi-tape washi-tape-sky w-36 -top-3 left-1/2 -translate-x-1/2"></div>

            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#0F304E] text-white flex items-center justify-center font-bold text-base shadow-[2px_2px_0px_#2B79A6]">
                  <i className="fa-solid fa-layer-group text-[#38BDF8]"></i>
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0F304E]">
                    Daftar 9 Layar Pembelajaran PAI
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">
                    Smartboard Presenter Navigation · Nuansa Biru Laut & Fase F
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/20 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            {/* Grid of 8 Screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-6">
              {STAGES_LIST.map((stage) => {
                const isActive = stage.id === currentView;
                return (
                  <button
                    key={stage.id}
                    onClick={() => {
                      sound.playSlideChange();
                      onSelectView(stage.id);
                      setIsDrawerOpen(false);
                    }}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between min-h-[125px] ${
                      isActive
                        ? 'bg-[#0F304E] text-white border-[#0F304E] shadow-scrapbook-btn -rotate-1'
                        : 'bg-white hover:bg-[#E0F0FA] border-[#0F304E]/15 hover:border-[#2B79A6] text-[#0F304E] shadow-scrapbook'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{stage.emoji}</span>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#38BDF8] text-[#0F304E]' : 'bg-[#E0F0FA] text-[#2B79A6]'
                      }`}>
                        Layar 0{stage.number}
                      </span>
                    </div>

                    <div className="mt-2">
                      <h4 className="font-heading font-bold text-xs sm:text-sm leading-snug">
                        {stage.title}
                      </h4>
                      <p className={`text-[10px] mt-1 line-clamp-2 ${isActive ? 'text-white/80' : 'text-[#0F304E]/65'}`}>
                        {stage.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Keyboard shortcuts hints */}
            <div className="pt-4 border-t border-[#0F304E]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#0F304E]/70 font-sans">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-bold">Shortcut Keyboard Guru:</span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#0F304E]/20 font-mono text-[11px]">→ / Spasi</span> Next
                <span className="bg-white px-2 py-0.5 rounded border border-[#0F304E]/20 font-mono text-[11px]">←</span> Prev
                <span className="bg-white px-2 py-0.5 rounded border border-[#0F304E]/20 font-mono text-[11px]">L</span> Laser
                <span className="bg-white px-2 py-0.5 rounded border border-[#0F304E]/20 font-mono text-[11px]">T</span> Timer
                <span className="bg-white px-2 py-0.5 rounded border border-[#0F304E]/20 font-mono text-[11px]">F</span> Fullscreen
              </div>

              <span className="font-handwriting font-bold text-[#2B79A6] text-sm">
                Pengganti PowerPoint Berbasis Web Interaktif 🌊
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Presenter Pill on Smartboard */}
      <aside 
        aria-label="Smartboard Presentation Controls" 
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 transition-transform duration-200 select-none print:hidden"
      >
        {isCollapsed ? (
          <button
            onClick={() => {
              sound.playTap();
              setIsCollapsed(false);
            }}
            className="px-4 py-2 rounded-full bg-[#0F304E] text-white border-2 border-[#0F304E] shadow-scrapbook-btn font-handwriting font-bold text-xs flex items-center gap-2 cursor-pointer hover:bg-[#1a4a75]"
            title="Tampilkan Bilah Kontrol Smartboard"
          >
            <i className="fa-solid fa-chalkboard-user text-[#38BDF8]"></i>
            <span>Kontrol Guru ({currentStage.number}/9)</span>
            <i className="fa-solid fa-chevron-up text-[10px]"></i>
          </button>
        ) : (
          <div className="bg-[#FFFFFF]/95 backdrop-blur-md border-2 border-[#0F304E]/20 rounded-2xl p-1.5 sm:p-2 shadow-scrapbook flex items-center gap-1.5 sm:gap-2">
            
            {/* Prev Button */}
            <button
              onClick={() => {
                sound.playSlideChange();
                onPrev();
              }}
              disabled={isFirst}
              className={`h-10 sm:h-11 px-3 sm:px-4 rounded-xl flex items-center gap-1.5 font-heading font-extrabold text-xs sm:text-sm border-2 transition-all cursor-pointer ${
                isFirst
                  ? 'opacity-40 cursor-not-allowed bg-[#E0F0FA] text-[#0F304E]/40 border-transparent'
                  : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs active:scale-95'
              }`}
              title="Layar Sebelumnya (←)"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span className="hidden md:inline">Sebelumnya</span>
            </button>

            {/* Stage Selector / Drawer Trigger */}
            <button
              onClick={() => {
                sound.playTap();
                setIsDrawerOpen(true);
              }}
              className="h-10 sm:h-11 px-2.5 sm:px-3.5 rounded-xl bg-[#E0F0FA] hover:bg-[#BAE6FD] border-2 border-[#2B79A6]/30 flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#0F304E] transition-colors cursor-pointer shadow-xs"
              title="Buka Menu Layar (1-8)"
            >
              <span className="text-base sm:text-lg">{currentStage.emoji}</span>
              <div className="text-left hidden sm:block">
                <div className="text-[10px] font-mono leading-none text-[#2B79A6] font-bold">
                  LAYAR 0{currentStage.number} / 09
                </div>
                <div className="text-xs font-heading font-extrabold leading-tight text-[#0F304E]">
                  {currentStage.title}
                </div>
              </div>
              <span className="sm:hidden font-mono font-bold text-xs text-[#0F304E]">
                {currentStage.number}/9
              </span>
              <i className="fa-solid fa-chevron-up text-[10px] text-[#2B79A6]"></i>
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                sound.playSlideChange();
                onNext();
              }}
              disabled={isLast}
              className={`h-10 sm:h-11 px-3.5 sm:px-5 rounded-xl flex items-center gap-1.5 font-heading font-extrabold text-xs sm:text-sm border-2 border-[#0F304E] transition-all cursor-pointer ${
                isLast
                  ? 'opacity-40 cursor-not-allowed bg-[#0F304E]/40 text-white'
                  : 'bg-[#0F304E] hover:bg-[#1a4a75] text-white shadow-scrapbook-btn active:scale-95'
              }`}
              title="Layar Berikutnya (→ atau Spasi)"
            >
              <span>Selanjutnya</span>
              <i className="fa-solid fa-arrow-right text-xs text-[#38BDF8]"></i>
            </button>

            {/* Vertical Separator */}
            <div className="h-6 w-px bg-[#0F304E]/15 mx-0.5 hidden sm:block"></div>

            {/* Quick Presenter Tools */}
            <div className="flex items-center gap-1">
              
              {/* Laser Pointer Toggle */}
              <button
                onClick={() => {
                  sound.playTap();
                  onToggleLaser();
                }}
                className={`w-9 sm:w-10 h-9 sm:h-10 rounded-xl flex items-center justify-center transition-colors cursor-pointer border ${
                  isLaserActive
                    ? 'bg-rose-500 text-white border-rose-600 shadow-sm animate-pulse'
                    : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/15 shadow-xs'
                }`}
                title="Laser Pointer Smartboard (L)"
              >
                <i className="fa-solid fa-bullseye text-xs sm:text-sm"></i>
              </button>

              {/* Discussion Timer */}
              <button
                onClick={() => {
                  sound.playTap();
                  onOpenTimer();
                }}
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#2B79A6] border border-[#0F304E]/15 shadow-xs flex items-center justify-center transition-colors cursor-pointer"
                title="Stopwatch / Timer Diskusi (T)"
              >
                <i className="fa-solid fa-stopwatch text-xs sm:text-sm text-[#0F304E]"></i>
              </button>

              {/* Sound Toggle */}
              <button
                onClick={onToggleSound}
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/15 shadow-xs flex items-center justify-center transition-colors cursor-pointer hidden md:flex"
                title={isSoundActive ? 'Matikan Suara (M)' : 'Nyalakan Suara (M)'}
              >
                <i className={`fa-solid ${isSoundActive ? 'fa-volume-high text-[#2B79A6]' : 'fa-volume-xmark text-slate-400'} text-xs`}></i>
              </button>

              {/* Fullscreen Toggle */}
              <button
                onClick={onToggleFullscreen}
                className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/15 shadow-xs flex items-center justify-center transition-colors cursor-pointer hidden md:flex"
                title="Layar Penuh Smartboard (F)"
              >
                <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'} text-xs`}></i>
              </button>

              {/* Minimize Presenter Bar */}
              <button
                onClick={() => {
                  sound.playTap();
                  setIsCollapsed(true);
                }}
                className="w-7 h-9 rounded-lg hover:bg-[#E0F0FA] text-[#0F304E]/50 hover:text-[#0F304E] flex items-center justify-center cursor-pointer"
                title="Sembunyikan bilah kontrol"
              >
                <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </button>
            </div>

          </div>
        )}
      </aside>
    </>
  );
};
