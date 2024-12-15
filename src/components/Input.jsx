import React, { useState } from "react";

const Input = ({
  type = "text", // Tipo de input: texto, email, contraseña, etc.
  name = "input", // Nombre del campo
  placeholder = "", // Texto de marcador
  value = "", // Valor inicial
  required = false, // Indica si es obligatorio
  minLength, // Longitud mínima (opcional)
  maxLength, // Longitud máxima (opcional)
  onChange, // Función para manejar el cambio
  errorMessage = "Invalid input", // Mensaje de error personalizado
  label, // Etiqueta del campo
}) => {
  const [error, setError] = useState("");

  // Manejar el cambio de valor del input
  const handleChange = (e) => {
    const { value } = e.target;

    // Validar si cumple los requisitos
    if (required && !value) {
      setError("This field is required");
    } else if (type === "email" && value && !/\S+@\S+\.\S+/.test(value)) {
      setError("Please enter a valid email address");
    } else if (minLength && value.length < minLength) {
      setError(`Minimum length is ${minLength}`);
    } else if (maxLength && value.length > maxLength) {
      setError(`Maximum length is ${maxLength}`);
    } else {
      setError(""); // Sin errores
    }

    // Llamar al evento onChange si existe
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={name} className="text-xl font-bold pl-5 ">{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        placeholder={placeholder}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange}
        className={`border-[2.5px] rounded-3xl p-2 px-4 focus:outline-none placeholder:font-thin placeholder:text-base ${
          error ? "border-red-500" : "border-[#707070]"
        }`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
