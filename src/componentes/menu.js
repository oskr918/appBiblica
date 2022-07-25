import React from 'react'
import {NavLink} from 'react-router-dom'
const Menu = () => {
  return (
    <>
  <div className="top-nav">
    <div className='contenedor-icon'>
      <img className='icon' src={require('../imagenes/biblia.png')} alt='biblia'></img>
      <h3>La Verdad en Amor</h3>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li><NavLink to='/'>Inicio</NavLink></li>
      <li><NavLink to='/biblia'>Biblia</NavLink></li>
      <li>Libros</li>
      <li>Radio</li>
      <li>Registrarse</li>
    </ul>
  </div>
    </>
  )
}

export default Menu