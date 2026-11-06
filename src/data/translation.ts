import type { Language } from './languages';

export type MachineLanguage = Exclude<Language, 'ko' | 'en'>;

// Korean is the source; Korean and English are corrected by the owner and unlabelled.
export const translationNotices: Record<MachineLanguage, { label: string; message: string }> = {
  zh: { label: '翻译说明', message: '本页使用 AI 翻译，措辞可能不自然。请参考韩文或英文版本。' },
  es: { label: 'Aviso de traducción', message: 'Traducción con IA; algunas expresiones pueden resultar poco naturales. Consulta la versión en coreano o inglés.' },
  fr: { label: 'Note de traduction', message: 'Traduction par IA : certaines formulations peuvent être maladroites. Consultez la version coréenne ou anglaise.' },
  ru: { label: 'О переводе', message: 'Переведено с помощью ИИ; возможны неточные формулировки. Сверяйтесь с корейской или английской версией.' },
  ar: { label: 'ملاحظة حول الترجمة', message: 'تُرجمت هذه الصفحة بالذكاء الاصطناعي وقد تكون بعض العبارات غير طبيعية. يُرجى الرجوع إلى النسخة الكورية أو الإنجليزية.' },
  ja: { label: '翻訳について', message: 'AI による翻訳のため、不自然な表現が含まれる場合があります。韓国語版または英語版をご参照ください。' },
  de: { label: 'Übersetzungshinweis', message: 'Mit KI übersetzt; manche Formulierungen können unnatürlich sein. Bitte die koreanische oder englische Fassung heranziehen.' },
  fa: { label: 'یادداشت ترجمه', message: 'این صفحه با هوش مصنوعی ترجمه شده و ممکن است عبارت‌های ناآشنا داشته باشد. لطفاً به نسخهٔ کره‌ای یا انگلیسی مراجعه کنید.' },
};

export function translationNotice(lang: Language) {
  return lang === 'ko' || lang === 'en' ? undefined : translationNotices[lang];
}
