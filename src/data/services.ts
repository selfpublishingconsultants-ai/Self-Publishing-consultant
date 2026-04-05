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
        title: "Substantive Editing",
        description: "Improve the clarity, flow, and coherence of your writing at the paragraph and sentence level.",
        category: "Editorial & Content Services",
        iconName: "Edit3",
        features: ["Clarity enhancement", "Flow improvement", "Logical consistency"]
    },
    {
        slug: "copyediting",
        title: "Copyediting",
        description: "Ensure your grammar, syntax, and style are impeccable and consistent throughout the book.",
        category: "Editorial & Content Services",
        iconName: "FileText",
        features: ["Grammar correction", "Syntax polishing", "Consistency check"]
    },
    {
        slug: "proofreading",
        title: "Proofreading",
        description: "The final typo and error check before your book goes to print or digital distribution.",
        category: "Editorial & Content Services",
        iconName: "Search",
        features: ["Typo hunting", "Punctuation check", "Final polish"]
    },
    {
        slug: "fact-checking",
        title: "Fact-Checking",
        description: "Verify data, references, and historical accuracy to maintain the credibility of your work.",
        category: "Editorial & Content Services",
        iconName: "FileText",
        features: ["Source verification", "Data audit", "Reference checking"]
    },
    {
        slug: "indexing",
        title: "Indexing",
        description: "Create a professional, usable back-of-book index for non-fiction titles.",
        category: "Editorial & Content Services",
        iconName: "List",
        features: ["Alphabetical indexing", "Cross-referencing", "Term optimization"]
    },
    {
        slug: "ghostwriting",
        title: "Ghostwriting",
        description: "Our professional writers help you turn your ideas and vision into a fully realized book.",
        category: "Editorial & Content Services",
        iconName: "User",
        features: ["Collaborative drafting", "Voice matching", "Full manuscript creation"]
    },
    {
        slug: "sensitivity-reading",
        title: "Sensitivity Reading",
        description: "Review your manuscript for cultural accuracy and avoid unintentional bias or stereotypes.",
        category: "Editorial & Content Services",
        iconName: "Eye",
        features: ["Cultural consulting", "Inclusion review", "Bias identification"]
    },

    // Design & Creative Services
    {
        slug: "cover-design",
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
        title: "Interior Formatting",
        description: "Professional interior layout and typesetting for a premium reading experience in print.",
        category: "Design & Creative Services",
        iconName: "Layout",
        features: ["Typography selection", "Chapter heading design", "PDF/X-1a export"]
    },
    {
        slug: "ebook-conversion",
        title: "eBook Conversion",
        description: "Flawless EPUB and MOBI formatting optimized for all major digital reading devices.",
        category: "Design & Creative Services",
        iconName: "Smartphone",
        features: ["EPUB Reflowable", "Fixed layout options", "Kindle optimization"]
    },
    {
        slug: "illustration",
        title: "Illustration",
        description: "Custom artwork or technical drawings tailored to enhance your book's content.",
        category: "Design & Creative Services",
        iconName: "Layers",
        features: ["Character art", "Technical diagrams", "Custom maps"]
    },
    {
        slug: "photography",
        title: "Photography",
        description: "Professional author portraits and high-quality imagery for book content and marketing.",
        category: "Design & Creative Services",
        iconName: "Camera",
        features: ["Author headshots", "Stock photo curation", "Custom sets"]
    },
    {
        slug: "logo-brand-design",
        title: "Logo & Brand Design",
        description: "Establish a unique visual identity for yourself as an author or for your publishing press.",
        category: "Design & Creative Services",
        iconName: "Target",
        features: ["Author logos", "Brand guidelines", "Platform identity"]
    },

    // Production & Distribution Services
    {
        slug: "print-on-demand-setup",
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
        title: "Offset Printing Management",
        description: "Coordinate high-volume bulk print runs for maximum cost efficiency and quality.",
        category: "Production & Distribution Services",
        iconName: "Settings",
        features: ["Vendor sourcing", "Quality control", "Low per-unit cost"]
    },
    {
        slug: "audiobook-production",
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
        title: "Warehousing & Fulfillment",
        description: "Storage and direct shipping solutions for authors selling physical stock.",
        category: "Production & Distribution Services",
        icon: Boxes,
        features: ["Inventory tracking", "Direct-to-consumer", "Bulk shipping"]
    },

    // Marketing & Publicity Services
    {
        slug: "book-launch-strategy",
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
        title: "Email Marketing & Newsletters",
        description: "Build and nurture your most valuable asset: a direct line to your readers.",
        category: "Marketing & Publicity Services",
        iconName: "Mail",
        features: ["Lead magnet creation", "Funnel setup", "Newsletter design"]
    },
    {
        slug: "press-release",
        title: "Press Release & Distribution",
        description: "Professional media outreach to secure features, interviews, and reviews.",
        category: "Marketing & Publicity Services",
        iconName: "Newspaper",
        features: ["Media kit design", "Journalist targeting", "PR writing"]
    },
    {
        slug: "review-sourcing",
        title: "Review Sourcing (ARC)",
        description: "Manage Advance Reader Copies (ARCs) to secure honest reviews for your launch.",
        category: "Marketing & Publicity Services",
        iconName: "Star",
        features: ["ARC distribution", "Review hunting", "Reader engagement"]
    },
    {
        slug: "advertising-management",
        title: "Ad Management",
        description: "Data-driven Amazon and Facebook advertising campaigns to scale your ROI.",
        category: "Marketing & Publicity Services",
        iconName: "TrendingUp",
        features: ["Amazon Ads", "FB/Meta Ads", "A/B testing"]
    },
    {
        slug: "book-trailer",
        title: "Book Trailer Production",
        description: "Cinematic video trailers that tell your book's story in a minute or less.",
        category: "Marketing & Publicity Services",
        iconName: "Video",
        features: ["Scriptwriting", "Visual effects", "Audio mixing"]
    },
    {
        slug: "author-website",
        title: "Author Website Design",
        description: "A professional digital flagship to sell books and capture reader emails.",
        category: "Marketing & Publicity Services",
        iconName: "Globe",
        features: ["Custom design", "Mobile optimization", "E-commerce ready"]
    },

    // Business & Legal Services
    {
        slug: "literary-agency",
        title: "Literary Agency Representation",
        description: "Consultation and preparation for pitching to traditional publishers and agents.",
        category: "Business & Legal Services",
        iconName: "Briefcase",
        features: ["Query letter review", "Proposal crafting", "Agent targeting"]
    },
    {
        slug: "translation-rights",
        title: "Translation Rights",
        description: "Open your book to global markets with licensed translations and international rights.",
        category: "Business & Legal Services",
        iconName: "Globe",
        features: ["Language matching", "Rights sales", "Contracting"]
    },
    {
        slug: "film-tv-optioning",
        title: "Film/TV Optioning",
        description: "Position your book for adaptation into movies or television series.",
        category: "Business & Legal Services",
        iconName: "Tv",
        features: ["Pitch deck creation", "Producer outreach", "Deal structure"]
    },
    {
        slug: "foreign-rights",
        title: "Foreign Rights Licensing",
        description: "Manage and sell sub-rights to publishers in other countries and territories.",
        category: "Business & Legal Services",
        iconName: "Key",
        features: ["Territory mapping", "Royalty negotiation", "License management"]
    },
    {
        slug: "legal-contract-review",
        title: "Contract & Legal Review",
        description: "Professional legal oversight for publishing contracts, ensuring you keep your rights.",
        category: "Business & Legal Services",
        iconName: "Scale",
        features: ["Agreement audit", "Rights protection", "Term negotiation"]
    },
    {
        slug: "royalty-accounting",
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
