import React, { useState } from 'react';
import { CASE_STUDIES } from '../../data/learningContent';
import { sound } from '../../utils/audio';

interface Slide6StudiKasusProps {
  onOpenTimer: () => void;
}

export const Slide6StudiKasus: React.FC<Slide6StudiKasusProps> = ({ onOpenTimer }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [revealedSolutions, setRevealedSolutions] = useState<{ [caseId: number]: boolean }>({});

  const currentCase = CASE_STUDIES[activeCaseIndex];
  const isRevealed = revealedSolutions[currentCase.id] || false;

  const toggleSolution = () => {
    sound.playTap();
    setRevealedSolutions((prev) => ({
      ...prev,
      [currentCase.id]: !prev[currentCase.id]
    }));
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
            Slide 06 · Studi Kasus & Pemecahan Masalah Kolaboratif
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Forum Diskusi Kelas: Dilema Moral Pelajar Muslim
          </h2>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          {CASE_STUDIES.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => {
                sound.playTap();
                setActiveCaseIndex(idx);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeCaseIndex === idx
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kasus #{idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Case Scenario Presentation */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {currentCase.tagline}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Skenario #{currentCase.id}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
                {currentCase.title}
              </h3>

              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-sm sm:text-base text-slate-200 leading-relaxed mb-6">
                "{currentCase.scenario}"
              </div>

              {/* Dilemma Question Callout */}
              <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/50 mb-6">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wide block mb-1">
                  <i className="fa-solid fa-question-circle mr-1.5"></i>
                  Pertanyaan Kunci untuk Didiskusikan:
                </span>
                <p className="text-sm font-semibold text-white">
                  {currentCase.dilemmaQuestion}
                </p>
              </div>

              {/* Reflection Bullet Points */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Poin Pemantik Diskusi Kelompok:
                </span>
                {currentCase.reflectionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 font-mono">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action: Start Discussion Timer */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  sound.playTap();
                  onOpenTimer();
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-400 border border-amber-500/30 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-colors"
              >
                <i className="fa-solid fa-stopwatch"></i>
                <span>Mulai Timer Diskusi (3 Menit)</span>
              </button>

              <button
                onClick={toggleSolution}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <i className={`fa-solid ${isRevealed ? 'fa-eye-slash' : 'fa-lightbulb'}`}></i>
                <span>{isRevealed ? 'Sembunyikan Solusi' : 'Buka Pandangan Syariat'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Islamic Perspective & Solution Panel */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl flex-1 flex flex-col justify-between">
            {isRevealed ? (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider pb-3 border-b border-slate-800">
                  <i className="fa-solid fa-scale-balanced text-sm"></i>
                  Kesimpulan & Tinjauan Fikih-Akhlak
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80">
                  <span className="text-xs font-bold text-emerald-300 block mb-1">
                    Perspektif Ulama & Al-Qur'an:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentCase.islamicPerspective}
                  </p>
                </div>

                <div className="bg-emerald-950/30 p-4 rounded-2xl border border-emerald-800/50">
                  <span className="text-xs font-bold text-emerald-400 block mb-1">
                    <i className="fa-solid fa-check-circle mr-1"></i>
                    Rekomendasi Tindakan Terpuji:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentCase.recommendedAction}
                  </p>
                </div>

                <div className="text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <strong className="text-white">Tips untuk Guru:</strong> Berikan apresiasi kepada kelompok yang mampu menemukan benang merah antara sabar, ikhlas, dan konsistensi beramal.
                </div>
              </div>
            ) : (
              <div className="text-center py-16 text-slate-400 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/80 text-amber-400 flex items-center justify-center text-2xl mb-4">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <h4 className="text-base font-bold text-white mb-2">Sesi Diskusi Sedang Berlangsung</h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-4">
                  Beri waktu peserta didik bermusyawarah di kelompok masing-masing, kemudian tekan tombol "Buka Pandangan Syariat" di bawah.
                </p>
                <button
                  onClick={toggleSolution}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline cursor-pointer"
                >
                  Tampilkan Pandangan Syariat Sekarang
                </button>
              </div>
            )}

            <div className="text-[10px] text-slate-500 border-t border-slate-800 pt-3 mt-4 text-center">
              Kurikulum Merdeka: Mengembangkan Kompetensi Bernalar Kritis & Kolaborasi
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
