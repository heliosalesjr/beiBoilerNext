import React from 'react';
import Image from 'next/image'

const SectionHalf = () => {
    return (
        <section className="bg-white py-16">
          <div className="container mx-auto flex flex-col md:flex-row">
            {/* Primeira Linha */}
            <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-3xl font-bold mb-4">O que é Educação Financeira?</h1>
              <p className="text-lg mb-8">
                Segundo a Organização de Cooperação e de Desenvolvimento Econômico (OCDE), Educação Financeira pode ser definida como o processo pelo qual consumidores e/ou investidores financeiros melhoram sua compreensão sobre produtos e conceitos financeiros para desenvolver a capacidade de adquirir as habilidades e a confiança necessárias para se tornarem mais conscientes dos riscos na hora da tomada de decisões.
              </p>
            </div>
            <div className="md:w-1/3 md:pl-8 relative">
              <div className="w-full h-96 relative">
                <Image src="/images/books.png" alt="Imagem" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
    
          <div className="container mx-auto flex flex-col md:flex-row mt-8">
            {/* Segunda Linha */}
            <div className="md:w-1/3 md:pr-8 relative">
              <div className="w-full h-96 relative">
                <Image src="/images/howmuch.png" alt="Imagem" layout="fill" objectFit="cover" />
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-3xl font-bold mb-4">Por que Educação Financeira nas escolas?</h1>
              <p className="text-lg">
                A Educação Financeira é indispensável para preparar o jovem para o futuro, favorecendo sua formação como cidadão e tornando-o mais crítico e preparado para enfrentar os desafios da vida adulta. Além disso, seu conteúdo aplica-se ao cotidiano de todos, dialogando estreitamente com a Matemática.
              </p>
              <p className="text-lg mt-8">
                Na atualização de 2019, a nova BNCC incluiu a Educação Financeira entre os temas que deverão constar nos currículos de todo o país; mesmo que inserido como um “tema transversal”, é na competência da Matemática que ele é mencionado explicitamente.
              </p>
            </div>
          </div>
        </section>
      );
    };
    

export default SectionHalf;
