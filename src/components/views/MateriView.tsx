import React, { useState } from 'react';
import { ViewType } from '../HeaderBar';
import { LEARNING_CONFIG } from '../../data/config';
import { sound } from '../../utils/audio';
import { ILLUSTRATIONS } from '../../assets/images';

type SubMateri = 'menu' | 'pengertian' | 'dalil' | 'tingkatan' | 'ciri' | 'manfaat';

interface MateriViewProps {
  onNavigate: (view: ViewType) => void;
}

export const MateriView: React.FC<MateriViewProps> = ({ onNavigate }) => {
  const [activeSub, setActiveSub] = useState<SubMateri>('menu');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const subMenuItems = [
    {
      id: 'pengertian' as SubMateri,
      iconEmoji: '📖',
      tag: 'Definisi',
      rotation: 'rotate-[-1deg]',
      title: 'Pengertian Ikhlas',
      subtitle: 'Bahasa, istilah al-Jurjani (al-Ta\'rifat) & hakikat batin'
    },
    {
      id: 'dalil' as SubMateri,
      iconEmoji: '📜',
      tag: 'QS. Az-Zumar: 2',
      rotation: 'rotate-[1deg]',
      title: 'Dalil Al-Qur\'an',
      subtitle: 'Q.S. Az-Zumar/39: 2 & penjelasan video'
    },
    {
      id: 'tingkatan' as SubMateri,
      iconEmoji: '🌱',
      tag: 'Ali Abdul Halim',
      rotation: 'rotate-[-0.8deg]',
      title: '3 Tingkatan Ikhlas',
      subtitle: 'Orang Awam, Khawash, dan Khawashul Khawas'
    },
    {
      id: 'ciri' as SubMateri,
      iconEmoji: '✨',
      tag: 'Imam Dzun Nun',
      rotation: 'rotate-[1.2deg]',
      title: 'Cara & 3 Ciri Ikhlas',
      subtitle: 'Ikhtiar istiqamah & 3 ciri menurut Dzun Nun'
    },
    {
      id: 'manfaat' as SubMateri,
      iconEmoji: '🛡️',
      tag: 'Keutamaan',
      rotation: 'rotate-[-1deg]',
      title: 'Manfaat Sikap Ikhlas',
      subtitle: 'Benteng dari iblis & derajat tinggi di akhirat'
    }
  ];

  const handleSelectSub = (sub: SubMateri) => {
    sound.playTap();
    setActiveSub(sub);
    setIsVideoPlaying(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => {
            sound.playTap();
            if (activeSub !== 'menu') {
              setActiveSub('menu');
            } else {
              onNavigate('dashboard');
            }
          }}
          className="text-xs sm:text-sm font-handwriting font-bold text-[#0F304E] hover:text-[#2B79A6] flex items-center gap-2 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>{activeSub !== 'menu' ? '← Kembali ke Pilihan Materi' : 'Kembali ke Beranda'}</span>
        </button>

        <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs">
          Tahap 3 dari 7 · Imagine (Materi Inti)
        </span>
      </div>

      {/* Main Container Scrapbook */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-scrapbook border-2 border-[#0F304E]/15 min-h-[480px] flex flex-col justify-between relative">
        
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-sky w-32 -top-3 left-1/2 -translate-x-1/2"></div>

        {/* VIEW 1: Sub-Menu Selection Grid with Sticker Cards */}
        {activeSub === 'menu' && (
          <div>
            
            {/* Scrapbook Moodboard Header Card */}
            <div className="mb-8 rounded-3xl overflow-hidden border-2 border-[#0F304E]/15 bg-[#E0F0FA] grid grid-cols-1 md:grid-cols-12 items-center shadow-scrapbook relative">
              <div className="p-6 sm:p-7 md:col-span-7">
                <span className="text-xs font-handwriting font-bold text-[#2B79A6] bg-white px-3 py-1 rounded-full border border-[#2B79A6]/30 shadow-xs inline-block mb-2 -rotate-1">
                  ✨ Modul Akidah Akhlak SMA
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F304E] tracking-tight">
                  MATERI KEIKHLASAN
                </h2>
                <p className="text-xs sm:text-sm text-[#0F304E]/80 mt-2 leading-relaxed font-sans">
                  Ikhlas merupakan perasaan halus batiniah yang hanya diketahui oleh pelakunya dan Allah SWT. Pelajari intisari materinya melalui stiker topik di bawah ini:
                </p>
              </div>
              <div className="md:col-span-5 h-44 md:h-full overflow-hidden p-3">
                <div className="rounded-2xl overflow-hidden border border-[#0F304E]/10 shadow-xs h-full">
                  <img
                    src={ILLUSTRATIONS.materi}
                    alt="Ilustrasi Estetik Hati Bersih Bercahaya"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* 5 Sub-menu cards for Smartboard bergaya stiker tempelan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {subMenuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSub(item.id)}
                  className={`group bg-[#FFFFFF] hover:bg-[#F0F7FD] p-5 rounded-2xl border-2 border-[#0F304E]/15 hover:border-[#2B79A6] text-left transition-all duration-200 cursor-pointer shadow-scrapbook hover:shadow-scrapbook-lg flex flex-col justify-between min-h-[145px] ${item.rotation} hover:rotate-0`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {item.iconEmoji}
                    </span>
                    <span className="text-[10px] font-handwriting font-bold text-[#2B79A6] bg-[#E0F0FA] px-2.5 py-0.5 rounded-full border border-[#2B79A6]/20">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-[#0F304E] group-hover:text-[#2B79A6] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <i className="fa-solid fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h3>
                    <p className="text-[11px] text-[#0F304E]/70 mt-1 leading-snug font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#0F304E]/10 flex flex-wrap items-center justify-between gap-3 font-sans">
              <span className="text-xs text-[#0F304E]/65 font-handwriting font-semibold text-sm">
                Setelah selesai membaca materi, lanjut ke Turnamen Game TGT ➔
              </span>
              <button
                onClick={() => {
                  sound.playTap();
                  onNavigate('game');
                }}
                className="px-6 py-2.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-scrapbook-btn border-2 border-[#0F304E]"
              >
                <span>Masuk Arena Game TGT</span>
                <i className="fa-solid fa-trophy text-[#38BDF8] text-xs"></i>
              </button>
            </div>
          </div>
        )}

        {/* SUB-VIEW 1: 📖 Pengertian Ikhlas */}
        {activeSub === 'pengertian' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📖</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E]">
                    Pengertian Keikhlasan
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">Definisi Bahasa, Istilah al-Jurjani & Hakikat Batin</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Bahasa */}
              <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook -rotate-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">🌊</span>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6] uppercase tracking-wider">
                    Secara Bahasa (Etimologi)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed mb-3 font-sans">
                  Berasal dari bahasa Arab yang berarti: <strong>murni, tidak bercampur, bersih, jernih, mengosongkan dan membersihkan sesuatu</strong>.
                </p>
                <div className="p-3 bg-[#E0F0FA] rounded-2xl text-xs text-[#0F304E]/90 border border-[#2B79A6]/20 leading-relaxed font-sans">
                  📌 <strong>Dalam Ibadah:</strong> Suci dalam berniat, bersihnya batin dalam beramal, tidak ada pura-pura, lurusnya hati dalam bertindak, jauh dari riya' serta <em>tidak memperlihatkan amal kepada orang lain</em>.
                </div>
              </div>

              {/* Istilah: al-Jurjani */}
              <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook rotate-0.5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base">📜</span>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6] uppercase tracking-wider">
                    Secara Istilah (al-Jurjani dalam al-Ta'rifat)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed italic mb-3 font-sans">
                  “Membersihkan amal perbuatan dari hal-hal yang mengotorinya seperti mengharap pujian dari makhluk atau tujuan-tujuan lain selain dari Allah, termasuk juga tidak mengharap amalnya disaksikan oleh selain Allah.”
                </p>
                <div className="p-3 bg-[#E0F0FA] rounded-2xl text-xs text-[#0F304E]/90 border border-[#2B79A6]/20 leading-relaxed font-sans">
                  📌 <strong>Inti Sikap:</strong> Melaksanakan perintah-perintah Allah SWT dan tidak mengharap sesuatu apa pun, kecuali ridha Allah SWT semata.
                </div>
              </div>
            </div>

            {/* Hakikat Batiniah Sticky Card */}
            <div className="bg-[#0F304E] p-5 rounded-3xl text-white shadow-scrapbook relative">
              <span className="text-xs font-handwriting font-bold text-[#38BDF8] uppercase tracking-wide block mb-1">
                💎 Hakikat Batiniah Ikhlas:
              </span>
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans">
                Ikhlas merupakan sesuatu hal yang sifatnya <strong>batin</strong> dan merupakan <strong>perasaan halus</strong> yang tidak dapat diketahui oleh siapa pun kecuali pelakunya dan Allah SWT.
              </p>
            </div>
          </div>
        )}

        {/* SUB-VIEW 2: 📜 Dalil Al-Qur'an (QS. Az-Zumar: 2) */}
        {activeSub === 'dalil' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📜</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E]">
                    Dalil Al-Qur'an: Q.S. Az-Zumar/39: 2
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">Perintah Memurnikan Ketaatan dalam Beribadah</span>
                </div>
              </div>
            </div>

            {/* Teks Ayat Mushaf Scrapbook */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border-2 border-[#0F304E]/15 text-center shadow-scrapbook relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F0FA] text-xs font-handwriting font-bold text-[#2B79A6] mb-4 border border-[#2B79A6]/30">
                <span>📖</span>
                <span>Q.S. Az-Zumar [39]: Ayat 2</span>
              </div>
              
              <div className="font-arabic text-2xl sm:text-4xl text-[#0F304E] leading-loose mb-5" dir="rtl">
                اِنَّآ اَنْزَلْنَآ اِلَيْكَ الْكِتٰبَ بِالْحَقِّ فَاعْبُدِ اللّٰهَ مُخْلِصًا لَّهُ الدِّيْنَ ۗ ٢
              </div>

              <div className="bg-[#E0F0FA] p-4 rounded-2xl border border-[#0F304E]/15 text-xs sm:text-sm text-[#0F304E] leading-relaxed italic max-w-2xl mx-auto shadow-xs font-sans">
                “Sesungguhnya Kami telah menurunkan kepadamu (Muhammad) al-Kitab (al-Qur'an) dengan benar, maka sembahlah Allah dengan memurnikan ketaatan (ibadah) kepada-Nya.”
                <span className="block not-italic font-handwriting font-bold text-[#2B79A6] mt-1 text-sm">
                  (Q.S. Az-Zumar/39: 2)
                </span>
              </div>
            </div>

            {/* Video Box */}
            <div className="p-4 bg-[#E0F0FA] rounded-3xl border-2 border-[#0F304E]/15 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#0F304E] flex items-center gap-2 font-handwriting text-sm">
                  <i className="fa-solid fa-video text-[#2B79A6]"></i>
                  🎥 Video Pembahasan Tafsir Dalil
                </span>
                {!isVideoPlaying && (
                  <button
                    onClick={() => {
                      sound.playTap();
                      setIsVideoPlaying(true);
                    }}
                    className="text-xs font-handwriting font-bold text-[#2B79A6] hover:text-[#0F304E] underline cursor-pointer"
                  >
                    Buka Video
                  </button>
                )}
              </div>

              {isVideoPlaying ? (
                <div className="aspect-video rounded-2xl overflow-hidden shadow-sm border border-[#0F304E]/20 bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${LEARNING_CONFIG.videoDalil.youtubeId}?autoplay=1&rel=0`}
                    title="Video Penjelasan Dalil"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              ) : (
                <div 
                  onClick={() => setIsVideoPlaying(true)}
                  className="p-4 rounded-2xl bg-white hover:bg-[#F0F7FD] text-center text-xs font-medium text-[#0F304E] cursor-pointer transition-colors border border-[#0F304E]/10"
                >
                  <i className="fa-solid fa-play text-[#2B79A6] mr-2"></i>
                  Klik di sini untuk memutar video penjelasan langsung di Smartboard
                </div>
              )}
            </div>
          </div>
        )}

        {/* SUB-VIEW 3: 🌱 3 Tingkatan Ikhlas (Ali Abdul Halim, 2010) */}
        {activeSub === 'tingkatan' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🌱</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E]">
                    3 Tingkatan Ikhlas
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">Klasifikasi menurut Ali Abdul Halim (2010)</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* a) Orang Awam */}
              <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 border-l-8 border-l-[#2B79A6] shadow-scrapbook -rotate-0.5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0F304E] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#2B79A6] text-white flex items-center justify-center text-xs font-bold">a</span>
                    <span>Tingkat Orang Awam (Umum)</span>
                  </h4>
                  <span className="text-[10px] font-handwriting font-bold bg-[#E0F0FA] px-2.5 py-0.5 rounded-full text-[#2B79A6] border border-[#2B79A6]/20">
                    Untung Dunia & Akhirat
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed mb-2 font-sans">
                  Seseorang beribadah kepada Allah SWT dengan tujuan <strong>mencari dan menghitung keuntungan dunia dan akhirat</strong>.
                </p>
                <div className="bg-[#E0F0FA] p-3 rounded-2xl text-xs text-[#0F304E]/85 border border-[#2B79A6]/20 font-sans">
                  💡 <strong>Contoh:</strong> Shalat atau bersedekah kepada anak yatim dengan tujuan agar badannya sehat, hartanya banyak, mendapat bidadari, dan masuk surga.
                </div>
              </div>

              {/* b) Orang Khawash */}
              <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 border-l-8 border-l-[#38BDF8] shadow-scrapbook rotate-0.5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0F304E] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#38BDF8] text-[#0F304E] flex items-center justify-center text-xs font-bold">b</span>
                    <span>Tingkat Orang Khawash (Khusus)</span>
                  </h4>
                  <span className="text-[10px] font-handwriting font-bold bg-[#E0F0FA] px-2.5 py-0.5 rounded-full text-[#0284C7] border border-[#38BDF8]/30">
                    Murni Orientasi Akhirat
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed mb-2 font-sans">
                  Beribadah <strong>hanya untuk mencari keuntungan akhirat</strong>, bukan lagi berorientasi pada keuntungan duniawi.
                </p>
                <div className="bg-[#E0F0FA] p-3 rounded-2xl text-xs text-[#0F304E]/85 border border-[#38BDF8]/30 font-sans">
                  💡 <strong>Karakter Hati:</strong> Beribadah sambil hatinya berharap memperoleh pahala, surga, dan keselamatan akhirat.
                </div>
              </div>

              {/* c) Orang Khawashul Khawas */}
              <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 border-l-8 border-l-[#0F304E] shadow-scrapbook -rotate-0.5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0F304E] flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0F304E] text-white flex items-center justify-center text-xs font-bold">c</span>
                    <span>Tingkat Orang Khawashul Khawas (Excellent)</span>
                  </h4>
                  <span className="text-[10px] font-handwriting font-bold bg-[#0F304E] text-white px-2.5 py-0.5 rounded-full">
                    Puncak Mahabbah (Cinta)
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed mb-2 font-sans">
                  Beribadah <strong>tanpa motivasi apa pun kecuali mengharap ridha Allah SWT</strong>. Ibadah bukan sekadar kewajiban, melainkan kebutuhan seorang hamba.
                </p>
                <div className="bg-[#E0F0FA] p-3 rounded-2xl text-xs text-[#0F304E]/85 border border-[#0F304E]/20 font-sans">
                  💡 <strong>Hakikat:</strong> Didasari rasa <strong>mahabbah (cinta) dan rindu kepada Allah SWT</strong>, sehingga mencapai kenikmatan dalam setiap ibadah.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-VIEW 4: ✨ Cara Memiliki & 3 Ciri Ikhlas (Imam Dzun Nun) */}
        {activeSub === 'ciri' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✨</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E]">
                    Cara Memiliki & 3 Ciri Ikhlas
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">Pandangan Ulama Besar: Imam Dzun Nun</span>
                </div>
              </div>
            </div>

            {/* Cara Memiliki Sifat Ikhlas */}
            <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook">
              <div className="flex items-center gap-2 mb-2 text-xs font-handwriting font-bold uppercase tracking-wider text-[#2B79A6]">
                <span>🌱</span>
                <span>Cara Agar Memiliki Sifat Ikhlas:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#0F304E] leading-relaxed font-sans">
                Imam Dzun Nun menjelaskan bahwa seseorang harus <strong>bersungguh-sungguh (mujahadah), sabar, serta terus-menerus/istiqamah dalam beramal</strong>, sehingga ia akan terbiasa dengan perbuatan baik dan hatinya terlatih bersih dari pamrih.
              </p>
            </div>

            {/* 3 Ciri Orang yang Ikhlas menurut Imam Dzun Nun */}
            <div>
              <span className="text-xs font-handwriting font-bold text-[#0F304E] text-sm block mb-3 uppercase tracking-wider">
                3 Ciri Seseorang yang Ikhlas dalam Beramal (Imam Dzun Nun):
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook -rotate-1">
                  <span className="w-8 h-8 rounded-full bg-[#E0F0FA] text-[#0F304E] font-bold text-sm flex items-center justify-center mb-3 shadow-xs font-handwriting">
                    1
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#0F304E] mb-2">
                    Kebal Pujian & Hinaan
                  </h4>
                  <p className="text-xs text-[#0F304E]/80 leading-relaxed font-sans">
                    <strong>Tidak lagi mengharap atau menghiraukan pujian dan hinaan</strong> orang lain. Sikap hatinya tetap tenang dan tidak terombang-ambing oleh komentar manusia.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook rotate-1">
                  <span className="w-8 h-8 rounded-full bg-[#E0F0FA] text-[#0F304E] font-bold text-sm flex items-center justify-center mb-3 shadow-xs font-handwriting">
                    2
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#0F304E] mb-2">
                    Fokus Hakikat Perbuatan
                  </h4>
                  <p className="text-xs text-[#0F304E]/80 leading-relaxed font-sans">
                    <strong>Tidak lagi melihat pada manfaat dan bahaya perbuatan</strong>, melainkan memandang bahwa amal yang dilakukan adalah <strong>perintah Allah semata</strong>.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-5 rounded-3xl border-2 border-[#0F304E]/15 shadow-scrapbook -rotate-0.5">
                  <span className="w-8 h-8 rounded-full bg-[#E0F0FA] text-[#0F304E] font-bold text-sm flex items-center justify-center mb-3 shadow-xs font-handwriting">
                    3
                  </span>
                  <h4 className="font-heading font-bold text-sm text-[#0F304E] mb-2">
                    Melupakan Ingatan Pahala
                  </h4>
                  <p className="text-xs text-[#0F304E]/80 leading-relaxed font-sans">
                    <strong>Tidak mengingat-ingat pahala</strong> dari perbuatan yang dilakukan, melainkan menganggap seluruhnya sebagai karunia yang wajib disyukuri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-VIEW 5: 🛡️ Manfaat Memiliki Sikap Ikhlas */}
        {activeSub === 'manfaat' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#0F304E]/15">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🛡️</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0F304E]">
                    Manfaat Memiliki Sikap Ikhlas
                  </h3>
                  <span className="text-xs font-handwriting font-bold text-[#2B79A6]">Keutamaan Agung di Dunia & Akhirat</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#0F304E]/15 border-l-8 border-l-[#2B79A6] shadow-scrapbook -rotate-0.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E0F0FA] text-[#2B79A6] flex items-center justify-center text-xl mb-3 shadow-xs">
                  🛡️
                </div>
                <h4 className="font-heading font-bold text-base text-[#0F304E] mb-2">
                  1. Terhindar dari Tipu Daya Setan / Iblis
                </h4>
                <p className="text-xs sm:text-sm text-[#0F304E]/85 leading-relaxed font-sans">
                  Sikap ikhlas menyelamatkan seorang muslim dari berbagai macam godaan dan tipu daya setan yang dapat menyebabkannya jauh dari petunjuk agama.
                </p>
              </div>

              <div className="bg-[#FFFFFF] p-6 rounded-3xl border-2 border-[#0F304E]/15 border-l-8 border-l-[#38BDF8] shadow-scrapbook rotate-0.5">
                <div className="w-10 h-10 rounded-2xl bg-[#E0F0FA] text-[#0284C7] flex items-center justify-center text-xl mb-3 shadow-xs">
                  👑
                </div>
                <h4 className="font-heading font-bold text-base text-[#0F304E] mb-2">
                  2. Selamat dari Siksa & Mendapat Derajat Tinggi
                </h4>
                <p className="text-xs sm:text-sm text-[#0F304E]/85 leading-relaxed font-sans">
                  Orang yang ikhlas beramal akan diselamatkan dari siksa yang pedih dan akan dianugerahi derajat yang tinggi kelak di akhirat.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Sub-view Navigation Footer (Back to Submenu) */}
        {activeSub !== 'menu' && (
          <div className="pt-6 border-t border-[#0F304E]/10 flex items-center justify-between font-sans">
            <button
              onClick={() => {
                sound.playTap();
                setActiveSub('menu');
              }}
              className="text-xs sm:text-sm font-handwriting font-bold text-[#0F304E] hover:text-[#2B79A6] flex items-center gap-1.5 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left"></i>
              <span>Kembali ke Pilihan Materi</span>
            </button>

            <button
              onClick={() => {
                sound.playTap();
                onNavigate('game');
              }}
              className="px-6 py-2.5 rounded-2xl bg-[#0F304E] hover:bg-[#1a4a75] text-white font-heading font-extrabold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-scrapbook-btn border-2 border-[#0F304E]"
            >
              <span>Lanjut ke Game TGT</span>
              <i className="fa-solid fa-arrow-right text-[#38BDF8] text-xs"></i>
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
