import React from 'react'
import logo from '../../assets/img/logo.png'

export const NavBar = () => {
  return (
    <>
    <img scr={logo} alt="logo" />
    <h1>Magic Fairy Store</h1>
    <nav>
        <a href="">Polleras</a>
        <a href="">Buzos</a>
        <a href="">Accesorios</a>
        <a href="">Mochilas</a>
        <a href="">Tops</a>
    </nav>
    </>
  )
}


