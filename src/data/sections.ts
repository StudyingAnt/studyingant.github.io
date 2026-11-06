import type { Language } from './languages';

type Sections = {
  about: string; career: string;
  writing: string; writingText: string; note: string; read: string; back: string;
  };

// Korean is the editorial source. Korean and English are maintained by the owner.
export const sections: Record<Language, Sections> = {
  en: {
    about: 'About', career: 'Background',
    writing: 'Writing', writingText: 'Short essays on science, philosophy, hobbies, and personal interests.',
    note: 'A note on the values behind scientific work.', read: 'Read the note', back: 'All writing', },
  ko: { about: '소개', career: '경력',
    writing: '글', writingText: '과학과 철학, 취미와 개인적인 관심사에 관한 짧은 글입니다.',
    note: '과학을 수행하는 데 바탕이 되는 가치에 관한 짧은 글입니다.', read: '글 읽기', back: '글 목록', },
  zh: { about: '关于', career: '经历',
    writing: '文章', writingText: '关于科学、哲学、爱好与个人兴趣的短文。',
    note: '关于科学工作背后价值观的一则短文。', read: '阅读短文', back: '所有文章', },
  es: { about: 'Acerca de mí', career: 'Trayectoria',
    writing: 'Escritos', writingText: 'Ensayos breves sobre ciencia, filosofía, aficiones e intereses personales.',
    note: 'Una nota sobre los valores que sustentan el trabajo científico.', read: 'Leer la nota', back: 'Todos los escritos', },
  fr: { about: 'À propos', career: 'Parcours',
    writing: 'Écrits', writingText: 'De courts essais sur la science, la philosophie, les loisirs et les centres d’intérêt personnels.',
    note: 'Une note sur les valeurs qui sous-tendent le travail scientifique.', read: 'Lire la note', back: 'Tous les écrits', },
  ru: { about: 'Обо мне', career: 'Опыт',
    writing: 'Заметки', writingText: 'Короткие эссе о науке, философии, увлечениях и личных интересах.',
    note: 'Заметка о ценностях, лежащих в основе научной работы.', read: 'Читать заметку', back: 'Все заметки', },
  ar: { about: 'نبذة', career: 'المسار',
    writing: 'كتابات', writingText: 'مقالات قصيرة عن العلم والفلسفة والهوايات والاهتمامات الشخصية.',
    note: 'ملاحظة عن القيم التي يقوم عليها العمل العلمي.', read: 'قراءة الملاحظة', back: 'جميع الكتابات', },
  ja: { about: '紹介', career: '経歴',
    writing: '文章', writingText: '科学や哲学、趣味や個人的な関心についての短い文章です。',
    note: '科学の営みを支える価値についての短い文章です。', read: '文章を読む', back: '文章一覧', },
  de: { about: 'Über mich', career: 'Werdegang',
    writing: 'Texte', writingText: 'Kurze Essays zu Wissenschaft, Philosophie, Hobbys und persönlichen Interessen.',
    note: 'Eine Notiz über die Werte hinter wissenschaftlicher Arbeit.', read: 'Notiz lesen', back: 'Alle Texte', },
  fa: { about: 'درباره', career: 'سوابق',
    writing: 'نوشته‌ها', writingText: 'نوشته‌های کوتاهی دربارهٔ علم، فلسفه، سرگرمی‌ها و علایق شخصی.',
    note: 'یادداشتی دربارهٔ ارزش‌های زیربنای کار علمی.', read: 'خواندن یادداشت', back: 'همهٔ نوشته‌ها', },
};
