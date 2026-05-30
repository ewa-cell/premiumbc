/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { insights } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, X, Clock, Calendar, ArrowRight, CornerDownRight } from 'lucide-react';
import { EditorialInsight } from '../types';

export default function EditorialInsights() {
  const { language, t } = useLanguage();
  const [activeInsight, setActiveInsight] = useState<EditorialInsight | null>(null);

  return (
    <div className="space-y-12" id="insights-section">
      {/* Editorial Header */}
      <div className="border-b border-brand-navy/15 pb-6">
        <span className="text-xs font-sans font-medium uppercase tracking-wider text-brand-gold block mb-2">
          {language === 'pl' ? 'Kwartalnik strategiczny' : 'Boutique Advisory Insights'}
        </span>
        <h3 className="font-editorial text-4xl md:text-5xl lg:text-5xl font-light text-brand-navy leading-tight">
          {language === 'pl' ? 'Analizy i Eseje Menedżerskie' : 'The Strategic Journal'}
        </h3>
        <p className="text-sm font-sans font-light text-brand-navy/60 max-w-xl mt-2">
          {language === 'pl' 
            ? 'Rygorystyczne analizy zależności rynkowych, stabilności procesów i de-eskalacji zaangażowania operacyjnego założycieli.'
            : 'Rigorous analyses examining unit profitability, message discipline, customer buying anchors, and the architecture of founder exit.'}
        </p>
      </div>

      {/* Grid of Magazine Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight) => (
          <article 
            key={insight.id}
            className="group flex flex-col justify-between p-6 bg-white border border-brand-navy/5 rounded-xl hover:border-brand-gold/40 hover:shadow-md transition-all duration-350 cursor-pointer h-[350px]"
            onClick={() => setActiveInsight(insight)}
          >
            <div className="space-y-4">
              {/* Category & Time */}
              <div className="flex justify-between items-center text-[10px] font-sans font-semibold text-brand-navy/40 uppercase">
                <span className="text-brand-gold font-semibold">{t(insight, 'category')}</span>
                <span>{insight.readTime}</span>
              </div>

              {/* Title */}
              <h4 className="font-editorial text-xl group-hover:text-brand-gold transition-colors duration-250 font-normal leading-snug text-brand-navy">
                {t(insight, 'title')}
              </h4>

              {/* Excerpt */}
              <p className="text-xs font-sans font-light text-brand-navy/60 line-clamp-4 leading-relaxed">
                {t(insight, 'excerpt')}
              </p>
            </div>

            {/* Read Button */}
            <div className="border-t border-brand-navy/5 pt-4 flex items-center justify-between text-xs font-sans font-medium text-brand-navy/55 group-hover:text-brand-gold transition-colors">
              <span>{insight.date}</span>
              <span className="inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                {language === 'pl' ? 'Czytaj esej' : 'Read essay'} &rarr;
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Immersive Modal Journal Reader */}
      <AnimatePresence>
        {activeInsight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark backing overlay */}
            <motion.div 
              className="absolute inset-0 bg-brand-navy-dark/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveInsight(null)}
            />

            {/* Editorial Sheet */}
            <motion.div 
              className="relative bg-brand-cream-light w-full max-w-4xl h-[90vh] md:h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-brand-gold/20"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ cubicBezier: [0.16, 1, 0.3, 1], duration: 0.45 }}
            >
              {/* Top sticky magazine bar */}
              <div className="sticky top-0 bg-brand-cream border-b border-brand-navy/10 py-4 px-6 md:px-10 flex justify-between items-center z-10">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs font-sans font-medium uppercase tracking-wider text-brand-navy/60">
                    Premium Consulting Journal &bull; {t(activeInsight, 'category')}
                  </span>
                </div>
                <button 
                  onClick={() => setActiveInsight(null)}
                  className="rounded-full p-1.5 hover:bg-brand-navy/5 text-brand-navy/70 hover:text-brand-navy transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Editorial Content */}
              <div className="flex-1 overflow-y-auto px-6 md:px-16 py-8 md:py-12 space-y-8 select-text">
                
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-sans font-medium text-brand-navy/40">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeInsight.date}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeInsight.readTime}
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="font-editorial text-3.5xl md:text-5xl font-light text-brand-navy leading-tight tracking-tight">
                  {t(activeInsight, 'title')}
                </h2>

                {/* Excerpt Quote block */}
                <div className="border-l-2 border-brand-gold pl-6 py-1 italic text-brand-navy/70 text-base md:text-lg font-editorial">
                  {t(activeInsight, 'excerpt')}
                </div>

                {/* Body Paragraphs styled beautifully */}
                <div className="font-sans text-brand-navy/85 leading-relaxed text-sm md:text-base space-y-6 max-w-2xl font-light">
                  {t(activeInsight, 'content')
                    .split('\n\n')
                    .map((paragraph: string, i: number) => {
                      // Check if it's a list item / bullet / subheading which we can style nicely
                      if (paragraph.startsWith('1.') || paragraph.startsWith('2.') || paragraph.startsWith('3.')) {
                        return (
                          <div key={i} className="pl-4 py-2 bg-brand-navy/5 border-l border-brand-gold rounded-r-lg space-y-1">
                            {paragraph.split('\n').map((line, lIdx) => (
                              <p key={lIdx} className="font-light text-brand-navy">
                                {line}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      
                      if (paragraph.startsWith('- ')) {
                        return (
                          <ul key={i} className="space-y-3 pl-2 py-1">
                            {paragraph.split('\n').map((li, liIdx) => (
                              <li key={liIdx} className="flex gap-2 text-sm leading-relaxed text-brand-navy/80 font-light">
                                <CornerDownRight className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
                                <span>{li.replace('- ', '')}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      return (
                        <p key={i} className="text-leading">
                          {paragraph}
                        </p>
                      );
                    })}
                </div>

                {/* Elegant sign-off signature */}
                <div className="border-t border-brand-navy/10 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans font-medium text-brand-navy/50">
                  <div>
                    <span className="font-semibold text-brand-navy">Ewa Pysiewicz</span> &bull; {language === 'pl' ? 'Seniorski Doradca' : 'Senior Advisor'}
                  </div>
                  <div>
                    &copy; {new Date().getFullYear()} Premium Business Consulting
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
