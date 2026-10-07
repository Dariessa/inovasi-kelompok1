import React from 'react';
import { sound } from '../utils/audio';

interface HeaderNavProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (slideIndex: number) => void;
  onOpenTimer: () => void;
  isLaserActive: boolean;
  onToggleLaser: () => void;
  isSoundActive: boolean;
  onToggleSound: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const SLIDE_TITLES = [
  "01. Pembukaan & CP/TP",
  "02. Apersepsi Medsos",
  "03. Makna & Lab Hati",
  "04. Dalil Al-Qur'an & Hadits",
  "05. Penyakit Hati & Game",
  "06. Studi Kasus Kelas",
  "07. Kuis Smartboard",
  "08. Muhasabah & Rangkuman"
];

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  onOpenTimer,
  isLaserActive,
  onToggleLaser,
  isSoundActive,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => { sound.playTap(); onSelectSlide(0); }}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <span className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-sm shadow-sm group-hover:bg-emerald-400 transition-colors">
              <i className="fa-solid fa-moon"></i>
            </span>
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              PAI XI · Keikhlasan
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links for Presentation Slides */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {SLIDE_TITLES.map((title, idx) => {
            const isActive = currentSlide === idx;
            const shortLabel = title.split('. ')[1] || title;
            return (
              <button
                key={idx}
                onClick={() => {
                  sound.playSlideChange();
                  onSelectSlide(idx);
                }}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
                title={title}
              >
                <span className="text-[10px] text-emerald-400/80 mr-1 font-mono">{idx + 1}</span>
                {shortLabel}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 Primary Classroom Actions */}
        <div className="flex items-center gap-2">
          {/* Discussion Timer quick action */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenTimer();
            }}
            className="px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Buka Timer Diskusi Kelas (T)"
          >
            <i className="fa-solid fa-stopwatch text-amber-400 text-xs"></i>
            <span className="hidden sm:inline">Timer</span>
          </button>

          {/* Laser Pointer Toggle */}
          <button
            onClick={() => {
              sound.playTap();
              onToggleLaser();
            }}
            className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
              isLaserActive
                ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
            }`}
            title="Mode Laser Pointer Smartboard (L)"
          >
            <i className="fa-solid fa-bullseye text-xs"></i>
            <span className="hidden sm:inline">Laser</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
            title={isSoundActive ? "Nonaktifkan Suara" : "Aktifkan Suara"}
          >
            <i className={`fa-solid ${isSoundActive ? 'fa-volume-high text-emerald-400' : 'fa-volume-xmark text-slate-500'}`}></i>
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => {
              sound.playTap();
              onToggleFullscreen();
            }}
            className="p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
            title="Layar Penuh Proyektor (F)"
          >
            <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </button>
        </div>

      </div>
    </header>
  );
};
