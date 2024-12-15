/**
 * Componente Productos
 * 
 * Muestra un producto con su imagen, nombre, precio y etiqueta opcional. 
 * Permite personalizar el precio, la imagen y la etiqueta del producto.
 * 
 * Props:
 * - `id`: Identificador único del producto (requerido).
 * - `img`: URL de la imagen del producto (requerido).
 * - `imgAlt`: Texto alternativo para la imagen (opcional, por defecto 'imagen de producto').
 * - `dolar`: Parte del precio en dólares (opcional, por defecto '00').
 * - `cent`: Parte del precio en centavos (opcional, por defecto '00').
 * - `nombre`: Nombre del producto (requerido).
 * - `precioNormal`: Precio original del producto (opcional).
 * - `etiqueta`: Etiqueta opcional que aparece en la esquina superior izquierda del producto (opcional).
 */
import React from 'react';
import Precio from './Precio';

function Productos({
  id,
  img,
  imgAlt = 'imagen de producto',
  dolar = '00',
  cent = '00',
  nombre,
  precioNormal,
  etiqueta,
}) {
  console.log(imgAlt, cent);
  return (
    <div className='relative z-0 mx-auto h-[20rem] w-[16rem] overflow-hidden rounded-2xl border-2 border-solid border-[#E4E4E4] bg-white mv:h-[18rem] mv:w-[14rem]'>
      {etiqueta ? (
        <div className='absolute left-2 top-2 z-50 w-max cursor-pointer rounded-full bg-ffaa01'>
          <h5 className='style-1 -skew-x-12 px-2 py-0.5 !text-sm !font-extrabold !text-white'>
            {etiqueta}
          </h5>
        </div>
      ) : null}
      <div
        className={`${
          id % 2 == 0 ? 'bg-f6dcdc' : 'bg-f5f5f5'
        } absolute z-[2] h-1/2 w-full rounded-b-2xl`}
      ></div>
      <div className='relative h-4/6 w-full'>
        <img
          src={img}
          alt={imgAlt}
          className='absolute bottom-0 left-1/2 z-30 mx-auto h-[95%] w-auto -translate-x-1/2'
        />
      </div>
      <div className='flex h-2/6 flex-col justify-between'>
        <p className='style-5 text-center !text-xl !font-extrabold'>{nombre}</p>

        <span className='mb-4 flex flex-row items-end justify-center gap-4 text-center !text-lg'>
          <Precio
            dolar={dolar}
            cent={cent}
            estilosTextoGrande='text-2xl !leading-none '
            estilosTextoPequenio='text-18 !leading-none '
            estilosimg='h-6 mb-0'
          />

          {precioNormal ? (
            <span className='relative'>
              <h5 className="style-1 mx-1 !text-xs !font-thin !text-606060 before:absolute before:bottom-[2px] before:left-0 before:h-[1px] before:w-full before:translate-y-[-8px] before:transform before:bg-606060 before:content-['']">
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
