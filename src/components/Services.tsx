import React from 'react';

const services = [
  {
    title: "Planejamento Financeiro",
    description: "Alcance suas metas com segurança através de um planejamento personalizado.",
    icon: "📊"
  },
  {
    title: "Montagem profissional de carteira",
    description: "Construa uma carteira otimizada por especialistas do mercado",
    icon: "💼"
  },
  {
    title: "Investimentos no Exterior",
    description: "Diversifique globalmente sua carteira para oportunidades internacionais.",
    icon: "🌍"
  },
  {
    title: "Contratação de Seguros",
    description: "Proteja seu futuro com seguros adaptados às suas necessidades.",
    icon: "🛡️"
  },
  {
    title: "Quitação de dívidas da forma mais barata",
    description: "Na Portfel nós ajudamos você a sair das dívidas e se planejar financeiramente",
    icon: "💰"
  },
  {
    title: "Financiamento imobiliário e crédito",
    description: "As melhores opções de financiamento e crédito para sua PJ.",
    icon: "🏠"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            O que a Portfel oferece?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossos serviços são desenvolvidos para atender todas as suas necessidades financeiras
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
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

export default Services;
