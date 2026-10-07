import React, { useState } from 'react';
import { QURAN_BAYYINAH_WORDS } from '../../data/learningContent';
import { QuranWord } from '../../types';
import { sound } from '../../utils/audio';

export const Slide4Dalil: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<QuranWord | null>(QURAN_BAYYINAH_WORDS[5]); // Default to "Mukhlisīna"
  const [activeTab, setActiveTab] = useState<'bayyinah' | 'anam' | 'hadits'>('bayyinah');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleWordClick = (word: QuranWord) => {
    sound.playTap();
    setSelectedWord(word);
  };

  const playRecitation = (textToSpeak: string, lang: 'ar-SA' | 'id-ID' = 'ar-SA') => {
    sound.playPeaceChime();
    setIsPlayingAudio(true);
    sound.speakText(textToSpeak, lang);
    setTimeout(() => setIsPlayingAudio(false), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 sm:px-6">
      
      {/* Header & Source Switcher */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
            Slide 04 · Dalil Naqli Al-Qur'an & Hadits
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            Fondasi Syariat: Kajian Teks & Makna Mendalam
          </h2>
        </div>

        {/* Dalil Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => { sound.playTap(); setActiveTab('bayyinah'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'bayyinah'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            QS. Al-Bayyinah: 5 (Interaktif)
          </button>
          <button
            onClick={() => { sound.playTap(); setActiveTab('anam'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'anam'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            QS. Al-An'am: 162-163
          </button>
          <button
            onClick={() => { sound.playTap(); setActiveTab('hadits'); }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === 'hadits'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Hadits Niat & Ummu Qais
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'bayyinah' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left / Top: Interactive Arabic Mushaf (Word by Word) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                    <i className="fa-solid fa-quran"></i>
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">QS. Al-Bayyinah [98]: Ayat 5</h3>
                    <span className="text-xs text-slate-400">Sentuh setiap lafaz di Smartboard untuk membedah maknanya</span>
                  </div>
                </div>

                <button
                  onClick={() => playRecitation("Wa mā umirū illā liya'budullāha mukhlisīna lahud-dīna hunafā'")}
                  className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                    isPlayingAudio
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm'
                      : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-750'
                  }`}
                  title="Dengarkan pelafalan ayat"
                >
                  <i className={`fa-solid ${isPlayingAudio ? 'fa-volume-high animate-bounce' : 'fa-play text-emerald-400'}`}></i>
                  <span>Lafal Ayat</span>
                </button>
              </div>

              {/* Full Arabic Verses with Clickable Interactive Word Tokens */}
              <div 
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 mb-6 flex flex-wrap-reverse justify-center gap-2 sm:gap-3 items-center leading-loose"
                dir="rtl"
              >
                {QURAN_BAYYINAH_WORDS.map((w) => {
                  const isSelected = selectedWord?.id === w.id;
                  return (
                    <button
                      key={w.id}
                      onClick={() => handleWordClick(w)}
                      className={`font-arabic text-2xl sm:text-3xl px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg ring-2 ring-emerald-300 scale-105'
                          : 'bg-slate-900/90 text-emerald-100 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {w.arabic}
                    </button>
                  );
                })}
              </div>

              {/* Complete Translation */}
              <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <span className="font-semibold text-emerald-400 block mb-1">Terjemahan Lengkap Kemenag RI:</span>
                "Padahal mereka tidak diperintahkan melainkan supaya menyembah Allah dengan memurnikan ketaatan kepada-Nya dalam (menjalankan) agama yang lurus..."
              </div>
            </div>
          </div>

          {/* Right / Bottom: Word Detail & Balaghah Analysis Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex-1 flex flex-col justify-between">
              {selectedWord ? (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Analisis Kata Terpilih #{selectedWord.id}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {selectedWord.transliteration}
                    </span>
                  </div>

                  {/* Word Big Showcase */}
                  <div className="bg-slate-950 rounded-2xl p-5 text-center border border-slate-800 mb-4">
                    <div className="font-arabic text-4xl text-emerald-300 mb-2 font-bold" dir="rtl">
                      {selectedWord.arabic}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">
                      {selectedWord.meaning}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      Transliterasi: {selectedWord.transliteration}
                    </div>
                  </div>

                  {/* Balaghah & Tafsir Note */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                    <div className="text-xs font-bold text-teal-400 flex items-center gap-1.5 mb-2">
                      <i className="fa-solid fa-graduation-cap"></i>
                      Tinjauan Balaghah & Tafsir:
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {selectedWord.tafsirNote}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Sentuh salah satu kata pada ayat di sebelah kiri untuk melihat rinciannya.
                </div>
              )}

              <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3 mt-4 flex items-center justify-between">
                <span>Kitab Rujukan: Tafsir Ibnu Katsir & Al-Maraghi</span>
                <span className="text-emerald-400">Fase F · Bab Keikhlasan</span>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: QS. Al-An'am: 162-163 */}
      {activeTab === 'anam' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-heading font-bold text-white">QS. Al-An'am [6]: Ayat 162-163</h3>
              <p className="text-xs text-slate-400">Ikrar Totalitas Kehidupan & Ibadah Lillahi Ta'ala (Doa Iftitah)</p>
            </div>
            <button
              onClick={() => playRecitation("Qul inna shalaatii wa nusukii wa mahyaaya wa mamaatii lillaahi rabbil 'aalamiin")}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-play text-emerald-400"></i>
              <span>Lafalkan Ayat</span>
            </button>
          </div>

          <div 
            className="font-arabic text-2xl sm:text-3xl text-emerald-100 text-center leading-loose bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 mb-6"
            dir="rtl"
          >
            قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ ۝ لَا شَرِيكَ لَهُ ۖ وَبِذَٰلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">Kandungan Makna Utama:</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Empat dimensi eksistensi manusia: <strong>Shalat</strong> (ibadah ritual), <strong>Nusuk</strong> (ibadah kurban & sosial), <strong>Mahyāya</strong> (seluruh dinamika waktu hidup), dan <strong>Mamātī</strong> (kondisi husnul khatimah) dipersembahkan mutlak hanya bagi Allah SWT.
              </p>
            </div>
            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60">
              <span className="text-xs font-semibold text-teal-400 block mb-1">Aplikasi Pelajar Muslim:</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Belajar di sekolah, mengerjakan tugas kelompok, berolahraga, dan menjaga kesehatan adalah bagian dari <em>mahyāya</em> yang bernilai ibadah bila diawali niat lillahi ta'ala.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Hadits Arbain No. 1 & Kisah Hijrah Ummu Qais */}
      {activeTab === 'hadits' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
              <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold">
                <i className="fa-solid fa-scroll"></i>
              </span>
              <div>
                <h3 className="font-heading font-bold text-white text-base">Hadits Arbain An-Nawawi Ke-1</h3>
                <span className="text-xs text-slate-400">HR. Al-Bukhari No. 1 & Muslim No. 1907 (Umar bin Khattab RA)</span>
              </div>
            </div>

            <div 
              className="font-arabic text-xl sm:text-2xl text-amber-200 text-center leading-loose bg-slate-950/80 p-5 rounded-2xl border border-slate-800 mb-4"
              dir="rtl"
            >
              إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوِ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              "Sesungguhnya setiap amal perbuatan itu dinilai berdasarkan niatnya. Dan setiap orang hanya akan mendapatkan apa yang ia niatkan..."
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <i className="fa-solid fa-landmark"></i>
                Asbabul Wurud: Kisah Hijrah Ummu Qais
              </div>
              <h4 className="font-heading font-bold text-white text-base mb-3">
                Peringatan Spiritual Lintas Zaman
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Latar belakang hadits ini berkaitan dengan seorang pria yang turut menempuh perjalanan berat hijrah dari Makkah ke Madinah. Namun tujuannya bukan karena cinta kepada Allah dan Rasul-Nya, melainkan demi menikahi seorang wanita muslimah bernama Ummu Qais yang mempersyaratkan hijrah sebagai mahar.
              </p>
              <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-3.5 text-xs text-amber-200">
                <strong className="block mb-1 text-amber-300">Pelajaran Emas (Hikmah):</strong>
                Amal lahiriahnya sama persis dengan para sahabat yang berjihad dan berhijrah, namun pahala akhiratnya hancur karena niatnya terikat pada target duniawi semata.
              </div>
            </div>

            <div className="text-[11px] text-slate-500 border-t border-slate-800 pt-3 mt-4">
              Konsep: Niat adalah ruh bagi setiap jasad perbuatan fisik manusia.
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
