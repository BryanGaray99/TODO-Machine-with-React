import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// El estandar en react es que, si la función empieza con mayúscula, es 
// un componente.

const defaultTodos = [
  { text:'Entender las Leyes de Newton', completed: true },
  { text:'Entender el Electro-Magnestismo', completed: false },
  { text:'Entender la Relatividad Especial y General', completed: false },
  { text:'Entender la Mecánica Cuántica', completed: false }
];

function App() {
  return (
    // En react se debe return solo un componente que envuelva al resto de componentes hijos.
    // Se puede usar un React.Fragment como contenedor invisible. 
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
