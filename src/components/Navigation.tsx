import React, { useState, useEffect } from 'react';
import { Menu, X, Trophy } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onOpenSkillsModal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onOpenSkillsModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80' : 'bg-black/30'
    } backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-3`}>
      <div className="flex justify-between items-center gap-8">
        <button
          onClick={() => scrollToSection('#home')}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
        >
          Thanush Kannan
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeSection === item.href.slice(1)
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={onOpenSkillsModal}
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200"
        >
          Skills & Achievements
          <Trophy size={16} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-black/95 backdrop-blur-md rounded-lg border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left py-3 px-2 rounded-lg transition-colors duration-200 ${
                activeSection === item.href.slice(1)
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onOpenSkillsModal();
              setIsMenuOpen(false);
            }}
            className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
          >
            Skills & Achievements
            <Trophy size={16} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;