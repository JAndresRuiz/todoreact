import React from 'react';
import ReactDOM from 'react-dom';
import "../Styles/Modal.css";

const Modal = ({ addTodo, setOpenModal }) => {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return ReactDOM.createPortal(
        <div className='modalTodo'>
            <form className='formNewTodo' onSubmit={onSubmit} >
                <label>Registra aquí tus nuevas tareas</label>
                <textarea
                    value={newTodoValue}
                    onChange={onChange}
                    placeholder="Ingresa aquí tu tarea"
                />
                <div>
                    <button className='cancelar' type='button' onClick={onCancel} >Cancelar</button>
                    <button className='agregar' type='submit' >Añadir</button>
                </div>
            </form>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
