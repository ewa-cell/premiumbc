/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Shield, Briefcase, Network, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    revenue: '',
    bottleneck: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate high-end backend intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      revenue: '',
      bottleneck: '',
      message: ''
    });
    setIsSubmitted(false);
  };

  const revenueTiers = [
    { pl: 'Do 50 tys. PLN / mies.', en: 'Under 50k PLN / month' },
    { pl: '50 - 200 tys. PLN / mies.', en: '50k - 200k PLN / month' },
    { pl: '200 tys. - 1 mln PLN / mies.', en: '200k - 1M PLN / month' },
    { pl: 'Powyżej 1 mln PLN / mies.', en: 'Over 1M PLN / month' }
  ];

  const bottlenecks = [
    { pl: 'Założyciel jest wąskim gardłem', en: 'Founder is the bottleneck' },
    { pl: 'Problemy z rentownością / marżą', en: 'Profitability / margin issues' },
    { pl: 'Marketing nie przynosi zysków', en: 'Marketing fails to yield profit' },
    { pl: 'Chaos w procesach operacyjnych', en: 'Operational process chaos' }
  ];

  return (
    <div className="bg-brand-navy p-8 md:p-12 rounded-2xl border border-brand-gold/10 shadow-xl text-brand-cream-light relative overflow-hidden" id="contact-form-component">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          /* Strategic Form Card */
          <motion.div
            key="contact-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-sans font-medium tracking-wider text-brand-gold uppercase block mb-2">
                {language === 'pl' ? 'OPISZ POTRZEBY TWOJEJ FIRMY' : 'Selective Advisor Intake'}
              </span>
              <h3 className="font-editorial text-3xl font-light text-white leading-tight">
                {language === 'pl' ? 'Jakiej zmiany potrzebuje Twój marketing' : 'Initiate Brief Diagnosis'}
              </h3>
              <p className="text-xs font-sans font-light text-brand-cream/60 mt-1 max-w-xl">
                {language === 'pl'
                  ? 'Wypełnij poniższe pola, aby jak najefektywniej zaplanować spotkanie'
                  : 'Ewa personally reviews prospective engagements. Please specify your organizational metrics below to qualify our strategy call.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Full name input */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'Imię i nazwisko' : 'Your name'} <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                    placeholder={language === 'pl' ? 'np. Jan Kowalski' : 'e.g. John Doe'}
                  />
                </div>

                {/* Company name input */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'Nazwa firmy' : 'Company name'} <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                    placeholder={language === 'pl' ? 'np. Kowalski & Partners' : 'e.g. Growth Corp'}
                  />
                </div>

                {/* Corporate email input */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'E-mail służbowy' : 'Corporate Email'} <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                    placeholder="name@company.pl"
                  />
                </div>

                {/* Phone contact input */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'Telefon kontaktowy' : 'Direct Phone'} <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                    placeholder="+48 000 000 000"
                  />
                </div>

                {/* Revenue Tier Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'Aktualna skala obrotów' : 'Current Monthly Revenue'} <span className="text-brand-gold">*</span>
                  </label>
                  <select
                    required
                    value={formData.revenue}
                    onChange={e => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                  >
                    <option value="" disabled className="text-brand-cream/40">
                      {language === 'pl' ? '-- Wybierz próg przychodowy --' : '-- Select Revenue Tier --'}
                    </option>
                    {revenueTiers.map((tier, i) => (
                      <option key={i} value={tier.en}>
                        {language === 'pl' ? tier.pl : tier.en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Bottleneck Selector dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                    {language === 'pl' ? 'Główna barriera wzrostu' : 'Biggest Growth Constraint'} <span className="text-brand-gold">*</span>
                  </label>
                  <select
                    required
                    value={formData.bottleneck}
                    onChange={e => setFormData({ ...formData, bottleneck: e.target.value })}
                    className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors"
                  >
                    <option value="" disabled className="text-brand-cream/40">
                      {language === 'pl' ? '-- Zaznacz obszar oporu --' : '-- Select Constraint Area --'}
                    </option>
                    {bottlenecks.map((bn, i) => (
                      <option key={i} value={bn.en}>
                        {language === 'pl' ? bn.pl : bn.en}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message box */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-semibold tracking-tight uppercase text-brand-cream/70 block">
                  {language === 'pl' ? 'Co obecnie najbardziej hamuje rozwój firmy?' : 'What is currently limiting growth?'}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-navy-dark text-white border border-brand-cream/15 p-3 rounded-lg text-sm focus:border-brand-gold focus:outline-none transition-colors resize-none"
                  placeholder={language === 'pl' 
                    ? 'Opisz krótko swój model biznesowy, wyzwania związane z rentownością lub poziom uzależnienia zespołu od Twojego czasu.'
                    : 'Describe your business model briefly, margin concerns, or team dependency constraints.'}
                />
              </div>

            {/* Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-1.5 text-xs text-brand-cream/40 font-sans font-medium">
                <Shield className="w-4 h-4 text-brand-gold" />
                <span>
                  {language === 'pl' ? 'Zgłoszenie jest chronione klauzulą poufności NDA.' : 'Information is guarded under rigorous non-disclosure.'}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-navy-dark text-sm font-sans font-medium tracking-tight px-8 py-3.5 rounded-lg select-none cursor-pointer border border-transparent disabled:opacity-50 transition-colors shrink-0"
              >
                {isSubmitting ? (
                  language === 'pl' ? 'Wysyłanie zgłoszenia...' : 'Submitting Intake...'
                ) : (
                  <>
                    {language === 'pl' ? 'Prześlij kartę zgłoszeniową' : 'Submit Intake Brief'}
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
            </form>
          </motion.div>
        ) : (
          /* Intake Success Overlay state */
          <motion.div
            key="contact-success"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-lg">
              <h4 className="font-editorial text-3xl text-white font-light tracking-tight">
                {language === 'pl' ? 'Zgłoszenie zostało zarejestrowane' : 'Inquiry Filed Safely'}
              </h4>
              <p className="text-sm font-sans font-light text-brand-cream/70 leading-relaxed">
                {language === 'pl' 
                  ? `Dziękujemy, ${formData.name}. Karta intencyjna Twojej spółki (${formData.company}) została zabezpieczona i przekazana do osobistej analizy Ewy Pysiewicz.` 
                  : `Intake secured, ${formData.name}. The diagnostic roadmap for ${formData.company} has been forwarded directly to Ewa Pysiewicz's private desk.`}
              </p>
              <p className="text-xs text-brand-gold-light font-sans font-medium italic">
                {language === 'pl' 
                  ? 'Odpowiedź oraz propozycja terminu sesji diagnozy nadejdą w ciągu 24 godzin roboczych.' 
                  : 'Personal response and scheduled selection options will be delivered within 24 business hours.'}
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 border border-brand-cream/15 hover:border-brand-gold text-brand-cream-light text-xs sm:text-sm font-sans font-medium tracking-tight px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                {language === 'pl' ? 'Wyślij nowe zgłoszenie' : 'Submit Another Case'}
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
