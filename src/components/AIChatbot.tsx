import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Thanush's AI assistant. I can help you learn more about his experience, projects, skills, and achievements. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const portfolioData = {
    experience: [
      "Intern at G Cloud Networks (Jun 2024 - Aug 2024): Contributed to video editing, poster design, and website development",
      "SDG Researcher & Volunteer at IGEN (Jul 2022 - Present): Researched SDGs and contributed to AI-driven community safety projects",
      "Volunteer at Institution of Engineers India (Jan 2023 - Jun 2024): Contributed to poster designs and organized events like ENVIRONTHON"
    ],
    projects: [
      "AI Integrated Community Safety Gadgets: AI-driven system for community safety with IoT hardware and real-time communication",
      "Stock Price Prediction Using ML: LSTM model for accurate forecasting using historical data analysis",
      "Safe Zone Detection Using YOLO V8: Real-time safe zone detection system for IBM Hackathon"
    ],
    skills: [
      "Programming: Python, Java, JavaScript, TypeScript",
      "AI/ML: Machine Learning, Deep Learning, LSTM, YOLO V8, Computer Vision",
      "Technologies: IoT, NodeMCU, React, Node.js, Tailwind CSS",
      "Cloud: Microsoft Azure, IBM Cloud",
      "Databases: SQL, NoSQL"
    ],
    achievements: [
      "Patent Granted: AI Integrated Community Safety Gadgets (Application No: 202441007573)",
      "Best Paper Award at ICDSBS 2025, SRM Institute",
      "IEEE Publications: AI-Integrated Community Safety Solutions for Smart Cities",
      "Green Volunteer Award 2024 by TN Environment Minister",
      "IBM Certified Professional in Python, Java, Big Data, and Business Intelligence",
      "Microsoft Azure Fundamentals Certification"
    ],
    education: "Final-year B.Tech (CSE - Data Science & AI) student with strong academic record",
    interests: "Sustainability, smart city solutions, AI-integrated safety systems, technological advancements for societal impact"
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Thanush has diverse experience in AI and technology:\n\n${portfolioData.experience.join('\n\n')}`;
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      return `Here are Thanush's key projects:\n\n${portfolioData.projects.join('\n\n')}`;
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Thanush's technical skills include:\n\n${portfolioData.skills.join('\n')}`;
    }
    
    if (message.includes('achievement') || message.includes('award') || message.includes('certificate')) {
      return `Thanush's notable achievements:\n\n${portfolioData.achievements.join('\n\n')}`;
    }
    
    if (message.includes('education') || message.includes('study') || message.includes('degree')) {
      return `Education: ${portfolioData.education}`;
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return "You can contact Thanush through:\n• Email: thanushkannan@example.com\n• LinkedIn: Check the contact section\n• GitHub: Available in the projects section";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
      return "Thanush specializes in AI and Machine Learning with focus on:\n• Community safety solutions\n• Smart city technologies\n• IoT integration\n• Computer vision (YOLO V8)\n• Predictive modeling (LSTM)\n• Sustainable AI applications";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Thanush Kannan's background, projects, and achievements. What specific area would you like to explore?";
    }
    
    if (message.includes('patent') || message.includes('research') || message.includes('publication')) {
      return "Thanush has significant research contributions:\n• Patent: AI Integrated Community Safety Gadgets (202441007573)\n• IEEE Publications on AI-driven safety frameworks\n• Best Paper Award at ICDSBS 2025\n• Research focus on SDG 11 and smart cities";
    }
    
    return "I can help you learn about Thanush's experience, projects, skills, achievements, education, or contact information. What specific topic interests you?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full transition-all duration-300 hover:scale-110 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg hover:shadow-cyan-500/25'
        }`}
        aria-label="Toggle AI Chat"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-96 h-[500px] bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold">Thanush AI Assistant</h3>
                <p className="text-sm opacity-90">Ask me about Thanush's portfolio</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="p-2 bg-cyan-400/20 rounded-full flex-shrink-0">
                    <Bot size={16} className="text-cyan-400" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white/10 text-gray-200'
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>

                {!message.isBot && (
                  <div className="p-2 bg-purple-400/20 rounded-full flex-shrink-0">
                    <User size={16} className="text-purple-400" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="p-2 bg-cyan-400/20 rounded-full flex-shrink-0">
                  <Bot size={16} className="text-cyan-400" />
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Thanush's experience, projects, skills..."
                className="flex-1 p-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;