import React from 'react';
import Header from '../components/Header';
import BtnOrange from '../components/BtnOrange';
import Precio from '../components/Precio';
import Hola from '../components/Hola';
import SliderPrincipal from '../components/SliderPrincipal';
import p1i1 from '../assets/home/p1i1.png';
import p1i2 from '../assets/home/p1i2.png';
import p2i1 from '../assets/home/p2i1.png';
import p2i2 from '../assets/home/p2i2.png';
import { Link } from 'react-router-dom';
import SliderProductos from '../components/SliderProductos';

import productosArray from '../assets/productos/productos';
import reseniasArray from '../assets/productos/resenias';
import tarjetasArray from '../assets/SliderTarjetas/imagenes';

import Tarjetas from '../components/Tarjetas';

import Productos from '../components/Productos';

import SubTitulo from '../components/SubTitulo';

import Resenia from '../components/Resenia';

import SliderResenias from '../components/SliderResenias';

import MetodosPago from '../components/MetodosPago';

import Footer from '../components/Footer';

function home() {
  return (
    <div className='pt-36'>
      <div className='sticky top-0 z-50 h-4 w-full'>
        <Header />
      </div>
      {/* Si deseas mostrar un encabezado en todas las páginas */}
      <div className='relative'>
        <div className='h-[calc(100vh_-_9rem)] mv:h-auto'>
          <div className='relative z-10 flex h-full flex-col justify-center pl-28 mv:h-min mv:pl-10'>
            <h1 className='style-4 size'>
              {' '}
              Surprise your favorite
              <br />
              person{' '}
            </h1>
            <span className='my-8 flex flex-row'>
              <h4 className='style-1 !font-light'>
                <span className='style-1 !font-extrabold !text-f7527a'>
                  New
                </span>{' '}
                &nbsp; Rose arrangement with golden vase{' '}
              </h4>
            </span>

            <span className='flex flex-row'>
              <Precio dolar={'99'} />
            </span>
            <div className='w-56 mv:w-80'>
              <BtnOrange texto={'Shop now'} />
            </div>

            <div className='absolute right-0 top-0 -z-10 h-full w-2/3 rounded-l-[6rem] bg-f5f5f5 mv:relative mv:h-full mv:w-full'>
              <div className='absolute bottom-0 right-0 !z-30 flex h-full w-2/3 mv:relative mv:w-screen'>
                <SliderPrincipal />
              </div>

              <div className='absolute bottom-0 right-0 h-1/4 w-2/3 mv:h-1/3 mv:w-full'>
                <div className='absolute top-1/2 h-10 w-5 rounded-full border-4 border-131313 pt-0.5 mv:hidden'>
                  <div className='mx-auto h-2 w-2 rounded-full bg-131313'></div>
                </div>
                <div className='z-50 ml-6 h-full w-full rounded-l-full bg-f6dcdc mv:m-0'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-auto my-16 grid grid-cols-2 h-auto w-full  justify-center gap-8 object-contain px-8 mv:grid-cols-1'>
          <img src={p1i1} alt='40% SALE' className='w-full' />
          <img
            src={p1i2}
            alt='Happy Thanksgiving'
            className='w-full'
          />
        </div>
        <SubTitulo antes={'Top'} despues={'sellers'} estilosPrinc={'gap-2'} />
        <div className='mt-16'>
          <SliderProductos>
            {productosArray.map((producto, index) => (
              // <div
              //   key={index}
              //   className=" flex  justify-center items-end  z-50   pb-9"
              // >
              <Productos
                key={index}
                id={producto.id}
                img={producto.img}
                imgAlt={producto.imgAlt}
                nombre={producto.nombre}
                dolar={producto.dolar}
                cent={producto.cent}
                precioNormal={producto.precioNormal}
                etiqueta={producto.etiqueta}
              />
              // </div>
            ))}
          </SliderProductos>
        </div>
        <div className='relative mt-24 flex h-max w-full flex-row mv:mt-4 mv:flex-col'>
          <div className='absolute -z-10 ml-[25%] h-full w-3/4 rounded-l-2xl bg-f5f5f5 xl:m-0 xl:w-full'></div>

          <div className='flex h-auto w-full flex-col gap-8 bg-transparent pl-20 xl:flex-row xl:p-0'>
            <div className='relative flex h-72 w-1/2 flex-row items-center justify-center mv:w-full'>
              <div className='relative flex h-full w-2/5 justify-end'>
                <img
                  src={p2i1}
                  alt='Map ubication'
                  className='-bottom-6 h-full scale-[1.3] object-contain mv:scale-[1.2]'
                />
              </div>
              <div className='w-3/5 xl:w-auto'>
                <h4 className='style-2 !text-2xl font-light !text-f7527a'>
                  Flower delivery to:
                </h4>
                <h5 className='style-2 !text-lg font-light !text-606060'>
                  East Hartford, Hartford, Manchester,
                  <br />
                  Glastonbury, Bolton, Willimantic, West
                </h5>
                <Link
                  to=''
                  aria-label='Contact'
                  className='!text-f7527a underline style-2'
                >
                  Track your order.
                </Link>
              </div>
            </div>
            <div className='relative flex h-72 w-1/2 flex-row items-center justify-center mv:w-full'>
              <div className='relative flex h-full w-2/5 justify-end'>
                <img
                  src={p2i2}
                  alt='icon seguridad'
                  className='-bottom-6 h-full w-auto scale-[1.3] object-contain mv:scale-[1.2]'
                />
              </div>

              <div className='w-3/5 pl-4'>
                <h4 className='style-2 !text-2xl font-light !text-f7527a'>
                  Our schedule:
                </h4>
                <h5 className='style-2 !text-lg font-light !text-606060'>
                  From <b>09:00</b> am to <b>04:00</b> pm <br /> Monday to
                  Friday{' '}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className='pt relative mt-16 flex flex-col gap-12'>
          <div className='lg:[2/3] absolute right-0 h-full w-10/12 rounded-l-[3.5rem] bg-f6dcdc'></div>

          <span className='mt-8'>
            <SubTitulo antes={'Our '} despues={'categories'} />
          </span>

          <SliderProductos anchoEle='335'>
            {tarjetasArray.map((producto, index) => (
              <Tarjetas
                img={producto.img}
                imgAlt={producto.imgAlt}
                texto={producto.texto}
                titulo={producto.titulo}
                key={index}
              />
            ))}
          </SliderProductos>
        </div>

        <div className='pt relative mt-4 flex flex-col gap-12'>
          <span className='mt-8'>
            <SubTitulo antes={'Our '} despues={'best deals'} />
          </span>

          <SliderProductos>
            {productosArray.map((producto, index) => (
              // <div
              //   key={index}
              //   className=" flex  justify-center items-end  z-50   pb-9"
              // >
              <Productos
                key={index}
                id={producto.id}
                img={producto.img}
                imgAlt={producto.imgAlt}
                nombre={producto.nombre}
                dolar={producto.dolar}
                cent={producto.cent}
                precioNormal={producto.precioNormal}
                etiqueta={producto.etiqueta}
              />
              // </div>
            ))}
          </SliderProductos>
        </div>

        <div className='relative flex h-auto w-full flex-row'>
          <div className='absolute -z-10 h-full w-full bg-f5f5f5'></div>

          <div className='flex w-full flex-col gap-10 px-24 py-16 lg:flex-row  mv:px-4  '>
            <div className='lg:1/2 w-full'>
              <h1 className='style-4 -skew-x-12 !font-font-sf-pro-display-black-italic !text-7xl !font-black !text-ffaa01'>
                Happy
                <span className='text-[#D50C07] lg:hidden'> Thanksgiving</span>{' '}
              </h1>
              <h6 className='style-1 mb-10 mt-28 text-xs !font-normal text-606060'>
                See the best decorations for this celebration
              </h6>
              <div className='w-56'>
                <BtnOrange texto={'Shop now'} />
              </div>
            </div>

            <div className='lg:1/2 flex w-full flex-row'>
              {productosArray
                .filter((producto, index) => index === 0 || index === 5) // Filtra la imagen 1 y la 5
                .map((producto, index) => (
                  <Productos
                    key={index}
                    id={'2'}
                    img={producto.img}
                    imgAlt={producto.imgAlt}
                    nombre={producto.nombre}
                    dolar={producto.dolar}
                    cent={producto.cent}
                    precioNormal={producto.precioNormal}
                    etiqueta={producto.etiqueta}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className='pt relative mt-4 flex flex-col gap-12'>
          <span className='mt-8'>
            <SubTitulo antes={'Our '} despues={'best details'} />
          </span>

          <SliderProductos>
            {productosArray.map((producto, index) => (
              // <div
              //   key={index}
              //   className=" flex  justify-center items-end  z-50   pb-9"
              // >
              <Productos
                key={index}
                id={producto.id}
                img={producto.img}
                imgAlt={producto.imgAlt}
                nombre={producto.nombre}
                dolar={producto.dolar}
                cent={producto.cent}
                precioNormal={producto.precioNormal}
                etiqueta={producto.etiqueta}
              />
              // </div>
            ))}
          </SliderProductos>
        </div>

        <div className='relative flex flex-col gap-12 py-16 mv:mt-14'>
          <div className='relative'>
            <div className='absolute right-0 top-1/2 h-[120%] w-4/5 -translate-y-1/2 rounded-l-[5rem] bg-f5f5f5 py-56'></div>

            <SliderResenias />
          </div>
        </div>
      </div>
      <div className='w-full'>
        <MetodosPago />
      </div>
      <div className='w-full'>
        <Footer />
      </div>
      
    </div>
  );
}

export default home;
