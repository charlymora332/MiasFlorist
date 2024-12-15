import React from 'react';

/**
 * Componente TextoImg
 * Este componente muestra una imagen seguida de un texto. 
 * Se utiliza para mostrar un ícono con un texto al lado, útil para iconos informativos o etiquetas.
 * 
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} props.img - URL de la imagen a mostrar.
 * @param {string} props.imgAlt - Texto alternativo para la imagen.
 * @param {string} props.texto - El texto que se mostrará junto a la imagen.
 * @param {string} props.estilosLetra - Clases adicionales de estilo para personalizar la apariencia del texto.
 * 
 * @returns {JSX.Element} - Componente renderizado con la imagen y el texto.
 */
function TextoImg({ img, imgAlt, texto, estilosLetra }) {
  return (
    // Contenedor principal usando flexbox para alinear imagen y texto horizontalmente
    <div className='flex h-10 w-max flex-row items-center justify-center gap-2'>
      {/* Imagen con clase para tamaño específico (w-5) */}
      <img src={img} alt={imgAlt} className='w-5' />
      
      {/* Texto con estilos personalizados y clases adicionales */}
      <h6 className={`style-5 !font-extrabold ${estilosLetra}`}>
        {texto} {/* Texto que se pasa como prop */}
      </h6>
    </div>
  );
}

export default TextoImg;
