import { useState } from "react"
import { Header } from './components/Header';
import { UploadPage } from './components/UploadPage';
import { LoginPage } from './components/LoginPage';
import { AnalysisResults } from './components/AnalysisResults';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { NormsSection } from './components/NormsSection';
import { AboutSection } from './components/AboutSection';
import { GraduationCap } from 'lucide-react';

export type NormType = 'ABNT' | 'APA' | 'Vancouver';

export interface AnalysisData {
  fileName: string;
  norm: NormType;
  timestamp: Date;
  issues: {
    formatting: Array<{ severity: 'high' | 'medium' | 'low'; description: string; page?: number; suggestion?: string }>;
    citations: Array<{ severity: 'high' | 'medium' | 'low'; description: string; page?: number; suggestion?: string }>;
    references: Array<{ severity: 'high' | 'medium' | 'low'; description: string; page?: number; suggestion?: string }>;
  };
  stats: {
    totalIssues: number;
    criticalIssues: number;
    warningIssues: number;
    suggestions: number;
  };
  score: number;
}

type Page = 'home' | 'login' | 'upload' | 'results';

export default function App() {
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFileAnalysis = (file: File, norm: NormType) => {
    setIsAnalyzing(true);

    // Simular análise da IA
    setTimeout(() => {
      // Gerar score aleatório para demonstração
      const randomScore = Math.floor(Math.random() * 40) + 60; // 60-100
      setAnalysisData(generateMockAnalysis(file, norm, randomScore));
      setIsAnalyzing(false);
      setCurrentPage('results');
    }, 3000);
  };

  const generateMockAnalysis = (file: File, norm: NormType, score: number): AnalysisData => {
    // Definir quantidade de erros baseado no score
    let formattingIssues, citationIssues, referenceIssues;
    
    if (score >= 85) {
      // Excelente - poucos erros
      formattingIssues = 2;
      citationIssues = 1;
      referenceIssues = 1;
    } else if (score >= 70) {
      // Bom - erros moderados
      formattingIssues = 3;
      citationIssues = 3;
      referenceIssues = 3;
    } else if (score >= 50) {
      // Médio - bastante erros
      formattingIssues = 5;
      citationIssues = 4;
      referenceIssues = 4;
    } else {
      // Ruim - muitos erros
      formattingIssues = 7;
      citationIssues = 6;
      referenceIssues = 6;
    }

    const allFormattingIssues = [
      { 
        severity: 'high' as const, 
        description: 'Margem esquerda não está conforme a norma', 
        page: 1,
        suggestion: 'Ajustar margem esquerda para 3cm conforme especificado na NBR 14724'
      },
      { 
        severity: 'high' as const, 
        description: 'Fonte utilizada não está conforme a norma', 
        page: 2,
        suggestion: 'Utilizar fonte Arial ou Times New Roman, tamanho 12'
      },
      { 
        severity: 'medium' as const, 
        description: 'Espaçamento entre linhas incorreto no resumo', 
        page: 3,
        suggestion: 'Alterar espaçamento do resumo para 1,5 linhas'
      },
      { 
        severity: 'medium' as const, 
        description: 'Recuo de parágrafo inconsistente', 
        page: 7,
        suggestion: 'Padronizar recuo de primeira linha em 1,25cm'
      },
      { 
        severity: 'medium' as const, 
        description: 'Margem inferior fora do padrão', 
        page: 10,
        suggestion: 'Ajustar margem inferior para 2cm'
      },
      { 
        severity: 'low' as const, 
        description: 'Fonte do título da seção não está em negrito', 
        page: 5,
        suggestion: 'Aplicar negrito nos títulos das seções principais'
      },
      { 
        severity: 'low' as const, 
        description: 'Numeração de páginas posicionada incorretamente', 
        page: 8,
        suggestion: 'Posicionar numeração no canto superior direito'
      },
    ];

    const allCitationIssues = [
      { 
        severity: 'high' as const, 
        description: 'Citação direta sem indicação de página', 
        page: 12,
        suggestion: 'Adicionar número da página após o ano: (AUTOR, 2020, p. 45)'
      },
      { 
        severity: 'high' as const, 
        description: 'Citação com mais de 3 linhas não está em recuo', 
        page: 15,
        suggestion: 'Aplicar recuo de 4cm da margem esquerda para citações longas'
      },
      { 
        severity: 'high' as const, 
        description: 'Autor citado não consta nas referências', 
        page: 20,
        suggestion: 'Incluir referência completa do autor na lista de referências'
      },
      { 
        severity: 'medium' as const, 
        description: 'Falta ano na citação de autor', 
        page: 18,
        suggestion: 'Incluir ano após o nome do autor: (SILVA, 2021)'
      },
      { 
        severity: 'medium' as const, 
        description: 'Uso de "apud" sem indicar fonte secundária', 
        page: 22,
        suggestion: 'Especificar fonte secundária: (AUTOR, 2020 apud OUTRO, 2022)'
      },
      { 
        severity: 'low' as const, 
        description: 'Citação indireta sem indicação clara', 
        page: 25,
        suggestion: 'Reescrever citação para deixar mais clara a paráfrase'
      },
    ];

    const allReferenceIssues = [
      { 
        severity: 'high' as const, 
        description: 'Referência não está em ordem alfabética', 
        page: 45,
        suggestion: 'Reorganizar referências em ordem alfabética pelo sobrenome do autor'
      },
      { 
        severity: 'high' as const, 
        description: 'Referência com formatação completamente incorreta', 
        page: 46,
        suggestion: 'Reformatar seguindo o padrão: AUTOR. Título. Cidade: Editora, Ano'
      },
      { 
        severity: 'high' as const, 
        description: 'Falta de informações essenciais na referência', 
        page: 47,
        suggestion: 'Incluir editora e local de publicação'
      },
      { 
        severity: 'medium' as const, 
        description: 'Falta local de publicação na referência', 
        page: 46,
        suggestion: 'Adicionar cidade e editora: São Paulo: Editora ABC, 2020'
      },
      { 
        severity: 'medium' as const, 
        description: 'Título da obra não está em itálico', 
        page: 48,
        suggestion: 'Aplicar itálico em todos os títulos de livros e periódicos'
      },
      { 
        severity: 'low' as const, 
        description: 'Referência de site sem data de acesso', 
        page: 47,
        suggestion: 'Incluir data de acesso ao final: Acesso em: 19 nov. 2025'
      },
    ];

    const formatting = allFormattingIssues.slice(0, formattingIssues);
    const citations = allCitationIssues.slice(0, citationIssues);
    const references = allReferenceIssues.slice(0, referenceIssues);

    const totalIssues = formatting.length + citations.length + references.length;
    const criticalIssues = [...formatting, ...citations, ...references].filter(i => i.severity === 'high').length;
    const warningIssues = [...formatting, ...citations, ...references].filter(i => i.severity === 'medium').length;
    const suggestions = [...formatting, ...citations, ...references].filter(i => i.severity === 'low').length;

    return {
      fileName: file.name,
      norm: norm,
      timestamp: new Date(),
      issues: {
        formatting,
        citations,
        references,
      },
      stats: {
        totalIssues,
        criticalIssues,
        warningIssues,
        suggestions,
      },
      score,
    };
  };

  const handleNewAnalysis = () => {
    setAnalysisData(null);

    if(isLoggedIn){
      setCurrentPage('login')
      return
    }

    setCurrentPage('upload');
    // Scroll para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRegenerateAnalysis = () => {
    if (analysisData) {
      setIsAnalyzing(true);
      setTimeout(() => {
        // Gerar nova análise com score diferente
        const randomScore = Math.floor(Math.random() * 50) + 50; // 50-100
        const mockFile = new File([], analysisData.fileName, { type: 'application/pdf' });
        setAnalysisData(generateMockAnalysis(mockFile, analysisData.norm, randomScore));
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  const handleChangeQuality = (quality: 'excellent' | 'good' | 'medium' | 'poor') => {
    if (analysisData) {
      let score: number;
      switch (quality) {
        case 'excellent':
          score = Math.floor(Math.random() * 15) + 85; // 85-100
          break;
        case 'good':
          score = Math.floor(Math.random() * 15) + 70; // 70-84
          break;
        case 'medium':
          score = Math.floor(Math.random() * 20) + 50; // 50-69
          break;
        case 'poor':
          score = Math.floor(Math.random() * 20) + 30; // 30-49
          break;
      }
      const mockFile = new File([], analysisData.fileName, { type: 'application/pdf' });
      setAnalysisData(generateMockAnalysis(mockFile, analysisData.norm, score));
    }
  };

  const goToUploadPage = () => {
    if(!isLoggedIn){
      setCurrentPage('login')
      return
    }
    setCurrentPage('upload');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHomePage = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLoginPage = () => {
    setCurrentPage('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('upload');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#E4F2FE] relative overflow-hidden">
      {/* Background Effects - Cores Unifor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#87B7FE]/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004AF7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#132190]/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">
        {currentPage === 'login' ? (
          <LoginPage 
            onLogin={handleLogin}
            onBack={goToHomePage}
          />
        ) : currentPage === 'upload' ? (
          <UploadPage 
            onAnalyze={handleFileAnalysis} 
            isAnalyzing={isAnalyzing}
            onBack={goToHomePage}
          />
        ) : currentPage === 'results' ? (
          <>
            <Header 
              onClickAnalyze={goToUploadPage}
              onClickLogin={goToLoginPage}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
            <div className="bg-gradient-to-b from-white to-slate-50 py-12">
              <div className="container mx-auto px-4">
                <AnalysisResults 
                  data={analysisData!} 
                  onNewAnalysis={handleNewAnalysis}
                  onRegenerateAnalysis={handleRegenerateAnalysis}
                  onChangeQuality={handleChangeQuality}
                  isRegenerating={isAnalyzing}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Header 
              onClickAnalyze={goToUploadPage}
              onClickLogin={goToLoginPage}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
            />
            <main>
              {/* Hero Section - Fundo claro */}
              <div className="bg-gradient-to-b from-white to-slate-50">
                <div className="container mx-auto px-4">
                  <HeroSection onClickAnalyze={goToUploadPage} />
                </div>
              </div>

              {/* Features Section - Fundo cinza claro */}
              <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                  <FeaturesSection />
                </div>
              </div>

              {/* Norms Section - Fundo azul claro Unifor */}
              <div className="bg-gradient-to-br from-[#E4F2FE] to-white py-20">
                <div className="container mx-auto px-4">
                  <NormsSection />
                </div>
              </div>

              {/* About Section - Fundo branco */}
              <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                  <AboutSection />
                </div>
              </div>

              {/* Stats Section - Fundo cinza claro */}
              <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4">
                  <StatsSection />
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}