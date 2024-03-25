import React from "react"
import './emptyTodos.css'

function EmptyTodos () {

    return(
        <div className="empty-todo-container">
        <p className="p-empty-todo">No hay todos</p>
        </div>
    )
}

export {EmptyTodos}