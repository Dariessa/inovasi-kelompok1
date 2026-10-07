import React, { useState } from 'react';
import { CLASSIFICATION_ITEMS } from '../../data/learningContent';
import { FilterItem } from '../../types';
import { sound } from '../../utils/audio';

export const Slide5PenyakitHati: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'anatomi' | 'komparasi' | 'game'>('anatomi');

  // Mini-Game State
  const [answers, setAnswers] = useState<{ [id: string]: 'ikhlas' | 'penyakit' | null }>({});
  const [score, setScore] = useState<number | null>(null);

  const handleClassify = (item: FilterItem, choice: 'ikhlas' | 'penyakit') => {
    sound.playTap();
    setAnswers((prev) => ({ ...prev, [item.id]: choice }));
    if (choice === item.type) {
      sound.playCorrect();
    } else {
      sound.playIncorrect();
    }
  };

  const calculateScore = () => {
    sound.playTap();
    let correctCount = 0;
    CLASSIFICATION_ITEMS.forEach((it) => {
      if (answers[it.id] === it.type) correctCount++;
    });
    setScore(correctCount);
    if (correctCount >= 5) {
      sound.playCorrect();
    }
  };

  const resetGame = () => {
    sound.playTap();
    setAnswers({});
    setScore(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header & Tabs */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
            Slide 05 · Anatomi Penyakit Hati & Diagnosis
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Perusak Keikhlasan & Game Klasifikasi Amal
          </h2>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => { sound.playTap(); setActiveTab('anatomi'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'anatomi' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            4 Racun Hati
          </button>
          <button
            onClick={() => { sound.playTap(); setActiveTab('komparasi'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'komparasi' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            Komparasi: Mukhlis vs Mura'i
          </button>
          <button
            onClick={() => { sound.playTap(); setActiveTab('game'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'game' ? 'bg-rose-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
            }`}
          >
            <i className="fa-solid fa-gamepad mr-1"></i>
            Game Smartboard
          </button>
        </div>
      </div>

      {/* Tab 1: Anatomi 4 Racun Hati */}
      {activeTab === 'anatomi' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Riya' */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-eye"></i>
              </div>
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wide">Penyakit Pandangan</div>
              <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">Riya' (الرِّيَاء)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Melakukan ibadah dengan tujuan agar <strong>dilihat dan dipuji</strong> oleh manusia. Rasulullah SAW menyebutnya sebagai <em>Syirik Ashghar</em> (Syirik Kecil) yang sangat samar seperti semut hitam di atas batu hitam pada malam gulita.
              </p>
            </div>
            <div className="text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-400">
              <strong className="text-rose-400">Contoh:</strong> Memperpanjang sujud dan tilawah saat menyadari ada orang memperhatikan.
            </div>
          </div>

          {/* Card 2: Sum'ah */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-ear-listen"></i>
              </div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Penyakit Pendengaran</div>
              <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">Sum'ah (السُّمْعَة)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Menceritakan atau <strong>memperdengarkan amal kebaikan</strong> yang telah lalu dan tersembunyi kepada orang lain dengan harapan mendapatkan kedudukan, sanjungan, dan nama harum di masyarakat.
              </p>
            </div>
            <div className="text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-400">
              <strong className="text-amber-400">Contoh:</strong> Menyelipkan obrolan: "Kemarin malam waktu saya sedekah ke panti asuhan..."
            </div>
          </div>

          {/* Card 3: 'Ujub */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-crown"></i>
              </div>
              <div className="text-xs font-bold text-purple-400 uppercase tracking-wide">Penyakit Ego Batin</div>
              <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">'Ujub (العُجْب)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Merasa <strong>kagum dan takjub pada keshalihan diri</strong> sendiri serta merasa berjasa di hadapan Allah, sembari melupakan bahwa hidayah dan tenaga beramal adalah murni anugerah dari Allah.
              </p>
            </div>
            <div className="text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-400">
              <strong className="text-purple-400">Contoh:</strong> Merasa diri lebih suci dan selamat dibanding kawan yang belum sholat tahajud.
            </div>
          </div>

          {/* Card 4: Hasad */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg mb-3">
                <i className="fa-solid fa-fire"></i>
              </div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wide">Penyakit Kedengkian</div>
              <h3 className="text-xl font-heading font-bold text-white mt-1 mb-2">Hasad (الحَسَد)</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Rasa tidak senang bila orang lain beramal lebih baik atau mendapat amanah dakwah/prestasi lebih tinggi, disertai harapan agar kenikmatan tersebut lenyap dari orang tersebut.
              </p>
            </div>
            <div className="text-[11px] bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-slate-400">
              <strong className="text-cyan-400">Dampak:</strong> Hasad memakan kebaikan bagaikan api melahap kayu bakar yang kering.
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Komparasi Mukhlis vs Mura'i */}
      {activeTab === 'komparasi' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
            <i className="fa-solid fa-scale-balanced text-emerald-400"></i>
            Tabel Komparasi Karakteristik Hati (Atsar Ali bin Abi Thalib RA)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Mukhlis Column */}
            <div className="bg-emerald-950/20 border border-emerald-800/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4">
                <i className="fa-solid fa-circle-check"></i>
                Karakteristik Orang Ikhlas (Al-Mukhlis)
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Konsistensi Batin:</strong> Sama giatnya beribadah saat berada di kesendirian kamar maupun di masjid sekolah.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Kekebalan Mental:</strong> Dipuji manusia tidak terbang (menjadi sombong), dicela manusia tidak tumbang (berhenti berbuat baik).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Menyembunyikan Kebaikan:</strong> Lebih senang merahasiakan sedekah sebagaimana ia menyembunyikan aib dosanya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Rasa Khauf (Cemas):</strong> Senantiasa cemas apakah amalnya diterima oleh Allah atau tertolak karena noda niat.</span>
                </li>
              </ul>
            </div>

            {/* Mura'i Column */}
            <div className="bg-rose-950/20 border border-rose-800/40 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-4">
                <i className="fa-solid fa-triangle-exclamation"></i>
                Karakteristik Orang Riya' (Al-Mura'i)
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Malas Bersendirian:</strong> Ibadah terasa berat dan hambar jika tidak ada orang lain yang menyaksikan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Tergantung Pujian:</strong> Semangat berlipat ganda bila mendapat apresiasi, namun langsung mogok beramal bila tidak dihargai.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Haus Validasi:</strong> Gemar menceritakan kebaikan masa lalu dalam forum pergaulan agar dianggap shalih/alim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span><strong>Merasa Aman:</strong> Merasa yakin pasti masuk surga karena menganggap tabungan amalnya sudah sangat banyak ('Ujub).</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* Tab 3: Mini-Game Klasifikasi Smartboard */}
      {activeTab === 'game' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <i className="fa-solid fa-gamepad text-emerald-400"></i>
                Game Smartboard: Saring & Klasifikasikan Perbuatan
              </h3>
              <p className="text-xs text-slate-400">
                Sentuh tombol hijau (Ikhlas Murni) atau tombol merah (Penyakit Hati) untuk setiap skenario nyata di bawah ini!
              </p>
            </div>

            {score !== null && (
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-300">
                  Skor Anda: <strong className="text-emerald-400 font-mono text-base">{score} / {CLASSIFICATION_ITEMS.length}</strong>
                </span>
                <button
                  onClick={resetGame}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 cursor-pointer"
                >
                  Main Ulang
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {CLASSIFICATION_ITEMS.map((item, idx) => {
              const currentChoice = answers[item.id];
              const isSubmitted = currentChoice !== undefined && currentChoice !== null;
              const isCorrect = currentChoice === item.type;

              return (
                <div 
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isSubmitted
                      ? isCorrect
                        ? 'bg-emerald-950/30 border-emerald-500/60 ring-1 ring-emerald-500/30'
                        : 'bg-rose-950/30 border-rose-500/60 ring-1 ring-rose-500/30'
                      : 'bg-slate-800/70 border-slate-700/80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold text-slate-400">Kasus #{idx + 1}</span>
                    {isSubmitted && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${
                        isCorrect ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
                      }`}>
                        {isCorrect ? '✓ TEPAT' : '✕ KELIRU'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 font-medium mb-3">
                    "{item.label}"
                  </p>

                  {/* Buttons for Smartboard touch */}
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => handleClassify(item, 'ikhlas')}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        currentChoice === 'ikhlas'
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-slate-900/90 hover:bg-slate-900 text-emerald-300 border border-emerald-900/60'
                      }`}
                    >
                      <i className="fa-solid fa-heart text-[10px]"></i>
                      <span>Ikhlas Murni</span>
                    </button>

                    <button
                      onClick={() => handleClassify(item, 'penyakit')}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        currentChoice === 'penyakit'
                          ? 'bg-rose-600 text-white shadow-md'
                          : 'bg-slate-900/90 hover:bg-slate-900 text-rose-300 border border-rose-900/60'
                      }`}
                    >
                      <i className="fa-solid fa-triangle-exclamation text-[10px]"></i>
                      <span>Penyakit Hati</span>
                    </button>
                  </div>

                  {/* Clarification Note after answering */}
                  {isSubmitted && (
                    <div className="text-[11px] text-slate-400 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
                      <strong className="text-slate-200">Kategori:</strong> {item.category} — {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {score === null && Object.keys(answers).length === CLASSIFICATION_ITEMS.length && (
            <div className="text-center pt-2">
              <button
                onClick={calculateScore}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl cursor-pointer"
              >
                Cek Skor Evaluasi Permainan
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
