import React from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { ITodo } from "../interfaces";

declare var confirm: (value: string) => boolean

const TodosPage: React.FC= () => {

    const [todos, setTodos] = React.useState<ITodo[]>([]);

    React.useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved);
    }, [])
  
    React.useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  
    const addHandler = (title: string) => {
      const newTodo: ITodo = { title: title, id: Date.now(), completed: false };
      setTodos(prevState => [newTodo, ...prevState]);
      
    } 
  
    const toggleHandler = (id: number) => {
      const prev = [...todos];
      prev.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      setTodos([...prev]);
    }
  
    const removeTodo = (id: number) => {
      if(confirm("Выточно хотите удалить эту задачу из списка дел?")){
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    }

    return (
        <>
            <TodoForm onAdd={addHandler} />
            <TodoList 
            todos={todos}
            onRemove={removeTodo}
            onToggle={toggleHandler}
        />
        </>
    );
};

export default TodosPage;