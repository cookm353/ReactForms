import React, { useState } from "react";
import  { v4 as uuidv4 } from "uuid"

const NewBoxForm = ({ addBox }) => {
    const initialState = {
        height: 100,
        width: 100,
        color: "Aquamarine"
    }

    const[formData, setFormData] = useState(initialState)

    const HandleChange = (e) => {
        let { name, value } = e.target
        value = typeof value === "number" ? Number(value) : value
        
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox( { ...formData })
        setFormData(initialState)
    }

    const colorOptions = [
        "Aquamarine", "BlueViolet", "CadetBlue", "Coral", "Crimson",
        "DarkOrchid", "DarkOrange", "DarkSlateGray", "Green", "Indigo",
        "Maroon", "MediumTurquoise"
    ]
    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxHeight">Height: </label>
            <input
                id="boxHeight"
                name="boxHeight"
                type="range"
                onChange={HandleChange}
                value={formData.height}
                min={50}
                max={150}
                step={10}
            />
            <label htmlFor="boxWidth">Width: </label>
            <input
                id="boxWidth"
                name="boxWidth"
                type="range"
                onChange={HandleChange}
                value={formData.width}
                min={50}
                max={250}
                step={50}
            />
            <label htmlFor="boxColor">Color: </label>
            <select
                id="boxColor"
                name="boxColor"
                type="color"
                onChange={HandleChange}
                value={formData.color}
            >
                {colorOptions.map(color => 
                    <option key={uuidv4()} value={color}>{color}</option>
                )}
            </select>
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm