import React from 'react';
import './EmptyTodos.css'

function EmptyTodos() {
  return (
    <div className="EmptyTodo-container">
      <p className="EmptyTodo-text">Da click en el botón para añadir tu primera tarea!</p>
    </div>  
  );
}

export { EmptyTodos };