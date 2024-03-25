import { TodoContext } from '../TodoContext/todoContext';
import './TodoSearch.css'
import React from 'react'

function TodoSearch(){

    const {
        searchValue,
        setSearchValue
      } = React.useContext(TodoContext)


    return(
        <input className='TodoSearch' 
        placeholder="Buscar TODO"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);

        }}
        />
        
    )
}

export {TodoSearch}