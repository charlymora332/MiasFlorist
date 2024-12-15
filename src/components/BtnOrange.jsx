import React from 'react';

/**
 * Componente de botón estilizado con fondo naranja.
 * Recibe un prop 'texto' que se muestra dentro del botón.
 * El botón tiene un fondo de color naranja y un texto en color oscuro.
 * Utiliza clases de Tailwind CSS para el estilo, con soporte para tamaños responsivos.
 * 
 * @param {string} texto - El texto que se muestra dentro del botón.
 * @returns {JSX.Element} - Un botón estilizado con el texto pasado como prop.
 */

function BtnOrange({ texto }) {
  return (
    <h1 className=' w-full cursor-pointer rounded-full  bg-ffaa01 px-12 py-3 text-center !font-bold text-131313 mv:py-4 mv:!text-2xl mv:px-2 '>
      {texto}
    </h1>
  );
}

export default BtnOrange;
