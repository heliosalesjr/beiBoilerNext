import React from 'react';

const SectionHalf = () => {
  return (
    <section className="py-16 flex py-4">
      {/* Primeira Div (Imagem de Fundo) */}
      <div className="w-1/3 hidden md:block">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/learns.jpg")' }}></div>
      </div>
      
      {/* Segunda Div (Texto com Fundo Escuro) */}
      <div className="w-full md:w-2/3 bg-primary text-white p-8">
        <h1 className="text-3xl font-bold mb-4">O que é Educação Financeira?</h1>
        <p className="text-md">
          Segundo a Organização de Cooperação e de Desenvolvimento Econômico (OCDE), Educação Financeira pode ser definida como o processo pelo qual consumidores e/ou investidores financeiros melhoram sua compreensão sobre produtos e conceitos financeiros para desenvolver a capacidade de adquirir as habilidades e a confiança necessárias para se tornarem mais conscientes dos riscos na hora da tomada de decisões.
        </p>
        <h1 className="text-xl font-bold mb-4 py-8">Por que Educação Financeira nas escolas?</h1>
        <p className="text-md">
        A Educação Financeira é indispensável para preparar o jovem para o futuro, favorecendo sua formação como cidadão e tornando-o mais crítico e preparado para enfrentar os desafios da vida adulta. Além disso, seu conteúdo aplica-se ao cotidiano de todos, dialogando estreitamente com a Matemática.
<br></br>
Na atualização de 2019, a nova BNCC incluiu a Educação Financeira entre os temas que deverão constar nos currículos de todo o país; mesmo que inserido como um “tema transversal”, é na competência da Matemática que ele é mencionado explicitamente.
        </p>
      </div>
    </section>
  );
};

export default SectionHalf;

