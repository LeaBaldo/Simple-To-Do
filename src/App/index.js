import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';



// const defaultTodos = [
//   { text: 'Cortar manzana', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'salir a correr', completed: true },
//   { text: 'LALALA', completed: false },
//   { text: 'Terminar proyecto', completed: false },
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
