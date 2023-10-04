import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function CarouselHere() {
  const slides = [
    {
      image: '/images/postit.png',
      title: 'Aprendizagem Baseada em Projetos',
      description: 'É uma metodologia ativa que contribui para que os jovens se engajem em tarefas e/ou desafios a fim de resolver um problema ou desenvolver um projeto que também tenha relação com sua vida fora da sala de aula. Para desenvolver o projeto, eles precisam lidar com questões interdisciplinares, tomar decisões e agir como protagonistas, trabalhando em equipe.',
    },
    {
      image: '/images/doguin.png',
      title: 'Metodologia ativas',
      description: 'São uma série de técnicas, procedimentos e processos com a finalidade de auxiliar a aprendizagem dos estudantes. São ativas porque pressupõem a realização de atividades práticas que estimulam o protagonismo dos jovens. Por meio das metodologias ativas, são trabalhadas também competências e habilidades especialmente necessárias para o século 21, como o pensamento crítico e criativo e a consciência de que há várias maneiras de realizar uma tarefa ou superar um desafio.',
    },
    {
      image: '/images/howmuch.png',
      title: 'Mapa Esquemático de Conteúdos de Matemática',
      description: 'Clicando aqui, você pode acessar o mapa que mostra os conteúdos básicos de Matemática previstos na BNCC para o Ensino Básico. Interligamos as partes que apresentam interdependência e destacamos os tópicos que se referem à Educação Financeira. Os conteúdos de anos anteriores devem ser revisitados caso ainda suscitem dúvidas entre os educandos.',
    },
    
    {
      image: '/images/books.png',
      title: 'Quadro Geral',
      description: 'Neste quadro, estão organizados os conteúdos de Matemática e Educação Financeira tratados no Livro do Estudante e as competências específicas da BNCC. Acesse aqui.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    fade: true, // Ativar o efeito de fade
    speed: 500, // Definir a velocidade da transição (em milissegundos)
    prevArrow: <CustomPrevArrow onClick={handlePreviousSlide} />,
    nextArrow: <CustomNextArrow onClick={handleNextSlide} />,
  };

  function handlePreviousSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }

  function handleNextSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }

  function CustomPrevArrow({ onClick }) {
    return (
      <button onClick={onClick} className="absolute top-1/2 left-4 -translate-y-1/4 btn btn-circle z-10 focus:outline-none">❮</button>
    );
  }

  function CustomNextArrow({ onClick }) {
    return (
      <button onClick={onClick} className="absolute top-1/2 right-4 -translate-y-1/4 btn btn-circle z-10 focus:outline-none">❯</button>
    );
  }

  return (
    <div>
      <h1 className='font-bold text-4xl py-10 text-center'>A proposta de trabalho</h1>
      <p className="text-gray-600 mt-4 px-12 text-center">A proposta deste programa é trabalhar os conteúdos de Matemática e Educação Financeira do Livro do Estudante por meio da Aprendizagem Baseada em Projetos em conjunto com outras Metodologias Ativas. Esses projetos são de curta de duração e, em conjunto com as metodologias ativas, foram pensados para desenvolver o protagonismo dos jovens. Pensando em criar uma experiência contextualizada e significativa para que os alunos construam o próprio conhecimento, o material está estruturado sobre a seguintes vertentes:</p>
      <div className="flex">
        <div className="w-2/3 py-12 px-8">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index}>
                <img src={slide.image} alt={`Image ${index}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-1/3 p-6 mx-auto my-auto">
          <h2 className="text-2xl font-semibold text-gray-600">{slides[currentSlide].title}</h2>
          <p className="text-gray-600 mt-4">{slides[currentSlide].description}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselHere;
