
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Dynamic cursor follower */}
      <div 
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float stagger-2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse float stagger-4"></div>
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse float stagger-${i + 1}`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="slide-up">
          {/* Animated greeting */}
          <div className="mb-4 text-reveal">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium border border-white/20 hover-glow">
              <Sparkles className="w-4 h-4 mr-2 animate-spin" />
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text text-reveal">
              Shivam Mankar
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto slide-left stagger-2">
            Creative Developer & Digital Designer crafting beautiful, 
            functional experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 slide-right stagger-3">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover-scale hover-glow magnetic ripple"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
           <a href="./Shivam mankar-resume(2025)" download="Shivam mankar-resume(2025)">
  <Button 
    variant="outline" 
    size="lg"
    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover-scale animated-border magnetic ripple"
  >
    <Download className="mr-2 h-5 w-5" />
    Download CV
  </Button>
</a>
          </div>

          <div className="animate-bounce hover-scale cursor-pointer stagger-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-purple-400 transition-colors duration-300 group"
            >
              <ArrowDown className="w-8 h-8 mx-auto group-hover:animate-pulse" />
              <span className="block text-sm mt-2 opacity-70 group-hover:opacity-100">Scroll to explore</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pulse-glow">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50 animate-pulse"></div>
      </div>

      {/* Parallax grid overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
