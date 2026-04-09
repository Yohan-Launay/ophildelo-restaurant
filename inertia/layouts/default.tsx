import { Data } from '@generated/data'
import { ReactElement, useState } from 'react'
import { Icon } from "@iconify/react";

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  const [language, setLanguage] = useState('fr');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };
  
  return (
    <>

      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-6 transition-transform">
              <span className="font-bold text-lg tracking-tighter text-yellow">Ô</span>
            </div>
            <span className="text-xl font-semibold tracking-tight text-blue">
              Phil d'Elo - Restaurant Créole
            </span>
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors text-sm font-medium"
            >
              <Icon icon="solar:globe-linear" width="16" />
              <span>{language === 'fr' ? '🇫🇷 FR' : '🇬🇧 EN'}</span>
            </button>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  )
}
