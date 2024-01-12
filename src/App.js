import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Form from './components/AddTaskForm'; 
import TodoList from './components/TaskList';
import ReactVideo from './components/ReactVideo';
import "./App.css";


const App = () => {

  
  // To Do List
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container" >
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input = {input}
            setInput = {setInput}
            todos = {todos}
            setTodos = {setTodos}
          />
        </div>
        <div>
          <TodoList  
            todos={todos} 
            setTodos={setTodos}            
          />
        </div>
      </div>
      <div>
        <ReactVideo />
      </div>
          
    </div>
    
  );
}

export default App;


