import React from 'react';
import './EmptyTodos.css'
import { FaArrowRight } from 'react-icons/fa';

function EmptyTodos() {
  return (
    <div>
      <div className="EmptyTodo-container">
        <p className="EmptyTodo-text">Da click en el botón para añadir tu primera tarea!</p>
      </div>
      <FaArrowRight className='EmptyTodo-arrow'/>
    </div>
    
  );
}

export { EmptyTodos };