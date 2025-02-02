import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  return (
    <div className="child" style={{ backgroundColor: props.color }} onClick={()=>props.onChangeColor(getRandomColor())}/>
  )
}

export default Child;
