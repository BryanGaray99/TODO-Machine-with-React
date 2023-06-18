import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button 
            className="CreateTodoButton"
            onClick={
                // (event) => {
                //     console.log('le diste click');
                //     console.log(event);
                //     console.log(event.target);
                // }
                () => {
                    setOpenModal(state => !state); // Cambio el estado del valor que tiene, negandolo
                }
            } 
        >+</button>
    );
}

export {CreateTodoButton};