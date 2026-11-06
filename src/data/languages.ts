export const languages = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' },
  { code: 'zh', name: '中文', htmlLang: 'zh-CN' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'ja', name: '日本語' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fa', name: 'فارسی' },
] as const;

export type Language = (typeof languages)[number]['code'];
export const sourceLanguage: Language = 'ko';
export const homePath = (lang: Language) => lang === 'en' ? '/' : `/${lang}/`;
export const pagePath = (lang: Language, path: string) => `${homePath(lang)}${path}`;

type Copy = {
  language: string; skip: string; about: string; research: string; contact: string;
  eyebrow: string; motto: string; intro: string; philosophy: string;
  principleOne: string; principleTwo: string; abm: string; abmText: string;
  connect: string; connectText: string; profile: string; resources: string;
  backup: string; privacy: string;
};

// Editorial source: Korean. The owner maintains Korean and English without AI labels.
// Other languages are AI translations with persistent reference notices.
export const copy: Record<Language, Copy> = {
  en: {
    language: 'Language', skip: 'Skip to content', about: 'Philosophy', research: 'Research', contact: 'Contact',
    eyebrow: 'Research · Reflection · Responsibility', motto: 'Humanity in Science, Science for Humanity.',
    intro: 'A personal space for research and reflection on science and its responsibility to people.',
    philosophy: 'A humanistic approach to science',
    principleOne: 'Science should embody humanistic values, ethical responsibility, and respect for human dignity.',
    principleTwo: 'Science should serve people and contribute to a more humane world.',
    abm: 'Agent-based modeling', abmText: 'Research interests include agent-based modeling (ABM).',
    connect: 'Stay in touch', connectText: 'Find my projects and public profile on GitHub.', profile: 'GitHub profile',
    resources: 'Research tools', backup: 'ABM backup information', privacy: 'Privacy policy',
  },
  ko: {
    language: '언어', skip: '본문으로 건너뛰기', about: '철학', research: '연구', contact: '연락',
    eyebrow: '연구 · 성찰 · 책임', motto: '사람이 담긴 과학, 사람을 향한 과학.',
    intro: '연구와 성찰, 그리고 사람에 대한 과학의 책임을 나누는 개인 공간입니다.',
    philosophy: '인간을 존중하는 과학',
    principleOne: '과학을 수행하는 과정에는 인문적 가치, 윤리적 책임, 인간 존엄에 대한 존중이 담겨야 합니다.',
    principleTwo: '과학은 궁극적으로 사람에게 기여하고, 더 인간다운 세상을 만드는 데 보탬이 되어야 합니다.',
    abm: '행위자 기반 모형', abmText: '연구 관심 분야에는 행위자 기반 모형(ABM)이 포함됩니다.',
    connect: '연결하기', connectText: 'GitHub에서 프로젝트와 공개 프로필을 확인하실 수 있습니다.', profile: 'GitHub 프로필',
    resources: '연구 도구', backup: 'ABM 백업 안내', privacy: '개인정보처리방침',
  },
  zh: {
    language: '语言', skip: '跳转到正文', about: '理念', research: '研究', contact: '联系',
    eyebrow: '研究 · 反思 · 责任', motto: '让科学蕴含人文关怀，让科学服务人类。',
    intro: '一个分享研究、反思科学及其对人类责任的个人空间。', philosophy: '以人文精神开展科学研究',
    principleOne: '科学应体现人文价值、伦理责任以及对人的尊严的尊重。',
    principleTwo: '科学应服务于人，为一个更具人文关怀的世界作出贡献。',
    abm: '基于主体的建模', abmText: '研究兴趣包括基于主体的建模（ABM）。',
    connect: '保持联系', connectText: '可在 GitHub 上查看我的项目和公开资料。', profile: 'GitHub 个人资料',
    resources: '研究工具', backup: 'ABM 备份说明', privacy: '隐私政策',
  },
  es: {
    language: 'Idioma', skip: 'Ir al contenido', about: 'Filosofía', research: 'Investigación', contact: 'Contacto',
    eyebrow: 'Investigación · Reflexión · Responsabilidad', motto: 'Humanidad en la ciencia, ciencia para la humanidad.',
    intro: 'Un espacio personal para investigar y reflexionar sobre la ciencia y su responsabilidad hacia las personas.',
    philosophy: 'Un enfoque humanista de la ciencia',
    principleOne: 'La ciencia debe encarnar valores humanistas, responsabilidad ética y respeto por la dignidad humana.',
    principleTwo: 'La ciencia debe servir a las personas y contribuir a un mundo más humano.',
    abm: 'Modelado basado en agentes', abmText: 'Mis intereses de investigación incluyen el modelado basado en agentes (ABM).',
    connect: 'Sigamos en contacto', connectText: 'Encuentra mis proyectos y mi perfil público en GitHub.', profile: 'Perfil de GitHub',
    resources: 'Herramientas de investigación', backup: 'Información sobre copias de seguridad de ABM', privacy: 'Política de privacidad',
  },
  fr: {
    language: 'Langue', skip: 'Aller au contenu', about: 'Philosophie', research: 'Recherche', contact: 'Contact',
    eyebrow: 'Recherche · Réflexion · Responsabilité', motto: 'De l’humanité dans la science, la science pour l’humanité.',
    intro: 'Un espace personnel de recherche et de réflexion sur la science et sa responsabilité envers les personnes.',
    philosophy: 'Une approche humaniste de la science',
    principleOne: 'La science doit incarner des valeurs humanistes, une responsabilité éthique et le respect de la dignité humaine.',
    principleTwo: 'La science doit être au service des personnes et contribuer à un monde plus humain.',
    abm: 'Modélisation à base d’agents', abmText: 'Mes intérêts de recherche comprennent la modélisation à base d’agents (ABM).',
    connect: 'Restons en contact', connectText: 'Retrouvez mes projets et mon profil public sur GitHub.', profile: 'Profil GitHub',
    resources: 'Outils de recherche', backup: 'Informations sur la sauvegarde ABM', privacy: 'Politique de confidentialité',
  },
  ru: {
    language: 'Язык', skip: 'Перейти к содержанию', about: 'Философия', research: 'Исследования', contact: 'Контакты',
    eyebrow: 'Исследование · Осмысление · Ответственность', motto: 'Гуманность в науке, наука для человечества.',
    intro: 'Личное пространство для исследований и размышлений о науке и её ответственности перед людьми.',
    philosophy: 'Гуманистический подход к науке',
    principleOne: 'Наука должна воплощать гуманистические ценности, этическую ответственность и уважение к человеческому достоинству.',
    principleTwo: 'Наука должна служить людям и способствовать созданию более гуманного мира.',
    abm: 'Агентное моделирование', abmText: 'Мои исследовательские интересы включают агентное моделирование (ABM).',
    connect: 'Оставайтесь на связи', connectText: 'Мои проекты и открытый профиль доступны на GitHub.', profile: 'Профиль GitHub',
    resources: 'Исследовательские инструменты', backup: 'О резервном копировании ABM', privacy: 'Политика конфиденциальности',
  },
  ar: {
    language: 'اللغة', skip: 'انتقل إلى المحتوى', about: 'الفلسفة', research: 'البحث', contact: 'التواصل',
    eyebrow: 'بحث · تأمل · مسؤولية', motto: 'الإنسانية في العلم، والعلم من أجل الإنسانية.',
    intro: 'مساحة شخصية للبحث والتأمل في العلم ومسؤوليته تجاه الناس.', philosophy: 'نهج إنساني في العلم',
    principleOne: 'ينبغي أن يجسد العلم القيم الإنسانية والمسؤولية الأخلاقية واحترام كرامة الإنسان.',
    principleTwo: 'ينبغي أن يخدم العلم الناس ويسهم في بناء عالم أكثر إنسانية.',
    abm: 'النمذجة القائمة على الوكلاء', abmText: 'تشمل اهتماماتي البحثية النمذجة القائمة على الوكلاء (ABM).',
    connect: 'لنبقَ على تواصل', connectText: 'يمكنك الاطلاع على مشاريعي وملفي العام على GitHub.', profile: 'الملف الشخصي على GitHub',
    resources: 'أدوات البحث', backup: 'معلومات النسخ الاحتياطي لأبحاث ABM', privacy: 'سياسة الخصوصية',
  },
  ja: {
    language: '言語', skip: '本文へ移動', about: '理念', research: '研究', contact: '連絡先',
    eyebrow: '研究 · 省察 · 責任', motto: '人間性を大切にする科学、人類のための科学。',
    intro: '研究と省察、そして人々に対する科学の責任について考える個人サイトです。', philosophy: '人間を尊重する科学',
    principleOne: '科学には、人文的価値、倫理的責任、そして人間の尊厳への敬意が込められるべきです。',
    principleTwo: '科学は人々に役立ち、より人間らしい世界づくりに貢献すべきです。',
    abm: 'エージェントベース・モデリング', abmText: '研究関心には、エージェントベース・モデリング（ABM）が含まれます。',
    connect: 'つながる', connectText: 'プロジェクトと公開プロフィールは GitHub でご覧いただけます。', profile: 'GitHub プロフィール',
    resources: '研究ツール', backup: 'ABM バックアップの案内', privacy: 'プライバシーポリシー',
  },
  de: {
    language: 'Sprache', skip: 'Zum Inhalt', about: 'Philosophie', research: 'Forschung', contact: 'Kontakt',
    eyebrow: 'Forschung · Reflexion · Verantwortung', motto: 'Menschlichkeit in der Wissenschaft, Wissenschaft für die Menschheit.',
    intro: 'Ein persönlicher Raum für Forschung und Reflexion über Wissenschaft und ihre Verantwortung gegenüber den Menschen.',
    philosophy: 'Ein humanistischer Ansatz in der Wissenschaft',
    principleOne: 'Wissenschaft sollte humanistische Werte, ethische Verantwortung und die Achtung der Menschenwürde verkörpern.',
    principleTwo: 'Wissenschaft sollte den Menschen dienen und zu einer menschlicheren Welt beitragen.',
    abm: 'Agentenbasierte Modellierung', abmText: 'Zu meinen Forschungsinteressen gehört die agentenbasierte Modellierung (ABM).',
    connect: 'In Kontakt bleiben', connectText: 'Meine Projekte und mein öffentliches Profil finden Sie auf GitHub.', profile: 'GitHub-Profil',
    resources: 'Forschungswerkzeuge', backup: 'Informationen zur ABM-Datensicherung', privacy: 'Datenschutzerklärung',
  },
  fa: {
    language: 'زبان', skip: 'رفتن به محتوا', about: 'فلسفه', research: 'پژوهش', contact: 'ارتباط',
    eyebrow: 'پژوهش · تأمل · مسئولیت', motto: 'انسانیت در علم، علم برای بشریت.',
    intro: 'فضایی شخصی برای پژوهش و تأمل دربارهٔ علم و مسئولیت آن در قبال انسان‌ها.', philosophy: 'رویکردی انسان‌گرایانه به علم',
    principleOne: 'علم باید تجسم ارزش‌های انسانی، مسئولیت اخلاقی و احترام به کرامت انسان باشد.',
    principleTwo: 'علم باید در خدمت مردم باشد و به ساختن جهانی انسانی‌تر کمک کند.',
    abm: 'مدل‌سازی مبتنی بر عامل', abmText: 'علایق پژوهشی من شامل مدل‌سازی مبتنی بر عامل (ABM) است.',
    connect: 'در ارتباط باشیم', connectText: 'پروژه‌ها و نمایهٔ عمومی من را در GitHub ببینید.', profile: 'نمایهٔ GitHub',
    resources: 'ابزارهای پژوهش', backup: 'اطلاعات پشتیبان‌گیری ABM', privacy: 'سیاست حریم خصوصی',
  },
};
