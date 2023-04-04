import React, { useState } from "react"
import NewToDoForm from "./NewToDoForm"
import ToDo from "./ToDo"
import { v4 as uuidv4 } from "uuid"

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
        const button = e.target
        
    }
    
    return (
        <>
            <NewToDoForm addTask={addTask} />
            <div>
                {tasks.map(task => {
                    <ToDo task={task} id={uuidv4()} />
                })}
                <button onClick={handleRemove}>X</button>
            </div>
        </>
    )
}

export default ToDoList