import React from 'react';
import { MdOutlineHomeWork } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';
import { AiOutlineBook } from 'react-icons/ai';
import { PiStepsDuotone } from 'react-icons/pi';
import { BiSitemap, BiSlideshow } from 'react-icons/bi';
import './custom.css'

const CardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      {/* Card 1 */}
      <div className="bg-white custom-border p-4 rounded-md shadow-md transition-transform hover:scale-105 md:col-span-2 relative">
        <div className="hidden lg:block bg-image-card absolute inset-0" style={{ backgroundImage: "url('/images/teste-ilustra4.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="flex items-center mb-2 relative z-10">
          <div className="mr-2 text-2xl"> <BiSlideshow /> </div>
          <h1 className="text-xl font-bold">Como os sites estão estruturados?</h1>
        </div>
        <p className="text-gray-600 p-5 relative z-10">Pensando em tornar o ambiente virtual padronizado e facilitar a busca por informações, os sites são organizados em seções. Conheça-as nos cards desta seção.</p>
      </div>

      {/* Card 2 */}
      <div className="custom-border bg-white p-4 rounded-md shadow-md transition-transform hover:scale-105">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-2xl"> <BiSitemap /> </div>
          <h1 className="text-xl font-bold">Introdução ao site</h1>
        </div>
        <p className="text-gray-600 p-5">Aqui vamos apresentar ao professor o conteúdo do site, isto é, os temas de matemática previstos e as atividades a serem desenvolvidas tanto em sala de aula com os alunos como aquelas referentes ao projeto dos estudantes.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white custom-border p-4 rounded-md shadow-md transition-transform hover:scale-105">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-2xl"> <MdOutlineHomeWork /> </div>
          <h1 className="text-xl font-bold">Atividade do Projeto</h1>
        </div>
        <p className="text-gray-600 p-5">O foco desta seção é detalhar as atividades a serem executadas, tanto por alunos quanto por professores, dentro do projeto, oferecendo explicações e ferramentas para seu desenvolvimento.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-4 custom-border rounded-md shadow-md transition-transform hover:scale-105">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-2xl"> <TbMathSymbols /> </div>
          <h1 className="text-xl font-bold">Matemática e Educação Financeira</h1>
        </div>
        <p className="text-gray-600 p-5">Materiais selecionados contextualizando Educação Financeira e Matemática. A curadoria do mesmo foi pensada visando auxiliar seu trabalho em sala de aula e os temas estão organizados de acordo com a sequência do Livro do Estudante.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-4 custom-border rounded-md shadow-md transition-transform hover:scale-105">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-2xl"> <AiOutlineBook /> </div>
          <h1 className="text-xl font-bold">Recursos Didáticos</h1>
        </div>
        <p className="text-gray-600 p-5">Aqui vamos apresentar ao professor o conteúdo do site, isto é, os temas de matemática previstos e as atividades a serem desenvolvidas em sala de aula com os alunos, como aquelas referentes ao projeto dos estudantes.</p>
      </div>

      {/* Card 6 */}
      <div className="bg-white custom-border p-4 rounded-md shadow-md transition-transform hover:scale-105 md:col-span-2 relative">
        <div className="hidden lg:block bg-image-card-2 absolute inset-0" style={{ backgroundImage: "url('/images/teste-ilustra2.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="flex items-center mb-2 relative z-10">
          <div className="mr-2 text-2xl"> <PiStepsDuotone /> </div>
          <h1 className="text-xl font-bold">Etapas do Projeto</h1>
        </div>
        <p className="text-gray-600 p-5 relative z-10">Esta seção, presente apenas neste primeiro site, apresentará as Etapas do Projeto, que são as ações de desenvolvimento do projeto utilizadas por alunos e professores para organizar o desenvolvimento do programa.</p>
      </div>
    </div>
  );
};

export default CardList;
