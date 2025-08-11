'use client';


import React from 'react';
import ReactPlayer from 'react-player';
import type { VideoPlayerProps } from '../types';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <ReactPlayer
          src="https://player.vimeo.com/video/851706315"
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="100%"
          style={{
            objectFit: 'cover',
            background: 'transparent',
          }}
          className="!absolute !inset-0 !w-full !h-full !bg-transparent"
        />
      </div>
      
  {/* Overlay REMOVIDO para deixar o vídeo visível */}
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Portfel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Muito mais do que uma Consultoria Financeira. Realize seus sonhos com planejamento personalizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="btn-primary">
            QUERO FALAR COM UM CONSULTOR
          </button>
          <button className="btn-secondary">
            Conheça nossos serviços
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
