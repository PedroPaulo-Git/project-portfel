import React from 'react';

const Results = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Os resultados são comprovados!
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Segundo estudo do Royal Bank of Canada, investidores que tiveram um consultor financeiro independente por 15 anos tiveram, na média, um patrimônio quatro vezes maior do que os que não tinham um consultor.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart/Visual */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-white">Comparativo de Patrimônio</h3>
              <p className="text-gray-400 mb-6">15 anos de acompanhamento</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Patrimônio sem consultor</span>
                <div className="flex items-center">
                  <div className="w-32 h-6 bg-blue-400 rounded mr-3"></div>
                  <span className="text-blue-400 font-semibold">1x</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Patrimônio com consultor</span>
                <div className="flex items-center">
                  <div className="w-32 h-6 bg-blue-700 rounded mr-3"></div>
                  <span className="text-blue-700 font-semibold">4x</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Nota:</strong> No gráfico o azul claro é "patrimônio sem consultor". O azul escuro "patrimônio com um consultor".
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Nossa Consultoria Financeira é diferente
              </h3>
              <p className="text-gray-400 leading-relaxed">
                O nosso modelo de remuneração é feito de forma transparente, ou seja, na largada combinamos uma taxa anual que será cobrada do patrimônio em nosso cuidado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-semibold text-white mb-2">Transparência</h4>
                <p className="text-sm text-gray-400">
                  Você sabe exatamente o quanto está pagando, sem custos ocultos
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-white mb-2">Sem conflitos</h4>
                <p className="text-sm text-gray-400">
                  Não há conflito de interesses, pois nossa receita só aumenta se o seu patrimônio aumentar
                </p>
              </div>
              
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">📈</div>
                <h4 className="font-semibold text-white mb-2">Acompanhamento</h4>
                <p className="text-sm text-gray-400">
                  Nossos Consultores acompanham constantemente os seus investimentos
                </p>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <button className="btn-primary">
                quero falar com um consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
