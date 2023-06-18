import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { TodoList } from '../Components/TodoList/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoForm } from '../Components/TodoForm';
import { TodoContext } from '../Context/TodoContext';
import { Modal } from "../Components/Modal";

function AppUI() {
    const {
        loading,
        error,
        totalTodos,
        checkTodo,
        deleteTodo,
        searchedTodos, 
        openModal,
        setOpenModal
      } = React.useContext(TodoContext);

    return (
        // React.Fragment como contenedor invisible.
        <> 
            <TodoCounter/>
            <TodoSearch/>
        
            <TodoList>
                        { loading 
                            ? <TodosLoading />
                            : null 
                        }

                        { error 
                            ? <TodosError/>
                            : null 
                        }

                        { (!loading && totalTodos === 0)
                            ? <EmptyTodos />
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

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
                
        </>
    );
}

export { AppUI };