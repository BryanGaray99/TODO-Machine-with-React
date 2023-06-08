import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// El estandar en react es que, si la función empieza con mayúscula, es 
// un componente.

// const defaultTodos = [
//   { text:'Ir a la luna en bicicleta', completed: true },
//   { text:'Poner otro ladrillo en el muro', completed: true },
//   { text:'Construir una esfera de Dyson', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  // El estado se consume y se actualiza. Se puede establecer un estado inicial en el React.useState()
  const [searchValue, setSearchValue] = React.useState('');

  // Traemos del localStorage a nuestro almacen de todos: 'TODOS_V1'
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  // Si 'TODOS_V1' está vacío (NULL or Undefined) en el localStorage es decir False entonces:
  if (!localStorageTodos) {
    // Declaramos como un array vacío [] a TODOS_V1
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    // También le decimos a parsedTODO que es igual a un array vacío
    parsedTodos = []; 
  } else {
    // Si ya tiene información entonces solo lo parseamos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);

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
  
  // Creamos una función para guardar los cambios (Marcar como completado o eliminar TODOs) en el localStorage
  const saveTodos = (newTodos) => {
    // Actualizamos en el localStorage 'TODOS_V1'
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    // Actualizamos el estado de setTODOS
    setTodos(newTodos);
  }
  // Creamos una función para marcar un todo como completado, buscando de forma única al todo que queremos
  // segun el texto (Por eso le pasamos text como parámetros).
  const checkTodo = (text) => {
    // Queremos que al darle click cambie el todo a completado para eso usaremos el operador de 
    // propagación para crear una copia de array todos 
    const toCheckTodo = [...todos];

    // Obtenemos el todo que estamos buscando haciendo un .findIndex a la copia del array de "todos"
    // y pasamos como función para encontrar la coincidencia el ítem (todo) para el cual se hace la búsqueda
    // y si el texto del ítem (todo.text) es igual al texto que ingresa entonces ese es el índice buscado. 
    const todoIndex = toCheckTodo.findIndex(
      (todo) => todo.text === text
    );

    // Al índice pasado, le aplicamos un condicional para poder manejar el estado de completado o no completado
    (!toCheckTodo[todoIndex].completed) 
      ? toCheckTodo[todoIndex].completed = true
      : toCheckTodo[todoIndex].completed = false;

    saveTodos(toCheckTodo)
  };
  
  // Reutilizamos la función checkTodo
  const deleteTodo = (text) => {
    const toDeleteTodo = [...todos];
    const todoIndex = toDeleteTodo.findIndex(
      (todo) => todo.text === text
    );
    // Utilizamos el método de manipulación de arrays splice para quitar un elemento. El primer parámetro es 
    // el índice y el segundo es la cantidad de elementos a partir de ese índice queremos quitar. 
    toDeleteTodo.splice(todoIndex, 1);
    saveTodos(toDeleteTodo)
  };

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
            // Encapsulamos la función, para poderle pasar los parámetros, si le ponemos paréntesis a 
            // "checkTodo()" significa que todo el tiempo estaría ejecutandose, rompiendo la aplicación
            // Con la estructura "() => checkTodo(todo.text)" Estamos mandando una función anónima sin 
            // ejecutar que a su vez llama a otra función que recibe el parámetro.
            onComplete = {() => checkTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
