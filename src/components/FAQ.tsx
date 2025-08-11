'use client';

import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Por que a Consultoria é paga, se a Assessoria é gratuita?",
      answer: "A consultoria oferece um serviço personalizado e dedicado, com acompanhamento contínuo e planejamento específico para suas necessidades, diferentemente da assessoria que é mais genérica."
    },
    {
      question: "Eu gosto de estudar e fazer sozinho. A consultoria vale a pena pra mim?",
      answer: "Mesmo para quem gosta de estudar, a consultoria oferece insights profissionais e estratégias que podem otimizar significativamente seus resultados, além de economizar tempo e evitar erros comuns."
    },
    {
      question: "Qual o custo do serviço da Portfel?",
      answer: "Nossos custos são transparentes e baseados em uma taxa anual sobre o patrimônio sob nossa gestão. O valor é acordado previamente, sem custos ocultos."
    },
    {
      question: "Por que confiar na Portfel?",
      answer: "Somos a consultoria que mais cresce no Brasil, com mais de 12.000 clientes, 8 bilhões sob custódia e NPS de 93. Nossa transparência e resultados comprovados falam por si."
    },
    {
      question: "Como a consultoria me ajuda na escolha dos investimentos?",
      answer: "Analisamos seu perfil, objetivos e situação financeira para criar uma carteira personalizada, com acompanhamento contínuo e rebalanceamento quando necessário."
    },
    {
      question: "Posso investir com o consultor em qualquer corretora?",
      answer: "Sim! Atendemos em qualquer instituição financeira, sem conflitos de interesse. Você mantém seus investimentos onde preferir."
    },
    {
      question: "É seguro investir com consultor? Quais são os riscos?",
      answer: "Sim, é seguro. Nossos consultores são credenciados e seguimos rigorosos padrões de compliance. Os riscos são os mesmos de qualquer investimento, mas com gestão profissional."
    },
    {
      question: "A Portfel oferece alguma ajuda educacional?",
      answer: "Sim! Além da consultoria, oferecemos conteúdo educativo e acompanhamento para que você entenda melhor seus investimentos."
    },
    {
      question: "Como eu faço o pagamento da consultoria?",
      answer: "O pagamento é feito de forma transparente, com uma taxa anual acordada previamente e cobrada sobre o patrimônio sob nossa gestão."
    },
    {
      question: "Posso cancelar, caso eu não gostar?",
      answer: "Sim! Você pode cancelar a qualquer momento, sem multas ou penalidades. Nossa relação é baseada na confiança e resultados."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Precisa de ajuda?
          </h2>
          <h3 className="text-2xl font-semibold text-white">
            Perguntas Frequentes
          </h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <span className="text-white text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Ainda tem dúvidas?</p>
          <button className="btn-primary">
            Fale conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
