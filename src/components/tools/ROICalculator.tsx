"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
    Calculator, 
    TrendingUp, 
    AlertCircle, 
    DollarSign, 
    Layers, 
    TrendingDown,
    ChartPie,
    Wallet,
    Target,
    CheckCircle2
} from "lucide-react";

export const ROICalculator = () => {
    const [writingCost, setWritingCost] = useState<number>(0);
    const [editingCost, setEditingCost] = useState<number>(1200);
    const [designCost, setDesignCost] = useState<number>(800);
    const [marketingBudget, setMarketingBudget] = useState<number>(1500);
    const [otherCosts, setOtherCosts] = useState<number>(200);

    const [bookPrice, setBookPrice] = useState<number>(14.99);
    const [printCost, setPrintCost] = useState<number>(4.50);
    const [royaltyRate, setRoyaltyRate] = useState<number>(70);
    const [marketAccessFee, setMarketAccessFee] = useState<boolean>(true);

    const [targetSales, setTargetSales] = useState<number>(500);

    const results = useMemo(() => {
        const totalInvestment = writingCost + editingCost + designCost + marketingBudget + otherCosts;
        let netProfitPerUnit = (bookPrice - printCost) * (royaltyRate / 100);
        if (marketAccessFee) {
            netProfitPerUnit -= (bookPrice * 0.01875);
        }

        const breakEvenUnits = totalInvestment > 0 ? Math.ceil(totalInvestment / Math.max(netProfitPerUnit, 0.001)) : 0;
        const totalRevenue = netProfitPerUnit * targetSales;
        const netProfitTotal = totalRevenue - totalInvestment;
        const roiPercentage = totalInvestment > 0 ? (netProfitTotal / totalInvestment) * 100 : 0;

        return { totalInvestment, netProfitPerUnit, breakEvenUnits, totalRevenue, netProfitTotal, roiPercentage };
    }, [writingCost, editingCost, designCost, marketingBudget, otherCosts, bookPrice, printCost, royaltyRate, marketAccessFee, targetSales]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-white rounded-[32px] md:rounded-[64px] shadow-2xl border border-[#064e3b]/10 p-6 md:p-14"
        >
            <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">
                
                {/* Left: Enhanced Input Console */}
                <div className="w-full xl:w-[60%] space-y-12">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shadow-sm">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-black text-[#064e3b] uppercase tracking-[0.4em]">Investment Profile</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { label: "Writing Fees", val: writingCost, set: setWritingCost },
                                { label: "Manuscript Editing", val: editingCost, set: setEditingCost },
                                { label: "Custom Design", val: designCost, set: setDesignCost },
                                { label: "Launch Marketing", val: marketingBudget, set: setMarketingBudget },
                                { label: "Platform Setup", val: otherCosts, set: setOtherCosts },
                            ].map((field, i) => (
                                <div key={i} className="group p-8 bg-[#064e3b]/2 rounded-[40px] border-2 border-transparent transition-all shadow-[0_4px_20px_-4px_rgba(6,78,59,0.05)] hover:shadow-xl hover:border-secondary/20">
                                    <label className="block text-[11px] font-black uppercase text-[#064e3b]/40 mb-5 tracking-[0.2em]">{field.label}</label>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#064e3b]/10 font-black text-4xl leading-none">$</span>
                                        <input 
                                            type="number" 
                                            value={field.val === 0 ? "" : field.val} 
                                            placeholder="0"
                                            onChange={(e) => field.set(Math.max(0, Number(e.target.value)))}
                                            className="w-full bg-transparent border-none p-0 font-black text-4xl text-[#064e3b] focus:ring-0 outline-none min-w-[150px] tabular-nums"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-sm">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-black text-[#064e3b] uppercase tracking-[0.4em]">Unit Economics</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">
                            {[
                                { label: "Retail List Price", val: bookPrice, set: setBookPrice },
                                { label: "POD Printing Cost", val: printCost, set: setPrintCost },
                                { label: "Platform Royalty %", val: royaltyRate, set: setRoyaltyRate },
                            ].map((rev, i) => (
                                <div key={i} className="p-8 bg-white rounded-[40px] border-2 border-[#064e3b]/5 shadow-sm transition-all focus-within:border-secondary hover:border-[#064e3b]/10 hover:shadow-lg">
                                    <label className="block text-[11px] font-black text-[#064e3b]/40 mb-5 uppercase tracking-[0.2em] leading-none">{rev.label}</label>
                                    <input 
                                        type="number" 
                                        value={rev.val === 0 ? "" : rev.val} 
                                        placeholder="0"
                                        onChange={(e) => rev.set(Number(e.target.value))}
                                        className="w-full bg-transparent border-none p-0 font-black text-3xl text-[#064e3b] focus:ring-0 outline-none min-w-[130px] tabular-nums"
                                    />
                                </div>
                            ))}
                        </div>

                        <div 
                            onClick={() => setMarketAccessFee(!marketAccessFee)}
                            className={`p-10 rounded-[40px] border-2 transition-all cursor-pointer flex items-center justify-between group overflow-hidden relative ${
                                marketAccessFee ? "bg-[#064e3b] border-transparent text-white shadow-2xl" : "bg-white border-[#064e3b]/5 text-[#064e3b]/40 shadow-sm"
                            }`}
                        >
                            {marketAccessFee && <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />}
                            <div className="flex items-center gap-8 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${marketAccessFee ? 'bg-white/10 scale-110' : 'bg-[#064e3b]/5'}`}>
                                    <AlertCircle className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-[12px] font-black uppercase tracking-[0.3em] mb-1 leading-none">IngramSpark 2026 Audit (1.875%)</p>
                                    <p className={`text-[11px] font-bold ${marketAccessFee ? 'text-white/60' : 'text-[#064e3b]/30'}`}>Automatic global market access & fulfillment adjustment</p>
                                </div>
                            </div>
                            <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shrink-0 shadow-inner transition-all group-hover:scale-110 relative z-10 ${marketAccessFee ? 'bg-secondary border-white/20' : 'border-[#064e3b]/10'}`}>
                                {marketAccessFee && <CheckCircle2 className="w-7 h-7 text-white" />}
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t-2 border-[#064e3b]/5">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
                            <label className="text-xs font-black text-[#064e3b] uppercase tracking-[0.5em]">Scaling Volume</label>
                            <span className="text-6xl font-black text-secondary tracking-tighter drop-shadow-sm tabular-nums">{targetSales.toLocaleString()} <span className="text-[10px] text-[#064e3b]/30 font-bold uppercase ml-2 tracking-[0.3em]">Units</span></span>
                        </div>
                        <div className="relative pt-8">
                            <input 
                                type="range" min="100" max="10000" step="100" value={targetSales}
                                onChange={(e) => setTargetSales(Number(e.target.value))}
                                className="w-full h-5 bg-[#064e3b]/5 rounded-full appearance-none cursor-pointer accent-secondary transition-all hover:h-6 focus:ring-4 focus:ring-secondary/20"
                            />
                            <div className="flex justify-between mt-6 text-[11px] font-black text-[#064e3b]/20 uppercase tracking-[0.4em]">
                                <span>100 Units</span>
                                <span>5,000 Units</span>
                                <span>10,000 Units</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Performance Panel */}
                <div className="w-full xl:w-[40%] flex flex-col gap-10">
                    <div className="flex-grow bg-[#064e3b] rounded-[48px] md:rounded-[80px] p-12 md:p-16 text-white relative overflow-hidden flex flex-col justify-between shadow-[0_48px_96px_-16px_rgba(6,78,59,0.4)] min-h-[750px]">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 blur-[140px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/10 blur-[140px] translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10 mb-20">
                            <p className="text-[12px] font-black uppercase tracking-[0.6em] text-white/40 mb-12 border-l-4 border-secondary pl-6 leading-none">Net Return Projection</p>
                            <h2 className={`text-7xl md:text-9xl xl:text-[160px] font-black tracking-[-0.06em] leading-none mb-16 tabular-nums ${results.netProfitTotal >= 0 ? 'text-secondary' : 'text-red-400'}`}>
                                {results.roiPercentage > 0 ? '+' : ''}{Math.round(results.roiPercentage)}<span className="text-4xl md:text-6xl xl:text-8xl ml-3 font-serif italic text-white/40">%</span>
                            </h2>
                            <div className="inline-flex items-center gap-8 px-10 py-6 bg-white/10 rounded-[40px] backdrop-blur-3xl border border-white/10 shadow-2xl transition-all hover:scale-105">
                                <span className="text-xs font-black text-white/50 uppercase tracking-[0.4em]">Net Forecast</span>
                                <span className={`text-2xl md:text-4xl font-black tabular-nums ${results.netProfitTotal >= 0 ? 'text-white' : 'text-red-300'}`}>
                                    {results.netProfitTotal < 0 ? '-' : ''}${Math.abs(Math.round(results.netProfitTotal)).toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-12 relative z-10">
                            {[
                                { label: "Break-Even Sales", val: results.breakEvenUnits.toLocaleString(), desc: "Target volume for net solvency", icon: Layers },
                                { label: "Unit Margin", val: `$${results.netProfitPerUnit.toFixed(2)}`, desc: "Liquid capital per retail sale", icon: DollarSign },
                                { label: "Initial Capital", val: `$${results.totalInvestment.toLocaleString()}`, desc: "Institutional launch funding", icon: Wallet },
                                { label: "Yield Velocity", val: `$${parseFloat(results.totalRevenue.toFixed(2)).toLocaleString()}`, desc: "12Mo aggressive market yield", icon: ChartPie }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-6 md:gap-10 group transition-all duration-700 hover:bg-white/5 p-4 md:p-6 rounded-[32px] md:-ml-6">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-[28px] md:rounded-[32px] bg-white/5 flex items-center justify-center text-white/20 shrink-0 border border-white/5 shadow-inner transition-all group-hover:bg-secondary/20 group-hover:text-secondary group-hover:border-secondary/20 group-hover:scale-110">
                                        <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-2 md:mb-3 leading-none">{stat.label}</p>
                                        <p className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white tabular-nums">{stat.val}</p>
                                        <p className="text-[9px] md:text-[10px] font-bold text-white/10 uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 hidden md:block">{stat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#064e3b]/2 border-4 border-[#064e3b]/5 p-12 rounded-[56px] flex gap-10 items-start shadow-inner transition-all hover:border-secondary/20 hover:bg-[#064e3b]/4">
                        <div className="w-20 h-20 rounded-[32px] bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20 shadow-sm relative overflow-hidden">
                            <div className="absolute inset-0 bg-secondary/5 animate-pulse" />
                            <TrendingUp className="w-10 h-10 relative z-10 font-black" />
                        </div>
                        <div className="space-y-4">
                            <p className="text-[11px] font-black uppercase text-[#064e3b]/40 tracking-[0.5em] flex items-center gap-3">
                                <span className="w-2 h-2 bg-secondary rounded-full animate-ping" /> Final Strategic Audit
                            </p>
                            <p className="text-xl text-[#064e3b]/90 font-bold leading-relaxed italic tracking-tight">
                                {results.netProfitPerUnit <= 0 
                                    ? `Critical Alert: You are operating at a per-unit loss. Adjust list price to $${(bookPrice + 5).toFixed(2)} to ensure institutional solvency.`
                                    : results.netProfitTotal < 0 
                                        ? `Market Strategy: Current unit margin ($${results.netProfitPerUnit.toFixed(2)}) is healthy, but projected volume is $${Math.abs(results.netProfitTotal).toLocaleString()} below break-even debt.`
                                        : `Profit Efficiency: ROI exceeding 2026 benchmarks. Recommendation: Reinvest $${(results.netProfitTotal * 0.15).toLocaleString()} into high-intent performance marketing.`}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};
