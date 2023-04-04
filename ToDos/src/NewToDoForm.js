import React, { useState } from "react"
import "./NewToDoForm.css"

const NewToDoForm = ({ addTask }) => {
    const initialState = ""

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        let { value } = e.target
        setFormData(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(formData)
        setFormData(initialState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label
                htmlFor="newTask"
            >Add task: 
            </label>
            <input
                type="text"
                id="newTask"
                name="newTask"
                onChange={handleChange}
                value={formData}
            />
            <button>Add Task</button>
        </form>
    )
}

export default NewToDoForm