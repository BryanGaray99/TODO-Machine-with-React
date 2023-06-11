import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoCounter/TodoSearch/TodoSearch';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { TodoList } from '../Components/TodoList/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';


function MainPage( { 
        completedTodos, 
        totalTodos, 
        searchValue, 
        setSearchValue, 
        searchedTodos, 
        checkTodo, 
        deleteTodo,
        loading, 
        error
    }) {
    return (
        // React.Fragment como contenedor invisible.
        <> 
            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos}
            />

            <TodoSearch
                searchValue={searchValue}  // Vamos a pasar como props del padre al hijo 
                setSearchValue={setSearchValue}
            />

            <TodoList>
                { loading 
                    ? <TodosLoading />
                    : null 
                }

                { error 
                    ? <TodosError/>
                    : null 
                }

                { !loading && searchedTodos.length === 0 
                    ?  <EmptyTodos />
                    : null 
                }

                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete = {() => checkTodo(todo.text)} // Encapsulamiento o re-render
                    onDelete = {() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export { MainPage };