import React, { useState } from "react";
import Slider from "react-slick"; // Importa la librería de slick-carousel
import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
import sliderImages from "../assets/SliderPrincipal/imagenes"; // Importa las imágenes
import iconoNext from "../assets/SliderPrincipal/iconoNext.png";
import iconoBack from "../assets/SliderPrincipal/iconoBack.png";

// Flecha personalizada para siguiente
const FlechaSiguiente = ({ onClick }) => {
  return (
    <img
      src={iconoNext}
      alt="→"
      className="  rounded-full cursor-pointer h-full w-max"
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
      className="    rounded-full cursor-pointer h-full w-max"
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000000,
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
    <div className="relative w-full h-full mx-auto text-center  ">
      <div className="absolute bottom-20   w-full h-auto mv:bottom-0 mv:h-[100%] mv:top-0 mv:relative  overflow-hidden">
        <Slider {...configuracionSlider} ref={sliderRef}>
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className=" !flex h-[60vh]  justify-center w-auto object-contain	   z-10   mv:relative 
               "
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-auto  h-full object-contain rounded-lg mv:h-[90%] mv:absolute mv:bottom-[5%]
                 "
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute right-4 bottom-20 mv:right-16 mv:bottom-12 ">
        <div className="absolute bottom-0 right-20 transform -translate-x-1  ">
          <ul className="relative">
            {sliderImages.map((_, index) => (
              <li
                key={index}
                onClick={() => handleDotClick(index)} // Cambia la imagen al hacer clic
                className={`w-3 h-3  rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                  index === activeIndex ? "bg-f7527a " : "bg-white"
                }`}
                style={{
                  position: "absolute",
                  transform: `rotate(${
                    (60 / sliderImages.length) * index
                  }deg) translateY(-5rem)`, // Distribuir en círculo
                  transformOrigin: "center", // Hace que los puntos roten alrededor del centro
                }}
              />
            ))}
          </ul>
        </div>

        {/* Contenedor para las flechas personalizadas */}
        <div className=" h-12 flex justify-center space-x-2 bg-f7527a rounded-full mt-4 right-12 absolute bottom-0 w-max py-2 px-2 mv:h-16 mv:-bottom-2 mv:right-8">
          <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
          <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
        </div>
      </div>
      {/* Puntos distribuidos en círculo */}
    </div>
  );
};

export default SliderPrincipal;

// import React, { useState } from "react";
// import Slider from "react-slick"; // Importa la librería de slick-carousel
// import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
// import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
// import sliderImages from "../assets/SliderPrincipal/imagenes"; // Importa las imágenes

// // Flecha personalizada para siguiente
// const FlechaSiguiente = ({ onClick }) => {
//   return (
//     <div
//       className="bg-blue-500 p-3 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       →
//     </div>
//   );
// };

// // Flecha personalizada para anterior
// const FlechaAnterior = ({ onClick }) => {
//   return (
//     <div
//       className="bg-red-500 p-3 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       ←
//     </div>
//   );
// };

// const SliderPrincipal = () => {
//   const [activeIndex, setActiveIndex] = useState(0); // Estado para el índice activo

//   // Configuración del slider
//   const configuracionSlider = {
//     dots: false, // Deshabilitamos los puntos automáticos de slick
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <FlechaSiguiente />,
//     prevArrow: <FlechaAnterior />,
//     beforeChange: (current, next) => {
//       setActiveIndex(next); // Cambiar el índice activo antes de cada cambio
//     },
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto my-8 text-center">
//       <Slider {...configuracionSlider}>
//         {sliderImages.map((img, index) => (
//           <div key={index}>
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-64 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//       </Slider>

//       {/* Aquí puedes colocar los puntos donde desees, por ejemplo, debajo del slider */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
//         <ul className="flex space-x-2">
//           {sliderImages.map((_, index) => (
//             <li
//               key={index}
//               className={`w-4 h-4 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-400'}`}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SliderPrincipal;

// import React, { useRef } from "react";
// // import Slider from "react-slick"; // Importa la librería de slick-carousel
// // import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
// // import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
// // import sliderImages from "../assets/SliderPrincipal/imagenes"; // Importa las imágenes

// // // Flecha personalizada para siguiente
// // const FlechaSiguiente = ({ onClick }) => {
// //   return (
// //     <div
// //       className="bg-blue-500 p-3 rounded-full cursor-pointer"
// //       onClick={onClick}
// //     >
// //       →
// //     </div>
// //   );
// // };

// // // Flecha personalizada para anterior
// // const FlechaAnterior = ({ onClick }) => {
// //   return (
// //     <div
// //       className="bg-red-500 p-3 rounded-full cursor-pointer"
// //       onClick={onClick}
// //     >
// //       ←
// //     </div>
// //   );
// // };

// // const SliderPrincipal = () => {
// //   const sliderRef = useRef(null);  // Referencia al slider

// //   const configuracionSlider = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     autoplay: true,
// //     autoplaySpeed: 3000,
// //     nextArrow: <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />,
// //     prevArrow: <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />,
// //     appendDots: (dots) => (
// //         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
// //           <ul className="flex justify-center space-x-2">{dots}</ul>
// //         </div>
// //       ),
// //     customPaging: (i) => (
// //       <div
// //         className={`w-4 h-4 rounded-full flex items-center justify-center ${i === 0 ? 'bg-blue-500' : 'bg-gray-400'}`}
// //       >
// //         {i + 1}
// //       </div>
// //     ),
// //     arrows: false,  // Desactiva las flechas predeterminadas de slick-carousel
// //   };

// //   return (
// //     <div className="w-full max-w-4xl mx-auto my-8 text-center relative">
// //       {/* Slider */}
// //       <Slider {...configuracionSlider} ref={sliderRef}>
// //         {sliderImages.map((img, index) => (
// //           <div key={index} className="relative">
// //             <img
// //               src={img}
// //               alt={`Slide ${index + 1}`}
// //               className="w-full h-4/5 rounded-lg"
// //             />
// //           </div>
// //         ))}
// //       </Slider>

// //       {/* Contenedor para las flechas personalizadas, solo abajo */}
// //       <div className="flex justify-center space-x-4 mt-4 absolute bottom-0 w-full">
// //         <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
// //         <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default SliderPrincipal;

// import React, { useRef } from "react";
// import Slider from "react-slick"; // Importa la librería de slick-carousel
// import "slick-carousel/slick/slick.css"; // Estilos base de slick-carousel
// import "slick-carousel/slick/slick-theme.css"; // Estilos del tema de slick-carousel
// import sliderImages from "../assets/SliderPrincipal/imagenes"; // Importa las imágenes

// // Flecha personalizada para siguiente
// const FlechaSiguiente = ({ onClick }) => {
//   return (
//     <div
//       className="bg-blue-500 p-3 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       →
//     </div>
//   );
// };

// // Flecha personalizada para anterior
// const FlechaAnterior = ({ onClick }) => {
//   return (
//     <div
//       className="bg-red-500 p-3 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       ←
//     </div>
//   );
// };

// const SliderPrincipal = () => {
//   const sliderRef = useRef(null);  // Referencia al slider

//   const configuracionSlider = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />,
//     prevArrow: <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />,
//     appendDots: (dots) => (
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
//         <div className="dots-container flex justify-center space-x-2">
//           {dots}
//         </div>
//       </div>
//     ),
//     customPaging: (i) => (
//       <div
//         className={`w-4 h-4 rounded-full flex items-center justify-center ${i === 0 ? 'bg-blue-500' : 'bg-gray-400'}`}
//       >
//         {i + 1}
//       </div>
//     ),

//     arrows: false,

//     beforeChange: (current, next) => {
//         setActiveIndex(next); // Cambiar el índice activo antes de cada cambio
//       },

//     // Desactiva las flechas predeterminadas de slick-carousel
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto my-8 text-center relative">
//       {/* Slider */}
//       <Slider {...configuracionSlider} ref={sliderRef}>
//         {sliderImages.map((img, index) => (
//           <div key={index} className="relative">
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-4/5 rounded-lg"
//             />
//           </div>
//         ))}
//       </Slider>

//       {/* Contenedor para las flechas personalizadas, solo abajo */}
//       <div className="flex justify-center space-x-4 mt-4 absolute bottom-0 w-full">
//         <FlechaAnterior onClick={() => sliderRef.current.slickPrev()} />
//         <FlechaSiguiente onClick={() => sliderRef.current.slickNext()} />
//       </div>
//     </div>
//   );
// };

// export default SliderPrincipal;
