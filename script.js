/* =========================================================================
   LIIKA PHOTOGRAPHE — Editorial Wedding Photography
   ========================================================================= */

/* ====== CONFIG — À PERSONNALISER ====== */
const CONFIG = {
    // Numéro WhatsApp au format international, sans + ni espaces (ex: 212612345678)
    whatsappNumber: '212642159752',
    // Email de contact (utilisé pour le fallback mailto: et comme adresse de notification Formspree)
    email: 'kouhhizomar12@gmail.com',
    // Endpoint Formspree (https://formspree.io). Vide = fallback mailto activé.
    // Pour activer Formspree plus tard: créer un form sur formspree.io et coller l'endpoint ici.
    formspreeEndpoint: ''
};

/* ====== TRANSLATIONS ====== */
const translations = {
    fr: {
        page_title: "Liika Photographe — Photographie de Mariage Éditoriale · Tétouan",
        logo_sub: "Photographe",

        nav_home: "Accueil",
        nav_portfolio: "Portfolio",
        nav_services: "Expérience",
        nav_about: "À propos",
        nav_studio: "Studio",
        nav_book: "Réserver",
        menu_tag: "Tétouan · Maroc",

        hero_meta_loc: "Tétouan · Maroc",
        hero_meta_year: "Saison 2025 — 2026",
        hero_kicker: "— Photographie éditoriale de mariage —",
        hero_l1: "L'éternité",
        hero_l2: "<em>en lumière</em>",
        hero_sub: "Une approche cinématographique du mariage. Images sensibles, intemporelles, pensées comme des œuvres.",
        hero_cta1: "Réserver votre date",
        hero_cta2: "Voir le portfolio",
        scroll: "Découvrir",

        mani_eyebrow: "Notre vision",
        mani_l1: "Nous ne photographions pas un mariage.",
        mani_l2: "Nous composons un héritage.",
        mani_text: "Chaque image est pensée comme la page d'un livre que vos enfants ouvriront un jour. Lumière naturelle, gestes silencieux, vérité des regards — la photographie comme acte d'amour.",

        featured_kicker: "Chapitre I",
        featured_title: "L'instant du regard",

        port_kicker: "— Portfolio —",
        port_title_l1: "Une sélection",
        port_title_l2: "de moments",
        port_lede: "Cinq fragments choisis parmi nos collections récentes. Chaque image porte une histoire, une lumière, un silence.",
        port_cap1: "La Mariée",
        port_cap2: "Le Bouquet",
        port_cap3: "L'Alliance",
        port_cap4: "Traditions",
        port_cap5: "La Cérémonie",
        port_cap6: "L'Intime",

        quote_text: "La photographie n'est pas un souvenir — c'est une promesse faite au temps.",

        dip_kicker: "— Les Détails —",
        dip_l1: "Chaque détail",
        dip_l2: "raconte une histoire",
        dip_p: "Du tissu de la robe au reflet d'une alliance, du henné aux fleurs séchées dans un livre — nous photographions ce que personne d'autre ne remarque.",
        dip_cta: "Réserver une consultation →",

        exp_kicker: "— Expérience —",
        exp_title_l1: "Une expérience",
        exp_title_l2: "sur mesure",
        exp_lede: "Trois collections, pensées comme trois récits différents. Chacune intègre direction artistique, retouche signature et livraison sur galerie privée.",
        exp_badge: "Le plus demandé",
        exp_foot: "Tarifs sur demande · Devis personnalisé sous 48h",

        exp1_title: "Collection Signature",
        exp1_desc: "Couverture complète de votre journée, second photographe, galerie privée et album d'art façonné à la main.",
        exp1_f1: "Couverture 8 à 12 heures",
        exp1_f2: "500+ images éditées en signature",
        exp1_f3: "Album d'art 30×30 cm",
        exp1_f4: "Galerie privée en ligne",

        exp2_title: "Destination Wedding",
        exp2_desc: "Mariages d'exception au Maroc et à l'international. Repérage, direction artistique, cinéma et drone disponibles.",
        exp2_f1: "Voyages au Maroc inclus",
        exp2_f2: "Repérages pré-mariage",
        exp2_f3: "Drone et film disponibles",
        exp2_f4: "Album premium 40×30 cm",

        exp3_title: "Séance Éditoriale",
        exp3_desc: "Une session créative et stylisée — fiançailles, portrait de couple ou shooting pré-mariage.",
        exp3_f1: "Direction artistique",
        exp3_f2: "Lieux personnalisés",
        exp3_f3: "75+ images en signature",
        exp3_f4: "Tirages fine art en option",

        about_kicker: "— L'artiste —",
        about_title_l1: "Derrière",
        about_title_l2: "l'objectif",
        about_tag: "Liika · Tétouan, Maroc",
        about_p1: "Conteuses d'histoires visuelles, nous sommes sensibles au jeu silencieux de la lumière sur la peau, à l'architecture intemporelle et à la vérité d'un regard.",
        about_p2: "Basée à Tétouan depuis 2015, notre équipe — entièrement féminine — est nourrie par la richesse culturelle du Maroc, par sa pudeur et par la complicité naturelle qui se tisse entre femmes le jour d'un mariage.",
        about_p3: "Formées aux standards de l'édition internationale, nous consacrons chaque mariage à une seule chose : préserver votre histoire avec la grâce qu'elle mérite.",
        stat_since: "Depuis",
        stat_women: "Équipe féminine",
        stat_years: "Années d'expérience",

        testi_kicker: "— Témoignages —",
        testi_l1: "Mots",
        testi_l2: "partagés",
        t1_q: "Les photos de notre mariage sont un véritable chef-d'œuvre. Chaque émotion a été capturée avec une sensibilité extraordinaire. Liika a su transformer notre journée en poésie visuelle.",
        t1_n: "Sophie & Marc",
        t1_l: "Tanger · 2025",
        t2_q: "Travailler avec Liika a été la meilleure décision de notre mariage. Son œil artistique nous a offert des images dignes d'un magazine de haute couture.",
        t2_n: "Amira & Youssef",
        t2_l: "Marrakech · 2024",
        t3_q: "Un talent rare pour capturer l'instant présent avec une beauté intemporelle. Chaque photo nous fait pleurer de joie, encore aujourd'hui.",
        t3_n: "Elena & Thomas",
        t3_l: "Chefchaouen · 2025",

        team_kicker: "— Le moment —",
        team_text: "Photographier un mariage, c'est devenir invisible pour mieux capturer l'essentiel.",

        studio_kicker: "— Le Studio —",
        studio_l1: "Venez nous",
        studio_l2: "rencontrer",
        studio_lede: "Pour un café, un thé à la menthe, une consultation autour de votre projet — vous êtes les bienvenus dans notre studio à Tétouan.",
        studio_addr_l: "Adresse",
        studio_phone_l: "Téléphone",
        studio_hours_l: "Sur rendez-vous",
        studio_hours_v: "Lundi — Samedi · 10h à 19h",
        studio_dir: "Itinéraire →",

        contact_kicker: "— Réservation —",
        contact_l1: "Commençons",
        contact_l2: "votre histoire",
        contact_lede: "Nous n'acceptons qu'un nombre limité de mariages chaque année pour garantir une attention totale à chaque couple. Réponse personnalisée sous 48h.",
        f_names: "Noms du couple",
        f_email: "Email",
        f_phone: "Téléphone",
        f_date: "Date du mariage",
        f_location: "Lieu envisagé",
        f_coll: "Collection souhaitée",
        f_coll_default: "— Choisir —",
        f_coll_1: "Collection Signature",
        f_coll_2: "Destination Wedding",
        f_coll_3: "Séance Éditoriale",
        f_coll_4: "Autre / À discuter",
        f_msg: "Parlez-nous de votre vision",
        f_submit: "Envoyer la demande",
        f_foot: "Vos informations sont confidentielles. Aucun spam, jamais.",
        success_msg: "Merci. Votre message a été envoyé. Nous reviendrons vers vous sous 48h.",
        sending_msg: "Envoi en cours…",
        error_msg: "Une erreur est survenue. Vous pouvez aussi nous contacter directement par email ou WhatsApp.",

        footer_tag: "Photographe de mariage éditorial",
        footer_loc: "Tétouan · Maroc",
        footer_explore: "Explorer",
        footer_follow: "Suivre",
        footer_contact: "Contact",
        footer_book: "Demande personnalisée",
        footer_rights: "Tous droits réservés",
        footer_credit: "Site édité avec amour à Tétouan"
    },

    ar: {
        page_title: "ليكا للتصوير — تصوير أعراس فاخر · تطوان",
        logo_sub: "مصورة",

        nav_home: "الرئيسية",
        nav_portfolio: "أعمالنا",
        nav_services: "التجربة",
        nav_about: "من نحن",
        nav_studio: "الاستوديو",
        nav_book: "الحجز",
        menu_tag: "تطوان · المغرب",

        hero_meta_loc: "تطوان · المغرب",
        hero_meta_year: "موسم 2025 — 2026",
        hero_kicker: "— تصوير أعراس بأسلوب مجلات الموضة —",
        hero_l1: "الخلود",
        hero_l2: "<em>في النور</em>",
        hero_sub: "نهج سينمائي للأعراس. صور حساسة، خالدة، مصممة كأعمال فنية.",
        hero_cta1: "احجزي تاريخك",
        hero_cta2: "اكتشفي أعمالنا",
        scroll: "اكتشف",

        mani_eyebrow: "رؤيتنا",
        mani_l1: "نحن لا نصور حفل زفاف.",
        mani_l2: "نحن نؤلف إرثًا.",
        mani_text: "كل صورة مُتخيَّلة كصفحة من كتاب سيفتحه أطفالكم يوماً ما. ضوء طبيعي، حركات صامتة، صدق النظرات — التصوير كفعل حب.",

        featured_kicker: "الفصل الأول",
        featured_title: "لحظة النظرة",

        port_kicker: "— أعمالنا —",
        port_title_l1: "مجموعة",
        port_title_l2: "من اللحظات",
        port_lede: "خمس لقطات مختارة من مجموعاتنا الأخيرة. كل صورة تحمل قصة، ضوءاً، صمتاً.",
        port_cap1: "العروس",
        port_cap2: "الباقة",
        port_cap3: "الخاتم",
        port_cap4: "التقاليد",
        port_cap5: "الحفل",
        port_cap6: "الحميمية",

        quote_text: "التصوير ليس ذكرى — بل وعدٌ مقطوع للزمن.",

        dip_kicker: "— التفاصيل —",
        dip_l1: "كل تفصيل",
        dip_l2: "يحكي قصة",
        dip_p: "من قماش الفستان إلى انعكاس الخاتم، من الحناء إلى الأزهار المجففة في كتاب — نلتقط ما لا يلاحظه أحد.",
        dip_cta: "← احجزي استشارة",

        exp_kicker: "— التجربة —",
        exp_title_l1: "تجربة",
        exp_title_l2: "خاصة بكم",
        exp_lede: "ثلاث مجموعات، مصممة كثلاث روايات مختلفة. كل واحدة تشمل التوجيه الفني، التحرير المميز، والتسليم على معرض خاص.",
        exp_badge: "الأكثر طلباً",
        exp_foot: "الأسعار عند الطلب · عرض شخصي خلال 48 ساعة",

        exp1_title: "مجموعة التوقيع",
        exp1_desc: "تغطية كاملة ليومكم، مصور ثاني، معرض خاص، وألبوم فني مصنوع يدوياً.",
        exp1_f1: "تغطية من 8 إلى 12 ساعة",
        exp1_f2: "أكثر من 500 صورة محررة",
        exp1_f3: "ألبوم فني 30×30 سم",
        exp1_f4: "معرض خاص على الإنترنت",

        exp2_title: "أعراس الوجهات",
        exp2_desc: "أعراس استثنائية في المغرب وحول العالم. استكشاف مسبق، توجيه فني، فيديو، وطائرة بدون طيار.",
        exp2_f1: "السفر داخل المغرب مشمول",
        exp2_f2: "زيارة الموقع قبل العرس",
        exp2_f3: "الطائرة بدون طيار والفيديو متاحان",
        exp2_f4: "ألبوم فاخر 40×30 سم",

        exp3_title: "جلسة تصوير فنية",
        exp3_desc: "جلسة إبداعية ومنسقة — للخطوبة، أو صور الزوجين، أو ما قبل الزفاف.",
        exp3_f1: "توجيه فني كامل",
        exp3_f2: "أماكن مخصصة",
        exp3_f3: "أكثر من 75 صورة محررة",
        exp3_f4: "طبعات فنية اختيارية",

        about_kicker: "— الفنانة —",
        about_title_l1: "خلف",
        about_title_l2: "العدسة",
        about_tag: "ليكا · تطوان، المغرب",
        about_p1: "نحن راويات قصص بصرية، حساسات للعب الصامت للضوء على البشرة، وللعمارة الخالدة، وصدق النظرة.",
        about_p2: "مقيمات في تطوان منذ 2015، فريقنا — نسائي بالكامل — يتغذى من الثراء الثقافي للمغرب، من حيائه، ومن التواطؤ الطبيعي الذي ينسج بين النساء يوم العرس.",
        about_p3: "متمرسات على معايير النشر الدولية، نكرس كل عرس لأمر واحد: حفظ قصتكم بالأناقة التي تستحقها.",
        stat_since: "منذ",
        stat_women: "فريق نسائي",
        stat_years: "سنوات من الخبرة",

        testi_kicker: "— شهادات —",
        testi_l1: "كلمات",
        testi_l2: "متبادلة",
        t1_q: "صور حفل زفافنا تحفة فنية حقيقية. كل عاطفة التُقطت بحساسية استثنائية. حولت ليكا يومنا إلى شعر بصري.",
        t1_n: "صوفي ومارك",
        t1_l: "طنجة · 2025",
        t2_q: "العمل مع ليكا كان أفضل قرار في زفافنا. عينها الفنية أهدتنا صوراً تليق بمجلة هوت كوتور.",
        t2_n: "أميرة ويوسف",
        t2_l: "مراكش · 2024",
        t3_q: "موهبة نادرة لالتقاط اللحظة الحاضرة بجمال خالد. كل صورة تجعلنا نبكي فرحاً، حتى اليوم.",
        t3_n: "إيلينا وتوماس",
        t3_l: "شفشاون · 2025",

        team_kicker: "— اللحظة —",
        team_text: "تصوير عرس يعني أن تصبح غير مرئي لتلتقط الجوهر بشكل أفضل.",

        studio_kicker: "— الاستوديو —",
        studio_l1: "تعالوا",
        studio_l2: "للقائنا",
        studio_lede: "لقهوة، أو شاي بالنعناع، أو استشارة حول مشروعكم — أهلاً بكم في الاستوديو بتطوان.",
        studio_addr_l: "العنوان",
        studio_phone_l: "الهاتف",
        studio_hours_l: "بموعد مسبق",
        studio_hours_v: "الإثنين — السبت · من 10 صباحاً إلى 19 مساءً",
        studio_dir: "← الاتجاهات",

        contact_kicker: "— الحجز —",
        contact_l1: "لنبدأ",
        contact_l2: "قصتكم",
        contact_lede: "نقبل عدداً محدوداً من الأعراس كل سنة لضمان اهتمام كامل لكل ثنائي. رد شخصي خلال 48 ساعة.",
        f_names: "أسماء العروسين",
        f_email: "البريد الإلكتروني",
        f_phone: "الهاتف",
        f_date: "تاريخ الزفاف",
        f_location: "المكان المرتقب",
        f_coll: "المجموعة المطلوبة",
        f_coll_default: "— اختر —",
        f_coll_1: "مجموعة التوقيع",
        f_coll_2: "أعراس الوجهات",
        f_coll_3: "جلسة فنية",
        f_coll_4: "أخرى / للنقاش",
        f_msg: "حدثونا عن رؤيتكم",
        f_submit: "إرسال الطلب",
        f_foot: "معلوماتكم سرية. لا رسائل مزعجة، أبداً.",
        success_msg: "شكراً. تم إرسال رسالتكم. سنعود إليكم خلال 48 ساعة.",
        sending_msg: "جاري الإرسال…",
        error_msg: "حدث خطأ. يمكنكم التواصل معنا مباشرة عبر البريد أو واتساب.",

        footer_tag: "مصورة أعراس فنية",
        footer_loc: "تطوان · المغرب",
        footer_explore: "استكشاف",
        footer_follow: "متابعة",
        footer_contact: "تواصل",
        footer_book: "طلب شخصي",
        footer_rights: "جميع الحقوق محفوظة",
        footer_credit: "موقع صُمم بحب في تطوان"
    }
};

/* ====== INIT ====== */
document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initYear();
    initContactLinks();
    initNav();
    initMobileMenu();
    initSmoothScroll();
    initReveal();
    initLightbox();
    initForm();
    initLanguage();
});

/* ====== LOADER ====== */
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    window.addEventListener('load', () => {
        setTimeout(() => loader.classList.add('is-done'), 400);
    });
    // Failsafe
    setTimeout(() => loader.classList.add('is-done'), 3500);
}

/* ====== YEAR ====== */
function initYear() {
    const y = document.getElementById('currentYear');
    if (y) y.textContent = new Date().getFullYear();
}

/* ====== CONTACT LINKS ====== */
function initContactLinks() {
    const waUrl = `https://wa.me/${CONFIG.whatsappNumber}`;
    const mailto = `mailto:${CONFIG.email}`;

    document.querySelectorAll('[data-channel="whatsapp"], #waFloat, #footerWA').forEach(el => {
        el.setAttribute('href', waUrl);
    });
    document.querySelectorAll('[data-channel="email"], #footerEmail').forEach(el => {
        el.setAttribute('href', mailto);
    });
}

/* ====== NAV — scroll behavior ====== */
function initNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    let lastY = 0;
    const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle('is-scrolled', y > 60);
        if (y > 280 && y > lastY) {
            nav.classList.add('is-hidden');
        } else {
            nav.classList.remove('is-hidden');
        }
        lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
}

/* ====== MOBILE MENU ====== */
function initMobileMenu() {
    const burger = document.getElementById('hamburger');
    const menu = document.getElementById('menuMobile');
    if (!burger || !menu) return;

    const close = () => {
        menu.classList.remove('is-open');
        burger.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };
    const open = () => {
        menu.classList.add('is-open');
        burger.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    burger.addEventListener('click', () => {
        menu.classList.contains('is-open') ? close() : open();
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu.classList.contains('is-open')) close();
    });
}

/* ====== SMOOTH SCROLL ====== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (!href || href === '#' || href.length < 2) return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
}

/* ====== REVEAL ON SCROLL ====== */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length || !('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('is-visible'));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    els.forEach(el => obs.observe(el));
}

/* ====== LIGHTBOX ====== */
function initLightbox() {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    const lbCap = document.getElementById('lightboxCap');
    const lbClose = document.getElementById('lightboxClose');
    const lbPrev = document.getElementById('lightboxPrev');
    const lbNext = document.getElementById('lightboxNext');
    if (!lb || !lbImg || !lbClose) return;

    const items = Array.from(document.querySelectorAll('.g-item'));
    let current = 0;

    const show = (idx) => {
        if (idx < 0) idx = items.length - 1;
        if (idx >= items.length) idx = 0;
        current = idx;
        const img = items[idx].querySelector('img');
        const capEl = items[idx].querySelector('.cap');
        lbImg.src = img.src;
        lbImg.alt = img.alt || '';
        lbCap.textContent = capEl ? capEl.textContent : '';
    };

    const open = (idx) => {
        show(idx);
        lb.classList.add('is-open');
        lb.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        lb.classList.remove('is-open');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => { lbImg.src = ''; }, 400);
    };

    items.forEach((item, idx) => {
        item.addEventListener('click', () => open(idx));
    });
    lbClose.addEventListener('click', close);
    lbPrev && lbPrev.addEventListener('click', e => { e.stopPropagation(); show(current - 1); });
    lbNext && lbNext.addEventListener('click', e => { e.stopPropagation(); show(current + 1); });
    lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-stage')) close(); });
    document.addEventListener('keydown', e => {
        if (!lb.classList.contains('is-open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
    });
}

/* ====== FORM ====== */
function initForm() {
    const form = document.getElementById('bookingForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const lang = document.documentElement.lang || 'fr';
        const t = translations[lang] || translations.fr;

        // Basic validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const data = Object.fromEntries(new FormData(form).entries());
        status.textContent = t.sending_msg;
        status.className = 'form-status';

        try {
            if (CONFIG.formspreeEndpoint) {
                // Send via Formspree
                const res = await fetch(CONFIG.formspreeEndpoint, {
                    method: 'POST',
                    headers: { 'Accept': 'application/json' },
                    body: new FormData(form)
                });
                if (!res.ok) throw new Error('Formspree error');
                status.textContent = t.success_msg;
                status.classList.add('is-success');
                form.reset();
            } else {
                // Fallback: ouvre le client mail avec un message pré-rempli
                const subject = encodeURIComponent(`Demande de réservation — ${data.names || ''}`);
                const body = encodeURIComponent(
                    `Couple: ${data.names || ''}\n` +
                    `Email: ${data.email || ''}\n` +
                    `Téléphone: ${data.phone || ''}\n` +
                    `Date du mariage: ${data.date || ''}\n` +
                    `Lieu: ${data.location || ''}\n` +
                    `Collection: ${data.collection || ''}\n\n` +
                    `Message:\n${data.message || ''}`
                );
                window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
                status.textContent = t.success_msg;
                status.classList.add('is-success');
                form.reset();
            }
        } catch (err) {
            status.textContent = t.error_msg;
            status.classList.add('is-error');
        }
    });
}

/* ====== LANGUAGE ====== */
function initLanguage() {
    const setLang = (lang) => {
        if (!translations[lang]) return;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key] !== undefined) {
                el.placeholder = translations[lang][key];
            }
        });

        // Title
        if (translations[lang].page_title) document.title = translations[lang].page_title;

        try { localStorage.setItem('liika-lang', lang); } catch (_) {}
    };

    // Init from localStorage
    let saved = null;
    try { saved = localStorage.getItem('liika-lang'); } catch (_) {}
    if (saved && translations[saved]) setLang(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            setLang(btn.dataset.lang);
        });
    });
}
