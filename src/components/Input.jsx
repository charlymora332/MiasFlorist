import React, { useState } from 'react';

const ValidatedInput = ({
  type = "text", // Tipo de input: texto, email, contraseña, etc.
  name = "input", // Nombre del campo
  placeholder = "", // Texto de marcador
  value = "", // Valor inicial
  required = false, // Indica si es obligatorio
  pattern, // Patrón de validación (opcional)
  minLength, // Longitud mínima (opcional)
  maxLength, // Longitud máxima (opcional)
  onChange, // Función para manejar el cambio
  errorMessage = "Invalid input", // Mensaje de error personalizado
}) => {
  const [error, setError] = useState("");

  // Manejar el cambio de valor del input
  const handleChange = (e) => {
    const { value } = e.target;

    // Validar si cumple los requisitos
    if (required && !value) {
      setError("This field is required");
    } else if (pattern && !new RegExp(pattern).test(value)) {
      setError(errorMessage);
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
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange}
        className={`border rounded-3xl p-2 focus:outline-none placeholder:style-2 placeholder:font-thin placeholder:text-base ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default ValidatedInput;
