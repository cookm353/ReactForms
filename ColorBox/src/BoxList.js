import React, { useState } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"

const BoxList = () => {
    const initialState = [
        {id: 1, boxWidth: 200, boxHeight: 200, boxColor: "purple"},
        {id: 2, boxWidth: 250, boxHeight: 250, boxColor: "green"}
    ]

    const [boxes, setBoxes ] = useState(initialState)
    const addBox = (boxWidth, boxWeight, boxColor) => {
        setBoxes(...boxes, {boxWidth, boxWeight, boxColor})
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div id="boxes">
                {boxes.map(({boxColor, boxWidth, boxHeight}) => <Box color={boxColor} width={boxWidth} height={boxHeight}/>)}
            </div>
        </div>
    )
}

export default BoxList