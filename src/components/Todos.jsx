import React, {useState} from 'react'


const Todo = (props) => {

    const { addFunction } = props;
    // Deconstructing from the App page

    const [todoData, setTodoData] = useState({
        todoText: ""
    })
    // Data stored in a state from the from for todo
 
    const formSubmit = (e) => {
        e.preventDefault()
        addFunction(todoData)
        setTodoData({
            todoText: "",
        // makes form cleared out after submission
        })
    }
    // Submit Form data below to the todoData State Variable above

    const handleChange = (e) => {
        const { name, value } = e.target 
        setTodoData(currentData => ({ ...currentData, [name]: value }))
    }
    // when updates made by the user it is captured


  return (
    <form onSubmit={formSubmit}>
        <input type="text" name="todoText" onChange={handleChange} value={todoData.todoText}></input>
        <button>Add</button>
    </form>
  )
}

export default Todo