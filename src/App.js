import './App.css';
import Todo from './components/Todos';
import Results from './components/Results.jsx';
import {useState} from 'react';


function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos(currentTodos => ([...currentTodos, newTodo]))
  }

  const deleteTodo = id => {
    setTodos(currentTodos => currentTodos.filter((_, index) => index !== id));
  }
  // 


  return (
    <div className="App">

      <Todo addFunction = {addTodo}/>

    {todos.map((task, i) => (
      <Results 
        todoText={task.taskText}
          key={i}
          id={i} 
          deleteFunction={deleteTodo} 
          task={task.todoText}/>
        ))}
    </div>
  );
}

export default App;
