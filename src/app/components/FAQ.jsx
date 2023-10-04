import React, { useState } from 'react';

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 py-8">
      <div className="md:w-1/2">
        {/* Conteúdo da primeira coluna */}
        <h1 className="text-5xl text-primary font-bold text-center">Materiais do Programa</h1>
        <p className="text-xl font-medium text-center mt-4">Saiba mais clicando no nome do material ao lado.</p>
        {/* Adicione sua imagem aqui, se necessário */}
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        {/* Conteúdo da segunda coluna */}
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 1 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-primary text-xl font-medium cursor-pointer"
            onClick={() => handleAccordionClick(1)}
          >
            Livro do Estudante
          </div>
          <div className={`collapse-content ${activeAccordion === 1 ? 'open' : ''}`}>
            <p>
              Traz conteúdos do currículo de Matemática ancorados em conceitos de Educação Financeira contextualizados em situações cotidianas vividas pelos estudantes. O professor de matemática também pode convidar educadores de outros componentes curriculares, como Português, Ciências, Geografia, entre outros, para trabalhar de forma interdisciplinar.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 2 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-xl text-primary font-medium cursor-pointer"
            onClick={() => handleAccordionClick(2)}
          >
            Caderno do Educador
          </div>
          <div className={`collapse-content ${activeAccordion === 2 ? 'open' : ''}`}>
            <p>
              Contém orientações e ideias para que o educador permita aos jovens trabalhar os conceitos de Educação Financeira ancorados na Matemática e, com a realização de pequenos projetos, desenvolver parte das competências socioemocionais previstas na BNCC. A proposta deste caderno é a implementação do conteúdo pelo educador mediante o emprego de metodologias ativas, em uma sequência de quatro atividades significativas, de acordo com a divisão do Livro do Estudante.
            </p>
          </div>
        </div>
        <div
          className={`collapse collapse-plus hover:bg-gray-100 ${
            activeAccordion === 3 ? 'open' : ''
          }`}
        >
          <input type="radio" name="my-accordion-3" />
          <div
            className="collapse-title text-xl text-primary font-medium cursor-pointer"
            onClick={() => handleAccordionClick(3)}
          >
            Camada Digital
          </div>
          <div className={`collapse-content ${activeAccordion === 3 ? 'open' : ''}`}>
            <p>
              A Camada Digital é o ambiente online estruturado dentro do Google Classroom. Nele, você encontrará material de apoio referente à formação e à aplicação do programa. Destacamos que dentro deste material há quatro sites criados para a facilitação da aplicação do programa com sua turma. Neste ambiente, também é possível entrar em contato com o gestor responsável pelas formações.
            </p>
          </div>
        </div>
        {/* Repita os elementos do accordion aqui conforme necessário */}
      </div>
    </div>
  );
}

export default FAQ;




