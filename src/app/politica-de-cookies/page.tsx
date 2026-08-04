import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Política de Cookies | Betinho Games',
  description: 'Informações sobre a utilização de cookies e tecnologias de rastreamento no site do Betinho Games.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B10]">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-wider text-[#38F28B] font-mono font-bold">
            Documento Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-outfit text-white">
            Política de Cookies
          </h1>
          <p className="text-sm text-[#AEB8C4]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-6 text-[#AEB8C4] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu computador ou dispositivo móvel quando você visita o site <strong>{siteConfig.brandName}</strong>. Eles servem para fazer os sites funcionarem de forma mais eficiente, além de fornecer informações analíticas aos proprietários do site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">2. Como Utilizamos os Cookies</h2>
            <p>Utilizamos cookies para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies Estritamente Necessários:</strong> Garantem a navegação básica e a segurança da sessão.</li>
              <li><strong>Cookies de Desempenho e Analytics:</strong> Auxiliam a compreender o volume de acessos e a usabilidade das páginas (Google Analytics). Os dados são analisados de forma agregada e anônima.</li>
              <li><strong>Cookies de Marketing / Pixel:</strong> Permitem mensurar o retorno de campanhas de tráfego pago (Meta Pixel / Google Ads) quando os IDs oficiais são configurados.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">3. Gerenciamento de Preferências</h2>
            <p>
              Você pode alterar ou bloquear o uso de cookies a qualquer momento nas configurações do seu navegador de internet ou interagindo com o banner de preferências exibido no rodapé do nosso site.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
