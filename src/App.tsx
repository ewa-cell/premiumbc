/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { 
  problemCards, 
  HERO_CONTENT, 
  workSteps, 
  CLIENT_FIT_CONTENT, 
  services, 
  ABOUT_CONTENT, 
  CONTACT_INFO 
} from './data';
import ContactForm from './components/ContactForm';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Layers, 
  Check, 
  X, 
  CheckCircle, 
  TrendingUp, 
  ArrowRight, 
  FileText, 
  Users, 
  MousePointer, 
  ShieldCheck, 
  Compass,
  ArrowUpRight,
  Sparkles,
  Network,
  Menu
} from 'lucide-react';

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setSuccessToast(`${label} copied!`);
    setTimeout(() => {
      setSuccessToast(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-navy flex flex-col font-sans selection:bg-brand-gold/20 selection:text-brand-navy-dark leading-relaxed antialiased">
      
      {/* Dynamic Copied Toast notification */}
      <AnimatePresence>
        {successToast && (
          <motion.div 
            className="fixed bottom-6 right-6 bg-brand-navy-dark text-white text-xs font-sans font-medium px-4 py-3 rounded-lg border border-brand-gold/30 shadow-2xl z-50 flex items-center gap-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
          >
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>{successToast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STICKY FLOATING HEADER */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-cream/90 backdrop-blur-md border-b border-brand-navy/10 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
          
          {/* Brand Signature Monogram removed as requested */}
          <div className="shrink-0" />

          {/* Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-sans font-semibold uppercase tracking-wider whitespace-nowrap min-w-0 justify-center">
            <a href="#problems-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'Problemy' : 'Constraints'}
            </a>
            <a href="#timeline-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'Współpraca' : 'Process'}
            </a>
            <a href="#fit-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'Profil Klienta' : 'Client Fit'}
            </a>
            <a href="#services-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'Oferta' : 'Services'}
            </a>
            <a href="#about-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'O mnie' : 'About'}
            </a>
            <a href="#contact-section" className="px-5 py-2.5 bg-brand-gold text-brand-navy hover:bg-brand-gold-dark hover:text-white rounded-md shadow-sm transition-all duration-300 whitespace-nowrap">
              {language === 'pl' ? 'Kontakt' : 'Contact'}
            </a>
          </nav>

          {/* Bilingual Language Switcher and Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center p-0.5 rounded-lg bg-brand-navy/5 border border-brand-navy/10 text-[10px] font-sans font-medium uppercase">
              <button 
                id="lang-btn-pl-header"
                onClick={() => setLanguage('pl')}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  language === 'pl' ? 'bg-brand-navy text-white font-medium' : 'text-brand-navy/60 hover:text-brand-navy'
                }`}
              >
                PL
              </button>
              <button 
                id="lang-btn-en-header"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  language === 'en' ? 'bg-brand-navy text-white font-medium' : 'text-brand-navy/60 hover:text-brand-navy'
                }`}
              >
                EN
              </button>
            </div>

            <a 
              id="consultation-btn-header"
              href="#contact-section"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-2 bg-brand-navy hover:bg-brand-navy-light text-brand-cream-light font-sans text-[11px] font-medium rounded transition-colors"
            >
              {language === 'pl' ? 'Konsultacja' : 'Book Session'}
            </a>

            {/* Hamburger Button for Mobile/Tablet */}
            <button 
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-brand-navy hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation with high-end Framer Motion overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-50 bg-brand-cream-dark flex flex-col justify-between px-6 py-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex justify-between items-center pb-6 border-b border-brand-navy/10">
                <span className="font-sans text-lg tracking-tight font-semibold text-brand-navy">
                  Ewa Pysiewicz
                </span>
                <button 
                  id="mobile-menu-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-brand-navy hover:text-brand-gold transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items list */}
              <nav className="flex flex-col gap-4 pt-8 text-[15px] font-sans font-medium text-brand-navy/90">
                <a 
                  href="#problems-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5 whitespace-nowrap"
                >
                  {language === 'pl' ? 'Problemy' : 'Constraints'}
                </a>
                <a 
                  href="#timeline-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5 whitespace-nowrap"
                >
                  {language === 'pl' ? 'Współpraca' : 'Process'}
                </a>
                <a 
                  href="#fit-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5 whitespace-nowrap"
                >
                  {language === 'pl' ? 'Profil Klienta' : 'Client Fit'}
                </a>
                <a 
                  href="#services-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5 whitespace-nowrap"
                >
                  {language === 'pl' ? 'Oferta' : 'Services'}
                </a>
                <a 
                  href="#about-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 border-b border-brand-navy/5 whitespace-nowrap"
                >
                  {language === 'pl' ? 'O mnie' : 'About'}
                </a>
                <a 
                  href="#contact-section" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-brand-gold transition-colors py-2 whitespace-nowrap"
                >
                  {language === 'pl' ? 'Kontakt' : 'Contact'}
                </a>
              </nav>
            </div>

            {/* Bottom Section inside Drawer */}
            <div className="space-y-6 pt-6 border-t border-brand-navy/10 flex flex-col items-center">
              {/* Language toggler */}
              <div className="inline-flex items-center p-0.5 rounded-lg bg-brand-navy/5 border border-brand-navy/10 text-[11px] font-sans font-medium uppercase w-full justify-between">
                <button 
                  id="lang-btn-pl-drawer"
                  onClick={() => { setLanguage('pl'); setIsMobileMenuOpen(false); }}
                  className={`w-1/2 py-2 text-center rounded cursor-pointer transition-colors ${
                    language === 'pl' ? 'bg-brand-navy text-white font-medium' : 'text-brand-navy/60 hover:text-brand-navy'
                  }`}
                >
                  PL
                </button>
                <button 
                  id="lang-btn-en-drawer"
                  onClick={() => { setLanguage('en'); setIsMobileMenuOpen(false); }}
                  className={`w-1/2 py-2 text-center rounded cursor-pointer transition-colors ${
                    language === 'en' ? 'bg-brand-navy text-white font-medium' : 'text-brand-navy/60 hover:text-brand-navy'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Consultation button */}
              <a 
                id="consultation-btn-drawer"
                href="#contact-section"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-brand-navy hover:bg-brand-navy-light text-brand-cream-light font-sans text-sm font-medium tracking-tight rounded-lg transition-colors shadow-md animate-none"
              >
                {language === 'pl' ? 'Bezpłatna Konsultacja' : 'Book Free Session'}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex flex-col justify-center py-16 md:py-24 overflow-hidden border-b border-brand-navy/5">
        
        {/* Fine organic geometry design vector graphics and grids to emphasize relationships, systems */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] rounded-full border border-brand-navy/[0.012] pointer-events-none" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full border border-brand-navy/[0.015] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-12 relative">
          
          {/* Wide decorative graphic */}
          <div className="w-full animate-fade-in-up">
            <img src="/src/assets/images/grafika-www.png" alt="" className="w-full object-contain" />
          </div>

          {/* Subtle brand statement as pre-headline */}
          <div className="flex items-center gap-3 animate-fade-in-up">
            <span className="inline-block w-8 h-px bg-brand-gold" />
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-gold">
              {t(HERO_CONTENT, 'brandStatement')}
            </span>
          </div>

          {/* Hero Typography Group */}
          <div className="space-y-6 max-w-5xl">
            <p className="font-sans font-light text-sm sm:text-base md:text-lg text-brand-navy/65 max-w-3xl leading-relaxed animate-fade-in-up [animation-delay:150ms]">
              {t(HERO_CONTENT, 'subheadline')}
            </p>
            <h1 className="font-editorial text-2.5xl sm:text-3.5xl md:text-4xl lg:text-4.5xl font-light tracking-tight text-brand-navy leading-[1.2] animate-fade-in-up [animation-delay:300ms]">
              {t(HERO_CONTENT, 'headline')}
            </h1>
          </div>

          {/* Call to Actions button group */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-4 animate-fade-in-up [animation-delay:450ms]">
            
            {/* Primary Action Button */}
            <a 
              href="#growth-diagnostic"
              className="inline-flex items-center justify-center gap-2.5 bg-brand-navy hover:bg-brand-navy-light text-brand-cream-light font-sans text-sm sm:text-[15px] font-medium tracking-tight px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <span>{t(HERO_CONTENT, 'ctaPrimary')}</span>
              <ArrowRight className="w-4 h-4 text-brand-gold shrink-0" />
            </a>

            {/* LinkedIn Connection */}
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-brand-navy/80 hover:text-brand-navy font-sans text-sm sm:text-[15px] font-medium tracking-tight py-4 px-6 border-b border-brand-navy/20 hover:border-brand-gold transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5] shrink-0" />
              <span>{t(HERO_CONTENT, 'ctaSecondary')}</span>
            </a>
          </div>

          {/* Scroll bottom helper indicator label */}
          <div className="pt-16 flex items-center gap-2.5 text-[10px] font-sans font-bold tracking-wider text-brand-navy/35 uppercase">
            <span>{language === 'pl' ? 'PRZEJDŹ DO DIAGNOZY' : 'DIAGNOSE REVENUE CONSTRAINTS'}</span>
            <ChevronDown className="w-4 h-4" />
          </div>

        </div>
      </section>


      {/* 2. PROBLEMS SECTION */}
      <section id="problems-section" className="py-20 md:py-28 bg-brand-cream-light/60 border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
          
          {/* Section title and visual descriptor */}
          <div className="border-b border-brand-navy/10 pb-8">
            <div className="max-w-2xl space-y-4">
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
                  {language === 'pl' ? 'Zdiagnozuj wąskie gardła' : 'Operational Audit'}
                </span>
                <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy leading-tight">
                  {language === 'pl' ? 'Co może ograniczać wzrost Twojej firmy?' : 'What might be limiting your business growth?'}
                </h2>
              </div>
              <p className="text-sm font-sans font-medium text-brand-navy/55 max-w-xl leading-relaxed">
                {language === 'pl' 
                  ? 'Czego potrzebuje marketing Twojej firmy? Którym obszarom warto się przyjrzeć i co w nich diagnozować, zmieniać i mierzyć?'
                  : 'Recognizing friction points determines future survival. The issues below represent the most recurring profitability blocks.'}
              </p>
            </div>
          </div>

          {/* Grid of 8 gorgeous cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemCards.map((card) => (
              <div 
                key={card.id}
                className="group p-6 bg-white border border-brand-navy/5 rounded-xl hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 relative flex flex-col justify-between min-h-[280px]"
              >
                {/* Visual card content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-brand-gold/70">{card.number}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/20 group-hover:bg-brand-gold transition-colors" />
                  </div>

                  <h3 className="font-editorial text-xl font-normal text-brand-navy group-hover:text-brand-gold transition-colors leading-snug">
                    {t(card, 'title')}
                  </h3>

                  <p className="text-xs font-sans font-light text-brand-navy/60 leading-relaxed">
                    {t(card, 'description')}
                  </p>
                </div>

                {/* Micro-diagnostic criteria box inside card */}
                <div className="border-t border-brand-navy/5 pt-4 mt-6">
                  <span className="text-[9px] font-sans font-bold text-brand-navy/40 block mb-1 uppercase tracking-wider">
                    {language === 'pl' ? 'PARAMETR DIAGNOSTYCZNY' : 'METRIC AUDIT FOCUS'}
                  </span>
                  <p className="text-[10.5px] font-sans font-normal text-brand-navy/80 italic leading-snug">
                    "{card.diagnosticMetric}"
                  </p>
                </div>
              </div>
            ))}
          </div>



        </div>
      </section>


      {/* 4. HOW I WORK SECTION */}
      <section id="timeline-section" className="py-20 md:py-28 bg-brand-cream border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
          
          {/* Section banner */}
          <div className="border-b border-brand-navy/10 pb-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
              {language === 'pl' ? 'Metodyka i wdrożenie' : 'Operational Architecture'}
            </span>
            <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy">
              {language === 'pl' ? 'Od diagnozy do wzrostu' : 'From diagnosis to growth'}
            </h2>
            <p className="text-sm font-sans font-light text-brand-navy/60 max-w-xl mt-1">
              {language === 'pl' 
                ? 'Przechodzimy przez rygorystyczny 5-etapowy proces, eliminując szum i skupiając siły operacyjne wyłącznie na dźwigniach marży.'
                : 'We proceed via a highly structured 5-stage advisory blueprint, eliminating coordination fluff and optimizing your core levers.'}
            </p>
          </div>

          {/* Interactive timeline layout flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Timeline sidebar control (Left Column) */}
            <div className="lg:col-span-4 space-y-4">
              {workSteps.map((step) => (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                    activeStep === step.step 
                      ? 'bg-white border-brand-gold shadow-sm' 
                      : 'bg-transparent border-brand-navy/5 hover:border-brand-navy/15'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full font-sans font-medium text-xs flex items-center justify-center transition-all ${
                    activeStep === step.step 
                      ? 'bg-brand-navy text-white' 
                      : 'bg-brand-navy/5 text-brand-navy/60'
                  }`}>
                    {step.step}
                  </span>
                  <div>
                    <h4 className={`text-sm font-serif font-semibold tracking-tight ${
                      activeStep === step.step ? 'text-brand-navy' : 'text-brand-navy/60'
                    }`}>
                      {t(step, 'title')}
                    </h4>
                    <p className="text-[11px] font-sans font-medium text-brand-navy/40 uppercase">
                      {language === 'pl' ? `Krok 0${step.step}` : `Phase 0${step.step}`}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Timeline content details (Right Column) */}
            <div className="lg:col-span-8 bg-white border border-brand-navy/5 p-8 md:p-10 rounded-2xl shadow-sm flex flex-col justify-between">
              
              {/* Fade animation on state change helper */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {/* Step Metadata banner */}
                  <div className="flex justify-between items-center text-xs font-sans font-medium tracking-tight">
                    <span className="text-brand-gold font-semibold uppercase">
                      {language === 'pl' ? `Etap 0${activeStep} z 5` : `Stage 0${activeStep} of 5`}
                    </span>
                    <span className="bg-brand-navy/5 text-brand-navy/60 px-2.5 py-0.5 rounded">
                      {language === 'pl' ? 'Audyt rygorystyczny' : 'Quality Assured'}
                    </span>
                  </div>

                  {/* Step Title & Strategic focal */}
                  <div className="space-y-2">
                    <h3 className="font-editorial text-3xl font-light text-brand-navy">
                      {t(workSteps[activeStep-1], 'title')}
                    </h3>
                    <p className="text-sm font-sans font-medium text-brand-gold-dark italic">
                      {t(workSteps[activeStep-1], 'focus')}
                    </p>
                  </div>

                  {/* Bullet specifics items list */}
                  <div className="space-y-3 pt-4 border-t border-brand-navy/5">
                    <span className="text-[10px] font-sans font-bold tracking-wide text-brand-navy/40 uppercase block mb-2">
                      {language === 'pl' ? 'KRITYCZNE ELEMENTY EFEKTU' : 'CRITICAL DELIVERABLE FOCUS'}
                    </span>
                    
                    {t(workSteps[activeStep-1], 'details').map((item: string, idx: number) => (
                      <div key={idx} className="flex gap-3 text-sm font-sans font-light text-brand-navy/70">
                        <Check className="w-4.5 h-4.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Step Navigation micro helpers */}
              <div className="border-t border-brand-navy/5 pt-6 mt-8 flex justify-between items-center text-xs font-sans font-medium">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                  className="text-brand-navy/50 hover:text-brand-navy disabled:opacity-30 cursor-pointer transition-colors"
                >
                  &larr; {language === 'pl' ? 'Wstecz' : 'Back'}
                </button>
                <div className="flex gap-1.5">
                  {workSteps.map(s => (
                    <span 
                      key={s.step} 
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        activeStep === s.step ? 'bg-brand-gold' : 'bg-brand-navy/10'
                      }`} 
                    />
                  ))}
                </div>
                <button
                  disabled={activeStep === 5}
                  onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
                  className="text-brand-gold hover:text-brand-navy disabled:opacity-30 cursor-pointer transition-colors"
                >
                  {language === 'pl' ? 'Dalej' : 'Next'} &rarr;
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 5. CLIENT FIT SECTION */}
      <section id="fit-section" className="py-20 md:py-28 bg-brand-cream-light border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
          
          {/* Split Section Title */}
          <div className="max-w-xl">
            <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
              {language === 'pl' ? 'Weryfikacja dopasowania' : 'Qualitative Alignment'}
            </span>
            <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy leading-tight">
              {language === 'pl' ? 'Dla kogo ta współpraca przyniesie wartość?' : 'Who receives the highest yield from this process?'}
            </h2>
            <p className="text-xs font-sans font-semibold text-brand-navy/40 uppercase mt-2">
              {language === 'pl' ? 'Selektywny proces doradczy' : 'Selective engagement methodology'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* LEFT COLUMN: IDEAL CLIENTS */}
            <div className="bg-white border border-brand-navy/5 p-8 md:p-10 rounded-2xl shadow-sm space-y-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-brand-navy/10 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <h3 className="font-editorial text-2xl font-normal text-brand-navy">
                    {language === 'pl' ? CLIENT_FIT_CONTENT.idealTitlePl : CLIENT_FIT_CONTENT.idealTitleEn}
                  </h3>
                </div>

                <div className="space-y-6">
                  {CLIENT_FIT_CONTENT.idealClients.map((item) => (
                    <div key={item.id} className="group space-y-2">
                      <div className="flex gap-3 text-sm md:text-base font-sans font-medium text-brand-navy">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{language === 'pl' ? item.textPl : item.textEn}</span>
                      </div>
                      <p className="text-xs font-sans font-light text-brand-navy/60 pl-8 leading-relaxed">
                        {language === 'pl' ? item.strategicExplanationPl : item.strategicExplanationEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA link helper inside card */}
              <div className="pt-4 border-t border-brand-navy/5 flex justify-end text-xs font-sans font-medium">
                <a href="#contact-section" className="text-brand-gold hover:text-brand-navy transition-colors flex items-center gap-1.5">
                  {language === 'pl' ? 'Aplikuj o konsultację' : 'Apply for Intake session'} &rarr;
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: NOT A FIT */}
            <div className="bg-brand-navy-dark p-8 md:p-10 rounded-2xl shadow-lg space-y-8 text-brand-cream-light flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-brand-cream/10 pb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                  <h3 className="font-editorial text-2xl font-light text-white">
                    {language === 'pl' ? CLIENT_FIT_CONTENT.notFitTitlePl : CLIENT_FIT_CONTENT.notFitTitleEn}
                  </h3>
                </div>

                <div className="space-y-6">
                  {CLIENT_FIT_CONTENT.notFit.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex gap-3 text-sm md:text-base font-sans font-medium text-brand-cream">
                        <X className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{language === 'pl' ? item.textPl : item.textEn}</span>
                      </div>
                      <p className="text-xs font-sans font-light text-brand-cream/55 pl-8 leading-relaxed">
                        {language === 'pl' ? item.strategicExplanationPl : item.strategicExplanationEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning statement bottom right */}
              <div className="pt-4 border-t border-brand-cream/10 text-[10px] font-sans font-semibold text-brand-cream/40 uppercase">
                {language === 'pl' 
                  ? '*Chronimy czas założycieli. Nie podejmujemy działań czysto operacyjnych bez audytu strategii.' 
                  : '*We guard our bandwidth. Tactical execution assets are not deployed without underlying systems strategy.'}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 6. SERVICES */}
      <section id="services-section" className="py-20 md:py-28 bg-brand-cream border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16">
          
          {/* Header block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-navy/10 pb-8">
            <div className="max-w-xl">
              <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
                {language === 'pl' ? 'Formuły współpracy' : 'Engagement Catalog'}
              </span>
              <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy leading-tight">
                {language === 'pl' ? 'Cztery tory wsparcia biznesowego' : 'Strategic Advisory Offerings'}
              </h2>
            </div>
            <p className="text-xs font-sans font-medium text-brand-navy/40 max-w-xs leading-normal">
              {language === 'pl' 
                ? 'Elastyczne ramy zaangażowania, od jednorazowych restrukturyzacji procesów operacyjnych po stałe partnerstwo doradcze.'
                : 'Highly structured consultative retainers designed for long-term growth equity or custom system overrides.'}
            </p>
          </div>

          {/* Grid of 4 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((srv) => (
              <div 
                key={srv.id}
                className="group p-8 bg-white border border-brand-navy/5 rounded-2xl hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between min-h-[420px]"
              >
                {/* Visual content */}
                <div className="space-y-6">
                  {/* Category and branding icons */}
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-sans text-brand-gold uppercase tracking-wider font-semibold border-b border-brand-gold/20 pb-1">
                      {srv.id === 'mentoring' && '01 / ' + (language === 'pl' ? 'MENTORING' : 'FOUNDER BOARD')}
                      {srv.id === 'fractional-cmo' && '02 / ' + (language === 'pl' ? 'WPŁYW RYNKOWY' : 'MARKET DRIVE')}
                      {srv.id === 'transformation' && '03 / ' + (language === 'pl' ? 'SYSTEMY' : 'CORE TRANSFORMATION')}
                      {srv.id === 'projects' && '04 / ' + (language === 'pl' ? 'WDROŻENIA' : 'PRECISION PROJECTS')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy/50 group-hover:bg-brand-gold/10 group-hover:text-brand-gold transition-colors">
                      {srv.id === 'mentoring' && <Users className="w-4 h-4" />}
                      {srv.id === 'fractional-cmo' && <TrendingUp className="w-4 h-4" />}
                      {srv.id === 'transformation' && <Layers className="w-4 h-4" />}
                      {srv.id === 'projects' && <Compass className="w-4 h-4" />}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-editorial text-2.5xl font-normal text-brand-navy group-hover:text-brand-gold transition-colors">
                      {language === 'pl' ? srv.titlePl : srv.titleEn}
                    </h3>
                    <p className="text-xs font-sans font-medium text-brand-navy/50 italic">
                      {language === 'pl' ? srv.taglinePl : srv.taglineEn}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-sans font-light text-brand-navy/70 leading-relaxed">
                    {language === 'pl' ? srv.descriptionPl : srv.descriptionEn}
                  </p>
                </div>

                {/* Scope deliverables checklist */}
                <div className="border-t border-brand-navy/5 pt-6 mt-8 space-y-4">
                  <span className="text-[10px] font-sans font-bold tracking-wide text-brand-navy/40 uppercase block">
                    {language === 'pl' ? 'ZAKRES METODOLOGICZNY' : 'TYPICAL ROADMAP DELIVERABLES'}
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t(srv, 'scope').map((scopeItem: string, idx: number) => (
                      <div key={idx} className="flex gap-2 text-[11px] font-sans font-light text-brand-navy/80">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{scopeItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing indicative footer */}
                  <div className="flex justify-between items-center text-[10px] font-sans font-semibold pt-4 border-t border-brand-navy/[0.03] text-brand-navy/40">
                    <span>{language === 'pl' ? 'WYCENA ODRĘBNA' : 'ARRANGEMENT MODEL'}</span>
                    <span className="text-brand-navy font-semibold uppercase">{language === 'pl' ? 'Wycena indywidualna / Retainer' : 'Bespoke Retainer Pool'}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 7. ABOUT SECTION (Portrait placeholder integrated here) */}
      <section id="about-section" className="py-20 md:py-28 bg-brand-cream-light/60 border-b border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Portrait Container (Right place, Left Column on desktop) */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-brand-gold/15 shadow-2xl aspect-[4/5] bg-brand-cream">
                
                {/* Output the generated professional editorial image */}
                <img 
                  src="/src/assets/images/ewa_pysiewicz_portrait_1780165374149.png" 
                  alt="Ewa Pysiewicz" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700" 
                />

                {/* Overlay card for credentials info */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy-dark/90 backdrop-blur-md p-4 rounded-xl border border-brand-gold/20 text-brand-cream-light">
                  <span className="text-[9px] font-sans font-semibold text-brand-gold uppercase block tracking-wider mb-1">
                    {language === 'pl' ? 'GWARANCJA DOŚWIADCZENIA' : 'VERIFIED COMPETENCE'}
                  </span>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-sans text-[16px] font-semibold leading-none">Ewa Pysiewicz</h4>
                    </div>
                    <span className="text-xs font-sans text-brand-gold font-bold">NDA Secured</span>
                  </div>
                </div>

              </div>

              {/* Gold frame decorative reflections behind image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-gold/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-gold/40 rounded-br-xl pointer-events-none" />
            </div>

            {/* About Copy Text (Right Column on desktop) */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-8 lg:pl-6">
              
              <div>
                <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
                  {language === 'pl' ? '' : 'Profile & Mandate'}
                </span>
                <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy leading-tight tracking-tight">
                  {language === 'pl' ? ABOUT_CONTENT.titlePl : ABOUT_CONTENT.titleEn}
                </h2>
                <h3 className="text-sm font-sans font-medium text-brand-gold-dark mt-2">
                  {language === 'pl' ? ABOUT_CONTENT.positionPl : ABOUT_CONTENT.positionEn}
                </h3>
              </div>

              {/* Bio Paragraphs */}
              <div className="font-sans font-light text-brand-navy/75 text-sm md:text-base space-y-4 max-w-2xl leading-relaxed">
                {(language === 'pl' ? ABOUT_CONTENT.paragraphsPl : ABOUT_CONTENT.paragraphsEn).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Numerical stats grid metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-brand-navy/10 pt-8 mt-6">
                {ABOUT_CONTENT.stats.map((stat, i) => (
                  <div key={i} className="text-center md:text-left bg-white p-4 rounded-xl border border-brand-navy/5 shadow-inner">
                    <span className="font-editorial text-3xl font-light text-brand-navy block text-brand-gold-dark">
                      {stat.value}
                    </span>
                    <span className="text-[10px] font-sans font-bold text-brand-navy/50 block mt-1 leading-snug uppercase">
                      {language === 'pl' ? stat.labelPl : stat.labelEn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call to action inside block */}
              <div className="pt-4">
                <a 
                  href="#contact-section"
                  className="inline-flex items-center gap-2 text-sm font-sans text-brand-navy font-bold hover:text-brand-gold transition-colors"
                >
                  <span>{language === 'pl' ? 'Let\'s talk about what is currently limiting your company\'s growth.' : 'Explore what limits your growth during a call'}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>








      {/* 10. CONTACT SECTION */}
      <section id="contact-section" className="py-20 md:py-28 bg-brand-cream-light relative overflow-hidden">
        
        {/* Subtle background nodes graphic emphasizing relationship theory */}
        <div className="absolute left-[5%] bottom-[10%] opacity-15 pointer-events-none">
          <Network className="w-48 h-48 text-brand-gold" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-16 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-stretch">
            
            {/* Direct Coordinates card & values (Left Column) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-sans font-semibold uppercase tracking-wide text-brand-gold block mb-2">
                    {language === 'pl' ? 'Nawiąż kontakt' : 'Enquire directly'}
                  </span>
                  <h2 className="font-editorial text-2.5xl md:text-3.5xl font-light text-brand-navy leading-none tracking-tight">
                    {language === 'pl' ? 'Zróbmy pierwszy krok' : 'Let\'s talk about growth limits'}
                  </h2>
                  <p className="text-sm font-sans font-light text-brand-navy/60 mt-4 leading-relaxed">
                    {language === 'pl'
                      ? 'Omówmy, które zależności w modelu biznesowym Twojej firmy blokują przewidywalny zysk.'
                      : 'Together, let\'s isolate and examine the hidden variables diluting your actual net cash retention.'}
                  </p>
                </div>

                {/* Direct Detail Coordinates cards */}
                <div className="space-y-4 pt-4">
                  
                  {/* Company Name Block */}
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-brand-navy/5 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold text-brand-navy/40 uppercase block">
                        {language === 'pl' ? 'Prywatna kancelaria' : 'Direct advisory'}
                      </span>
                      <p className="text-sm font-sans font-semibold text-brand-navy">
                        Ewa Pysiewicz
                      </p>
                      <p className="text-xs font-sans font-medium text-brand-navy/50">
                        {language === 'pl' ? 'Prywatny Doradca Biznesowy' : 'Private Strategic Advisor'}
                      </p>
                    </div>
                  </div>

                  {/* Corporate Phone numbers */}
                  <div 
                    onClick={() => copyToClipboard(CONTACT_INFO.phone, 'Phone number')}
                    className="flex gap-4 p-4 bg-white rounded-xl border border-brand-navy/5 hover:border-brand-gold/30 shadow-sm cursor-pointer transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold text-brand-navy/40 uppercase block">
                        {language === 'pl' ? 'Direct Telefon' : 'Direct corporate phone'}
                      </span>
                      <p className="text-sm font-sans font-medium text-brand-navy">
                        {CONTACT_INFO.phoneFormatted}
                      </p>
                      <p className="text-[10px] font-sans font-semibold text-brand-gold hover:text-brand-gold-dark">
                        {language === 'pl' ? 'Kliknij, aby skopiować' : 'Click to copy line'}
                      </p>
                    </div>
                  </div>

                  {/* Direct Corporate Emails */}
                  <div 
                    onClick={() => copyToClipboard(CONTACT_INFO.email, 'Email address')}
                    className="flex gap-4 p-4 bg-white rounded-xl border border-brand-navy/5 hover:border-brand-gold/30 shadow-sm cursor-pointer transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold text-brand-navy/40 uppercase block">
                        {language === 'pl' ? 'E-mail kontaktowy' : 'Secure email contact'}
                      </span>
                      <p className="text-sm font-sans font-medium text-brand-navy">
                        {CONTACT_INFO.email}
                      </p>
                      <p className="text-[10px] font-sans font-semibold text-brand-gold hover:text-brand-gold-dark">
                        {language === 'pl' ? 'Kliknij, aby skopiować' : 'Click to copy line'}
                      </p>
                    </div>
                  </div>

                  {/* Headquarters Warsaw Map block placeholder */}
                  <div className="flex gap-4 p-4 bg-white rounded-xl border border-brand-navy/5 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-gold shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-bold text-brand-navy/40 uppercase block">
                        {language === 'pl' ? 'Kwatera Główna' : 'Headquarters'}
                      </span>
                      <p className="text-sm font-sans font-medium text-brand-navy">
                        {CONTACT_INFO.city}
                      </p>
                      <p className="text-[10px] font-sans font-light text-brand-navy/40">
                        {language === 'pl' ? 'Sesje stacjonarne lub zdalne' : 'On-site briefing options'}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct social links block (LinkedIn) */}
              <div className="border-t border-brand-navy/10 pt-6 space-y-3">
                <span className="text-[10px] font-sans font-bold text-brand-navy/40 uppercase block">
                  {language === 'pl' ? 'Media społecznościowe / Autorytet' : 'Corporate authority channel'}
                </span>
                <a 
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-navy/80 hover:text-brand-navy font-sans font-semibold text-xs uppercase tracking-wider"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>{language === 'pl' ? 'Połącz się na LinkedIn &rarr;' : 'Connect on LinkedIn &rarr;'}</span>
                </a>
              </div>

            </div>

            {/* Premium Interactive form layout area (Right Column) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>


      {/* CORPORATE GENERAL FOOTER */}
      <footer className="bg-brand-navy-dark text-brand-cream-light py-12 border-t border-brand-cream/5 text-xs font-sans font-medium">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-brand-cream/50">
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <span className="font-sans text-brand-cream text-sm font-semibold">Ewa Pysiewicz</span>
            <span className="hidden md:inline">|</span>
            <span>{language === 'pl' ? 'Prywatny Doradca Biznesowy' : 'Private Strategic Advisor'}</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-gold transition-colors">{language === 'pl' ? 'Do góry' : 'Back to top'} &uarr;</a>
            <span>&copy; {new Date().getFullYear()} Ewa Pysiewicz. All rights reserved.</span>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
