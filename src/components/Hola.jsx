import React from 'react';
import Slider from 'react-slick'; // Importar la librería
import 'slick-carousel/slick/slick.css'; // Importar los estilos base de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Importar los estilos del tema

const Hola = () => {
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Carrusel infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Cuántos slides se muestran a la vez
    slidesToScroll: 1, // Cuántos slides avanza por scroll
    autoplay: true, // Autoplay activado
    autoplaySpeed: 3000, // Velocidad del autoplay (milisegundos)
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <h2>¡Bienvenido al Slider!</h2>
      <Slider {...settings}>
        <div>
          <img
            src='https://via.placeholder.com/800x400?text=Slide+1'
            alt='Slide 1'
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
        <div>
          <img
            src='https://via.placeholder.com/800x400?text=Slide+2'
            alt='Slide 2'
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
        <div>
          <img
            src='https://via.placeholder.com/800x400?text=Slide+3'
            alt='Slide 3'
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hola;
