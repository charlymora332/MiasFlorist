import React from 'react';

/**
 * Componente Tarjetas
 * Este componente renderiza una tarjeta con una imagen, un título y un texto.
 * La imagen se centra dentro de la tarjeta, mientras que el título y el texto se
 * posicionan en el lado derecho de la tarjeta con un efecto visual.
 * 
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} props.img - URL de la imagen a mostrar en la tarjeta.
 * @param {string} [props.imgAlt='tarjet'] - Texto alternativo para la imagen.
 * @param {string} props.titulo - Título que se mostrará en la tarjeta.
 * @param {string} props.texto - Texto que se mostrará debajo del título.
 * 
 * @returns {JSX.Element} - Componente de tarjeta renderizado.
 */
function Tarjetas({ img, imgAlt = 'tarjet', titulo, texto }) {
  return (
    // Contenedor principal de la tarjeta con relación de aspecto de 4:3
    <div className='relative aspect-[4/3] h-auto w-full'>
      {/* Imagen de la tarjeta, centrada con clases de Tailwind */}
      <img
        src={img} // URL de la imagen
        alt={imgAlt} // Texto alternativo de la imagen
        className='absolute left-1/2 top-1/2 z-10 mx-auto h-full w-auto -translate-x-1/2 -translate-y-1/2 object-contain'
       
      />

      {/* Contenedor para el texto (título y descripción) */}
      <div className='absolute right-0 top-1/2 z-50 flex h-full w-1/2 -translate-y-1/2 flex-col items-center justify-center'>
        {/* Título con un efecto de inclinación */}
        <h4 className='-skew-x-12 text-2xl font-ultra-bold text-f7527a'>
          {titulo} {/* Título de la tarjeta */}
        </h4>

        {/* Texto con un estilo personalizado */}
        <h6 className='style-1 !text-base'>
          {texto} {/* Descripción o texto debajo del título */}
        </h6>
      </div>
    </div>
  );
}

export default Tarjetas;
