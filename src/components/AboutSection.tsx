import { Code, Users, Award, Heart } from 'lucide-react';
import { Card } from './ui/card';

export function AboutSection() {
  return (
    <div id="sobre">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            Sobre o projeto
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Um projeto acadêmico desenvolvido para facilitar a vida de estudantes universitários
          </p>
        </div>

        <Card className="bg-white/90 border-slate-200 backdrop-blur-sm p-8 md:p-12 mb-8 shadow-lg">
          <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
            <p>
              O <strong className="text-slate-900">TCC Check AI</strong> é um projeto desenvolvido como Trabalho de Conclusão de Curso,
              com o objetivo de auxiliar estudantes universitários na validação de seus trabalhos acadêmicos.
            </p>
            <p>
              Sabemos o quanto é desafiador garantir que um TCC esteja em conformidade com todas as normas de formatação,
              citações e referências. Por isso, criamos esta ferramenta que utiliza inteligência artificial para
              automatizar essa verificação, economizando tempo e reduzindo erros.
            </p>
            <p>
              Este é um projeto 100% acadêmico e sem fins lucrativos, desenvolvido com o propósito de aprendizado
              e contribuição para a comunidade estudantil.
            </p>
          </div>
        </Card>

        <div className="grid md:grid-cols-4 gap-4">
          <Card className="bg-white/90 border-slate-200 backdrop-blur-sm p-6 text-center shadow-md hover:shadow-lg transition-all">
            <div className="bg-[#E4F2FE] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Code className="size-7 text-[#004AF7]" />
            </div>
            <p className="text-slate-700">Projeto acadêmico</p>
          </Card>

          <Card className="bg-white/90 border-slate-200 backdrop-blur-sm p-6 text-center shadow-md hover:shadow-lg transition-all">
            <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Users className="size-7 text-green-600" />
            </div>
            <p className="text-slate-700">Feito por estudantes</p>
          </Card>

          <Card className="bg-white/90 border-slate-200 backdrop-blur-sm p-6 text-center shadow-md hover:shadow-lg transition-all">
            <div className="bg-[#E4F2FE] w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Award className="size-7 text-[#132190]" />
            </div>
            <p className="text-slate-700">TCC 2025</p>
          </Card>

          <Card className="bg-white/90 border-slate-200 backdrop-blur-sm p-6 text-center shadow-md hover:shadow-lg transition-all">
            <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Heart className="size-7 text-red-500" />
            </div>
            <p className="text-slate-700">Sem fins lucrativos</p>
          </Card>
        </div>
      </div>
    </div>
  );
}