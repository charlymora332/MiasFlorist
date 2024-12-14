import React from "react";

function TextoImg({img, imgAlt,texto, estilosLetra}) {
  return (
    <div className="flex flex-row h-10 items-center gap-2 ">
      <img src={img} alt={imgAlt} className="w-5" />
      <h6 className={`style-5 !font-extrabold ${estilosLetra}`}>{texto}</h6>
    </div>
  );
}

export default TextoImg;
