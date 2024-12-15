import React, { useState } from 'react';
import Slider from 'react-slick'; // Importa la librería para el carrusel de imágenes
import 'slick-carousel/slick/slick.css'; // Estilos base de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Estilos del tema de slick-carousel
import sliderImages from '../assets/SliderPrincipal/imagenes'; // Importa las imágenes que se mostrarán en el slider
import iconoNext from '../assets/SliderPrincipal/iconoNext.png'; // Icono de la flecha siguiente
import iconoBack from '../assets/SliderPrincipal/iconoBack.png'; // Icono de la flecha anterior

// Componente para la flecha siguiente
const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext}
      alt='→' // Descripción del icono
      className='h-full w-max cursor-pointer rounded-full'
      onClick={onClick} // Acción que se ejecuta al hacer clic
    />
  );
};

// Componente para la flecha anterior
const FlechaAnterior = ({ onClick }) => {
  return (
    <img
      src={iconoBack}
      alt='←' // Descripción del icono
      className='h-full w-max cursor-pointer rounded-full'
      onClick={onClick} // Acción que se ejecuta al hacer clic
    />
  );
};

const SliderPrincipal = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para controlar la imagen activa
  const sliderRef = React.useRef(null); // Referencia al componente del slider

  // Configuración de slick-carousel
  const configuracionSlider = {
    dots: false, // Deshabilitar los puntos automáticos de slick
    infinite: true, // Habilitar el carrusel infinito
    speed: 500, // Velocidad de transición entre imágenes
    slidesToShow: 1, // Cuántas imágenes mostrar por vez
    slidesToScroll: 1, // Cuántas imágenes mover por vez
    autoplay: true, // Activar autoplay
    autoplaySpeed: 3000, // Tiempo entre transiciones (muy alto para pausas largas)
    nextArrow: (
      <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
    ), // Usar la flecha personalizada para el siguiente
    prevArrow: <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />, // Usar la flecha personalizada para el anterior
    arrows: false, // Deshabilitar las flechas predeterminadas
    beforeChange: (current, next) => {
      setActiveIndex(next); // Actualiza el índice activo antes de cada cambio
    },
  };

  // Función para cambiar al slide seleccionado al hacer clic en un punto
  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index); // Ir a la imagen seleccionada
    setActiveIndex(index); // Actualizar el índice activo
  };

  return (
    <div className='relative mx-auto h-full w-full text-center'>
      <div className='absolute bottom-20 h-auto w-full overflow-hidden mv:relative mv:bottom-0 mv:top-0 mv:h-[100%]'>
        <Slider {...configuracionSlider} ref={sliderRef}>
          {/* Renderiza las imágenes dentro del slider */}
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className='z-10 !flex h-[60vh] w-auto justify-center object-contain mv:relative'
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className='h-full w-auto rounded-lg object-contain mv:absolute mv:bottom-[5%] mv:h-[90%]'
              />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Contenedor de los puntos de navegación */}
      <div className='absolute bottom-20 right-4 mv:bottom-12 mv:right-16'>
        <div className='absolute bottom-0 right-20 -translate-x-1 transform'>
          <ul className='relative'>
            {/* Renderiza los puntos de navegación distribuidos en un círculo */}
            {sliderImages.map((_, index) => (
              <li
                key={index}
                onClick={() => handleDotClick(index)} // Cambia el slide al hacer clic en el punto
                className={`h-3 w-3 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
                  index === activeIndex ? 'bg-f7527a' : 'bg-white'
                }`}
                style={{
                  position: 'absolute',
                  transform: `rotate(${
                    (60 / sliderImages.length) * index
                  }deg) translateY(-5rem)`, // Distribuir los puntos en círculo
                  transformOrigin: 'center', // Mantener el centro para la rotación
                }}
              />
            ))}
          </ul>
        </div>

        {/* Contenedor de las flechas de navegación */}
        <div className='absolute bottom-0 right-12 mt-4 flex h-12 w-max justify-center space-x-2 rounded-full bg-f7527a px-2 py-2 mv:-bottom-2 mv:right-8 mv:h-16'>
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
    </div>
  );
};

export default SliderPrincipal;
