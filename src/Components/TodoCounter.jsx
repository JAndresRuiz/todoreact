import React from 'react'
import '../Styles/TodoCounter.css';

const TodoCounter = ({total, completed}) => {
  return (
    <div className='titleContainer'>
      <h1>Has compeltado {completed} de {total} tareas</h1>
    </div>
  )
}

export { TodoCounter };