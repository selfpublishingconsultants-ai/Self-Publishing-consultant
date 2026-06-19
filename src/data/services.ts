import {
    BookOpen,
    Edit3,
    FileText,
    Search,
    List,
    User,
    Eye,
    Layers,
    Layout,
    Type,
    Smartphone,
    Palette,
    Camera,
    Target,
    Printer,
    Settings,
    Mic,
    Shield,
    Database,
    Boxes,
    Rocket,
    Share2,
    Mail,
    Newspaper,
    Star,
    TrendingUp,
    Video,
    Globe,
    Briefcase,
    FileCheck,
    Tv,
    Key,
    Scale,
    DollarSign
} from "lucide-react";

export type RelatedTool = {
    title: string;
    slug: string;
    description: string;
};

export type Service = {
    metaTitle?: string;
    metaDescription?: string;
    slug: string;
    title: string;
    description: string;
    category: string;
    iconName: string;
    features: string[];
    relatedTools?: RelatedTool[];
    // GEO Optimizations
    answerBlock?: {
        question: string;
        answer: string;
    };
    howTo?: {
        step: string;
        text: string;
    }[];
    faqs?: {
        q: string;
        a: string;
    }[];
    factDensity?: string[];
};

export const categories = [
    "Editorial & Content Services",
    "Design & Creative Services",
    "Production & Distribution Services",
    "Marketing & Publicity Services",
    "Business & Legal Services"
];

export const services: Service[] = [
    // Editorial & Content Services
    {
        slug: "developmental-editing",
        metaTitle: "Developmental Editing - Story Structure & Pacing",
        metaDescription: "Professional developmental editing focusing on manuscript structure, narrative pacing, and overall story arc. Comprehensive editorial feedback for self-published authors.",
        title: "Developmental Editing",
        description: "Focus on the big-picture structure, pacing, and overall narrative arc of your manuscript.",
        category: "Editorial & Content Services",
        iconName: "BookOpen",
        features: ["Structure analysis", "Pacing optimization", "Character development review"],
        answerBlock: {
            question: "What is the role of Developmental Editing in 2026 publishing?",
            answer: "Developmental editing transforms a raw manuscript into a commercially viable asset by refining structural pacing, character arcs, and narrative tension. In 2026, this stage is critical for ensuring human-authored depth that distinguishes your work from algorithmic content in saturated retail environments."
        },
        factDensity: [
            "Industry Standard turnaround: 4-8 weeks for 80k words.",
            "Market Impact: Projects with structural editing see 2.4x higher reader retention.",
            "SPC Protocol: Includes full structural map and character consistency audit."
        ],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy while you edit." }
        ]
    },
    {
        slug: "substantive-editing",
        metaTitle: "Substantive Editing - Clarity & Coherence Services",
        metaDescription: "Improve clarity, flow, and coherence at paragraph and sentence level. Professional substantive editing service trusted by independent authors and small publishers.",
        title: "Substantive Editing",
        description: "Improve the clarity, flow, and coherence of your writing at the paragraph and sentence level.",
        category: "Editorial & Content Services",
        iconName: "Edit3",
        features: ["Clarity enhancement", "Flow improvement", "Logical consistency"]
    },
    {
        slug: "copyediting",
        metaTitle: "Copyediting - Grammar & Style Consistency Services",
        metaDescription: "Ensure perfect grammar, syntax, and style consistency throughout your manuscript. Professional copyediting service for polished self-published books.",
        title: "Copyediting",
        description: "Ensure your grammar, syntax, and style are impeccable and consistent throughout the book.",
        category: "Editorial & Content Services",
        iconName: "FileText",
        features: ["Grammar correction", "Syntax polishing", "Consistency check"]
    },
    {
        slug: "proofreading",
        metaTitle: "Proofreading - Final Error Checking Before Publishing",
        metaDescription: "Final comprehensive typo and error check before print or digital distribution. Professional proofreading ensuring publication-ready manuscripts.",
        title: "Proofreading",
        description: "The final typo and error check before your book goes to print or digital distribution.",
        category: "Editorial & Content Services",
        iconName: "Search",
        features: ["Typo hunting", "Punctuation check", "Final polish"]
    },
    {
        slug: "fact-checking",
        metaTitle: "Fact-Checking - Data Verification & Accuracy Review",
        metaDescription: "Verify data, references, citations, and historical accuracy in non-fiction works. Professional fact-checking maintaining credibility and author reputation.",
        title: "Fact-Checking",
        description: "Verify data, references, and historical accuracy to maintain the credibility of your work.",
        category: "Editorial & Content Services",
        iconName: "FileText",
        features: ["Source verification", "Data audit", "Reference checking"]
    },
    {
        slug: "indexing",
        metaTitle: "Indexing - Professional Back-of-Book Index Creation",
        metaDescription: "Professional back-of-book index creation for non-fiction titles. Improve reader navigation and content discoverability in your published book.",
        title: "Indexing",
        description: "Create a professional, usable back-of-book index for non-fiction titles.",
        category: "Editorial & Content Services",
        iconName: "List",
        features: ["Alphabetical indexing", "Cross-referencing", "Term optimization"]
    },
    {
        slug: "ghostwriting",
        metaTitle: "Ghostwriting - Professional Book Writing Service",
        metaDescription: "Professional ghostwriters transform your ideas and vision into a fully realized, market-ready manuscript. Complete book writing service for aspiring authors.",
        title: "Ghostwriting",
        description: "Our professional writers help you turn your ideas and vision into a fully realized book.",
        category: "Editorial & Content Services",
        iconName: "User",
        features: ["Collaborative drafting", "Voice matching", "Full manuscript creation"]
    },
    {
        slug: "sensitivity-reading",
        metaTitle: "Sensitivity Reading - Cultural Accuracy & Bias Check",
        metaDescription: "Professional manuscript review for cultural accuracy and unconscious bias detection. Ensure inclusive and respectful representation in your storytelling.",
        title: "Sensitivity Reading",
        description: "Review your manuscript for cultural accuracy and avoid unintentional bias or stereotypes.",
        category: "Editorial & Content Services",
        iconName: "Eye",
        features: ["Cultural consulting", "Inclusion review", "Bias identification"]
    },

    // Design & Creative Services
    {
        slug: "cover-design",
        metaTitle: "Cover Design - Professional Book Cover Creation",
        metaDescription: "Eye-catching professional book covers with front, back, and spine design. Custom covers that capture reader attention and drive book sales effectively.",
        title: "Cover Design",
        description: "Breathtaking front, back, and spine designs that capture attention and drive sales.",
        category: "Design & Creative Services",
        iconName: "Palette",
        features: ["High-impact art", "Print-ready layout", "Spine & back covers"],
        answerBlock: {
            question: "How long does professional book cover design take in 2026?",
            answer: "A custom, high-impact cover design typically requires 2-4 weeks from concept to final delivery of print-ready PDF/X-1a files. This timeline includes market-specific genre research, typography selection for maximum mobile legibility, and secondary assets like spine and back-cover layouts."
        },
        factDensity: [
            "Mobile-first design: Covers are optimized for 120px thumbnails.",
            "Format compliance: Includes 300DPI CMYK files for KDP and IngramSpark.",
            "Visual Authority: Custom covers correlate with 3x higher 'Look Inside' click-rates."
        ],
        relatedTools: [
            { title: "Spine Width Calculator", slug: "spine-width-calculator", description: "Calculate exact spine dimensions for your print cover." },
            { title: "QR Code Generator", slug: "qr-code-generator", description: "Generate custom QR codes for your back cover." }
        ]
    },
    {
        slug: "interior-formatting",
        metaTitle: "Interior Formatting - Professional Layout & Typesetting",
        metaDescription: "Professional interior layout and typesetting for premium reading experience. Custom formatting optimized for print publication quality standards.",
        title: "Interior Formatting",
        description: "Professional interior layout and typesetting for a premium reading experience in print.",
        category: "Design & Creative Services",
        iconName: "Layout",
        features: ["Typography selection", "Chapter heading design", "PDF/X-1a export"]
    },
    {
        slug: "ebook-conversion",
        metaTitle: "eBook Conversion - EPUB & MOBI Format Services",
        metaDescription: "Flawless eBook conversion and formatting across all devices. Professional EPUB and MOBI file creation for digital distribution platforms.",
        title: "eBook Conversion",
        description: "Flawless EPUB and MOBI formatting optimized for all major digital reading devices.",
        category: "Design & Creative Services",
        iconName: "Smartphone",
        features: ["EPUB Reflowable", "Fixed layout options", "Kindle optimization"]
    },
    {
        slug: "illustration",
        metaTitle: "Illustration - Custom Artwork for Book Content",
        metaDescription: "Custom illustrations and technical drawings tailored to enhance your manuscript. Professional artwork creation for children's books and illustrated editions.",
        title: "Illustration",
        description: "Custom artwork or technical drawings tailored to enhance your book's content.",
        category: "Design & Creative Services",
        iconName: "Layers",
        features: ["Character art", "Technical diagrams", "Custom maps"]
    },
    {
        slug: "photography",
        metaTitle: "Photography - Author Portraits & Content Images",
        metaDescription: "Professional author portraits and high-quality imagery for book content and author platforms. Studio photography service for book marketing materials.",
        title: "Photography",
        description: "Professional author portraits and high-quality imagery for book content and marketing.",
        category: "Design & Creative Services",
        iconName: "Camera",
        features: ["Author headshots", "Stock photo curation", "Custom sets"]
    },
    {
        slug: "logo-brand-design",
        metaTitle: "Logo Design - Author Branding & Visual Identity",
        metaDescription: "Create a unique visual identity as an author or publisher. Professional logo and brand design establishing your presence in publishing markets.",
        title: "Logo & Brand Design",
        description: "Establish a unique visual identity for yourself as an author or for your publishing press.",
        category: "Design & Creative Services",
        iconName: "Target",
        features: ["Author logos", "Brand guidelines", "Platform identity"]
    },

    // Production & Distribution Services
    {
        slug: "print-on-demand-setup",
        metaTitle: "Print-on-Demand Setup - Global Retail Distribution",
        metaDescription: "Connect your books to 180+ global retailers with zero inventory risk. Professional POD setup enabling worldwide distribution and sales.",
        title: "Print-on-Demand (POD) Setup",
        description: "Connect your book to 180+ global retailers with zero inventory risk.",
        category: "Production & Distribution Services",
        iconName: "Printer",
        features: ["IngramSpark integration", "Amazon KDP configuration", "Wholesale distribution"],
        answerBlock: {
            question: "How does 2026 Print-on-Demand (POD) setup work?",
            answer: "POD setup enables your book to be printed and fulfilled only when a customer orders it, avoiding costly inventory. In 2026, this involves optimizing your interior files for February's fee adjustments while maximizing your 60% standard KDP royalty rates across global marketplaces like Amazon and IngramSpark."
        },
        howTo: [
            { step: "File Optimization", text: "Ensure your PDF/X-1a interior file meets the specific 2026 KDP margin requirements." },
            { step: "Wholesale Selection", text: "Configure IngramSpark wholesale discounts to optimize for bookstore reach vs. per-unit profit." },
            { step: "Metadata Mapping", text: "Link your ISBN to the global distribution network for instant retail availability." }
        ],
        factDensity: [
            "2026 KDP Paperback Royalty: 60% of list price minus printing.",
            "IngramSpark Direct Royalty: Up to 55% minus wholesale discount (30-55%).",
            "KDP Virtual Voice Model (2026): 40% royalty for AI-narrated audiobooks."
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated net earnings per sale." }
        ]
    },
    {
        slug: "offset-printing-management",
        metaTitle: "Offset Printing - Bulk Print Run Coordination",
        metaDescription: "High-volume bulk printing with cost efficiency and quality control oversight. Professional offset printing management for large print orders.",
        title: "Offset Printing Management",
        description: "Coordinate high-volume bulk print runs for maximum cost efficiency and quality.",
        category: "Production & Distribution Services",
        iconName: "Settings",
        features: ["Vendor sourcing", "Quality control", "Low per-unit cost"]
    },
    {
        slug: "audiobook-production",
        metaTitle: "Audiobook Production - Professional Narration Service",
        metaDescription: "Professional narration, audio editing, and distribution for audiobooks. Complete audiobook production service for growing digital listening market.",
        title: "Audiobook Production",
        description: "Professional narration, editing, and distribution for the growing audiobook market.",
        category: "Production & Distribution Services",
        iconName: "Mic",
        features: ["Voice actor casting", "Studio recording", "ACX/Findaway distribution"],
        relatedTools: [
            { title: "Audible Sales Calculator", slug: "audible-sales-calculator", description: "Calculate estimated royalties from Audible sales." }
        ]
    },
    {
        slug: "isbn-acquisition",
        metaTitle: "ISBN & Barcode - Serial Number Acquisition Service",
        metaDescription: "Secure and manage international ISBNs and barcodes for distribution. Professional ISBN acquisition service for self-published book titles.",
        title: "ISBN & Barcode Acquisition",
        description: "Secure and manage international serial numbers and barcodes for your titles.",
        category: "Production & Distribution Services",
        iconName: "Shield",
        features: ["Bowker management", "Barcode generation", "Title registration"],
        relatedTools: [
            { title: "ISBN Barcode Generator", slug: "isbn-barcode-generator", description: "Generate high-resolution barcodes from your ISBN." }
        ]
    },
    {
        slug: "copyright-registration",
        metaTitle: "Copyright Registration - IP Protection & Legal Filing",
        metaDescription: "Formal Library of Congress copyright registration protecting your intellectual property. Legal protection and registration service for authors.",
        title: "Copyright Registration",
        description: "Secure your intellectual property with formal Library of Congress (US) registration.",
        category: "Production & Distribution Services",
        iconName: "Database",
        features: ["Legal filing (eCO)", "Certificate procurement", "AI disclosure compliance"],
        answerBlock: {
            question: "What is the timeline for US Copyright Registration in 2026?",
            answer: "Standard digital copyright registration currently takes 3-5 months for full certificate issuance. For urgent legal matters, 'Special Handling' can expedite processing to 5-10 business days for an additional $800 fee, providing instantaneous protection within the life of the author plus 70 years."
        },
        howTo: [
            { step: "Deposit Copy Submission", text: "Submit the 'Best Edition' of your book electronically to the US Copyright Office." },
            { step: "AI Disclosure Statement", text: "Identify and disclose any elements of the work generated by AI as per the 2026 mandate." },
            { step: "Payment & Filing", text: "Complete the group or single-author filing fees ($45-$65 standard)." }
        ],
        faqs: [
            { q: "How long is my copyright valid?", a: "For individual authors, protection lasts for their entire life plus an additional 70 years." },
            { q: "Do I need to register to be protected?", a: "No, copyright exists from the moment of creation, but registration is required to file an infringement lawsuit." }
        ],
        factDensity: [
            "2026 Standard Digital Filing Time: 3-5 months.",
            "Expedited (Special Handling) Time: 5-10 business days ($800).",
            "Individual Author Protection: Life + 70 years."
        ]
    },
    {
        slug: "metadata-optimization",
        metaTitle: "Metadata Optimization - Keywords & Categories Strategy",
        metaDescription: "Strategic keyword selection and category optimization for retail discoverability. Professional metadata optimization for KDP, IngramSpark, and bookstores.",
        title: "Metadata Optimization",
        description: "Strategically select keywords and categories to improve discoverability in retail search engines.",
        category: "Production & Distribution Services",
        iconName: "Search",
        features: ["Keyword research", "Category mapping", "Blurb optimization"],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Optimize your book's blurb with AI-powered suggestions." },
            { title: "KENP Calculator", slug: "kenp-calculator", description: "Calculate royalties from Kindle Unlimited page reads." }
        ]
    },
    {
        slug: "warehousing-fulfillment",
        metaTitle: "Warehousing & Fulfillment - Storage & Shipping Service",
        metaDescription: "Secure storage and direct shipping for physical book inventory. Professional fulfillment solutions enabling authors to manage print stock effectively.",
        title: "Warehousing & Fulfillment",
        description: "Storage and direct shipping solutions for authors selling physical stock.",
        category: "Production & Distribution Services",
        iconName: "Boxes",
        features: ["Inventory tracking", "Direct-to-consumer", "Bulk shipping"]
    },

    // Marketing & Publicity Services
    {
        slug: "book-launch-strategy",
        metaTitle: "Book Launch Strategy - Bestseller Roadmap Service",
        metaDescription: "Comprehensive roadmap to build momentum and hit bestseller lists on launch day. Professional book launch strategy maximizing your release impact.",
        title: "Book Launch Strategy",
        description: "A comprehensive roadmap to build momentum and hit bestseller lists on day one.",
        category: "Marketing & Publicity Services",
        iconName: "Rocket",
        features: ["Timeline planning", "Launch team management", "Promo stacking"],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Model your launch success on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Perfect your launch-day sales copy." }
        ]
    },
    {
        slug: "social-media-management",
        metaTitle: "Social Media Management - Author Platform Growth",
        metaDescription: "Grow your author platform and engage readers across social media networks. Professional social media management building author authority and audience.",
        title: "Social Media Management",
        description: "Grow your author platform and engage with your readers across all major social networks.",
        category: "Marketing & Publicity Services",
        iconName: "Share2",
        features: ["Content creation", "Ad management", "Profile optimization"],
        relatedTools: [
            { title: "Hashtag Generator", slug: "hashtag-generator", description: "Generate viral hashtags for your book promos." }
        ]
    },
    {
        slug: "email-marketing",
        metaTitle: "Email Marketing - Newsletter & Subscriber Building",
        metaDescription: "Build direct reader relationships through email lists and newsletters. Professional email marketing building your most valuable audience asset.",
        title: "Email Marketing & Newsletters",
        description: "Build and nurture your most valuable asset: a direct line to your readers.",
        category: "Marketing & Publicity Services",
        iconName: "Mail",
        features: ["Lead magnet creation", "Funnel setup", "Newsletter design"]
    },
    {
        slug: "press-release",
        metaTitle: "Press Release - Media Outreach & Distribution Service",
        metaDescription: "Professional media outreach securing features, interviews, and reviews. Press release distribution expanding your book's media visibility and reach.",
        title: "Press Release & Distribution",
        description: "Professional media outreach to secure features, interviews, and reviews.",
        category: "Marketing & Publicity Services",
        iconName: "Newspaper",
        features: ["Media kit design", "Journalist targeting", "PR writing"]
    },
    {
        slug: "review-sourcing",
        metaTitle: "Review Sourcing - ARC Management for Book Launches",
        metaDescription: "Manage Advance Reader Copies (ARCs) to secure honest reviews. Professional ARC sourcing driving book credibility and sales on launch day.",
        title: "Review Sourcing (ARC)",
        description: "Manage Advance Reader Copies (ARCs) to secure honest reviews for your launch.",
        category: "Marketing & Publicity Services",
        iconName: "Star",
        features: ["ARC distribution", "Review hunting", "Reader engagement"]
    },
    {
        slug: "advertising-management",
        metaTitle: "Advertising Management - Amazon & Facebook Ads",
        metaDescription: "Data-driven advertising campaigns on Amazon and Facebook platforms. Professional ad management scaling your book promotion ROI and visibility.",
        title: "Ad Management",
        description: "Data-driven Amazon and Facebook advertising campaigns to scale your ROI.",
        category: "Marketing & Publicity Services",
        iconName: "TrendingUp",
        features: ["Amazon Ads", "FB/Meta Ads", "A/B testing"]
    },
    {
        slug: "book-trailer",
        metaTitle: "Book Trailer - Cinematic Video Production Service",
        metaDescription: "Cinematic video trailers telling your book's story. Professional book trailer production for marketing and promotional use across platforms.",
        title: "Book Trailer Production",
        description: "Cinematic video trailers that tell your book's story in a minute or less.",
        category: "Marketing & Publicity Services",
        iconName: "Video",
        features: ["Scriptwriting", "Visual effects", "Audio mixing"]
    },
    {
        slug: "author-website",
        metaTitle: "Author Website - Professional Digital Presence Design",
        metaDescription: "Professional author website selling books and capturing email subscribers. Custom website design creating your digital flagship online.",
        title: "Author Website Design",
        description: "A professional digital flagship to sell books and capture reader emails.",
        category: "Marketing & Publicity Services",
        iconName: "Globe",
        features: ["Custom design", "Mobile optimization", "E-commerce ready"]
    },

    // Business & Legal Services
    {
        slug: "literary-agency",
        metaTitle: "Literary Agency - Traditional Publishing Consulting",
        metaDescription: "Consultation and preparation for pitching to traditional publishers and agents. Literary agent representation guidance and negotiation strategy.",
        title: "Literary Agency Representation",
        description: "Consultation and preparation for pitching to traditional publishers and agents.",
        category: "Business & Legal Services",
        iconName: "Briefcase",
        features: ["Query letter review", "Proposal crafting", "Agent targeting"]
    },
    {
        slug: "translation-rights",
        metaTitle: "Translation Rights - Global Market Expansion Service",
        metaDescription: "Licensed translations opening your book to international markets. Professional translation rights management for global distribution and sales.",
        title: "Translation Rights",
        description: "Open your book to global markets with licensed translations and international rights.",
        category: "Business & Legal Services",
        iconName: "Globe",
        features: ["Language matching", "Rights sales", "Contracting"]
    },
    {
        slug: "film-tv-optioning",
        metaTitle: "Film/TV Optioning - Movie Adaptation Strategy",
        metaDescription: "Position your book for film and television adaptation opportunities. Professional strategy for film and TV optioning of intellectual property.",
        title: "Film/TV Optioning",
        description: "Position your book for adaptation into movies or television series.",
        category: "Business & Legal Services",
        iconName: "Tv",
        features: ["Pitch deck creation", "Producer outreach", "Deal structure"]
    },
    {
        slug: "foreign-rights",
        metaTitle: "Foreign Rights - International Sub-Rights Licensing",
        metaDescription: "Manage and sell sub-rights to international publishers and buyers. Professional foreign rights licensing expanding into global publishing markets.",
        title: "Foreign Rights Licensing",
        description: "Manage and sell sub-rights to publishers in other countries and territories.",
        category: "Business & Legal Services",
        iconName: "Key",
        features: ["Territory mapping", "Royalty negotiation", "License management"]
    },
    {
        slug: "legal-contract-review",
        metaTitle: "Contract Review - Legal Publishing Oversight Service",
        metaDescription: "Professional legal review of publishing contracts and agreements. Ensure author rights protection across all publishing contracts and deals.",
        title: "Contract & Legal Review",
        description: "Professional legal oversight for publishing contracts, ensuring you keep your rights.",
        category: "Business & Legal Services",
        iconName: "Scale",
        features: ["Agreement audit", "Rights protection", "Term negotiation"]
    },
    {
        slug: "royalty-accounting",
        metaTitle: "Royalty Accounting - Sales & Earnings Tracking Service",
        metaDescription: "Accurate tracking and reporting of sales and earnings across retail partners. Professional royalty accounting managing your publishing finances.",
        title: "Royalty Accounting",
        description: "Accurate tracking and reporting of sales and earnings across every retail partner.",
        category: "Business & Legal Services",
        iconName: "DollarSign",
        features: ["Sales tracking & data", "Net earnings projection", "Tax documentation"],
        answerBlock: {
            question: "What are the 2026 KDP and IngramSpark royalty rates?",
            answer: "KDP maintains a standard 70% royalty on ebooks ($2.99-$9.99) and 60% on paperbacks minus printing costs. IngramSpark offers up to 55% minus the wholesale discount you set (ranging from 30% to 55%), though the new 2026 'Virtual Voice' model for Amazon audiobooks caps earnings at 40%."
        },
        faqs: [
            { q: "When does KDP pay royalties?", a: "Royalties are paid roughly 60 days after the end of the month in which the sales occurred." },
            { q: "What is the minimum payout?", a: "For direct deposit, there is no minimum; for wire transfers, it varies by currency but is typically $100." }
        ],
        factDensity: [
            "Ebook Royalty Rate (KDP): 70% for $2.99 - $9.99 titles.",
            "Paperback Royalty (Amazon Direct): 60% of list price - printing.",
            "Audiobook Virtual Voice Rate: 40% flat for AI narration."
        ],
        relatedTools: [
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Quickly estimate your net royalties across formats." },
            { title: "KENP Calculator", slug: "kenp-calculator", description: "Track your earnings from Kindle Unlimited reads." }
        ]
    }
];
