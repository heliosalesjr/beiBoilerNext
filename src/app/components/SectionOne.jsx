import React from 'react';

const SectionOne = () => {
  return (
    <section className="bg-white py-16 text-gray-700 p-8 flex">
      {/* Div da seção (2/3 da tela) */}
      <div className="w-2/3">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            O que é o site “Aprendendo a Lidar com Dinheiro: Educação Financeira”?
          </h2>
          <p className="text-lg mb-8">
            Como forma de auxiliar os professores a se apropriarem da proposta e fornecer ferramentas para facilitar o desenvolvimento do trabalho em sala de aula, a BEĨ Educação construiu quatro sites.
          </p>
          <p className="text-lg">
            Nos sites, você encontrará explicações referentes às atividades propostas no material físico, ao mesmo tempo que oferecemos ferramentas e estratégias para o seu desenvolvimento.
          </p>
        </div>
      </div>

      {/* Div da imagem (1/3 da tela) */}
      <div className="w-1/3 mx-8">
        {/* Coloque aqui a sua imagem */}
        <img src="/images/website.gif" alt="Descrição da imagem" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default SectionOne;

