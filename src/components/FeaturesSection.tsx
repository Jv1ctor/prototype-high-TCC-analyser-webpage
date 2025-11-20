import { FileSearch, Zap, Shield, CheckCircle, BookOpen, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';

const FEATURES = [
  {
    icon: FileSearch,
    title: 'Análise Profunda',
    description: 'Verificação completa de formatação, margens, espaçamento e estrutura do documento',
    color: 'from-[#004AF7] to-[#87B7FE]',
  },
  {
    icon: Zap,
    title: 'Resultados Instantâneos',
    description: 'Receba feedback detalhado em menos de 30 segundos após o upload',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: '100% Seguro',
    description: 'Seus documentos são processados com segurança e excluídos após a análise',
    color: 'from-green-600 to-emerald-600',
  },
  {
    icon: CheckCircle,
    title: 'Verificação de Citações',
    description: 'Identifica problemas em citações diretas, indiretas e formatação de autores',
    color: 'from-[#132190] to-[#004AF7]',
  },
  {
    icon: BookOpen,
    title: 'Validação de Referências',
    description: 'Analisa lista de referências quanto à ordem, completude e formatação',
    color: 'from-[#87B7FE] to-[#004AF7]',
  },
  {
    icon: BarChart3,
    title: 'Relatório Detalhado',
    description: 'Dashboard completo com estatísticas e priorização de correções',
    color: 'from-red-500 to-rose-500',
  },
];

export function FeaturesSection() {
  return (
    <div id="funcionalidades">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
          Funcionalidades completas para seu TCC
        </h2>
        <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Tudo que você precisa para garantir que seu trabalho acadêmico esteja em conformidade com as normas
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index}
              className="bg-white/90 border-slate-200 backdrop-blur-sm p-6 hover:bg-white hover:shadow-lg transition-all group"
            >
              <div className="relative inline-block mb-4">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative bg-gradient-to-br ${feature.color} p-3 rounded-lg shadow-md`}>
                  <Icon className="size-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}