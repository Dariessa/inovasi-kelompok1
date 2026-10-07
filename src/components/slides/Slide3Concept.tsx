import React, { useState } from 'react';
import { sound } from '../../utils/audio';

export const Slide3Concept: React.FC = () => {
  // Interactive Heart Filtration Lab State
  const [filterLevel, setFilterLevel] = useState<number>(50); // 0 (Kotor/Riya') to 100 (Murni Ikhlas)
  const [activeTier, setActiveTier] = useState<number>(2); // 1, 2, or 3

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setFilterLevel(val);
    if (val === 100) {
      sound.playCorrect();
    }
  };

  // Calculations for Niat composition based on slider
  const pureLillah = filterLevel;
  const riyaImpurity = Math.round((100 - filterLevel) * 0.55);
  const sumahImpurity = 100 - pureLillah - riyaImpurity;

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-6">
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
          Slide 03 · Konsep Dasar & Laboratorium Hati
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
          Hakikat & Derajat Keikhlasan dalam Beramal
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Etymology, Terminology, Quranic Milk Analogy */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          
          {/* Etymology Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                <i className="fa-solid fa-book-quran"></i>
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base">Etimologi & Terminologi</h3>
                <span className="text-xs text-slate-400">Akar Kata: خَلَصَ (Khalasa)</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Secara bahasa bermakna <strong className="text-emerald-400">murni, jernih, dan bersih</strong> dari segala sesuatu yang mencemarinya. Sesuatu dikatakan <em>khālis</em> jika terbebas dari partikel asing.
            </p>

            <blockquote className="bg-slate-800/70 border-l-2 border-emerald-500 p-3 rounded-r-xl text-xs text-slate-300 italic mb-3">
              "Ikhlas adalah menyucikan perbuatan dari pandangan makhluk, sehingga tujuannya hanya semata-mata mencari keridhaan Sang Khaliq."
              <footer className="not-italic text-[10px] text-emerald-400 font-semibold mt-1">
                — Imam Al-Ghazali (Ihya' 'Ulumiddin)
              </footer>
            </blockquote>

            {/* Susu Murni Analogy */}
            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                <i className="fa-solid fa-droplet text-cyan-400"></i>
                Analogi Al-Qur'an: Susu Murni (QS. An-Nahl: 66)
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Allah mengumpamakan keikhlasan seperti susu murni (<em>labanan khālishan</em>) yang keluar dari antara kotoran dan darah di perut ternak, namun tetap putih, bersih, tanpa noda, serta sedap diminum.
              </p>
            </div>
          </div>

          {/* 3 Tingkatan Ikhlas Tabs */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl">
            <h3 className="font-heading font-bold text-white text-sm mb-3 flex items-center gap-2">
              <i className="fa-solid fa-stairs text-amber-400 text-xs"></i>
              3 Derajat Keikhlasan (Ibnu Atha'illah)
            </h3>

            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950 rounded-xl mb-3 border border-slate-800">
              <button
                onClick={() => { sound.playTap(); setActiveTier(1); }}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTier === 1 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. 'Ubbad
              </button>
              <button
                onClick={() => { sound.playTap(); setActiveTier(2); }}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTier === 2 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Muhibbin
              </button>
              <button
                onClick={() => { sound.playTap(); setActiveTier(3); }}
                className={`py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  activeTier === 3 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3. 'Arifin
              </button>
            </div>

            {activeTier === 1 && (
              <div className="text-xs text-slate-300 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <span className="font-bold text-emerald-400 block mb-1">Tingkat Awwam (Ibadah Pekerja)</span>
                Beramal mengharapkan pahala, surga, dan keberkahan rezeki duniawi, serta takut akan siksa neraka. Niatnya tetap sah di sisi Allah, namun berorientasi transaksional.
              </div>
            )}
            {activeTier === 2 && (
              <div className="text-xs text-slate-300 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <span className="font-bold text-teal-400 block mb-1">Tingkat Pecinta (Ibadah Syukur)</span>
                Beramal semata-mata karena cinta mendalam, pengagungan, dan rasa syukur atas nikmat Allah, tanpa pamrih imbalan surga maupun ketakutan neraka (seperti doa Rabi'ah Al-Adawiyah).
              </div>
            )}
            {activeTier === 3 && (
              <div className="text-xs text-slate-300 bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/60">
                <span className="font-bold text-amber-400 block mb-1">Tingkat Makrifat (Puncak Tauhid)</span>
                Memandang dirinya tidak memiliki daya beramal sama sekali. Seluruh gerakan ibadah diyakini semata-mata taufik dan karunia Allah. Tidak ada ruang tersisa untuk rasa bangga diri ('ujub).
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Interactive Heart Filtration Laboratory */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base sm:text-lg">
                      Laboratorium Filtrasi Hati (Simulator Niat)
                    </h3>
                    <span className="text-xs text-slate-400">Geser tuas di Smartboard untuk memurnikan niat beramal</span>
                  </div>
                </div>

                {/* Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide ${
                  filterLevel >= 90
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : filterLevel >= 50
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  {filterLevel >= 90 ? '● AMAL MAQBUL (IKHLAS)' : filterLevel >= 50 ? '▲ TERCAMPUR PAMRIH' : '✖ BERBAHAYA (RIYA\')'}
                </div>
              </div>

              {/* Heart Graphic / Simulation Visualizer */}
              <div className="bg-slate-950/80 rounded-2xl p-6 border border-slate-800 text-center relative overflow-hidden mb-6">
                
                {/* Glowing Core Heart Icon */}
                <div className="relative inline-block mb-3">
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-4xl transition-all duration-500 mx-auto"
                    style={{
                      backgroundColor: filterLevel >= 80 ? 'rgba(16, 185, 129, 0.25)' : filterLevel >= 40 ? 'rgba(245, 158, 11, 0.25)' : 'rgba(244, 63, 94, 0.25)',
                      boxShadow: filterLevel >= 80 ? '0 0 40px rgba(16, 185, 129, 0.5)' : 'none'
                    }}
                  >
                    <i className={`fa-solid fa-heart transition-all duration-300 ${
                      filterLevel >= 80 ? 'text-emerald-400 scale-110' : filterLevel >= 40 ? 'text-amber-400' : 'text-rose-500'
                    }`}></i>
                  </div>
                </div>

                <div className="text-sm font-bold text-white mb-1">
                  Tingkat Kemurnian Niat: <span className="font-mono text-emerald-400 text-base">{filterLevel}%</span>
                </div>
                <div className="text-xs text-slate-400 max-w-md mx-auto">
                  {filterLevel === 100 
                    ? 'Subhanallah! Hati bersih mutlak, hanya mengharap ridha Allah semata (Ikhlas Khalis).' 
                    : filterLevel >= 70
                    ? 'Cukup baik, namun masih ada sisa keinginan diapresiasi manusia. Terus istighfar.'
                    : 'Waspada! Dominasi riya\' dan sum\'ah dapat menggugurkan seluruh pahala amal.'}
                </div>

                {/* Visual Composition Bar */}
                <div className="mt-5 max-w-lg mx-auto">
                  <div className="flex h-4 rounded-full overflow-hidden bg-slate-800 border border-slate-700">
                    <div 
                      className="bg-emerald-500 transition-all duration-300"
                      style={{ width: `${pureLillah}%` }}
                      title={`Ridho Allah: ${pureLillah}%`}
                    ></div>
                    <div 
                      className="bg-rose-500 transition-all duration-300"
                      style={{ width: `${riyaImpurity}%` }}
                      title={`Riya' (Pamer Mata): ${riyaImpurity}%`}
                    ></div>
                    <div 
                      className="bg-amber-500 transition-all duration-300"
                      style={{ width: `${sumahImpurity}%` }}
                      title={`Sum'ah (Pamer Telinga): ${sumahImpurity}%`}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      Lillahi Ta'ala: <strong className="text-white font-mono">{pureLillah}%</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      Riya': <strong className="text-white font-mono">{riyaImpurity}%</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                      Sum'ah: <strong className="text-white font-mono">{sumahImpurity}%</strong>
                    </span>
                  </div>
                </div>

              </div>

              {/* Slider Control for Smartboard Touch */}
              <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200 mb-2">
                  <span className="flex items-center gap-1.5">
                    <i className="fa-solid fa-sliders text-emerald-400"></i>
                    Tuas Filter Niat (Tarik ke kanan untuk menyucikan):
                  </span>
                  <span className="font-mono text-emerald-300 font-bold">{filterLevel} / 100</span>
                </div>
                
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={filterLevel}
                  onChange={handleSliderChange}
                  className="w-full h-3 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />

                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>10% (Terkontaminasi Riya')</span>
                  <span>50% (Bercampur)</span>
                  <span className="text-emerald-400 font-bold">100% (Murni Lillah)</span>
                </div>

                {/* Instant Quick Action Buttons */}
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-700">
                  <button
                    onClick={() => { sound.playTap(); setFilterLevel(25); }}
                    className="flex-1 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-750 text-rose-300 border border-slate-700 cursor-pointer"
                  >
                    Simulasi: Terjangkit Riya'
                  </button>
                  <button
                    onClick={() => { sound.playTap(); setFilterLevel(60); }}
                    className="flex-1 py-1.5 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-750 text-amber-300 border border-slate-700 cursor-pointer"
                  >
                    Simulasi: Niat Ganda
                  </button>
                  <button
                    onClick={() => { sound.playCorrect(); setFilterLevel(100); }}
                    className="flex-1 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600/30 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500 cursor-pointer font-bold"
                  >
                    Saring 100% Ikhlas
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
