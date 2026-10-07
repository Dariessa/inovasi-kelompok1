import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/learningContent';
import { sound } from '../../utils/audio';

export const Slide7Evaluasi: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: number]: string }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const userChoice = selectedAnswers[currentQ.id];

  const handleSelectOption = (optId: string, isCorrect: boolean) => {
    if (userChoice) return; // already answered
    sound.playTap();
    setSelectedAnswers((prev) => ({ ...prev, [currentQ.id]: optId }));
    setShowExplanation(true);
    if (isCorrect) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const handleNext = () => {
    sound.playTap();
    setShowExplanation(false);
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
      sound.playCorrect();
    }
  };

  const restartQuiz = () => {
    sound.playTap();
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate results
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q) => {
    const selectedOpt = q.options.find((o) => o.id === selectedAnswers[q.id]);
    if (selectedOpt?.isCorrect) correctCount++;
  });
  const scorePercent = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="max-w-5xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Slide 07 · Asesmen Formatif & Kuis Smartboard
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Uji Pemahaman Materi: Asesmen Interaktif
          </h2>
        </div>

        {!isFinished && (
          <div className="text-xs font-mono bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl text-emerald-300">
            Soal <span className="font-bold text-white">{currentIdx + 1}</span> dari {totalQuestions}
          </div>
        )}
      </div>

      {!isFinished ? (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
            ></div>
          </div>

          {/* Question Text */}
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-white mb-6 leading-relaxed">
            {currentQ.question}
          </h3>

          {/* Options Grid */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt) => {
              const isSelected = userChoice === opt.id;
              const hasAnswered = !!userChoice;

              let btnStyle = 'bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 text-slate-200';
              if (hasAnswered) {
                if (opt.isCorrect) {
                  btnStyle = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 font-bold ring-1 ring-emerald-500';
                } else if (isSelected && !opt.isCorrect) {
                  btnStyle = 'bg-rose-600/30 border-rose-500 text-rose-200 ring-1 ring-rose-500';
                } else {
                  btnStyle = 'opacity-50 bg-slate-800/40 border-slate-800 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${btnStyle}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    hasAnswered && opt.isCorrect
                      ? 'bg-emerald-500 text-slate-950'
                      : isSelected && !opt.isCorrect
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-700 text-slate-200'
                  }`}>
                    {opt.id}
                  </span>
                  <span className="text-xs sm:text-sm font-medium leading-relaxed">
                    {opt.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Explanation Section */}
          {showExplanation && (
            <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 sm:p-5 mb-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <i className="fa-solid fa-circle-check"></i>
                  Pembahasan Teologis:
                </span>
                {currentQ.verseRef && (
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                    Rujukan: {currentQ.verseRef}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Row */}
          {userChoice && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{currentIdx < totalQuestions - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Kuis'}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Final Score Board */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
          <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
            <i className={`fa-solid ${scorePercent >= 80 ? 'fa-trophy text-amber-400' : 'fa-award text-emerald-400'}`}></i>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Asesmen Kuis Selesai!
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            Hasil evaluasi pemahaman konsep keikhlasan, dalil syariat, dan diagnosis penyakit riya'.
          </p>

          <div className="max-w-xs mx-auto bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-6">
            <div className="text-xs text-slate-400 font-semibold mb-1">Skor Akhir Siswa:</div>
            <div className="text-5xl font-mono font-bold text-emerald-400 mb-2">
              {scorePercent} <span className="text-lg text-slate-500 font-normal">/ 100</span>
            </div>
            <div className="text-xs text-slate-300">
              Menjawab benar: <strong className="text-white">{correctCount}</strong> dari {totalQuestions} soal
            </div>
            <div className="mt-3 pt-3 border-t border-slate-800 text-xs font-bold text-teal-300">
              Predikat: {scorePercent >= 85 ? 'Mumtaz (Sangat Baik Sekali)' : scorePercent >= 70 ? 'Jayyid Jiddan (Baik)' : 'Maqbul (Perlu Pendalaman)'}
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm cursor-pointer"
            >
              <i className="fa-solid fa-rotate-left mr-2"></i>
              Ulangi Kuis Kelas
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
