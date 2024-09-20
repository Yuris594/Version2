/*
const Iniciar = async (usuario, clave) => {
    const response = await fetch(`http://172.20.20.3:8001/usuarios/listar/${usuario}/${clave}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
    
};

export default Iniciar;
*/

import Inicio from '@/app/start/page'
import React from 'react'

const page = () => {
  return (
    <div>
      <Inicio />
    </div>
  )
}

export default page