import React from "react"

function ColorBlock(props) {
    return (
        <div style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

export default ColorBlock