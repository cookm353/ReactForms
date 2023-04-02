import React from "react"
import "./Box.css"

const Box = ({color, width, height}) => {
    const styles = {
        width: width,
        height: height,
        backgroundColor: color
    }
    
    return (
            <div className="box" style={styles}></div>
    )
}

export default Box