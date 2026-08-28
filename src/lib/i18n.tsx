import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "ar";

const translations = {
  en: {
    nav: {
      home: "Home",
      programs: "Programs",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      join: "Join now",
      language: "العربية",
    },

    hero: {
      badge: "GO AI Academy · Flagship program",
      title: "Learn financial markets. Trade with a system. Grow with a community.",
      description:
        "The Goat is GO AI's flagship program. AI-powered education, expert-led recommendations, and hands-on support to help you build real skills in forex, crypto, gold, and investing.",
      explore: "Explore the program",
      pricing: "See pricing",
      videoTitle: "Meet the founder of GO AI Academy",
      videoText: "Watch: the founder explains how The Goat works",
      stats: {
        arabCountries: "Arab countries",
        worldwide: "Countries worldwide",
        experts: "Experts & instructors",
        conferences: "Conferences yearly",
      },
    },

    benefits: {
      title: "What you get",
      description:
        "Everything included in The Goat, from the first lesson to daily support once you start trading.",
      items: [
        "AI-powered complete education system",
        "Weekly follow-up system with 10 calls",
        "AI assistant trained on team expertise",
        "15+ specialists providing market recommendations",
        "Multiple income-generating tracks across investment fields",
        "Community space",
        "Personal mentor day-to-day",
        "Daily dedicated-team support",
      ],
    },

    programs: {
      title: "Programs",
      description:
        "Seven connected tracks, structured teaching, live specialist coverage, and AI systems built for each market.",
      education: {
        title: "Education",
        body: "We teach financial markets from the ground up to a professional level, led by 6+ Arab instructors with 9+ years of experience each.",
      },
      recommendations: {
        title: "Market recommendations",
        body: "Our 15+ specialists each run a dedicated channel in their area of focus: forex, metals, stock indices, investment opportunities, crypto, and oil.",
      },
      hunter: {
        title: "Go Hunter — gold system",
        body: "An AI-driven system that generates ready technical signals with a single click, helping you spot opportunities in the gold market.",
      },
      maestro: {
        title: "Go Maestro — forex system",
        body: "An AI-driven system built to surface ready technical signals in real time, helping you identify opportunities across the forex market.",
      },
      crypto: {
        title: "Crypto system",
        body: "An AI-driven system that scans the crypto market and delivers ready technical signals with a single click.",
      },
      investment: {
        title: "Investment system",
        body: "Investment knowledge is one of the most valuable skills of this era. Our AI reviews the market daily to surface strong investment opportunities, with a daily update on your portfolio, no extra effort required on your side.",
      },
      os: {
        title: "GO OS — AI assistant",
        body: "GO OS is an AI system trained on our team's expertise and approach. Ask it anything related to the field and get accurate, grounded answers back.",
      },
    },

    about: {
      title: "About GO AI",
      description:
        "GO AI is one of the leading educational academies in the Arab world, with a presence in 22 Arab countries and 50+ countries worldwide. Our team includes 15+ Arab experts and instructors working across 6+ languages, and we host 20+ conferences globally each year.",
      arabCountries: "Arab countries",
      worldwide: "Countries worldwide",
      languages: "Languages taught",
      conferences: "Global conferences a year",
    },

    support: {
      title: "Follow-up & support",
      description:
        "We built a real-time support system so you're never stuck: ask a question and get a response in under 10 minutes, backed by regular follow-up calls to keep you moving forward.",
      fastResponse: "Under 10 minutes average response time",
      followup: "Regular scheduled follow-up calls",
      team: "A dedicated team available every day",
      community: "Community",
      communityDescription:
        "Join a community of thousands of members from around the world. Build real connections with people from different countries, all working toward the same goal.",
      members: "Members across 50+ countries",
    },

    pricing: {
      title: "Choose your plan",
      description:
        "Three levels of access to the same program. Compare what's included and pick the depth that fits you.",
      included: "What's included",
      popular: "Most popular",
      days: "days",
      getStarted: "Get started",
      planComparison: "Plan comparison for Connect, Create and Complete",
      includedLabel: "Included",
      notIncluded: "Not included",

      rows: {
        fundamentals: "Market fundamentals course",
        forex: "Forex market access",
        crypto: "Crypto market access",
        ecommerce: "E-commerce course",
        aiBot: "24/7 AI support bot",
        recommendations: "Recommendation channels",
        technical: "Technical analysis course",
        mastery: "Trading mastery plan",
        timing: "Timing analysis",
        investment: "Investment plan",
        weekly: "Weekly follow-up calls",
        fullStrategy: "Full trading + investment strategy suite",
        literacy: "Financial literacy course",
        priority: "Priority follow-up support",
      },
    },

    testimonials: {
      title: "What members say",
      description:
        "Feedback from members working through the program across different markets and time zones.",
      roles: {
        layla: "Member since 2024 · Amman",
        marcus: "Member since 2025 · Manchester",
        sofia: "Member since 2024 · Milan",
        omar: "Member since 2025 · Casablanca",
        hana: "Member since 2023 · Dubai",
        julian: "Member since 2025 · Madrid",
      },
      quotes: {
        layla:
          "I started with zero background. The structured lessons and the weekly calls kept me accountable, and I finally understand what I'm doing instead of guessing.",
        marcus:
          "The specialist channels changed how I follow the market. Having one place for gold, indices and forex coverage saves me hours every week.",
        sofia:
          "Support genuinely answers in minutes. When I got stuck on risk sizing, my mentor walked me through it the same day.",
        omar:
          "The investment track is the part I use most. A daily portfolio update and a shortlist of opportunities is exactly what I needed.",
        hana:
          "The community is the surprise. Thousands of people from different countries, all learning the same system and sharing what works.",
        julian:
          "GO OS answers questions with the same logic the instructors teach, so nothing contradicts the course material.",
      },
    },

    contact: {
      title: "Contact us",
      description:
        "Tell us where you are in your journey and which markets you want to learn. Our team will point you to the right plan.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "What would you like to learn?",
      send: "Send message",
      nameError: "Please enter your name.",
      emailError: "Please enter your email address.",
      validEmailError: "Please enter a valid email address.",
      messageError: "Please enter a message.",
      success:
        "Thank you. Your message has been sent and our team will contact you soon.",
    },

    cookie: {
      text: "We use cookies to ensure a smooth browsing experience. By continuing, you agree to our use of cookies.",
      button: "Got it",
    },

    footer: {
      description:
        "GO AI Academy's flagship financial markets education program, structured learning, expert recommendations, and daily support.",
      quickLinks: "Quick links",
      legal: "Contact",
      allRights: "All rights reserved.",
    },

    errors: {
      notFound: "Page not found",
      notFoundDescription:
        "The page you're looking for doesn't exist or has been moved.",
      goHome: "Go home",
      loadError: "This page didn't load",
      loadDescription:
        "Something went wrong on our end. You can try refreshing or head back home.",
      tryAgain: "Try again",
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      programs: "البرامج",
      pricing: "الأسعار",
      about: "عن GO AI",
      contact: "تواصل معنا",
      join: "انضم الآن",
      language: "English",
    },

    hero: {
      badge: "أكاديمية GO AI · البرنامج الرئيسي",
      title: "تعلّم الأسواق المالية. تداول بنظام. وتطوّر مع مجتمع متكامل.",
      description:
        "The Goat هو البرنامج الرئيسي من GO AI. تعليم مدعوم بالذكاء الاصطناعي، توصيات يقدمها خبراء، ودعم عملي يساعدك على بناء مهارات حقيقية في الفوركس والعملات الرقمية والذهب والاستثمار.",
      explore: "استكشف البرنامج",
      pricing: "شاهد الأسعار",
      videoTitle: "تعرّف على مؤسس GO AI Academy",
      videoText: "شاهد: المؤسس يشرح كيف يعمل The Goat",
      stats: {
        arabCountries: "دولة عربية",
        worldwide: "دولة حول العالم",
        experts: "خبير ومدرّب",
        conferences: "مؤتمر سنوي",
      },
    },

    benefits: {
      title: "ماذا ستحصل عليه",
      description:
        "كل ما يتضمنه The Goat، بدءًا من الدرس الأول وصولًا إلى الدعم اليومي بعد بدء التداول.",
      items: [
        "نظام تعليمي متكامل مدعوم بالذكاء الاصطناعي",
        "نظام متابعة أسبوعي يتضمن 10 مكالمات",
        "مساعد ذكاء اصطناعي مدرّب على خبرات الفريق",
        "أكثر من 15 متخصصًا يقدمون توصيات للسوق",
        "مسارات متعددة لتحقيق الدخل في مجالات الاستثمار",
        "مساحة مجتمعية متكاملة",
        "مرشد شخصي للمتابعة اليومية",
        "فريق دعم مخصص متاح يوميًا",
      ],
    },

    programs: {
      title: "البرامج",
      description:
        "سبعة مسارات مترابطة، تعليم منظم، متابعة مباشرة من المتخصصين، وأنظمة ذكاء اصطناعي مصممة لكل سوق.",
      education: {
        title: "التعليم",
        body: "نعلّم الأسواق المالية من الأساسيات حتى المستوى الاحترافي، بإشراف أكثر من 6 مدربين عرب يمتلك كل منهم أكثر من 9 سنوات من الخبرة.",
      },
      recommendations: {
        title: "توصيات السوق",
        body: "يدير أكثر من 15 متخصصًا قناة مخصصة في مجال تركيزه، تشمل الفوركس والمعادن ومؤشرات الأسهم والفرص الاستثمارية والعملات الرقمية والنفط.",
      },
      hunter: {
        title: "Go Hunter — نظام الذهب",
        body: "نظام مدعوم بالذكاء الاصطناعي يولّد إشارات فنية جاهزة بنقرة واحدة، لمساعدتك على اكتشاف الفرص في سوق الذهب.",
      },
      maestro: {
        title: "Go Maestro — نظام الفوركس",
        body: "نظام مدعوم بالذكاء الاصطناعي يعرض إشارات فنية جاهزة بشكل فوري، لمساعدتك على اكتشاف الفرص في سوق الفوركس.",
      },
      crypto: {
        title: "نظام العملات الرقمية",
        body: "نظام مدعوم بالذكاء الاصطناعي يقوم بتحليل سوق العملات الرقمية ويقدم إشارات فنية جاهزة بنقرة واحدة.",
      },
      investment: {
        title: "نظام الاستثمار",
        body: "المعرفة الاستثمارية من أهم المهارات في عصرنا. يقوم نظام الذكاء الاصطناعي بمراجعة السوق يوميًا لاكتشاف فرص استثمارية قوية، مع تحديث يومي لمحفظتك دون الحاجة إلى جهد إضافي منك.",
      },
      os: {
        title: "GO OS — مساعد الذكاء الاصطناعي",
        body: "GO OS هو نظام ذكاء اصطناعي مدرّب على خبرات فريقنا وطريقة عمله. اسأله عن أي شيء متعلق بالمجال واحصل على إجابات دقيقة وموثوقة.",
      },
    },

    about: {
      title: "عن GO AI",
      description:
        "GO AI هي إحدى الأكاديميات التعليمية الرائدة في العالم العربي، مع حضور في 22 دولة عربية وأكثر من 50 دولة حول العالم. يضم فريقنا أكثر من 15 خبيرًا ومدربًا عربيًا يعملون بأكثر من 6 لغات، وننظم أكثر من 20 مؤتمرًا حول العالم كل عام.",
      arabCountries: "دولة عربية",
      worldwide: "دولة حول العالم",
      languages: "اللغات التي يدرس بها",
      conferences: "مؤتمر عالمي سنويًا",
    },

    support: {
      title: "المتابعة والدعم",
      description:
        "أنشأنا نظام دعم فوري حتى لا تبقى عالقًا أبدًا: اطرح سؤالك واحصل على إجابة خلال أقل من 10 دقائق، مع مكالمات متابعة منتظمة تساعدك على الاستمرار والتقدم.",
      fastResponse: "متوسط وقت الاستجابة أقل من 10 دقائق",
      followup: "مكالمات متابعة مجدولة بانتظام",
      team: "فريق مخصص متاح يوميًا",
      community: "المجتمع",
      communityDescription:
        "انضم إلى مجتمع يضم آلاف الأعضاء من مختلف أنحاء العالم. ابنِ علاقات حقيقية مع أشخاص من دول مختلفة يعملون جميعًا نحو الهدف نفسه.",
      members: "أعضاء من أكثر من 50 دولة",
    },

    pricing: {
      title: "اختر خطتك",
      description:
        "ثلاثة مستويات للوصول إلى البرنامج نفسه. قارن ما تتضمنه كل خطة واختر المستوى المناسب لك.",
      included: "ماذا تتضمن الخطة",
      popular: "الأكثر شعبية",
      days: "يومًا",
      getStarted: "ابدأ الآن",
      planComparison: "مقارنة خطط Connect و Create و Complete",
      includedLabel: "متضمن",
      notIncluded: "غير متضمن",

      rows: {
        fundamentals: "دورة أساسيات الأسواق",
        forex: "الوصول إلى سوق الفوركس",
        crypto: "الوصول إلى سوق العملات الرقمية",
        ecommerce: "دورة التجارة الإلكترونية",
        aiBot: "بوت دعم بالذكاء الاصطناعي على مدار الساعة",
        recommendations: "قنوات التوصيات",
        technical: "دورة التحليل الفني",
        mastery: "خطة إتقان التداول",
        timing: "تحليل التوقيت",
        investment: "الخطة الاستثمارية",
        weekly: "مكالمات متابعة أسبوعية",
        fullStrategy: "حزمة استراتيجية التداول والاستثمار الكاملة",
        literacy: "دورة الثقافة المالية",
        priority: "دعم متابعة بأولوية",
      },
    },

    testimonials: {
      title: "ماذا يقول الأعضاء",
      description:
        "آراء أعضاء يعملون على تطوير مهاراتهم من خلال البرنامج في أسواق ومناطق زمنية مختلفة.",
      roles: {
        layla: "عضو منذ 2024 · عمّان",
        marcus: "عضو منذ 2025 · مانشستر",
        sofia: "عضو منذ 2024 · ميلانو",
        omar: "عضو منذ 2025 · الدار البيضاء",
        hana: "عضو منذ 2023 · دبي",
        julian: "عضو منذ 2025 · مدريد",
      },
      quotes: {
        layla:
          "بدأت من دون أي خلفية. الدروس المنظمة والمكالمات الأسبوعية ساعدتني على الالتزام، وأصبحت أخيرًا أفهم ما أفعله بدلًا من التخمين.",
        marcus:
          "قنوات المتخصصين غيّرت طريقة متابعتي للسوق. وجود مكان واحد للذهب والمؤشرات والفوركس يوفر عليّ ساعات كل أسبوع.",
        sofia:
          "الدعم يجيب فعلًا خلال دقائق. عندما واجهت مشكلة في تحديد حجم المخاطرة، شرح لي المرشد كل شيء في اليوم نفسه.",
        omar:
          "مسار الاستثمار هو الجزء الذي أستخدمه أكثر. تحديث يومي للمحفظة وقائمة مختصرة بالفرص هو بالضبط ما كنت أحتاجه.",
        hana:
          "المجتمع هو المفاجأة الحقيقية. آلاف الأشخاص من دول مختلفة يتعلمون النظام نفسه ويتشاركون ما ينجح معهم.",
        julian:
          "يجيب GO OS عن الأسئلة بالمنطق نفسه الذي يدرّسه المدربون، لذلك لا يوجد تعارض مع محتوى الدورة.",
      },
    },

    contact: {
      title: "تواصل معنا",
      description:
        "أخبرنا أين وصلت في رحلتك وما الأسواق التي تريد تعلمها، وسيساعدك فريقنا في اختيار الخطة المناسبة.",
      name: "الاسم",
      namePlaceholder: "اسمك الكامل",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      messagePlaceholder: "ماذا تريد أن تتعلم؟",
      send: "إرسال الرسالة",
      nameError: "يرجى إدخال اسمك.",
      emailError: "يرجى إدخال بريدك الإلكتروني.",
      validEmailError: "يرجى إدخال بريد إلكتروني صالح.",
      messageError: "يرجى إدخال رسالة.",
      success:
        "شكرًا لك. تم إرسال رسالتك وسيتواصل معك فريقنا قريبًا.",
    },

    cookie: {
      text: "نستخدم ملفات تعريف الارتباط لضمان تجربة تصفح سلسة. بمتابعة استخدام الموقع، فإنك توافق على استخدامها.",
      button: "حسنًا",
    },

    footer: {
      description:
        "البرنامج الرئيسي لتعليم الأسواق المالية من GO AI Academy، مع تعليم منظم وتوصيات من الخبراء ودعم يومي.",
      quickLinks: "روابط سريعة",
      legal: "التواصل",
      allRights: "جميع الحقوق محفوظة.",
    },

    errors: {
      notFound: "الصفحة غير موجودة",
      notFoundDescription:
        "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      goHome: "العودة إلى الرئيسية",
      loadError: "تعذر تحميل الصفحة",
      loadDescription:
        "حدث خطأ من جانبنا. يمكنك محاولة تحديث الصفحة أو العودة إلى الرئيسية.",
      tryAgain: "حاول مرة أخرى",
    },
  },
} as const;

type TranslationTree = typeof translations.en;

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationTree;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("goat-language") as Language | null;
    if (saved === "en" || saved === "ar") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    localStorage.setItem("goat-language", language);
  }, [language]);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language] as TranslationTree,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}