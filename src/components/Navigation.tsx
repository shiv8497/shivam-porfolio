
import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { label: 'Home', id: 'home', icon: Home },
    { label: 'About', id: 'about', icon: User },
    { label: 'Services', id: 'services', icon: Briefcase },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 transform translate-y-0' 
        : 'bg-transparent transform translate-y-0'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with micro-interactions */}
          <div className="text-2xl font-bold hover-scale cursor-pointer relative group">
            <span className={`transition-all duration-500 ${isScrolled ? 'gradient-text' : 'text-white'} relative z-10`}>
              Portfolio
            </span>
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-500"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-purple-600 to-indigo-600 blur-xl transition-opacity duration-500"></div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 font-medium transition-all duration-500 rounded-xl hover-scale overflow-hidden ${
                  activeSection === item.id
                    ? isScrolled 
                      ? 'text-purple-600 bg-purple-50' 
                      : 'text-purple-300 bg-white/10'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50' 
                      : 'text-white hover:text-purple-300 hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="flex items-center space-x-2 relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300">
                  <item.icon className="w-4 h-4 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span>{item.label}</span>
                </span>
                
                {/* Enhanced active indicator with animation */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-500 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
                
                {/* Ripple effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            ))}
            
            {/* Enhanced CTA Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full font-semibold hover-scale hover-glow magnetic ripple relative overflow-hidden group"
            >
              <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                Hire Me
              </span>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-110 transition-all duration-700 rounded-full opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-500 hover-scale relative overflow-hidden group ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="relative z-10">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 transform rotate-0 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </div>
            {/* Ripple background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-xl"></div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          <div className="mt-4 py-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 transform transition-all duration-500">
            <div className="flex flex-col space-y-1 px-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 text-gray-900 font-medium py-3 px-4 text-left hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 rounded-xl transition-all duration-500 hover-scale slide-right group relative overflow-hidden ${
                    activeSection === item.id ? 'bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-600' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-purple-200/30 to-transparent"></div>
                </button>
              ))}
              
              <Button
                onClick={() => scrollToSection('contact')}
                className="mx-4 mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold hover-scale magnetic ripple relative overflow-hidden group"
              >
                <span className="relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
