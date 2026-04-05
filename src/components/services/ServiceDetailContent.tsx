"use client";

/**
 * ServiceDetailContent — Client Component
 *
 * Receives a pre-fetched `service` object from the Server Component parent.
 * All framer-motion animations, hover states, and interactive elements live here.
 *
 * INP Optimizations:
 * - Animation variants defined at module scope (no re-allocation per render)
 * - `once: true` on all viewport observers — no continuous IntersectionObserver cost
 * - Hover effects use CSS `transition-colors` instead of JS state updates
 * - No useEffect, no local state — pure render, minimal hydration cost
 */

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import {
  CheckCircle2, ArrowLeft, Globe, Shield, Zap,
  Wrench, ArrowUpRight, ArrowRight, BookOpen
} from "lucide-react";
import Link from "next/link";
import type { Service } from "@/data/services";
import { AnswerBlock } from "@/components/layout/AnswerBlock";

/* ── Animation presets (module-scope = allocated once) ───────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ServiceDetailContent({ service }: { service: Service }) {
  // Map string to Lucide icon, fallback to BookOpen
  const Icon = (LucideIcons as any)[service.iconName] || BookOpen;

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero Section ───────────────────────────────────────────────── */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-muted/30" aria-labelledby="service-heading">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid -z-10 opacity-20" aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-12 hover:gap-4 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Services
            </Link>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: copy */}
            <div>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4 }}
                className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-8 shadow-sm border border-primary/20"
                aria-hidden="true"
              >
                <Icon className="w-10 h-10" />
              </motion.div>

              <motion.h1
                id="service-heading"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-primary"
              >
                {service.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-foreground/60 font-medium leading-relaxed mb-12"
              >
                {service.description}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-full font-bold">
                  Inquire Now
                </Link>
                <Link href="/schedule" className="btn-secondary px-10 py-4 rounded-full font-bold bg-white">
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>

            {/* Right: feature card */}
            <div className="relative">
              <motion.div
                variants={fadeRight}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.55, delay: 0.1 }}
                className="aspect-[4/3] rounded-[3rem] bg-[#022c22] p-12 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />

                {/* Status bar */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-2">Module Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                      <span className="text-emerald-500 font-bold text-sm tracking-tight">Live &amp; Operational</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-black uppercase text-white/40 tracking-widest">
                    SECURE PROTOCOL v4.0
                  </div>
                </div>

                {/* Feature list */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6 tracking-tighter italic font-serif">Key Outcomes</h2>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-3 text-white/60 font-medium text-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-center">
                  <div className="flex gap-4" aria-hidden="true">
                    <Globe className="w-4 h-4 text-white/20" />
                    <Shield className="w-4 h-4 text-white/20" />
                    <Zap className="w-4 h-4 text-white/20" />
                  </div>
                  <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Self-Publishing Consultant</p>
                </div>
              </motion.div>

              {/* Floating accent badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-border hidden md:block" aria-hidden="true">
                <p className="text-3xl font-black text-primary italic font-serif leading-none">SPC</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mt-1">Enterprise Grade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Answer Block Section (Inverted Pyramid) ────────────────────── */}
      <section className="bg-transparent container mx-auto px-6 pt-12">
        <AnswerBlock 
          question={service.answerBlock?.question || `How does 2026 ${service.title} work?`}
          answer={service.answerBlock?.answer || `Our professional ${service.title} for 2026 follows strict 'Human-Trust' verification standards. We ensure your work meets all KDP and IngramSpark technical requirements—including the February 1st fee updates—and remains fully copyrightable under current US Copyright Office mandates.`}
        />
      </section>

      {/* ── Deep Content Section ────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6" aria-label="Service overview">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

          {/* Main copy — 2/3 width */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter text-primary italic font-serif underline decoration-primary/10 underline-offset-8">Market Thesis & Impact</h2>
              <p className="text-xl text-foreground/70 leading-relaxed font-medium">
                The 2026 publishing landscape demands institutional-grade precision. Our <strong>{service.title}</strong> service is
                engineered to navigate the intersection of creative excellence and algorithmic discoverability, specifically addressing KDP's 2026 royalty shifts and the mandatory US Copyright AI disclosures.
              </p>
              
              {/* Fact Density Block */}
              {service.factDensity && (
                <div className="p-8 rounded-3xl bg-secondary/5 border-l-8 border-secondary shadow-sm">
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-6">Factual Insights (2026 Data)</h3>
                  <ul className="space-y-4">
                    {service.factDensity.map((fact, i) => (
                      <li key={i} className="flex gap-4 items-start text-foreground/80 font-bold leading-tight">
                        <span className="w-6 h-6 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center text-[10px] shrink-0">√</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="text-lg text-foreground/60 leading-relaxed font-medium pt-8">
                We utilize a proprietary "Dual-Layer" validation model. While our technical framework ensures 100% compliance with current Library of Congress and Amazon retail standards, our editorial leads maintain a relentless focus on the nuanced voice and psychological impact of your manuscript.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 rounded-3xl bg-primary/5 border border-primary/10 group hover:bg-primary/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#064e3b]">Operational Protocol</h3>
                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                  We begin with an exhaustive audit of your current assets to align your project with established market benchmarks for sales velocity.
                </p>
              </div>
              <div className="p-10 rounded-3xl bg-secondary/5 border border-secondary/10 group hover:bg-secondary/10 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-[#064e3b]">Scale Strategy</h3>
                <p className="text-[#064e3b]/60 leading-relaxed font-medium">
                  Our objective is to maximize your net royalty yield per unit while building a resilient author platform that outlasts retail trends.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar — 1/3 width */}
          <aside className="space-y-8">
            {/* Why Choose Us */}
            <div className="p-10 rounded-[2.5rem] bg-[#022c22] text-white">
              <h3 className="text-2xl font-bold mb-8 tracking-tighter">Why Choose Us?</h3>
              <ul className="space-y-6">
                {[
                  { t: "Absolute Rights", d: "You maintain 100% control of your work." },
                  { t: "Global Scale", d: "Reach 180+ markets instantly." },
                  { t: "Data Driven", d: "Predictive market analytics." },
                ].map((item) => (
                  <li key={item.t} className="space-y-1">
                    <p className="font-bold text-primary">{item.t}</p>
                    <p className="text-white/40 text-sm leading-snug">{item.d}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block mt-10 text-sm font-black text-primary uppercase tracking-[0.3em] border-b-2 border-primary/20 pb-1 hover:border-primary transition-colors duration-200"
              >
                Let's Discuss Your Book →
              </Link>
            </div>

            {/* Related Tools */}
            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center" aria-hidden="true">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tighter text-[#064e3b]">
                  {service.relatedTools && service.relatedTools.length > 0 ? "Free Expert Tools" : "Essential Author Tools"}
                </h3>
              </div>

              <div className="space-y-6">
                {(service.relatedTools && service.relatedTools.length > 0
                  ? service.relatedTools
                  : [
                    { title: "Amazon Sales Calculator", slug: "amazon-sales-calculator", description: "Estimate potential sales and volume on Amazon." },
                    { title: "Book Description Generator", slug: "book-description-generator", description: "Draft compelling sales copy with AI assistance." },
                    { title: "Royalty Calculator", slug: "royalty-calculator", description: "Calculate your estimated earnings per sale." },
                  ]
                ).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="block group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-black text-sm text-[#064e3b] group-hover:text-primary transition-colors duration-200">{tool.title}</p>
                      <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                    <p className="text-xs text-[#064e3b]/50 font-medium leading-relaxed">{tool.description}</p>
                  </Link>
                ))}
              </div>

              <Link
                href="/tools"
                className="inline-flex items-center gap-2 mt-8 text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:gap-4 transition-all duration-200"
              >
                Explore All Tools <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

    </main>
  );
}
