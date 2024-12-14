import React from "react";
import { Link } from "react-router-dom";
import logoMiasFlorist from "../assets/header/logoMiasFlorist.svg";
import iconoTelefono from "../assets/header/iconoTelefono.png";
import iconoDireccion from "../assets/header/iconoDireccion.png";
import iconoCarrito from "../assets/header/iconoCarrito.png";
import iconoBuscar from "../assets/header/iconoBuscar.png";
import moduleName from "./TextoImg";
function header() {
  return (
    <header className="h-36 w-full  bg-white px-16 pb-5 shadow-shadow-inferio fixed top-0 left-0 z-50 ">
      <div className="flex flex-row justify-between h-2/3 items-center pt-2">
        <div className="flex flex-row h-10 items-center ">
          <img src={iconoTelefono} alt="iconoTelefono" className="h-5" />
          <h6 className="style-5 !font-extrabold">+1(800)312 - 2121</h6>
        </div>

      



        <div className="w-max h-full">
          <img
            src={logoMiasFlorist}
            alt="logo Mias Florist"
            className="h-full mx-auto "
          />
        </div>


        <div className="flex flex-row h-10 items-start ">
          <img src={iconoDireccion} alt="icono Direccion" className="h-5" />
          <h6 className=" style-5 !font-extrabold">
            172 14th Street, Office 503,
            <br /> NY
          </h6>
        </div>
      </div>

      <div className="flex flex-row justify-between content-center items-center h-1/3 ">
        <div className="style-2 !text-131313  flex gap-8 w-1/3">
          <Link to="" aria-label="Home">
            Home
          </Link>
          <Link to="" aria-label="Products">
            Products
          </Link>
          <Link to="" aria-label="About">
            About
          </Link>
          <Link to="" aria-label="Contact">
            Contact
          </Link>
        </div>

        <div className=" flex items-center h-2/3 w-1/3 justify-center ">
          <div className="relative flex flex-row h-full w-3/5 ">
            <input
              type="text"
              placeholder="Searh"
              className="rounded-full w-full bg-f5f5f5     placeholder:text-131313 px-3 h-full"
            />
            <img
              src={iconoBuscar}
              alt="icono Buscar"
              className="absolute right-2 h-full py-1 "
            />
          </div>
        </div>

        <div className="flex flex-row items-end gap-4 w-1/3 justify-end">
          <div className=" flex flex-row gap-2">
            <div className="border-2 border-black w-2 h-3  "></div>
            <div className="border-2 border-black w-2 h-3  "></div>
            <div className="border-2 border-black w-2 h-3  "></div>
          </div>

          <div className="h-8 px-3 rounded-full flex flex-row bg-f6dcdc  items-center">
            <img src={iconoCarrito} alt="icono Carrito" className="h-6" />
            <h6 className="bg-ffaa01 rounded-full min-w-6 h-6 items-center text-center font-bold  font">
              0
            </h6>
          </div>

          <div className=" flex flex-col gap-2">
            <div className=" rounded-full bg-black w-2 h-2  "></div>
            <div className=" rounded-full bg-black w-2 h-2  "></div>
            <div className=" rounded-full bg-black w-2 h-2  "></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
