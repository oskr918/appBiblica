import React from 'react'
import Capitulos from '../componentes/Capitulos'
import ListaDeLibros from '../componentes/ListaDeLibros'
import TextoBiblico from '../componentes/TextoBiblico'
import '../estilos/biblia.css'
import { useState } from 'react'


const Biblia = () => {
const [libroActual, setLibroActual] = useState("GEN")
const [cap, setCap] = useState(1)
const [nombre, setNombre] = useState("Genesis")

const actualizarLibro= (libros)=>{ 
  setLibroActual(libros.id)
  setNombre(libros.name)
}
const actualizarCapitulo = (num)=>{ 
  setCap(num.number)
  
}
  return (
    <div className='contenedor-biblia'>
        <ListaDeLibros actualizar={actualizarLibro}></ListaDeLibros>
        <div className='contenedor-numero-texto'>
        <Capitulos actualizarCap={actualizarCapitulo}  libro={libroActual}></Capitulos>
        <TextoBiblico libro={libroActual} numCap={cap} nombre={nombre}></TextoBiblico>
        </div>
    </div>
  )
}

export default Biblia