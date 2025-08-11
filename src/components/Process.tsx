import React from 'react';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Definição do perfil de investidor",
      description: "Nesse primeiro momento vamos te apresentar a nossa estrutura e conversar sobre o seu perfil de investidor. Com isso, garantimos que os nossos consultores sempre irão montar carteiras adequadas ao seu objetivo e ao seu perfil."
    },
    {
      number: "02", 
      title: "Suitability & contrato",
      description: "Após a primeira reunião, você preencherá um formulário com algumas informações importantes, para que nós possamos criar um plano e carteira de investimento personalizada para você. E, após isso, vamos formalizar a nossa parceria com todos os detalhes e alinhamentos feitos."
    },
    {
      number: "03",
      title: "Acompanhamento do seu plano de investimentos", 
      description: "Por último, fazemos uma segunda reunião, em que apresentamos para você um planejamento financeiro detalhado dos próximos passos, junto com uma carteira de investimentos que o nosso consultor preparou unicamente para você. E, a partir disso, vamos acompanhar os seus investimentos e rebalancear a sua carteira sempre que necessário."
    }
  ];

  const benefits = [
    "Finalmente terá um plano concreto para realizar os seus objetivos",
    "Nunca mais perderá o sono com os seus investimentos", 
    "Sempre terá com quem contar para melhorar seus investimentos",
    "Se sentirá tranquilo e seguro com o seu futuro financeiro e com a segurança patrimonial da sua família"
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Como funciona a Consultoria da Portfel?
          </h2>
        </div>
        
        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
              <div className="lg:w-1/3">
                <div className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
              </div>
              <div className="lg:w-2/3">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Benefits */}
        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Com a Consultoria da Portfel, você:​
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            quero falar com um consultor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
