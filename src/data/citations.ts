import type { Language } from './languages';

type CitationLabels = {
  publications: string;
  preprints: string;
  first: string;
  'co-first': string;
  coauthor: string;
  equalContribution: string;
  firstPosted: string;
};

export const citationLabels: Record<Language, CitationLabels> = {
  ko: { publications: '학술지 논문', preprints: '프리프린트', first: '제1저자', 'co-first': '공동 제1저자', coauthor: '공저자', equalContribution: '† 동등 기여한 공동 제1저자', firstPosted: '최초 공개' },
  en: { publications: 'Publications', preprints: 'Preprints', first: 'First author', 'co-first': 'Co-first author', coauthor: 'Co-author', equalContribution: '† Equal contribution (co-first authors)', firstPosted: 'First posted' },
  zh: { publications: '期刊论文', preprints: '预印本', first: '第一作者', 'co-first': '共同第一作者', coauthor: '共同作者', equalContribution: '† 贡献相同的共同第一作者', firstPosted: '首次发布' },
  es: { publications: 'Publicaciones', preprints: 'Preprints', first: 'Primer autor', 'co-first': 'Co-primer autor', coauthor: 'Coautor', equalContribution: '† Contribución igual como primeros autores', firstPosted: 'Primera publicación' },
  fr: { publications: 'Publications', preprints: 'Prépublications', first: 'Premier auteur', 'co-first': 'Co-premier auteur', coauthor: 'Coauteur', equalContribution: '† Contribution égale en tant que premiers auteurs', firstPosted: 'Première mise en ligne' },
  ru: { publications: 'Публикации', preprints: 'Препринты', first: 'Первый автор', 'co-first': 'Совместный первый автор', coauthor: 'Соавтор', equalContribution: '† Равный вклад первых соавторов', firstPosted: 'Впервые размещено' },
  ar: { publications: 'المنشورات العلمية', preprints: 'مسودات بحثية', first: 'المؤلف الأول', 'co-first': 'مؤلف أول مشترك', coauthor: 'مؤلف مشارك', equalContribution: '† مساهمة متساوية كمؤلفين أوائل مشتركين', firstPosted: 'النشر الأول' },
  ja: { publications: '学術論文', preprints: 'プレプリント', first: '筆頭著者', 'co-first': '共同筆頭著者', coauthor: '共著者', equalContribution: '† 同等の貢献をした共同筆頭著者', firstPosted: '初回公開' },
  de: { publications: 'Publikationen', preprints: 'Preprints', first: 'Erstautor', 'co-first': 'Geteilte Erstautorenschaft', coauthor: 'Koautor', equalContribution: '† Gleicher Beitrag als gemeinsame Erstautoren', firstPosted: 'Erstmals veröffentlicht' },
  fa: { publications: 'مقاله‌های منتشرشده', preprints: 'پیش‌چاپ‌ها', first: 'نویسندهٔ اول', 'co-first': 'نویسندهٔ اول مشترک', coauthor: 'نویسندهٔ همکار', equalContribution: '† سهم برابر به‌عنوان نویسندگان اول مشترک', firstPosted: 'نخستین انتشار' },
};
