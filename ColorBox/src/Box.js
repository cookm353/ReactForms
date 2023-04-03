import React from "react"
import "./Box.css"

const Box = ({id, color, width, height}) => {
    const styles = {
        width: width,
        height: height,
        backgroundColor: color
    }
    
    return (
        <div id={id} className="box" style={styles}></div>
    )
}

export default Box