import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const initialState = {
        boxHeight: "",
        boxWidth: "",
        boxColor: ""
    }

    const[formData, setFormData] = useState(initialState)

    const HandleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log("foo")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { boxWidth, boxHeight, boxColor } = formData
        addBox( boxWidth, boxHeight, boxColor)
        setFormData(initialState)
        console.log("Submit!")
    }
    

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
            <input
                id="boxColor"
                name="boxColor"
                type="color"
                onChange={HandleChange}
                value={formData.boxColor}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewBoxForm