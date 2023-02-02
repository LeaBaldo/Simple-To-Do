import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState(''); 
    const {
        addTodo,
        setOpenModal,
        // searchSameTodo,
        // todos,'
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();

        // if(!searchSameTodo(newTodoValue)){
        //     console.log(typeof searchSameTodo(newTodoValue))
        //     alert("Ya existe un To-Do igual con ese mismo contenido.");
        // } else {
        //     addTodo(newTodoValue);
        //     setOpenModal(false);
        // }
        addTodo(newTodoValue);
        setOpenModal(false);

    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                className="textarea"
                placeholder="To Do..."
                autoFocus
                required
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };