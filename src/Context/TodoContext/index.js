import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  
  const { item: todos, saveItem: saveTodos, 
          loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
  const [cosmicParty, setCosmicParty] = React.useState(false);

  const completedTodos = todos.filter( todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter( 
    (todo) => {
      const noTildes = (text) => {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      };
      const lowerText = noTildes(todo.text.toLocaleLowerCase());
      const searchedText = noTildes(searchValue.toLocaleLowerCase());

      return lowerText.includes(searchedText);
    });
  
  // Recibe el texto
  const addTodo = (text) => {
    const addNewTodo = [...todos]; // Hace una copia de los todos
    addNewTodo.push({     // Agrega un nuevo todo con sus props 
      text,               // Se agrega el texto
      completed: false,   // Se agrega la propieda completado
    });
    saveTodos(addNewTodo); // Usamos la función de guardar todos igual que en check y delete para actualizar el estado
  };
  
  const checkTodo = (text) => {
    const toCheckTodo = [...todos];
    const todoIndex = toCheckTodo.findIndex(
      (todo) => todo.text === text
    );

    (!toCheckTodo[todoIndex].completed) 
      ? toCheckTodo[todoIndex].completed = true
      : toCheckTodo[todoIndex].completed = false;

    saveTodos(toCheckTodo)
  };

  const deleteTodo = (text) => {
    const toDeleteTodo = [...todos];
    const todoIndex = toDeleteTodo.findIndex(
      (todo) => todo.text === text
    );
    toDeleteTodo.splice(todoIndex, 1);
    saveTodos(toDeleteTodo)
  };
  return (
    <TodoContext.Provider value={{      
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      checkTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      cosmicParty,
      setCosmicParty
      }}>

      {children}
      
    </TodoContext.Provider>
  );
}
  
export { TodoContext, TodoProvider };

// const defaultTodos = [
//   { text:'Ir a la luna en bicicleta', completed: true },
//   { text:'Poner otro ladrillo en el muro', completed: true },
//   { text:'Construir una esfera de Dyson', completed: false },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));