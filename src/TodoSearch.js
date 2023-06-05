import React from 'react';
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchValue}) {
    
    // console.log('El usuario busca: ' + searchValue);

    return (
        <input 
            placeholder="Busca una tarea" 
            className="TodoSearch"
            value = {searchValue}
            onChange={(event) =>
                {
                    // La forma de acceder al input sería con: event.target.value
                    // console.log(event.target.value);
                    setSearchValue(event.target.value);
                }}
        />
    );
}

export { TodoSearch };