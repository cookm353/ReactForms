import React from "react"

const Box = ({color, width, height}) => {
    const styles = {
        width: width,
        height: height,
        backgroundColor: color
    }
    
    return (
        <div style={styles}></div>
    )
}

export default Box