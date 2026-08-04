import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/ui/CTAButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#080B10]">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4 text-center tech-grid-bg">
        <div className="max-w-md mx-auto space-y-6 card-gamer p-8 bg-[#10151D] border-white/10">
          <div className="w-20 h-20 rounded-2xl bg-[#38F28B]/10 border border-[#38F28B]/30 flex items-center justify-center text-3xl font-mono text-[#38F28B] mx-auto font-black">
            404
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black font-outfit text-white">
              Página Não Encontrada
            </h1>
            <p className="text-sm text-[#AEB8C4]">
              A rota que você tentou acessar não existe ou foi movida.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <CTAButton href="/curso-facemaker" variant="primary" size="md" fullWidth>
              Ir para o Curso FaceMaker
            </CTAButton>
            <Link
              href="/links"
              className="text-xs text-[#AEB8C4] hover:text-[#38F28B] underline py-1"
            >
              Ver Links da Bio (Instagram)
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
