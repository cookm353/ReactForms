import React, { useState } from "react"
import Box from "./Box"

const BoxList = () => {
const [boxes, setBoxes ] = useState([])

    return (
        <div>
            {boxes.map(box => <Box color={color} width={width} height={height}/>)}
        </div>
    )
}

export default BoxList