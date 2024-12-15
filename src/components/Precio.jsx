/**
 * Componente Precio
 * 
 * Muestra un precio en dólares con el símbolo "$". Permite personalizar el estilo 
 * de la imagen del icono y el texto (dólares y centavos) para su reutilización.
 * 
 * Props:
 * - `dolar`: Valor en dólares (requerido).
 * - `cent`: Centavos (opcional, por defecto '00').
 * - `estilosimg`: Estilo para el icono de dólares (opcional).
 * - `estilosTextoGrande`: Estilo para los dólares (opcional).
 * - `estilosTextoPequenio`: Estilo para los centavos (opcional).
 */
import React from 'react';
import iconoPesos from '../assets/header/iconoPesos.png';

function Precio({
  dolar,
  cent = '00',
  estilosimg = ' h-[60px] mb-3.5 ',
  estilosTextoGrande = '!text-60  ',
  estilosTextoPequenio = 'text-48   ',
}) {
  return (
    <div className='flex -skew-x-12 items-end font-font-sf-pro-display-black-italic font-black text-f7527a'>
      <img src={iconoPesos} alt='$' className={`${estilosimg} py-1`} />
      <h5 className={`${estilosTextoGrande} `}>{dolar},</h5>
      <h6 className={`${estilosTextoPequenio}`}>{cent}</h6>
    </div>
  );
}

export default Precio;
