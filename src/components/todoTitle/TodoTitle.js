import React from 'react'
import './TodoTitle.css'
import { TodoContext } from '../TodoContext/todoContext'

function TodoTitle() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

    return(
      <h1 className='Todo-Title'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> todos</h1>
    )
  } 

  export {TodoTitle}