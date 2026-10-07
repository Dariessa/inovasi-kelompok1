import React, { useState } from 'react';
import { LEARNING_CONFIG } from '../data/config';
import { sound } from '../utils/audio';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ isOpen, onClose }) => {
  const [videoPemanasanId, setVideoPemanasanId] = useState(LEARNING_CONFIG.videoPemanasan.youtubeId);
  const [videoIceBreakingId, setVideoIceBreakingId] = useState(LEARNING_CONFIG.videoIceBreaking.youtubeId);
  const [videoDalilId, setVideoDalilId] = useState(LEARNING_CONFIG.videoDalil.youtubeId);
  const [wordwallUrl, setWordwallUrl] = useState(LEARNING_CONFIG.linkEksternal.wordwallGame);
  const [formRefleksiUrl, setFormRefleksiUrl] = useState(LEARNING_CONFIG.linkEksternal.googleFormRefleksi);
  const [formTugasUrl, setFormTugasUrl] = useState(LEARNING_CONFIG.linkEksternal.googleFormTugas);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    sound.playCorrect();
    LEARNING_CONFIG.videoPemanasan.youtubeId = videoPemanasanId;
    LEARNING_CONFIG.videoIceBreaking.youtubeId = videoIceBreakingId;
    LEARNING_CONFIG.videoDalil.youtubeId = videoDalilId;
    LEARNING_CONFIG.linkEksternal.wordwallGame = wordwallUrl;
    LEARNING_CONFIG.linkEksternal.googleFormRefleksi = formRefleksiUrl;
    LEARNING_CONFIG.linkEksternal.googleFormTugas = formTugasUrl;
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-scrapbook-lg border-2 border-[#0F304E]/20 text-left max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="washi-tape washi-tape-sky w-36 -top-3 left-1/2 -translate-x-1/2"></div>

        <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#E0F0FA] text-[#0F304E] flex items-center justify-center font-bold text-sm border border-[#2B79A6]/30">
              <i className="fa-solid fa-gear text-[#2B79A6]"></i>
            </span>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#0F304E]">
                Pengaturan Tautan & Media Pembelajaran
              </h3>
              <p className="text-[11px] text-[#2B79A6] font-handwriting font-bold">
                Ganti tautan YouTube atau Google Form dengan mudah tanpa koding
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-[#E0F0FA] hover:bg-[#BAE6FD] text-[#0F304E] flex items-center justify-center cursor-pointer transition-colors"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="space-y-4 mb-6">
          
          {/* YouTube Video ID Pemanasan */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              🧊 ID Video YouTube Pemanasan (Apersepsi):
            </label>
            <input
              type="text"
              value={videoPemanasanId}
              onChange={(e) => setVideoPemanasanId(e.target.value)}
              placeholder="Contoh: L_LupnpqC-E"
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
            <span className="text-[10px] text-[#0F304E]/60 block mt-0.5">
              Masukkan ID video (karakter setelah ?v= di tautan YouTube).
            </span>
          </div>

          {/* YouTube Video ID Ice Breaking */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              ⚡ ID Video YouTube Ice Breaking (Energizer):
            </label>
            <input
              type="text"
              value={videoIceBreakingId}
              onChange={(e) => setVideoIceBreakingId(e.target.value)}
              placeholder="Contoh: ZanHgPprl-0"
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
            <span className="text-[10px] text-[#0F304E]/60 block mt-0.5">
              Video senam fokus / energizer untuk membangkitkan suasana kelas.
            </span>
          </div>

          {/* YouTube Video ID Dalil */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              📜 ID Video YouTube Dalil (QS. Az-Zumar/39: 2):
            </label>
            <input
              type="text"
              value={videoDalilId}
              onChange={(e) => setVideoDalilId(e.target.value)}
              placeholder="Contoh: o5oJ0_N60u8"
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
          </div>

          {/* Wordwall Game URL */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              🎮 Tautan Eksternal Game Wordwall (Opsional):
            </label>
            <input
              type="text"
              value={wordwallUrl}
              onChange={(e) => setWordwallUrl(e.target.value)}
              placeholder="https://wordwall.net/resource/..."
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
          </div>

          {/* Google Form Refleksi */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              💬 Tautan Google Form Refleksi Siswa:
            </label>
            <input
              type="text"
              value={formRefleksiUrl}
              onChange={(e) => setFormRefleksiUrl(e.target.value)}
              placeholder="https://forms.google.com/..."
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
          </div>

          {/* Google Form Tugas */}
          <div>
            <label className="text-xs font-bold text-[#0F304E] block mb-1">
              📋 Tautan Google Form Pengumpulan Tugas:
            </label>
            <input
              type="text"
              value={formTugasUrl}
              onChange={(e) => setFormTugasUrl(e.target.value)}
              placeholder="https://forms.google.com/..."
              className="w-full p-2.5 rounded-xl border-2 border-[#2B79A6]/30 text-xs text-[#0F304E] font-mono focus:ring-2 focus:ring-[#2B79A6] focus:outline-none bg-[#F0F7FD]"
            />
          </div>

        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#0F304E]/15">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl bg-[#E0F0FA] text-[#0F304E] text-xs font-semibold hover:bg-[#BAE6FD] transition-colors cursor-pointer"
          >
            Batal
          </button>

          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs flex items-center gap-2 shadow-scrapbook-btn border-2 border-[#0F304E] cursor-pointer"
          >
            <i className="fa-solid fa-check text-[#38BDF8]"></i>
            <span>{isSaved ? 'Tersimpan!' : 'Simpan Pengaturan'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
