import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Integrated Community Safety Gadgets",
      description: "Developed an AI-driven system for community safety, including gas leak, fire, and medical emergency alerts with IoT hardware and real-time communication.",
      tags: ["IoT", "NodeMCU", "AI/ML", "Sensors", "Proteus"],
      github: "https://github.com/thanush29/AI-Integrated-community-safety-gadgets.git",
      demo: "https://github.com/thanush29/AI-Integrated-community-safety-gadgets.git"
    },
    {
      title: "Stock Price Prediction Using ML",
      description: "Developed a stock price prediction model using LSTM (Long Short-Term Memory) for accurate forecasting, utilizing historical data analysis and machine learning.",
      tags: ["Python", "LSTM", "Machine Learning", "Data Analysis"],
      github: "https://github.com/thanush29/Stock_Forcasting_web_app",
      demo: "https://github.com/thanush29/Stock_Forcasting_web_app"
    },
    {
      title: "Safe Zone Detection Using YOLO V8", 
      description: "Built a real-time safe zone detection system for IBM Hackathon using YOLO V8, integrating object detection and image processing for automated safety alerts.",
      tags: ["YOLO V8", "Computer Vision", "Python", "Object Detection"],
      github: "https://github.com/thanush29/SBSPS-Challenge-10022-SafeZone-Real-time-Video-Analytics-for-Industrial-Safety-main.git",
      demo: "https://github.com/thanush29/SBSPS-Challenge-10022-SafeZone-Real-time-Video-Analytics-for-Industrial-Safety-main.git"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Innovative solutions combining AI, machine learning, and IoT technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-700 hover:-translate-y-6 hover:rotate-1 cursor-pointer animate-fade-in-up animation-delay-${(index + 1) * 200} overflow-hidden`}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-700 rounded-2xl"></div>
              
              {/* Floating Particles */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-bounce animation-delay-200 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500 group-hover:scale-105 transform">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 ml-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 group/icon"
                      aria-label="View on GitHub"
                    >
                      <FaGithub 
                        size={20} 
                        className="text-gray-400 group-hover/icon:text-cyan-400 transition-colors duration-300"
                      />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-lg hover:bg-purple-400/20 hover:scale-110 transition-all duration-300 group/icon"
                      aria-label="View Demo"
                    >
                      <ExternalLink 
                        size={20} 
                        className="text-gray-400 group-hover/icon:text-purple-400 transition-colors duration-300"
                      />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-500 transform group-hover:scale-[1.02]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium group-hover:bg-cyan-400/30 group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-500"
                      style={{ animationDelay: `${tagIndex * 100}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/thanush29"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-cyan-400 hover:text-purple-400 text-xl font-semibold transition-all duration-500 hover:scale-110 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl border border-cyan-400/30 hover:border-purple-400/50"
          >
            <span className="group-hover:animate-pulse">View More Projects on GitHub</span>
            <ArrowRight 
              size={24} 
              className="group-hover:translate-x-3 group-hover:scale-110 transition-all duration-500"
            />
          </a>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Projects;