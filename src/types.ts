export interface QuranWord {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  tafsirNote?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario?: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  verseRef?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  tagline: string;
  scenario: string;
  dilemmaQuestion: string;
  reflectionPoints: string[];
  islamicPerspective: string;
  recommendedAction: string;
}

export interface FilterItem {
  id: string;
  label: string;
  type: 'ikhlas' | 'penyakit';
  category: 'Riya\'' | 'Sum\'ah' | '\'Ujub' | 'Ikhlas Murni' | 'Hasad';
  description: string;
}
