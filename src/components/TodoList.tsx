import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  onRemove: (id: number) => void
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if(todos.length === 0){
    return (
      <p className="center red-text text-darken-5">У Вас пока нет ни одной задачи !</p>
    )
  }
  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
            console.log('Completed')
          classes.push('completed')
        }
        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i onClick={onRemove.bind(null, todo.id)} className="material-icons red-text">
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  );
};

export default TodoList;
