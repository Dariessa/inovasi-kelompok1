import React, { useState } from 'react';
import { REFLECTION_QUESTIONS } from '../../data/learningContent';
import { sound } from '../../utils/audio';

export const Slide8Refleksi: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'muhasabah' | 'rangkuman' | 'doa'>('muhasabah');
  const [reflectionAnswers, setReflectionAnswers] = useState<{ [qId: number]: number }>({});
  const [isPlayingDoa, setIsPlayingDoa] = useState(false);

  const handleSelectReflection = (qId: number, score: number) => {
    sound.playTap();
    setReflectionAnswers((prev) => ({ ...prev, [qId]: score }));
  };

  const answeredCount = Object.keys(reflectionAnswers).length;
  const totalScore = Object.values(reflectionAnswers).reduce((acc, curr) => acc + curr, 0);
  const maxPossible = REFLECTION_QUESTIONS.length * 3;
  const percentage = maxPossible > 0 ? Math.round((totalScore / maxPossible) * 100) : 0;

  const handlePrint = () => {
    sound.playTap();
    window.print();
  };

  const handlePlayDoa = () => {
    sound.playPeaceChime();
    setIsPlayingDoa(true);
    sound.speakText("Subhanakallahumma wa bihamdika, asyhadu alla ilaha illa anta, astaghfiruka wa atubu ilaik.", "ar-SA");
    setTimeout(() => setIsPlayingDoa(false), 5500);
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Slide 08 · Muhasabah & Penutup Majelis
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Refleksi Diri, Rangkuman & Doa Penutup
          </h2>
        </div>

        {/* Action and Tab Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => { sound.playTap(); setActiveTab('muhasabah'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'muhasabah' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Muhasabah Niat
            </button>
            <button
              onClick={() => { sound.playTap(); setActiveTab('rangkuman'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'rangkuman' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Rangkuman Materi
            </button>
            <button
              onClick={() => { sound.playTap(); setActiveTab('doa'); }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'doa' ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Doa Penutup
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Cetak Rangkuman Materi untuk Catatan Siswa"
          >
            <i className="fa-solid fa-print text-emerald-400"></i>
            <span className="hidden sm:inline">Cetak PDF</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Muhasabah Niat (Self-Audit) */}
      {activeTab === 'muhasabah' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <i className="fa-solid fa-clipboard-check"></i>
                Instrumen Audit Niat Pribadi (Self-Check)
              </div>
              <p className="text-xs text-slate-300 mb-6">
                Jawablah dengan sejujur-jujurnya di dalam batin masing-masing untuk mengukur kesehatan kompas keikhlasan kita:
              </p>

              <div className="space-y-6">
                {REFLECTION_QUESTIONS.map((q, idx) => {
                  const currentScore = reflectionAnswers[q.id];
                  return (
                    <div key={q.id} className="border-b border-slate-800/80 pb-5 last:border-b-0 last:pb-0">
                      <div className="text-xs sm:text-sm font-semibold text-white mb-3">
                        <span className="text-emerald-400 font-mono mr-1.5">0{idx + 1}.</span>
                        {q.question}
                      </div>

                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = currentScore === opt.score;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectReflection(q.id, opt.score)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition-all cursor-pointer flex items-center justify-between ${
                                isSelected
                                  ? 'bg-emerald-600/20 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500'
                                  : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60 text-slate-300'
                              }`}
                            >
                              <span>{opt.label}</span>
                              {isSelected && <i className="fa-solid fa-check text-emerald-400 ml-2"></i>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Radar Result Card */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl text-center flex-1 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-3">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-1">
                  Indeks Kebugaran Niat
                </h3>
                <span className="text-xs text-slate-400">
                  {answeredCount} dari {REFLECTION_QUESTIONS.length} pertanyaan dijawab
                </span>

                <div className="my-6">
                  <div className="text-4xl font-mono font-bold text-emerald-400 mb-1">
                    {percentage}%
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden max-w-xs mx-auto">
                    <div 
                      className="bg-emerald-500 h-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-left leading-relaxed">
                  <strong className="text-emerald-300 block mb-1">Pesan Muhasabah:</strong>
                  {percentage >= 80 
                    ? "Alhamdulillah, arah kompas hati Anda dominan tertuju kepada Allah. Pertahankan dengan senantiasa memohon ketetapan hati (istitsna' & doa ya muqallibal qulub)."
                    : percentage >= 50
                    ? "Hati Anda masih sering bergejolak antara mengharap ridha Allah dan keinginan diapresiasi manusia. Teruslah membersihkan niat di setiap awal, tengah, dan akhir amal."
                    : "Waspadalah dari perangkap riya' dan ketergantungan pada pujian makhluk. Jadikan amalan tersembunyi sebagai obat penawar jiwa."}
                </div>
              </div>

              <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3 mt-4">
                "Wahai Dzat yang membolak-balikkan hati, teguhkanlah hatiku di atas agama-Mu."
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Rangkuman Materi (Mind Map Concept) */}
      {activeTab === 'rangkuman' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">Rangkuman Materi Keikhlasan (Kelas XI)</h3>
              <p className="text-xs text-slate-400">Poin Kunci Kurikulum Merdeka Fase F</p>
            </div>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-file-pdf"></i>
              <span>Cetak Ringkasan</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs mb-3 font-mono">
                01
              </span>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Definisi & Esensi</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ikhlas (<em>khalasa</em>) berarti memurnikan niat beramal dari segala noda syirik dan pamrih makhluk, semata-mata mencari keridhaan Allah SWT. Ikhlas adalah ruh dari setiap perbuatan jasad.
              </p>
            </div>

            <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-xs mb-3 font-mono">
                02
              </span>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Dalil Syariat</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                QS. Al-Bayyinah: 5 (perintah beribadah dengan <em>mukhlisīna lahud-dīn</em>), QS. Al-An'am: 162-163 (shalat, ibadah, hidup, mati lillahi ta'ala), dan Hadits Arbain ke-1 (<em>Innamal a'malu bin-niyyat</em>).
              </p>
            </div>

            <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700">
              <span className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs mb-3 font-mono">
                03
              </span>
              <h4 className="font-heading font-bold text-white text-sm mb-2">Perusak & Penawar</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Racun amal: Riya' (ingin dilihat), Sum'ah (ingin didengar), 'Ujub (bangga diri), dan Hasad. Penawarnya adalah merahasiakan amal kebaikan, memperbanyak istighfar, dan menyadari bahwa taufik berasal dari Allah.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Doa Penutup Majelis */}
      {activeTab === 'doa' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl mx-auto mb-4">
            <i className="fa-solid fa-hands-praying"></i>
          </div>

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-2">
            Doa Kafaratul Majelis (Penutup Pertemuan)
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Disunnahkan dibaca bersama-sama di akhir sesi pembelajaran di kelas
          </p>

          <div 
            className="font-arabic text-2xl sm:text-3xl text-emerald-200 leading-loose bg-slate-950 p-6 rounded-2xl border border-slate-800 mb-4"
            dir="rtl"
          >
            سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ
          </div>

          <p className="text-xs text-slate-300 italic mb-6">
            "Maha Suci Engkau ya Allah, dan dengan memuji-Mu. Aku bersaksi bahwa tiada sesembahan yang berhak disembah selain Engkau. Aku memohon ampunan-Mu dan bertaubat kepada-Mu." (HR. At-Tirmidzi)
          </p>

          <button
            onClick={handlePlayDoa}
            className={`px-6 py-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto ${
              isPlayingDoa
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                : 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-700'
            }`}
          >
            <i className={`fa-solid ${isPlayingDoa ? 'fa-volume-high animate-bounce' : 'fa-play text-emerald-400'}`}></i>
            <span>Lafalkan Doa Bersama</span>
          </button>
        </div>
      )}

    </div>
  );
};
