
// Componente Footer de una página web que representa el pie de página para "MiasFlorist".
// Este Footer incluye varias secciones, como el logo, enlaces de navegación, un formulario de suscripción y detalles de contacto.

import React from 'react';
import logoMiasFlorist from '../assets/header/logoMiasFloristWhite.png'; 
import { Link } from 'react-router-dom'; 
import BtnOrange from './BtnOrange'; 
import iconoMail from '../assets/footer/iconoMail.png'; 
import iconoUbicacion from '../assets/footer/iconoUbicacion.png'; 
import Input from './Input'; 
import TextoImg from './TextoImg';

function Footer() {
  return (
    <div>
      {/* Sección del logo */}
      <div className='h-36 w-full bg-131313 pb-6 pt-2'>
        <img
          src={logoMiasFlorist} // Muestra el logo de la floristería
          alt='logoMiasFlorist' // Descripción para accesibilidad
          className='mx-auto h-full' // Asegura que el logo esté centrado y ocupe toda la altura disponible
        />
      </div>

      {/* Sección de contenido principal */}
      <div className='flex flex-col bg-606060 pb-10 lg:pt-8 !text-xl !text-[#FAFAFA] lg:px-20'>
        
        {/* Sección de enlaces de navegación */}
        <div className='grid w-full grid-cols-1 items-center justify-center border-b-[1px] border-f5f5f5 py-6 lg:grid-cols-3'>
          
          {/* Primer bloque de enlaces a otras páginas */}
          <div className='w flex flex-col justify-between p-6 pt-0 lg:pr-16'>
            {/* Enlaces de navegación en pantallas grandes */}
            <div className='hidden xl:grid grid-cols-3 items-center gap-y-4 divide-x-[1px] divide-f5f5f5 text-center'>
              <Link to='' aria-label='Products'>Products</Link>
              <Link to='' aria-label='About us'>About us</Link>
              <Link to='/MiasFlorist/Contact' aria-label='Contact'>Contact</Link>
              <Link to='' aria-label='Frequent questions'>Frequent questions</Link>
              <Link to='' aria-label='Visit our blog'>Visit our blog</Link>
            </div>
            {/* Botón de acceso al sistema de login */}
            <BtnOrange texto={'Login System'} />
          </div>

          {/* Segunda columna: formulario de suscripción */}
          <div className='flex flex-col justify-between gap-6 border-t-[1px] p-6 lg:border-x-[1px] lg:border-t-0 xl:px-4'>
            <h5>Subscribe for Exclusive Email Offers</h5>
            <Input placeholder={'Your Email Address'} /> {/* Campo de entrada para el correo */}
            <BtnOrange texto={'Sign me up'} /> {/* Botón para confirmar suscripción */}
          </div>

          {/* Tercera columna: información de contacto */}
          <div className='row-start-1 flex h-full w-full flex-col justify-center p-6 pl-4 lg:col-start-3 lg:mb-8 lg:border-none tv:items-center'>
            {/* Sección de ubicación */}
            <div className='flex flex-col justify-center tv:items-center'>
              <TextoImg
                img={iconoUbicacion} // Icono de ubicación
                imgAlt={'Location'} // Texto alternativo para accesibilidad
                texto={'Location'} // Texto que describe la ubicación
                estilosLetra={'!text-f5f5f5'} // Estilos de texto
              />
              <h4 className='style-2 pl-7'>
                35 Pearl St suite 103, New Britain, CT 06051
              </h4>
            </div>

            {/* Sección de correo electrónico */}
            <div className='flex flex-col justify-center tv:items-center'>
              <TextoImg
                img={iconoMail} // Icono de correo
                imgAlt={'Email'} // Texto alternativo para accesibilidad
                texto={'Email'} // Texto que describe el correo
                estilosLetra={'!text-f5f5f5'} // Estilos de texto
              />
              <a href='mailto:Info@wiseatp.com' className='style-2 pl-7'>
                Info@wiseatp.com
              </a>
            </div>
          </div>
        </div>

        {/* Sección de términos y condiciones y política de privacidad */}
        <div className='style-2 flex flex-col text-center'>
          <span>
            <Link to='' aria-label='Terms & Conditions'>
              Terms & Conditions
            </Link>
            <Link to='' aria-label='Privacy Policy'>
              Privacy Policy
            </Link>
          </span>

          {/* Información de derechos de autor y créditos */}
          <div className='container mx-auto style-2 '>
            <p>2021 Copyrigh &copy; Ingenuity & Solutions.</p>
            <p className='text-sm mt-2 style-2'>
              Developed by <span className='font-semibold'>Carlos Mora</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
