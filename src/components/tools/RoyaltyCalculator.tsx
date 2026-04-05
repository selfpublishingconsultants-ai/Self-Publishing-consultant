"use client";

import React, { useState, useEffect } from "react";
import { 
    Calculator, 
    DollarSign, 
    Info, 
    TrendingUp, 
    CheckCircle2, 
    ChevronRight,
    Search,
    BookOpen,
    Layers
} from "lucide-react";

export const RoyaltyCalculator = () => {
    const [price, setPrice] = useState<number | "">(19.99);
    const [pageCount, setPageCount] = useState<number | "">(200);
    const [interiorType, setInteriorType] = useState<"bw" | "color">("bw");
    const [isExpanded, setIsExpanded] = useState(false);

    const [results, setResults] = useState({
        printingCost: 0,
        royalty: 0,
        margin: 0
    });

    useEffect(() => {
        const pCount = Number(pageCount) || 0;
        const lPrice = Number(price) || 0;

        const fixedCost = 0.85;
        const perPageCost = interiorType === "bw" ? 0.012 : 0.07;
        const printingCost = fixedCost + (pCount * perPageCost);

        const royaltyRate = isExpanded ? 0.40 : 0.60;
        const grossRoyalty = lPrice * royaltyRate;
        const netRoyalty = Math.max(0, grossRoyalty - printingCost);
        const margin = lPrice > 0 ? (netRoyalty / lPrice) * 100 : 0;

        setResults({
            printingCost: Number(printingCost.toFixed(2)),
            royalty: Number(netRoyalty.toFixed(2)),
            margin: Number(margin.toFixed(1))
        });
    }, [price, pageCount, interiorType, isExpanded]);

    return (
        <div className="w-full bg-white rounded-[32px] md:rounded-[48px] shadow-2xl border border-[#064e3b]/10 p-6 md:p-10 lg:p-12">
            <div className="flex flex-col gap-10">
                
                {/* Header */}
                <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-sm transition-all hover:scale-110">
                        <Calculator className="w-7 h-7" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black tracking-tight text-[#064e3b]">Royalty Engine</h3>
                        <p className="text-[#064e3b]/40 text-sm font-bold uppercase tracking-widest">Net Revenue Estimator</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    
                    {/* Inputs */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="p-6 bg-[#064e3b]/5 rounded-2xl border border-transparent focus-within:border-[#064e3b]/20 transition-all shadow-sm">
                                <label className="block text-[10px] font-black uppercase text-[#064e3b]/40 mb-3 tracking-widest leading-none">List Price ($)</label>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#064e3b]/30 font-bold text-xl">$</span>
                                    <input 
                                        type="number" 
                                        value={price} 
                                        placeholder="0.00"
                                        onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                                        className="w-full bg-transparent border-none p-0 font-black text-2xl text-[#064e3b] focus:ring-0 outline-none"
                                    />
                                </div>
                            </div>
                            <div className="p-6 bg-[#064e3b]/5 rounded-2xl border border-transparent focus-within:border-[#064e3b]/20 transition-all shadow-sm">
                                <label className="block text-[10px] font-black uppercase text-[#064e3b]/40 mb-3 tracking-widest leading-none">Page Count</label>
                                <div className="flex items-center gap-2">
                                    <input 
                                        type="number" 
                                        value={pageCount} 
                                        placeholder="0"
                                        onChange={(e) => setPageCount(e.target.value === "" ? "" : Number(e.target.value))}
                                        className="w-full bg-transparent border-none p-0 font-black text-2xl text-[#064e3b] focus:ring-0 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black uppercase text-[#064e3b]/40 mb-4 tracking-widest">Production Level</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { id: "bw", label: "Black & White", icon: Search },
                                    { id: "color", label: "Standard Color", icon: Layers }
                                ].map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setInteriorType(type.id as any)}
                                        className={`p-5 rounded-2xl border-2 transition-all flex items-center gap-4 group ${
                                            interiorType === type.id 
                                            ? "bg-[#064e3b] border-transparent text-white shadow-xl" 
                                            : "bg-white border-[#064e3b]/10 text-[#064e3b]/40 hover:border-secondary/30"
                                        }`}
                                    >
                                        <type.icon className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${interiorType === type.id ? 'text-secondary' : 'text-[#064e3b]/20'}`} />
                                        <span className="font-black text-xs uppercase tracking-widest">{type.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex items-center justify-between group ${
                                isExpanded ? "bg-[#064e3b] border-transparent text-white shadow-2xl" : "bg-white border-[#064e3b]/10 text-[#064e3b]/40"
                            }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isExpanded ? 'bg-white/10' : 'bg-[#064e3b]/5'}`}>
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest mb-0.5 leading-none">Expanded Distribution</p>
                                    <p className={`text-[9px] font-bold ${isExpanded ? 'text-white/60' : 'text-[#064e3b]/30'}`}>Reach worldwide retailers (40% royalty cap)</p>
                                </div>
                            </div>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 shadow-inner transition-all ${isExpanded ? 'bg-secondary border-white/20' : 'border-[#064e3b]/10'}`}>
                                {isExpanded && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                        </div>
                    </div>

                    {/* Results Centerpiece */}
                    <div className="bg-[#064e3b] rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-[0_32px_64px_-12px_rgba(6,78,59,0.4)] min-h-[400px]">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-secondary/20 blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 blur-[80px] translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10 mb-12 text-center lg:text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-5 border-l-2 border-secondary pl-3 inline-block">Estimated Net Payout</p>
                            <h2 className="text-8xl md:text-9xl font-black tracking-tighter leading-none mb-8 text-white tabular-nums drop-shadow-2xl">
                                ${results.royalty}
                            </h2>
                            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-2xl backdrop-blur-3xl border border-white/5 shadow-2xl transition-transform hover:scale-105">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Net Profit Margin:</span>
                                <span className="text-2xl font-black text-secondary">{results.margin}%</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 relative z-10">
                            {[
                                { label: "Printing Load", val: `$${results.printingCost}`, desc: "Factory production overhead", icon: TrendingUp },
                                { label: "Author Royalty", val: `$${results.royalty}`, desc: "Final liquid earnings per unit", icon: CheckCircle2 }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-6 p-5 rounded-2xl bg-white/5 border border-white/5 group transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:translate-x-2">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 shrink-0 border border-white/5 shadow-inner transition-all group-hover:bg-secondary/20 group-hover:text-secondary group-hover:border-secondary/20 group-hover:scale-110">
                                        <stat.icon className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{stat.label}</p>
                                        <p className="text-3xl font-black tracking-tight leading-none text-white tabular-nums">{stat.val}</p>
                                        <p className="text-[8px] font-bold text-white/10 uppercase tracking-tighter mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{stat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Audit Footer */}
                <div className="bg-[#064e3b]/2 border-2 border-[#064e3b]/5 p-8 rounded-[32px] flex gap-6 items-start shadow-inner transition-all hover:bg-[#064e3b]/5">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20 shadow-sm">
                        <Info className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase text-[#064e3b]/40 tracking-widest mb-2 leading-none underline decoration-secondary decoration-2 underline-offset-4 decoration-dotted">Strategic Financial Audit</p>
                        <p className="text-xs text-[#064e3b]/70 font-bold leading-relaxed italic tracking-tight">
                            Calculations are based on 2026 Amazon KDP / IngramSpark benchmarking. Note that "Expanded Distribution" accounts for middle-man wholesale cuts. Values rounded to 2 decimal places for institutional accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
