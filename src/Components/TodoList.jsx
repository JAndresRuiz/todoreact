import React from "react";
import { TodoItem } from "./TodoItem";
import '../Styles/TodoList.css';

const TodoList = ({ searchedTodos, completeTodo, deleteTodo }) => {
  return (
    <section className="todosContainer">
      <ul>
        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </ul>
    </section>
  );
};

export { TodoList };
