import React from 'react'
import "../Styles/Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner"></div>
  )
}

const CreateNewTodoMsj = () => {
  return (
    <h1 className='newTodoMsj'>Crea nuevas tareas para administrarlas</h1>
  )
}

const Error = () => {
  return (
    <h1 className='ErrorMsj'>Ocurrio un error y no se cargaron tus Tareas, vuelve a intentrlo más tarde</h1>
  )
}


export { Spinner, CreateNewTodoMsj, Error };