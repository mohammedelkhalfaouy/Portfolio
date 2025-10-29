// Translations
const translations = {
  en: {
    name: "Mohammed El Khalfaouy",
    title: "Frontend Developer · Curious Learner",
    "nav-projects": "Projects",
    "nav-about": "About",
    "hero-title": "I build clean and modern web interfaces.",
    "hero-desc": "I craft responsive, minimalistic, and accessible web experiences using HTML, CSS, and JavaScript.",
    "btn-projects": "See Projects",
    "btn-contact": "Contact",
    "projects-title": "Projects",
    "projects-sub": "Here are my latest works and learning projects.",
    "project1-title": "Coffee Website",
    "project1-desc": "A clean, responsive landing page for a coffee shop.",
    "project2-title": "E-Commerce Store",
    "project2-desc": "A JavaScript shopping cart demo with product listing and checkout UI.",
    "project3-title": "Password Generator",
    "project3-desc": "Small utility that generates secure passwords in the browser.",
    "link-live": "Live",
    "link-source": "Source",
    "about-title": "About Me",
    "about-intro": "Hi — I'm Mohammed El Khalfaouy, a frontend developer passionate about creating elegant and functional user interfaces. I love turning simple ideas into beautiful and useful projects.",
    "about-point1": "• Passionate about clean code & minimal UI",
    "about-point2": "• Strong foundation in HTML, CSS, and JavaScript",
    "about-point3": "• Experience building small tools and interactive demos",
    "about-point4": "• Constantly learning — currently exploring frameworks",
    "contact-title": "Contact",
    "contact-desc": "Let's connect! Reach me via GitHub or email for collaboration or feedback.",
    "btn-email": "Email",
    "footer-copy": "© 2025 Mohammed El Khalfaouy",
    "footer-built": "Built with ❤️ using HTML & CSS"
  },
  ar: {
    name: "محمد الخلفاوي",
    title: "مطور واجهات أمامية · متعلم فضولي",
    "nav-projects": "المشاريع",
    "nav-about": "عني",
    "hero-title": "أقوم ببناء واجهات ويب نظيفة وحديثة.",
    "hero-desc": "أصمم تجارب ويب متجاوبة وبسيطة وسهلة الوصول باستخدام HTML و CSS و JavaScript.",
    "btn-projects": "شاهد المشاريع",
    "btn-contact": "تواصل معي",
    "projects-title": "المشاريع",
    "projects-sub": "هنا أحدث أعمالي ومشاريعي التعليمية.",
    "project1-title": "موقع القهوة",
    "project1-desc": "صفحة هبوط نظيفة ومتجاوبة لمقهى.",
    "project2-title": "متجر إلكتروني",
    "project2-desc": "عرض توضيحي لسلة التسوق بواسطة JavaScript مع قائمة المنتجات وواجهة الدفع.",
    "project3-title": "مولد كلمات المرور",
    "project3-desc": "أداة صغيرة لتوليد كلمات مرور آمنة في المتصفح.",
    "link-live": "مباشر",
    "link-source": "المصدر",
    "about-title": "عني",
    "about-intro": "مرحباً — أنا محمد الخلفاوي، مطور واجهات أمامية شغوف بإنشاء واجهات مستخدم أنيقة ووظيفية. أحب تحويل الأفكار البسيطة إلى مشاريع جميلة ومفيدة.",
    "about-point1": "• شغوف بالكود النظيف والواجهات البسيطة",
    "about-point2": "• أساس قوي في HTML و CSS و JavaScript",
    "about-point3": "• خبرة في بناء أدوات صغيرة وعروض تفاعلية",
    "about-point4": "• أتعلم باستمرار — أستكشف حالياً الأطر البرمجية",
    "contact-title": "تواصل",
    "contact-desc": "لنتواصل! تواصل معي عبر GitHub أو البريد الإلكتروني للتعاون أو التعليقات.",
    "btn-email": "البريد الإلكتروني",
    "footer-copy": "© 2025 محمد الخلفاوي",
    "footer-built": "صُنع بـ ❤️ باستخدام HTML و CSS"
  },
  fr: {
    name: "Mohammed El Khalfaouy",
    title: "Développeur Frontend · Apprenant Curieux",
    "nav-projects": "Projets",
    "nav-about": "À propos",
    "hero-title": "Je crée des interfaces web propres et modernes.",
    "hero-desc": "Je conçois des expériences web réactives, minimalistes et accessibles en utilisant HTML, CSS et JavaScript.",
    "btn-projects": "Voir les projets",
    "btn-contact": "Contact",
    "projects-title": "Projets",
    "projects-sub": "Voici mes derniers travaux et projets d'apprentissage.",
    "project1-title": "Site Web de Café",
    "project1-desc": "Une page d'accueil propre et réactive pour un café.",
    "project2-title": "Boutique E-Commerce",
    "project2-desc": "Une démo de panier d'achat JavaScript avec liste de produits et interface de paiement.",
    "project3-title": "Générateur de Mots de Passe",
    "project3-desc": "Petit utilitaire qui génère des mots de passe sécurisés dans le navigateur.",
    "link-live": "Direct",
    "link-source": "Source",
    "about-title": "À propos de moi",
    "about-intro": "Salut — Je suis Mohammed El Khalfaouy, un développeur frontend passionné par la création d'interfaces utilisateur élégantes et fonctionnelles. J'aime transformer des idées simples en projets beaux et utiles.",
    "about-point1": "• Passionné par le code propre et l'UI minimaliste",
    "about-point2": "• Base solide en HTML, CSS et JavaScript",
    "about-point3": "• Expérience dans la création d'outils et de démos interactives",
    "about-point4": "• Apprentissage constant — j'explore actuellement les frameworks",
    "contact-title": "Contact",
    "contact-desc": "Connectons-nous ! Contactez-moi via GitHub ou par e-mail pour une collaboration ou des commentaires.",
    "btn-email": "Email",
    "footer-copy": "© 2025 Mohammed El Khalfaouy",
    "footer-built": "Créé avec ❤️ en utilisant HTML & CSS"
  }
};

// Current language
let currentLang = 'en';
const langFlags = {
  en: '🇬🇧',
  ar: '🇸🇦',
  fr: '🇫🇷'
};
const langCodes = {
  en: 'EN',
  ar: 'AR',
  fr: 'FR'
};

// Language toggle
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');
const flagIcon = document.querySelector('.flag-icon');

langToggle.addEventListener('click', () => {
  const langs = ['en', 'ar', 'fr'];
  const currentIndex = langs.indexOf(currentLang);
  currentLang = langs[(currentIndex + 1) % langs.length];
  
  updateLanguage();
});

function updateLanguage() {
  // Update text content
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  // Update button
  flagIcon.textContent = langFlags[currentLang];
  langText.textContent = langCodes[currentLang];
  
  // Update direction for Arabic
  if (currentLang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.setAttribute('dir', 'ltr');
  }
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeIcon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});