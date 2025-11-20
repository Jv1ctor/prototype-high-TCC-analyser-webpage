import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { UploadSection } from './UploadSection';
import type { NormType } from '../App';

interface UploadPageProps {
  onAnalyze: (file: File, norm: NormType) => void;
  isAnalyzing: boolean;
  onBack: () => void;
}

export function UploadPage({ onAnalyze, isAnalyzing, onBack }: UploadPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header da página de upload */}
      <div className="border-b border-slate-200 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <ArrowLeft className="size-4 mr-2" />
              Voltar para início
            </Button>
            <h1 className="text-xl text-slate-900">Enviar TCC para Análise</h1>
            <div className="w-[140px]"></div> {/* Spacer para centralizar o título */}
          </div>
        </div>
      </div>

      {/* Conteúdo centralizado */}
      <div className="container mx-auto px-4 py-12 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-5xl">
          <UploadSection onAnalyze={onAnalyze} isAnalyzing={isAnalyzing} />
        </div>
      </div>
    </div>
  );
}
