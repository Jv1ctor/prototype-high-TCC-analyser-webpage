import { GraduationCap, Menu, LogIn, LogOut } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onClickAnalyze?: () => void;
  onClickLogin?: () => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export function Header({ onClickAnalyze, onClickLogin, isLoggedIn = false, onLogout }: HeaderProps = {}) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAnalyzeClick = () => {
    if (onClickAnalyze) {
      onClickAnalyze();
    } else {
      scrollToSection('upload');
    }
  };

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Cores Unifor no logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#004AF7] to-[#132190] rounded-xl blur opacity-75"></div>
              <div className="relative bg-gradient-to-br from-[#004AF7] to-[#132190] p-2.5 rounded-xl shadow-lg">
                <GraduationCap className="size-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl text-slate-900">TCC Check AI</h1>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('funcionalidades')} 
              className="text-slate-600 hover:text-[#004AF7] transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('normas')} 
              className="text-slate-600 hover:text-[#004AF7] transition-colors"
            >
              Normas
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-slate-600 hover:text-[#004AF7] transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-slate-600 hover:text-[#004AF7] transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center gap-4">
            {/* Botão com cores Unifor */}
            <Button 
              onClick={handleAnalyzeClick}
              className="bg-gradient-to-r from-[#004AF7] to-[#132190] hover:from-[#004AF7]/90 hover:to-[#132190]/90 text-white border-0 shadow-lg"
            >
              Analisar TCC
            </Button>
            
            {/* Botão de Login/Logout */}
            {isLoggedIn ? (
              <Button 
                variant="outline"
                onClick={onLogout}
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <LogOut className="size-4 mr-2" />
                Sair
              </Button>
            ) : (
              <Button 
                variant="outline"
                onClick={onClickLogin}
                className="border-slate-200 text-slate-700 hover:bg-slate-50"
              >
                <LogIn className="size-4 mr-2" />
                Login
              </Button>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden text-slate-600 hover:text-slate-900">
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}