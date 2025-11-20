import { useState } from 'react';
import { GraduationCap, Lock, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

export function LoginPage({ onLogin, onBack }: LoginPageProps) {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login (aceitar qualquer matrícula/senha para protótipo)
    if (matricula && senha) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-[#E4F2FE] relative overflow-hidden flex items-center justify-center">
      {/* Background Effects - Cores Unifor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#87B7FE]/10 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004AF7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#132190]/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-grid-slate-900/[0.02] bg-[size:50px_50px]"></div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-md px-4">
        <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-xl">
          {/* Logo e Título */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#004AF7] to-[#132190] mb-4">
              <GraduationCap className="size-8 text-white" />
            </div>
            <h1 className="text-slate-900 mb-2">Bem-vindo de volta</h1>
            <p className="text-slate-600">Entre com suas credenciais da Unifor</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="matricula" className="text-slate-700">
                Matrícula
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <Input
                  id="matricula"
                  type="text"
                  placeholder="Digite sua matrícula"
                  value={matricula}
                  onChange={(e) => setMatricula(e.target.value)}
                  className="pl-10 h-12 border-slate-200 focus:border-[#004AF7] focus:ring-[#004AF7]"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-slate-700">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                <Input
                  id="senha"
                  type="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="pl-10 h-12 border-slate-200 focus:border-[#004AF7] focus:ring-[#004AF7]"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#004AF7] to-[#132190] hover:from-[#004AF7]/90 hover:to-[#132190]/90 text-white border-0 shadow-lg"
            >
              Entrar
            </Button>
          </form>

          {/* Link para voltar */}
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={onBack}
              className="text-slate-600 hover:text-[#004AF7] transition-colors"
            >
              Voltar para página inicial
            </button>
          </div>
        </Card>

        {/* Nota para protótipo */}
        <p className="text-center mt-4 text-sm text-slate-500">
          Projeto Acadêmico - Universidade de Fortaleza
        </p>
      </div>
    </div>
  );
}
