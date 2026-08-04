import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Betinho Games',
  description: 'Política de privacidade e proteção de dados pessoais do site e curso do Betinho Games.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B10]">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="space-y-3 border-b border-white/10 pb-6">
          <span className="text-xs uppercase tracking-wider text-[#38F28B] font-mono font-bold">
            Documento Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-outfit text-white">
            Política de Privacidade
          </h1>
          <p className="text-sm text-[#AEB8C4]">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-6 text-[#AEB8C4] text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-[#F5C451]/10 border border-[#F5C451]/30 text-xs text-[#F5C451] space-y-1">
            <strong>⚠️ NOTA DE CONFIGURAÇÃO PENDENTE:</strong>
            <p>
              Os dados jurídicos abaixo contêm identificadores provisórios que serão substituídos pelo produtor antes da publicação final:
            </p>
            <ul className="list-disc pl-5 pt-1 space-y-0.5">
              <li>Razão Social / Nome Oficial: {siteConfig.legal.legalName}</li>
              <li>Documento (CPF/CNPJ): {siteConfig.legal.document}</li>
              <li>E-mail de Suporte: {siteConfig.legal.contactEmail}</li>
            </ul>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">1. Informações Gerais</h2>
            <p>
              A presente Política de Privacidade contém informações sobre a coleta, uso, armazenamento, tratamento e proteção dos dados pessoais dos usuários e visitantes da plataforma <strong>{siteConfig.brandName}</strong>, com a finalidade de demonstrar transparência quanto ao assunto e esclarecer a todos os interessados sobre os tipos de dados que são coletados, os motivos da coleta e a forma como os usuários podem gerenciar ou excluir suas informações pessoais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">2. Coleta de Dados Pessoais</h2>
            <p>Os dados pessoais do usuário e visitante são coletados nas seguintes situações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Quando o usuário navega na plataforma ou clica em botões para o checkout de vendas externo da InfinitePay.</li>
              <li>Quando o usuário entra em contato diretamente por e-mail de suporte ({siteConfig.legal.contactEmail}) ou redes sociais.</li>
              <li>Através de cookies de navegação e ferramentas de telemetria estatística (Google Analytics, Meta Pixel), condicionados ao consentimento do usuário.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">3. Finalidade do Tratamento de Dados</h2>
            <p>Os dados pessoais coletados visam:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direcionar o usuário para o ambiente de pagamento seguro de terceiros para a conclusão da inscrição no Curso FaceMaker.</li>
              <li>Responder a dúvidas de suporte e atendimento técnico.</li>
              <li>Melhorar a experiência de navegação e a performance do site através de métricas anônimas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">4. Compartilhamento de Dados</h2>
            <p>
              Os dados de pagamento não são processados diretamente em nossos servidores. As transações financeiras ocorrem inteiramente dentro do ambiente criptografado da processadora de pagamento parceira (InfinitePay). Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais não autorizados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-outfit text-white">5. Direitos do Titular (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/18), o usuário possui o direito de confirmar a existência de tratamento de seus dados, solicitar acesso, correção, anonimização ou exclusão a qualquer momento, através de solicitação enviada para o e-mail: <strong className="text-white">{siteConfig.legal.dpoEmail}</strong>.
            </p>
          </section>
        </div>

      </main>
      <Footer />
    </div>
  );
}
