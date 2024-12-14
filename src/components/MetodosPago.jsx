import React from "react";
import SubTitulo from "./SubTitulo";
import metodosPago from "../assets/metodosPago/metodosPago";
function MetodosPago() {
  return (
    <div className="w-full  pt-4 pb-16 flex flex-col gap-12">
      <span className="">
        <SubTitulo
          antes={"Our "}
          despues={"payment methods"}
          estilosCirculos={"!bg-ffaa01"}
        />
      </span>

      <div className="h-auto w-full overflow-hidden px-4 flex-grow ">
        <div className="flex flex-wrap justify-around">
          {metodosPago.map((img, index) => (
            <img
              key={index}
              src={img.img}
              alt={img.alt}
              className="w-20 h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MetodosPago;
