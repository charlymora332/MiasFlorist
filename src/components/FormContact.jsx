import React, { useState } from "react";
import ValidatedInput from "./Input";
import { Link } from "react-router-dom";

function FormContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4  w-full h-max">
      {/* Nombre (mínimo 3, máximo 100) */}
      <ValidatedInput
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={100}
        label="Name"
      />
      <div className="grid xl:grid-cols-2 grid-cols-1">
        {/* Correo electrónico */}
        <ValidatedInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          label="Email"
        />

        {/* Teléfono (mínimo 6) */}
        <ValidatedInput
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          minLength={8}
          label="Phone"
        />
      </div>

      {/* Mensaje (máximo 600 caracteres) */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-xl font-bold pl-5">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={600}
          autoComplete="message"        

          className="border-[2.5px] border-[#707070] rounded-3xl p-2 px-4 focus:outline-none w-full mt-2 resize-none"
          rows="4"
          style={{ resize: "none", overflowY: "auto" }} // Agrega scroll vertical si el texto excede el área
        />
        {/* Mostrar mensaje de error si el mensaje es más largo de lo permitido */}
        {formData.message.length > 600 && (
          <span className="text-red-500 text-sm mt-1">
            Message cannot exceed 600 characters
          </span>
        )}
        {/* Validación para longitud mínima del mensaje */}
        {formData.message.length > 0 && formData.message.length < 10 && (
          <span className="text-red-500 text-sm mt-1">
            Message must be at least 10 characters long
          </span>
        )}
      </div>
      <h5 className="font-thin text-sm tv:text-xl">
        By clicking "Send" you agree to our{" "}
        <Link to="" aria-label="Terms and Conditions">
          Terms and Conditions and Privacy Policy,
        </Link>
      </h5>
      {/* Botón de envío */}
      <div className="mx-auto w-10/12 h-max">
         <button
        type="submit"
        className="bg-ffaa01 cursor-pointer rounded-full w-full  px-12  font-bold text-center text-131313 !text-2xl py-3  "
      >
    
     
        Contact Us
      </button>
      </div>
    </form>
  );
}

export default FormContact;
