// Konfigurasi Link Terpusat (Easy Link Configuration)
// Guru dapat mengganti tautan video YouTube, Google Form, atau Wordwall di sini.

export interface LearningConfig {
  videoPemanasan: {
    youtubeId: string; // ID video YouTube (misal: 'dQw4w9WgXcQ' atau embed)
    title: string;
    description: string;
  };
  videoIceBreaking: {
    youtubeId: string;
    title: string;
    description: string;
    gameName: string;
  };
  videoDalil: {
    youtubeId: string;
    title: string;
  };
  linkEksternal: {
    wordwallGame: string; // Tautan opsional ke Wordwall
    googleFormRefleksi: string; // Tautan opsional ke Google Form Refleksi
    googleFormTugas: string; // Tautan opsional ke Google Form Tugas
  };
}

export const LEARNING_CONFIG: LearningConfig = {
  videoPemanasan: {
    youtubeId: "L_LupnpqC-E", 
    title: "Video Inspiratif: Ketulusan Hati Tanpa Kamera",
    description: "Saksikan video singkat berikut, lalu amati perbedaan antara menolong demi konten vs menolong tulus karena Allah."
  },
  videoIceBreaking: {
    youtubeId: "ZanHgPprl-0",
    title: "Video Ice Breaking: Senam Fokus & Game Konsentrasi Ceria",
    description: "Ayo bangkit dari tempat duduk! Ikuti irama dan gerakan penyegar konsentrasi agar pikiran rileks dan siap menerima ilmu.",
    gameName: "Tebak Kata & Gerak Ceria (Clap & Focus)"
  },
  videoDalil: {
    youtubeId: "o5oJ0_N60u8",
    title: "Penjelasan Makna Q.S. Az-Zumar/39: Ayat 2"
  },
  linkEksternal: {
    wordwallGame: "https://wordwall.net/resource/ikhlas-pai-xi",
    googleFormRefleksi: "https://forms.google.com",
    googleFormTugas: "https://forms.google.com"
  }
};

export interface TGTQuestion {
  id: number;
  round: number;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  points: number;
}

export const TGT_QUESTIONS: TGTQuestion[] = [
  {
    id: 1,
    round: 1,
    question: "Secara bahasa (etimologi), kata 'ikhlas' berasal dari bahasa Arab yang berarti...",
    options: [
      { key: 'A', text: "Berbuat baik agar dipuji oleh masyarakat", isCorrect: false },
      { key: 'B', text: "Murni, tidak bercampur, bersih, jernih, serta mengosongkan dan membersihkan sesuatu", isCorrect: true },
      { key: 'C', text: "Membantu orang lain bila ada keuntungan duniawi", isCorrect: false },
      { key: 'D', text: "Menyembunyikan ilmu pengetahuan dari orang lain", isCorrect: false }
    ],
    explanation: "Secara bahasa ikhlas berarti murni, tidak bercampur, bersih, jernih, mengosongkan dan membersihkan sesuatu. Dalam ibadah, berarti tidak memperlihatkan amal kepada orang lain.",
    points: 10
  },
  {
    id: 2,
    round: 1,
    question: "Dalam Q.S. Az-Zumar/39: 2, apa perintah utama yang ditekankan Allah Swt. kepada Rasulullah dan umatnya?",
    options: [
      { key: 'A', text: "Menyembah Allah dengan memurnikan ketaatan (ibadah) kepada-Nya", isCorrect: true },
      { key: 'B', text: "Menghitung-hitung pahala shalat setiap hari", isCorrect: false },
      { key: 'C', text: "Beribadah hanya di saat ada guru atau teman yang melihat", isCorrect: false },
      { key: 'D', text: "Mencari status sosial terhormat melalui dakwah", isCorrect: false }
    ],
    explanation: "Q.S. Az-Zumar: 2 berbunyi: '...fa'budillāha mukhliṣan lahud-dīn' (maka sembahlah Allah dengan memurnikan ketaatan/ibadah kepada-Nya).",
    points: 10
  },
  {
    id: 3,
    round: 2,
    question: "Menurut al-Jurjani dalam kitab al-Ta'rifat, apa pengertian ikhlas secara istilah?",
    options: [
      { key: 'A', text: "Membersihkan amal perbuatan dari hal-hal yang mengotorinya seperti mengharap pujian makhluk", isCorrect: true },
      { key: 'B', text: "Beramal dengan harapan mendapatkan pujian dan hadiah dari manusia", isCorrect: false },
      { key: 'C', text: "Menyimpan seluruh harta kekayaan tanpa pernah bersedekah", isCorrect: false },
      { key: 'D', text: "Menceritakan amal ibadah masa lalu agar dikagumi orang lain", isCorrect: false }
    ],
    explanation: "Al-Jurjani: Ikhlas adalah membersihkan amal dari hal yang mengotorinya seperti mengharap pujian makhluk atau tujuan selain Allah, termasuk tidak mengharap amalnya disaksikan selain Allah.",
    points: 15
  },
  {
    id: 4,
    round: 2,
    question: "Menurut Ali Abdul Halim (2010), seseorang yang beribadah karena rasa mahabbah (cinta) dan rindu kepada Allah tanpa motivasi dunia/akhirat berada pada tingkatan...",
    options: [
      { key: 'A', text: "Orang Awam (Umum)", isCorrect: false },
      { key: 'B', text: "Orang Khawash (Khusus)", isCorrect: false },
      { key: 'C', text: "Orang Khawashul Khawas (Excellent)", isCorrect: true },
      { key: 'D', text: "Orang Munafik", isCorrect: false }
    ],
    explanation: "Tingkatan Khawashul Khawas beribadah semata-mata karena rasa cinta (mahabbah) dan rindu kepada Allah, memandang ibadah sebagai kebutuhan seorang hamba.",
    points: 15
  },
  {
    id: 5,
    round: 3,
    question: "Imam Dzun Nun menyebutkan tiga ciri orang yang ikhlas dalam beramal. Manakah salah satu ciri tersebut?",
    options: [
      { key: 'A', text: "Sangat senang jika dipuji dan tersinggung berat jika dihina orang", isCorrect: false },
      { key: 'B', text: "Tidak lagi mengharap atau menghiraukan pujian dan hinaan orang lain", isCorrect: true },
      { key: 'C', text: "Selalu mencatat dan mengingat-ingat pahala amal perbuatannya", isCorrect: false },
      { key: 'D', text: "Hanya berbuat baik bila melihat ada keuntungan pribadi", isCorrect: false }
    ],
    explanation: "Menurut Imam Dzun Nun: (1) tidak mengharap/hiraukan pujian dan hinaan orang lain, (2) melihat hakikat bahwa amal adalah perintah Allah, dan (3) tidak mengingat pahala perbuatan.",
    points: 20
  },
  {
    id: 6,
    round: 3,
    question: "Apa manfaat utama yang akan didapatkan seorang muslim jika memiliki sikap ikhlas dalam kehidupan sehari-hari?",
    options: [
      { key: 'A', text: "Pasti menjadi orang terkaya dan paling terkenal di kotanya", isCorrect: false },
      { key: 'B', text: "Terhindar dari tipu daya setan/iblis serta selamat dari siksa dan berderajat tinggi di akhirat", isCorrect: true },
      { key: 'C', text: "Tidak perlu lagi belajar keras untuk ujian sekolah", isCorrect: false },
      { key: 'D', text: "Semua orang akan selalu menuruti kemauannya", isCorrect: false }
    ],
    explanation: "Manfaat ikhlas: terhindar dari tipu daya setan/iblis yang menjauhkan dari petunjuk agama, selamat dari siksa, dan meraih derajat tinggi kelak di akhirat.",
    points: 20
  }
];

export interface QuizItem {
  id: number;
  question: string;
  options: {
    key: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
}

export const QUIZ_ITEMS: QuizItem[] = [
  {
    id: 1,
    question: "Mengapa ikhlas disebut sebagai sesuatu hal yang sifatnya batiniah?",
    options: [
      { key: "A", text: "Karena dapat dilihat jelas dari pakaian yang dikenakan seseorang", isCorrect: false },
      { key: "B", text: "Karena ia merupakan perasaan halus yang tidak dapat diketahui oleh siapa pun kecuali pelakunya dan Allah Swt.", isCorrect: true },
      { key: "C", text: "Karena hanya wajib dilakukan oleh para pemuka agama saja", isCorrect: false },
      { key: "D", text: "Karena setiap niat harus diumumkan di depan umum agar sah", isCorrect: false }
    ],
    explanation: "Ikhlas merupakan perasaan halus batiniah yang tidak dapat diketahui oleh siapa pun kecuali pelakunya dan Allah SWT semata."
  },
  {
    id: 2,
    question: "Perhatikan kutipan ayat berikut: 'فَاعْبُدِ اللّٰهَ مُخْلِصًا لَّهُ الدِّيْنَ'. Ayat tersebut terdapat dalam surat...",
    options: [
      { key: "A", text: "Q.S. Az-Zumar/39: 2", isCorrect: true },
      { key: "B", text: "Q.S. Al-Baqarah/2: 183", isCorrect: false },
      { key: "C", text: "Q.S. Al-Ikhlas/112: 1", isCorrect: false },
      { key: "D", text: "Q.S. An-Nas/114: 3", isCorrect: false }
    ],
    explanation: "Lafaz tersebut merupakan bagian dari Q.S. Az-Zumar/39: 2 yang memerintahkan menyembah Allah dengan memurnikan ketaatan kepada-Nya."
  },
  {
    id: 3,
    question: "Seorang pelajar bersedekah kepada anak yatim dengan tujuan agar badannya sehat dan hartanya banyak. Menurut Ali Abdul Halim (2010), pelajar ini berada pada tingkatan ikhlas...",
    options: [
      { key: "A", text: "Orang Awam (Umum) karena masih menghitung keuntungan dunia dan akhirat", isCorrect: true },
      { key: "B", text: "Orang Khawash (Khusus)", isCorrect: false },
      { key: "C", text: "Orang Khawashul Khawas (Excellent)", isCorrect: false },
      { key: "D", text: "Orang Munafik murni", isCorrect: false }
    ],
    explanation: "Tingkat orang awam beribadah mencari dan menghitung keuntungan dunia (sehat, banyak harta) sekaligus akhirat (masuk surga)."
  },
  {
    id: 4,
    question: "Bagaimanakah cara agar seseorang dapat memiliki dan menumbuhkan sifat ikhlas menurut Imam Dzun Nun?",
    options: [
      { key: "A", text: "Menunggu sampai usia tua baru mulai beribadah", isCorrect: false },
      { key: "B", text: "Bersungguh-sungguh (mujahadah), sabar, serta terus-menerus/istiqamah dalam beramal", isCorrect: true },
      { key: "C", text: "Hanya beribadah jika suasana hati sedang gembira saja", isCorrect: false },
      { key: "D", text: "Meminta pujian terlebih dahulu dari teman sebaya", isCorrect: false }
    ],
    explanation: "Imam Dzun Nun menjelaskan seseorang harus bersungguh-sungguh, sabar, serta istiqamah dalam beramal sehingga terbiasa berbuat baik."
  },
  {
    id: 5,
    question: "Berikut ini yang BUKAN merupakan ciri orang yang ikhlas menurut Imam Dzun Nun adalah...",
    options: [
      { key: "A", text: "Tidak menghiraukan pujian dan hinaan orang lain", isCorrect: false },
      { key: "B", text: "Melihat bahwa hakikat amal yang dilakukan adalah perintah Allah", isCorrect: false },
      { key: "C", text: "Selalu mengingat-ingat dan menghitung pahala dari amalnya", isCorrect: true },
      { key: "D", text: "Tidak mengingat pahala dari perbuatan yang telah dilakukan", isCorrect: false }
    ],
    explanation: "Ciri orang ikhlas justru TIDAK mengingat-ingat pahala dari perbuatannya, karena tujuannya murni ridha Allah SWT."
  }
];
