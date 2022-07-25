import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../estilos/biblia.css'



const Capitulos = (props) => {
    let [capitulos, setCapitulos] =  useState([])
    const API_KEY ="30eb61aed54f9ce2146d2b2fdd5f294f"
    let URL_CAPITULOS = `https://api.scripture.api.bible/v1/bibles/b32b9d1b64b4ef29-01/books/${props.libro}/chapters`
    
  useEffect(()=>{

    async function getCapitulos() {
        try {
          const response = await axios.get(URL_CAPITULOS ,{
            headers:{
                "api-key":API_KEY
            }
          });
          let datos = response.data.data
          setCapitulos(capitulos = datos)
          //console.log(capitulos)
        } catch (error) {
          console.error(error);
        }
      }
      getCapitulos()
  },[props.libro])
  return (
    <div className='contenedor-capitulo'>
          {   capitulos.map((num, i)=>{
                
                return (
                    <button onClick={()=>props.actualizarCap(num)} className='numero' 
                    key={i}>
                    <p>{capitulos[i].number}</p>
                    </button>
                )
            })
        }
     
    </div>
  )
}

export default Capitulos