import React from "react";

interface AnswerBlockProps {
  question: string;
  answer: string;
  className?: string;
}

/**
 * AnswerBlock Component
 * Optimized for Google AI Overviews and GEO (Generative Engine Optimization).
 * Provides concise, factual answers to common user queries at the top of pages.
 */
export const AnswerBlock: React.FC<AnswerBlockProps> = ({ question, answer, className }) => {
  return (
    <section 
      className={`bg-primary text-white rounded-3xl p-8 md:p-10 mb-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden group ${className}`}
      aria-labelledby="answer-header"
      role="region"
    >
      <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
      <div className="relative z-10">
        <h2 id="answer-header" className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-white/60">
            Quick Answer
        </h2>
        <h3 className="text-xl md:text-2xl font-black tracking-tight mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px]" aria-hidden="true">Q</span>
            {question}
        </h3>
        <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-4xl">
            {answer}
        </p>
      </div>
    </section>
  );
};
