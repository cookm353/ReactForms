import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import  { v4 as uuidv4 } from "uuid"
import "./BoxList.css"

const BoxList = () => {
    const initialState = [
        {id: uuidv4(), width: 100, height: 100, color: "purple"},
        {id: uuidv4(), width: 50, height: 50, color: "green"}
    ]
    
    const [boxes, setBoxes ] = useState(initialState)
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuidv4()}])
    }

    const handleRemove = (e) => {
        const button = e.target
        const boxHolder = button.parentElement.parentElement
        boxHolder.remove()
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div id="boxes">
                {boxes.map(({id, color, width, height}) => 
                    <div key={id} className="boxHolder">
                        <Box id={id} color={color} width={width} height={height}/>
                        <span>
                            <button onClick={handleRemove}>X</button>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BoxList