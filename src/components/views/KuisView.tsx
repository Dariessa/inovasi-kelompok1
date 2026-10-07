import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { QUIZ_ITEMS } from '../../data/config';
import { sound } from '../../utils/audio';

interface KuisViewProps {
  onNavigate: (view: ViewType) => void;
}

export const KuisView: React.FC<KuisViewProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = QUIZ_ITEMS[currentIndex];
  const total = QUIZ_ITEMS.length;

  const handleChoose = (key: string) => {
    if (isAnswered) return;
    sound.playTap();
    setSelectedKey(key);
  };

  const handleConfirmAnswer = () => {
    if (!selectedKey) return;
    setIsAnswered(true);

    const isCorrect = currentQ.options.find((o) => o.key === selectedKey)?.isCorrect;
    if (isCorrect) {
      sound.playCorrect();
      setCorrectAnswersCount((prev) => prev + 1);
    } else {
      sound.playIncorrect();
    }
  };

  const handleNext = () => {
    sound.playTap();
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedKey(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      sound.playCorrect();
    }
  };

  const handleRestart = () => {
    sound.playTap();
    setCurrentIndex(0);
    setSelectedKey(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setIsFinished(false);
  };

  const score = Math.round((correctAnswersCount / total) * 100);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6">
      
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
          Tahap 5 dari 7 · Assessment Kuis
        </span>
      </div>

      {/* Main Scrapbook Quiz Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 text-center relative">
        
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>

        {!isFinished ? (
          <div>
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-handwriting font-bold uppercase tracking-wider text-[#2B79A6] bg-[#E0F0FA] px-3.5 py-1 rounded-full border border-[#2B79A6]/30 mb-2">
              <span className="text-base">📝</span>
              <span>KUIS PEMAHAMAN MANDIRI</span>
            </div>

            <div className="text-sm font-mono font-bold text-[#0F304E]/70 mb-4">
              Soal {currentIndex + 1} dari {total}
            </div>

            {/* Custom Progress Bar Doodle */}
            <div className="max-w-md mx-auto mb-8 relative">
              <div className="h-2.5 bg-[#E0F0FA] rounded-full overflow-hidden border border-[#0F304E]/15">
                <div 
                  className="h-full bg-gradient-to-r from-[#2B79A6] to-[#38BDF8] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="text-left bg-[#F0F7FD] p-6 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook mb-6 -rotate-0.5">
              <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0F304E] mb-5 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Radio Options List */}
              <div className="space-y-3 font-sans">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedKey === opt.key;
                  let itemStyle = 'bg-white hover:bg-[#E0F0FA] border-[#0F304E]/20 text-[#0F304E] shadow-xs';

                  if (isAnswered) {
                    if (opt.isCorrect) {
                      itemStyle = 'bg-emerald-100 border-emerald-600 text-emerald-950 font-bold';
                    } else if (isSelected && !opt.isCorrect) {
                      itemStyle = 'bg-rose-100 border-rose-500 text-rose-950';
                    } else {
                      itemStyle = 'opacity-50 bg-white/50 border-slate-200 text-[#0F304E]';
                    }
                  } else if (isSelected) {
                    itemStyle = 'bg-[#BAE6FD]/40 border-[#0F304E] text-[#0F304E] font-bold shadow-sm';
                  }

                  return (
                    <div
                      key={opt.key}
                      onClick={() => handleChoose(opt.key)}
                      className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3 text-xs sm:text-sm ${itemStyle}`}
                    >
                      <span className="w-5 h-5 rounded-full border-2 border-current flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-current"></span>}
                      </span>
                      <span className="flex-1 leading-relaxed">
                        <strong className="mr-1">{opt.key}.</strong> {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Explanation note */}
              {isAnswered && (
                <div className="mt-5 p-4 bg-[#E0F0FA] rounded-2xl border-2 border-[#2B79A6]/30 text-xs sm:text-sm text-[#0F304E] leading-relaxed animate-fadeIn font-sans">
                  <strong className="text-[#2B79A6] font-handwriting text-sm block mb-1">Penjelasan Hikmah:</strong>
                  {currentQ.explanation}
                </div>
              )}
            </div>

            {/* Answer / Next Button */}
            <div className="flex justify-center">
              {!isAnswered ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={!selectedKey}
                  className={`px-8 py-3.5 rounded-2xl font-heading font-extrabold text-xs sm:text-sm transition-all border-2 ${
                    selectedKey
                      ? 'bg-[#0F304E] hover:bg-[#1a4a75] text-white border-[#0F304E] shadow-scrapbook-btn cursor-pointer'
                      : 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed'
                  }`}
                >
                  [ JAWAB ]
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-8 py-3.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn transition-all cursor-pointer flex items-center gap-2 border-2 border-[#0F304E]"
                >
                  <span>{currentIndex < total - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Kuis'}</span>
                  <i className="fa-solid fa-arrow-right text-[#38BDF8] text-xs"></i>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Sertifikat / Kartu Kelulusan Scrapbook */
          <div className="py-6 max-w-md mx-auto relative">
            <div className="washi-tape washi-tape-sky w-28 -top-3 left-1/2 -translate-x-1/2"></div>
            
            <div className="bg-[#FFFFFF] rounded-3xl p-7 border-2 border-[#0F304E]/20 shadow-scrapbook rotate-[1deg]">
              <div className="text-5xl mb-2">🎉</div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F304E] mb-1">
                KUIS SELESAI
              </h3>
              <p className="text-xs text-[#2B79A6] mb-5 font-handwriting font-bold text-sm">
                Sertifikat Evaluasi Belajar Keikhlasan
              </p>

              <div className="bg-[#E0F0FA] rounded-2xl p-5 border border-[#2B79A6]/30 mb-5">
                <div className="text-xs text-[#0F304E]/70 font-semibold mb-1">Skor Kamu:</div>
                <div className="text-5xl font-mono font-extrabold text-[#0F304E] mb-2">
                  {score} <span className="text-base text-[#2B79A6]">/ 100</span>
                </div>
                <p className="font-doodle text-xl text-[#2B79A6] font-bold">
                  “Terus belajar dan perbaiki niatmu.”
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#F0F7FD] hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 font-handwriting font-bold text-xs transition-colors cursor-pointer"
                >
                  Ulangi Kuis
                </button>

                <button
                  onClick={() => {
                    sound.playTap();
                    onNavigate('refleksi');
                  }}
                  className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs shadow-scrapbook-btn transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-[#0F304E]"
                >
                  <span>Lanjut ke Refleksi</span>
                  <i className="fa-solid fa-arrow-right text-[#38BDF8]"></i>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
