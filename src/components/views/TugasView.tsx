import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface TugasViewProps {
  onNavigate: (view: ViewType) => void;
}

export const TugasView: React.FC<TugasViewProps> = ({ onNavigate }) => {
  const [tugasRumah, setTugasRumah] = useState('');
  const [tugasSekolah, setTugasSekolah] = useState('');
  const [situasiPernah, setSituasiPernah] = useState('');
  const [caraPerbaiki, setCaraPerbaiki] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveLocal = () => {
    sound.playCorrect();
    setIsSaved(true);
  };

  const handlePrint = () => {
    sound.playTap();
    window.print();
  };

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
          Tahap 7 dari 7 · Do (Tugas Individu)
        </span>
      </div>

      {/* Main Scrapbook Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 relative">
        
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* Aesthetic Scrapbook Banner with Cartoon Illustration */}
        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-[#2B79A6]/30 bg-[#E0F0FA] grid grid-cols-1 md:grid-cols-12 items-center text-left shadow-scrapbook relative">
          <div className="p-6 md:col-span-7">
            <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs inline-block mb-2 -rotate-1">
              🌱 Lembar Aksi Nyata Pelajar Muslim
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F304E] tracking-tight">
              TUGAS & AKSI NYATA
            </h2>
            <p className="text-xs sm:text-sm text-[#0F304E]/80 mt-1 leading-relaxed font-sans">
              Saatnya mempraktikkan ilmu keikhlasan dalam kehidupan sehari-hari di rumah dan sekolah tanpa pamrih kamera.
            </p>
          </div>
          <div className="md:col-span-5 h-44 md:h-full overflow-hidden p-2.5">
            <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10 shadow-xs h-full">
              <img
                src={ILLUSTRATIONS.tugas}
                alt="Ilustrasi Siswa SMA Bergotong Royong dan Beramal Ikhlas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 3 Kartu Tugas bergaya potongan kertas memo / sticky note */}
        <div className="space-y-6 mb-8">
          
          {/* Section 1: Di Rumah */}
          <div className="bg-[#F0F7FD] rounded-3xl p-5 sm:p-6 border-2 border-[#0F304E]/15 shadow-scrapbook -rotate-0.5 relative">
            <div className="washi-tape washi-tape-sky w-20 -top-2.5 left-8"></div>
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#0F304E]">
                <span className="text-xl">🏠</span>
                <span>DI RUMAH: Tuliskan 2 Contoh Perilaku Ikhlas</span>
              </div>
              <span className="text-[10px] font-handwriting font-bold text-[#2B79A6] bg-white px-2.5 py-0.5 rounded-full border border-[#2B79A6]/20">
                Lingkungan Keluarga
              </span>
            </div>
            <p className="text-xs text-[#0F304E]/70 mb-3 font-sans">
              Perilaku apa yang bisa kamu lakukan secara diam-diam demi meringankan beban orang tua?
            </p>
            <textarea
              value={tugasRumah}
              onChange={(e) => setTugasRumah(e.target.value)}
              placeholder="1. Merapikan tempat tidur dan mencuci piring sendiri tanpa disuruh...&#10;2. Mendoakan orang tua dalam setiap sujud tanpa pamrih..."
              rows={2}
              className="w-full p-3.5 rounded-2xl bg-white border-2 border-[#2B79A6]/25 text-xs sm:text-sm text-[#0F304E] focus:outline-none focus:ring-2 focus:ring-[#2B79A6] resize-none font-sans"
            ></textarea>
          </div>

          {/* Section 2: Di Sekolah */}
          <div className="bg-[#F0F7FD] rounded-3xl p-5 sm:p-6 border-2 border-[#0F304E]/15 shadow-scrapbook rotate-0.5 relative">
            <div className="washi-tape washi-tape-sea w-20 -top-2.5 right-8"></div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#0F304E]">
                <span className="text-xl">🏫</span>
                <span>DI SEKOLAH: Tuliskan 2 Contoh Perilaku Ikhlas</span>
              </div>
              <span className="text-[10px] font-handwriting font-bold text-[#2B79A6] bg-white px-2.5 py-0.5 rounded-full border border-[#2B79A6]/20">
                Lingkungan Sekolah
              </span>
            </div>
            <p className="text-xs text-[#0F304E]/70 mb-3 font-sans">
              Aksi nyata dalam lingkungan kelas, musala sekolah, atau pertemanan:
            </p>
            <textarea
              value={tugasSekolah}
              onChange={(e) => setTugasSekolah(e.target.value)}
              placeholder="1. Memungut sampah yang berserakan di lorong kelas meski bukan jadwal piket saya...&#10;2. Membantu menjelaskan materi pelajaran ke teman yang kesulitan tanpa merasa lebih pintar..."
              rows={2}
              className="w-full p-3.5 rounded-2xl bg-white border-2 border-[#2B79A6]/25 text-xs sm:text-sm text-[#0F304E] focus:outline-none focus:ring-2 focus:ring-[#2B79A6] resize-none font-sans"
            ></textarea>
          </div>

          {/* Section 3: Studi Situasi & Solusi Hati */}
          <div className="bg-[#F0F7FD] rounded-3xl p-5 sm:p-6 border-2 border-[#0F304E]/15 shadow-scrapbook -rotate-0.5 relative">
            <div className="washi-tape washi-tape-sky w-24 -top-2.5 left-1/2 -translate-x-1/2"></div>

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm font-heading font-extrabold text-[#0F304E]">
                <span className="text-xl">🤔</span>
                <span>SITUASI & PERBAIKAN NIAT</span>
              </div>
              <span className="text-[10px] font-handwriting font-bold text-[#2B79A6] bg-white px-2.5 py-0.5 rounded-full border border-[#2B79A6]/30">
                Studi Kasus Hati
              </span>
            </div>
            
            <div className="space-y-4 font-sans">
              <div>
                <label className="text-xs font-semibold text-[#0F304E] block mb-1.5">
                  1. Pernahkah kamu merasa ingin dipuji setelah berbuat baik? Ceritakan singkat situasinya:
                </label>
                <textarea
                  value={situasiPernah}
                  onChange={(e) => setSituasiPernah(e.target.value)}
                  placeholder="Pernah, waktu menyumbang dalam kegiatan bakti sosial di sekolah..."
                  rows={2}
                  className="w-full p-3 rounded-2xl bg-white border-2 border-[#2B79A6]/25 text-xs text-[#0F304E] focus:outline-none focus:ring-2 focus:ring-[#2B79A6] resize-none"
                ></textarea>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#0F304E] block mb-1.5">
                  ✨ 2. Bagaimana cara kamu memperbaiki niat tersebut agar kembali murni karena Allah?
                </label>
                <textarea
                  value={caraPerbaiki}
                  onChange={(e) => setCaraPerbaiki(e.target.value)}
                  placeholder="Segera membaca istighfar, mengingat bahwa rezeki yang saya infakkan adalah titipan Allah, dan berdoa agar dijauhkan dari riya'..."
                  rows={2}
                  className="w-full p-3 rounded-2xl bg-white border-2 border-[#2B79A6]/25 text-xs text-[#0F304E] focus:outline-none focus:ring-2 focus:ring-[#2B79A6] resize-none"
                ></textarea>
              </div>
            </div>
          </div>

        </div>

        {/* Kartu Doa Penutup Majelis (Kafaratul Majelis) ala Sticky Note Scrapbook */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border-2 border-[#2B79A6]/30 shadow-scrapbook my-8 rotate-[-0.5deg] relative text-center">
          <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F0FA] text-xs font-handwriting font-bold text-[#2B79A6] mb-3 border border-[#2B79A6]/20">
            <span>🤲</span>
            <span>DOA PENUTUP MAJELIS BELAJAR (KAFARATUL MAJELIS)</span>
          </div>

          <div className="font-arabic text-xl sm:text-3xl text-[#0F304E] leading-loose my-3" dir="rtl">
            سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ
          </div>

          <p className="text-xs sm:text-sm text-[#0F304E]/85 italic max-w-xl mx-auto mb-2 font-sans">
            “Maha Suci Engkau, ya Allah, dan dengan memuji-Mu. Aku bersaksi bahwa tiada sesembahan yang berhak disembah selain Engkau. Aku memohon ampunan kepada-Mu dan bertaubat kepada-Mu.”
          </p>

          <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-[#2B79A6] font-handwriting font-bold">
            <span>(HR. Tirmidzi & Abu Dawud)</span>
            <span>✦</span>
            <button
              onClick={() => {
                sound.playCorrect();
              }}
              className="text-xs text-[#0F304E] hover:text-[#2B79A6] underline flex items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-volume-high text-[#38BDF8]"></i>
              <span>Lafalkan Bersama</span>
            </button>
          </div>
        </div>

        {/* Action Buttons: Google Form & Save */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#0F304E]/15">
          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveLocal}
              className="px-5 py-3 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-scrapbook-btn border-2 border-[#0F304E] cursor-pointer"
            >
              <i className="fa-solid fa-floppy-disk text-[#38BDF8]"></i>
              <span>{isSaved ? 'Jawaban Tersimpan ✓' : 'Simpan di Layar'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-3 rounded-2xl bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-2 border-[#0F304E]/20 font-handwriting font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Cetak Lembar Tugas"
            >
              <i className="fa-solid fa-print text-[#2B79A6]"></i>
              <span className="hidden sm:inline">Cetak PDF</span>
            </button>
          </div>

          {/* Primary Action Button: Kerjakan via Google Form */}
          {LEARNING_CONFIG.linkEksternal.googleFormTugas && (
            <a
              href={LEARNING_CONFIG.linkEksternal.googleFormTugas}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#2B79A6] hover:bg-[#1e5d82] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn border-2 border-[#0F304E] transition-all flex items-center justify-center gap-2"
            >
              <span>[ 📝 KERJAKAN DI GOOGLE FORM ]</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          )}
        </div>

      </div>

    </div>
  );
};
