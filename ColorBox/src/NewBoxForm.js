import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const initialState = {
        boxHeight: 100,
        boxWidth: 100,
        boxColor: "Aquamarine"
    }

    const[formData, setFormData] = useState(initialState)

    const HandleChange = (e) => {
        let { name, value } = e.target
        value = typeof value === "number" ? Number(value) : value
        
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(`${name}: ${value}`)
        console.log(typeof value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { boxWidth, boxHeight, boxColor } = formData
        addBox( Number(boxWidth), Number(boxHeight), boxColor)
        setFormData(initialState)
        console.log("Submit!")
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
                value={formData.boxHeight}
                min={50}
                max={250}
                step={50}
            />
            <label htmlFor="boxWidth">Width: </label>
            <input
                id="boxWidth"
                name="boxWidth"
                type="range"
                onChange={HandleChange}
                value={formData.boxWidth}
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
                value={formData.boxColor}
            >
                {colorOptions.map(color => <option value={color}>{color}</option>)}
            </select>
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm