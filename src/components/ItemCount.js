import React, { useState } from 'react'

export const ItemCount = ({stock, aviso}) => {
  const [contador , setContador] = useState(0);

  const handlerClick = () => {
    setContador(contador + 1);
  }

  const quitar = () => {
    setContador(contador - 1);
  }

  const reset = () => {
  setContador (1);
  }

  return (
    <>
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <button onClick={handlerClick}>Agregar</button>
      <button onClick={quitar}>Quitar</button>
      <button onClick={reset}>Resetear</button>
      <button onClick={() => {aviso('tres');}}>Avisar</button>
    </>
  )
}