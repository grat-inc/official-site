import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Instagram, ChevronDown, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clients = [
    { name: 'Google Pixel', category: 'Branding / Creative Direction (Current)' },
    { name: 'IKEA', category: 'Global Strategy' },
    { name: 'UNIQLO', category: 'Creative' },
    { name: 'P&G', category: 'Consumer Insight' },
    { name: 'McDonald\'s', category: 'Advertising' },
    { name: 'PUMA', category: 'Production' },
    { name: 'AIG', category: 'Branding' },
  ];

  const services = [
    {
      id: 'ume',
      title: 'Brand Audit & Insights',
      tier: '01 / Audit',
      description: '客観的な視点でブランドの「現在地」を可視化。微細な違和感を言語化し、次の一手を導き出します。',
      price: '¥200,000 (+tax)'
    },
    {
      id: 'take',
      title: 'Brand Launch & Rebranding',
      tier: '02 / Project',
      description: '経営者の想いを、売れる「旗印」へ。コンセプト開発から、ロゴ、ビジュアル、映像制作までトータルプロデュース。',
      price: '¥3,000,000 —'
    },
    {
      id: 'matsu',
      title: 'Creative Partner',
      tier: '03 / Retainer',
      description: 'ブランドの「品格」を守る守護神。戦略会議への参画と、全てのクリエイティブに対する継続的な監修。',
      price: '¥300,000 — / month'
    }
  ];

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white antialiased">
      <nav className={`fixed w-full z-50 transition-all duration-700 px-6 py-6 md:px-16 md:py-10 flex justify-between items-center ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-neutral-100 py-4 md:py-6' : 'bg-transparent'}`}>
        <div className="text-2xl font-bold tracking-tighter uppercase italic cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          grat inc.
        </div>
        <div className="hidden md:flex space-x-16 text-[10px] uppercase tracking-[0.3em] font-medium">
          <button onClick={() => scrollTo('work')} className="hover:opacity-40 transition-opacity">Work</button>
          <button onClick={() => scrollTo('about')} className="hover:opacity-40 transition-opacity">About</button>
          <button onClick={() => scrollTo('services')} className="hover:opacity-40 transition-opacity">Services</button>
          <button onClick={() => scrollTo('contact')} className="hover:opacity-40 transition-opacity">Contact</button>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12 justify-center items-center"
          >
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8"><X size={32} /></button>
            <div className="flex flex-col space-y-12 text-4xl font-light text-center">
              <button onClick={() => scrollTo('work')}>Work</button>
              <button onClick={() => scrollTo('about')}>About</button>
              <button onClick={() => scrollTo('services')}>Services</button>
              <button onClick={() => scrollTo('contact')}>Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="h-screen flex flex-col justify-center px-6 md:px-16 relative overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}>
          <h1 className="text-6xl md:text-[10vw] leading-[0.9] tracking-tighter font-semibold mb-12 text-balance">
            GLOBAL LOGIC,<br />
            <span className="italic font-light text-neutral-400">FEMALE SENSES.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-xl text-lg md:text-2xl font-light text-neutral-500 leading-relaxed">
              世界を動かす緻密なロジックに、心を動かす女性的感性を。<br />
              Parisa Mochizukiによる、経営者に寄り添うブランド・プロデュース。
            </p>
            <button onClick={() => scrollTo('work')} className="group flex items-center space-x-4 text-sm uppercase tracking-widest border-b border-black pb-2 self-start md:self-auto">
              <span>View Works</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>

      <section id="work" className="py-32 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 block mb-6">Selected Experiences</span>
            <h2 className="text-4xl font-light italic leading-tight">実績が語る、<br />ブランドの品格。</h2>
          </div>
          <div className="lg:col-span-8 space-y-0">
            {clients.map((client, i) => (
              <motion.div key={i} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="group border-b border-neutral-100 py-12 flex flex-col md:flex-row md:justify-between md:items-center hover:bg-neutral-50 px-4 -mx-4 transition-all cursor-default">
                <div>
                  <h3 className="text-4xl md:text-7xl font-medium tracking-tighter group-hover:italic transition-all duration-500">
                    {client.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-4">{client.category}</p>
                </div>
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pr-8">
                  <ArrowRight size={32} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-48 px-6 md:px-16 flex flex-col items-center text-center bg-[#111] text-white">
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ once: true }} className="max-w-5xl">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 mb-16">The Philosophy</h2>
          <p className="text-3xl md:text-5xl leading-[1.3] font-light mb-16">
            TBWA博報堂でグローバル・クライアントを歴任。<br />
            現在もGoogle Pixelのブランディングを中核で担いながら、<br />
            自社アパレルブランド<span className="italic font-normal">「PCKL」</span>を経営。<br />
            <span className="text-neutral-400 italic">"PLに責任を持つ感性"</span>が、<br className="hidden md:block" />
            あなたのビジネスを次のステージへ導きます。
          </p>
          <div className="w-20 h-[1px] bg-neutral-700 mx-auto mb-16" />
          <p className="text-xs uppercase tracking-[0.4em] leading-loose text-neutral-400">
            Parisa Mochizuki — Founder & Brand Producer
          </p>
        </motion.div>
      </section>

      <section id="services" className="py-40 px-6 md:px-16 bg-white">
        <div className="text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400">Partnership Tiers</span>
          <h2 className="text-5xl md:text-7xl font-light mt-6 italic tracking-tighter text-balance">How we collaborate</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-12 md:p-16 flex flex-col min-h-[500px]">
              <div className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-10">{service.tier}</div>
              <h3 className="text-3xl font-medium mb-10 tracking-tight">{service.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed mb-16 flex-grow text-lg">
                {service.description}
              </p>
              <div className="pt-10 border-t border-neutral-100">
                <span className="text-[10px] text-neutral-400 block mb-2 uppercase tracking-widest">Starting from</span>
                <span className="text-2xl font-light tracking-tighter">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-48 px-6 md:px-16 flex flex-col items-center justify-center min-h-screen bg-[#fafafa]">
        <motion.div whileInView={{ scale: [0.95, 1], opacity: [0, 1] }} className="text-center">
          <h2 className="text-6xl md:text-[12vw] font-bold tracking-tighter leading-none mb-20">
            CONNECTING<br />
            <span className="italic font-light text-neutral-400 underline underline-offset-[12px] decoration-1">ESSENCE.</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
            <a href="mailto:parisa.m@grat-inc.com" className="group flex items-center space-x-4 text-sm uppercase tracking-[0.3em] font-medium">
              <Mail size={20} strokeWidth={1} />
              <span className="group-hover:opacity-40 transition-opacity">parisa.m@grat-inc.com</span>
            </a>
            <div className="hidden md:block w-12 h-px bg-neutral-200" />
            <a href="https://instagram.com/grat_inc" target="_blank" className="group flex items-center space-x-4 text-sm uppercase tracking-[0.3em] font-medium">
              <Instagram size={20} strokeWidth={1} />
              <span className="group-hover:opacity-40 transition-opacity">@grat_inc</span>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="py-16 px-6 md:px-16 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-neutral-400">
        <div className="flex space-x-12">
          <span>Tokyo, Japan</span>
          <span>Global Operations</span>
        </div>
        <div className="font-bold italic text-black text-sm">grat inc.</div>
        <div>© 2026 all rights reserved.</div>
      </footer>
    </div>
  );
};

export default App;
