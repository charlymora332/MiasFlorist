import React from "react";

function Tarjetas({ img, imgAlt = "tarjet", titulo, texto }) {
  return (
    <div className="relative h-48 w-auto mx-8">
      <img src={img} alt={imgAlt} className="absolute top-1/2 -translate-y-1/2  z-10 w-auto h-full object-contain" />
      <div className="absolute w-2/3 right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center justify-center h-full">
        <h4 className= " -skew-x-12 font-ultra-bold text-f7527a  text-2xl">{titulo}</h4>
        <h6 className="  style-1 !text-base">{texto}</h6>
      </div>
    </div>
  );
}

export default Tarjetas;
