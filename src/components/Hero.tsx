import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Thanush Kannan
              </span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-semibold mb-8 animate-fade-in-up animation-delay-200">
              AI Engineer
            </div>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400">
              Final-year B.Tech student passionate about AI, machine learning, and community-driven safety projects. 
              Building innovative solutions for smart cities and sustainable technology.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative group">
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 animate-pulse transition-opacity duration-300"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-1 rounded-2xl backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/profile.jpg"
                    alt="Thanush Kannan"
                    className="w-72 h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/placeholder.jpg';
                    }}
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-400 rounded-full animate-bounce animation-delay-2000 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;