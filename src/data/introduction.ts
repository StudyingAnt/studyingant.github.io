import type { Language } from './languages';

type Introduction = {
  greeting: string;
  navigation: string;
  portrait: string;
  biography: [string, string, string];
  researchDetail: string;
  interests: string;
};

// Korean is the editorial source. English is owner-managed copy; neither shows
// an AI translation notice. The biography adapts the owner's lab-site screenshot.
export const introduction: Record<Language, Introduction> = {
  ko: {
    greeting: '안녕하세요, 과학하고 글쓰는 사람입니다.', navigation: '주요 메뉴', portrait: '사진 자리',
    biography: [
      '저는 진화의 근본적인 구조와 원리를 이해하는 데 관심이 있는 계산생물학자입니다. 특히 강건성과 진화가능성이 어떻게 연결되는지를 수학적·계산적 관점에서 탐구합니다.',
      '현재 암의 진화를 연구하며, 단일핵 멀티옴 분석과 행위자 기반 모형을 통해 시간에 따라 달라지는 환경이 암세포 집단의 다양성과 표현형에 미치는 영향을 살펴보고 있습니다.',
      '과학철학과 여러 주제에 관한 글을 쓰고, 언어를 배우는 일을 좋아합니다. 이곳에 연구와 일상의 관심사를 함께 담습니다.',
    ],
    researchDetail: '시간에 따라 달라지는 환경에서 세포 집단은 어떻게 다양성을 유지하고, 서로 다른 표현형을 보이며, 새로운 조건에 적응할까요? 단일핵 멀티옴 데이터와 세포 단위 모형을 함께 활용하여 분자 수준의 차이와 집단 수준의 진화 과정을 연결하고자 합니다.',
    interests: '과학철학과 글쓰기, 언어 배우기를 좋아합니다. 과학을 바라보는 생각부터 일상의 관심사와 취미까지 이곳에 글로 남기려 합니다. 세계관 제작은 Khartllan이라는 별도 공간에서 이어갑니다.',
  },
  en: {
    greeting: 'Hello, I do science and write.', navigation: 'Main navigation', portrait: 'Photo placeholder',
    biography: [
      'I’m a computational biologist interested in the underlying structures and principles of evolution, particularly the relationship between robustness and evolvability. I approach these questions through mathematics and computation.',
      'I currently study cancer evolution, combining single-nucleus multiome analysis and agent-based modeling to explore how environments that change over time affect the diversity and phenotypes of cancer cell populations.',
      'I also write about the philosophy of science and other subjects, and enjoy learning languages. This site brings together my research and everyday interests.',
    ],
    researchDetail: 'How do cell populations maintain diversity, express different phenotypes, and adapt to new conditions in environments that change over time? I bring together single-nucleus multiome data and cell-based models to connect molecular differences with population-level evolutionary dynamics.',
    interests: 'I enjoy the philosophy of science, writing, and learning languages. This is a space for reflections on science as well as everyday interests and hobbies. My worldbuilding continues in a separate space, Khartllan.',
  },
  zh: {
    greeting: '你好，我从事科学研究，也写作。', navigation: '主导航', portrait: '照片占位',
    biography: [
      '我是一名计算生物学研究者，关注演化的基本结构与原理，尤其是稳健性与可演化性之间的关系。我通过数学和计算方法探索这些问题。',
      '目前，我研究癌症演化，结合单核多组学分析与基于主体的建模，探索随时间变化的环境如何影响癌细胞群体的多样性与表型。',
      '我也写科学哲学及其他主题的文章，并喜欢学习语言。这里汇集了我的研究与日常兴趣。',
    ],
    researchDetail: '在随时间变化的环境中，细胞群体如何维持多样性、呈现不同表型并适应新的条件？我结合单核多组学数据与细胞模型，尝试将分子层面的差异与群体层面的演化动态联系起来。',
    interests: '我喜欢科学哲学、写作和学习语言。这里既记录对科学的思考，也记录日常兴趣与爱好。世界观创作则在独立的 Khartllan 网站上继续。',
  },
  es: {
    greeting: 'Hola, hago ciencia y escribo.', navigation: 'Navegación principal', portrait: 'Espacio para una foto',
    biography: [
      'Soy biólogo computacional y me interesan las estructuras y los principios fundamentales de la evolución, en particular la relación entre robustez y capacidad evolutiva. Abordo estas preguntas mediante las matemáticas y la computación.',
      'Actualmente estudio la evolución del cáncer, combinando el análisis multiómico de núcleos individuales y el modelado basado en agentes para explorar cómo los entornos que cambian con el tiempo afectan a la diversidad y los fenotipos de las poblaciones de células cancerosas.',
      'También escribo sobre filosofía de la ciencia y otros temas, y disfruto aprendiendo idiomas. Este sitio reúne mi investigación y mis intereses cotidianos.',
    ],
    researchDetail: '¿Cómo mantienen las poblaciones celulares su diversidad, expresan distintos fenotipos y se adaptan a nuevas condiciones en entornos que cambian con el tiempo? Combino datos multiómicos de núcleos individuales y modelos celulares para conectar las diferencias moleculares con la dinámica evolutiva de las poblaciones.',
    interests: 'Disfruto de la filosofía de la ciencia, la escritura y el aprendizaje de idiomas. Aquí comparto reflexiones sobre ciencia, intereses cotidianos y aficiones. Mi creación de mundos continúa en un espacio separado, Khartllan.',
  },
  fr: {
    greeting: 'Bonjour, je fais de la science et j’écris.', navigation: 'Navigation principale', portrait: 'Emplacement pour une photo',
    biography: [
      'Je suis biologiste computationnel et m’intéresse aux structures et aux principes fondamentaux de l’évolution, notamment au lien entre robustesse et évolvabilité. J’aborde ces questions par les mathématiques et le calcul.',
      'J’étudie actuellement l’évolution du cancer en combinant l’analyse multiomique sur noyaux uniques et la modélisation à base d’agents pour explorer l’effet des environnements variables dans le temps sur la diversité et les phénotypes des populations de cellules cancéreuses.',
      'J’écris aussi sur la philosophie des sciences et d’autres sujets, et j’aime apprendre des langues. Ce site réunit ma recherche et mes centres d’intérêt du quotidien.',
    ],
    researchDetail: 'Comment les populations cellulaires maintiennent-elles leur diversité, expriment-elles différents phénotypes et s’adaptent-elles à de nouvelles conditions dans des environnements variables dans le temps ? J’associe données multiomiques sur noyaux uniques et modèles cellulaires pour relier les différences moléculaires à la dynamique évolutive des populations.',
    interests: 'J’aime la philosophie des sciences, l’écriture et l’apprentissage des langues. Cet espace accueille mes réflexions sur la science, mes centres d’intérêt et mes loisirs. La création de mondes se poursuit dans un espace distinct, Khartllan.',
  },
  ru: {
    greeting: 'Здравствуйте, я занимаюсь наукой и пишу.', navigation: 'Основная навигация', portrait: 'Место для фотографии',
    biography: [
      'Я вычислительный биолог, интересующийся фундаментальными структурами и принципами эволюции, особенно связью устойчивости и эволюционируемости. Я исследую эти вопросы с помощью математики и вычислительных методов.',
      'Сейчас я изучаю эволюцию рака, объединяя мультиомный анализ отдельных ядер и агентное моделирование, чтобы понять, как изменяющаяся во времени среда влияет на разнообразие и фенотипы популяций раковых клеток.',
      'Я также пишу о философии науки и других темах и люблю изучать языки. Этот сайт объединяет мои исследования и повседневные интересы.',
    ],
    researchDetail: 'Как клеточные популяции сохраняют разнообразие, проявляют разные фенотипы и адаптируются к новым условиям в меняющейся со временем среде? Я объединяю мультиомные данные отдельных ядер и клеточные модели, чтобы связать молекулярные различия с эволюционной динамикой популяций.',
    interests: 'Мне нравятся философия науки, письмо и изучение языков. Здесь я делюсь размышлениями о науке, повседневными интересами и увлечениями. Создание вымышленных миров продолжается в отдельном пространстве — Khartllan.',
  },
  ar: {
    greeting: 'مرحبًا، أعمل في العلم وأكتب.', navigation: 'التنقل الرئيسي', portrait: 'مكان للصورة',
    biography: [
      'أنا باحث في علم الأحياء الحاسوبي، أهتم بالبنى والمبادئ الأساسية للتطور، ولا سيما العلاقة بين المتانة والقابلية للتطور. أتناول هذه الأسئلة من خلال الرياضيات والحوسبة.',
      'أدرس حاليًا تطور السرطان، وأجمع بين تحليل متعدد الأوميكس لنوى منفردة والنمذجة القائمة على الوكلاء لاستكشاف تأثير البيئات المتغيرة مع الزمن في تنوع تجمعات الخلايا السرطانية وأنماطها الظاهرية.',
      'أكتب أيضًا عن فلسفة العلم وموضوعات أخرى، وأستمتع بتعلّم اللغات. يجمع هذا الموقع أبحاثي واهتماماتي اليومية.',
    ],
    researchDetail: 'كيف تحافظ تجمعات الخلايا على التنوع وتُظهر أنماطًا ظاهرية مختلفة وتتكيف مع ظروف جديدة في بيئات تتغير مع الزمن؟ أجمع بيانات متعددة الأوميكس لنوى منفردة ونماذج خلوية لربط الاختلافات الجزيئية بالديناميكيات التطورية على مستوى التجمعات.',
    interests: 'أستمتع بفلسفة العلم والكتابة وتعلّم اللغات. أشارك هنا تأملاتي في العلم واهتماماتي وهواياتي اليومية. وأواصل بناء العوالم الخيالية في مساحة منفصلة، Khartllan.',
  },
  ja: {
    greeting: 'こんにちは。科学をし、文章を書く人です。', navigation: 'メインナビゲーション', portrait: '写真スペース',
    biography: [
      '進化の根本的な構造と原理、とりわけ頑健性と進化可能性の関係に関心を持つ計算生物学の研究者です。数学と計算の視点から、これらの問いを考えています。',
      '現在はがんの進化を研究し、単一核マルチオーム解析とエージェントベース・モデリングを組み合わせて、時間とともに変わる環境ががん細胞集団の多様性や表現型に及ぼす影響を探っています。',
      '科学哲学やさまざまなテーマについて文章を書き、言語を学ぶことも好きです。このサイトには研究と日々の関心をまとめています。',
    ],
    researchDetail: '時間とともに変わる環境で、細胞集団はどう多様性を維持し、異なる表現型を示し、新たな条件に適応するのでしょうか。単一核マルチオームデータと細胞モデルを組み合わせ、分子レベルの違いと集団レベルの進化動態を結びつけようとしています。',
    interests: '科学哲学、文章を書くこと、言語を学ぶことが好きです。科学についての考えから日常の関心や趣味まで、ここに書き留めます。世界観の創作は別の場所、Khartllan で続けています。',
  },
  de: {
    greeting: 'Hallo, ich forsche und schreibe.', navigation: 'Hauptnavigation', portrait: 'Platz für ein Foto',
    biography: [
      'Ich bin Computerbiologe und interessiere mich für die grundlegenden Strukturen und Prinzipien der Evolution, insbesondere für den Zusammenhang zwischen Robustheit und Evolvierbarkeit. Ich untersuche diese Fragen mit Mathematik und computergestützten Methoden.',
      'Derzeit erforsche ich die Krebsevolution. Dabei verbinde ich Einzelkern-Multiom-Analysen mit agentenbasierter Modellierung, um zu untersuchen, wie zeitlich veränderliche Umwelten die Vielfalt und Phänotypen von Krebszellpopulationen beeinflussen.',
      'Außerdem schreibe ich über Wissenschaftsphilosophie und andere Themen und lerne gern Sprachen. Diese Website vereint meine Forschung und meine Interessen im Alltag.',
    ],
    researchDetail: 'Wie erhalten Zellpopulationen ihre Vielfalt, bilden unterschiedliche Phänotypen aus und passen sich in zeitlich veränderlichen Umwelten an neue Bedingungen an? Ich kombiniere Einzelkern-Multiom-Daten mit Zellmodellen, um molekulare Unterschiede mit evolutionären Dynamiken auf Populationsebene zu verbinden.',
    interests: 'Ich mag Wissenschaftsphilosophie, Schreiben und Sprachenlernen. Hier teile ich Gedanken zur Wissenschaft sowie Interessen und Hobbys aus dem Alltag. Mein Weltenbau findet in einem eigenen Raum statt: Khartllan.',
  },
  fa: {
    greeting: 'سلام، به علم می‌پردازم و می‌نویسم.', navigation: 'ناوبری اصلی', portrait: 'جای عکس',
    biography: [
      'پژوهشگر زیست‌شناسی محاسباتی هستم و به ساختارها و اصول بنیادی تکامل، به‌ویژه رابطهٔ استواری و تکامل‌پذیری، علاقه دارم. این پرسش‌ها را از دیدگاه ریاضی و محاسباتی بررسی می‌کنم.',
      'اکنون تکامل سرطان را مطالعه می‌کنم و تحلیل چنداُمیکی تک‌هسته‌ای را با مدل‌سازی مبتنی بر عامل ترکیب می‌کنم تا بررسی کنم محیط‌های متغیر در زمان چگونه بر تنوع و فنوتیپ‌های جمعیت سلول‌های سرطانی اثر می‌گذارند.',
      'دربارهٔ فلسفهٔ علم و موضوعات دیگر هم می‌نویسم و از یادگیری زبان‌ها لذت می‌برم. این وب‌سایت پژوهش‌ها و علایق روزمرهٔ من را گرد هم می‌آورد.',
    ],
    researchDetail: 'جمعیت‌های سلولی در محیط‌های متغیر در زمان چگونه تنوع را حفظ می‌کنند، فنوتیپ‌های متفاوت نشان می‌دهند و با شرایط جدید سازگار می‌شوند؟ داده‌های چنداُمیکی تک‌هسته‌ای و مدل‌های سلولی را کنار هم می‌گذارم تا تفاوت‌های مولکولی را به پویایی تکاملی در سطح جمعیت پیوند دهم.',
    interests: 'به فلسفهٔ علم، نوشتن و یادگیری زبان‌ها علاقه دارم. اینجا دربارهٔ علم، علایق روزمره و سرگرمی‌هایم می‌نویسم. جهان‌سازی را در فضای جداگانه‌ای به نام Khartllan ادامه می‌دهم.',
  },
};
