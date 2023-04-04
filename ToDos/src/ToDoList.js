import React, { useState } from "react"
import NewToDoForm from "./NewToDoForm"
import ToDo from "./ToDo"
import { v4 as uuidv4 } from "uuid"
import "./ToDoList.css"

const ToDoList = () => {
    const initialState = [
        "Make breakfast",
        "Brush teeth",
        "Take shower",
        "Walk dog"
    ]
    
    const [tasks, setTasks] = useState(initialState)
    const addTask = newTask => {
        setTasks(tasks => [...tasks, newTask])
    }

    const handleRemove = (e) => {
        const bttn = e.target
        const task = bttn.parentElement.parentElement
        task.remove()
    }
    
    return (
        <div className="toDos">
            <NewToDoForm addTask={addTask} />
                {tasks.map(task => 
                    <div className="task" key={uuidv4()}>
                        <ToDo task={task} />
                        <span><button onClick={handleRemove}>X</button></span>
                    </div>
                )}
        </div>
    )
}

export default ToDoList