import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([
        { task: "Sample Task", id: uuidv4(), isCompleted: false }
    ]);
    const [newTodo, setNewTodo] = useState(""); // Fixed typo

    const addNewTask = () => {
        if (newTodo.trim() === "") return;
        setTodos([...todos, { task: newTodo, id: uuidv4(), isCompleted: false }]);
        setNewTodo(""); // Fixed typo
    };

    const updateTodovalue = (event) => {
        setNewTodo(event.target.value); // Fixed typo
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const completeTask = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: true } : todo
        ));
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addNewTask();
        }
    };

    return (
        <div className="todo-container">
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={newTodo}
                    onChange={updateTodovalue}
                    onKeyPress={handleKeyPress}
                />
                <button className="add-btn" onClick={addNewTask}>Add Task</button>
            </div>

            <h4 className="todo-title">Tasks To Do</h4>
            <ul>
                {todos.filter(todo => !todo.isCompleted).map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <span>
                            <button className="complete-btn" onClick={() => completeTask(todo.id)}>
                                Complete
                            </button>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>

            <hr />
            
            <h4 className="completed-title">Completed Tasks</h4>
            <ul className="completed-tasks">
                {todos.filter(todo => todo.isCompleted).map((todo) => (
                    <li key={todo.id}>
                        <span className="completed-task-text">{todo.task}</span>
                        <span>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;