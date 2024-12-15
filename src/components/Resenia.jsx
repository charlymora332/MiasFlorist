import React from "react";

function Resenia({ img, imgAlt, titulo, texto, autor, id }) {
  return (
    <div
      className={`relative aspect-[6/5] h-auto w-full  max-w-[300px] mx-auto rounded-3xl flex flex-col items-center justify-end 
      `}
    >
      {/* Imagen */}

      <img
        src={img}
        alt={imgAlt}
        className={`absolute z-50 top-0 ${
          id % 2 !== 0 ? "bg-f6dcdc" : "bg-white "
        } h-[30%] w-[auto]  aspect-square border-4 border-white rounded-full`}
      />
      <div
        className={` w-full h-[80%]    rounded-3xl flex flex-col items-center justify-around  px-6  mv:py-8   ${
          id % 2 !== 0 ? "bg-f6dcdc" : "bg-white border border-[e4e4e4]"
        }`}
      >
        {/* Contenedor de texto */}
        <div className="flex flex-col px-4 h-max w-full text-center  ">
          {/* Título con truncado */}
          <h4 className="style-4 !text-xl truncate mv:!text-2xl">{titulo}</h4>

          {/* Texto descriptivo con wrapping */}
          <p className="style-1 w-full !text-sm !font-light break-words mv:!text-xl">
            {texto}
          </p>
        </div>

        {/* Autor */}
        <h5 className="style-4 text-center !text-xl mt-2 mv:!text-2xl">{autor}</h5>
      </div>
    </div>
  );
}

export default Resenia;
