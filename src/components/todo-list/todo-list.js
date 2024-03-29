import React from "react";
import './todo-list.css';

import TodoListItem from '../todo-list-item'
export const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;

    return (
        <li className="list-group-item" key={ id }>
          <TodoListItem {...itemProps}
            onDeleted={() => onDeleted(id)}
          />
        </li>
    )
  });
  return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
  )
};
