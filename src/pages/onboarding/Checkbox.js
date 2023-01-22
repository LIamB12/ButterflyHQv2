import React from 'react'
import "./checkbox.css"
const Checkbox = (props) => {
  return (
    <div className="check_cont">
        <input type = "checkbox" />
        <h1>{props.text}</h1>
    </div>
  )
}

export default Checkbox