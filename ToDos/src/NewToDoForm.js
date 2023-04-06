import React, { useState } from "react"
import "./NewToDoForm.css"

const NewToDoForm = ({ addTask }) => {
    const initialState = {
        newTask: ""
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(formData)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTask">Add task: </label>
            <input
                type="text"
                id="newTask"
                name="newTask"
                onChange={handleChange}
                value={formData.newTask}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewToDoForm