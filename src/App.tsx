import React from 'react';
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./interfaces"

const App: React.FunctionComponent = () => {

  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = { title: title, id: Date.now(), completed: false };
    setTodos(prevState => [newTodo, ...prevState]);
    
  } 

  const toggleHandler = (id: number) => {
    console.log('id', id)
    setTodos(prev => prev.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  const removeTodo = (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList 
        todos={todos}
        onRemove={removeTodo}
        onToggle={toggleHandler}
        />
      </div>
    </>
  )
}

export default App;
