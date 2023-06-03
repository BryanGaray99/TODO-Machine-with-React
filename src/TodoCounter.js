
// Podemos pasar props o deestructurar las propiedades
function TodoCounter({total, completed}) {
    return (
        <h1>
            Has completado {completed} de {total} TODO´s
        </h1>
    );
}

export { TodoCounter };