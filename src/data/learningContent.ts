import { QuranWord, QuizQuestion, CaseStudy, FilterItem } from '../types';

export const LEARNING_OBJECTIVES = {
  subject: "Pendidikan Agama Islam & Budi Pekerti",
  classLevel: "Kelas XI SMA/SMK/MA",
  phase: "Fase F - Kurikulum Merdeka",
  theme: "Menebarkan Kebaikan dengan Memurnikan Niat (Keikhlasan dalam Beramal)",
  cp: "Peserta didik mampu menganalisis konsep keikhlasan, mengidentifikasi bahaya penyakit riya' dan sum'ah dalam beramal, serta membiasakan sikap ikhlas lillahi ta'ala dalam kehidupan pribadi, sosial, dan berbangsa.",
  tp: [
    "Menganalisis makna ikhlas, riya', sum'ah, dan 'ujub berdasarkan dalil naqli (Al-Qur'an & Hadits).",
    "Mendiagnosis faktor perusak keikhlasan dalam situasi nyata kehidupan pelajar & era digital.",
    "Memecahkan dilema moral perilaku beramal melalui diskusi studi kasus kelompok.",
    "Menginternalisasi komitmen keikhlasan (muhasabah niat) dalam rutinitas ibadah dan sosial."
  ]
};

// Word-by-word interactive Quranic verse: QS. Al-Bayyinah: 5
export const QURAN_BAYYINAH_WORDS: QuranWord[] = [
  {
    id: 1,
    arabic: "وَمَا",
    transliteration: "Wa mā",
    meaning: "Dan tidaklah",
    tafsirNote: "Huruf 'waw' istiknaf dan 'mā' nafiah (penafian mutlak sebelum penetapan tujuan)."
  },
  {
    id: 2,
    arabic: "أُمِرُوا",
    transliteration: "Umirū",
    meaning: "Mereka diperintahkan",
    tafsirNote: "Fi'il madhi majhul: Menunjukkan perintah langsung dari Allah Yang Maha Kuasa kepada seluruh umat manusia."
  },
  {
    id: 3,
    arabic: "إِلَّا",
    transliteration: "Illā",
    meaning: "Kecuali / Melainkan",
    tafsirNote: "Adat hashr (pembatasan): Bahwa inti dan esensi seluruh ajaran agama dibatasi pada hal berikut."
  },
  {
    id: 4,
    arabic: "لِيَعْبُدُوا",
    transliteration: "Liya'budū",
    meaning: "Supaya mereka menyembah",
    tafsirNote: "Lam kay (alasan/tujuan penciptaan): Seluruh ketaatan, ibadah mahdhah maupun ghairu mahdhah."
  },
  {
    id: 5,
    arabic: "اللَّهَ",
    transliteration: "Allāha",
    meaning: "Allah",
    tafsirNote: "Lafdzul Jalalah: Satu-satunya Dzat yang berhak dituju dan dipersembahkan segala amal."
  },
  {
    id: 6,
    arabic: "مُخْلِصِينَ",
    transliteration: "Mukhlisīna",
    meaning: "Dengan memurnikan",
    tafsirNote: "Bentuk isim fa'il jama': Menuntut kepribadian yang terus-menerus memurnikan niat tanpa dicampuri pamrih makhluk."
  },
  {
    id: 7,
    arabic: "لَهُ",
    transliteration: "Lahū",
    meaning: "Hanya bagi-Nya",
    tafsirNote: "Pengutamaan jer-majrur (taqdim mā haqquhu at-ta'khir) yang berfaedah lil hashri (hanya semata-mata untuk Allah)."
  },
  {
    id: 8,
    arabic: "الدِّينَ",
    transliteration: "Ad-dīna",
    meaning: "Ketaatan / Agama",
    tafsirNote: "Seluruh sistem ketundukan, peribadatan, dan pengabdian hidup secara utuh lahir dan batin."
  },
  {
    id: 9,
    arabic: "حُنَفَاءَ",
    transliteration: "Hunafā'a",
    meaning: "Lurus (jauh dari syirik)",
    tafsirNote: "Cenderung kepada kebenaran tauhid dan berpaling sepenuhnya dari segala bentuk kemusyrikan dan riya'."
  }
];

export const APPERCEPTION_POLLS = [
  {
    id: 1,
    title: "Dilema Medsos: Konten Berbagi",
    context: "Seorang pelajar membuat video reels/TikTok membagikan paket sembako kepada fakir miskin dengan caption inspiratif.",
    question: "Bagaimana Anda menilai niat tindakan ini?",
    options: [
      { id: "A", text: "Pasti Riya' — Ibadah sedekah wajib disembunyikan agar tidak pamer.", votes: 24, analysis: "Kurang tepat. Menampakkan sedekah diperbolehkan dalam syariat jika diniatkan syiar dan memotivasi orang lain (QS. Al-Baqarah: 271), asalkan hati terjaga dari rasa ingin dipuji." },
      { id: "B", text: "Bergantung Hati — Bisa jadi syiar kebaikan jika hatinya terjaga dari haus pujian.", votes: 68, analysis: "Sangat tepat! Kaidah fikih 'Al-Umuuru bi Maqaasidiha' (Segala urusan tergantung maksudnya). Niat di hati menentukan apakah itu syiar berpahala atau riya'." },
      { id: "C", text: "Bebas saja — Yang penting ada orang tertolong, niat urusan nomor dua.", votes: 8, analysis: "Keliru dalam kacamata Islam. Kemanfaatan sosial tercapai, namun pelakunya tidak mendapatkan pahala akhirat jika niatnya bukan karena Allah (habithat a'maaluhum)." }
    ]
  },
  {
    id: 2,
    title: "Dilema Sekolah: Semangat Beramal",
    context: "Ahmad rajin membersihkan masjid sekolah saat ada pembina Rohis lewat, namun santai saat sendirian.",
    question: "Apa fenomena spiritual yang terjadi pada diri Ahmad?",
    options: [
      { id: "A", text: "Terjangkit bibit Riya' — Semangatnya terstimulasi oleh pandangan manusia.", votes: 78, analysis: "Tepat. Ali bin Abi Thalib RA menyebut ciri riya': Malas saat sendirian, namun giat dan bersemangat saat berada di tengah khalayak." },
      { id: "B", text: "Wajar — Manusiawi ingin dinilai positif oleh guru pembina.", votes: 15, analysis: "Meskipun naluriah, bagi seorang muslim ini adalah alarm bahaya karena menggantungkan tujuan amal kepada penilaian makhluk." },
      { id: "C", text: "Bukan masalah, yang penting masjid tetap bersih.", votes: 7, analysis: "Secara fisik bersih, tetapi hatinya terancam syirik kecil (Syirik Ashghar) yang menggugurkan nilai pahala di sisi Allah." }
    ]
  }
];

export const CLASSIFICATION_ITEMS: FilterItem[] = [
  { id: '1', label: 'Mengunggah tangkapan layar donasi dengan menutup nominal dan nama agar orang lain tergerak menyumbang', type: 'ikhlas', category: 'Ikhlas Murni', description: 'Syiar dakwah tanpa menonjolkan diri sendiri demi kemaslahatan umat.' },
  { id: '2', label: 'Menceritakan tahajud semalam di grup kelas: "Aduh ngantuk banget habis sholat malam jam 3 tadi"', type: 'penyakit', category: 'Sum\'ah', description: 'Menyuarakan amal tersembunyi agar diketahui dan dipuji orang lain.' },
  { id: '3', label: 'Tetap istiqamah mengajar TPA meski hanya 1 murid yang hadir dan tidak digaji sepeser pun', type: 'ikhlas', category: 'Ikhlas Murni', description: 'Tanda ikhlas sejati: Tidak goyah oleh sedikitnya pengikut atau ketiadaan materi.' },
  { id: '4', label: 'Memperbagus bacaan sholat saat menyadari ada teman dan guru mendengarkan di belakang', type: 'penyakit', category: 'Riya\'', description: 'Mempercantik ibadah demi menuai decak kagum pandangan manusia.' },
  { id: '5', label: 'Merasa diri lebih suci dan mulia dibanding teman yang belum rajin sholat berjamaah', type: 'penyakit', category: '\'Ujub', description: 'Mengagumi keshalihan diri sendiri dan meremehkan orang lain.' },
  { id: '6', label: 'Menyegerakan istighfar dan berlindung kepada Allah ketika terbersit rasa bangga setelah berbuat baik', type: 'ikhlas', category: 'Ikhlas Murni', description: 'Kewaspadaan seorang mukhlis yang selalu menjaga kemurnian hatinya.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Ketua Panitia yang Kecewa",
    tagline: "Ketika Jerih Payah Tidak Dihargai Manusia",
    scenario: "Faris menjabat sebagai ketua panitia Tabligh Akbar di sekolahnya. Ia bekerja siang dan malam hingga kurang tidur. Namun saat acara sukses besar, namanya lupa disebut oleh pembawa acara saat ucapan terima kasih. Faris merasa sangat sakit hati, kesal, dan berniat tidak mau aktif lagi di kegiatan keislaman.",
    dilemmaQuestion: "Apakah kekecewaan Faris adalah tanda bahwa selama ini niatnya belum 100% ikhlas? Bagaimana nasihat terbaik untuknya?",
    reflectionPoints: [
      "Mengapa manusia merasa sakit hati ketika jasanya dilupakan orang lain?",
      "Bagaimana membedakan antara evaluasi kerja profesional dengan tuntutan pengakuan ego?",
      "Apa dampak spiritual jika kita berhenti beramal hanya karena tidak dipuji?"
    ],
    islamicPerspective: "Ulama menyatakan: Salah satu tanda keikhlasan adalah 'tidak berubahnya semangat saat dipuji atau dicela, dan tidak menuntut balasan terima kasih dari manusia' (QS. Al-Insan: 9: 'Sesungguhnya kami memberi makan kepadamu hanyalah karena mengharapkan keridhaan Allah, kami tidak menghendaki balasan dari kamu dan tidak pula (ucapan) terima kasih').",
    recommendedAction: "Faris perlu menata ulang niatnya (tajdidun niyah). Jadikan luputnya apresiasi manusia sebagai cara Allah menyelamatkan amalnya dari riya'. Ia tetap profesional memberi masukan kepada tim panitia tanpa merusak pahala keikhlasannya."
  },
  {
    id: 2,
    title: "Dilema Talbis Iblis: Takut Beramal karena Takut Riya'",
    tagline: "Jebakan Halus Menghindari Ibadah",
    scenario: "Zahra memiliki suara yang sangat merdu saat melantunkan tilawah Al-Qur'an. Guru PAI memintanya mewakili sekolah dalam lomba MTQ tingkat provinsi. Zahra menolak karena ia takut hatinya tergoda menjadi sombong dan riya' jika ditonton banyak orang dan menjadi juara.",
    dilemmaQuestion: "Apakah sikap Zahra menolak berprestasi demi menjaga hati merupakan sikap yang dibenarkan dalam Islam?",
    reflectionPoints: [
      "Apakah menghindari amal baik merupakan solusi yang tepat untuk mencegah riya'?",
      "Bagaimana pandangan ulama salaf (Fudhail bin 'Iyadh) mengenai fenomena ini?",
      "Bagaimana cara tetap berkontribusi syiar dakwah sambil menjaga keselamatan batin?"
    ],
    islamicPerspective: "Imam Fudhail bin 'Iyadh RA berkata: 'Meninggalkan amal karena takut manusia adalah riya', beramal karena manusia adalah syirik, dan ikhlas adalah manakala Allah menyelamatkanmu dari keduanya.' Menolak amanah kebaikan karena was-was riya' adalah tipuan halus setan (Talbis Iblis).",
    recommendedAction: "Zahra hendaknya tetap menerima amanah tersebut sebagai sarana syiar dan memanfaatkan karunia Allah, seraya memperbanyak doa perlindungan hati: 'Allahumma inni a'udzubika an usyrika bika wa ana a'lam, wa astaghfiruka lima la a'lam'."
  },
  {
    id: 3,
    title: "Hadiah Beasiswa Hafalan Al-Qur'an",
    tagline: "Ibadah Mahdhah Berhadiah Materi",
    scenario: "Rian giat menghafalkan juz 30 dan juz 29 setelah mendengar pengumuman bahwa siswa yang hafal 2 juz akan mendapatkan beasiswa bebas SPP selama 1 tahun penuh dari yayasan sekolah.",
    dilemmaQuestion: "Apakah target beasiswa ini merusak nilai keikhlasan menghafal Al-Qur'an?",
    reflectionPoints: [
      "Bolehkah motivasi awal berupa reward duniawi mengantarkan seseorang menuju ibadah?",
      "Bagaimana proses evolusi niat dari tahap pemula hingga mencapai kemurnian tauhid?",
      "Apa yang harus dilakukan Rian agar hafalan dan beasiswanya sama-sama berkah?"
    ],
    islamicPerspective: "Para ulama menuturkan perkataan Sufyan Ats-Tsauri: 'Dahulu kami menuntut ilmu bukan karena Allah (ada motif duniawi/status), namun ilmu itu sendiri yang enggan melainkan menuntun kami hanya untuk Allah.' Hadiah duniawi boleh menjadi pemicu awal, namun niat harus segera dinaikkan derajatnya.",
    recommendedAction: "Rian dapat menerima beasiswa tersebut sebagai rezeki dan penopang ibadah, namun di dalam dadanya ia harus membulatkan tekad bahwa kalam Allah dihafal semata-mata demi meraih keridhaan-Nya dan mahkota kemuliaan bagi orang tua di akhirat kelak."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Secara bahasa (etimologi), kata 'Ikhlas' berakar dari kata خَلَصَ (khalasa) yang memiliki arti dasar...",
    options: [
      { id: "A", text: "Sabar dan tabah menghadapi cobaan hidup", isCorrect: false },
      { id: "B", text: "Murni, bersih, dan terbebas dari segala campuran kotoran", isCorrect: true },
      { id: "C", text: "Rajin dan tekun melaksanakan syariat setiap saat", isCorrect: false },
      { id: "D", text: "Menyerahkan segala urusan tanpa perlu berusaha", isCorrect: false }
    ],
    explanation: "Secara etimologi, 'khalasa' berarti bersih dan murni dari kotoran. Seperti susu murni yang tidak bercampur kotoran maupun darah (QS. An-Nahl: 66).",
    verseRef: "QS. An-Nahl: 66"
  },
  {
    id: 2,
    question: "Dalam QS. Al-Bayyinah ayat 5, lafaz 'مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ' menegaskan bahwa syarat mutlak diterimanya penghambaan kepada Allah adalah...",
    options: [
      { id: "A", text: "Dilakukan di tempat ibadah yang megah dan terhormat", isCorrect: false },
      { id: "B", text: "Memurnikan ketaatan hanya bagi Allah dengan sikap lurus berpaling dari syirik", isCorrect: true },
      { id: "C", text: "Disertai saksi dari masyarakat sekitar", isCorrect: false },
      { id: "D", text: "Menunggu hingga hati merasa benar-benar tenang dan suci", isCorrect: false }
    ],
    explanation: "Ayat ini menegaskan perintah beribadah kepada Allah dengan 'mukhlisīna lahud-dīn' (memurnikan agama/ketaatan hanya bagi-Nya) dan 'hunafā'' (lurus, menjauhi syirik).",
    verseRef: "QS. Al-Bayyinah: 5"
  },
  {
    id: 3,
    question: "Perbedaan mendasar antara penyakit 'Riya\'' dan 'Sum'ah' dalam beramal terletak pada...",
    options: [
      { id: "A", text: "Riya' terkait pamer pandangan mata (ingin dilihat), sedangkan Sum'ah terkait pamer pendengaran (ingin didengar/disebut)", isCorrect: true },
      { id: "B", text: "Riya' dilakukan oleh orang munafik, sedangkan Sum'ah dilakukan oleh orang kafir", isCorrect: false },
      { id: "C", text: "Riya' hanya terjadi dalam sholat, sedangkan Sum'ah hanya terjadi saat sedekah", isCorrect: false },
      { id: "D", text: "Riya' dosanya kecil, sedangkan Sum'ah dosanya setara syirik akbar", isCorrect: false }
    ],
    explanation: "Riya' berasal dari kata 'ra'ā' (melihat) yaitu beramal agar dilihat manusia. Sum'ah berasal dari 'sami'a' (mendengar) yaitu menceritakan/memperdengarkan amal yang tersembunyi agar dipuji.",
    verseRef: "HR. Bukhari & Muslim"
  },
  {
    id: 4,
    question: "Ali bin Abi Thalib RA menyebutkan beberapa ciri orang yang terjangkit penyakit riya'. Manakah yang BUKAN merupakan ciri tersebut?",
    options: [
      { id: "A", text: "Malas beribadah saat berada dalam kesendirian", isCorrect: false },
      { id: "B", text: "Sangat bersemangat dan giat beramal saat berada di tengah banyak orang", isCorrect: false },
      { id: "C", text: "Amalnya bertambah saat dipuji dan berkurang saat dicela", isCorrect: false },
      { id: "D", text: "Merasa cemas dan takut jika amalnya belum diterima oleh Allah SWT", isCorrect: true }
    ],
    explanation: "Merasa cemas (khauf) apakah amalnya diterima atau tidak justru merupakan sifat mulia orang-orang yang ikhlas (QS. Al-Mu'minun: 60), bukan ciri riya'.",
    verseRef: "Atsar Sahabat Ali bin Abi Thalib RA"
  },
  {
    id: 5,
    question: "Imam Fudhail bin 'Iyadh menyatakan: 'Meninggalkan amal karena takut dinilai manusia adalah riya', sedangkan beramal demi manusia adalah...'",
    options: [
      { id: "A", text: "Nifaq (Kemunafikan)", isCorrect: false },
      { id: "B", text: "Syirik (Menyekutukan Allah)", isCorrect: true },
      { id: "C", text: "Fasik (Kedurhakaan)", isCorrect: false },
      { id: "D", text: "Bid'ah (Penyimpangan)", isCorrect: false }
    ],
    explanation: "Perkataan legendaris Fudhail bin 'Iyadh: 'Meninggalkan amal karena manusia adalah riya', beramal karena manusia adalah syirik, dan ikhlas adalah saat Allah menyelamatkanmu dari keduanya.'",
    verseRef: "Risalah Qusyairiyah"
  },
  {
    id: 6,
    question: "Tingkatan ikhlas tertinggi menurut ulama tasawuf (seperti Syaikh Ibnu Atha'illah) adalah tingkatan 'Ikhlasul 'Arifin', yaitu...",
    options: [
      { id: "A", text: "Beramal semata-mata karena mengharapkan balasan bidadari surga", isCorrect: false },
      { id: "B", text: "Beramal karena takut siksa pedih api neraka", isCorrect: false },
      { id: "C", text: "Memandang bahwa seluruh kemampuan beramal adalah murni anugerah Allah, bukan kehebatan dirinya", isCorrect: true },
      { id: "D", text: "Tidak mau melaksanakan sholat sunnah karena merasa sudah suci hatinya", isCorrect: false }
    ],
    explanation: "Ikhlasul 'Arifin adalah tingkatan makrifat di mana seorang hamba menyadari bahwa seluruh amal, tenaga, dan taufik berasal dari Allah semata, sehingga tidak ada ruang untuk ujub atau merasa berjasa.",
    verseRef: "Kitab Al-Hikam"
  }
];

export const REFLECTION_QUESTIONS = [
  {
    id: 1,
    question: "Ketika Anda melakukan kebaikan (misal: membersihkan kelas atau menolong teman), bagaimana perasaan Anda jika tidak ada yang menyadari atau mengucapkan terima kasih?",
    options: [
      { score: 3, label: "Tenang & Bahagia — Cukup Allah yang Maha Melihat amal ini." },
      { score: 2, label: "Agak Sedih Sebentar — Namun segera menata hati kembali." },
      { score: 1, label: "Kesal & Kecewa — Merasa jerih payah saya sia-sia." }
    ]
  },
  {
    id: 2,
    question: "Bagaimana perbandingan kualitas ibadah sholat Anda saat sholat sendirian di kamar malam hari dibanding saat sholat berjamaah di sekolah?",
    options: [
      { score: 3, label: "Sama Khusyuknya — Bahkan lebih intim dan khusyuk saat sendirian." },
      { score: 2, label: "Hampir Sama — Terkadang di sekolah lebih tertib karena imam." },
      { score: 1, label: "Jauh Berbeda — Kalau sendirian sering terburu-buru dan lalai." }
    ]
  },
  {
    id: 3,
    question: "Apa reaksi batin Anda ketika seseorang yang Anda tolong justru mengkritik atau mengungkit kekurangan Anda?",
    options: [
      { score: 3, label: "Mendoakan Kebaikan — Menjadikannya sarana penggugur dosa." },
      { score: 2, label: "Mencoba Menahan Diri — Tidak membalas walau dada sesak." },
      { score: 1, label: "Menyesal Menolong — 'Tahu gitu nggak usah kubantu sekalian!'" }
    ]
  },
  {
    id: 4,
    question: "Ketika Anda berhasil meraih nilai tertinggi atau memenangkan kompetisi, ke mana arah pikiran pertama Anda?",
    options: [
      { score: 3, label: "Sujud Syukur & Mengakui kelemahan diri di hadapan taufik Allah." },
      { score: 2, label: "Gembira bersama teman & bersyukur sekadarnya." },
      { score: 1, label: "Bangga atas kehebatan strategi dan kecerdasan otak saya sendiri." }
    ]
  }
];
