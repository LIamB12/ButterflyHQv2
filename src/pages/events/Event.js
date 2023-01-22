import React from 'react'
import "./event.css"

const Event = (props) => {
  return (
    <div className="event_bar">
        <h1>{props.event}</h1>
    </div>
  )
}

export default Event