import React from 'react';
import './TodoSearch.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { TodoContext } from '../../Context/TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <span className='TodoSearch'>
            <input 
                placeholder="Busca una tarea" 
                className="TodoSearchInput"
                value = {searchValue}
                onChange={(event) =>
                    {
                        // La forma de acceder al input sería con: event.target.value
                        // console.log(event.target.value);
                        setSearchValue(event.target.value);
                    }}
            />
            <span className='IconSearch'>
                <AiOutlineSearch/>
            </span>
        </span>
    );
}

export { TodoSearch };