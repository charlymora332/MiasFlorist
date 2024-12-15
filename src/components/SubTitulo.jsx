import React from "react";

function SubTitulo({ antes, despues, estilosPrinc, estilosCirculos, estilosLetra }) {
  return (
    <div className={`relative flex flex-row text-3xl font-semibold text-center w-full justify-center gap-1 ${estilosPrinc}`}>
      {/* Contenedor principal con rotación */}
      <div className="inline-block w-6   h-auto transform rotate-[16deg]">
        {/* Bolitas a la izquierda */}
        <span className={`absolute right-0 bottom-3.5 w-1.5 h-1.5 bg-f7527a rounded-full ${estilosCirculos}`}></span>
        <span className={`absolute right-3 bottom-3.5 w-1.5 h-1.5 bg-f7527a rounded-full ${estilosCirculos}`}></span>
      </div>

      {/* Título central */}
      <h4 className={`style-5 !text-3xl ${estilosLetra}`}>
        {antes} <b>{despues}</b>
      </h4>

      {/* Bolitas a la derecha y contenedor rotado */}
      <div className="inline-block w-6 h-auto transform -rotate-[16deg]">
        <span className={`absolute left-0 bottom-3.5 w-1.5 h-1.5 bg-f7527a rounded-full ${estilosCirculos}`}></span>
        <span className={`absolute left-3 bottom-3.5 w-1.5 h-1.5 bg-f7527a rounded-full ${estilosCirculos}`}></span>
      </div>
    </div>
  );
}

export default SubTitulo;



// import React from "react";

// function SubTitulo({ antes, despues,estilosPrinc, estilosCirculos }) {
//   return (
//     <div className="relative flex flex-row text-3xl font-semibold text-center w-full justify-center gap-12">
//       {/* Contenedor principal con rotación */}
//       <div className=" inline-block w-12 h-auto  transform rotate-[16deg]">
//         {/* Bolitas a la izquierda */}
//         <span className=" absolute -right-1 bottom-2 w-2 h-2 bg-f7527a rounded-full"></span>
//         <span className=" absolute right-2 bottom-2 w-2 h-2 bg-f7527a rounded-full"></span>
//         </div>
        
//         {/* Título central */}
//         <h4 className="style-5 !text-3xl">
//           {antes} <b>{despues}</b>
//         </h4>
//         <div className=" inline-block w-12 h-auto  transform -rotate-[16deg]">
//         {/* Bolitas a la izquierda */}
//         <span className=" absolute -left-1 bottom-2 w-2 h-2 bg-f7527a rounded-full"></span>
//         <span className=" absolute left-2 bottom-2 w-2 h-2 bg-f7527a rounded-full"></span>
//         </div>
//         {/* Bolitas a la derecha */}
        
      
//     </div>
//   );
// }

// export default SubTitulo;
