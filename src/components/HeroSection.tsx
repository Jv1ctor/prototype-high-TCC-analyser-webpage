import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onClickAnalyze: () => void;
}

export function HeroSection({ onClickAnalyze }: HeroSectionProps) {
  return (
    <div className="text-center py-20 relative">
      {/* Badge com cores Unifor */}
      <div className="inline-flex items-center gap-2 bg-[#E4F2FE] border border-[#87B7FE]/30 text-[#132190] px-4 py-2 rounded-full mb-8 backdrop-blur-sm shadow-sm">
        <Sparkles className="size-4" />
        <span>Powered by Advanced AI Technology</span>
      </div>
      
      {/* Título com gradiente Unifor */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-6 max-w-5xl mx-auto leading-tight px-4">
        Valide seu TCC em minutos com{' '}
        <span className="bg-gradient-to-r from-[#004AF7] to-[#132190] bg-clip-text text-transparent">
          Inteligência Artificial
        </span>
      </h1>
      
      <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed px-4">
        Nossa IA analisa automaticamente seu trabalho acadêmico e identifica problemas de 
        formatação, citações e referências conforme as normas ABNT, APA ou Vancouver.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        {/* Botão principal com cores Unifor */}
        <Button 
          size="lg" 
          onClick={onClickAnalyze}
          className="bg-gradient-to-r from-[#004AF7] to-[#132190] hover:from-[#004AF7]/90 hover:to-[#132190]/90 text-white border-0 px-8 shadow-lg group"
        >
          Analisar meu TCC
          <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-green-600" />
          <span>100% seguro e confidencial</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-green-600" />
          <span>Análise em segundos</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="size-5 text-green-600" />
          <span>Suporte a 3 normas</span>
        </div>
      </div>
    </div>
  );
}