import React, { useState, useEffect } from "react";
import Productos from "./Productos";
import productos2 from "../assets/productos/BF773-11KL_Rsd.png";
import productos from "../assets/productos/productos";
import Slider from "react-slick"; // Importa la librería de slick-carousel
import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
import iconoNext from "../assets/SliderPrincipal/iconoNext.png";
import iconoBack from "../assets/SliderPrincipal/iconoBack.png";

const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext}
      alt="→"
      className="  rounded-full cursor-pointer h-8 w-max mv:hidden"
      onClick={onClick}
    />
  );
};

// Flecha personalizada para anterior
const FlechaAnterior = ({ onClick }) => {
  return (
    <img
      src={iconoBack}
      alt="←"
      className="    rounded-full cursor-pointer h-8 w-max mv:hidden"
      onClick={onClick}
    />
  );
};

function SliderProductos({ children, anchoEle = '310',  }) {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice activo
  const sliderRef = React.useRef(null); // Referencia al slider
  const [cantidadProductos, setCantidadProductos] = useState(1);

  // Función para ajustar cantidadProductos dependiendo del ancho de la pantalla
  const pantallaRedimensionada = () => {
    const width = window.innerWidth;
    const productoAncho = anchoEle; // Ancho fijo de cada producto

    // Calculamos cuántos productos caben en la pantalla
    const productosEnPantalla = Math.floor(width / productoAncho);

    // Aseguramos que siempre se muestre al menos 1 producto
    // También evitamos que se muestren demasiados productos (como 10 en pantallas grandes)
    setCantidadProductos(Math.min(Math.max(productosEnPantalla, 2), 5));
  };
  // Usar useEffect para escuchar cambios en el tamaño de la ventana
  useEffect(() => {
    pantallaRedimensionada();
    window.addEventListener("resize", pantallaRedimensionada);

    return () => {
      window.removeEventListener("resize", pantallaRedimensionada);
    };
  }, []);

  // Configuración del slider
  const configuracionSlider = {
    dots: false, // Deshabilitamos los puntos automáticos de slick
    infinite: true,
    speed: 500,
    slidesToShow: cantidadProductos,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    nextArrow: <FlechaSiguiente />,
    prevArrow: <FlechaAnterior />,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next); // Cambiar el índice activo antes de cada cambio
    },
  };

  const handleDotClick = (index) => {
    // Cambiar el slider al índice seleccionado al hacer clic en un punto
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index); // Actualizar el índice activo
  };

  return (
    <div>
      {/* <Productos id={} img={} imgAlt={} nombre={}  dolar={} cent={} precioNormal={} /> */}
      <div className="relative w-full h-full mx-auto text-center ">
        <div>
          <div className="w-full items-center flex flex-row justify-around">
            <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
            <div className="w-11/12 ">
              <Slider {...configuracionSlider} ref={sliderRef}>
                {children}
              </Slider>
            </div>
            <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
            </div>
            <div className=" mx-auto">
              <ul className="relative  mx-auto flex flex-row w-max my-8 gap-2">
                {productos.map((_, index) => (
                  <li
                    key={index}
                    onClick={() => handleDotClick(index)} // Cambia la imagen al hacer clic
                    className={`w-3 h-3  rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                      index === activeIndex ? "bg-f7527a " : "bg-[#E4E4E4]"
                    }`}
                  />
                ))}
              </ul>
            </div>
         
        </div>

        <div className="absolute right-4 bottom-20"></div>
      </div>
    </div>
  );
}

export default SliderProductos;
