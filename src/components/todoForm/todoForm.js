import React from 'react'
import './todoForm.css'
import { TodoContext } from '../TodoContext/todoContext'



function TodoForm() {

    const {setOpenModal, addTodo} = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)}

    const onCancel = () => {
        setOpenModal(false)
    }
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }


    return(
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <label>Escribe un nuevo to do</label>
                
                <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ejemplo: Hacer la cena"
                />

                <div className="buttons-container">
                <button
                    type='button'
                    onClick={onCancel}
                    className="button-form-cancel">Cancelar</button>

                <button
                type='submit'
                
                className="button-form-add">Añadir</button>

                </div>

            </form>

        </div>

    )
}

export {TodoForm}