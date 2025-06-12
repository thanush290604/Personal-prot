import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Intern at G Cloud Networks",
      period: "Jun 2024 - Aug 2024",
      description: "Contributed to video editing, poster design, and website development. Assisted in various technical and creative projects, enhancing digital content and user engagement.",
      logo: "/images/gcloud-logo.jpg"
    },
    {
      title: "SDG Researcher & Volunteer at IGEN",
      period: "Jul 2022 - Present",
      description: "Researched SDGs and contributed to AI-driven community safety projects. Developed websites for sustainability initiatives and organized key projects like IGEN MINUSCO2 and ENERGYTHON.",
      logo: "/images/igen-logo.jpg"
    },
    {
      title: "Volunteer at Institution of Engineers (India)",
      period: "Jan 2023 - Jun 2024",
      description: "Contributed to poster designs for events and campaigns. Organized and managed events like ENVIRONTHON, promoting engineering and technology awareness.",
      logo: "/images/iei-logo.jpg"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10"></div>
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-16 animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transform -translate-x-1/2 z-10"></div>
              
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-16' : 'md:pr-16'}`}>
                <div className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Company Logo */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-xl p-2 group-hover:bg-white/20 transition-all duration-300">
                      <img
                        src={exp.logo}
                        alt={`${exp.title} logo`}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 blur-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default Experience;