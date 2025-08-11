import React from 'react';

const About = () => {
  const stats = [
    { value: "+9 Bi", label: "Sob Consultoria" },
    { value: "+12.000", label: "Clientes pelo mundo" },
    { value: "+450", label: "Consultores pelo Brasil" },
    { value: "+93", label: "NPS" }
  ];

  const institutions = [
    "Banco do Brasil", "Itaú", "Bradesco", "Santander", "Nubank", "XP Investimentos",
    "BTG Pactual", "Rico", "Clear", "Modalmais", "Órama", "Warren"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Quem somos
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-white">
            Muito mais do que uma Consultoria Financeira
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-white">
              A Portfel é a Consultoria Financeira do Grupo PRIMO!
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Fundada por Felipe Spritzer, a Portfel oferece as melhores soluções 100% personalizadas para o seu patrimônio, com o principal objetivo de realizar os sonhos dos nossos clientes.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Com mais de 4 anos de mercado, 12.000 clientes e 8 bilhões de reais sob custódia, nós já somos a Consultoria Financeira que mais cresce no Brasil!
            </p>
            <p className="text-gray-400 leading-relaxed">
              Sem qualquer conflito de interesses, nós atendemos os nossos clientes nos principais Bancos e Corretoras.
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Institutions */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Atendemos em qualquer instituição
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {institutions.map((institution, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-gray-500 transition-colors">
                <span className="text-gray-300 text-sm">{institution}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 mt-4">e muitas outras...</p>
        </div>
        
        {/* Team */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Uma equipe de especialistas
          </h3>
          <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            Temos uma equipe de análise que conta com mais de 20 profissionais especializados em alocação de investimentos. Por isso, a Portfel é uma das poucas consultorias que fornecem uma carteira de investimentos altamente eficiente.
          </p>
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

export default About;
