import React from "react";
import { useLocalStorage } from "./useLocalStorage";
// import { TodoCounter } from "../TodoCounter";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      //El estado de nuestra búsqueda
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      //obtener la cant. de ToDos completos y el total de ToDos.
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      //Creamos un array donde guardamos las coincidencias con la búsqueda
      let searchedTodos = [];
    
      //filtramos el array con la palabra clave que estamos buscando
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
      }
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        })
        saveTodos(newTodos);
    
      };

      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    
        //otra forma de buscar los TODOs completed
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        // newTodos[todoIndex].delete = true???;
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
      
    //   console.log("render (antes del use effect)")
    
    // //Hook que ejecuta el código justo antes de renderizar.
    //   React.useEffect(() => {
    //     console.log("use effect");
    //   }, [totalTodos]);
    
    //   console.log("render (luego del use effect");

    return (
        //colocamos una doble llave ya que lo que queremos compartir en la propiedad value es un objeto
        <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };