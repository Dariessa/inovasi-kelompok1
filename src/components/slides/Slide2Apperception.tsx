import React, { useState } from 'react';
import { APPERCEPTION_POLLS } from '../../data/learningContent';
import { sound } from '../../utils/audio';

export const Slide2Apperception: React.FC = () => {
  const [selectedPollIndex, setSelectedPollIndex] = useState(0);
  const [userVote, setUserVote] = useState<{ [pollId: number]: string | null }>({});
  const [showAnalysis, setShowAnalysis] = useState<{ [pollId: number]: boolean }>({});

  const currentPoll = APPERCEPTION_POLLS[selectedPollIndex];
  const currentVote = userVote[currentPoll.id] || null;
  const isRevealed = showAnalysis[currentPoll.id] || false;

  const handleVote = (optionId: string) => {
    sound.playTap();
    setUserVote((prev) => ({ ...prev, [currentPoll.id]: optionId }));
    setShowAnalysis((prev) => ({ ...prev, [currentPoll.id]: true }));
    sound.playCorrect();
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Slide Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Slide 02 · Apersepsi & Pemantik Nalar
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Uji Kompas Niat: Dilema Remaja di Era Digital
          </h2>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          {APPERCEPTION_POLLS.map((poll, idx) => (
            <button
              key={poll.id}
              onClick={() => {
                sound.playTap();
                setSelectedPollIndex(idx);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedPollIndex === idx
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Kasus {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage & Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Context & Problem Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg mb-4">
              <i className="fa-solid fa-lightbulb"></i>
            </div>
            
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              {currentPoll.title}
            </span>
            <h3 className="text-xl font-heading font-bold text-white mt-1 mb-3">
              Konteks Nyata Kehidupan
            </h3>
            
            <p className="text-slate-200 text-sm leading-relaxed mb-6 bg-slate-800/70 p-4 rounded-2xl border border-slate-700/60">
              "{currentPoll.context}"
            </p>

            <div className="text-xs text-slate-400 border-t border-slate-800 pt-4 flex items-center gap-2">
              <i className="fa-solid fa-users text-emerald-400"></i>
              <span>Sentuh opsi di samping untuk melakukan voting kelas live.</span>
            </div>
          </div>

          {/* Teacher Prompt Callout */}
          <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-4 text-xs text-emerald-200">
            <span className="font-semibold text-emerald-300 block mb-1">
              <i className="fa-solid fa-chalkboard-user mr-1.5"></i>
              Instruksi Pengajar:
            </span>
            Ajak 2-3 perwakilan siswa mengemukakan argumen mereka di depan kelas sebelum tombol solusi dibuka!
          </div>
        </div>

        {/* Right Side: Interactive Options & Live Chart */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-bold">?</span>
              {currentPoll.question}
            </h3>

            <div className="space-y-3">
              {currentPoll.options.map((opt) => {
                const isSelected = currentVote === opt.id;
                return (
                  <div key={opt.id} className="flex flex-col gap-2">
                    <button
                      onClick={() => handleVote(opt.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 text-sm font-medium ${
                        isSelected
                          ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-md ring-1 ring-emerald-500'
                          : 'bg-slate-800/70 hover:bg-slate-800 border-slate-700/80 text-slate-200 hover:border-slate-600'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-emerald-500 text-slate-950' 
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {opt.id}
                      </span>
                      <div className="flex-1">
                        <span>{opt.text}</span>
                        {/* Vote percentage bar when revealed */}
                        {isRevealed && (
                          <div className="mt-2.5">
                            <div className="flex items-center justify-between text-xs text-slate-400 mb-1 font-mono">
                              <span>Konsensus Responden:</span>
                              <span className="font-bold text-white">{opt.votes}%</span>
                            </div>
                            <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                              <div
                                className={`h-full transition-all duration-700 rounded-full ${
                                  isSelected ? 'bg-emerald-400' : 'bg-slate-600'
                                }`}
                                style={{ width: `${opt.votes}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>

                    {/* Immediate Analytical Feedback */}
                    {isRevealed && isSelected && (
                      <div className="p-3.5 bg-slate-800/90 border border-emerald-500/40 rounded-xl text-xs text-slate-200 animate-fadeIn">
                        <span className="font-bold text-emerald-400 block mb-1">
                          <i className="fa-solid fa-circle-info mr-1"></i>
                          Analisis Perspektif Syariat:
                        </span>
                        {opt.analysis}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Reset / Change Vote button */}
            {isRevealed && (
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Status: <span className="text-emerald-400 font-medium">Jawaban Tersimpan</span>
                </span>
                <button
                  onClick={() => {
                    sound.playTap();
                    setShowAnalysis((prev) => ({ ...prev, [currentPoll.id]: false }));
                    setUserVote((prev) => ({ ...prev, [currentPoll.id]: null }));
                  }}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Ulangi Voting Kelas
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
