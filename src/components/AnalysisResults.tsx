import { AlertCircle, CheckCircle2, AlertTriangle, Info, Download, ArrowLeft, TrendingUp, FileText, Target, RefreshCw } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import type { AnalysisData } from '../App';

interface AnalysisResultsProps {
  data: AnalysisData;
  onNewAnalysis: () => void;
  onRegenerateAnalysis: () => void;
  onChangeQuality: (quality: 'high' | 'medium' | 'low') => void;
  isRegenerating: boolean;
}

export function AnalysisResults({ data, onNewAnalysis, onRegenerateAnalysis, onChangeQuality, isRegenerating }: AnalysisResultsProps) {
  const getSeverityIcon = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return <AlertCircle className="size-5 text-red-600" />;
      case 'medium':
        return <AlertTriangle className="size-5 text-yellow-600" />;
      case 'low':
        return <Info className="size-5 text-[#004AF7]" />;
    }
  };

  const getSeverityLabel = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'Crítico';
      case 'medium':
        return 'Atenção';
      case 'low':
        return 'Sugestão';
    }
  };

  const getSeverityColor = (severity: 'high' | 'medium' | 'low') => {
    switch (severity) {
      case 'high':
        return 'bg-red-50 border-red-200';
      case 'medium':
        return 'bg-yellow-50 border-yellow-200';
      case 'low':
        return 'bg-[#E4F2FE] border-[#87B7FE]/30';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-600 to-emerald-600';
    if (score >= 60) return 'from-[#004AF7] to-[#132190]';
    return 'from-red-500 to-rose-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excelente';
    if (score >= 60) return 'Bom';
    return 'Precisa melhorar';
  };

  const renderIssuesList = (issues: Array<{ severity: 'high' | 'medium' | 'low'; description: string; page?: number; suggestion?: string }>) => {
    return (
      <div className="space-y-4">
        {issues.map((issue, index) => (
          <Card key={index} className={`bg-white border ${getSeverityColor(issue.severity)} backdrop-blur-sm p-5 shadow-sm`}>
            <div className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                {getSeverityIcon(issue.severity)}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <Badge 
                    variant="outline" 
                    className={`${issue.severity === 'high' ? 'border-red-500 text-red-700 bg-red-50' : issue.severity === 'medium' ? 'border-yellow-500 text-yellow-700 bg-yellow-50' : 'border-[#004AF7] text-[#004AF7] bg-[#E4F2FE]'}`}
                  >
                    {getSeverityLabel(issue.severity)}
                  </Badge>
                  {issue.page && (
                    <span className="text-slate-500 text-sm">Página {issue.page}</span>
                  )}
                </div>
                <p className="text-slate-700">{issue.description}</p>
                {issue.suggestion && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 mt-2">
                    <p className="text-slate-600 text-sm">
                      <span className="text-green-600">💡 Sugestão:</span> {issue.suggestion}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 py-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Button
          variant="ghost"
          onClick={onNewAnalysis}
          className="text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        >
          <ArrowLeft className="size-4 mr-2" />
          Nova análise
        </Button>
        
        <div className="flex items-center gap-3">
          {/* Botões de Teste - REMOVER DEPOIS */}
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg border border-slate-300">
            <span className="text-xs text-slate-600 px-2">Testar:</span>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onChangeQuality('excellent')}
              className="h-8 text-xs bg-green-100 hover:bg-green-200 text-green-700"
            >
              Excelente
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onChangeQuality('good')}
              className="h-8 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700"
            >
              Bom
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onChangeQuality('medium')}
              className="h-8 text-xs bg-yellow-100 hover:bg-yellow-200 text-yellow-700"
            >
              Médio
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => onChangeQuality('poor')}
              className="h-8 text-xs bg-red-100 hover:bg-red-200 text-red-700"
            >
              Ruim
            </Button>
          </div>

          {(data.score < 85) && (
            <Button
              variant="outline"
              onClick={onRegenerateAnalysis}
              disabled={isRegenerating}
              className="border-[#004AF7] text-[#004AF7] hover:bg-[#E4F2FE]"
            >
              {isRegenerating ? (
                <>
                  <RefreshCw className="size-4 mr-2 animate-spin" />
                  Gerando...
                </>
              ) : (
                <>
                  <RefreshCw className="size-4 mr-2" />
                  Nova análise
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Score Card - Cores Unifor */}
      <Card className="bg-white border-slate-200 backdrop-blur-xl shadow-xl overflow-hidden">
        <div className="relative p-8">
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${getScoreColor(data.score)} rounded-full blur-3xl opacity-10`}></div>
          
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E4F2FE] border border-[#87B7FE]/30 text-[#132190] px-3 py-1 rounded-full mb-4 text-sm">
                <FileText className="size-4" />
                <span>{data.norm}</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-slate-900 mb-2">Análise Completa</h2>
              <p className="text-slate-700 mb-1 text-lg">{data.fileName}</p>
              <p className="text-slate-500 text-sm">
                {data.timestamp.toLocaleString('pt-BR', { 
                  dateStyle: 'long', 
                  timeStyle: 'short' 
                })}
              </p>
            </div>

            <div className="text-center">
              <div className={`relative inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br ${getScoreColor(data.score)} p-1 shadow-lg`}>
                <div className="absolute inset-0 rounded-full blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-full w-full h-full flex flex-col items-center justify-center">
                  <div className="text-5xl text-slate-900">{data.score}</div>
                  <div className="text-lg text-slate-600">/ 100</div>
                </div>
              </div>
              <p className="text-lg text-slate-700 mt-4">{getScoreLabel(data.score)}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid - Cores Unifor */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-white border-slate-200 backdrop-blur-sm p-5 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-slate-100 p-2 rounded-lg">
              <Target className="size-5 text-slate-600" />
            </div>
            <div className="text-slate-600">Total</div>
          </div>
          <div className="text-2xl text-slate-900">{data.stats.totalIssues}</div>
          <Progress value={(data.stats.totalIssues / 15) * 100} className="mt-2 h-1 bg-slate-100 [&>div]:bg-slate-400" />
        </Card>

        <Card className="bg-red-50 border-red-200 backdrop-blur-sm p-5 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-red-100 p-2 rounded-lg">
              <AlertCircle className="size-5 text-red-600" />
            </div>
            <div className="text-red-700">Críticos</div>
          </div>
          <div className="text-2xl text-slate-900">{data.stats.criticalIssues}</div>
          <Progress value={(data.stats.criticalIssues / 10) * 100} className="mt-2 h-1 bg-red-100 [&>div]:bg-red-500" />
        </Card>

        <Card className="bg-yellow-50 border-yellow-200 backdrop-blur-sm p-5 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <AlertTriangle className="size-5 text-yellow-600" />
            </div>
            <div className="text-yellow-700">Atenção</div>
          </div>
          <div className="text-2xl text-slate-900">{data.stats.warningIssues}</div>
          <Progress value={(data.stats.warningIssues / 10) * 100} className="mt-2 h-1 bg-yellow-100 [&>div]:bg-yellow-500" />
        </Card>

        <Card className="bg-[#E4F2FE] border-[#87B7FE]/30 backdrop-blur-sm p-5 shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-[#87B7FE]/20 p-2 rounded-lg">
              <Info className="size-5 text-[#004AF7]" />
            </div>
            <div className="text-[#132190]">Sugestões</div>
          </div>
          <div className="text-2xl text-slate-900">{data.stats.suggestions}</div>
          <Progress value={(data.stats.suggestions / 10) * 100} className="mt-2 h-1 bg-white [&>div]:bg-[#004AF7]" />
        </Card>
      </div>

      {/* Tabs Section */}
      <Card className="bg-white border-slate-200 backdrop-blur-xl shadow-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-slate-900">Detalhes da Análise</h3>
            <Button variant="outline" className="gap-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50">
              <Download className="size-4" />
              Exportar PDF
            </Button>
          </div>

          <Tabs defaultValue="formatting" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-slate-100 border border-slate-200">
              <TabsTrigger 
                value="formatting"
                className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
              >
                Formatação ({data.issues.formatting.length})
              </TabsTrigger>
              <TabsTrigger 
                value="citations"
                className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
              >
                Citações ({data.issues.citations.length})
              </TabsTrigger>
              <TabsTrigger 
                value="references"
                className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
              >
                Referências ({data.issues.references.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="formatting" className="mt-6">
              <div className="mb-6">
                <h4 className="text-xl text-slate-900 mb-2">Problemas de Formatação</h4>
                <p className="text-slate-600">
                  Verificação de margens, espaçamento, fontes e estrutura conforme {data.norm}
                </p>
              </div>
              {renderIssuesList(data.issues.formatting)}
            </TabsContent>

            <TabsContent value="citations" className="mt-6">
              <div className="mb-6">
                <h4 className="text-xl text-slate-900 mb-2">Problemas em Citações</h4>
                <p className="text-slate-600">
                  Verificação de citações diretas, indiretas e formatação conforme {data.norm}
                </p>
              </div>
              {renderIssuesList(data.issues.citations)}
            </TabsContent>

            <TabsContent value="references" className="mt-6">
              <div className="mb-6">
                <h4 className="text-xl text-slate-900 mb-2">Problemas em Referências</h4>
                <p className="text-slate-600">
                  Verificação da lista de referências bibliográficas conforme {data.norm}
                </p>
              </div>
              {renderIssuesList(data.issues.references)}
            </TabsContent>
          </Tabs>
        </div>
      </Card>

      {/* Next Steps */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 backdrop-blur-sm p-6 shadow-md">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="size-6 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="text-xl text-slate-900 mb-3">Próximos Passos Recomendados</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Priorize a correção dos <strong className="text-red-700">{data.stats.criticalIssues} problemas críticos</strong> identificados</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Revise cuidadosamente as <strong className="text-yellow-700">{data.stats.warningIssues} questões de atenção</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Considere implementar as sugestões para elevar a qualidade do trabalho</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Faça uma nova análise após realizar os ajustes para verificar as correções</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}