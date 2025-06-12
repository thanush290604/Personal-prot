import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Title Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <h2 className="text-6xl lg:text-8xl font-bold mb-4">About</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-8"></div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-200">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300">
                Final-year <span className="text-cyan-400 font-semibold">B.Tech (CSE - Data Science & AI)</span> student 
                with a strong academic record and hands-on experience in AI, machine learning, and community-driven projects. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6">
                Passionate about <span className="text-purple-400 font-semibold">sustainability</span>, 
                <span className="text-pink-400 font-semibold"> smart city solutions</span>, and 
                <span className="text-cyan-400 font-semibold"> AI-integrated safety systems</span>. 
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6">
                Proven leadership, teamwork, and innovation skills, with a commitment to 
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold"> technological advancements and societal impact</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;