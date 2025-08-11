'use client';


import React from 'react';
import ReactPlayer from 'react-player';
import type { VideoPlayerProps } from '../types';

const Hero = () => {
  return (
<section className="relative w-screen h-screen overflow-hidden bg-black">
  {/* Container que corta o excesso */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    {/* Wrapper para centralizar e cobrir */}
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: '100vw',
        height: '56.25vw', // 16:9 ratio = 9/16=0.5625 => altura proporcional à largura
        minHeight: '100vh',
        minWidth: '177.78vh', // largura mínima para cobrir altura em 16:9
        transform: 'translate(-50%, -50%)',
      }}
    >
      <iframe
        src="https://player.vimeo.com/video/851706315?background=1&autoplay=1&loop=1&muted=1#t=30s"
        className="w-full h-full"
        style={{ pointerEvents: 'none' }}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Background video"
      />
    </div>
  </div>

  {/* Conteúdo da página */}
  <div className="relative z-10 flex items-center justify-center w-full h-full text-white">
    <h1 className="text-4xl font-bold">Meu Portfólio</h1>
  </div>
</section>


  );
};

export default Hero;
