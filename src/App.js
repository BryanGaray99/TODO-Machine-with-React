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
  { text:'Entender el Electro-Magnestismo', completed: true },
  { text:'Entender la Relatividad Especial y General', completed: true },
  { text:'Entender la Mecánica Cuántica', completed: false },
  { text:'Entender la Electrodinámica Cuántica', completed: false },
  { text:'Entender la Cromodinámica Cuántica', completed: false },
  { text:'Entender una Teoría Unificada', completed: false },
  // { text:'Entender la Teoría de Cuerdas', completed: false }
];

function App() {
  // El estado se consume y se actualiza. Se puede establecer un estado inicial en el React.useState()
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  // Manipulación de arrays: Filter para devolver un array con todos los elementos que cumplan con una condición.
  // La arrow function se lee: recibiendo un "todo" devolvemos los que sean "todo.completed"
  // Adicional para no devolver le objeto en sí sino un valor boleeano para saber cuántos trues o "completed" 
  // tenemos añadimos una doble negación, así convertimos el objeto en un booleano.
  const completedTodos = todos.filter( todo => !!todo.completed).length;
  const totalTodos = todos.length;

  // El siguiente filtro se lee: Recibiendo el array "todos" para cada todo (ítem) vamos a retornar 
  // Primero accedemos al texto del ítem "todo" y lo convertimos a minúsculas, luego 
  // si incluye (usando includes) en minúsculas (toLocaleLoweCase) el string buscado (searchValue) 
  const searchedTodos = todos.filter( 
    (todo) => {
      // Quitar tildes
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      const lowerText = noTildes(todo.text.toLocaleLowerCase());
      const searchedText = noTildes(searchValue.toLocaleLowerCase());

      return lowerText.includes(searchedText);
    });
  
  return (
    // En react se debe return solo un componente que envuelva al resto de componentes hijos.
    // Se puede usar un React.Fragment como contenedor invisible. 
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />

      <TodoSearch
        // Vamos a pasar como props del comp. padre al hijo searchValue y setSearchValue 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
