import './TodoItem.css';

// Aquí se aplica una lógica importante para tener un estilo condicional a un evento
// Es decir que solo si el ítem tiene el prop de completado, entonces se activa la clase 
// Icon-check--active, lo mismo para los estilos del texto.
function TodoItem(props) {
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
          V
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}</p>
        <span className="Icon Icon-delete">
          X
        </span>
      </li>
    ); 
  }

export { TodoItem }; 