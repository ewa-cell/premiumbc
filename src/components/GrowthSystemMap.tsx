/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { systemElements } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Network, ArrowRightLeft, Info, HelpCircle } from 'lucide-react';

interface Coord {
  x: number;
  y: number;
}

export default function GrowthSystemMap() {
  const { language, t } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('results');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Core coordinates inside our 400x400 coordinate space
  const centerX = 200;
  const centerY = 200;
  const orbitRadius = 135;

  const peripheralElements = systemElements.filter(el => el.id !== 'results');
  const resultsElement = systemElements.find(el => el.id === 'results')!;

  // Map elements to their designated orbital angles for premium aesthetic balance
  const getCoordinates = (index: number, total: number): Coord => {
    // Offset standard angular positions to keep labels perfectly balanced and readable
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: centerX + orbitRadius * Math.cos(angle),
      y: centerY + orbitRadius * Math.sin(angle)
    };
  };

  const nodePositions: Record<string, Coord> = {
    results: { x: centerX, y: centerY }
  };

  peripheralElements.forEach((el, index) => {
    nodePositions[el.id] = getCoordinates(index, peripheralElements.length);
  });

  const activeElement = systemElements.find(el => el.id === selectedId) || resultsElement;

  // Let's check if two nodes are connected according to our dependency model
  const isConnected = (idA: string, idB: string) => {
    const elA = systemElements.find(el => el.id === idA);
    const elB = systemElements.find(el => el.id === idB);
    return (
      elA?.connectedTo.includes(idB) || elB?.connectedTo.includes(idA)
    );
  };

  // Determine line style depending on hover or selection states
  const getLineStatus = (idA: string, idB: string) => {
    const isSelectedConnection = selectedId === idA || selectedId === idB;
    const isHoveredConnection = hoveredId === idA || hoveredId === idB;

    if (isSelectedConnection && isConnected(idA, idB)) {
      return 'active-selected';
    }
    if (isHoveredConnection && isConnected(idA, idB)) {
      return 'active-hovered';
    }
    return 'inactive';
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-navy-light text-brand-cream-light p-8 md:p-12 rounded-2xl border border-brand-gold/10 shadow-2xl relative overflow-hidden" id="interactive-system-map">
      {/* Abstract premium layout background graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Title block at top on mobile */}
      <div className="lg:col-span-12 border-b border-brand-cream/10 pb-6 mb-2 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <span className="text-xs font-sans font-medium tracking-wider text-brand-gold uppercase block mb-1">
            {language === 'pl' ? 'INTERAKTYWNA MAPA ZALEŻNOŚCI' : 'INTERACTIVE DEPENDENCY GRAPH'}
          </span>
          <h3 className="font-editorial text-3xl md:text-4xl text-brand-cream-light font-light leading-none">
            {language === 'pl' ? 'Pajęczyna powiązań wzrostu' : 'The Growth Ecosystem'}
          </h3>
        </div>
        <p className="text-sm text-brand-cream/60 max-w-sm font-sans font-light">
          {language === 'pl' 
            ? 'Kliknij elementy obwodowe, aby zobaczyć ich unikalne relacje z zyskiem netto i innymi filarami firmy.'
            : 'Click any outer element to analyze its direct relationship to net profit and operational systems.'}
        </p>
      </div>

      {/* Left Area: Visual Map (SVG) */}
      <div className="lg:col-span-7 flex justify-center items-center relative aspect-square max-w-md mx-auto w-full select-none">
        
        {/* Render connections SVG Layer first helper */}
        <svg viewBox="0 0 400 400" className="w-full h-full absolute z-0 pointer-events-none overflow-visible">
          <defs>
            <linearGradient id="gradient-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A68966" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#C0A98F" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render base structural orbit lines */}
          <circle cx={centerX} cy={centerY} r={orbitRadius} fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="1" strokeDasharray="4 6" />

          {/* Render lines between nodes */}
          {systemElements.map((el, i) => {
            return el.connectedTo.map(targetId => {
              // Ensure we only draw each line once helper to prevent double renders
              if (el.id < targetId) {
                const start = nodePositions[el.id];
                const end = nodePositions[targetId];
                if (!start || !end) return null;

                const status = getLineStatus(el.id, targetId);
                let strokeColor = 'rgba(255, 255, 255, 0.05)';
                let strokeWidth = '1';
                let strokeDash = undefined;
                let activeFilter = undefined;

                if (status === 'active-selected') {
                  strokeColor = '#A68966'; // active gold
                  strokeWidth = '2';
                  activeFilter = 'url(#glow)';
                } else if (status === 'active-hovered') {
                  strokeColor = '#C0A98F'; // warm white/gold
                  strokeWidth = '1.5';
                }

                return (
                  <motion.line
                    key={`${el.id}-${targetId}`}
                    x1={start.x}
                    y1={start.y}
                    x2={end.x}
                    y2={end.y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDash}
                    filter={activeFilter}
                    initial={{ opacity: 0.2 }}
                    animate={{ 
                      opacity: status === 'inactive' ? 0.3 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                );
              }
              return null;
            });
          })}
        </svg>

        {/* Node Buttons Layer */}
        <div className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none">
          {systemElements.map(el => {
            const coord = nodePositions[el.id];
            if (!coord) return null;

            const isSelected = selectedId === el.id;
            const isHovered = hoveredId === el.id;
            const isCenter = el.id === 'results';

            // Coordinates are based on 400x400 space, convert to percent for responsive HTML positioning over SVG
            const leftPct = `${(coord.x / 400) * 100}%`;
            const topPct = `${(coord.y / 400) * 100}%`;

            return (
              <div
                key={el.id}
                style={{ left: leftPct, top: topPct, transform: 'translate(-50%, -50%)' }}
                className="absolute pointer-events-auto cursor-pointer flex flex-col items-center"
                onClick={() => setSelectedId(el.id)}
                onMouseEnter={() => setHoveredId(el.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Node bubble */}
                <motion.div
                  className={`flex items-center justify-center rounded-full transition-all relative ${
                    isCenter 
                      ? 'w-14 h-14 bg-brand-cream-light text-brand-navy border-2 border-brand-gold/60 z-30'
                      : isSelected
                        ? 'w-9 h-9 bg-brand-gold text-brand-navy-dark z-20 border border-brand-cream-light'
                        : 'w-7.5 h-7.5 bg-brand-navy-light text-brand-cream border border-brand-cream/20 hover:border-brand-gold z-10'
                  }`}
                  whileHover={{ scale: isCenter ? 1.05 : 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isCenter ? (
                    <div className="text-center font-serif text-xs leading-none font-bold tracking-tight py-1">
                      {language === 'pl' ? 'REZULTATY' : 'RESULTS'}
                    </div>
                  ) : (
                    <span className="text-[10px] font-sans font-semibold">
                      {el.labelEn.substring(0, 2).toUpperCase()}
                    </span>
                  )}

                  {/* Highlight ring reflection */}
                  {(isSelected || (isHovered && !isCenter)) && (
                    <motion.div
                      layoutId="pulse-ring"
                      className="absolute -inset-2 rounded-full border border-brand-gold/30 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>

                {/* Node Label (External from Bubble for maximum clarity) */}
                {!isCenter && (
                  <div 
                    className={`absolute mt-10 whitespace-nowrap text-[11px] font-sans font-medium px-2 py-0.5 rounded shadow-sm transition-colors ${
                      isSelected 
                        ? 'bg-brand-gold text-brand-navy font-semibold' 
                        : 'bg-brand-navy-dark/90 text-brand-cream/80'
                    }`}
                  >
                    {t(el, 'label')}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Absolute center placeholder to trigger interaction instruction */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full border border-brand-gold/5 animate-pulse" />
        </div>
      </div>

      {/* Right Area: Strategic Explanation Details */}
      <div className="lg:col-span-5 h-[340px] flex flex-col justify-between bg-brand-navy-dark p-6 rounded-xl border border-brand-cream/5 shadow-inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Header section with categories */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span className="text-[10px] font-sans font-bold tracking-wide text-brand-gold uppercase">
                  {activeElement.id === 'results' 
                    ? (language === 'pl' ? 'SPoiwo CELU KOŃCOWEGO' : 'INTEGRATION HUB') 
                    : (language === 'pl' ? 'FILAR EKOSYSTEMU' : 'SYSTEM SEGMENT')}
                </span>
              </div>

              <h4 className="font-editorial text-2xl font-light tracking-tight text-white mb-2">
                {t(activeElement, 'label')}
              </h4>

              <p className="text-sm font-sans font-light text-brand-gold-light italic mb-4">
                {t(activeElement, 'role')}
              </p>

              <div className="border-t border-brand-cream/5 pt-4">
                <span className="text-[10px] font-sans font-bold text-brand-cream/40 block mb-1 uppercase">
                  {language === 'pl' ? 'ZALEŻNOŚĆ SYSTEMOWA' : 'SYSTEMIC DEPENDENCY'}
                </span>
                <p className="text-sm font-sans font-light text-brand-cream/80 leading-relaxed">
                  {t(activeElement, 'dependency')}
                </p>
              </div>
            </div>

            {/* Quick action helper bottom */}
            <div className="border-t border-brand-cream/5 pt-4 flex items-center justify-between text-xs text-brand-cream/40 font-sans font-medium">
              <span className="flex items-center gap-1.5">
                <ArrowRightLeft className="w-3.5 h-3.5 text-brand-gold" />
                {activeElement.id === 'results'
                  ? (language === 'pl' ? 'Połączono ze wszystkimi' : 'Omnidirectional connection')
                  : (language === 'pl' ? `Spina ${activeElement.connectedTo.length} filarów` : `Tied to ${activeElement.connectedTo.length} elements`)}
              </span>
              
              {activeElement.id !== 'results' && (
                <button 
                  onClick={() => setSelectedId('results')}
                  className="text-brand-gold hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  {language === 'pl' ? 'Pokaż centrum' : 'Show core'} &rarr;
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
