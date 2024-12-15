import React, { useState, useEffect, useCallback, useRef } from 'react';
import Slider from 'react-slick'; // Importa la librería de slick-carousel
import 'slick-carousel/slick/slick.css'; // Estilos base de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Estilos del tema de slick-carousel
import sliderImages from '../assets/SliderPrincipal/imagenes'; // Importa las imágenes
import iconoNext from '../assets/SliderPrincipal/iconoNext.png';
import iconoBack from '../assets/SliderPrincipal/iconoBack.png';
import Resenia from './Resenia';
import reseniasArray from '../assets/productos/resenias';
import BtnOrange from './BtnOrange';
// Flecha personalizada para siguiente
const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext}
      alt='→'
      className='aspect-square h-full w-max cursor-pointer rounded-full mv:hidden'
      onClick={onClick}
    />
  );
};

// Flecha personalizada para anterior
const FlechaAnterior = ({ onClick }) => {
  return (
    <img
      src={iconoBack}
      alt='←'
      className='aspect-square h-full w-max cursor-pointer rounded-full mv:hidden'
      onClick={onClick}
    />
  );
};

const SliderResenias = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice activo
  const sliderRef = useRef(null); // Referencia al slider
  const [cantidadProductosH, setCantidadProductosH] = useState(1); // Cantidad de productos horizontales
  const [cantidadProductosV, setCantidadProductosV] = useState(1); // Cantidad de productos verticales
  const [isVertical, setIsVertical] = useState(false); // Estado para saber si el carrusel está en modo vertical

  const pantallaRedimensionada = useCallback(() => {
    const width = window.innerWidth; // Obtener el ancho de la pantalla
    const productoAncho = 380; // Ancho fijo de cada producto
    const productosEnPantalla = Math.floor(width / productoAncho); // Calcular cuántos productos caben en pantalla

    // Si la pantalla es más pequeña que 800px, cambiar el carrusel a modo horizontal
    if (width > 800) {
      setCantidadProductosV(Math.min(Math.max(productosEnPantalla, 1), 5));
      setIsVertical(false); // Establecer que el carrusel es horizontal
    } else {
      // Para pantallas grandes, cambiar a modo vertical
      setCantidadProductosV(3);
      setIsVertical(true); // Establecer que el carrusel es vertical
    }
  }, []);

  useEffect(() => {
    // Llamar a la función para ajustar las configuraciones del carrusel
    pantallaRedimensionada();

    // Agregar evento de redimensionamiento para cambiar el diseño dinámicamente
    window.addEventListener('resize', pantallaRedimensionada);

    return () => {
      // Limpiar el evento cuando el componente se desmonte
      window.removeEventListener('resize', pantallaRedimensionada);
    };
  }, [pantallaRedimensionada]);

  // Configuración del slider
  const configuracionSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: cantidadProductosV, // Número de productos a mostrar horizontalmente
    slidesToScroll: 1, // Número de productos a desplazar verticalmente
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
    ),
    prevArrow: <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next); // Cambiar el índice activo antes de cada cambio
    },
    vertical: isVertical, // Configurar si el slider es vertical o no
    verticalSwiping: isVertical, // Habilitar deslizamiento vertical si es necesario
  };

  return (
    <div className='relative mx-auto h-full w-full text-center'>
      <div className='relative mb-8 flex flex-row items-center justify-center'>
        <div className='style-4 flex flex-col items-center justify-center space-x-2 !text-3xl  lg:flex-row'>
          <span className='flex flex-col '>⭐⭐⭐⭐⭐</span>{' '}
          <span className=''>
            <span className='!text-f7527a'>(5-Star)</span>Reviews on Google my
          </span>
        </div>
        <div className='absolute right-20 top-1/2 flex h-12 w-max -translate-y-1/2 justify-center space-x-2 rounded-full bg-f7527a px-2 py-2 mv:hidden'>
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <div className='flex w-full flex-row items-center justify-center'>
        <div className='aspect-square w-1/12 p-6'>
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
        </div>

        <div className='w-10/12'>
          <Slider {...configuracionSlider} ref={sliderRef}>
            {reseniasArray.map((resenia) => (
              <div key={resenia.id}>
                <Resenia
                key={resenia.id}
                  id={resenia.id}
                  img={resenia.img}
                  imgAlt={resenia.imgAlt}
                  titulo={resenia.titulo}
                  texto={resenia.texto}
                  autor={resenia.autor}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className='aspect-square w-1/12 p-6'>
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className='bottom-0 right-20 z-30 my-6 flex flex-row mv:hidden'>
          <ul className='relative mx-auto flex flex-row gap-2'>
            {reseniasArray.map((_, index) => (
              <li
                key={index}
                onClick={() => handleDotClick(index)} // Cambia la imagen al hacer clic
                className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${
                  index === activeIndex ? 'scale-150 bg-f7527a' : 'bg-[#E4E4E4]'
                }`}
              />
            ))}
          </ul>
        </div>

        <div className='w-56 mv:w-11/12 mv:pt-12'>
          <BtnOrange texto={'Write a review'} />
        </div>

        {/* Contenedor para las flechas personalizadas */}
      </div>
      {/* Puntos distribuidos en círculo */}
    </div>
  );
};

export default SliderResenias;
