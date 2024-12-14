// images.js
import img1 from './Harvest-Roselandvasecc-2_640x_crop_center.png';
import img2 from './Grupo -5.png';
import img3 from './Grupo 9122.png';
import img4 from './Grupo 9123.png';
import img5 from './Grupo 9124.png';
import img6 from './BF773-11KL_Rsd.png';
import img7 from './HOL23_TheMulberry_DL_ARG_334_Web-(1).png';
import img8 from './ramo-rosas-blancas-rosas.png';
import img9 from './sieirfhek.png';
import img10 from './sku10951788.png';

// Función para calcular precioNormal


// Array de productos con toda la información
const productos = [
    {
        id: 1,
        img: img1,
        imgRuta: './218757 BF773-11KL_Rsd.png',
        imgAlt: 'Thanksgiving rose decoration',
        dolar: '89',
        cent: '00',
        nombre: 'Thanksgiving rose decoration',
        precioNormal: '109,00',
        etiqueta: '20% off'
      },

  {
    id: 2,
    img: img2,
    imgRuta: './186345 Grupo -5.png', // Ruta de la imagen
    imgAlt: "Lux Day Roses in Black",
    dolar: "69",
    cent: "00",
    nombre: "Lux Day Roses in Black",
    precioNormal: "89.00", // Esto será vacío si el valor es igual a dolar.cent
    etiqueta: "Discounted"
  },
  {
    id: 3,
    img: img3,
    imgRuta: './219349 Grupo 9122.png', // Ruta de la imagen
    imgAlt: "White Roses in Elegant Bouquet",
    dolar: "49",
    cent: "00",
    nombre: "White Roses Bouquet",
    precioNormal: "", // Precio vacio porque no tiene descuento
    etiqueta: ""
  },
  {
    id: 4,
    img: img4,
    imgRuta: './196699 Grupo 9123.png', // Ruta de la imagen
    imgAlt: "Elegant Pink Roses",
    dolar: "109",
    cent: "00",
    nombre: "Elegant Pink Roses",
    precioNormal: "", // No hay descuento
    etiqueta: ""
  },
  {
    id: 5,
    img: img5,
    imgRuta: './216759 Grupo 9124.png', // Ruta de la imagen
    imgAlt: "Harvest Roseland Vase",
    dolar: "39",
    cent: "00",
    nombre: "Harvest Roseland Vase",
    precioNormal: "79.00", // Igual al precio calculado
    etiqueta: "Limited Edition",
  },
  {
    id: 6,
    img: img6,
    imgRuta: './251239 Harvest-Roselandvasecc-2_640x_crop_center.png', // Ruta de la imagen
    imgAlt: "Thanksgiving Pumpkin Decoration",
    dolar: "49",
    cent: "00",
    nombre: "Thanksgiving Pumpkin Decoration", // Nombre actualizado
    precioNormal: "109,00", // Precio original actualizado
    etiqueta: "60% off", // Etiqueta de descuento
  },
  {
    id: 7,
    img: img7,
    imgRuta: './232856 HOL23_TheMulberry_DL_ARG_334_Web-(1).png', // Ruta de la imagen
    imgAlt: "Pink and White Roses",
    dolar: "129",
    cent: "00",
    nombre: "Pink and White Roses Bouquet",
    precioNormal: "129.00", // Precio normal
    etiqueta: "Popular"
  },
  {
    id: 8,
    img: img8,
    imgRuta: './136103 ramo-rosas-blancas-rosas.png', // Ruta de la imagen
    imgAlt: "White Roses with Greenery",
    dolar: "59",
    cent: "00",
    nombre: "White Roses with Greenery",
    precioNormal: "", // No hay descuento
    etiqueta: ""
  },
  {
    id: 9,
    img: img9,
    imgRuta: './126249 sieirfhek.png', // Ruta de la imagen
    imgAlt: "Colorful Roses Mix",
    dolar: "69",
    cent: "00",
    nombre: "Colorful Roses Mix",
    precioNormal: "", // No hay descuento
    etiqueta: "New"
  },
  {
    id: 10,
    img: img10,
    imgRuta: './251831 sku10951788.png', // Ruta de la imagen
    imgAlt: "Bouquet of Mixed Roses",
    dolar: "85",
    cent: "00",
    nombre: "Bouquet of Mixed Roses",
    precioNormal: "", // No hay descuento
    etiqueta: "Best Seller"
  }
];

// Modificar productos con el precioNormal vacío si es igual a "dolar.cent"
// productos.forEach(producto => {
//   const precioCalculado = calcularPrecioNormal(producto.dolar, producto.cent);
//   if (producto.precioNormal === precioCalculado) {
//     producto.precioNormal = "";  // Dejar vacío si el precio es igual al calculado
//   }
// });

// Exportando el array de productos
export default productos;
