import React, { useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function CarouselHere() {
  const slides = [
    {
      image: '/images/postit.png',
      title: 'Introdução ao Site',
    },
    {
      image: '/images/doguin.png',
      title: 'Atividade do Projeto',
    },
    {
      image: '/images/howmuch.png',
      title: 'Matemática e Educação Financeira',
    },
    {
      image: '/images/teachs.png',
      title: 'Recursos Didáticos',
    },
    {
      image: '/images/books.png',
      title: 'As Etapas do Projeto',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
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
      <h1 className='font-bold text-4xl py-10 text-center'>Como os sites estão estruturados?</h1>
      <div className="relative">
        
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.image} alt={`Image ${index}`} />
              <h2 className="text-2xl font-semibold text-center text-gray-600">{slide.title}</h2>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default CarouselHere;
