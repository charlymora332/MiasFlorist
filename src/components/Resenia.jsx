/**
 * Componente Resenia
 * 
 * Este componente se utiliza para mostrar una reseña con una imagen de autor, un título, un texto descriptivo y el nombre del autor. 
 * Se utiliza para mostrar opiniones o comentarios de clientes, usuarios o expertos.
 * 
 * Props:
 * - `img`: URL de la imagen del autor o imagen destacada (requerido).
 * - `imgAlt`: Texto alternativo para la imagen (requerido).
 * - `titulo`: Título de la reseña o comentario (requerido).
 * - `texto`: Contenido textual de la reseña (requerido).
 * - `autor`: Nombre del autor de la reseña (requerido).
 * - `id`: Identificador único del componente para aplicar un estilo alternativo en la estructura (requerido).
 */
import React from 'react';

function Resenia({ img, imgAlt, titulo, texto, autor, id }) {
  return (
    <div
      className={`relative mx-auto flex aspect-[6/5] h-auto w-full max-w-[300px] flex-col items-center justify-end rounded-3xl`}
    >
      {/* Imagen */}
      <img
        src={img}
        alt={imgAlt}
        className={`absolute top-0 z-50 ${id % 2 !== 0 ? 'bg-f6dcdc' : 'bg-white'} aspect-square h-[30%] w-[auto] rounded-full border-4 border-white`}
      />
      <div
        className={`flex h-[80%] w-full flex-col items-center justify-around rounded-3xl px-6 mv:py-8 ${
          id % 2 !== 0 ? 'bg-f6dcdc' : 'border border-[e4e4e4] bg-white'
        }`}
      >
        {/* Contenedor de texto */}
        <div className='flex h-max w-full flex-col px-4 text-center'>
          {/* Título con truncado */}
          <h4 className='style-4 truncate !text-xl mv:!text-2xl'>{titulo}</h4>

          {/* Texto descriptivo con wrapping */}
          <p className='style-1 w-full break-words !text-sm !font-light mv:!text-xl'>
            {texto}
          </p>
        </div>

        {/* Autor */}
        <h5 className='style-4 mt-2 text-center !text-xl mv:!text-2xl'>
          {autor}
        </h5>
      </div>
    </div>
  );
}

export default Resenia;
