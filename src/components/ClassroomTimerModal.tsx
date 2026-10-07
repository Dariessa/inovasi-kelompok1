import React, { useState, useEffect, useRef } from 'react';
import { sound } from '../utils/audio';

interface ClassroomTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClassroomTimerModal: React.FC<ClassroomTimerModalProps> = ({ isOpen, onClose }) => {
  const [initialSeconds, setInitialSeconds] = useState(180); // default 3 minutes
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      timerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            sound.playTimerBell();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const setPreset = (sec: number) => {
    sound.playTap();
    setIsRunning(false);
    setInitialSeconds(sec);
    setSecondsLeft(sec);
  };

  const toggleRun = () => {
    sound.playTap();
    if (secondsLeft === 0) {
      setSecondsLeft(initialSeconds);
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    sound.playTap();
    setIsRunning(false);
    setSecondsLeft(initialSeconds);
  };

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const progressPercent = initialSeconds > 0 ? ((initialSeconds - secondsLeft) / initialSeconds) * 100 : 0;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white border-2 border-[#0F304E]/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-scrapbook-lg text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>

        <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
          <div className="flex items-center gap-2 text-[#0F304E] font-heading font-bold text-sm">
            <i className="fa-solid fa-stopwatch text-[#2B79A6] text-base"></i>
            <span>Timer Diskusi Kelas Smartboard</span>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] flex items-center justify-center transition-colors cursor-pointer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Big Digit Display for Back of Class */}
        <div className="my-8">
          <div className={`text-6xl sm:text-7xl font-mono font-extrabold tracking-tight transition-colors tabular-nums ${
            secondsLeft === 0 
              ? 'text-rose-500 animate-pulse' 
              : secondsLeft < 30 
              ? 'text-amber-500' 
              : 'text-[#0F304E]'
          }`}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-[#E0F0FA] rounded-full h-2.5 mt-6 overflow-hidden border border-[#0F304E]/15">
            <div 
              className={`h-full transition-all duration-1000 ${
                secondsLeft === 0 ? 'bg-rose-500' : 'bg-gradient-to-r from-[#2B79A6] to-[#38BDF8]'
              }`}
              style={{ width: `${100 - progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="grid grid-cols-3 gap-2 mb-6 font-sans">
          <button
            onClick={() => setPreset(60)}
            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              initialSeconds === 60 && !isRunning
                ? 'bg-[#0F304E] border-[#0F304E] text-white shadow-xs'
                : 'bg-[#E0F0FA] border-[#0F304E]/15 text-[#0F304E] hover:bg-[#BAE6FD]'
            }`}
          >
            1 Menit (Kilat)
          </button>
          <button
            onClick={() => setPreset(180)}
            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              initialSeconds === 180 && !isRunning
                ? 'bg-[#0F304E] border-[#0F304E] text-white shadow-xs'
                : 'bg-[#E0F0FA] border-[#0F304E]/15 text-[#0F304E] hover:bg-[#BAE6FD]'
            }`}
          >
            3 Menit (Standar)
          </button>
          <button
            onClick={() => setPreset(300)}
            className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              initialSeconds === 300 && !isRunning
                ? 'bg-[#0F304E] border-[#0F304E] text-white shadow-xs'
                : 'bg-[#E0F0FA] border-[#0F304E]/15 text-[#0F304E] hover:bg-[#BAE6FD]'
            }`}
          >
            5 Menit (Kelompok)
          </button>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={toggleRun}
            className={`px-6 py-3 rounded-xl font-heading font-bold text-sm flex items-center gap-2 shadow-scrapbook-btn border-2 border-[#0F304E] transition-all cursor-pointer ${
              isRunning 
                ? 'bg-[#38BDF8] hover:bg-[#0284C7] text-[#0F304E]' 
                : 'bg-[#0F304E] hover:bg-[#1a4a75] text-white'
            }`}
          >
            <i className={`fa-solid ${isRunning ? 'fa-pause' : 'fa-play'}`}></i>
            <span>{isRunning ? 'Jeda' : secondsLeft === 0 ? 'Mulai Lagi' : 'Mulai Timer'}</span>
          </button>

          <button
            onClick={resetTimer}
            className="px-4 py-3 rounded-xl font-semibold text-sm bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] border-2 border-[#0F304E]/20 transition-colors cursor-pointer shadow-xs"
            title="Reset ke awal"
          >
            <i className="fa-solid fa-rotate-left"></i>
          </button>
        </div>

      </div>
    </div>
  );
};
