import React, { useState, useEffect } from 'react';

import productos from '../assets/productos/productos';
import Slider from 'react-slick'; // Importa la librería de slick-carousel
import 'slick-carousel/slick/slick.css'; // Estilos base de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Estilos del tema de slick-carousel
import iconoNext from '../assets/SliderPrincipal/iconoNext.png';
import iconoBack from '../assets/SliderPrincipal/iconoBack.png';

// Componente para la flecha siguiente del slider
const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext} // Imagen de la flecha siguiente
      alt='→' // Texto alternativo
      className='h-8 w-max cursor-pointer rounded-full mv:hidden' // Clases de estilo
      onClick={onClick} // Acción al hacer clic
    />
  );
};

// Componente para la flecha anterior del slider
const FlechaAnterior = ({ onClick }) => {
  return (
    <img
      src={iconoBack} // Imagen de la flecha anterior
      alt='←' // Texto alternativo
      className='h-8 w-max cursor-pointer rounded-full mv:hidden' // Clases de estilo
      onClick={onClick} // Acción al hacer clic
    />
  );
};

function SliderProductos({ children, anchoEle = '310' }) {
  // Estado que guarda el índice del producto activo en el slider
  const [activeIndex, setActiveIndex] = useState(0);
  // Referencia al slider para poder controlarlo programáticamente
  const sliderRef = React.useRef(null);
  // Estado que guarda la cantidad de productos que deben mostrarse
  const [cantidadProductos, setCantidadProductos] = useState(1);

  // Función que se ejecuta al cambiar el tamaño de la ventana
  const pantallaRedimensionada = () => {
    const width = window.innerWidth; // Obtiene el ancho de la ventana
    const productoAncho = anchoEle; // Ancho fijo de cada producto

    // Calcula cuántos productos caben en la pantalla
    const productosEnPantalla = Math.floor(width / productoAncho);

    // Asegura que siempre se muestren al menos 1 producto y un máximo de 5 productos
    setCantidadProductos(Math.min(Math.max(productosEnPantalla, 2), 5));
  };

  // useEffect para escuchar los cambios en el tamaño de la ventana y ajustar la cantidad de productos
  useEffect(() => {
    pantallaRedimensionada(); // Ejecuta la función al cargar el componente
    window.addEventListener('resize', pantallaRedimensionada); // Escucha el evento de redimensionamiento

    // Elimina el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', pantallaRedimensionada);
    };
  }, []); // Se ejecuta una vez al montar el componente

  // Configuración del slider
  const configuracionSlider = {
    dots: false, // Deshabilita los puntos de navegación automáticos
    infinite: true, // Habilita el carrusel infinito
    speed: 500, // Velocidad de transición entre diapositivas
    slidesToShow: cantidadProductos, // Número de productos a mostrar
    slidesToScroll: 1, // Número de productos a desplazar por cada acción
    autoplay: true, // Habilita la reproducción automática
    autoplaySpeed: 2000, // Velocidad de la reproducción automática
    nextArrow: <FlechaSiguiente />, // Flecha para avanzar
    prevArrow: <FlechaAnterior />, // Flecha para retroceder
    arrows: false, // Deshabilita las flechas predeterminadas de Slick
    beforeChange: (current, next) => {
      setActiveIndex(next); // Cambia el índice activo antes de cada transición
    },
  };

  // Función para cambiar el producto mostrado al hacer clic en los puntos de navegación
  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index); // Cambia al índice seleccionado
    setActiveIndex(index); // Actualiza el índice activo
  };

  return (
    <div>
      {/* Contenedor del slider de productos */}
      <div className='relative mx-auto h-max w-full pb-10 text-center'>
        <div>
          <div className='flex w-full flex-row items-center justify-around'>
            {/* Botón para retroceder */}
            <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
            <div className='w-11/12'>
              {/* Slider de productos */}
              <Slider {...configuracionSlider} ref={sliderRef}>
                {children} {/* Los productos son pasados como hijos */}
              </Slider>
            </div>
            {/* Botón para avanzar */}
            <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
          </div>
          <div className='relative mx-auto mb-10'>
            {/* Puntos de navegación (indicadores) */}
            <ul className='absolute left-1/2 z-50 my-8 flex w-max -translate-x-1/2 flex-row gap-2'>
              {children.map((_, index) => (
                <li
                  key={index} // Clave única para cada punto
                  onClick={() => handleDotClick(index)} // Cambia a la diapositiva correspondiente
                  className={`h-3 w-3 cursor-pointer rounded-full shadow-[0_0_20px_2px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out ${
                    index === activeIndex ? 'bg-f7527a' : 'bg-[#E4E4E4]'
                  }`}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className='absolute bottom-20 right-4'></div>
      </div>
    </div>
  );
}

export default SliderProductos;
