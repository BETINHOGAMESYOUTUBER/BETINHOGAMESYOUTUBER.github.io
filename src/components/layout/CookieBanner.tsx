'use client';

import React, { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot() {
  return localStorage.getItem('betinho_games_cookie_consent');
}

function getServerSnapshot() {
  return 'accepted';
}

export default function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  const acceptCookies = () => {
    localStorage.setItem('betinho_games_cookie_consent', 'accepted');
    setDismissed(true);
  };

  if (consent === 'accepted' || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#151035] border-t border-white/20 text-xs text-white rounded-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[#C7C3D5] text-center md:text-left space-y-1">
          <p className="font-bold text-white uppercase tracking-wider text-xs font-outfit">Privacidade e Cookies</p>
          <p>
            Utilizamos cookies para otimizar sua navegação. Leia nossa{' '}
            <Link href="/politica-de-cookies" className="text-[#ED3B57] underline hover:text-white">
              Política de Cookies
            </Link>{' '}
            para saber mais.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={acceptCookies}
            className="px-4 py-2 rounded-none bg-[#ED3B57] text-white font-bold text-xs hover:bg-[#D82F49] transition-all cursor-pointer uppercase tracking-wider font-outfit border border-[#ED3B57]"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
