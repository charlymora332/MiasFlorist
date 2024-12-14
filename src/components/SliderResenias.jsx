import React, { useState } from "react";
import Slider from "react-slick"; // Importa la librería de slick-carousel
import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
import sliderImages from "../assets/SliderPrincipal/imagenes"; // Importa las imágenes
import iconoNext from "../assets/SliderPrincipal/iconoNext.png";
import iconoBack from "../assets/SliderPrincipal/iconoBack.png";
import Resenia from "./Resenia";
import reseniasArray from "../assets/productos/resenias";
import BtnOrange from "./BtnOrange";
// Flecha personalizada para siguiente
const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext}
      alt="→"
      className=" aspect-square rounded-full cursor-pointer h-full w-max"
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
      className="  aspect-square  rounded-full cursor-pointer h-full w-max"
      onClick={onClick}
    />
  );
};

const SliderPrincipal = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice activo
  const sliderRef = React.useRef(null); // Referencia al slider

  // Configuración del slider
  const configuracionSlider = {
    dots: false, // Deshabilitamos los puntos automáticos de slick
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000000,

    nextArrow: (
      <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
    ),
    prevArrow: <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />,
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
    <div className="relative w-full h-full mx-auto text-center ">
      <div className="flex flex-row justify-center items-center relative mb-8 ">
        <div className="style-4 !text-3xl flex flex-row space-x-2  justify-center items-center">
          <h3 className="!text-f7527a"> ⭐⭐⭐⭐⭐(5-Star)</h3>{" "}
          <h3 className="">Reviews on Google my Business</h3>{" "}
        </div>
        <div className=" h-12 flex justify-center space-x-2 bg-f7527a rounded-full absolute right-20  top-1/2 -translate-y-1/2 w-max py-2 px-2">
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <div className="flex flex-row w-full justify-center items-center">
        <div className="w-1/12 p-6 aspect-square ">
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
        </div>

        <div className="w-10/12">
          <Slider {...configuracionSlider} ref={sliderRef} className="bg-red-50">
            {reseniasArray.map((resenia, index) => (
              <Resenia
                id={resenia.id}
                img={resenia.img}
                imgAlt={resenia.imgAlt}
                titulo={resenia.titulo}
                texto={resenia.texto}
                autor={resenia.autor}
              />
            ))}
          </Slider>
        </div>
        <div className="w-1/12 p-6 aspect-square">
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>

      <div className="  flex flex-col justify-center items-center">
        <div className=" bottom-0 right-20  z-30 flex flex-row my-6">
          <ul className=" relative mx-auto flex flex-row gap-2">
            {reseniasArray.map((_, index) => (
              <li
                key={index}
                onClick={() => handleDotClick(index)} // Cambia la imagen al hacer clic
                className={`w-2 h-2  rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "bg-f7527a scale-150" : "bg-[#E4E4E4]"
                }`}
              />
            ))}
          </ul>
        </div>

        <div className="w-56">
          <BtnOrange texto={"Write a review"} />
        </div>

        {/* Contenedor para las flechas personalizadas */}
      </div>
      {/* Puntos distribuidos en círculo */}
    </div>
  );
};

export default SliderPrincipal;
