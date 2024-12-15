/**
 * Componente Input personalizado para formularios en React.
 * 
 * Este componente maneja la entrada de texto y valida los datos proporcionados 
 * por el usuario según una serie de reglas configurables. Se utiliza principalmente 
 * para crear campos de formulario con validaciones como:
 * - Requerido
 * - Formato de correo electrónico
 * - Longitud mínima y máxima
 * 
 * Además, maneja la visualización de mensajes de error personalizados en caso de 
 * que el usuario no cumpla con los requisitos del campo.
 *
 * El componente gestiona internamente el estado de error, validando el campo a medida que el 
 * usuario escribe, y mostrando un mensaje de error si no se cumple con las validaciones.
 * 
 * @returns JSX para un campo de entrada con las validaciones y los estilos correspondientes.
 */
import React, { useState } from 'react';

// Componente de Input personalizado
const Input = ({
  type = 'text', // Tipo de input: texto, email, contraseña, etc.
  name = 'input', // Nombre del campo
  placeholder = '', // Texto de marcador
  value = '', // Valor inicial
  required = false, // Indica si es obligatorio
  minLength, // Longitud mínima (opcional)
  maxLength, // Longitud máxima (opcional)
  onChange, // Función para manejar el cambio
  errorMessage = 'Invalid input', // Mensaje de error personalizado
  label, // Etiqueta del campo
}) => {
  // Estado local para manejar el mensaje de error
  const [error, setError] = useState('');

  // Manejar el cambio de valor del input
  const handleChange = (e) => {
    const { value } = e.target;

    // Validar si cumple los requisitos
    if (required && !value) {
      setError('This field is required'); // Error si es obligatorio y está vacío
    } else if (type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      // Validar formato de correo electrónico
      setError('Please enter a valid email address');
    } else if (minLength && value.length < minLength) {
      // Validar longitud mínima
      setError(`Minimum length is ${minLength}`);
    } else if (maxLength && value.length > maxLength) {
      // Validar longitud máxima
      setError(`Maximum length is ${maxLength}`);
    } else {
      setError(''); // Sin errores
    }

    // Llamar al evento onChange si existe
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className='flex flex-col'>
      {label && (
        // Renderizar etiqueta si se pasa una
        <label htmlFor={name} className='pl-5 text-xl font-bold'>
          {label}
        </label>
      )}
      <input
        type={type} // Tipo de input
        name={name} // Nombre del campo
        id={name} // ID del campo
        autoComplete={name} // Auto completado
        placeholder={placeholder} // Texto del placeholder
        value={value} // Valor inicial del input
        required={required} // Si es obligatorio
        minLength={minLength} // Longitud mínima
        maxLength={maxLength} // Longitud máxima
        onChange={handleChange} // Llamar a la función de cambio
        className={`rounded-3xl border-[2.5px] p-2 px-4 placeholder:text-base placeholder:font-thin focus:outline-none ${
          error ? 'border-red-500' : 'border-[#707070]' // Cambiar el borde si hay error
        }`}
      />
      {error && <span className='mt-1 text-sm text-red-500'>{error}</span>} 
      {/* Mostrar mensaje de error si existe */}
    </div>
  );
};

export default Input;
