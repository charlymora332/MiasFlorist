import React from "react";
import logoMiasFlorist from "../assets/header/logoMiasFloristWhite.png"; // Ruta del archivo SVG
import { Link } from "react-router-dom";
import BtnOrange from "./BtnOrange";
import iconoMail from "../assets/footer/iconoMail.png";
import iconoUbicacion from "../assets/footer/iconoUbicacion.png";
import Input from "./Input";
import TextoImg from "./TextoImg";
import p1 from "../assets/footer/iconoUbicacion.png";

function Footer() {
  return (
    <div>
      <div className="bg-131313 w-full h-36 pt-2 pb-6">
        <img
          src={logoMiasFlorist}
          alt="logoMiasFlorist"
          className="mx-auto h-full "
        />
      </div>

      <div className="h-auto bg-606060 style-1 !text-[#FAFAFA] !text-xl flex flex-col lgpx-20 lg:pt-8 pb-10">
        <div className="w-full  grid grid-cols-1       border-b-[1px] border-f5f5f5  py-6 ls:pb-12 mb-6 grid- lg:grid-cols-3  justify-center items-center ">
          <div className="w  flex flex-col justify-between lg:pr-16   p-6 pt-0 ">
            <div className="xl:grid grid-cols-3 gap-y-4 text-center items-center  divide-x-[1px] divide-f5f5f5  hidden ">
              <Link to="" aria-label="Products">  
                Products
              </Link>
              <Link to="" aria-label="About us">
                About us
              </Link>
              <Link to="/MiasFlorist/Contact" aria-label="Contact">
                Contact
              </Link>
              <Link to="" aria-label="Frequent questions">
                Frequent questions
              </Link>
              <Link />
              <Link to="" aria-label="Visit our blog">
                Visit our blog
              </Link>
            </div>
            
            <BtnOrange texto={"Login System"} />
           
       
          </div>
          <div className="  flex justify-between flex-col xl:px-4 border-t-[1px] lg:border-x-[1px] lg:border-t-0 p-6 gap-6 ">
            <h5>Subscribe for Exclusive Email Offers</h5>
            <Input placeholder={"Your Email Address"} />
            <BtnOrange texto={"Sign me up"} />
          </div>
          <div className="w-full h-full flex flex-col justify-center tv:items-center  pl-4 row-start-1 lg:mb-8  lg:border-none lg:col-start-3 p-6  ">
            <div className="flex flex-col justify-center tv:items-center">
              <TextoImg
                img={iconoUbicacion}
                imgAlt={"Location"}
                texto={"Location"}
                estilosLetra={"!text-f5f5f5"}
              />
              <h4 className="style-2 pl-7 ">
                35 Pearl St suite 103, New Britain, CT 06051
              </h4>
            </div>

            <div className="flex flex-col justify-center tv:items-center ">
              <TextoImg
                img={iconoMail}
                imgAlt={"Email"}
                texto={"Email"}
                estilosLetra={"!text-f5f5f5"}
              />
              <a href="mailto:Info@wiseatp.com" className="style-2 pl-7 ">Info@wiseatp.com</a>
            </div>
          </div>
        </div>
        <div></div>
        <div className=" flex flex-col text-center style-2">
          <span>
            <Link to="" aria-label="Terms & Conditions">
              Terms & Conditions
            </Link>
            <Link to="" aria-label="Privacy Policy">
              Privacy Policy
            </Link>
          </span>

          <div classnama="container mx-auto style-2 ">
            <p>2021 Copyrigh &copy; Ingenuity & Solutions.</p>
            <p classnama="text-sm mt-2 style-2">
              Developed by <span classnama="font-semibold">Carlos Mora</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
