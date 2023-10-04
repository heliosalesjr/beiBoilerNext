import React from 'react';
import { BiMath } from 'react-icons/bi';
import { GiTeacher } from 'react-icons/gi';
import { MdCastForEducation } from 'react-icons/md';

const FeatureSection = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32 text-center">
        <h2 className="mb-16 text-3xl font-bold">
          O que é o Programa de Educação Financeira da<u className="text-primary dark:text-primary-400 no-underline"> BEĨ Educação</u>
        </h2>
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <BiMath className="h-8 w-8 text-primary" />
            </div>
            <h5 className="mb-4 text-lg font-bold">O Programa</h5>
            <p className="text-neutral-500 dark:text-neutral-600">
              O programa da BEĨ Educação foi elaborado com o objetivo de levar para a sala de aula a Educação Financeira, ancorada na disciplina da Matemática. Este programa propõe que o professor implemente o conteúdo utilizando a metodologia de projeto.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <GiTeacher className="h-8 w-8 text-primary" />
            </div>
            <h5 className="mb-4 text-lg font-bold">Nova BNCC</h5>
            <p className="text-neutral-500 dark:text-neutral-600">
              Para o desenvolvimento do conteúdo, a equipe da BEĨ utilizou os referenciais metodológicos da OCDE, articulando-os com a nova BNCC e inserindo-os em um texto que procura potencializar as competências socioemocionais dos estudantes.
            </p>
          </div>

          <div className="mb-12 md:mb-0">
            <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
              <MdCastForEducation className="h-8 w-8 text-primary" />
            </div>
            <h5 className="mb-4 text-lg font-bold">Diferenças</h5>
            <p className="text-neutral-800 dark:text-neutral-600">
              É importante sublinhar a distinção entre Matemática Financeira e Educação Financeira. Neste programa, você, educador, terá a oportunidade de trabalhar com os dois conhecimentos de forma integrada.
            </p>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </div>
  );
};

export default FeatureSection;
