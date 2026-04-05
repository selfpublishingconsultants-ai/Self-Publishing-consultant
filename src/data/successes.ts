export type SuccessStory = {
  title: string;
  author: string;
  category: string;
  isBestseller: boolean;
  result: string;
  desc: string;
  image: string;
  tags: string[];
  stats: Record<string, string>;
};

export const successes: SuccessStory[] = [
    {
        title: "The Silent Orbit",
        author: "J.R. Vence",
        category: "Fiction",
        isBestseller: true,
        result: "NYT #1 Bestseller / 120k+ Copies",
        desc: "A hard sci-fi masterpiece that utilized our Neural Bidding Framework and Global Distribution. Reached the summit of 5 major charts.",
        image: "/images/Books/1.jpg",
        tags: ["Metadata SEO", "Global Launch", "AMS Ads"],
        stats: { ranking: "#1", sales: "120k+", ads: "14% ACoS" }
    },
    {
        title: "Mindful Execution",
        author: "Sarah Jenks",
        category: "Non-Fiction",
        isBestseller: true,
        result: "WSJ Bestseller / 45k+ Pre-orders",
        desc: "Business strategy architected via our Editorial Excellence and Marketing Velocity modules. Redefined industry standards for non-fiction launches.",
        image: "/images/Books/2.jpg",
        tags: ["Ghostwriting", "PR Campaign", "IngramSpark"],
        stats: { ranking: "#4", sales: "85k+", ads: "18% ACoS" }
    },
    {
        title: "Echoes of the Valley",
        author: "M.T. Khan",
        category: "Fiction",
        isBestseller: false,
        result: "International Translation Deal",
        desc: "Literary fiction that secured 7 international rights deals across Europe and Asia through our Rights Guard protocol.",
        image: "/images/Books/3.jpg",
        tags: ["Rights Licensing", "Editing", "Global Distribution"],
        stats: { deals: "7 States", reach: "12 Languages", reviews: "4.8/5" }
    },
    {
        title: "Azure Depths",
        author: "Elena Rossi",
        category: "Design",
        isBestseller: false,
        result: "Global Indie Design Award Winner",
        desc: "A breathtaking wrap design and formatting that drove a 300% increase in organic retail click-through rates.",
        image: "/images/Books/4.jpg",
        tags: ["Cover Design", "Formatting", "Kindle Vella"],
        stats: { ctr: "4.2%", reviews: "600+", design: "Award Winner" }
    },
    {
        title: "The Lean Start",
        author: "Marcus Thorne",
        category: "Non-Fiction",
        isBestseller: true,
        result: "Amazon Top 10 / 30k Sales",
        desc: "Utilized our AI-driven Keyword Rocket to dominate small business categories for 24 consecutive months.",
        image: "/images/Books/5.jpg",
        tags: ["Category Rank", "AI Marketing", "Growth"],
        stats: { ranking: "#8", sales: "30k+", passive: "$4k/mo" }
    },
    {
        title: "Empire of Glass",
        author: "S.J. Maas (Inspired)",
        category: "Fiction",
        isBestseller: true,
        result: "Kindle Top 100 / 50k+ KU Reads",
        desc: "An epic fantasy odyssey that leveraged our Trope-Optimized Metadata and high-velocity launch strategy.",
        image: "/images/Books/6.jpg",
        tags: ["Metadata", "Trope Analysis", "KU Strategy"],
        stats: { ranking: "#62", reads: "5M+", reviews: "1.2k" }
    },
    {
        title: "The Quantum Recipe",
        author: "Dr. Aris V.",
        category: "Design",
        isBestseller: false,
        result: "Premium Print Production",
        desc: "A complex technical cookbook that pushed the boundaries of POD printing with our high-res color-matching protocol.",
        image: "/images/Books/7.jpg",
        tags: ["High-Res POD", "Color Matching", "Layout"],
        stats: { quality: "Tier 1", sales: "15k+", awards: "Design Finalist" }
    }
];

export const portfolioCategories = ["All", "Bestsellers", "Fiction", "Non-Fiction", "Design"];
