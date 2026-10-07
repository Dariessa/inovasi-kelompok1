import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

interface RefleksiViewProps {
  onNavigate: (view: ViewType) => void;
}

export const RefleksiView: React.FC<RefleksiViewProps> = ({ onNavigate }) => {
  const [reflectionText, setReflectionText] = useState('');
  const [motivationChoice, setMotivationChoice] = useState<'menang' | 'belajar' | 'keduanya' | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    sound.playCorrect();
    setIsSaved(true);
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
          Tahap 6 dari 7 · Share (Refleksi Diri)
        </span>
      </div>

      {/* Main Journaling Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 text-center relative">
        
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* Aesthetic Journaling Header Banner */}
        <div className="mb-8 rounded-3xl overflow-hidden border-2 border-[#2B79A6]/30 bg-[#E0F0FA] grid grid-cols-1 md:grid-cols-12 items-center text-left shadow-scrapbook relative">
          <div className="p-6 md:col-span-7">
            <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs inline-block mb-2 -rotate-1">
              💭 Lembar Jurnal Refleksi
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F304E] tracking-tight">
              REFLEKSI & MUHASABAH
            </h2>
            <p className="text-xs sm:text-sm text-[#0F304E]/80 mt-1 leading-relaxed font-sans">
              Saatnya menenangkan pikiran sejenak setelah serunya turnamen. Periksa kembali kompas niatmu di hadapan Allah SWT.
            </p>
          </div>
          <div className="md:col-span-5 h-44 md:h-full overflow-hidden p-2.5">
            <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10 shadow-xs h-full">
              <img
                src={ILLUSTRATIONS.refleksi}
                alt="Ilustrasi Estetik Siswi Menulis Refleksi di Samping Lentera"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Reflection Box 1: Motivasi saat bermain TGT */}
        <div className="bg-[#F0F7FD] rounded-3xl p-6 border-2 border-[#0F304E]/15 text-left mb-6 shadow-scrapbook -rotate-0.5">
          <span className="text-xs font-handwriting font-bold text-[#2B79A6] text-sm uppercase tracking-wide block mb-2">
            Pertanyaan Refleksi #1:
          </span>
          <h3 className="font-doodle text-2xl sm:text-3xl font-bold text-[#0F304E] mb-4">
            “Tadi kamu bermain di Arena TGT karena ingin menang, atau ingin belajar bersama teman?”
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => {
                sound.playTap();
                setMotivationChoice('menang');
              }}
              className={`p-3.5 rounded-2xl border-2 text-xs font-bold transition-all cursor-pointer text-center font-sans ${
                motivationChoice === 'menang'
                  ? 'bg-[#0F304E] text-white border-[#0F304E] shadow-scrapbook-btn -rotate-1'
                  : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs'
              }`}
            >
              🏆 Dominan Ingin Menang
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setMotivationChoice('belajar');
              }}
              className={`p-3.5 rounded-2xl border-2 text-xs font-bold transition-all cursor-pointer text-center font-sans ${
                motivationChoice === 'belajar'
                  ? 'bg-[#2B79A6] text-white border-[#2B79A6] shadow-scrapbook-btn'
                  : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs'
              }`}
            >
              🌊 Ingin Belajar Bersama
            </button>
            <button
              onClick={() => {
                sound.playTap();
                setMotivationChoice('keduanya');
              }}
              className={`p-3.5 rounded-2xl border-2 text-xs font-bold transition-all cursor-pointer text-center font-sans ${
                motivationChoice === 'keduanya'
                  ? 'bg-[#38BDF8] text-[#0F304E] border-[#0F304E] shadow-scrapbook-btn font-extrabold rotate-1'
                  : 'bg-white hover:bg-[#E0F0FA] text-[#0F304E] border-[#0F304E]/20 shadow-xs'
              }`}
            >
              ✨ Semangat Keduanya
            </button>
          </div>
        </div>

        {/* Reflection Box 2: Komitmen Ikhlas Hari Ini */}
        <div className="bg-[#F0F7FD] rounded-3xl p-6 border-2 border-[#0F304E]/15 text-left mb-8 shadow-scrapbook rotate-0.5">
          <span className="text-xs font-handwriting font-bold text-[#2B79A6] text-sm uppercase tracking-wide block mb-2">
            Pertanyaan Refleksi #2:
          </span>
          <h3 className="font-doodle text-2xl sm:text-3xl font-bold text-[#0F304E] mb-3">
            “Apa satu hal tentang keikhlasan yang ingin kamu terapkan mulai hari ini?”
          </h3>

          <textarea
            value={reflectionText}
            onChange={(e) => setReflectionText(e.target.value)}
            placeholder="Contoh: Saya berniat membantu piket kelas dan sholat tanpa perlu memamerkannya ke status media sosial..."
            rows={3}
            className="w-full p-4 rounded-2xl bg-white border-2 border-[#2B79A6]/30 text-xs sm:text-sm text-[#0F304E] focus:outline-none focus:ring-2 focus:ring-[#2B79A6] mb-3 resize-none leading-relaxed shadow-inner font-sans"
          ></textarea>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white text-xs font-heading font-extrabold flex items-center gap-2 cursor-pointer shadow-scrapbook-btn border-2 border-[#0F304E]"
            >
              <i className="fa-solid fa-pen-nib text-[#38BDF8]"></i>
              <span>{isSaved ? 'Refleksi Tersimpan ✓' : '✍️ Simpan Refleksi di Layar'}</span>
            </button>

            {/* Optional Google Form Link */}
            {LEARNING_CONFIG.linkEksternal.googleFormRefleksi && (
              <a
                href={LEARNING_CONFIG.linkEksternal.googleFormRefleksi}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-handwriting font-bold text-[#2B79A6] hover:text-[#0F304E] flex items-center gap-1.5 underline"
              >
                <span>Buka Google Form Refleksi</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              sound.playTap();
              onNavigate('dashboard');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] font-handwriting font-bold text-xs sm:text-sm border border-[#0F304E]/15 transition-colors cursor-pointer"
          >
            🏠 Kembali ke Beranda
          </button>

          <button
            onClick={() => {
              sound.playTap();
              onNavigate('tugas');
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm shadow-scrapbook-btn transition-all cursor-pointer flex items-center justify-center gap-2 border-2 border-[#0F304E]"
          >
            <span>Lanjut ke Tugas Individu</span>
            <i className="fa-solid fa-arrow-right text-[#38BDF8]"></i>
          </button>
        </div>

      </div>

    </div>
  );
};
