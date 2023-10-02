import React from 'react';
import { MdOutlineHomeWork } from 'react-icons/md';
import { TbMathSymbols } from 'react-icons/tb';
import { AiOutlineBook } from 'react-icons/ai';
import { PiStepsDuotone } from 'react-icons/pi';
import { BiSitemap, BiSlideshow } from 'react-icons/bi';

const CardList = () => {
  const cards = [
    { title: 'Como os sites estão estruturados?', icon: <BiSlideshow />, content: 'Pensando em tornar o ambiente virtual padronizado e facilitar a busca por informações, os sites são organizados em seções. Conheça-as nos cards desta seção.' },
    { title: 'Introdução ao site', icon: <BiSitemap />, content: 'Aqui vamos apresentar ao professor o conteúdo do site, isto é, os temas de matemática previstos e as atividades a serem desenvolvidas tanto em sala de aula com os alunos como aquelas referentes ao projeto dos estudantes.' },
    { title: 'Atividade do Projeto', icon: <MdOutlineHomeWork />, content: 'O foco desta seção é detalhar as atividades a serem executadas, tanto por alunos quanto por professores, dentro do projeto, oferecendo explicações e ferramentas para seu desenvolvimento.' },
    { title: 'Matemática e Educação Financeira', icon: <TbMathSymbols />, content: 'Materiais selecionados contextualizando Educação Financeira e Matemática. A curadoria do mesmo foi pensada visando auxiliar seu trabalho em sala de aula e os temas estão organizados de acordo com a sequência do Livro do Estudante.' },
    { title: 'Recursos Didáticos', icon: <AiOutlineBook />, content: 'Aqui vamos apresentar ao professor o conteúdo do site, isto é, os temas de matemática previstos e as atividades a serem desenvolvidas em sala de aula com os alunos, como aquelas referentes ao projeto dos estudantes.' },
    { title: 'Etapas do Projeto', icon: <PiStepsDuotone />, content: 'Esta seção, presente apenas neste primeiro site, apresentará as Etapas do Projeto, que são as ações de desenvolvimento do projeto utilizadas por alunos e professores para organizar o desenvolvimento do programa.' },
    
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-md shadow-md transition-transform hover:scale-105"
        >
          <div className="flex items-center mb-2">
            <div className="mr-2 text-2xl"> {card.icon} </div> {/* Aumenta o tamanho do ícone */}
            <h1 className="text-xl font-bold">{card.title}</h1>
          </div>
          <p className="text-gray-600">{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;