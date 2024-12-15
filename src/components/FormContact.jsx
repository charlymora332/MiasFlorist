import React, { useState } from 'react';
import Input from './Input'; // Componente reutilizable de Input
import { Link } from 'react-router-dom'; // Para el enlace a términos y condiciones

function FormContact() {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Función para manejar los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Mantener los datos previos
      [name]: value, // Actualizar el valor del campo modificado
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se recargue

    // Mostrar los datos del formulario en una alerta (esto debería ser reemplazado por una acción real como enviar los datos a un servidor)
    alert(`
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Message: ${formData.message}
    `);
  };

  return (
    <form onSubmit={handleSubmit} className='h-max w-full space-y-4'>
      {/* Campo para el nombre, con validación de longitud mínima y máxima */}
      <Input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
        minLength={3}
        maxLength={100}
        label='Name'
      />
      
      {/* Sección para el correo y teléfono, utilizando un grid para diseño responsivo */}
      <div className='grid grid-cols-1 xl:grid-cols-2'>
        {/* Campo para el correo electrónico */}
        <Input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          label='Email'
        />

        {/* Campo para el teléfono, con validación de longitud mínima */}
        <Input
          type='number'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
          minLength={8}
          label='Phone'
        />
      </div>

      {/* Campo para el mensaje, con validación de longitud mínima y máxima */}
      <div className='flex flex-col'>
        <label htmlFor='message' className='pl-5 text-xl font-bold'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={600}
          autoComplete='message'
          className='mt-2 w-full resize-none rounded-3xl border-[2.5px] border-[#707070] p-2 px-4 focus:outline-none'
          rows='4'
          style={{ resize: 'none', overflowY: 'auto' }} // Permite el scroll vertical si el mensaje es largo
        />
        
        {/* Mostrar mensajes de error si no se cumple con los requisitos de longitud */}
        {formData.message.length > 600 && (
          <span className='mt-1 text-sm text-red-500'>
            Message cannot exceed 600 characters
          </span>
        )}
        {formData.message.length > 0 && formData.message.length < 10 && (
          <span className='mt-1 text-sm text-red-500'>
            Message must be at least 10 characters long
          </span>
        )}
      </div>

      {/* Enlace a los términos y condiciones */}
      <h5 className='text-sm font-thin tv:text-xl'>
        By clicking "Send" you agree to our{' '}
        <Link to='' aria-label='Terms and Conditions'>
          Terms and Conditions and Privacy Policy,
        </Link>
      </h5>

      {/* Botón de envío */}
      <div className='mx-auto h-max w-10/12'>
        <button
          type='submit'
          className='w-full cursor-pointer rounded-full bg-ffaa01 px-12 py-3 text-center !text-2xl font-bold text-131313'
        >
          Contact Us
        </button>
      </div>
    </form>
  );
}

export default FormContact;
