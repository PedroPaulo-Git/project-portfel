import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
          Vamos investir juntos?
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Junte-se a mais de 12.000 clientes que já confiam na Portfel para realizar seus sonhos financeiros.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="btn-primary text-lg px-12 py-6">
            QUERO FALAR COM UM CONSULTOR
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">+12.000</div>
            <div className="text-gray-400">Clientes satisfeitos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">+9 Bi</div>
            <div className="text-gray-400">Sob consultoria</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">93</div>
            <div className="text-gray-400">NPS Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
