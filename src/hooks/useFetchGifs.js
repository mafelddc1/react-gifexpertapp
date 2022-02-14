import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
 
    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category]) // eso indica que solo se lanzara 1 vez la peticion y no varias veces
    // // se le agrega [category], dado que si cambia la categoria, se volveria a lanzar este codigo
    




    return state; // { data:[], loading: true };


}


