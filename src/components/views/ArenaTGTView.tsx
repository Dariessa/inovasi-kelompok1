import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { TGT_QUESTIONS, LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface ArenaTGTViewProps {
  onNavigate: (view: ViewType) => void;
}

interface TeamScore {
  id: number;
  name: string;
  mascot: string;
  badgeBg: string;
  stars: number;
}

export const ArenaTGTView: React.FC<ArenaTGTViewProps> = ({ onNavigate }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [activeAnsweringTeam, setActiveAnsweringTeam] = useState<number>(1);
  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  // Teams with custom mascots in sea blue themes
  const [teams, setTeams] = useState<TeamScore[]>([
    { id: 1, name: 'TIM 1', mascot: '🦅 Rajawali Ikhlas', badgeBg: 'bg-sky-50 text-sky-950 border-sky-400', stars: 20 },
    { id: 2, name: 'TIM 2', mascot: '🐬 Lumba Istiqamah', badgeBg: 'bg-blue-50 text-blue-950 border-blue-400', stars: 15 },
    { id: 3, name: 'TIM 3', mascot: '🦁 Singa Sabar', badgeBg: 'bg-cyan-50 text-cyan-950 border-cyan-400', stars: 25 },
    { id: 4, name: 'TIM 4', mascot: '🦄 Ksatria Syukur', badgeBg: 'bg-indigo-50 text-indigo-950 border-indigo-400', stars: 20 }
  ]);

  const currentQ = TGT_QUESTIONS[currentQuestionIndex];

  const adjustScore = (teamId: number, delta: number) => {
    sound.playTap();
    setTeams((prev) =>
      prev.map((t) => (t.id === teamId ? { ...t, stars: Math.max(0, t.stars + delta) } : t))
    );
  };

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D', isCorrect: boolean) => {
    if (isAnswerRevealed) return;
    sound.playTap();
    setSelectedOptionKey(key);
    setIsAnswerRevealed(true);

    if (isCorrect) {
      sound.playCorrect();
      setTeams((prev) =>
        prev.map((t) => (t.id === activeAnsweringTeam ? { ...t, stars: t.stars + currentQ.points } : t))
      );
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    sound.playTap();
    if (currentQuestionIndex < TGT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionKey(null);
      setIsAnswerRevealed(false);
      setActiveAnsweringTeam((prev) => (prev % 4) + 1);
    } else {
      setIsPlaying(false);
      sound.playCorrect();
    }
  };

  const winningTeam = [...teams].sort((a, b) => b.stars - a.stars)[0];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Top Breadcrumb */}
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
          Tahap 4 dari 7 · Turnamen TGT Scrapbook
        </span>
      </div>

      {/* Main Scrapbook Tournament Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 text-center relative">
        
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-sky w-36 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* Banner Scrapbook */}
        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-[#2B79A6]/30 bg-[#E0F0FA] grid grid-cols-1 md:grid-cols-12 items-center shadow-scrapbook relative">
          <div className="p-6 md:col-span-7 text-left">
            <span className="text-xs font-handwriting font-bold uppercase tracking-wider text-[#0F304E] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs inline-flex items-center gap-1.5 mb-2 -rotate-1">
              <span>🏆</span>
              <span>Turnamen Kelompok TGT</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F304E] tracking-tight">
              ARENA IKHLAS
            </h2>
            <p className="text-xs sm:text-sm text-[#0F304E]/80 mt-1 leading-relaxed font-sans">
              Jawab pertanyaan bergilir di layar Smartboard, kumpulkan bintang ⭐ sebanyak-banyaknya untuk timmu!
            </p>
          </div>
          <div className="md:col-span-5 h-44 md:h-full overflow-hidden p-2.5">
            <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10 shadow-xs h-full">
              <img
                src={ILLUSTRATIONS.arenaTgt}
                alt="Ilustrasi Turnamen Ceria Kelompok Belajar Siswa SMA"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 4 Team Scoreboard Grid ala Papan Turnamen Scrapbook */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 mb-8">
          {teams.map((team, idx) => {
            const isActive = isPlaying && activeAnsweringTeam === team.id;
            const rotationClass = idx % 2 === 0 ? '-rotate-1' : 'rotate-1';
            return (
              <div
                key={team.id}
                onClick={() => {
                  if (isPlaying) {
                    sound.playTap();
                    setActiveAnsweringTeam(team.id);
                  }
                }}
                className={`p-4 rounded-3xl border-2 transition-all cursor-pointer relative ${rotationClass} hover:rotate-0 ${
                  isActive
                    ? `${team.badgeBg} border-[#2B79A6] shadow-scrapbook-lg ring-2 ring-[#2B79A6] scale-105`
                    : `${team.badgeBg} border-[#0F304E]/15 shadow-scrapbook`
                }`}
              >
                {isActive && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F304E] text-white text-[10px] font-handwriting font-bold px-2.5 py-0.5 rounded-full shadow-xs whitespace-nowrap border border-white/30">
                    GILIRAN JAWAB
                  </span>
                )}

                <div className="font-heading font-extrabold text-sm sm:text-base text-[#0F304E]">
                  {team.name}
                </div>

                <div className="text-[11px] font-handwriting font-bold text-[#2B79A6] mt-0.5 mb-1 truncate">
                  {team.mascot}
                </div>

                <div className="text-xl sm:text-2xl font-mono font-extrabold text-[#0F304E] flex items-center justify-center gap-1 my-1">
                  <span>{team.stars}</span>
                  <span className="text-[#38BDF8]">⭐</span>
                </div>

                {/* Score Adjuster Buttons (+ / -) for Smartboard teacher */}
                <div className="flex items-center justify-center gap-1.5 mt-2 pt-2 border-t border-black/10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      adjustScore(team.id, -5);
                    }}
                    className="w-7 h-7 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] text-xs font-bold flex items-center justify-center border border-[#0F304E]/20 shadow-xs cursor-pointer active:scale-90"
                    title="Kurangi 5 Bintang"
                  >
                    -
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      adjustScore(team.id, 5);
                    }}
                    className="w-7 h-7 rounded-xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] text-xs font-bold flex items-center justify-center border border-[#0F304E]/20 shadow-xs cursor-pointer active:scale-90"
                    title="Tambah 5 Bintang"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* GAME CONTENT: LOBBY OR ACTIVE ROUND */}
        {!isPlaying ? (
          /* Lobby Screen */
          <div className="py-6 max-w-md mx-auto">
            <div className="bg-[#FFFFFF] rounded-3xl p-5 border-2 border-[#0F304E]/15 text-xs sm:text-sm text-[#0F304E] leading-relaxed mb-6 text-left shadow-scrapbook font-sans -rotate-1">
              <strong className="block mb-1 text-[#0F304E] font-handwriting font-bold text-base flex items-center gap-2">
                <span>🎮</span>
                <span>Aturan Main Turnamen TGT:</span>
              </strong>
              1. Guru membagi kelas menjadi 4 Tim.<br />
              2. Setiap tim bergiliran menjawab soal di layar Smartboard.<br />
              3. Jawaban benar menghasilkan bintang ⭐ untuk tim tersebut!<br />
              4. Tim dengan perolehan bintang terbanyak menjadi Juara Turnamen!
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  sound.playCorrect();
                  setIsPlaying(true);
                  setCurrentQuestionIndex(0);
                  setIsAnswerRevealed(false);
                  setSelectedOptionKey(null);
                }}
                className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-base shadow-scrapbook-btn transition-all cursor-pointer flex items-center justify-center gap-3 border-2 border-[#0F304E]"
              >
                <span>MULAI GAME TGT</span>
                <i className="fa-solid fa-play text-[#38BDF8]"></i>
              </button>

              {/* Optional external Wordwall link */}
              {LEARNING_CONFIG.linkEksternal.wordwallGame && (
                <a
                  href={LEARNING_CONFIG.linkEksternal.wordwallGame}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 font-handwriting font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[#2B79A6]"></i>
                  <span>Buka di Wordwall</span>
                </a>
              )}
            </div>
          </div>
        ) : (
          /* Active Question Stage */
          <div className="text-left bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#0F304E]/15 mb-6 shadow-scrapbook -rotate-0.5 relative">
            
            {/* Round & Active Team Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#0F304E]/15 font-sans">
              <span className="text-xs font-handwriting font-bold uppercase tracking-wider text-[#2B79A6] text-sm">
                Babak {currentQ.round} · Soal #{currentQ.id} dari {TGT_QUESTIONS.length}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#0F304E]/70">Giliran Menjawab:</span>
                <span className="px-3 py-1 rounded-full bg-[#0F304E] text-white text-xs font-bold font-mono shadow-xs">
                  TIM {activeAnsweringTeam} (+{currentQ.points} ⭐)
                </span>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0F304E] mb-6 leading-relaxed">
              ❓ {currentQ.question}
            </h3>

            {/* Big Touch Buttons: A, B, C, D Scrapbook Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOptionKey === opt.key;
                let btnStyle = 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs';

                if (isAnswerRevealed) {
                  if (opt.isCorrect) {
                    btnStyle = 'bg-blue-600 text-white border-blue-700 font-bold shadow-md';
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = 'bg-rose-500 text-white border-rose-600';
                  } else {
                    btnStyle = 'opacity-40 bg-white/50 text-[#0F304E] border-slate-200';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key, opt.isCorrect)}
                    disabled={isAnswerRevealed}
                    className={`p-4 rounded-2xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer font-medium text-xs sm:text-sm font-sans ${btnStyle}`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 font-handwriting ${
                      isAnswerRevealed && opt.isCorrect
                        ? 'bg-white text-blue-900'
                        : isSelected && !opt.isCorrect
                        ? 'bg-white text-rose-800'
                        : 'bg-[#E0F0FA] text-[#0F304E] border border-[#0F304E]/15'
                    }`}>
                      {opt.key}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation card after answered */}
            {isAnswerRevealed && (
              <div className="bg-[#E0F0FA] p-4 rounded-2xl border-2 border-[#2B79A6]/30 mb-6 animate-fadeIn text-xs sm:text-sm text-[#0F304E] leading-relaxed shadow-xs font-sans">
                <strong className="text-[#2B79A6] font-handwriting text-sm block mb-1">
                  💡 Hikmah Penjelasan:
                </strong>
                {currentQ.explanation}
              </div>
            )}

            {/* Next Round Button */}
            {isAnswerRevealed && (
              <div className="flex items-center justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn transition-all cursor-pointer flex items-center gap-2 border-2 border-[#0F304E]"
                >
                  <span>{currentQuestionIndex < TGT_QUESTIONS.length - 1 ? 'Soal Berikutnya' : 'Selesaikan Turnamen'}</span>
                  <i className="fa-solid fa-arrow-right text-[#38BDF8] text-xs"></i>
                </button>
              </div>
            )}

          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-[#0F304E]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#0F304E] font-sans">
          <span>Juara Sementara: <strong className="font-handwriting text-sm text-[#2B79A6]">{winningTeam.name} ({winningTeam.stars} ⭐)</strong></span>
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('kuis');
            }}
            className="text-[#0F304E] hover:text-[#2B79A6] font-handwriting font-bold text-sm flex items-center gap-1 cursor-pointer"
          >
            <span>Lanjut ke Kuis Pemahaman</span>
            <i className="fa-solid fa-arrow-right text-[#2B79A6]"></i>
          </button>
        </div>

      </div>

    </div>
  );
};
