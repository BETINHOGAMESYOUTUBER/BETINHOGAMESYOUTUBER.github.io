import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { courseConfig } from '@/config/course';

export const metadata: Metadata = {
  title: 'Termos de Uso | Betinho Games',
  description: 'Termos e condições de uso dos serviços e conteúdos do Betinho Games.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B10]">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-wider text-[#38F28B] font-mono font-bold">
            Documento Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-outfit text-white">
            Termos de Uso
          </h1>
          <p className="text-sm text-[#AEB8C4]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-6 text-[#AEB8C4] text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar o site <strong>{siteConfig.brandName}</strong> e adquirir o produto <strong>{courseConfig.name}</strong>, você concorda em cumprir e respeitar os presentes Termos de Uso. Caso não concorde com qualquer disposição aqui estabelecida, recomendamos não prosseguir com o uso ou compra.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">2. Objeto e Produto</h2>
            <p>
              O site destina-se à apresentação do portfólio de edições digitais de <strong>{siteConfig.brandName}</strong> e à comercialização do treinamento online de criação de rostos 3D realistas voltado para o jogo PES 2021 (PC & PS4 Desbloqueado), pelo valor fixado de <strong>{courseConfig.formattedPrice}</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">3. Isenção de Garantia de Renda e Responsabilidade por Resultados</h2>
            <p>
              O curso ensina técnicas de edição e modding digital. <strong>NÃO HÁ QUALQUER PROMESSA OU GARANTIA DE GANHOS FINANCEIROS OU RETORNO MONETÁRIO GARANTIDO.</strong> O nível dos resultados alcançados pelo aluno depende exclusivamente do seu empenho, dedicação, prática técnica e realidade individual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">4. Direitos Autorais e Propriedade Intelectual</h2>
            <p>
              Todo o material do curso (vídeos, textos, métodos didáticos) é protegido por direitos de propriedade intelectual. É proibida a cópia, pirataria, redistribuição, venda não autorizada ou compartilhamento de acesso com terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">5. Isenção de Vínculo com Marcas Registradas</h2>
            <p>
              PES, eFootball e demais marcas eventualmente mencionadas pertencem aos seus respectivos titulares. Este projeto é independente e não representa vínculo, patrocínio ou afiliação oficial com a Konami ou proprietárias das marcas, salvo indicação expressa.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
