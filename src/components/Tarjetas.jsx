import React from "react";

function Tarjetas({ img, imgAlt = "tarjet", titulo, texto }) {
  return (
    <div className="relative h-auto w-full aspect-[4/3] ">
      
   
      <img src={img} alt={imgAlt} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-auto mx-auto h-full object-contain" />
   
     
      <div className="absolute w-1/2  top-1/2 -translate-y-1/2 right-0 z-50 flex flex-col items-center justify-center h-full">
        <h4 className= " -skew-x-12 font-ultra-bold text-f7527a  text-2xl">{titulo}</h4>
        <h6 className="  style-1 !text-base">{texto}</h6>
      </div>
    </div>
  );
}

export default Tarjetas;
