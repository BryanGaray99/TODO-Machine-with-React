import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter() {
    const { completedTodos, totalTodos } = React.useContext(TodoContext);
    return (
        <h1 className='TodoCounter'>
            Hola Cosmonauta 👨‍🚀 👩‍🚀 has completado <span> {completedTodos}</span> de <span>{totalTodos}</span> tareas!
        </h1>
    );
}

export { TodoCounter };
