import {TodoTitle} from './components/todoTitle/TodoTitle';
import {TodoSearch} from './components/todoSearch/TodoSearch';
import { TodoList } from './components/todoList/TodoList';
import { TodoItem } from './components/todoItem/TodoItem';
import { CreateTodoButton } from './components/createTodoButton/CreateTodoButton';
import React from 'react';
import { useContext } from "react";
import './App.css'
// import {useLocalStorage} from './hooks/useLocalStorage'

import { LoadingTodos } from './components/loadingTodos/loadingTodos';
import { EmptyTodos } from './components/emptyTodos/emptyTodos';
import { ErrorTodos } from './components/ErrorTodos/errorTodos';

import { Modal } from './components/Modal/modal';

import { TodoForm } from './components/todoForm/todoForm';
import {TodoContext} from './components/TodoContext/todoContext';


// Custom Hook
// function useLocalStorage(itemName, initialValue) {
//   const localStorageItem = localStorage.getItem(itemName);

//   let parsedItem;

//   if (!localStorageItem) {
//     localStorage.setItem('TODOSAPP_V1', JSON.stringify(initialValue))
//     parsedItem = initialValue;
//   } else {
//     parsedItem = JSON.parse(localStorageItem);
//   }

//   const [item, setItem] = React.useState(parsedItem);


//   const saveItem = (newItem) => {
//     localStorage.setItem('TODOSAPP_V1', JSON.stringify(newItem));
//     setItem(newItem);
//   };

//   return [item, saveItem] 
// };


function App() {

  // // Estados globales =
  // const {
  //   item:todos, 
  //   saveItem:saveTodos, 
  //   loading, 
  //   error
  // } = useLocalStorage('TODOSAPP_V1', []);

  // const [searchValue, setSearchValue] = React.useState("");

  // // Portal
  // const [openModal, setOpenModal] = React.useState(false)

  // // Estados derivados =
  // const completedTodos = todos.filter(todo => !!todo.completed).length;
  // const totalTodos=todos.length;

  // const searchedTodos = todos.filter(
  //   (todo) => {
  //     const todoText = todo.text.toLowerCase()
  //     const searchText = searchValue.toLowerCase()
  //     return todoText.includes(searchText)
  //   }
  //   // poner condicional donde si hay coincidencia filtra, y sino un mensaje de no se encuentran todos
  // );

  // const completeTodo = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text === text
  //   );
  //   newTodos[todoIndex].completed = true;
  //   saveTodos(newTodos);
  // }

  // const deteleTodo = (text) => {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text === text);
  //     newTodos.splice(todoIndex, 1);
  //     saveTodos(newTodos);

  // }

  // const addTodo = (text) => {
  //   const newTodos = [...todos];
  //   newTodos.push({
  //     text,
  //     completed: false
  //   }); 
  //   saveTodos(newTodos)
  // }

    // console.log("Los usuarios buscan " + searchValue)
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal
    } = useContext(TodoContext)


  return (

  <div className='App'>

    <TodoTitle />
    <TodoSearch />

    <TodoList> 
      {loading && <LoadingTodos/>}
      {error && <ErrorTodos />}
      {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

      {searchedTodos.map
      (todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed}
        onComplete={() => completeTodo(todo.text)}
        onDelete ={() => deleteTodo(todo.text)}
        />
        )
      )
      }
    </TodoList>
    
    <CreateTodoButton /> 

    {openModal && (
      <Modal>
        <TodoForm />
      </Modal>
      )
      }

  </div>

  );
};




export default App;
