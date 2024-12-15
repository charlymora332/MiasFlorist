/**
 * Componente MetodosPago
 * 
 * Este componente se encarga de mostrar los métodos de pago disponibles en la aplicación.
 * Utiliza un subtítulo personalizado y una serie de imágenes de métodos de pago, que se 
 * obtienen de un array de objetos. Cada imagen de método de pago se presenta en un contenedor 
 * flexible, con estilo responsivo, para ser visualizado correctamente en diferentes tamaños 
 * de pantalla.

 * 
 * @returns JSX para una sección de métodos de pago visualmente atractiva y responsiva.
 */
import React from 'react';
import SubTitulo from './SubTitulo';
import metodosPago from '../assets/metodosPago/metodosPago';

function MetodosPago() {
  return (
    <div className='flex w-full flex-col gap-12 pb-16 pt-4 mv:pt-32'>
      <span className=''>
        <SubTitulo
          antes={'Our ' }
          despues={'payment methods'}
          estilosCirculos={'!bg-ffaa01'}
        />
      </span>

      <div className='h-auto w-full flex-grow overflow-hidden px-4'>
        <div className='flex flex-wrap justify-around gap-y-12'>
          {metodosPago.map((img, index) => (
            <img
              key={index}
              src={img.img}
              alt={img.alt}
              className='h-auto w-20 object-contain mv:w-1/3 mv:px-8'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MetodosPago;
