import React from 'react';
import { Link } from 'react-router-dom';

import logoMiasFlorist from '../assets/header/logoMiasFlorist.svg';
import iconoTelefono from '../assets/header/iconoTelefono.png';
import iconoDireccion from '../assets/header/iconoDireccion.png';
import iconoCarrito from '../assets/header/iconoCarrito.png';
import iconoBuscar from '../assets/header/iconoBuscar.png';
import moduleName from './TextoImg';


 // Encabezado de la página 

 
function header() {
  return (
   
    <header className='fixed left-0 top-0 z-50 h-36 w-full bg-white px-16 pb-5 shadow-shadow-inferio tv:flex tv:h-24 tv:w-screen tv:flex-row tv:items-center tv:justify-between tv:p-0 tv:px-[3%]'>

      {/* Contenedor principal de la parte superior del header */}
      <div className='flex h-2/3 flex-row items-center justify-between pt-2 tv:pt-0'>
        
        {/* Información de contacto visible en pantallas pequeñas */}
        <div className='flex h-10 flex-row items-center tv:hidden'>
          <img src={iconoTelefono} alt='iconoTelefono' className='h-5' />
          <h6 className='style-5 !font-extrabold'>+1(800)312 - 2121</h6>
        </div>

        {/* Logo que redirige a la página de inicio */}
        <div className='h-full w-max tv:w-auto'>
          <Link to='/MiasFlorist' aria-label='Return home'>
            <img
              src={logoMiasFlorist}
              alt='logo Mias Florist'
              className='mx-auto h-full cursor-pointer tv:mx-1'
            />
          </Link>
        </div>

        {/* Dirección visible en pantallas pequeñas */}
        <div className='flex h-10 flex-row items-start tv:hidden'>
          <img src={iconoDireccion} alt='icono Direccion' className='h-5' />
          <h6 className='style-5 !font-extrabold'>
            172 14th Street, Office 503,
            <br /> NY
          </h6>
        </div>
      </div>

      {/* Contenedor de los enlaces de navegación y otros elementos */}
      <div className='flex h-1/3 flex-row content-center items-center justify-between tv:h-auto tv:w-auto'>
        
        {/* Enlaces de navegación visibles en pantallas grandes */}
        <div className='style-2 flex w-1/3 gap-8 !text-131313 tv:hidden'>
          <Link to='' aria-label='Home'>Home</Link>
          <Link to='' aria-label='Products'>Products</Link>
          <Link to='' aria-label='About'>About</Link>
          <Link to='/MiasFlorist/Contact' aria-label='Contact'>Contact</Link>
        </div>

        {/* Campo de búsqueda (oculto en pantallas grandes) */}
        <div className='flex h-2/3 w-1/3 items-center justify-center'>
          <div className='relative flex h-full w-3/5 flex-row'>
            <label htmlFor='Searh' className='hidden'>Searh</label>
            <input
              type='text'
              placeholder='Searh'
              id='Searh'
              className='h-full w-full rounded-full bg-f5f5f5 px-3 placeholder:text-131313 tv:hidden'
            />
            {/* Icono de búsqueda dentro del campo */}
            <img
              src={iconoBuscar}
              alt='icono Buscar'
              className='absolute right-2 h-full cursor-pointer py-1 tv:relative tv:py-4'
            />
          </div>
        </div>

        {/* Sección para el carrito de compras y el menú de navegación */}
        <div className='flex w-1/3 flex-row items-end justify-end gap-4 tv:w-auto'>
          
          {/* Íconos de barra de menú (3 líneas) visibles solo en pantallas pequeñas */}
          <div className='flex flex-row gap-2 tv:hidden'>
            <div className='h-3 w-2 border-2 border-black'></div>
            <div className='h-3 w-2 border-2 border-black'></div>
            <div className='h-3 w-2 border-2 border-black'></div>
          </div>

          {/* Ícono de carrito de compras con un contador */}
          <div className='flex h-8 cursor-pointer flex-row items-center rounded-full bg-f6dcdc px-3 tv:h-16 tv:px-5'>
            <img
              src={iconoCarrito}
              alt='icono Carrito'
              className='h-full py-1'
            />
            {/* Contador de items en el carrito */}
            <h6 className='aspect-square h-6 min-w-6 items-center rounded-full bg-ffaa01 text-center font-bold tv:h-10 tv:py-2'>
              0
            </h6>
          </div>

          {/* Íconos del menú (tres líneas) visibles solo en pantallas grandes */}
          <div className='flex cursor-pointer flex-col gap-2 tv:justify-center'>
            <div className='h-2 w-2 rounded-full bg-black tv:w-6 tv:rounded-sm'></div>
            <div className='h-2 w-2 rounded-full bg-black tv:w-10 tv:rounded-sm'></div>
            <div className='h-2 w-2 rounded-full bg-black tv:w-10 tv:rounded-sm'></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
