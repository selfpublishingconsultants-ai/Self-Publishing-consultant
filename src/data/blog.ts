import { TrendingUp, Layout, BookOpen, Sparkles, Globe } from "lucide-react";

export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  iconSlug: string; // We'll map these to icons
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    category: "Marketing",
    title: "Scaling Amazon Ads: The Neural Bidding Framework",
    excerpt: "Leverage advanced AI tools to manage your AMS campaigns and significantly lower your ACoS while doubling unit sales.",
    date: "Dec 30, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    iconSlug: "trending-up",
    slug: "amazon-ads-for-indie-authors",
    author: {
        name: "Sarah J. Montgomery",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  },
  {
    category: "Publishing",
    title: "How to Format Your Book for Amazon KDP in 2026",
    excerpt: "A step-by-step guide to preparing a print-ready interior file that passes KDP's automated quality checks on the first submission.",
    date: "Feb 24, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop",
    iconSlug: "layout",
    slug: "how-to-format-your-book-for-kdp",
    author: {
        name: "M. Ali",
        avatar: "https://i.pravatar.cc/150?u=ali"
    }
  },
  {
    category: "Tools & Resources",
    title: "The Author's Complete ISBN and Barcode Guide",
    excerpt: "Everything you need to know about ISBNs, EAN-13 barcodes, and price extensions before your book goes to print.",
    date: "Feb 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1543005128-d39eefd02c4b?q=80&w=800&auto=format&fit=crop",
    iconSlug: "book-open",
    slug: "isbn-barcode-guide-for-authors",
    author: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?u=david"
    }
  },
  {
    category: "Author Stories",
    title: "From Manuscript to Global Bestseller in 90 Days",
    excerpt: "David Chen shares the exact publishing and marketing timeline that took his debut tech book to #1 in three Amazon sub-categories.",
    date: "Feb 14, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?q=80&w=800&auto=format&fit=crop",
    iconSlug: "sparkles",
    slug: "from-manuscript-to-global-bestseller",
    author: {
        name: "David Chen",
        avatar: "https://i.pravatar.cc/150?u=david"
    }
  },
  {
    category: "Marketing",
    title: "KDP Keywords: The 'Hidden' Data Architecture",
    excerpt: "Why the 7 backend keyword boxes are more important than your book's description, and how to fill them for maximum organic reach.",
    date: "Jan 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    iconSlug: "trending-up",
    slug: "kdp-keywords-data-architecture",
    author: {
        name: "Sarah J. Montgomery",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    }
  },
  {
    category: "Publishing",
    title: "Navigating Global Rights and Translations",
    excerpt: "Secure your book's potential in international markets by understanding rights licensing and high-grade translation services.",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    iconSlug: "globe",
    slug: "global-rights-and-translations",
    author: {
        name: "M. Ali",
        avatar: "https://i.pravatar.cc/150?u=ali"
    }
  }
];

export const categories = ["All", "Marketing", "Publishing", "Tools & Resources", "Author Stories"];
