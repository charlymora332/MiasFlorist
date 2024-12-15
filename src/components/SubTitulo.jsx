/**
 * Componente SubTitulo
 * Este componente renderiza un subtítulo con círculos decorativos a ambos lados del texto.
 * Los círculos están rotados y posicionados de manera que dan un efecto visual de diseño único.
 * El texto principal tiene dos partes: una antes y otra después de un texto en negrita.
 * 
 * @param {Object} props - Propiedades que recibe el componente.
 * @param {string} props.antes - Texto que aparece antes de la parte en negrita.
 * @param {string} props.despues - Texto que aparece después de la parte en negrita.
 * @param {string} [props.estilosPrinc=''] - Clases de estilo para el contenedor principal.
 * @param {string} [props.estilosCirculos=''] - Clases de estilo para personalizar los círculos decorativos.
 * @param {string} [props.estilosLetra=''] - Clases de estilo para personalizar la fuente del texto.
 * 
 * @returns {JSX.Element} - Componente de subtítulo con círculos decorativos renderizado.
 */
import React from 'react';

function SubTitulo({
  antes,            // Texto que aparece antes de la parte en negrita
  despues,          // Texto que aparece después de la parte en negrita
  estilosPrinc,     // Clases de estilo para el contenedor principal
  estilosCirculos,  // Clases de estilo para personalizar los círculos decorativos
  estilosLetra,     // Clases de estilo para personalizar el texto
}) {
  return (
    <div
      className={`relative flex w-full flex-row justify-center gap-1 text-center text-3xl font-semibold ${estilosPrinc}`}
    >
      {/* Contenedor principal con rotación para los círculos a la izquierda */}
      <div className='inline-block h-auto w-6 rotate-[16deg] transform'>
        {/* Bolitas a la izquierda */}
        <span
          className={`absolute bottom-3.5 right-0 h-1.5 w-1.5 rounded-full bg-f7527a ${estilosCirculos}`}
        ></span>
        <span
          className={`absolute bottom-3.5 right-3 h-1.5 w-1.5 rounded-full bg-f7527a ${estilosCirculos}`}
        ></span>
      </div>

      {/* Título central: contiene el texto antes y después en negrita */}
      <h4 className={`style-5 !text-3xl ${estilosLetra}`}>
        {antes} <b>{despues}</b>
      </h4>

      {/* Bolitas a la derecha y contenedor rotado en sentido contrario */}
      <div className='inline-block h-auto w-6 -rotate-[16deg] transform'>
        <span
          className={`absolute bottom-3.5 left-0 h-1.5 w-1.5 rounded-full bg-f7527a ${estilosCirculos}`}
        ></span>
        <span
          className={`absolute bottom-3.5 left-3 h-1.5 w-1.5 rounded-full bg-f7527a ${estilosCirculos}`}
        ></span>
      </div>
    </div>
  );
}

export default SubTitulo;
