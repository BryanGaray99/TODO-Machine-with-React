import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../Context/TodoContext';

function TodoForm () {
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    // Creamos un nuevo estado local, ya que en el contexto global no se necesita saber en cada momento lo que el usuario escribe
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue); // Enviar el texto
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>

            <label>Escribe una nueva tarea!</label>
            <textarea 
                placeholder='Escribir una fábula'
                value = {newTodoValue}
                onChange={onChange}
                required
            />

            <div className='TodoForm-buttonContainer'>
                <button 
                    type='button' 
                    onClick={onCancel} 
                    className='TodoForm-button TodoForm-button--cancel'
                >
                    Cancelar
                </button>

                <button 
                    type='submit' 
                    className='TodoForm-button TodoForm-button--add'
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };

// Usamos un label para que si el usuario escribe mucho, se desplace hacia abajo y no horizontalmente con un scroll

// Los botones tienen tipos y en un formulario el último botón se interpreta siempre como un submit, 
// a menos que le indiquemos lo contrario

// event.preventDefault(); ---> Para evitar que el formulario recarge la página

// La lógica del submit la separamos en una función del mismo nombre pero en la parte de javascript del jsx

// event.preventDefault(); y setOpenModal(false); en onSubmit para que cuando se envie el formulario no se recarge y se cierre el modal

// Creamos un nuevo estado local, ya que en el contexto global no se necesita saber en cada momento lo que el usuario escribe
// const {newTodoValue, setNewTodoValue} = React.useState('');