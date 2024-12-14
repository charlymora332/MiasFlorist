import React from "react";
import Header from "../components/Header";
import BtnOrange from "../components/BtnOrange";
import Precio from "../components/Precio";
import Hola from "../components/Hola";
import SliderPrincipal from "../components/SliderPrincipal";
import p1i1 from "../assets/home/p1i1.png";
import p1i2 from "../assets/home/p1i2.png";
import p2i1 from "../assets/home/p2i1.png";
import p2i2 from "../assets/home/p2i2.png";
import { Link } from "react-router-dom";
import SliderProductos from "../components/SliderProductos";

import productosArray from "../assets/productos/productos";
import reseniasArray from "../assets/productos/resenias";
import tarjetasArray from "../assets/SliderTarjetas/imagenes";

import Tarjetas from "../components/Tarjetas";

import Productos from "../components/Productos";

import SubTitulo from "../components/SubTitulo";

import Resenia from "../components/Resenia";

import SliderResenias from "../components/SliderResenias";

import MetodosPago from "../components/MetodosPago";

import Footer from "../components/Footer";

function home() {
  return (
    <div className="pt-36">
      <Header /> {/* Si deseas mostrar un encabezado en todas las páginas */}
      <div className="relative ">
        <div className=" h-[calc(100vh_-_9rem)] mv:h-auto   ">
          <div
            className="relative z-10  pl-28  flex flex-col  justify-center  h-full 
            mv:pl-10 mv:h-min"
          >
            <h1 className="style-4 size ">
              {" "}
              Surprise your favorite
              <br />
              person{" "}
            </h1>
            <span className="flex flex-row my-8">
              <h4 className="style-1 !font-light">
                <span className="style-1  !text-f7527a !font-extrabold">
                  New
                </span>{" "}
                &nbsp; Rose arrangement with golden vase{" "}
              </h4>
            </span>

            <span className="flex flex-row">
              <Precio dolar={"99"} />
            </span>
            <div className="w-56 mv:w-80">
              <BtnOrange texto={"Shop now"} />
            </div>

            <div
              className="h-full w-2/3 absolute -z-10 top-0     bg-f5f5f5 right-0 rounded-l-[6rem]
              mv:relative mv:w-full mv:h-full "
            >
              <div
                className="!z-30 absolute flex right-0 bottom-0 h-full w-2/3 
              mv:w-screen  mv:relative  "
              >
                <SliderPrincipal />
              </div>

              <div className="absolute right-0 bottom-0 h-1/4 w-2/3   mv:w-full mv:h-1/3  ">
                <div className=" absolute top-1/2  h-10 w-5 rounded-full border-4 border-131313 pt-0.5 mv:hidden">
                  <div className="bg-131313 w-2 h-2 rounded-full mx-auto"></div>
                </div>
                <div className="rounded-l-full z-50 w-full h-full bg-f6dcdc ml-6 mv:m-0"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8 h-auto w-screen my-16 px-8 mx-auto object-contain  mv:flex-col ">
          <img src={p1i1} alt="40% SALE" className="w-[50%] mv:w-full " />
          <img
            src={p1i2}
            alt="Happy Thanksgiving"
            className="w-[50%] mv:w-full "
          />
        </div>
        <SubTitulo antes={"Top"} despues={"sellers"} estilosPrinc={"gap-2"} />
        <div className="mt-16">
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
        <div className="relative w-full h-max mt-24">
          <div className="absolute -z-10 bg-f5f5f5 p-16 ml-[25%] rounded-l-2xl xl:m-0 h-full w-full"></div>

          <div className="  w-full flex flex-col xl:flex-row gap-8 pl-20 xl:p-0 h-auto bg-transparent ">
            <div className=" relative w-1/2 flex flex-row h-72">
              <div className="relative h-full w-full ">
                <img
                  src={p2i1}
                  alt="Map ubication"
                  className=" h-full -bottom-6  object-contain "
                />
              </div>
              <div className="absolute w-full xl:w-auto left-96 top-1/2 -translate-y-1/2  mv:-translate-x-2/3">
                <h4 className="style-2 !text-2xl !text-f7527a font-light">
                  Flower delivery to:
                </h4>
                <h5 className="style-2 !text-lg !text-606060 font-light">
                  East Hartford, Hartford, Manchester,
                  <br />
                  Glastonbury, Bolton, Willimantic, West
                </h5>
                <Link
                  to=""
                  aria-label="Contact"
                  className="text-f7527a underline"
                >
                  Track your order.
                </Link>
              </div>
            </div>
            <div className=" relative w-1/2 flex flex-row  h-72">
              <div className="relative h-full  w-full    ">
                <img
                  src={p2i2}
                  alt="icon seguridad"
                  className="absolute h-[125%] w-auto -bottom-6 object-contain"
                />
              </div>

              <div className="absolute w-full xl:w-auto left-[22rem] top-1/2 -translate-y-1/2 mv:-translate-x-2/3">
                <h4 className="style-2 !text-2xl !text-f7527a font-light">
                  Our schedule:
                </h4>
                <h5 className="style-2 !text-lg !text-606060 font-light">
                  From <b>09:00</b> am to <b>04:00</b> pm <br /> Monday to
                  Friday{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-12 mt-16 pt">
          <div className="absolute  right-0 h-full w-2/3 bg-f6dcdc rounded-l-[3.5rem] "></div>

          <span className=" mt-8">
            <SubTitulo antes={"Our "} despues={"categories"} />
          </span>

          <SliderProductos>
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

        <div className="relative flex flex-col gap-12 mt-4 pt">
          <span className=" mt-8">
            <SubTitulo antes={"Our "} despues={"best deals"} />
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

        <div className="relative w-full h-auto flex flex-row ">
          <div className="absolute bg-f5f5f5 w-full h-full -z-10"></div>

          <div className="flex flex-row w-full px-24 py-16 mv:flex-col ">
            <div className="w-1/2">
              <h1 className="style-4 -skew-x-12 !font-font-sf-pro-display-black-italic  !font-black !text-ffaa01 !text-7xl  ">
                Happy
              </h1>
              <h6 className="text-606060 style-1 text-xs !font-normal mt-28 mb-10">
                See the best decorations for this celebration
              </h6>
              <div className="w-56">
                <BtnOrange texto={"Shop now"} />
              </div>
            </div>

            <div className="flex flex-row w-1/2">
              {productosArray
                .filter((producto, index) => index === 0 || index === 5) // Filtra la imagen 1 y la 5
                .map((producto, index) => (
                  <Productos
                    key={index}
                    id={"2"}
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

        <div className="relative flex flex-col gap-12 mt-4 pt">
          <span className=" mt-8">
            <SubTitulo antes={"Our "} despues={"best details"} />
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

        <div className="relative flex flex-col gap-12 py-16">
          <div className=" relative">
            <div className="absolute h-[120%] w-4/5 bg-f5f5f5 right-0 rounded-l-[5rem] py-56 top-1/2 -translate-y-1/2"></div>

            <SliderResenias />
          </div>
        </div>
      </div>
      <div className="w-full">
        <MetodosPago />
      </div>
      <div className="w-full">
        <Footer />
      </div>
      {/* <SliderResenias/> */}
      {/*  */}
      {/* <div className="p-4">
        asdfasdfasdf{" "}
        <p className="style-1">
          Este es un párrafo con el estilo `style-1` aplicado.
        </p>{" "}
        <p className="style-2">
          Este es un párrafo con el estilo `style-2` aplicado.
        </p>{" "}
        <p className="style-3">
          Este es un párrafo con el estilo `style-3` aplicado.
        </p>{" "}
        <p className="style-4">
          Este es un párrafo con el estilo `style-4` aplicado.
        </p>{" "}
        <p className="style-5">
          Este es un párrafo con el estilo `style-5` aplicado.
        </p>{" "}
        <p> natalia esta vieja</p>
      </div> */}
    </div>
  );
}

export default home;
