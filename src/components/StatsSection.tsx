import { Users, FileCheck, Award, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Users, value: '50K+', label: 'TCCs analisados', color: 'from-[#004AF7] to-[#87B7FE]' },
  { icon: FileCheck, value: '99.8%', label: 'Taxa de precisão', color: 'from-green-600 to-emerald-600' },
  { icon: Award, value: '4.9/5', label: 'Avaliação média', color: 'from-yellow-500 to-orange-500' },
  { icon: TrendingUp, value: '95%', label: 'Aprovação na 1ª entrega', color: 'from-[#132190] to-[#004AF7]' },
];

export function StatsSection() {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={index}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative bg-white/90 border border-slate-200 backdrop-blur-sm rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg shadow-md`}>
                    <Icon className="size-7 text-white" />
                  </div>
                </div>
                <div className="text-4xl text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 text-lg">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}