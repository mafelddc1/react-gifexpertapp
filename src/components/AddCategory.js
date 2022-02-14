import React, { useState } from 'react' // escribir rafc tab y te entrega construccion de un componente/categoria.
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {//ingreso lo que recibo al ser llamado 

    const [inputValue, setinputValue] = useState(''); // si al usestate no se le da un estado inicial (''), por defecto es undefined y eso genera errores

    const handleInputChange = (elemento) =>{
        setinputValue(elemento.target.value);

    }

    const handleSubmit = (elemento)=> {
        elemento.preventDefault();

        if (inputValue.trim().length > 2 ){//para evitar que no agreguen elementos
            setCategorias(cats => [inputValue, ...cats ]);//aqui se ordena como quiero mostrar las categorias que se agregan, primero iran las ultimas buscadas 
            setinputValue('') // esto es para que despues de escribir se borre lo que estaba en la caja de texto 

        }
        

    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                
            />
        </form>
        
    </>
  )
}

AddCategory.propTypes ={
    setCategorias: PropTypes.func.isRequired //set es una funcion, por eso hay que poner que sea de tipo funcion
}
