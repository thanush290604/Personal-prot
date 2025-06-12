import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>

      {/* Animated Grid */}
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

      {/* Floating Particles */}
      <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-bounce animation-delay-1000 opacity-60"></div>
      <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-purple-400 rounded-full animate-bounce animation-delay-2000 opacity-40"></div>
      <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-bounce animation-delay-3000 opacity-80"></div>
    </div>
  );
};

export default BackgroundEffects;