import { BookOpen, CheckCircle2 } from 'lucide-react';
import { Card } from './ui/card';

const NORMS = [
  {
    name: 'ABNT',
    fullName: 'Associação Brasileira de Normas Técnicas',
    icon: '🇧🇷',
    description: 'Norma brasileira utilizada pela maioria das instituições de ensino superior no Brasil.',
    standards: [
      'NBR 14724 - Trabalhos acadêmicos',
      'NBR 6023 - Referências',
      'NBR 10520 - Citações',
      'NBR 6027 - Sumário',
      'NBR 6028 - Resumo',
      'NBR 6024 - Numeração progressiva',
      'NBR 6029 - Apresentação de livros',
    ],
  },
  {
    name: 'APA',
    fullName: 'American Psychological Association',
    icon: '🇺🇸',
    description: 'Norma internacional amplamente utilizada em trabalhos de Psicologia, Educação e Ciências Sociais.',
    standards: [
      'APA 7th Edition',
      'Formatação de citações no texto',
      'Lista de referências',
      'Estrutura de trabalhos acadêmicos',
      'Tabelas e figuras',
    ],
  },
  {
    name: 'Vancouver',
    fullName: 'International Committee of Medical Journal Editors',
    icon: '⚕️',
    description: 'Norma utilizada principalmente em trabalhos da área de Saúde e Ciências Biomédicas.',
    standards: [
      'ICMJE Guidelines',
      'Sistema numérico de citações',
      'Formatação de referências médicas',
      'Estrutura de artigos científicos',
      'Nomenclatura médica',
    ],
  },
];

export function NormsSection() {
  return (
    <div id="normas">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
          Normas suportadas
        </h2>
        <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Suporte completo para as principais normas de formatação acadêmica
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {NORMS.map((norm, index) => (
          <Card 
            key={index}
            className="bg-white/90 border-slate-200 backdrop-blur-sm p-8 hover:bg-white hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-4">{norm.icon}</div>
            <h3 className="text-2xl text-slate-900 mb-2">{norm.name}</h3>
            <p className="text-slate-500 mb-4">{norm.fullName}</p>
            <p className="text-slate-600 mb-6 leading-relaxed">{norm.description}</p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-600 mb-3">
                <BookOpen className="size-5" />
                <span>Verifica:</span>
              </div>
              {norm.standards.map((standard, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-600">
                  <CheckCircle2 className="size-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{standard}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}