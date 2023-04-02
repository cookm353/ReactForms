import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"

const BoxList = () => {
    const initialState = [
        {id: 1, boxWidth: 100, boxHeight: 100, boxColor: "purple"},
        {id: 2, boxWidth: 50, boxHeight: 50, boxColor: "green"}
    ]
    
    const [boxes, setBoxes ] = useState(initialState)
    const addBox = (boxWidth, boxHeight, boxColor) => {
        console.log(`Height: ${boxHeight}`)
        console.log(`Width: ${boxWidth}`)
        console.log(`Color: ${boxColor}`)
        setBoxes(boxes => [...boxes, {boxWidth, boxHeight, boxColor}])
    }
    
    console.log(boxes)

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div id="boxes">
                {boxes.map(({boxColor, boxWidth, boxHeight}, idx) => 
                    <div className="boxHolder">
                        <Box key={idx} color={boxColor} width={boxWidth} height={boxHeight}/>
                        <span>
                            <button id="{idx}">X</button>
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BoxList