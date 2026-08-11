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

export type WhyChooseUsItem = {
    title: string;
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
    // Rich Content Sections
    marketThesis?: string;
    marketThesisSub?: string;
    operationalProtocol?: string;
    scaleStrategy?: string;
    whyChooseUs?: WhyChooseUsItem[];
    whoThisIsFor?: string[];
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
        metaTitle: "Developmental Editing - Story Structure & Pacing | Self-Publishing Consultant",
        metaDescription: "Professional developmental editing focused on manuscript structure, narrative pacing, and overall story arc, with comprehensive editorial feedback.",
        title: "Developmental Editing",
        description: "Focus on the big-picture structure, pacing, and overall narrative arc of your manuscript.",
        category: "Editorial & Content Services",
        iconName: "BookOpen",
        features: [
            "Full story or argument structure analysis, evaluated chapter by chapter",
            "Pacing optimization across the complete manuscript",
            "Character development and arc review, or logical flow review for nonfiction",
            "Plot hole and inconsistency identification",
            "A full editorial letter with prioritized, actionable revision guidance",
            "In-manuscript margin notes flagging specific scenes or chapters"
        ],
        answerBlock: {
            question: "How does our Developmental Editing service work?",
            answer: "A developmental editor reads your complete manuscript and evaluates it at the structural level, story or argument structure, pacing, character arcs or logical flow, and consistency. You receive a detailed editorial letter covering the big-picture issues plus chapter-by-chapter margin notes, so you know exactly what to revise before moving into line editing or proofreading."
        },
        marketThesis: "Developmental editing is the stage most authors skip or shortcut, and it's usually the reason a book underperforms after publication. Prose-level polish can't fix a story that sags in the middle or an argument that loses its thread by chapter six, that requires working through the manuscript at the structural level first. Getting this stage right sets the ceiling for everything that comes after it.\n\nFor manuscripts that came through our ghostwriting process, developmental editing is an optional deeper structural pass once a full draft exists. For self-drafted manuscripts, it's typically the first professional step before moving into our editing and proofreading service for the line-level and mechanical pass.",
        operationalProtocol: "1. Manuscript intake & editor match — you submit your complete manuscript and we match it with a developmental editor experienced in your genre or category.\n2. Full structural read — your editor reads the entire manuscript, tracking structure, pacing, character or argument development, and consistency throughout.\n3. Editorial letter & chapter notes — you receive a comprehensive editorial letter covering big-picture issues, plus in-manuscript notes flagging specific scenes or sections.\n4. Revision support — a defined window for follow-up questions as you work through the revision.\n5. Follow-up read (optional) — a second structural pass once revisions are complete, to confirm the fixes landed before moving into line editing.",
        scaleStrategy: "Our objective is to get the manuscript's structure right once, so later editing stages and eventual launch aren't fighting a foundational problem. That means:\n\n• Fixing structure before prose so later editing polishes a book that already works\n• Prioritizing revision notes by impact so you tackle the changes that matter most first\n• Building editorial letters you can act on independently not just a list of problems with no path to a fix\n• Positioning the manuscript for market so structural choices support how the book will eventually compete and sell",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your work throughout the editorial process"
            },
            {
                title: "Global Scale",
                description: "editorial guidance informed by what resonates with readers across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "structural recommendations grounded in real comp-title and market analysis, not guesswork"
            }
        ],
        whoThisIsFor: [
            "Fiction authors whose plot, pacing, or character arcs feel unresolved or inconsistent",
            "Nonfiction authors whose argument loses focus or momentum partway through the book",
            "Authors who've completed a ghostwritten or self-drafted manuscript and want a structural review before editing further",
            "Authors preparing a manuscript for self-publication who want it structurally solid first"
        ],
        faqs: [
            {
                q: "How is this different from line editing or proofreading?",
                a: "Developmental editing addresses structure, plot, pacing, and argument at the whole-manuscript level. Line editing and proofreading, covered under our editing & proofreading service, work at the sentence and mechanical level once structure is already solid."
            },
            {
                q: "How long does it take?",
                a: "Most developmental editing projects take 4-8 weeks depending on manuscript length and the extent of revision needed."
            },
            {
                q: "Do you edit both fiction and nonfiction?",
                a: "Yes, our developmental editors work across both fiction and nonfiction, matched to your specific genre or category."
            },
            {
                q: "What do I receive at the end?",
                a: "A full editorial letter covering structural, pacing, and consistency issues, plus in-manuscript margin notes and a defined window for follow-up questions."
            },
            {
                q: "Do I need editing after this?",
                a: "Usually yes. Developmental editing addresses structure, not sentence-level prose or mechanics. Most authors move into our editing & proofreading service once structural revisions are complete."
            }
        ],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy while you edit." }
        ]
    },
    {
        slug: "substantive-editing",
        metaTitle: "Substantive Editing - Clarity & Coherence Services | Self-Publishing Consultant",
        metaDescription: "Improve clarity, flow, and coherence at the paragraph and sentence level with professional substantive editing trusted by independent authors.",
        title: "Substantive Editing",
        description: "Improve the clarity, flow, and coherence of your writing at the paragraph and sentence level.",
        category: "Editorial & Content Services",
        iconName: "Edit3",
        features: [
            "Paragraph-level rewrites where prose feels flat, cluttered, or unclear",
            "Improved flow and logical consistency from paragraph to paragraph",
            "Voice and tone consistency maintained across the entire manuscript",
            "Sentence rhythm and pacing refined at the line level",
            "Word choice, clarity, and redundancy addressed throughout",
            "A manuscript that reads the way it was meant to sound, not just grammatically correct"
        ],
        answerBlock: {
            question: "How does our Substantive Editing service work?",
            answer: "An editor works through your manuscript paragraph by paragraph, refining clarity, flow, and logical consistency while preserving how you actually sound. This is different from developmental editing, which addresses whole-manuscript structure, substantive editing is about how the writing itself reads once that structure is already in place. You receive an edited manuscript with tracked changes and notes on any recurring patterns worth watching for."
        },
        marketThesis: "Readers rarely notice good prose, but they always notice clunky prose. A manuscript with strong bones can still lose readers if sentences are repetitive, transitions feel abrupt, or the voice shifts inconsistently from chapter to chapter. Substantive editing is where a manuscript stops reading like a draft and starts reading like a finished book.",
        marketThesisSub: "This stage works best once developmental editing has confirmed the structure is solid, polishing paragraphs in a chapter that still needs restructuring wastes your budget. Once substantive editing is complete, most manuscripts move into our editing and proofreading service for the final mechanical pass.",
        operationalProtocol: "1. Manuscript intake & editor match — you submit your manuscript and we match it with an editor suited to your genre and voice.\n2. Sample edit — for longer projects, we edit a sample chapter first so you can confirm the editor's approach matches your voice.\n3. Full substantive pass — your editor works paragraph by paragraph through the complete manuscript, addressing clarity, flow, and consistency.\n4. Tracked changes delivery — you receive the edited manuscript with all changes tracked, so you can review, accept, or query every edit.\n5. Query resolution — a defined window to work through any editor queries or your own follow-up questions.",
        scaleStrategy: "Our objective is a manuscript that sounds like its best possible version of you, and a process that trains your ear for prose that reads well going forward. That means:\n\n• Preserving your voice while sharpening clarity, never smoothing a manuscript into generic prose\n• Flagging recurring patterns so you carry the improvement into future writing\n• Sequencing edits correctly so this happens after structure is confirmed, not before\n• Preparing the manuscript for what's next so it moves cleanly into final editing and proofreading",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your work throughout the editing process"
            },
            {
                title: "Global Scale",
                description: "editing informed by what reads well for readers across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "editorial decisions grounded in real market and reader research, not guesswork"
            }
        ],
        whoThisIsFor: [
            "Authors whose manuscript is structurally solid but reads roughly at the paragraph or sentence level",
            "Authors moving out of developmental editing and into the next stage of polish",
            "Authors who've self-edited extensively and want a professional pass before final proofreading",
            "Authors who want their natural voice sharpened, not replaced with a generic editorial tone"
        ],
        faqs: [
            {
                q: "How is this different from developmental editing?",
                a: "Developmental editing addresses structure, plot, pacing, and argument at the whole-manuscript level. Substantive editing works at the paragraph and sentence level, clarity, flow, and consistency, once that structure is already in place."
            },
            {
                q: "How long does it take?",
                a: "Most substantive editing projects take 3-5 weeks depending on manuscript length."
            },
            {
                q: "Will this change my voice?",
                a: "No. We edit to sharpen your voice, not replace it. Every change is tracked so you can see and approve exactly what shifted."
            },
            {
                q: "Do I need developmental editing first?",
                a: "If your manuscript hasn't been structurally reviewed, we recommend it. Editing paragraphs in a section that still needs restructuring means paying to polish text you may end up cutting."
            },
            {
                q: "What do I receive at the end?",
                a: "A fully edited manuscript with all changes tracked, plus notes on recurring patterns worth watching for in your own writing going forward."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "copyediting",
        metaTitle: "Copyediting & Proofreading - Grammar & Style Consistency | Self-Publishing Consultant",
        metaDescription: "Ensure perfect grammar, syntax, and style consistency throughout your manuscript, plus a final proofreading pass before publication.",
        title: "Copyediting",
        description: "Ensure your grammar, syntax, and style are impeccable and consistent throughout the book.",
        category: "Editorial & Content Services",
        iconName: "FileText",
        features: [
            "Grammar, syntax, and punctuation corrected throughout the manuscript",
            "A consistent style applied to spelling, hyphenation, capitalization, and numerals",
            "Continuity checks — character names, timelines, and facts verified for consistency",
            "A final proofreading pass on your formatted file, catching anything introduced during layout",
            "A style sheet documenting every decision, for reference by future editors or proofreaders",
            "A manuscript that's mechanically clean and genuinely ready for publication"
        ],
        answerBlock: {
            question: "How does our Copyediting service work?",
            answer: "A copyeditor works through your manuscript line by line correcting grammar, syntax, and punctuation, and applying consistent spelling, capitalization, and formatting based on a recognized style guide. Once your manuscript is finalized and laid out, we also run a final proofreading pass over the formatted file itself, catching anything that may have been introduced during layout, so nothing goes to print or upload without a last check."
        },
        marketThesis: "Copyediting is the stage readers punish hardest when it's skipped. A well-written manuscript still loses credibility fast if a reader hits inconsistent spelling, a character's name changing between chapters, or a comma splice on the first page. These errors signal to readers and reviewers that the book wasn't professionally produced, which affects reviews and word of mouth. Bundling the final proofreading pass into this same service also means the last set of eyes on your book already knows the manuscript's style decisions inside and out.",
        marketThesisSub: "Copyediting comes after substantive editing, once the prose itself is finished being shaped. Running copyediting too early means correcting sentences that may still be rewritten, so we sequence it as the mechanical pass after the creative work is locked in and before your manuscript moves toward publication.",
        operationalProtocol: "1. Manuscript intake & style guide selection — you submit your manuscript and we confirm which style guide to follow.\n2. Line-by-line correction — your copyeditor works through the full manuscript correcting grammar, syntax, punctuation, and spelling.\n3. Consistency & continuity pass — names, timelines, and terminology are checked for consistency throughout, and a style sheet is built.\n4. Final proofread — once your manuscript is formatted for print or ebook, we run a final proofreading pass over that exact file.\n5. Query resolution & sign-off — a defined window to review tracked changes and resolve any queries before final publication.",
        scaleStrategy: "Our objective is a text that reads as professionally produced from the first page to the last, protecting the credibility of everything else you've invested in the manuscript. That means:\n\n• Applying one consistent style throughout so nothing reads as amateur or inconsistent\n• Documenting every decision in a style sheet so consistency holds across future books or sequels\n• Catching layout-introduced errors with a final proofread that no earlier pass could have found\n• Protecting your review scores since typos and inconsistencies are among the most commonly cited reader complaints",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your manuscript throughout the editing process"
            },
            {
                title: "Global Scale",
                description: "style and consistency decisions informed by conventions across US, UAE, and KSA reader markets"
            },
            {
                title: "Data-Driven",
                description: "editorial standards grounded in what readers and reviewers actually respond to"
            }
        ],
        whoThisIsFor: [
            "Authors whose manuscript has been through developmental and substantive editing and is ready for a mechanical pass",
            "Authors self-publishing who want a professionally clean, error-free final manuscript",
            "Authors preparing a final formatted file for print or ebook who need a last proofreading check",
            "Authors working on a series who need consistency documented for future books"
        ],
        faqs: [
            {
                q: "Is proofreading included in this service?",
                a: "Yes, our copyediting service includes a final proofreading pass on your formatted file once layout is complete."
            },
            {
                q: "How is this different from substantive editing?",
                a: "Substantive editing shapes how the prose reads, clarity, flow, and voice. Copyediting corrects the mechanics, grammar, punctuation, spelling, and consistency, once that prose is finished."
            },
            {
                q: "How long does it take?",
                a: "Most copyediting projects take 2-4 weeks, with the final proofreading pass added once your formatted file is ready."
            },
            {
                q: "Which style guide do you use?",
                a: "We typically work with Chicago Manual of Style or AP style, and can follow a custom house style if you have one."
            },
            {
                q: "What do I receive at the end?",
                a: "A corrected manuscript with all changes tracked, a style sheet documenting consistency decisions, and confirmation that your final formatted file is ready to publish."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "proofreading",
        metaTitle: "Proofreading - Final Error Checking Before Publishing | Self-Publishing Consultant",
        metaDescription: "A final, comprehensive typo and error check before print or digital distribution, ensuring your manuscript is genuinely publication-ready.",
        title: "Proofreading",
        description: "The final typo and error check before your book goes to print or digital distribution.",
        category: "Editorial & Content Services",
        iconName: "Search",
        features: [
            "Typographical errors caught and corrected across your fully formatted manuscript",
            "Formatting verification — margins, headers, page numbers, and running heads checked",
            "Widow and orphan lines, awkward page breaks, and spacing errors flagged",
            "A final read against your copyedited manuscript to catch anything introduced during layout",
            "Table of contents, chapter titles, and front and back matter checked for accuracy",
            "A print-ready or upload-ready file, confirmed error-free before it goes live"
        ],
        answerBlock: {
            question: "How does our Proofreading service work?",
            answer: "A proofreader reviews your fully formatted manuscript, the version laid out for print or ebook, catching typos, formatting inconsistencies, and any errors introduced during design or layout. This is the last check before publication, focused on the finished file rather than the raw manuscript, and you receive a marked-up copy of every correction plus confirmation the file is ready to publish."
        },
        marketThesis: "Proofreading catches a different category of error than every stage before it. Layout and formatting introduce their own mistakes, a word dropped during a last-minute revision, a page number that's off after a chapter was added, a paragraph indent that broke during export, and these slip through even a clean copyedit because they happen after the manuscript was already corrected. Skipping this step means readers find the errors instead, and typos are one of the most commonly cited complaints in reader reviews.",
        marketThesisSub: "This is the last stop before publication, which is why it only happens after copyediting and once the manuscript is in its final laid-out form. Proofreading a manuscript that's still being copyedited means checking a file that's guaranteed to change again.",
        operationalProtocol: "1. File intake — you submit the final formatted manuscript, print layout or ebook file, along with the copyedited version for reference.\n2. Full proofreading pass — your proofreader reads the complete formatted file, flagging typos, formatting inconsistencies, and layout errors.\n3. Cross-check against copyedit — the proofread version is compared against the copyedited manuscript to catch anything introduced during layout.\n4. Front and back matter review — table of contents, chapter titles, headers, and any front or back matter are checked for accuracy.\n5. Final sign-off — you receive a marked-up copy of every correction and confirmation the file is ready to publish.",
        scaleStrategy: "Proofreading is a small investment protecting everything that came before it. Our objective is a file you can publish with total confidence. That means:\n\n• Catching layout-introduced errors that no earlier editing stage could have found\n• Protecting your review scores since typos are one of the most commonly cited complaints in reader reviews\n• Confirming print or upload readiness before you commit to a print run or hit publish\n• Closing the loop on the full editorial process so every stage from manuscript to final file has been professionally handled",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your work throughout the review process"
            },
            {
                title: "Global Scale",
                description: "proofreaders familiar with formatting conventions across US, UAE, and KSA print and digital markets"
            },
            {
                title: "Data-Driven",
                description: "a review process built around the errors that most consistently affect reader reviews"
            }
        ],
        whoThisIsFor: [
            "Authors with a fully formatted, laid-out manuscript ready for final review before publishing",
            "Authors who've completed copyediting and are preparing to go to print or upload for ebook",
            "Authors who made last-minute changes after copyediting and want confirmation nothing broke",
            "Authors who want a final safeguard before committing to a print run"
        ],
        faqs: [
            {
                q: "How is this different from copyediting?",
                a: "Copyediting corrects grammar, style, and consistency in the manuscript itself. Proofreading happens after formatting, checking the final laid-out file for typos and layout errors that copyediting couldn't have caught."
            },
            {
                q: "How long does it take?",
                a: "Most proofreading passes take 1-2 weeks depending on manuscript length."
            },
            {
                q: "Do you proofread both print and ebook formats?",
                a: "Yes, we proofread print layouts and ebook files, each has its own common formatting issues we check for specifically."
            },
            {
                q: "What if I make changes after proofreading?",
                a: "Any changes made after proofreading should go through a quick re-check, even small edits can introduce new formatting or typo errors."
            },
            {
                q: "What do I receive at the end?",
                a: "A marked-up copy showing every correction made, plus confirmation that your file is ready for print or upload."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
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
        metaTitle: "Ghostwriting Services - Professional Book Writing | Self-Publishing Consultant",
        metaDescription: "Professional ghostwriters transform your ideas and vision into a fully realized, market-ready manuscript, with voice matching and collaborative drafting.",
        title: "Ghostwriting",
        description: "Our professional writers help you turn your ideas and vision into a fully realized book.",
        category: "Editorial & Content Services",
        iconName: "User",
        features: [
            "Full manuscript creation, from your initial ideas to a finished, market-ready draft",
            "Collaborative drafting that keeps you involved and consulted at every stage",
            "Voice matching so the finished manuscript sounds authentically like you",
            "A complete outline built before writing begins, so the book has a clear throughline",
            "An editorial pass built into delivery before final handoff",
            "Flexible engagement, from full ghostwriting to closely collaborative co-writing"
        ],
        answerBlock: {
            question: "How does our Ghostwriting service work?",
            answer: "Our professional writers start with a deep dive into your ideas, goals, and target reader, then build a complete outline before a single chapter is written. From there we draft collaboratively, delivering chapters in stages for your feedback, and revise until the manuscript sounds authentically like you rather than a generic ghostwritten voice. You stay involved throughout, without carrying the full writing workload yourself."
        },
        marketThesis: "Most books never get written not because the idea isn't strong enough, but because turning an idea into 60,000 consistent words requires structure and sustained output most authors don't have time for alongside their business or career. A ghostwriter doesn't just add writing capacity, they add the outline discipline and accountability that keeps a manuscript from stalling out at chapter three.",
        marketThesisSub: "We build every manuscript with the reader and eventual market in mind from the first outline, since a ghostwritten book still has to compete for Amazon rank and reader attention once it's published. Once your manuscript is complete, it typically moves into our editing and proofreading process to prepare it for publication.",
        operationalProtocol: "1. Consultation & voice discovery — we start with a call to understand your ideas, goals, and target reader, and review any existing notes or interviews to capture how you speak and think.\n2. Outline & structure — before any writing happens, we build a chapter-by-chapter outline so the book has a clear arc.\n3. Collaborative drafting — chapters are written and delivered in stages for your review, keeping you involved throughout the process.\n4. Revision & voice-matching — iterative rounds to make sure the manuscript sounds authentically like you.\n5. Editorial pass & handoff — the complete manuscript is reviewed for consistency and clarity before final handoff, publish-ready rather than a rough first draft.",
        scaleStrategy: "Our objective is a manuscript that maximizes your long-term royalty yield while building an author platform that outlasts any single release. That means:\n\n• Writing with the eventual market in mind so the book is positioned to compete once it's published, not written in isolation from how it will sell\n• Building a repeatable process for authors planning a series or multiple titles\n• Keeping the manuscript reusable across markets so structure and pacing translate across US, UAE, and KSA reader bases\n• Setting up the next stage cleanly so your manuscript moves smoothly into editing and eventual launch",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control and ownership of your finished work"
            },
            {
                title: "Global Scale",
                description: "manuscripts built with reach across US, UAE, and KSA markets in mind, not a single-region approach"
            },
            {
                title: "Data-Driven",
                description: "writing informed by real comp-title and market research, not guesswork"
            }
        ],
        whoThisIsFor: [
            "First-time authors who have a strong idea but not the writing time or confidence to execute it",
            "Business owners and entrepreneurs who want a book without stepping away from their business",
            "Authors who've stalled mid-manuscript and need structure and accountability to finish",
            "Authors planning a series who want a consistent, repeatable writing process"
        ],
        faqs: [
            {
                q: "How involved will I be in the writing process?",
                a: "As involved as you want to be. We deliver chapters in stages for your feedback throughout, so you're consulted continuously rather than seeing the manuscript only once at the end."
            },
            {
                q: "How long does it take?",
                a: "Most full ghostwriting projects take 3-6 months depending on manuscript length and complexity."
            },
            {
                q: "Will the manuscript actually sound like me?",
                a: "Yes. We start with a voice discovery process and revise specifically for tone and voice match before any manuscript is considered final."
            },
            {
                q: "Do you write both fiction and nonfiction?",
                a: "Yes, our writers work across both fiction and nonfiction projects."
            },
            {
                q: "What do I need to provide to get started?",
                a: "Just your book idea, goals, and any existing notes, outlines, or interviews you have. We'll build the outline and structure with you from there."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
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
        metaTitle: "Cover Design - Professional Book Cover Creation | Self-Publishing Consultant",
        metaDescription: "Eye-catching professional book covers with front, back, and spine design. Custom covers built to capture reader attention and drive sales.",
        title: "Cover Design",
        description: "Breathtaking front, back, and spine designs that capture attention and drive sales.",
        category: "Design & Creative Services",
        iconName: "Palette",
        features: [
            "A custom cover designed around real comp-title and category research, not a generic template",
            "Genre-appropriate imagery, color palette, and typography that signals the right category to readers",
            "Full front, back, and spine design delivered as one cohesive cover",
            "Thumbnail-tested design that reads clearly at small sizes across retailer listings",
            "Multiple concept directions before committing to a final design",
            "Print-ready files matched to your exact trim size and page count"
        ],
        answerBlock: {
            question: "How does our Cover Design service work?",
            answer: "We start by researching bestselling comp titles in your category so the cover signals the right genre before a reader even reads the blurb. From there, our designers produce multiple concept directions, refine the one you connect with, and deliver a complete front, back, and spine design, sized to your exact trim specifications and optimized to read clearly at thumbnail size."
        },
        marketThesis: "A cover has roughly the same job as a headline, it has a fraction of a second to signal genre, quality, and relevance before a reader scrolls past. Readers judge a book's category and professionalism from the cover alone, long before they read a description, and a cover that doesn't match genre conventions actively repels the readers most likely to buy it, even if the writing inside is excellent.",
        marketThesisSub: "Cover design works best once your manuscript is finalized through copyediting and proofreading, so back-cover copy and any editorial quotes reflect the actual finished book, and it sets up directly into a coordinated book launch once the cover is ready to reveal.",
        operationalProtocol: "1. Comp title & category research — we review bestselling covers in your genre to identify the visual conventions readers expect.\n2. Concept development — our designers produce multiple distinct concept directions based on that research and your book's content.\n3. Concept selection & refinement — you choose a direction and we refine typography, imagery, and layout through review rounds.\n4. Full cover production — the final design is built out as a complete front, back, and spine cover.\n5. File delivery — print-ready files are delivered matched to your exact trim size, page count, and platform specs.",
        scaleStrategy: "A cover isn't just artwork, it's a conversion tool. Our objective is a cover that performs at every stage a reader encounters it. That means:\n\n• Designing for thumbnail size first since most readers see the cover small, on a retailer grid, before they ever see it full-size\n• Matching genre conventions precisely so the right readers self-select in seconds\n• Building print and digital from one cohesive design so every version reinforces the same visual identity\n• Timing the reveal with launch activity so the cover works as hard in a promotional push as it does on a retailer page",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your finished cover design"
            },
            {
                title: "Global Scale",
                description: "covers designed with reader conventions across US, UAE, and KSA markets in mind"
            },
            {
                title: "Data-Driven",
                description: "design decisions grounded in real comp-title and category research, not guesswork"
            }
        ],
        whoThisIsFor: [
            "Authors preparing to publish who need a professional, retailer-ready cover",
            "Authors relaunching a backlist title with a cover that better reflects current category conventions",
            "Authors who've had a cover designed elsewhere and it isn't converting or reading correctly at thumbnail size",
            "Authors who need matching print and digital covers built from one consistent design"
        ],
        faqs: [
            {
                q: "How many concepts will I see?",
                a: "You'll typically review multiple distinct concept directions before selecting one to refine into the final cover."
            },
            {
                q: "How long does it take?",
                a: "Most cover design projects take 2-4 weeks from initial concept to final print-ready file delivery."
            },
            {
                q: "Does this include the spine and back cover?",
                a: "Yes, every project includes a complete front, back, and spine design as one cohesive cover."
            },
            {
                q: "What information do you need from me to get started?",
                a: "Your genre, target category, any comp titles you like, back cover copy, and your exact print trim size and page count."
            },
            {
                q: "Can you match a cover to an existing series?",
                a: "Yes, we can design new covers to match the visual identity of an existing series or align with covers from a previous book."
            }
        ],
        relatedTools: [
            { title: "Spine Width Calculator", slug: "spine-width-calculator", description: "Calculate exact spine dimensions for your print cover." },
            { title: "QR Code Generator", slug: "qr-code-generator", description: "Generate custom QR codes for your back cover." }
        ]
    },
    {
        slug: "interior-formatting",
        metaTitle: "Interior Formatting - Professional Layout & Typesetting | Self-Publishing Consultant",
        metaDescription: "Professional interior layout and typesetting for a premium reading experience, with custom formatting optimized for print publication quality.",
        title: "Interior Formatting",
        description: "Professional interior layout and typesetting for a premium reading experience in print.",
        category: "Design & Creative Services",
        iconName: "Layout",
        features: [
            "Print-ready interior PDF formatted to your exact trim size and specifications",
            "Reflowable ePub and Mobi files generated for Kindle, Apple Books, and other digital platforms",
            "Custom typography selection matched to your genre and tone",
            "Designed chapter headers, drop caps, and section breaks",
            "Consistent headers, footers, and page numbering throughout",
            "A layout that displays cleanly across every screen size and device"
        ],
        answerBlock: {
            question: "How does our Interior Formatting service work?",
            answer: "Our designers take your final manuscript and lay it out as a professionally typeset interior, selecting fonts, chapter header styles, and spacing suited to your genre, then producing both a print-ready PDF sized to your exact trim and a reflowable ePub/Mobi file for digital platforms. You review the layout before final files are generated, so nothing goes to print or upload without your sign-off."
        },
        marketThesis: "Interior formatting is easy to underestimate because readers don't consciously notice good typesetting, they only notice bad typesetting. Cramped margins, inconsistent chapter starts, or a digital file that doesn't reflow properly on an e-reader pulls readers out of the story and reads as unprofessional, even when the writing itself is strong. A well-typeset interior disappears into the background and lets the writing do the work.",
        marketThesisSub: "Formatting happens after copyediting, once the text itself is finalized, and it produces the exact file that gets a final proofreading pass before publication. Running these out of order means formatting a manuscript that's still changing, or proofreading a file before it's actually laid out.",
        operationalProtocol: "1. Manuscript intake & spec confirmation — you submit your final manuscript and we confirm trim size, target platforms, and any design preferences.\n2. Font & style selection — we select and pair fonts, chapter header styles, and section break design suited to your genre.\n3. Print layout — the interior is typeset into a print-ready PDF, with consistent margins, headers, footers, and pagination.\n4. Digital conversion — a reflowable ePub/Mobi file is generated and tested across major e-reader platforms.\n5. Review & final delivery — you review both formats before we deliver final, print-ready and upload-ready files.",
        scaleStrategy: "Formatting is the stage where the manuscript becomes an actual book. Our objective is a reading experience that feels invisible in the best way. That means:\n\n• Matching typography to genre so the interior feels appropriate before a reader even starts chapter one\n• Testing digital files across devices so the ePub reads cleanly across major platforms\n• Building print files to exact spec so there are no surprises or rejected files at the printer\n• Sequencing formatting correctly after copyediting and before the final proofreading pass",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your finished interior files"
            },
            {
                title: "Global Scale",
                description: "typesetting informed by print and digital reading conventions across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "layout choices grounded in what genre readers actually expect, not guesswork"
            }
        ],
        whoThisIsFor: [
            "Authors with a copyedited manuscript ready to become a print and digital file",
            "Authors self-publishing who need professional typesetting without hiring a separate designer",
            "Authors expanding an ebook-only title into print for the first time",
            "Authors relaunching a backlist title with a modernized interior design"
        ],
        faqs: [
            {
                q: "Do you format for both print and ebook?",
                a: "Yes, every project includes a print-ready PDF and a reflowable ePub/Mobi file for digital platforms."
            },
            {
                q: "How long does it take?",
                a: "Most formatting projects take 2-3 weeks depending on manuscript length and complexity of design elements."
            },
            {
                q: "Can I choose my own fonts?",
                a: "Yes, we can work with fonts you prefer or recommend options based on your genre if you'd like our guidance."
            },
            {
                q: "Does this need to happen before or after proofreading?",
                a: "Before. We format the manuscript into its final layout first, then proofreading reviews that exact formatted file for any last errors."
            },
            {
                q: "What if my manuscript includes images or charts?",
                a: "We can incorporate images, charts, and other visual elements into both the print and digital layouts."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
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
        metaTitle: "Print-on-Demand Setup - Global Retail Distribution | Self-Publishing Consultant",
        metaDescription: "Connect your book to Amazon KDP, IngramSpark, and other print retailers with a properly configured print-on-demand setup and zero upfront inventory.",
        title: "Print-on-Demand (POD) Setup",
        description: "Get your book printed and shipped only when a reader orders it, with no inventory risk and no upfront printing costs.",
        category: "Production & Distribution Services",
        iconName: "Printer",
        features: [
            "Print-ready interior and cover files formatted to each retailer's specifications",
            "Amazon KDP paperback (and hardcover, where applicable) listing configured correctly",
            "IngramSpark setup for wholesale and bookstore-channel distribution",
            "Trim size, paper, and binding choices matched to your book's genre and budget",
            "List pricing set to protect your royalty across every distribution channel",
            "A print edition live and orderable with zero inventory sitting in a warehouse"
        ],
        answerBlock: {
            question: "How does our Print-on-Demand Setup service work?",
            answer: "We take your finished interior and cover files and configure them for print, then set your book up on Amazon KDP and, if you want wider bookstore and library reach, IngramSpark as well. Because print-on-demand means each copy is printed only after a customer orders it, there's no inventory to buy or store. We handle the technical setup, pricing across channels, and file specifications so your book is orderable everywhere you want it to be."
        },
        marketThesis: "Print-on-demand removed the biggest financial barrier that used to keep independent authors out of print entirely: the need to pay for and store a print run before a single copy sold. That makes print a viable format for almost any book, but it also means the setup itself carries real weight, since a misconfigured file or a mispriced listing can quietly cap your royalty or keep your book off shelves in some markets.\n\nAmazon KDP and IngramSpark are not interchangeable. KDP gets a print book onto Amazon quickly, while IngramSpark opens up distribution to thousands of bookstores, libraries, and international retailers that KDP alone doesn't reach. Which combination makes sense depends on your goals, whether that's fast retail availability, wholesale and library reach, or both.",
        marketThesisSub: "Print-on-demand setup happens once your interior formatting and cover design are finished, since it's the stage where those finished files get configured and connected to retailers. We treat pricing as part of this setup rather than an afterthought, since printing costs vary by trim size, page count, and retailer, and list price is what determines your actual royalty per sale.",
        operationalProtocol: "1. File & format review — we review your finished interior and cover files against KDP and IngramSpark's print specifications.\n2. Retailer strategy — we confirm whether KDP alone, IngramSpark alone, or both fits your distribution goals.\n3. Print configuration — trim size, paper type, and binding are set based on your book's genre and budget.\n4. Account setup & listing — we configure your book's listing details and technical settings on each chosen platform.\n5. Pricing strategy — we set list pricing across channels to protect your royalty while staying competitive.\n6. Proof review & go-live — you review a proof copy or digital proof before we release the book for live ordering.",
        scaleStrategy: "Our objective is print availability that reaches readers wherever they shop, without inventory risk eating into what a print edition can earn you. That means:\n\n• Matching the platform to the goal — KDP for retail speed, IngramSpark for wholesale and bookstore reach, or both where it makes sense\n• Getting file specs right the first time — avoiding rejected proofs and delayed launches from formatting errors\n• Pricing with the royalty math in view — since printing cost and retailer discount both eat into list price before you see a royalty\n• Setting up for a series, not just one book — consistent trim size and pricing logic across future titles",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your files and retailer accounts throughout setup"
            },
            {
                title: "Global Scale",
                description: "distribution strategy informed by print retail conventions across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "pricing and platform decisions grounded in actual printing costs and royalty math, not guesswork"
            }
        ],
        whoThisIsFor: [
            "Authors with finished interior and cover files ready to go into print",
            "Self-published authors who want a paperback or hardcover edition with no inventory risk",
            "Authors who want their book available to bookstores and libraries through IngramSpark",
            "Authors building a series who need consistent print specs and pricing across every title"
        ],
        faqs: [
            {
                q: "Do I need to buy or store any physical inventory?",
                a: "No. That's the core benefit of print-on-demand — each copy is printed only after it's ordered, so there's nothing for you to purchase or warehouse upfront."
            },
            {
                q: "Should I use Amazon KDP, IngramSpark, or both?",
                a: "It depends on your goals. KDP is the fastest way onto Amazon; IngramSpark adds wholesale distribution to bookstores and libraries. We'll help you decide based on where you want your book to be available."
            },
            {
                q: "Will I see a proof before the book goes live?",
                a: "Yes. You'll review a proof copy or digital proof and approve it before we release your book for live ordering."
            },
            {
                q: "How does pricing affect my royalty?",
                a: "Retailers deduct printing cost, and in some channels a wholesale discount, from your list price before paying a royalty. We factor this in when setting your pricing so your list price actually supports the royalty you want to earn."
            },
            {
                q: "Do my interior and cover files need to be finished before we start?",
                a: "Yes. Print-on-demand setup configures your finished files for retailers, so interior formatting and cover design should be complete before this stage begins."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated net earnings per sale." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." }
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
        metaTitle: "Audiobook Production - Professional Narration & Distribution | Self-Publishing Consultant",
        metaDescription: "Professional narration, audio editing, and distribution for your audiobook, produced to retailer specifications and ready for ACX, Findaway Voices, and Audible.",
        title: "Audiobook Production",
        description: "Bring your book to the growing audiobook market with professional narration, studio-quality editing, and distribution to every major platform.",
        category: "Production & Distribution Services",
        iconName: "Mic",
        features: [
            "A narrator voice-matched to your genre, tone, and target audience",
            "Broadcast-quality studio recording, free of noise, clipping, or inconsistent levels",
            "Professional audio editing — pacing, breath control, and scene-to-scene consistency",
            "Mastering to ACX and Audible technical specifications (RMS, peak, noise floor)",
            "Distribution setup across ACX, Findaway Voices, Audible, and other major platforms",
            "A finished audiobook ready to reach listeners on every major platform"
        ],
        answerBlock: {
            question: "How does our Audiobook Production service work?",
            answer: "We start by casting a narrator whose voice and delivery fit your book's genre and characters, then record in a professional studio environment. Every chapter is edited for pacing and consistency, mastered to meet retailer audio specifications, and checked against a QC pass before it goes to distribution. From casting through to your files landing on Audible, ACX, or Findaway Voices, the whole production is managed as one continuous process."
        },
        marketThesis: "Audiobooks are one of the fastest-growing formats in publishing, and for many readers they're now the default way they consume books, not a secondary option. A book that only exists in print or ebook is invisible to that audience entirely.\n\nBut an audiobook only works if the production holds up: a flat or mismatched narrator performance, inconsistent audio levels between chapters, or files that fail a retailer's technical checks can keep a book off platforms altogether or drive listeners to abandon it early. Production quality is what separates an audiobook that builds a following from one that quietly underperforms.",
        marketThesisSub: "Audiobook production is typically the final content stage, run once your manuscript is finalized, since script changes after recording begins are costly to fix. We treat it as a production discipline in its own right, distinct from editing or formatting, because narration, audio engineering, and platform compliance each require their own expertise.",
        operationalProtocol: "1. Manuscript & scope review — you submit your finalized manuscript and we confirm runtime estimate, voice requirements, and target platforms.\n2. Narrator casting — we shortlist narrators suited to your genre and characters, and you approve the final voice before recording begins.\n3. Studio recording — your narrator records the full manuscript under controlled studio conditions for a clean, consistent audio signal.\n4. Audio editing & mastering — each chapter is edited for pacing and continuity, then mastered to meet ACX and Audible loudness and noise-floor specifications.\n5. Quality control pass — finished files are checked against retailer technical requirements before anything is submitted.\n6. Distribution setup — we prepare and submit your files to ACX, Findaway Voices, Audible, and any other platforms you're targeting.",
        scaleStrategy: "Our objective is an audiobook that performs as well as your print or ebook edition, giving listeners the same reason to finish and recommend it. That means:\n\n• Casting the right voice, not just an available one — narrator fit affects completion rates as much as story quality does\n• Meeting retailer specs on the first submission — avoiding rejection cycles that delay your release\n• Editing for listening, not just accuracy — pacing and breath control matter as much as correct pronunciation\n• Distributing broadly — reaching listeners wherever they already buy audiobooks, not one platform alone",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your manuscript and finished audio files throughout production"
            },
            {
                title: "Global Scale",
                description: "narrator sourcing and distribution informed by conventions across US, UAE, and KSA listener markets"
            },
            {
                title: "Data-Driven",
                description: "production decisions grounded in what keeps listeners engaged through to the end"
            }
        ],
        whoThisIsFor: [
            "Authors with a finalized manuscript ready to expand into the audiobook format",
            "Self-published authors who want their book available wherever audiobook listeners shop",
            "Authors who want a narrator performance that matches their book's genre and characters",
            "Authors building a series who want narration and audio quality consistent across every book"
        ],
        faqs: [
            {
                q: "Do I get to choose or approve the narrator?",
                a: "Yes. We shortlist narrators based on your book's genre and characters, and you approve the final choice before recording starts."
            },
            {
                q: "Which platforms will my audiobook be distributed to?",
                a: "We set up distribution through ACX, Findaway Voices, and Audible, along with any additional platforms you'd like to target."
            },
            {
                q: "How long does audiobook production take?",
                a: "Timelines depend on manuscript length and narrator availability, but most projects move from casting to finished, distributed files within several weeks of recording start."
            },
            {
                q: "Does my manuscript need to be finalized before we begin?",
                a: "Yes. Because script changes after recording begins are costly to fix, we recommend starting audiobook production once your manuscript has been through copyediting and is locked."
            },
            {
                q: "What audio quality standards do you produce to?",
                a: "Every file is mastered to meet ACX and Audible's technical requirements for loudness, peak levels, and noise floor before submission."
            }
        ],
        relatedTools: [
            { title: "Audible Sales Calculator", slug: "audible-sales-calculator", description: "Estimate potential royalties from Audible sales." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "isbn-acquisition",
        metaTitle: "ISBN & Barcode - Serial Number Acquisition Service | Self-Publishing Consultant",
        metaDescription: "Secure and manage international ISBNs and barcodes for distribution, set up correctly for seamless retail and library listing.",
        title: "ISBN & Barcode Acquisition",
        description: "Secure and manage international serial numbers and barcodes for your titles.",
        category: "Production & Distribution Services",
        iconName: "Shield",
        features: [
            "An official ISBN registered through Bowker and correctly linked to your book's metadata",
            "A scannable EAN barcode generated and sized correctly for print placement",
            "Correct ISBN handling across formats, since print, ebook, and audiobook editions each need their own",
            "Publisher-of-record set up correctly, so retail listings and metadata stay consistent",
            "Title registration completed accurately across the systems retailers and libraries pull from",
            "A registration process that avoids the common errors that cause retailer listing issues later"
        ],
        answerBlock: {
            question: "How does our ISBN & Barcode Acquisition service work?",
            answer: "We manage your ISBN registration through Bowker, confirm which format each edition needs its own ISBN for, and generate a correctly sized EAN barcode ready for back-cover placement. You end up with registration details set up correctly the first time, rather than discovering an error after the book is already listed."
        },
        marketThesis: "ISBN registration looks like paperwork, but it's actually the piece of infrastructure that lets a book be found, tracked, and sold across retailers and libraries worldwide. An incorrectly assigned ISBN, or one edition mistakenly sharing a number with another, causes listing errors, sales tracking problems, and retailer confusion that can take weeks to untangle after the fact. Getting it right at registration avoids all of that.",
        marketThesisSub: "This step lines up closely with cover design, since the barcode has to be sized and placed correctly on the back cover, and it typically happens once your manuscript is finalized and ready to move toward publication.",
        operationalProtocol: "1. Format & edition review — we confirm which editions you're publishing (print, ebook, audiobook) since each requires its own ISBN.\n2. Bowker registration — an official ISBN is registered and correctly linked to your book's title, author, and format metadata.\n3. Barcode generation — a scannable EAN barcode is generated at the correct size for your back cover placement.\n4. Publisher-of-record setup — your publisher information is set correctly to keep listings and metadata consistent.\n5. File handoff — you receive your ISBN details and barcode file ready to hand off to your cover designer or printer.",
        scaleStrategy: "Registration is a one-time setup that affects how your book is tracked for its entire life in print. Our objective is to get it right once so nothing needs correcting later. That means:\n\n• Registering separate ISBNs per format so print, ebook, and audiobook editions are tracked correctly and independently\n• Avoiding retailer listing errors that come from incorrect or duplicated ISBN metadata\n• Coordinating barcode placement with your cover file so it's sized and positioned correctly the first time\n• Keeping publisher-of-record consistent across every platform your book is listed on",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% ownership and control of your registered ISBN"
            },
            {
                title: "Global Scale",
                description: "registration handled correctly for distribution across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "a registration process built to avoid the specific errors that most commonly cause retailer listing issues"
            }
        ],
        whoThisIsFor: [
            "Authors preparing to publish who need an official ISBN and barcode set up correctly",
            "Authors publishing across multiple formats who need each edition registered independently",
            "Authors who've had listing or metadata issues from an incorrectly registered ISBN previously",
            "Authors who want to be listed as their own publisher of record rather than relying on a platform-assigned ISBN"
        ],
        faqs: [
            {
                q: "Do I need a separate ISBN for each format?",
                a: "Yes. Print, ebook, and audiobook editions each require their own ISBN, even if it's the same book."
            },
            {
                q: "How long does registration take?",
                a: "ISBN registration and barcode generation typically take 1-2 weeks."
            },
            {
                q: "Do I need this if I'm only publishing on Amazon KDP?",
                a: "Amazon can assign a free ISBN for KDP-only publishing, but that ties the ISBN to Amazon as publisher of record. If you plan to distribute beyond Amazon or want to be listed as your own publisher, you'll want an independently registered ISBN."
            },
            {
                q: "What is Bowker?",
                a: "Bowker is the official ISBN registration agency for the United States. We manage the registration process through Bowker on your behalf."
            },
            {
                q: "What do I receive at the end?",
                a: "Your registered ISBN details and a correctly sized barcode file, ready to hand off to your cover designer or printer."
            }
        ],
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
        metaTitle: "Metadata Optimization - Keywords & Categories Strategy | Self-Publishing Consultant",
        metaDescription: "Strategic keyword selection, category mapping, and blurb optimization to improve how readers find your book on Amazon, IngramSpark, and other retailers.",
        title: "Metadata Optimization",
        description: "Strategically select keywords and categories so your book actually surfaces when readers are searching for it.",
        category: "Production & Distribution Services",
        iconName: "Search",
        features: [
            "Keyword research based on real reader search behavior, not guesswork",
            "The right mix of the 7 backend keyword slots KDP gives you",
            "Category mapping to the browse categories your ideal readers actually browse",
            "A blurb rewritten to convert browsers into buyers, not just describe the plot",
            "Title and subtitle review for both searchability and shelf appeal",
            "A metadata package ready to apply directly on KDP, IngramSpark, or your other retailers"
        ],
        answerBlock: {
            question: "How does our Metadata Optimization service work?",
            answer: "We research the actual terms readers type into Amazon and other retail search bars for books like yours, then map your book to the backend keywords and browse categories that put it in front of that traffic. We also review your blurb, title, and subtitle so that once a reader finds your book, the page itself gives them a reason to buy. The result is a metadata package you can apply directly across your retail listings."
        },
        marketThesis: "A great book with weak metadata is still an invisible book. Most readers find new titles through retailer search and browse categories, not by typing your book's title directly, so if your keywords and categories don't match how readers actually search, your book simply doesn't come up.\n\nCategories carry an extra weight beyond discoverability: the right category placement is also how a book earns bestseller badges and category rankings, which in turn drive more organic visibility. Getting this wrong doesn't just cost search traffic, it costs the credibility signal that ranking badges provide.",
        marketThesisSub: "Metadata optimization works best once your book's title, cover, and blurb are finalized, since keywords and categories should reflect the book as readers will actually encounter it. We treat it as an ongoing discipline rather than a one-time setup, since search behavior and category performance shift over time and metadata benefits from periodic review.",
        operationalProtocol: "1. Book & audience review — we review your manuscript, comp titles, and target reader to understand how your book fits the market.\n2. Keyword research — we identify the specific search terms your target readers use on Amazon and other retailers.\n3. Backend keyword selection — we select and structure your 7 KDP keyword slots for maximum relevant search coverage.\n4. Category mapping — we identify the browse categories, including lesser-known ones, that best fit your book and its ranking potential.\n5. Blurb & title review — we refine your book description, title, and subtitle to work alongside your new keywords.\n6. Handoff & application guidance — you receive the finished metadata package along with guidance on where to enter it on each platform.",
        scaleStrategy: "Our objective is metadata that puts your book in front of readers who are already looking for something like it, so your marketing spend and organic reach both work harder. That means:\n\n• Researching real search terms — building keywords around what readers actually type, not assumptions about your genre\n• Targeting categories strategically — balancing visibility against realistic ranking potential, including smaller relevant categories\n• Aligning the blurb with the keywords — so the page a reader lands on reinforces why they clicked\n• Treating metadata as ongoing — revisiting keywords and categories as your book's performance and the market shift",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your listings and can apply or adjust the metadata yourself at any time"
            },
            {
                title: "Global Scale",
                description: "keyword and category research informed by reader search behavior across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "keyword and category choices grounded in actual search and ranking behavior, not intuition"
            }
        ],
        whoThisIsFor: [
            "Authors publishing a new book who want it discoverable from launch day",
            "Authors with an existing book that isn't showing up in relevant searches",
            "Authors who've noticed their book sitting in the wrong or overly competitive categories",
            "Authors building a series who want consistent, coordinated metadata across every title"
        ],
        faqs: [
            {
                q: "Can this help a book I've already published?",
                a: "Yes. Metadata can be updated on an existing listing at any time, and it's often the first thing worth revisiting for a book that isn't getting the visibility you expected."
            },
            {
                q: "Will you rewrite my book's title?",
                a: "Not without your input. We review your title and subtitle for searchability and clarity, and offer recommendations, but the final call on any change is yours."
            },
            {
                q: "How many keywords and categories do I get?",
                a: "KDP gives you 7 backend keyword slots and up to 10 browse categories, and we build a strategy that puts each of those slots to work."
            },
            {
                q: "Does this include my book's cover or interior design?",
                a: "No, metadata optimization covers keywords, categories, and your blurb, title, and subtitle. Cover and interior design are handled separately."
            },
            {
                q: "How often should metadata be revisited?",
                a: "There's no fixed schedule, but it's worth reviewing after a launch, if you notice a drop in visibility, or if you're refreshing a series."
            }
        ],
        relatedTools: [
            { title: "Book Description Generator", slug: "book-description-generator", description: "Optimize your book's blurb with AI-powered suggestions." },
            { title: "KENP Calculator", slug: "kenp-calculator", description: "Calculate royalties from Kindle Unlimited page reads." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
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
        metaTitle: "Book Launch Strategy - Bestseller Roadmap Service | Self-Publishing Consultant",
        metaDescription: "A comprehensive book launch strategy to build pre-launch momentum, coordinate ARC reviews, and hit bestseller lists on release day.",
        title: "Book Launch Strategy",
        description: "A comprehensive roadmap to build momentum and hit bestseller lists on day one.",
        category: "Marketing & Publicity Services",
        iconName: "Rocket",
        features: [
            "Full pre-launch timeline planning",
            "ARC team recruitment & review coordination",
            "Promo stacking across Amazon Ads, BookBub, and newsletters",
            "Category & keyword positioning for maximum visibility",
            "Launch-week execution support"
        ],
        answerBlock: {
            question: "How does our Book Launch Strategy service work?",
            answer: "We build a complete pre-launch, launch-week, and post-launch plan tailored to your book and genre. That includes ARC recruitment and review coordination, retailer page optimization, category and keyword placement, and a promo stack timed to Amazon's algorithm-favored launch window, so your book has real momentum on day one instead of a quiet release."
        },
        marketThesis: "A book launch is the only marketing window where Amazon's algorithm actively favors you. For roughly 30 days after publication, new releases get visibility they'll never get again organically. Most authors waste this window they publish and hope. A planned launch turns it into a compounding advantage: pre-launch buyers rank the book from day one, ARC reviews land in the first week to clear the credibility threshold readers look for, launch-day promotion pushes the book through its favored-rank period, and a post-launch sustain plan holds the position once that favor fades.",
        marketThesisSub: "We built this strategy for authors targeting the US, UAE, and KSA markets in three regions with different reader habits, review platforms, and retailer dynamics. A launch plan built only around US Amazon behavior misses real opportunity in the growing English-language reader base across the UAE and KSA, and we factor that into category selection, timing, and promotional channels.",
        operationalProtocol: "We start with a full audit of your book's current assets, manuscript status, cover, metadata, and any existing reader list and benchmark your launch plan against what's currently working for comparable titles in your category. From there, we build a week-by-week countdown covering:\n\n• 90 to 30 days out — ARC team recruitment, cover reveal timing, retailer page setup, category and keyword selection\n• 30 to 7 days out — review outreach follow-ups, pre-order push, media and podcast pitching, promo scheduling\n• Launch week — coordinated review posting, Amazon Ads activation, newsletter and BookBub promo stacking\n• Post-launch (weeks 2-4) — ranking and keyword performance review, ad spend optimization, sustained visibility tactics\n\nWe never offer to pay or trade for reviews; platforms like Amazon detect and remove these, and it can put your account at risk. Every review generated through our process is genuine, reader-driven, and compliant with retailer policies.",
        scaleStrategy: "Launch day isn't the finish line, it's the foundation. Our objective is to maximize your launch-week sales velocity while building an author platform and review base that keeps generating sales long after the initial push fades. That means:\n\n• Structuring your ARC campaign to build a reviewer list you can use again for future launches\n• Setting up ad campaigns you can scale intelligently once real performance data comes in\n• Positioning your book in categories where it can hold rank long-term, not just spike briefly\n• Creating a repeatable launch framework for your next book, so each release compounds on the last",
        whyChooseUs: [
            {
                title: "Full-Service Coordination",
                description: "We manage timeline, ARC outreach, and promo stacking so you're not juggling ten tools yourself"
            },
            {
                title: "Global Market Reach",
                description: "Launch strategies built for US, UAE, and KSA readers, not a single-region playbook"
            },
            {
                title: "Data-Driven Decisions",
                description: "Category, keyword, and promo choices based on real comp title and market research, not guesswork"
            }
        ],
        whoThisIsFor: [
            "First-time authors who want a real plan instead of 'publish and hope'",
            "Authors with an existing reader list who want to convert it into launch-week momentum",
            "Business authors and entrepreneurs who need a launch tied to a bigger brand or business goal",
            "Authors relaunching a backlist title with a fresh strategy"
        ],
        faqs: [
            {
                q: "How far in advance should we start?",
                a: "Ideally 8-12 weeks before your publication date, to allow enough time for ARC recruitment and pre-launch buildout."
            },
            {
                q: "Do you pay for reviews or use review farms?",
                a: "No. We only use compliant, reader-driven review strategies. Paid or traded reviews violate retailer policies and can get your book or account suspended."
            },
            {
                q: "Is ad spend included in your fee?",
                a: "Ad management is included in our service. The ad spend itself (typically variable depending on genre and target reach) is paid directly by you to the ad platform, and we coordinate timing and budget allocation around your launch window."
            },
            {
                q: "Does this work outside the US market?",
                a: "Yes. Our launch strategies are built with US, UAE, and KSA reader markets in mind, adjusting category, timing, and promotional channels accordingly."
            },
            {
                q: "What happens after launch week?",
                a: "We include a post-launch review covering ranking performance, keyword data, and ad optimization, so momentum doesn't drop off once launch week ends."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Model your launch success on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Perfect your launch-day sales copy." }
        ]
    },
    {
        slug: "social-media-management",
        metaTitle: "Social Media Management - Author Platform Growth | Self-Publishing Consultant",
        metaDescription: "Grow your author platform with consistent content, profile optimization, and reader engagement across the social networks your audience actually uses.",
        title: "Social Media Management",
        description: "Grow your author platform and engage with your readers across all major social networks.",
        category: "Marketing & Publicity Services",
        iconName: "Share2",
        features: [
            "Author profiles optimized for discoverability and a consistent first impression",
            "A content calendar built around your genre, your books, and your voice",
            "Regular content creation, from posts and captions to short-form video concepts",
            "Active engagement with readers and comments, not just one-way posting",
            "Performance tracking so content decisions follow what readers respond to",
            "A growing, engaged author platform that supports every future launch"
        ],
        answerBlock: {
            question: "How does our Social Media Management service work?",
            answer: "We start by optimizing your author profiles so they make a strong first impression, then build a content calendar around your genre, your books, and the platforms your readers actually use. From there we handle regular content creation and posting, engage with readers and comments, and track what's performing so the strategy keeps adjusting to what actually works, rather than running on a fixed plan indefinitely."
        },
        marketThesis: "Readers increasingly discover authors before they discover a specific book, through short-form video, community engagement, and an author's ongoing presence rather than a single retail listing. An author with no social presence is invisible to that discovery path entirely, no matter how strong the book itself is.\n\nBut social media only builds a platform if it's consistent. Sporadic posting, long gaps between content, and one-way promotion without engagement all read as an inactive or disinterested account, which readers and platform algorithms both deprioritize. The accounts that build real reader relationships post regularly and actually respond when readers show up.",
        marketThesisSub: "Different platforms suit different genres and different authors, so we treat platform selection as a strategic choice rather than a rule to spread thin across everything. We also treat social media as an ongoing platform-building effort rather than a launch-only push, since the accounts that support a strong launch are the ones with an engaged following built up well before release day.",
        operationalProtocol: "1. Platform & audience review — we identify which platforms your target readers actually spend time on.\n2. Profile optimization — we refine your bio, imagery, and links so profiles make a strong first impression.\n3. Content strategy & calendar — we build a content plan around your genre, books, and voice.\n4. Content creation & posting — we produce and schedule regular content, from captions to short-form video concepts.\n5. Engagement — we respond to comments and messages so the account reads as active, not automated.\n6. Performance review — we track what's resonating and adjust the content strategy accordingly.",
        scaleStrategy: "Our objective is a platform that grows steadily and actually converts followers into readers, not vanity metrics with no reader relationship behind them. That means:\n\n• Choosing platforms deliberately — depth on the two or three platforms your readers use beats a thin presence everywhere\n• Posting consistently — a sustainable regular cadence builds more trust than sporadic bursts of activity\n• Engaging, not just broadcasting — replying to readers is what turns a follower into an actual fan\n• Letting performance guide the strategy — doubling down on content formats and topics that readers actually respond to",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% ownership and control of your social accounts throughout"
            },
            {
                title: "Global Scale",
                description: "content and platform strategy informed by social media conventions across US, UAE, and KSA audiences"
            },
            {
                title: "Data-Driven",
                description: "content decisions grounded in performance data on what readers actually engage with"
            }
        ],
        whoThisIsFor: [
            "Authors with little or no existing social media presence who want to start building one",
            "Authors with accounts that have gone stagnant or inconsistent",
            "Authors who find content creation time-consuming and want it handled consistently",
            "Authors approaching a launch who want an engaged platform in place before release day"
        ],
        faqs: [
            {
                q: "Which social platforms do you manage?",
                a: "We work across the major platforms authors use, including Instagram, TikTok, Facebook, and others, and help decide which ones actually fit your genre and audience rather than spreading effort across all of them."
            },
            {
                q: "Will I need to approve content before it's posted?",
                a: "We can work either way, whether you want to review and approve content in advance or give us more autonomy over posting. We'll set this up based on your preference."
            },
            {
                q: "Do you handle replying to comments and messages?",
                a: "Yes, engagement is part of the service, since an account that only posts without responding reads as inactive to both readers and platform algorithms."
            },
            {
                q: "How is this different from your Advertising Management service?",
                a: "Social Media Management covers organic content, posting, and engagement. Advertising Management covers paid campaigns on platforms like Amazon and Meta. The two can work together, but they're separate services."
            },
            {
                q: "How long before I see meaningful platform growth?",
                a: "It varies by genre, platform, and starting point, but social media growth is typically gradual and compounding rather than immediate, which is why we treat it as an ongoing effort rather than a short campaign."
            }
        ],
        relatedTools: [
            { title: "Hashtag Generator", slug: "hashtag-generator", description: "Generate relevant hashtags for your book promos." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." }
        ]
    },
    {
        slug: "email-marketing",
        metaTitle: "Email Marketing - Newsletter & Subscriber Building | Self-Publishing Consultant",
        metaDescription: "Build a direct line to your readers with a professionally set up lead magnet, funnel, and newsletter, the one audience channel no platform can take away.",
        title: "Email Marketing & Newsletters",
        description: "Build and nurture your most valuable asset: a direct line to your readers.",
        category: "Marketing & Publicity Services",
        iconName: "Mail",
        features: [
            "A lead magnet readers actually want in exchange for their email address",
            "A signup funnel connected to your website, socials, or back matter",
            "A welcome sequence that turns new subscribers into engaged readers",
            "A newsletter template and cadence you can sustain long after setup",
            "List segmentation so readers get relevant messages, not one blast to everyone",
            "A growing email list you own outright, independent of any retailer or platform"
        ],
        answerBlock: {
            question: "How does our Email Marketing & Newsletters service work?",
            answer: "We start by building a lead magnet, like a bonus chapter, short story, or reader resource, that gives people a real reason to subscribe. We connect that to a signup funnel across your website and other channels, then set up a welcome sequence and newsletter template so new subscribers become engaged readers rather than a name on a list. From there, you have a repeatable system for reaching your readers directly, launch after launch."
        },
        marketThesis: "Every retail platform an author relies on, Amazon, social media, ad networks, can change its algorithm, its policies, or its terms without warning. An email list is the one audience channel an author fully owns: no algorithm decides whether a subscriber sees your message, and no platform can take the list away.\n\nThat ownership is what makes email marketing especially valuable at launch. Authors with an engaged list can reach ready buyers the moment a new book goes live, driving the early sales velocity that platforms like Amazon reward with more organic visibility. A cold launch with no list to notify starts that momentum from zero.",
        marketThesisSub: "An email list is a long-term asset, not a launch tactic, so it needs consistent, gradual investment from before you have a book ready to sell. We build the lead magnet, funnel, and newsletter cadence to work continuously in the background, not just spike around a release, since the list an author has when a new book is ready is the one built well before that date.",
        operationalProtocol: "1. Audience & goals review — we discuss your genre, existing platforms, and what you want your list to accomplish.\n2. Lead magnet creation — we develop a magnet, bonus content, a short story, a resource, that gives readers a real reason to subscribe.\n3. Funnel setup — we connect signup forms across your website, social channels, and book back matter.\n4. Welcome sequence — we write an automated sequence that introduces new subscribers to you and your books.\n5. Newsletter template & cadence — we design a newsletter format and set a sending cadence you can realistically sustain.\n6. Handoff & guidance — you receive the finished system along with guidance on maintaining and growing it going forward.",
        scaleStrategy: "Our objective is a list that's actually engaged, not just large, so every send reaches readers who want to hear from you. That means:\n\n• Building a lead magnet worth subscribing for — a weak incentive brings in low-quality signups who never open a newsletter\n• Automating the first impression — a welcome sequence does the work of introducing you before you have to think about it\n• Segmenting where it matters — genre, engagement, and purchase history shape which readers get which messages\n• Setting a cadence you'll actually keep — a sustainable monthly newsletter beats an ambitious weekly one that stops after six weeks",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you own your list and email platform account outright, with full control at every step"
            },
            {
                title: "Global Scale",
                description: "funnel and content strategy informed by reader engagement patterns across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "lead magnet and cadence decisions grounded in what keeps subscribers opening and engaging"
            }
        ],
        whoThisIsFor: [
            "Authors with no email list yet who want to start building one before their next launch",
            "Authors with an existing list that's grown stagnant or disengaged",
            "Authors who want a repeatable system to notify readers the moment a new book goes live",
            "Authors building a series who want a list that grows with every release, not just the first one"
        ],
        faqs: [
            {
                q: "Which email platform do you use?",
                a: "We can work with the major email marketing platforms authors commonly use, and will recommend one based on your budget and needs if you don't already have one set up."
            },
            {
                q: "What makes a good lead magnet?",
                a: "Something genuinely useful or enjoyable on its own, like a bonus chapter, prequel short story, or a resource relevant to your genre, that a reader would want even if they never bought your book."
            },
            {
                q: "How long does it take to build a meaningful list?",
                a: "It varies by genre, traffic sources, and how consistently the funnel is promoted, but list building is a gradual, ongoing process rather than something that peaks and finishes."
            },
            {
                q: "Will you write my newsletters for me on an ongoing basis?",
                a: "This service sets up the lead magnet, funnel, welcome sequence, and newsletter template. Ongoing content writing can be discussed separately depending on how much support you want going forward."
            },
            {
                q: "Do I need an existing following to make this work?",
                a: "No. This is designed to help authors starting from zero as much as those with an existing following, since the funnel and lead magnet are what generate new signups either way."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
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
        metaTitle: "Review Sourcing - ARC Management for Book Launches | Self-Publishing Consultant",
        metaDescription: "Manage Advance Reader Copy distribution to reach engaged readers and secure honest reviews in place for your book's launch day.",
        title: "Review Sourcing (ARC)",
        description: "Manage Advance Reader Copies to reach engaged readers and have honest reviews ready for your launch.",
        category: "Marketing & Publicity Services",
        iconName: "Star",
        features: [
            "An ARC team recruited from readers who actually read in your genre",
            "Advance copies distributed on a clear timeline that lands reviews around launch day",
            "Follow-up and reminders to keep reader engagement and review completion high",
            "Reviews sourced in line with Amazon's and other platforms' guidelines, never bought or manipulated",
            "A tracked, organized record of who received a copy and who's posted a review",
            "A meaningful base of honest reviews in place for the day your book goes live"
        ],
        answerBlock: {
            question: "How does our Review Sourcing (ARC) service work?",
            answer: "We recruit readers who genuinely read in your book's genre, distribute advance copies on a timeline built around your launch date, and follow up to keep engagement high through to a posted review. Every review we source is honest and unpaid, in line with Amazon's and other platforms' guidelines, since reviews that don't hold up to scrutiny put your listing at risk. The result is a track record of genuine reader response in place before your book goes live."
        },
        marketThesis: "A book with zero reviews on launch day reads as untested to both browsing readers and retail algorithms, even if the writing itself is excellent. Reviews are one of the strongest trust signals a new release can carry, and having a meaningful number in place from day one measurably changes how readers respond to a first impression.\n\nThis only works if the reviews are real. Retailers actively police incentivized or manipulated reviews, and a listing flagged for review manipulation can lose reviews, lose visibility, or in serious cases get suspended entirely. We source reviews the way retailers intend: readers get a free advance copy in exchange for their honest opinion, positive or not, with no payment or pressure attached to the rating itself.",
        marketThesisSub: "ARC distribution runs on a timeline that ends at or just before launch, so it needs to start weeks ahead, once your final manuscript and cover are ready. We treat it as a coordinated campaign with its own recruitment, follow-up, and tracking, not a one-off email blast, because reader follow-through on posting a review is the step most campaigns lose.",
        operationalProtocol: "1. Book & timeline review — we confirm your launch date and how many ARC readers we're aiming to recruit and retain.\n2. Reader recruitment — we source ARC readers who read in your specific genre, not a generic reader list.\n3. ARC distribution — advance copies go out on a schedule that gives readers enough time to finish before launch.\n4. Engagement & follow-up — we send reminders and check-ins to keep readers on track toward posting a review.\n5. Review tracking — we track who's received a copy and who's posted, so nothing falls through the cracks.\n6. Launch-day report — you receive a summary of ARC participation and reviews secured heading into launch.",
        scaleStrategy: "Our objective is a launch day that doesn't start from zero, backed by reviews that hold up to any scrutiny a retailer or reader might apply. That means:\n\n• Recruiting genre-matched readers — reviews from readers who actually read your genre carry more weight and read as more credible\n• Keeping every review honest and unpaid — protecting your listing from the platform risk that comes with manipulated reviews\n• Chasing follow-through, not just sign-ups — a large ARC list means little if most readers never finish or post\n• Timing distribution around your launch — reviews landing in the days around launch carry more algorithmic weight than ones trickling in over months",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control of your manuscript and who receives an advance copy"
            },
            {
                title: "Global Scale",
                description: "reader recruitment and review conventions informed by practices across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "recruitment and follow-up built around what actually gets readers from copy to posted review"
            }
        ],
        whoThisIsFor: [
            "Authors with a finished manuscript approaching a launch date",
            "Authors launching without an existing reader list or ARC team of their own",
            "Authors who've tried ARC distribution before and struggled with low review follow-through",
            "Authors building a series who want a repeatable ARC process for every release"
        ],
        faqs: [
            {
                q: "Are these reviews paid for or guaranteed positive?",
                a: "No. ARC readers receive a free advance copy in exchange for their honest opinion, whatever that opinion is. We never pay for reviews or pressure readers toward a particular rating, since that violates retailer policies and puts your listing at risk."
            },
            {
                q: "How many reviews can I expect from an ARC campaign?",
                a: "It varies by genre, ARC list size, and how many readers actually finish the book, but not every reader who receives a copy will post a review. We focus on maximizing follow-through, not promising a fixed number."
            },
            {
                q: "When should ARC distribution start before launch?",
                a: "We typically recommend starting several weeks ahead of your launch date, giving readers enough time to finish the book and post a review before or right around release."
            },
            {
                q: "Do I need my own list of readers to start?",
                a: "No. We can recruit ARC readers on your behalf, though if you already have a mailing list or reader group, we'll incorporate them into the campaign as well."
            },
            {
                q: "What happens if a reader leaves a negative review?",
                a: "That's part of an honest review process, and it's expected. A mix of genuine reviews, including some critical ones, reads as more credible to both readers and retailers than an unnaturally uniform set of five-star ratings."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "advertising-management",
        metaTitle: "Advertising Management - Amazon & Facebook Ads | Self-Publishing Consultant",
        metaDescription: "Data-driven Amazon and Meta advertising campaigns, built and managed to grow your book's visibility and sales without wasting ad spend.",
        title: "Advertising Management",
        description: "Data-driven Amazon and Facebook advertising campaigns to scale your book's visibility and ROI.",
        category: "Marketing & Publicity Services",
        iconName: "TrendingUp",
        features: [
            "Amazon Ads campaigns built around keywords and products readers already search for",
            "Meta (Facebook & Instagram) campaigns targeted to your book's actual reader audience",
            "Ongoing bid and budget management so spend follows what's converting",
            "A/B testing on creative, copy, and targeting to improve performance over time",
            "Regular performance reporting so you know exactly what your ad spend is producing",
            "Campaigns built to grow sales without burning through your ad budget"
        ],
        answerBlock: {
            question: "How does our Advertising Management service work?",
            answer: "We build and launch campaigns on Amazon Ads and Meta based on your book's genre, comparable titles, and target reader, then manage bids and budgets on an ongoing basis rather than setting campaigns and leaving them alone. We test different creative, copy, and targeting combinations, cut what isn't converting, and put more budget behind what is. You get regular reporting so you can see exactly how your ad spend is performing."
        },
        marketThesis: "Even a well-positioned book with strong metadata often needs paid advertising to build initial momentum, since organic visibility on Amazon largely follows sales velocity, and sales velocity is hard to generate from a standing start. Advertising is frequently what gets a new release enough early traction for the algorithm to start working in its favor.\n\nBut advertising spend without ongoing management tends to underperform: campaigns left untouched keep spending on underperforming keywords or audiences long after the data shows they aren't converting. The difference between advertising that grows a book's sales and advertising that quietly loses money is almost entirely in how actively it's managed.",
        marketThesisSub: "Advertising works best once your book's metadata, cover, and blurb are in good shape, since ads drive traffic to a listing and that listing has to convert once readers arrive. We treat it as an ongoing process rather than a one-time launch push, since campaigns need continuous testing and adjustment to keep performing as competition and reader behavior shift.",
        operationalProtocol: "1. Book & audience review — we review your book, comp titles, and target reader to define campaign strategy.\n2. Campaign build — we set up Amazon Ads and/or Meta campaigns with initial targeting, creative, and budgets.\n3. Launch & monitoring — campaigns go live and we monitor early performance closely to catch issues fast.\n4. Testing & optimization — we A/B test creative, copy, and targeting, and reallocate budget toward what's converting.\n5. Ongoing bid & budget management — bids and budgets are adjusted continuously based on performance data, not left static.\n6. Reporting — you receive regular performance reports so you always know what your ad spend is producing.",
        scaleStrategy: "Our objective is advertising that pays for itself in sales and visibility, not a fixed monthly spend that runs on autopilot. That means:\n\n• Managing campaigns continuously — bids, budgets, and targeting adjusted as the data comes in, not set once and left alone\n• Testing systematically — creative and targeting changes tested against each other, not swapped on a hunch\n• Cutting what isn't working fast — underperforming keywords and audiences lose budget quickly rather than draining spend\n• Reporting in plain terms — you always know what your spend is producing, not just that campaigns are 'running'",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% control and ownership of your ad accounts and campaign data"
            },
            {
                title: "Global Scale",
                description: "campaign strategy informed by reader and advertising conventions across US, UAE, and KSA markets"
            },
            {
                title: "Data-Driven",
                description: "every budget and targeting decision grounded in campaign performance data, not assumptions"
            }
        ],
        whoThisIsFor: [
            "Authors launching a new book who want paid traffic to build early sales momentum",
            "Authors with an existing book whose organic sales have plateaued",
            "Authors who've tried running ads themselves and want them managed more actively",
            "Authors building a series who want coordinated advertising across every title"
        ],
        faqs: [
            {
                q: "Which platforms do you advertise on?",
                a: "We manage campaigns on Amazon Ads and Meta (Facebook and Instagram), and can focus on whichever platform fits your book and budget best."
            },
            {
                q: "How much should I budget for advertising?",
                a: "It depends on your genre, goals, and how competitive your category is. We'll recommend a starting budget based on your book and adjust as campaign data comes in."
            },
            {
                q: "Do I need to already have my metadata and cover finalized?",
                a: "Yes, ideally. Ads drive readers to your book's listing, so the metadata, cover, and blurb should be in good shape before we launch campaigns, or the traffic won't convert as well as it should."
            },
            {
                q: "How often are campaigns reviewed and adjusted?",
                a: "We monitor and adjust campaigns on an ongoing basis rather than a fixed schedule, since bids and budgets often need attention more than once a week, especially early in a launch."
            },
            {
                q: "What kind of reporting will I receive?",
                a: "You'll receive regular performance reports covering spend, sales attributed to ads, and key metrics like click-through and conversion rate, so you can see exactly what your budget is producing."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "book-trailer",
        metaTitle: "Book Trailer - Cinematic Video Production Service | Self-Publishing Consultant",
        metaDescription: "Cinematic book trailers that tell your story in under a minute, produced for use on Amazon, social media, and your own marketing channels.",
        title: "Book Trailer Production",
        description: "Cinematic video trailers that tell your book's story in a minute or less.",
        category: "Marketing & Publicity Services",
        iconName: "Video",
        features: [
            "A script that captures your book's hook without giving away the story",
            "Visuals, footage, or animation matched to your book's genre and tone",
            "Professional audio mixing, music, and voiceover where the concept calls for it",
            "A trailer edited to hold attention in the first three seconds, where most viewers decide to keep watching",
            "Multiple export formats sized for Amazon, YouTube, Instagram, and TikTok",
            "A finished trailer ready to drop into your launch marketing from day one"
        ],
        answerBlock: {
            question: "How does our Book Trailer Production service work?",
            answer: "We start with a script built around your book's hook, not a full retelling of the plot, then source or produce visuals that match your genre's tone, whether that's live footage, stock cinematography, or animation. Once the visual concept is approved, we edit the trailer with pacing, music, and sound design built to hold attention from the opening seconds, then export it in the formats each platform needs, from Amazon's video upload to vertical cuts for Instagram and TikTok."
        },
        marketThesis: "Video consistently outperforms static images for stopping a scroll, and a book trailer gives readers something a cover and blurb alone can't: a sense of your book's tone, pacing, and atmosphere in motion. For genres like thriller, fantasy, and romance, where mood is a major part of the sales pitch, that difference matters.\n\nA trailer only works if it earns attention in its opening seconds and doesn't overstay its welcome. Most viewers decide whether to keep watching almost immediately, and a trailer that leads with a slow build or reveals too much of the plot loses viewers before it makes its case. The best book trailers function like a movie trailer: enough story to hook curiosity, never enough to satisfy it.",
        marketThesisSub: "Trailer production works best once your book's title, cover, and blurb are finalized, since the trailer should reinforce the same tone and positioning readers see everywhere else. We treat it as a marketing asset built for reuse across platforms, not a single video for a single moment, since a well-made trailer keeps working across your launch, ads, and social presence long after release day.",
        operationalProtocol: "1. Book & concept review — we review your manuscript and discuss the tone, hook, and visual direction that fits your genre.\n2. Scriptwriting — we write a script built around your book's hook, sized to work in a minute or less.\n3. Visual sourcing or production — we source footage, stock cinematography, or animation to match the approved concept.\n4. Editing & sound design — the trailer is cut for pacing, paired with music and voiceover where it fits, and refined for attention retention.\n5. Review & revisions — you review the edit and request changes before the trailer is finalized.\n6. Export & delivery — we deliver the finished trailer in the formats you need for Amazon, YouTube, Instagram, and TikTok.",
        scaleStrategy: "Our objective is a trailer that earns attention fast and keeps working across every platform you use to market your book. That means:\n\n• Leading with the hook, not the plot — enough story to create curiosity, never enough to remove the reason to buy\n• Designing for the first three seconds — since most viewers decide whether to keep watching almost immediately\n• Matching genre conventions — a thriller trailer and a romance trailer should feel nothing alike\n• Exporting for reuse — one production, multiple formats, so it works on your listing, your ads, and your socials",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you maintain 100% ownership of the finished trailer and all its assets"
            },
            {
                title: "Global Scale",
                description: "creative direction informed by video marketing conventions across US, UAE, and KSA audiences"
            },
            {
                title: "Data-Driven",
                description: "pacing and structure decisions grounded in what actually holds viewer attention on video"
            }
        ],
        whoThisIsFor: [
            "Authors approaching a launch who want a video asset ready for day one",
            "Authors running paid ads who want stronger-converting video creative",
            "Authors active on social media who want shareable content beyond static cover posts",
            "Authors building a series who want a consistent trailer style across every book"
        ],
        faqs: [
            {
                q: "Will the trailer give away my book's plot?",
                a: "No. We build the script around your book's hook and atmosphere, the same way a movie trailer works, so it creates curiosity without spoiling the story."
            },
            {
                q: "Do you use real footage, stock footage, or animation?",
                a: "It depends on your book's genre, budget, and the concept we land on together. Some trailers work best with cinematic stock footage, others with animation or text-driven visuals, and we'll recommend what fits."
            },
            {
                q: "What formats will I receive the trailer in?",
                a: "We export the finished trailer in the formats you need, including landscape for Amazon and YouTube, and vertical cuts for Instagram and TikTok."
            },
            {
                q: "How long is a typical book trailer?",
                a: "Most book trailers run under a minute, since that length holds attention while still leaving room for a title card and clear call to action."
            },
            {
                q: "Can I request revisions to the edit?",
                a: "Yes. You'll review the edit before it's finalized and can request changes to pacing, music, or visuals within the scope of the project."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
    },
    {
        slug: "author-website",
        metaTitle: "Author Website - Professional Digital Presence Design | Self-Publishing Consultant",
        metaDescription: "A custom author website built to sell your books, capture reader emails, and serve as the one online home you fully control.",
        title: "Author Website Design",
        description: "A professional digital flagship to sell books and capture reader emails.",
        category: "Marketing & Publicity Services",
        iconName: "Globe",
        features: [
            "Custom design that reflects your genre, brand, and author voice",
            "A fully mobile-optimized site, since most readers arrive from a phone",
            "Book pages built to convert browsers into buyers, linked to every retailer you sell on",
            "Email capture built into the site, connected to your list-building funnel",
            "E-commerce ready, if you sell signed copies, merchandise, or direct-to-reader editions",
            "A site you own outright and can update long after the initial build"
        ],
        answerBlock: {
            question: "How does our Author Website Design service work?",
            answer: "We design and build a custom website around your brand and books, structured so every page has a clear job, whether that's converting a visitor into a buyer, an email subscriber, or a return reader. Each book gets its own page linking out to every retailer you sell on, the whole site is built mobile-first, and email capture is built in from the start. You end up with a single home base online that you own and control, independent of any platform."
        },
        marketThesis: "Every other platform an author uses, Amazon, social media, retailers, comes with someone else's rules, algorithm, and layout. A website is the one piece of online real estate an author fully controls: no algorithm decides who sees it, and no platform update can change how it looks or works overnight.\n\nA website also does something no single social post or retail listing can: it gives a reader one clear place to find your entire catalog, sign up for your list, and learn who you are, all without needing to remember three different platforms. For press, podcast bookings, and reader word of mouth, a website is often the first place people check before deciding to buy.",
        marketThesisSub: "A website is a long-term asset, not a one-time deliverable, so it needs to be built to be updated easily as you release new books. We build with your future catalog in mind from the start, since a site is far more useful when adding a new book is a quick update rather than a redesign.",
        operationalProtocol: "1. Brand & goals review — we discuss your genre, existing brand elements, and what you want the site to accomplish.\n2. Site structure & design — we plan the page structure and design a look that fits your genre and voice.\n3. Book & content pages — we build out pages for each of your books, your bio, and any additional content you want featured.\n4. Email capture & funnel integration — we connect signup forms to your email marketing platform and lead magnet.\n5. Mobile optimization & testing — we test the site across devices to make sure it performs well everywhere readers arrive from.\n6. Launch & handoff — we launch the finished site and walk you through how to update it going forward.",
        scaleStrategy: "Our objective is a website that works as hard as any other part of your marketing, converting visitors into buyers and subscribers rather than sitting as a static digital business card. That means:\n\n• Designing every page around a clear action — buy the book, join the list, or explore the catalog, not a vague landing page\n• Building mobile-first — since most traffic to an author site now arrives from a phone\n• Making email capture a core feature — not an afterthought bolted onto a homepage\n• Structuring for growth — a new book release should be a quick update, not a rebuild",
        whyChooseUs: [
            {
                title: "Absolute Rights",
                description: "you own your website, domain, and content outright, with no platform lock-in"
            },
            {
                title: "Global Scale",
                description: "design and content decisions informed by reader browsing conventions across US, UAE, and KSA audiences"
            },
            {
                title: "Data-Driven",
                description: "page structure and conversion elements grounded in what actually turns visitors into buyers and subscribers"
            }
        ],
        whoThisIsFor: [
            "Authors with no website yet who want a professional home base online",
            "Authors with an outdated site that no longer reflects their catalog or brand",
            "Authors who want a central hub linking readers to every retailer they sell on",
            "Authors building a series who need a site that scales easily with future releases"
        ],
        faqs: [
            {
                q: "Will I be able to update the site myself after launch?",
                a: "Yes. We build the site so you can make basic updates yourself, and walk you through how, though you're welcome to come back to us for larger changes or new book additions."
            },
            {
                q: "Do I need to already have a domain and hosting?",
                a: "No. If you don't already have a domain and hosting set up, we can guide you through choosing and setting those up as part of the project."
            },
            {
                q: "Can the site sell books directly, not just link to Amazon?",
                a: "Yes, we can build e-commerce functionality into the site if you want to sell signed copies, merchandise, or direct editions, alongside linking out to your retail listings."
            },
            {
                q: "Will the website connect to my email list?",
                a: "Yes. Email capture is built into the site and connected to your email marketing platform, so signups flow directly into your list."
            },
            {
                q: "How long does a typical website build take?",
                a: "It depends on the number of books, pages, and features involved, but most author website builds move from kickoff to launch within a few weeks."
            }
        ],
        relatedTools: [
            { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
            { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
            { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." }
        ]
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
