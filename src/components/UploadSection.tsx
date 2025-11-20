import { useState } from 'react';
import { Upload, FileText, Loader2, CheckCircle2, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import type { NormType } from '../App';

interface UploadSectionProps {
  onAnalyze: (file: File, norm: NormType) => void;
  isAnalyzing: boolean;
}

const NORMS_DATA = {
  ABNT: {
    name: 'ABNT',
    fullName: 'Associação Brasileira de Normas Técnicas',
    standards: 'NBR 14724, 6023, 10520...',
    icon: '🇧🇷',
  },
  APA: {
    name: 'APA',
    fullName: 'American Psychological Association',
    standards: '7th Edition',
    icon: '🇺🇸',
  },
  Vancouver: {
    name: 'Vancouver',
    fullName: 'International Committee of Medical Journal',
    standards: 'ICMJE Style',
    icon: '⚕️',
  },
};

export function UploadSection({ onAnalyze, isAnalyzing }: UploadSectionProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedNorm, setSelectedNorm] = useState<NormType>('ABNT');
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    if (selectedFile) {
      onAnalyze(selectedFile, selectedNorm);
    }
  };

  return (
    <div id="upload" className="max-w-5xl mx-auto">
      <Card className="bg-white/90 border-slate-200 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Norm Selection */}
          <div className="mb-10">
            <Label className="text-slate-800 mb-4 block text-lg">
              Selecione a norma de formatação
            </Label>
            <div className="grid md:grid-cols-3 gap-4">
              {(Object.keys(NORMS_DATA) as NormType[]).map((norm) => {
                const normData = NORMS_DATA[norm];
                return (
                  <button
                    key={norm}
                    onClick={() => setSelectedNorm(norm)}
                    className={`relative p-6 rounded-xl border-2 transition-all text-left group ${
                      selectedNorm === norm
                        ? 'border-[#004AF7] bg-[#E4F2FE] shadow-md'
                        : 'border-slate-200 bg-slate-50 hover:border-[#87B7FE] hover:bg-white'
                    }`}
                  >
                    {selectedNorm === norm && (
                      <div className="absolute top-3 right-3">
                        <CheckCircle2 className="size-5 text-[#004AF7]" />
                      </div>
                    )}
                    <div className="text-2xl mb-3">{normData.icon}</div>
                    <div className="text-lg text-slate-900 mb-1">{normData.name}</div>
                    <div className="text-slate-600 text-sm mb-2">{normData.fullName}</div>
                    <div className="text-slate-500 text-xs">{normData.standards}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* File Upload */}
          <div>
            <Label className="text-slate-800 mb-4 block text-lg">
              Faça upload do seu TCC
            </Label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                isDragging
                  ? 'border-[#004AF7] bg-[#E4F2FE]'
                  : 'border-slate-300 bg-slate-50 hover:border-[#87B7FE] hover:bg-white'
              }`}
            >
              {selectedFile ? (
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-[#004AF7]/20 rounded-full blur-xl"></div>
                    <div className="relative bg-gradient-to-br from-[#004AF7] to-[#132190] p-4 rounded-full shadow-lg">
                      <FileText className="size-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-900 mb-1">{selectedFile.name}</p>
                    <p className="text-slate-600">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedFile(null)}
                    className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  >
                    Remover arquivo
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative inline-block">
                    <div className="relative bg-slate-100 p-4 rounded-full border-2 border-slate-200">
                      <Upload className="size-8 text-slate-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-800 mb-2 text-lg">
                      Arraste seu arquivo aqui ou clique para selecionar
                    </p>
                    <p className="text-slate-600">
                      Suporta apenas arquivos PDF (máx. 50MB)
                    </p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById('file-upload')?.click()}
                    className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                  >
                    Selecionar arquivo PDF
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Analyze Button - Cores Unifor */}
          <div className="mt-8">
            <Button
              onClick={handleAnalyze}
              disabled={!selectedFile || isAnalyzing}
              className="w-full h-14 bg-gradient-to-r from-[#004AF7] to-[#132190] hover:from-[#004AF7]/90 hover:to-[#132190]/90 text-white border-0 text-lg shadow-lg group relative overflow-hidden"
            >
              {!isAnalyzing && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              )}
              {isAnalyzing ? (
                <>
                  <Loader2 className="size-5 mr-2 animate-spin" />
                  Analisando seu TCC com IA...
                </>
              ) : (
                <>
                  <Zap className="size-5 mr-2" />
                  Analisar TCC agora
                </>
              )}
            </Button>
            {selectedFile && !isAnalyzing && (
              <p className="text-center text-slate-500 mt-3 text-sm">
                ✨ Análise completa em menos de 30 segundos
              </p>
            )}
          </div>
        </div>

        {/* Features Bar */}
        <div className="border-t border-slate-200 bg-slate-50/50 px-8 py-4">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="text-slate-600">
              <span className="text-green-600">✓</span> Análise de formatação
            </div>
            <div className="text-slate-600">
              <span className="text-green-600">✓</span> Verificação de citações
            </div>
            <div className="text-slate-600">
              <span className="text-green-600">✓</span> Validação de referências
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}