import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TypingSection from './components/TypingSection';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import SkillsModal from './components/SkillsModal';
import AIChatbot from './components/AIChatbot';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <BackgroundEffects />
      <Navigation 
        activeSection={activeSection} 
        onOpenSkillsModal={() => setIsSkillsModalOpen(true)}
      />
      <AIChatbot />
      <Hero />
      <TypingSection />
      <About />
      <Experience />
      <Projects />
      <Gallery />
      <Contact />
      <SkillsModal 
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
    </div>
  );
}

export default App;