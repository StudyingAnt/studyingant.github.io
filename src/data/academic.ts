import type { Language } from './languages';

type AcademicCopy = {
  role: string; lead: string; focus: string; overview: string; question: string;
  multiome: string; multiomeText: string; modeling: string; modelingText: string;
  theory: string; theoryText: string; about: string; phd: string; masters: string;
  bachelors: string; publications: string; interests: string; interestsText: string;
  worldbuilding: string; email: string;
};

// Broad research directions only: CV + the owner's clarification and private report.
// Do not copy unpublished findings, figures, hypotheses, or report details here.
export const academic: Record<Language, AcademicCopy> = {
  en: {
    role: 'Ph.D. student · Applied Mathematics & Statistics',
    lead: 'I study robustness and evolvability in cancer, using mathematical and computational approaches to understand how cell populations adapt.',
    focus: 'Cancer evolution', overview: 'Robustness, evolvability, and cellular diversity',
    question: 'How do evolving populations remain resilient while retaining the capacity to change? My research interests connect cancer evolution, cellular heterogeneity, and the tumor microenvironment.',
    multiome: 'Single-nucleus multiome analysis', multiomeText: 'Joint analysis of gene expression and chromatin accessibility to study cellular states and heterogeneity.',
    modeling: 'Agent-based modeling', modelingText: 'Computational models of cells and their interactions with one another and their environment.',
    theory: 'Mathematical perspectives on evolution', theoryText: 'Quantitative approaches to robustness, evolvability, and adaptation across biological scales.',
    about: 'I am a Ph.D. student in Applied Mathematics and Statistics at Stony Brook University. My background spans life science and electrical engineering.',
    phd: 'Ph.D. studies in Applied Mathematics & Statistics · ongoing', masters: 'M.Sc. in Life Science', bachelors: 'B.Sc. in Life Science & B.Eng. in Electrical Engineering',
    publications: 'Selected publications', interests: 'Interests', interestsText: 'Alongside research, I write about the philosophy of science and other personal interests. Worldbuilding lives on its own site.',
    worldbuilding: 'Worldbuilding', email: 'Email',
  },
  ko: {
    role: '박사과정 · 응용수학 및 통계학',
    lead: '암의 진화에서 강건성과 진화가능성을 연구하며, 수학적·계산적 접근으로 세포 집단의 적응을 이해하고자 합니다.',
    focus: '암의 진화', overview: '강건성, 진화가능성, 그리고 세포 다양성',
    question: '진화하는 집단은 어떻게 변화에 견디면서도 변화할 가능성을 유지할까요? 암의 진화, 세포 이질성, 종양 미세환경을 연결하는 문제에 관심을 두고 있습니다.',
    multiome: '단일핵 멀티옴 분석', multiomeText: '유전자 발현과 염색질 접근성을 함께 분석하여 세포 상태와 이질성을 탐구합니다.',
    modeling: '행위자 기반 모형', modelingText: '세포 간 상호작용과 세포·환경 간 상호작용을 계산 모형으로 탐구합니다.',
    theory: '진화에 대한 수학적 관점', theoryText: '생물학적 규모를 넘나들며 강건성, 진화가능성, 적응을 정량적으로 이해하고자 합니다.',
    about: 'Stony Brook University에서 응용수학 및 통계학 박사과정에 재학 중입니다. 생명과학과 전자공학을 공부했습니다.',
    phd: '응용수학 및 통계학 박사과정 · 재학 중', masters: '생명과학 석사', bachelors: '생명과학 학사 및 전자공학 학사',
    publications: '주요 논문', interests: '관심사', interestsText: '연구와 함께 과학철학과 개인적인 관심사에 관한 글을 이곳에 모읍니다. 세계관 제작은 별도 사이트에서 다룹니다.',
    worldbuilding: '세계관 제작', email: '이메일',
  },
  zh: {
    role: '博士研究生 · 应用数学与统计学', lead: '我研究癌症演化中的稳健性与可演化性，通过数学与计算方法理解细胞群体如何适应。',
    focus: '癌症演化', overview: '稳健性、可演化性与细胞多样性', question: '演化中的群体如何在保持韧性的同时保留改变的能力？我关注癌症演化、细胞异质性与肿瘤微环境之间的联系。',
    multiome: '单核多组学分析', multiomeText: '联合分析基因表达与染色质可及性，研究细胞状态与异质性。',
    modeling: '基于主体的建模', modelingText: '通过计算模型研究细胞之间及细胞与环境之间的相互作用。',
    theory: '演化的数学视角', theoryText: '以定量方法研究不同生物尺度上的稳健性、可演化性与适应。',
    about: '我在 Stony Brook University 攻读应用数学与统计学博士，具有生命科学与电子工程的学习背景。',
    phd: '应用数学与统计学博士在读', masters: '生命科学理学硕士', bachelors: '生命科学理学学士与电子工程工学学士',
    publications: '精选论文', interests: '兴趣', interestsText: '除研究外，我也在这里写科学哲学与个人兴趣。世界观创作放在独立网站上。', worldbuilding: '世界观创作', email: '电子邮件',
  },
  es: {
    role: 'Estudiante de doctorado · Matemáticas Aplicadas y Estadística', lead: 'Estudio la robustez y la capacidad evolutiva del cáncer mediante enfoques matemáticos y computacionales para comprender la adaptación de las poblaciones celulares.',
    focus: 'Evolución del cáncer', overview: 'Robustez, capacidad evolutiva y diversidad celular', question: '¿Cómo mantienen las poblaciones en evolución su resiliencia sin perder la capacidad de cambiar? Me interesan las conexiones entre evolución del cáncer, heterogeneidad celular y microambiente tumoral.',
    multiome: 'Análisis multiómico de núcleos individuales', multiomeText: 'Análisis conjunto de expresión génica y accesibilidad de la cromatina para estudiar estados y heterogeneidad celulares.',
    modeling: 'Modelado basado en agentes', modelingText: 'Modelos computacionales de las células y sus interacciones entre sí y con el entorno.',
    theory: 'Perspectivas matemáticas de la evolución', theoryText: 'Enfoques cuantitativos de la robustez, la capacidad evolutiva y la adaptación a distintas escalas biológicas.',
    about: 'Soy estudiante de doctorado en Matemáticas Aplicadas y Estadística en Stony Brook University. Mi formación abarca ciencias de la vida e ingeniería eléctrica.',
    phd: 'Doctorado en Matemáticas Aplicadas y Estadística · en curso', masters: 'Máster en Ciencias de la Vida', bachelors: 'Grados en Ciencias de la Vida e Ingeniería Eléctrica',
    publications: 'Publicaciones seleccionadas', interests: 'Intereses', interestsText: 'Además de investigar, escribo aquí sobre filosofía de la ciencia y otros intereses personales. La creación de mundos tiene su propio sitio.', worldbuilding: 'Creación de mundos', email: 'Correo electrónico',
  },
  fr: {
    role: 'Doctorant · Mathématiques appliquées et statistiques', lead: 'J’étudie la robustesse et l’évolvabilité du cancer par des approches mathématiques et informatiques pour comprendre l’adaptation des populations cellulaires.',
    focus: 'Évolution du cancer', overview: 'Robustesse, évolvabilité et diversité cellulaire', question: 'Comment les populations en évolution restent-elles résilientes tout en conservant leur capacité à changer ? Mes intérêts relient évolution du cancer, hétérogénéité cellulaire et microenvironnement tumoral.',
    multiome: 'Analyse multiomique sur noyaux uniques', multiomeText: 'Analyse conjointe de l’expression génique et de l’accessibilité de la chromatine pour étudier les états et l’hétérogénéité cellulaires.',
    modeling: 'Modélisation à base d’agents', modelingText: 'Modèles informatiques des cellules et de leurs interactions entre elles et avec leur environnement.',
    theory: 'Perspectives mathématiques sur l’évolution', theoryText: 'Approches quantitatives de la robustesse, de l’évolvabilité et de l’adaptation à différentes échelles biologiques.',
    about: 'Je suis doctorant en mathématiques appliquées et statistiques à Stony Brook University. Ma formation couvre les sciences de la vie et le génie électrique.',
    phd: 'Doctorat en mathématiques appliquées et statistiques · en cours', masters: 'Master en sciences de la vie', bachelors: 'Diplômes de premier cycle en sciences de la vie et génie électrique',
    publications: 'Publications sélectionnées', interests: 'Centres d’intérêt', interestsText: 'Outre la recherche, j’écris ici sur la philosophie des sciences et mes autres centres d’intérêt. La création de mondes a son propre site.', worldbuilding: 'Création de mondes', email: 'Courriel',
  },
  ru: {
    role: 'Аспирант · Прикладная математика и статистика', lead: 'Я изучаю устойчивость и эволюционируемость рака, используя математические и вычислительные подходы для понимания адаптации клеточных популяций.',
    focus: 'Эволюция рака', overview: 'Устойчивость, эволюционируемость и клеточное разнообразие', question: 'Как эволюционирующие популяции сохраняют устойчивость и способность меняться? Меня интересуют связи эволюции рака, клеточной гетерогенности и микроокружения опухоли.',
    multiome: 'Мультиомный анализ отдельных ядер', multiomeText: 'Совместный анализ экспрессии генов и доступности хроматина для изучения клеточных состояний и гетерогенности.',
    modeling: 'Агентное моделирование', modelingText: 'Вычислительные модели клеток и их взаимодействий друг с другом и с окружающей средой.',
    theory: 'Математический взгляд на эволюцию', theoryText: 'Количественные подходы к устойчивости, эволюционируемости и адаптации на разных биологических уровнях.',
    about: 'Я учусь в аспирантуре по прикладной математике и статистике в Stony Brook University. Моё образование связано с науками о жизни и электротехникой.',
    phd: 'Аспирантура по прикладной математике и статистике · продолжается', masters: 'Магистр наук о жизни', bachelors: 'Бакалавр наук о жизни и бакалавр электротехники',
    publications: 'Избранные публикации', interests: 'Интересы', interestsText: 'Помимо исследований, я пишу здесь о философии науки и личных интересах. Создание вымышленных миров вынесено на отдельный сайт.', worldbuilding: 'Создание вымышленных миров', email: 'Электронная почта',
  },
  ar: {
    role: 'طالب دكتوراه · الرياضيات التطبيقية والإحصاء', lead: 'أدرس المتانة والقابلية للتطور في السرطان باستخدام مناهج رياضية وحاسوبية لفهم كيفية تكيّف تجمعات الخلايا.',
    focus: 'تطور السرطان', overview: 'المتانة والقابلية للتطور والتنوع الخلوي', question: 'كيف تحافظ التجمعات المتطورة على صمودها وقدرتها على التغير؟ أهتم بالروابط بين تطور السرطان والتغاير الخلوي والبيئة الدقيقة للورم.',
    multiome: 'تحليل متعدد الأوميكس لنوى منفردة', multiomeText: 'تحليل مشترك للتعبير الجيني وإمكانية الوصول إلى الكروماتين لدراسة الحالات الخلوية وتغايرها.',
    modeling: 'النمذجة القائمة على الوكلاء', modelingText: 'نماذج حاسوبية للخلايا وتفاعلاتها مع بعضها ومع بيئتها.',
    theory: 'منظورات رياضية للتطور', theoryText: 'مناهج كمية للمتانة والقابلية للتطور والتكيف عبر المقاييس البيولوجية.',
    about: 'أنا طالب دكتوراه في الرياضيات التطبيقية والإحصاء في Stony Brook University. تشمل خلفيتي علوم الحياة والهندسة الكهربائية.',
    phd: 'دراسة الدكتوراه في الرياضيات التطبيقية والإحصاء · مستمرة', masters: 'ماجستير في علوم الحياة', bachelors: 'بكالوريوس في علوم الحياة وبكالوريوس في الهندسة الكهربائية',
    publications: 'منشورات مختارة', interests: 'اهتمامات', interestsText: 'إلى جانب البحث، أكتب هنا عن فلسفة العلم واهتماماتي الشخصية. لبناء العوالم الخيالية موقع مستقل.', worldbuilding: 'بناء العوالم الخيالية', email: 'البريد الإلكتروني',
  },
  ja: {
    role: '博士課程 · 応用数学・統計学', lead: 'がんの進化における頑健性と進化可能性を研究し、数学的・計算的手法で細胞集団の適応を理解することを目指しています。',
    focus: 'がんの進化', overview: '頑健性、進化可能性、細胞の多様性', question: '進化する集団は、変化に耐えながら変わる力をどう維持するのでしょうか。がんの進化、細胞の不均一性、腫瘍微小環境を結ぶ問いに関心があります。',
    multiome: '単一核マルチオーム解析', multiomeText: '遺伝子発現とクロマチンアクセシビリティを統合し、細胞状態と不均一性を調べます。',
    modeling: 'エージェントベース・モデリング', modelingText: '細胞同士、および細胞と環境の相互作用を計算モデルで調べます。',
    theory: '進化への数学的視点', theoryText: '生物学的なスケールをまたいで頑健性、進化可能性、適応を定量的に考えます。',
    about: 'Stony Brook University の応用数学・統計学博士課程に在籍しています。生命科学と電気工学を学びました。',
    phd: '応用数学・統計学博士課程 · 在籍中', masters: '生命科学修士', bachelors: '生命科学学士・電気工学学士',
    publications: '主な論文', interests: '関心', interestsText: '研究のほか、科学哲学や個人的な関心についてもここに書きます。世界観の創作は別のサイトで扱います。', worldbuilding: '世界観の創作', email: 'メール',
  },
  de: {
    role: 'Doktorand · Angewandte Mathematik und Statistik', lead: 'Ich untersuche Robustheit und Evolvierbarkeit bei Krebs und nutze mathematische und computergestützte Ansätze, um die Anpassung von Zellpopulationen zu verstehen.',
    focus: 'Krebsevolution', overview: 'Robustheit, Evolvierbarkeit und zelluläre Vielfalt', question: 'Wie bleiben evolvierende Populationen widerstandsfähig und zugleich veränderungsfähig? Mich interessieren die Verbindungen zwischen Krebsevolution, zellulärer Heterogenität und Tumormikroumgebung.',
    multiome: 'Einzelkern-Multiom-Analyse', multiomeText: 'Gemeinsame Analyse von Genexpression und Chromatinzugänglichkeit zur Untersuchung von Zellzuständen und Heterogenität.',
    modeling: 'Agentenbasierte Modellierung', modelingText: 'Computermodelle von Zellen und ihren Wechselwirkungen untereinander und mit ihrer Umgebung.',
    theory: 'Mathematische Perspektiven auf Evolution', theoryText: 'Quantitative Ansätze zu Robustheit, Evolvierbarkeit und Anpassung über biologische Skalen hinweg.',
    about: 'Ich promoviere in Angewandter Mathematik und Statistik an der Stony Brook University. Mein Hintergrund umfasst Biowissenschaften und Elektrotechnik.',
    phd: 'Promotion in Angewandter Mathematik und Statistik · laufend', masters: 'M.Sc. in Biowissenschaften', bachelors: 'B.Sc. in Biowissenschaften und B.Eng. in Elektrotechnik',
    publications: 'Ausgewählte Publikationen', interests: 'Interessen', interestsText: 'Neben der Forschung schreibe ich hier über Wissenschaftsphilosophie und persönliche Interessen. Weltenbau hat eine eigene Website.', worldbuilding: 'Weltenbau', email: 'E-Mail',
  },
  fa: {
    role: 'دانشجوی دکتری · ریاضیات کاربردی و آمار', lead: 'استواری و تکامل‌پذیری در سرطان را با رویکردهای ریاضی و محاسباتی بررسی می‌کنم تا سازگاری جمعیت‌های سلولی را درک کنم.',
    focus: 'تکامل سرطان', overview: 'استواری، تکامل‌پذیری و تنوع سلولی', question: 'جمعیت‌های در حال تکامل چگونه هم تاب‌آوری و هم توان تغییر را حفظ می‌کنند؟ به ارتباط تکامل سرطان، ناهمگنی سلولی و ریزمحیط تومور علاقه‌مندم.',
    multiome: 'تحلیل چنداُمیکی تک‌هسته‌ای', multiomeText: 'تحلیل مشترک بیان ژن و دسترس‌پذیری کروماتین برای بررسی حالت‌ها و ناهمگنی سلولی.',
    modeling: 'مدل‌سازی مبتنی بر عامل', modelingText: 'مدل‌های محاسباتی سلول‌ها و تعامل آن‌ها با یکدیگر و محیطشان.',
    theory: 'دیدگاه‌های ریاضی دربارهٔ تکامل', theoryText: 'رویکردهای کمی به استواری، تکامل‌پذیری و سازگاری در مقیاس‌های زیستی.',
    about: 'دانشجوی دکتری ریاضیات کاربردی و آمار در Stony Brook University هستم. پیشینهٔ تحصیلی من علوم زیستی و مهندسی برق را در بر می‌گیرد.',
    phd: 'دکتری ریاضیات کاربردی و آمار · در حال تحصیل', masters: 'کارشناسی ارشد علوم زیستی', bachelors: 'کارشناسی علوم زیستی و کارشناسی مهندسی برق',
    publications: 'مقاله‌های منتخب', interests: 'علایق', interestsText: 'در کنار پژوهش، اینجا دربارهٔ فلسفهٔ علم و علایق شخصی می‌نویسم. جهان‌سازی در وب‌سایتی جداگانه است.', worldbuilding: 'جهان‌سازی', email: 'ایمیل',
  },
};
