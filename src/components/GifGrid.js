import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const { data:images, loading } = useFetchGifs( category );


  return (
      <>
      <h3 className='animate__heartBeat'>{category}</h3>

      { loading && <p className='animate__flash'> Loading </p> }
      <div className='card-grid'>
        
        <ol> {
            images.map(img => ( // cuando se utilizan () en vez de {} se dice que es un return impliccito y no es necesario ponerlo
               <GifGridItem 
               key = {img.id}
               {...img} // de esta manera envio cada una de las propiedades de images de manera independiente (id, title,url)
                />
            ))
            
            }
            
        </ol>
    </div>
      </>
   
  )
}
