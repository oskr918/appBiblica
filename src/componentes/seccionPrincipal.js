import React from 'react'
import {NavLink} from 'react-router-dom'
const SeccionPrincipal = () => {
  return (
    <div className='contenedor-principal'>
        <img className='imagen-principal' src={require('../imagenes/estudiantes.png')} alt='estudiantes'/>
        <div>
            <h1>La Biblia online</h1>
            <p> Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero,</p>
            <p> y a Jesucristo, a quien has enviado.</p>
            <p>Juan 17:3</p>
            <button className='btn-borde active'><NavLink to='/biblia'>Comenzar</NavLink></button>
        </div>
    </div>
  )
}

export default SeccionPrincipal