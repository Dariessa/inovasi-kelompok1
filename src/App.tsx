import React, { useState, useEffect, useCallback } from 'react';
import { HeaderBar, ViewType } from './components/HeaderBar';
import { HeroView } from './components/views/HeroView';
import { DashboardView } from './components/views/DashboardView';
import { PemanasanView } from './components/views/PemanasanView';
import { IceBreakingView } from './components/views/IceBreakingView';
import { MateriView } from './components/views/MateriView';
import { ArenaTGTView } from './components/views/ArenaTGTView';
import { KuisView } from './components/views/KuisView';
import { RefleksiView } from './components/views/RefleksiView';
import { TugasView } from './components/views/TugasView';
import { ClassroomTimerModal } from './components/ClassroomTimerModal';
import { ConfigModal } from './components/ConfigModal';
import { PresenterBar } from './components/PresenterBar';
import { LaserPointer } from './components/LaserPointer';
import { sound } from './utils/audio';

const VIEW_ORDER: ViewType[] = [
  'hero',
  'dashboard',
  'pemanasan',
  'icebreaking',
  'materi',
  'game',
  'kuis',
  'refleksi',
  'tugas'
];

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('hero');
  const [isTimerOpen, setIsTimerOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLaserActive, setIsLaserActive] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  const handleToggleSound = () => {
    const newState = !isSoundActive;
    setIsSoundActive(newState);
    sound.enabled = newState;
    if (newState) sound.playTap();
  };

  const handleNextSlide = useCallback(() => {
    const currentIndex = VIEW_ORDER.indexOf(currentView);
    if (currentIndex < VIEW_ORDER.length - 1) {
      sound.playSlideChange();
      setCurrentView(VIEW_ORDER[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  const handlePrevSlide = useCallback(() => {
    const currentIndex = VIEW_ORDER.indexOf(currentView);
    if (currentIndex > 0) {
      sound.playSlideChange();
      setCurrentView(VIEW_ORDER[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentView]);

  // Keyboard navigation & wireless presenter clicker for teachers in classroom
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && currentView === 'hero')) {
        e.preventDefault();
        handleNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 't') {
        e.preventDefault();
        setIsTimerOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'h') {
        e.preventDefault();
        sound.playTap();
        setCurrentView('dashboard');
      } else if (e.key.toLowerCase() === 'm') {
        e.preventDefault();
        handleToggleSound();
      } else if (e.key.toLowerCase() === 'l') {
        e.preventDefault();
        setIsLaserActive((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleFullscreen, isSoundActive, handleNextSlide, handlePrevSlide, currentView]);

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  return (
    <div className="min-h-screen bg-grid-paper text-[#0F304E] flex flex-col justify-between selection:bg-[#2B79A6] selection:text-white relative">
      
      {/* Top Header Bar */}
      <HeaderBar
        currentView={currentView}
        onNavigate={(view) => {
          sound.playTap();
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTimer={() => setIsTimerOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
        isSoundActive={isSoundActive}
        onToggleSound={handleToggleSound}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main Learning Stage Container with bottom padding for presenter bar */}
      <main className="flex-1 flex flex-col justify-center pb-24 sm:pb-28">
        {currentView === 'hero' && (
          <HeroView onStart={() => setCurrentView('dashboard')} />
        )}
        {currentView === 'dashboard' && (
          <DashboardView onSelectMenu={(view) => setCurrentView(view)} />
        )}
        {currentView === 'pemanasan' && (
          <PemanasanView
            onNavigate={(view) => setCurrentView(view)}
            onOpenTimer={() => setIsTimerOpen(true)}
          />
        )}
        {currentView === 'icebreaking' && (
          <IceBreakingView
            onNavigate={(view) => setCurrentView(view)}
            onOpenTimer={() => setIsTimerOpen(true)}
          />
        )}
        {currentView === 'materi' && (
          <MateriView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'game' && (
          <ArenaTGTView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'kuis' && (
          <KuisView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'refleksi' && (
          <RefleksiView onNavigate={(view) => setCurrentView(view)} />
        )}
        {currentView === 'tugas' && (
          <TugasView onNavigate={(view) => setCurrentView(view)} />
        )}
      </main>

      {/* Subtle Footer for Classroom */}
      {currentView !== 'hero' && (
        <footer className="py-4 px-6 border-t border-[#2B79A6]/15 text-center text-xs text-[#0F304E]/60 mb-14 sm:mb-16">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <span>🌊 PAI & Budi Pekerti · Kelas XI / Fase F (Materi Keikhlasan)</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsConfigOpen(true)}
                className="hover:text-[#0F304E] underline cursor-pointer"
              >
                ⚙️ Pengaturan Tautan
              </button>
              <button
                onClick={() => setCurrentView('hero')}
                className="hover:text-[#0F304E] underline cursor-pointer"
              >
                Halaman Sampul
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* Laser Pointer on Smartboard */}
      <LaserPointer isActive={isLaserActive} />

      {/* Floating Smartboard Presenter Controller */}
      <PresenterBar
        currentView={currentView}
        onSelectView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNext={handleNextSlide}
        onPrev={handlePrevSlide}
        onOpenTimer={() => setIsTimerOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
        isLaserActive={isLaserActive}
        onToggleLaser={() => setIsLaserActive((prev) => !prev)}
        isSoundActive={isSoundActive}
        onToggleSound={handleToggleSound}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Classroom Discussion Timer Modal */}
      <ClassroomTimerModal
        isOpen={isTimerOpen}
        onClose={() => setIsTimerOpen(false)}
      />

      {/* Centralized Link Configuration Modal */}
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
      />

    </div>
  );
}
