import React from "react";
import Precio from "./Precio";
function Productos({
  id,
  img,
  imgAlt = "imagen de producto",
  dolar = "00",
  cent = "00",
  nombre,
  precioNormal,
  etiqueta,
}) {
  console.log(imgAlt, cent);
  return (
    <div className="relative bg-white z-0 h-[20rem] w-[16rem] border-solid rounded-2xl border-2 border-[#E4E4E4] overflow-hidden mx-auto mv:w-[14rem] mv:h-[18rem] ">
      {etiqueta ? (
        <div className="bg-ffaa01 absolute left-2 top-2 rounded-full w-max  cursor-pointer z-50">
          <h5 className="style-1 !text-sm !text-white  px-2 py-0.5 !font-extrabold -skew-x-12  ">
            {etiqueta}
          </h5>
        </div>
      ) : null}
      <div
        className={`${
          id % 2 == 0 ? "bg-f6dcdc " : "bg-f5f5f5"
        } absolute z-[2] h-1/2 rounded-b-2xl w-full `}
      ></div>
      <div className="w-full h-4/6 relative">
        <img src={img} alt={imgAlt} className="h-[95%] w-auto mx-auto bottom-0 absolute z-30 left-1/2 -translate-x-1/2" />
      </div>
      <div className=" h-2/6 flex flex-col justify-between">
        <p className="style-5  !text-xl !font-extrabold text-center">{nombre}</p>

        <span className="flex flex-row gap-4  mb-4   !text-lg justify-center items-end text-center ">
          <Precio
            dolar={dolar}
            cent={cent}
            estilosTextoGrande="text-2xl !leading-none "
            estilosTextoPequenio="text-18 !leading-none "
            estilosimg="h-6 mb-0"
          />

          {precioNormal ? (
            <span className="relative">
               <h5 className="style-1 !font-thin !text-xs !text-606060 mx-1
               before:absolute before:content-[''] before:w-full before:h-[1px] before:bg-606060 before:bottom-[2px] before:left-0 before:transform before:translate-y-[-8px]
               ">
              ${precioNormal}
            </h5>
            </span>
           
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default Productos;
