"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    BookOpen, ArrowRight, TrendingUp, PenTool, Layout,
    Search, Clock, ChevronRight, Sparkles, Filter, Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, categories, BlogPost } from "@/data/blog";

const IconMap: Record<string, React.ReactNode> = {
  "trending-up": <TrendingUp size={18} />,
  "layout": <Layout size={18} />,
  "book-open": <BookOpen size={18} />,
  "sparkles": <Sparkles size={18} />,
  "globe": <Globe size={18} />,
};

interface BlogContentProps {
  initialPosts: BlogPost[];
}

export default function BlogContent({ initialPosts }: BlogContentProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? initialPosts
        : initialPosts.filter(post => post.category === activeCategory);

    const featuredPost = initialPosts[0];

    return (
        <div className="container mx-auto px-6 max-w-7xl">
            {/* Featured Post */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 relative group"
            >
                <Link href={`/blog/${featuredPost.slug}`} className="block relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
                    <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-secondary text-primary text-[10px] font-black uppercase tracking-widest">Featured Archive</span>
                                <span className="text-white/90 text-[10px] font-black uppercase tracking-widest leading-none">{featuredPost.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[0.9] group-hover:text-secondary transition-colors transition-duration-500">
                                {featuredPost.title}
                            </h2>
                            <p className="text-white/90 text-lg font-medium leading-relaxed mb-8 line-clamp-2">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden relative">
                                        <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
                                    </div>
                                    <div className="text-white text-xs font-bold uppercase tracking-widest">{featuredPost.author.name}</div>
                                </div>
                                <div className="flex items-center gap-2 text-white/40 text-[10px] font-black uppercase tracking-widest border-l border-white/10 pl-6">
                                    <Clock size={12} /> {featuredPost.readTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.section>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 py-4 border-b border-border">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto font-bold no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-white border border-border text-foreground/60 hover:border-primary/40 hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredPosts.slice(1).map((post, i) => (
                        <motion.article
                            layout
                            key={post.slug}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col bg-white border border-border shadow-sm rounded-[2rem] overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all h-full"
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white text-primary text-[9px] font-black uppercase tracking-widest shadow-sm">
                                        {IconMap[post.iconSlug]} {post.category}
                                    </div>
                                </div>
                            </Link>
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-4">
                                    <time className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em]">{post.date}</time>
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-foreground/30 uppercase tracking-[0.1em]">
                                        <Clock size={10} /> {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-primary mb-4 leading-tight group-hover:text-primary-light transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                                    <span className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Read Article <ArrowRight size={14} />
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all">
                                        <ChevronRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
