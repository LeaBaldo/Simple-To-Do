import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton (props) {
    const onClickButton = () => {
        //todos los actualizadores de estado nos permiten enviar el valor pero tambien enviar funciones
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button 
        className="CreateTodoButton"
        //Al pasar argumentos a las funciones necesitamos encerrar la f dentro de otra función, ya que al pasarle un argumento la estaríamos inicializando)
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButton };