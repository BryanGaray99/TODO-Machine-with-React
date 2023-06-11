import React from 'react';
import './TodosLoading.css';
import { FaSpinner } from 'react-icons/fa';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <p className="LoadingTodo-text">Estamos cargando</p>
      <span> 
        <FaSpinner className="loading-icon" />
      </span>
    </div>
  );
}

export { TodosLoading };