import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { MainPage } from './mainPage';

// const defaultTodos = [
//   { text:'Ir a la luna en bicicleta', completed: true },
//   { text:'Poner otro ladrillo en el muro', completed: true },
//   { text:'Construir una esfera de Dyson', completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    <MainPage 
      completedTodos = {completedTodos}  
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      checkTodo = {checkTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
