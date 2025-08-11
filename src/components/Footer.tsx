import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Portfel</h3>
            <p className="text-gray-400 mb-4">
              Muito mais do que apenas uma Consultoria Financeira
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Youtube
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Linkedin
              </a>
            </div>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informações</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">trabalhe conosco</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ouvidoria</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">comercial@portfel.com.br</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Acesse</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">nossos eventos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de privacidade</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Planejamento Financeiro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Montagem de Carteira</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investimentos no Exterior</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Quitação de Dívidas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Financiamento Imobiliário</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Atendimento</h4>
            <p className="text-gray-400 mb-4">
              Entre em contato conosco para mais informações sobre nossos serviços.
            </p>
            <button className="btn-primary w-full">
              QUERO FALAR COM UM CONSULTOR
            </button>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Portfel. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
