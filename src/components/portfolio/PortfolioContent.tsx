"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, Filter, Zap
} from "lucide-react";
import Image from "next/image";
import { successes, portfolioCategories, SuccessStory } from "@/data/successes";

interface PortfolioContentProps {
  initialSuccesses: SuccessStory[];
}

export default function PortfolioContent({ initialSuccesses }: PortfolioContentProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSuccesses = activeCategory === "All"
        ? initialSuccesses
        : initialSuccesses.filter(s =>
            activeCategory === "Bestsellers" ? s.isBestseller : s.category === activeCategory
        );

    return (
        <div className="container mx-auto px-6 max-w-7xl">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 mb-12 py-4 border-b border-border font-bold">
                <Filter size={14} className="text-primary mr-2" aria-hidden="true" />
                {portfolioCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all ${activeCategory === cat
                                ? "bg-primary text-white shadow-lg shadow-primary/20"
                                : "bg-white border border-border text-foreground/60 hover:border-primary/40 hover:text-primary"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredSuccesses.map((item, i) => (
                        <motion.div
                            layout
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="group bg-white border border-border rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] h-full">
                                {/* Book Visual Area */}
                                <div className="relative bg-muted/30 p-6 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: -2 }}
                                        className="relative z-10 w-full aspect-[2/3] shadow-2xl rounded-sm overflow-hidden border border-white/20"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`${item.title} book cover`}
                                            fill
                                            className="object-cover"
                                            priority={i < 2}
                                        />
                                        {item.isBestseller && (
                                            <div className="absolute top-2 right-2 p-1.5 bg-yellow-400 rounded-full shadow-lg" aria-label="Bestseller Award">
                                                <Star size={10} className="text-white fill-current" />
                                            </div>
                                        )}
                                    </motion.div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex gap-2 flex-wrap">
                                                <span className="px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-[9px] font-black uppercase text-primary tracking-widest">
                                                    {item.category}
                                                </span>
                                                {item.tags.map(tag => (
                                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-foreground/5 text-[9px] font-bold uppercase text-foreground/40 tracking-wider">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-bold tracking-tight text-primary mb-1 group-hover:text-primary-light transition-colors">{item.title}</h3>
                                        <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] mb-4">Author: {item.author}</p>

                                        <div className="flex items-center gap-2 text-primary mb-6">
                                            <Zap size={14} className="fill-current text-secondary" aria-hidden="true" />
                                            <span className="text-xs font-black uppercase tracking-widest">{item.result}</span>
                                        </div>

                                        <p className="text-foreground/80 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Result Metrics */}
                                    <div className="pt-6 border-t border-border grid grid-cols-3 gap-2">
                                        {Object.entries(item.stats).map(([key, val]) => (
                                            <div key={key}>
                                                <p className="text-xs font-black text-primary leading-none">{val}</p>
                                                <p className="text-[8px] font-bold text-foreground/40 uppercase tracking-widest mt-1">{key}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
