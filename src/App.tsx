import {useState} from 'react'
import './App.css'
import AddTaskForm from "./components/AddTaskForm.tsx";
import Task from "./components/Task.tsx";

interface Props {
    id: string;
    text: string;
}

function App() {
    const [tasks, setTasks] = useState<Props[]>([
        {text: 'Buy milk', id: '123'},
        {text: 'Walk with dog', id: '234'},
        {text: 'Do homework', id: '345'},
    ]);
    const addTask = (text: string) => {
        const newTask = {
            id: Date.now().toString(), text,
        };
        setTasks([...tasks, newTask]);
    };
    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    return (
        <div className="app">
            <AddTaskForm onAddTask={addTask}/>
            <div className="task-list">
                {tasks.map((task) => (
                    <Task key={task.id} id={task.id} text={task.text} onDelete={deleteTask}/>
                ))}
            </div>
        </div>
    )
}

export default App
