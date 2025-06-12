import React, { useState, useEffect } from 'react';

const TypingSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = [
    "Hi, I'm Thanush. I want to build AI Tools that make an impact...",
    "Creating Smart Cities for a Better Tomorrow",
    "Innovating Safety Solutions with AI",
    "Developing ML Models that Transform Lives",
    "Researching SDGs for Sustainable Future"
  ];

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }
    }, isDeleting ? 30 : 80);

    if (!isDeleting && currentIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 3000);
    } else if (isDeleting && currentIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, textIndex, isDeleting, typingTexts]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-relaxed">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="animate-pulse text-cyan-400 ml-1">|</span>
            </h2>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce animation-delay-2000 opacity-80"></div>
            <div className="absolute top-1/2 left-5 w-1 h-1 bg-pink-400 rounded-full animate-bounce animation-delay-3000 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypingSection;