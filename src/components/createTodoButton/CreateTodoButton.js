import { TodoContext } from '../TodoContext/todoContext'
import './CreateTodoButton.css'
import React from 'react'


function CreateTodoButton (){
    const {setOpenModal, valueModal} = React.useContext(TodoContext)

    return(
        <button className='create-todo-button' 
        onClick={
            (event) => {
                //setOpenModal(state => !state)
                setOpenModal(!valueModal)
                console.log('Le diste click')
                console.log(event)
                console.log(event.target)
            }
        }
        >Nuevo todo</button>
    )
}

export {CreateTodoButton}