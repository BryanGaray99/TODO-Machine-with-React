import './TodoCounter.css';

// Podemos pasar props o deestructurar las propiedades
function TodoCounter({total, completed}) {
    return (
        <h1 className='TodoCounter'>
            Hola Cosmonauta 👨‍🚀 👩‍🚀 Has completado <span>{completed}</span> de <span>{total}</span> TODO´s
        </h1>
    );
}

export { TodoCounter };