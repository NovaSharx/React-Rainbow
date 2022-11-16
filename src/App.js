import React, { useState } from "react"
import ColorBlock from "./colorBlock"
import ColorForm from "./colorForm"

function App() {

  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  // Adds a new color to the existing array using a spread operator
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;
