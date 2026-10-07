import React, { useState } from 'react';
import { LEARNING_OBJECTIVES } from '../../data/learningContent';
import { sound } from '../../utils/audio';

interface Slide1CoverProps {
  onStartLearning: () => void;
}

export const Slide1Cover: React.FC<Slide1CoverProps> = ({ onStartLearning }) => {
  const [isPlayingBasmalah, setIsPlayingBasmalah] = useState(false);
  const [activeTab, setActiveTab] = useState<'cp_tp' | 'profil' | 'panduan'>('cp_tp');

  const handlePlayBasmalah = () => {
    sound.playPeaceChime();
    setIsPlayingBasmalah(true);
    sound.speakText("Bismillahirrahmanirrahim. Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.", "id-ID");
    setTimeout(() => setIsPlayingBasmalah(false), 4500);
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6">
      
      {/* Hero Welcome Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle geometric islamic pattern effect */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Header Metadata: Unboxed Text with Separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-emerald-400 font-medium mb-4">
          <span className="font-semibold text-white tracking-wide">{LEARNING_OBJECTIVES.subject}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{LEARNING_OBJECTIVES.classLevel}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-emerald-300/90">{LEARNING_OBJECTIVES.phase}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight max-w-4xl mb-4">
          Hakikat Keikhlasan dalam Beramal: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Memurnikan Niat Menuju Ridha Ilahi
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
          Media pembelajaran digital interaktif berstandar Smartboard untuk membedah filosofi ikhlas, mengidentifikasi bahaya penyakit riya' & sum'ah, serta membedah studi kasus nyata di era digital.
        </p>

        {/* Call to action & Basmalah Audio Trigger */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <button
            onClick={() => {
              sound.playTap();
              onStartLearning();
            }}
            className="px-6 sm:px-8 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-bold text-base shadow-xl flex items-center gap-3 transition-all cursor-pointer"
          >
            <span>Mulai Pembelajaran Kelas</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>

          <button
            onClick={handlePlayBasmalah}
            className={`px-5 py-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-2.5 font-medium text-sm ${
              isPlayingBasmalah
                ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 shadow-lg'
                : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700 text-slate-200'
            }`}
          >
            <i className={`fa-solid ${isPlayingBasmalah ? 'fa-volume-high text-emerald-400 animate-bounce' : 'fa-play text-slate-400'} text-xs`}></i>
            <span className="font-arabic text-lg leading-none">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
          </button>
        </div>

        {/* Interactive Tabbed Section: CP & TP / Profil Pelajar Pancasila / Petunjuk Smartboard */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex items-center gap-2 p-1 bg-slate-950/60 rounded-xl max-w-fit mb-6 border border-slate-800">
            <button
              onClick={() => { sound.playTap(); setActiveTab('cp_tp'); }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'cp_tp' 
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Capaian & Tujuan Pembelajaran (CP & TP)
            </button>
            <button
              onClick={() => { sound.playTap(); setActiveTab('profil'); }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'profil' 
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dimensi Profil Pelajar Pancasila
            </button>
            <button
              onClick={() => { sound.playTap(); setActiveTab('panduan'); }}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'panduan' 
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Fitur Guru & Smartboard
            </button>
          </div>

          {/* Tab 1: CP & TP */}
          {activeTab === 'cp_tp' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  Capaian Pembelajaran (Fase F)
                </div>
                <p className="leading-relaxed text-slate-200">
                  {LEARNING_OBJECTIVES.cp}
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">
                  Tujuan Pembelajaran Terukur (TP)
                </div>
                <ul className="space-y-2">
                  {LEARNING_OBJECTIVES.tp.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-slate-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 2: Dimensi Profil Pelajar Pancasila */}
          {activeTab === 'profil' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <i className="fa-solid fa-hands-praying"></i>
                </div>
                <h4 className="font-semibold text-white mb-1">Beriman & Bertakwa</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Menghadirkan kesadaran muraqabah (selalu diawasi Allah SWT) dalam setiap perbuatan lahiriah maupun bisikan batin.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center mb-3">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <h4 className="font-semibold text-white mb-1">Bernalar Kritis</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mampu menganalisis motivasi di balik tindakan sehari-hari dan membedakan antara syiar kebaikan vs penyakit riya'.
                </p>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <i className="fa-solid fa-user-shield"></i>
                </div>
                <h4 className="font-semibold text-white mb-1">Integritas Diri</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Memiliki konsistensi antara apa yang ditampakkan di depan khalayak dengan apa yang dilakukan dalam kesendirian.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Panduan Smartboard */}
          {activeTab === 'panduan' && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
                <div className="font-semibold text-amber-400 mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  Layar Sentuh Smartboard
                </div>
                Tombol dan kartu didesain ekstra besar (min. 48px) agar responsif disentuh jari atau stylus di papan interaktif.
              </div>
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
                <div className="font-semibold text-rose-400 mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-bullseye"></i>
                  Laser Pointer Virtual
                </div>
                Tekan tombol <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">L</kbd> untuk mengaktifkan titik laser merah guna memandu fokus pandangan siswa.
              </div>
              <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl">
                <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-2">
                  <i className="fa-solid fa-stopwatch"></i>
                  Classroom Timer
                </div>
                Tekan tombol <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-slate-300 font-mono">T</kbd> kapan saja untuk membatasi durasi tanya jawab dan diskusi studi kasus.
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
