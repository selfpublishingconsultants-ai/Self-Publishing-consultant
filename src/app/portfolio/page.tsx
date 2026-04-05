import { Metadata } from "next";
import { Award, ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import PortfolioContent from "@/components/portfolio/PortfolioContent";
import { successes } from "@/data/successes";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bestseller Portfolio | Case Studies in Publishing Excellence",
  description: "Explore our commercial successes. From NYT #1 Bestsellers to award-winning cover designs, see how we engineer market leaders.",
  openGraph: {
    title: "Verified Success Stories | Self-Publishing Consultant",
    description: "Real-world data and results from our high-velocity book launches.",
    images: ["/og-portfolio.png"],
  },
};

export default function PortfolioPage() {
  const exhibitionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Global Commercial Registry",
    "description": "A collection of successful publishing case studies and bestsellers.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": successes.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "CreativeWork",
          "name": item.title,
          "author": {
            "@type": "Person",
            "name": item.author
          },
          "description": item.desc,
          "image": item.image
        }
      }))
    }
  };

  return (
    <main className="min-h-screen bg-transparent pt-32 pb-24">
      <JsonLd schema={[exhibitionSchema]} />
      
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header / Hero */}
        <header className="mb-20">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            <Award size={14} aria-hidden="true" /> Global Commercial Registry
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.85]">
                Verified <br />
                <span className="font-serif italic text-primary-light">Success Stories.</span>
              </h1>
              <p className="text-foreground/80 text-xl font-medium leading-relaxed">
                We don't just publish books; we engineer market leaders. Explore the commercial triumphs of authors who leveraged our high-grade infrastructure.
              </p>
            </div>

            {/* Summary Stats */}
            <div className="flex gap-10 border-l border-border pl-10" role="region" aria-label="Success Statistics">
              <div>
                <p className="text-4xl font-black text-primary">42</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mt-1">#1 Bestsellers</p>
              </div>
              <div>
                <p className="text-4xl font-black text-primary-light">850k+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 mt-1">Copies Sold</p>
              </div>
            </div>
          </div>
        </header>

        <PortfolioContent initialSuccesses={successes} />

        {/* Dynamic CTA */}
        <section className="mt-32 p-12 md:p-20 rounded-[4rem] bg-primary relative overflow-hidden flex flex-col items-center text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-10 pointer-events-none" aria-hidden="true" />
          <Sparkles className="w-12 h-12 text-secondary mb-10" aria-hidden="true" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.85]">
            Your Manuscript <br />
            <span className="font-serif italic text-secondary">In This Gallery.</span>
          </h2>
          <p className="text-white/90 text-xl font-medium max-w-2xl mb-12">
            The distinction between a "book project" and a "market leader" is a proprietary infrastructure. Let's build your legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/contact" className="px-10 py-5 bg-secondary text-primary font-black text-xs uppercase tracking-widest rounded-full hover:bg-white transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
              Start Your Journey <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="px-10 py-5 bg-white/5 border border-white/20 text-white font-black text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
              Explore Services <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
