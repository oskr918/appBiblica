import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'

const ListaDeLibros = (props) => {
  const [datos, setDatos] =  useState([])
  const URL = `https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01/books`
  const API_KEY ="30eb61aed54f9ce2146d2b2fdd5f294f"
 
useEffect(()=>{
  async function getNombres(

  ) {
      try {
        const response = await axios.get(URL,{
          headers:{
              "api-key":API_KEY
          }
        });
        setDatos(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    getNombres()
},[])
return (
  <div className='contenedor-libros'>
       <ul>
       {
              datos.map((libros, i)=>{
                
                return (
                    <li onClick={()=>props.actualizar(libros)}
                    
                    className='lista-libros' 
                    key={i}>
                    <p>{datos[i].name}</p>
                    </li>
                )
            })
        }
      </ul>
  </div>
)
}

export default ListaDeLibros