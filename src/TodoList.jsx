import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';
function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task", id: uuidv4()}]);
    let [newTodo,setNewTotdo]=useState([""]);

    let addNewTask = () => {
       
        setTodos([...todos,{task:newTodo, id: uuidv4()}]);
        
    };

    let updateTodovalue=(event)=>{
        setNewTotdo(event.target.value)
    }

    let deleteTodo=(id)=>{
            setTodos((PrevTodos)=>todos.filter((PrevTodos)=>PrevTodos.id!=id));       
    }
    return (
        <>
            <input
                placeholder="Add a Task"
                value={newTodo}
                onChange={updateTodovalue}
            />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <h4>Task To do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task} 
                        <span>
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </span>
                    
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;
 