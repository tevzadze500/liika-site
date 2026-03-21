/* =========================================================================
   LIIKA PHOTOGRAPHE — JavaScript
   Premium Wedding Photography Website
   ========================================================================= */

const translations = {
    fr: {
        // Meta & Nav
        page_title: "Liika Photographe | Photographie de Mariage de Luxe",
        nav_home: "Accueil",
        nav_portfolio: "Portfolio",
        nav_services: "Services",
        nav_about: "À propos",
        nav_book: "Réserver",
        
        // Hero
        hero_badge: "Tétouan, Maroc",
        hero_line1: "Luxury Wedding",
        hero_line2: "Photography",
        hero_subtitle: "L'art de capturer des moments intemporels",
        hero_cta: "Réserver Votre Date",
        hero_cta2: "Découvrir",
        
        // Statement
        statement_title: "Nous ne prenons pas de photos.<br>Nous créons des héritages visuels.",
        
        // Featured
        featured_label: "Élégance Pure",
        
        // Narrative
        narrative_eyebrow: "Notre Vision",
        narrative_title: "La poésie visuelle<br>de votre union",
        narrative_p1: "Chaque mariage est une œuvre d'art unique. Notre approche éditoriale capture l'essence émotionnelle de votre journée avec une élégance cinématographique qui transcende le temps.",
        narrative_p2: "Basés à Tétouan, nous nous inspirons des textures riches du Maroc, de la lumière dorée de la Méditerranée et de l'intimité authentique de votre histoire d'amour.",
        
        // Portfolio
        portfolio_eyebrow: "Portfolio",
        portfolio_title: "Collections Choisies",
        port_cap1: "La Mariée",
        port_cap2: "Le Bouquet",
        port_cap3: "L'Alliance",
        port_cap4: "Traditions",
        
        // Diptych
        diptych_eyebrow: "Les Détails",
        diptych_title: "Chaque détail<br>raconte une histoire",
        diptych_text: "Des anneaux d'alliance aux traditions du henné, nous immortalisons les moments intimes qui définissent votre célébration unique.",
        
        // Services
        services_eyebrow: "Services",
        services_title: "Une Expérience<br>Sur Mesure",
        services_intro: "De la consultation initiale à la livraison de votre album d'art, chaque étape est orchestrée avec soin pour créer une expérience luxueuse et sans stress.",
        
        service1_title: "Collection Signature",
        service1_desc: "Couverture complète du jour J, second photographe, galerie privée en ligne et album premium façonné à la main.",
        service1_f1: "• Couverture 8-12 heures",
        service1_f2: "• 500+ photos éditées",
        service1_f3: "• Album d'art 30x30cm",
        
        service2_title: "Destination Wedding",
        service2_desc: "Couverture exclusive pour cérémonies intimes dans des lieux exceptionnels à travers le Maroc et l'international.",
        service2_f1: "• Voyages au Maroc inclus",
        service2_f2: "• Repérages pré-mariage",
        service2_f3: "• Drone & vidéo disponibles",
        
        service3_title: "Séance Éditoriale",
        service3_desc: "Une session créative et stylisée pour vos fiançailles, portrait de couple ou célébration pré-mariage.",
        service3_f1: "• Direction artistique",
        service3_f2: "• Lieux personnalisés",
        service3_f3: "• 75+ photos éditées",
        
        // About
        about_eyebrow: "L'Artiste",
        about_title: "Derrière l'Objectif",
        about_p1: "Je suis une conteuse d'histoires visuelles, inspirée par le jeu subtil de la lumière, l'architecture intemporelle et les émotions authentiques.",
        about_p2: "Basée à Tétouan, mon travail est profondément influencé par la richesse culturelle du Maroc — ses textures somptueuses, ses palettes chaleureuses et ses traditions ancestrales.",
        about_p3: "Avec un œil éditorial formé aux standards internationaux et un cœur de documentariste, je me consacre à préserver votre héritage avec une élégance absolue.",
        
        // Testimonials
        testi_eyebrow: "Témoignages",
        testi_title: "Moments Partagés",
        
        testi1_quote: "Les photos de notre mariage sont un véritable chef-d'œuvre. Chaque émotion a été capturée avec une sensibilité et une élégance extraordinaires. Liika a su transformer notre journée en poésie visuelle.",
        testi1_name: "Sophie & Marc",
        testi1_location: "Tanger, 2025",
        
        testi2_quote: "Travailler avec Liika a été la meilleure décision de notre mariage. Son œil artistique et son professionnalisme nous ont offert des images dignes d'un magazine de haute couture.",
        testi2_name: "Amira & Youssef",
        testi2_location: "Marrakech, 2024",
        
        testi3_quote: "Un talent rare pour capturer l'instant présent avec une beauté intemporelle. Chaque photo raconte notre histoire avec une intensité émotionnelle qui nous fait pleurer de joie.",
        testi3_name: "Elena & Thomas",
        testi3_location: "Chefchaouen, 2025",
        
        // Team
        team_eyebrow: "Notre Équipe",
        team_title: "Les Artisans<br>de la Lumière",
        team_text: "Nous sommes un collectif restreint de créatifs passionnés, unis par une vision commune de l'excellence. Ensemble, nous orchestrons chaque mariage comme une chorégraphie visuelle, alliant précision éditoriale et sensibilité émotionnelle.",
        team_text2: "Notre approche collaborative garantit que chaque angle, chaque lumière et chaque instant soit capturé avec l'attention qu'il mérite.",
        
        // Contact
        contact_eyebrow: "Contact",
        contact_title: "Commençons Votre Histoire",
        contact_subtitle: "Nous n'acceptons qu'un nombre limité de mariages chaque année pour garantir un service d'excellence et une attention totale à chaque couple.",
        
        contact_wa_title: "WhatsApp",
        contact_wa_desc: "Discutez avec nous",
        contact_ig_title: "Instagram",
        contact_ig_desc: "Découvrez notre portfolio",
        
        // Form
        form_names: "Noms du Couple",
        form_names_ph: "Jane & John",
        form_email: "Email",
        form_email_ph: "hello@example.com",
        form_phone: "Téléphone",
        form_phone_ph: "+212 6 00 00 00 00",
        form_date: "Date du Mariage",
        form_message: "Parlez-nous de votre vision",
        form_message_ph: "Partagez votre histoire, vos inspirations...",
        form_submit: "Envoyer la Demande",
        
        // Footer
        footer_text: "Liika Photographe · Tétouan, Maroc",
        
        // Success
        success_msg: "✨ Demande envoyée avec succès ! Nous vous contacterons dans les 48 heures."
    },
    
    ar: {
        // Meta & Nav
        page_title: "ليكا للتصوير | تصوير حفلات زفاف فاخرة",
        nav_home: "الرئيسية",
        nav_portfolio: "معرض الصور",
        nav_services: "الخدمات",
        nav_about: "نبذة عنا",
        nav_book: "احجز الآن",
        
        // Hero
        hero_badge: "تطوان، المغرب",
        hero_line1: "تصوير زفاف",
        hero_line2: "فاخر",
        hero_subtitle: "فن توثيق اللحظات الخالدة",
        hero_cta: "احجز موعدك",
        hero_cta2: "اكتشف المزيد",
        
        // Statement
        statement_title: "نحن لا نلتقط الصور.<br>نحن نصنع إرثاً بصرياً.",
        
        // Featured
        featured_label: "أناقة خالصة",
        
        // Narrative
        narrative_eyebrow: "رؤيتنا",
        narrative_title: "الشعر البصري<br>لزفافكم",
        narrative_p1: "كل زفاف هو عمل فني فريد. يوثق أسلوبنا التحريري جوهر يومكم الخاص بأناقة سينمائية تتجاوز الزمن.",
        narrative_p2: "من تطوان، نستلهم من نسيج المغرب الغني، وضوء البحر الأبيض المتوسط الذهبي، والحميمية الأصيلة لقصة حبكم.",
        
        // Portfolio
        portfolio_eyebrow: "معرض الصور",
        portfolio_title: "مجموعات مختارة",
        port_cap1: "العروس",
        port_cap2: "الباقة",
        port_cap3: "الخاتم",
        port_cap4: "التقاليد",
        
        // Diptych
        diptych_eyebrow: "التفاصيل",
        diptych_title: "كل تفصيلة<br>تروي قصة",
        diptych_text: "من خواتم الزواج إلى تقاليد الحناء، نخلد اللحظات الحميمة التي تحدد احتفالكم الفريد.",
        
        // Services
        services_eyebrow: "الخدمات",
        services_title: "تجربة<br>مخصصة",
        services_intro: "من الاستشارة الأولية إلى تسليم ألبوم الصور الفني، كل مرحلة منسقة بعناية لخلق تجربة فاخرة وخالية من الإجهاد.",
        
        service1_title: "المجموعة المميزة",
        service1_desc: "تغطية كاملة ليوم الزفاف، مصور ثانٍ، معرض خاص عبر الإنترنت وألبوم فني مصنوع يدوياً.",
        service1_f1: "• تغطية 8-12 ساعة",
        service1_f2: "• أكثر من 500 صورة معدلة",
        service1_f3: "• ألبوم فني 30×30 سم",
        
        service2_title: "زفاف الوجهات",
        service2_desc: "تغطية حصرية لحفلات حميمية في أماكن استثنائية في المغرب ودولياً.",
        service2_f1: "• السفر داخل المغرب مشمول",
        service2_f2: "• جولات استكشافية قبل الزفاف",
        service2_f3: "• طائرة درون وفيديو متوفر",
        
        service3_title: "جلسة تحريرية",
        service3_desc: "جلسة إبداعية مصممة خصيصاً لخطوبتكم، صور الأزواج أو احتفال ما قبل الزفاف.",
        service3_f1: "• توجيه فني",
        service3_f2: "• أماكن مخصصة",
        service3_f3: "• أكثر من 75 صورة معدلة",
        
        // About
        about_eyebrow: "الفنانة",
        about_title: "خلف العدسة",
        about_p1: "أنا راوية قصص بصرية، مستوحاة من التفاعل الدقيق للضوء والهندسة المعمارية الخالدة والعواطف الأصيلة.",
        about_p2: "من تطوان، يتأثر عملي بعمق بالثراء الثقافي للمغرب — قوامه الفاخر، ولوحاته الدافئة، وتقاليده العريقة.",
        about_p3: "بعين تحريرية مدربة على المعايير الدولية وقلب وثائقي، أكرس نفسي للحفاظ على إرثكم بأناقة مطلقة.",
        
        // Testimonials
        testi_eyebrow: "آراء العملاء",
        testi_title: "لحظات مشتركة",
        
        testi1_quote: "صور زفافنا تحفة فنية حقيقية. تم توثيق كل عاطفة بحساسية وأناقة استثنائية. تمكنت ليكا من تحويل يومنا إلى شعر بصري.",
        testi1_name: "صوفي ومارك",
        testi1_location: "طنجة، 2025",
        
        testi2_quote: "كان العمل مع ليكا أفضل قرار في زفافنا. منحتنا عينها الفنية واحترافيتها صوراً تليق بمجلة أزياء راقية.",
        testi2_name: "أميرة ويوسف",
        testi2_location: "مراكش، 2024",
        
        testi3_quote: "موهبة نادرة في التقاط اللحظة الحاضرة بجمال خالد. كل صورة تروي قصتنا بكثافة عاطفية تجعلنا نبكي من الفرح.",
        testi3_name: "إلينا وتوماس",
        testi3_location: "شفشاون، 2025",
        
        // Team
        team_eyebrow: "فريقنا",
        team_title: "صناع<br>النور",
        team_text: "نحن مجموعة محدودة من المبدعين المتحمسين، متحدون برؤية مشتركة للتميز. معاً، ننسق كل زفاف كرقصة بصرية، تجمع بين الدقة التحريرية والحساسية العاطفية.",
        team_text2: "يضمن نهجنا التعاوني التقاط كل زاوية وكل ضوء وكل لحظة بالاهتمام الذي تستحقه.",
        
        // Contact
        contact_eyebrow: "تواصل معنا",
        contact_title: "لنبدأ قصتكم",
        contact_subtitle: "نقبل عدداً محدوداً من حفلات الزفاف كل عام لضمان خدمة متميزة واهتمام كامل بكل زوجين.",
        
        contact_wa_title: "واتساب",
        contact_wa_desc: "تحدث معنا",
        contact_ig_title: "إنستغرام",
        contact_ig_desc: "اكتشف معرضنا",
        
        // Form
        form_names: "أسماء العروسين",
        form_names_ph: "ليلى وعمر",
        form_email: "البريد الإلكتروني",
        form_email_ph: "hello@example.com",
        form_phone: "رقم الهاتف",
        form_phone_ph: "+212 6 00 00 00 00",
        form_date: "تاريخ الزفاف",
        form_message: "أخبرنا عن رؤيتك",
        form_message_ph: "شاركنا قصتك، إلهامك...",
        form_submit: "إرسال الطلب",
        
        // Footer
        footer_text: "ليكا للتصوير · تطوان، المغرب",
        
        // Success
        success_msg: "✨ تم إرسال الطلب بنجاح! سنتواصل معك خلال 48 ساعة."
    }
};

/* =========================================================================
   INITIALIZATION
   ========================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initHero();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initRevealOnScroll();
    initLightbox();
    initForm();
    initLanguageSwitcher();
    initPortfolioHover();
});

/* =========================================================================
   YEAR
   ========================================================================= */
function initYear() {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/* =========================================================================
   HERO
   ========================================================================= */
function initHero() {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        // Trigger animation
        requestAnimationFrame(() => {
            heroBg.style.transform = 'scale(1)';
        });
    }
}

/* =========================================================================
   NAVBAR
   ========================================================================= */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    const SCROLL_THRESHOLD = 100;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar
        if (currentScroll > SCROLL_THRESHOLD) {
            if (currentScroll > lastScroll && currentScroll > 300) {
                navbar.classList.add('hide-nav');
            } else {
                navbar.classList.remove('hide-nav');
            }
        } else {
            navbar.classList.remove('hide-nav');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

/* =========================================================================
   MOBILE MENU
   ========================================================================= */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (!hamburger || !mobileMenu) return;
    
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

/* =========================================================================
   SMOOTH SCROLL
   ========================================================================= */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#!') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* =========================================================================
   REVEAL ON SCROLL
   ========================================================================= */
function initRevealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal');
    
    if (!revealElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => observer.observe(el));
}

/* =========================================================================
   LIGHTBOX
   ========================================================================= */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    
    if (!lightbox || !lightboxImg || !lightboxClose) return;
    
    // Open lightbox on portfolio item click
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 400);
    };
    
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });
}

/* =========================================================================
   FORM
   ========================================================================= */
function initForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const lang = document.documentElement.lang || 'fr';
        const message = translations[lang].success_msg;
        
        // Show success message
        alert(message);
        
        // Reset form
        form.reset();
        
        // Optional: Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* =========================================================================
   LANGUAGE SWITCHER
   ========================================================================= */
function initLanguageSwitcher() {
    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update active state on all lang buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        
        // Store preference
        try {
            localStorage.setItem('preferred-language', lang);
        } catch (e) {
            // Ignore localStorage errors
        }
    };
    
    // Initialize language from localStorage or default
    try {
        const savedLang = localStorage.getItem('preferred-language');
        if (savedLang && translations[savedLang]) {
            setLanguage(savedLang);
        }
    } catch (e) {
        // Ignore localStorage errors
    }
    
    // Language button click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                setLanguage(lang);
            }
        });
    });
}

/* =========================================================================
   PORTFOLIO HOVER EFFECTS
   ========================================================================= */
function initPortfolioHover() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.cursor = 'pointer';
        });
    });
}

/* =========================================================================
   PARALLAX EFFECT (Optional Enhancement)
   ========================================================================= */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(window.pageYOffset * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }, { passive: true });
}

/* =========================================================================
   UTILITY: Debounce
   ========================================================================= */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
