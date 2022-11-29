import React from "react";
import { TodoIcon } from "./";

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon
      type="delete"
      onClick={() => {
        if (window.confirm("Estás seguro que deseas eliminar este To-do?")) {
          onDelete();
          return;
        }
      }}
    />
  );
}

export { DeleteIcon };
