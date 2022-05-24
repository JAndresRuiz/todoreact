import React from 'react'
import '../Styles/CreateTodoButton.css';

const CreateTodoButton = (props) => {
  
  const onClickButton = () => {
    if (props.openModal === false){
      props.setOpenModal(true)
    } else {
      props.setOpenModal(false)
    }
  }

  return (
    <>
      <button className={`todoButton ${props.openModal && 'rotation'}`} onClick={onClickButton} ><p>+</p></button>
    </>
  )
}

export { CreateTodoButton }