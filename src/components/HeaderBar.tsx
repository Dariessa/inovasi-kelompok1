import React from 'react';
import { sound } from '../utils/audio';

export type ViewType = 
  | 'hero' 
  | 'dashboard' 
  | 'pemanasan' 
  | 'icebreaking'
  | 'materi' 
  | 'game' 
  | 'kuis' 
  | 'refleksi' 
  | 'tugas';

interface HeaderBarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenTimer: () => void;
  onOpenConfig: () => void;
  isSoundActive: boolean;
  onToggleSound: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  currentView,
  onNavigate,
  onOpenTimer,
  onOpenConfig,
  isSoundActive,
  onToggleSound,
  isFullscreen,
  onToggleFullscreen
}) => {
  // If on hero view, show minimal serene scrapbook header
  if (currentView === 'hero') {
    return (
      <header className="py-4 px-6 max-w-6xl mx-auto flex items-center justify-between text-xs font-medium relative z-30">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-white/90 border border-[#2B79A6]/30 shadow-xs font-handwriting text-xs text-[#0F304E]">
            🌊 PAI • AKIDAH AKHLAK
          </span>
          <span className="text-[#38BDF8] font-doodle text-base font-bold">★</span>
          <span className="text-[#2B79A6] text-[11px] font-semibold tracking-wider font-mono">KELAS XI / FASE F</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConfig}
            className="p-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/20 shadow-xs text-xs transition-transform active:scale-95 cursor-pointer"
            title="Pengaturan Tautan (Video / Form)"
          >
            <i className="fa-solid fa-gear"></i>
          </button>
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/20 shadow-xs text-xs transition-transform active:scale-95 cursor-pointer"
            title="Layar Penuh Smartboard"
          >
            <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </button>
        </div>
      </header>
    );
  }

  const navItems: { view: ViewType; label: string; icon: string; emoji: string }[] = [
    { view: 'dashboard', label: 'Dashboard', icon: 'fa-house', emoji: '🏠' },
    { view: 'pemanasan', label: 'Pemanasan', icon: 'fa-cube', emoji: '🧊' },
    { view: 'icebreaking', label: 'Ice Breaking', icon: 'fa-bolt', emoji: '⚡' },
    { view: 'materi', label: 'Materi', icon: 'fa-book-open', emoji: '📚' },
    { view: 'game', label: 'Arena TGT', icon: 'fa-trophy', emoji: '🎮' },
    { view: 'kuis', label: 'Kuis', icon: 'fa-pen-to-square', emoji: '📝' },
    { view: 'refleksi', label: 'Refleksi', icon: 'fa-comment-dots', emoji: '💬' },
    { view: 'tugas', label: 'Tugas', icon: 'fa-list-check', emoji: '📋' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F0F7FD]/95 backdrop-blur-md border-b-2 border-[#0F304E]/15 py-3 px-4 sm:px-6 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        
        {/* Left: Brand / Home Sticker Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('dashboard');
            }}
            className="flex items-center gap-2.5 text-left group focus:outline-none p-1 transition-transform active:scale-95 cursor-pointer"
          >
            <span className="w-9 h-9 rounded-2xl bg-[#0F304E] text-white flex items-center justify-center font-bold text-sm shadow-[2px_2px_0px_#2B79A6] group-hover:rotate-6 transition-transform">
              <i className="fa-solid fa-water text-xs text-[#38BDF8]"></i>
            </span>
            <div className="hidden sm:block">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#0F304E] block leading-none">
                MENGUATKAN IMAN
              </span>
              <span className="text-[11px] text-[#2B79A6] font-handwriting font-bold">
                Scrapbook Pembelajaran Keikhlasan
              </span>
            </div>
          </button>
        </div>

        {/* Center: Scrapbook Sticker Tabs */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-white/85 p-1.5 rounded-2xl border-2 border-[#0F304E]/10 shadow-xs">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => {
                  sound.playTap();
                  onNavigate(item.view);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#0F304E] text-white shadow-[2px_2px_0px_#38BDF8] -rotate-1'
                    : 'text-[#0F304E]/75 hover:text-[#0F304E] hover:bg-[#E0F0FA]'
                }`}
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right: Scrapbook Toolbar Controls */}
        <div className="flex items-center gap-2">
          {/* Beranda quick button */}
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('dashboard');
            }}
            className="px-3 py-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 text-xs font-bold flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_rgba(15,48,78,0.15)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            title="Kembali ke Dashboard Utama"
          >
            <i className="fa-solid fa-house text-[#2B79A6]"></i>
            <span className="hidden sm:inline">Beranda</span>
          </button>

          {/* Classroom Timer */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenTimer();
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 text-xs font-bold flex items-center gap-1.5 transition-all shadow-[2px_2px_0px_rgba(15,48,78,0.15)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            title="Timer Diskusi Kelas"
          >
            <i className="fa-solid fa-stopwatch text-[#2B79A6]"></i>
            <span className="hidden md:inline">Timer</span>
          </button>

          {/* Link Configuration */}
          <button
            onClick={() => {
              sound.playTap();
              onOpenConfig();
            }}
            className="p-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 text-xs font-semibold transition-all shadow-[2px_2px_0px_rgba(15,48,78,0.15)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            title="Atur Link YouTube / Form"
          >
            <i className="fa-solid fa-gear text-[#2B79A6]"></i>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={onToggleSound}
            className="p-2 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 text-xs font-semibold transition-all shadow-[2px_2px_0px_rgba(15,48,78,0.15)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            title={isSoundActive ? "Suara Aktif" : "Suara Mati"}
          >
            <i className={`fa-solid ${isSoundActive ? 'fa-volume-high text-[#2B79A6]' : 'fa-volume-xmark text-slate-400'}`}></i>
          </button>

          {/* Fullscreen Smartboard Toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#0F304E] hover:bg-[#1a4a75] text-white text-xs font-bold transition-all shadow-[2px_2px_0px_#38BDF8] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
            title="Layar Penuh Proyektor"
          >
            <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </button>
        </div>

      </div>
    </header>
  );
};
