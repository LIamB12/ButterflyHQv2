import React from 'react'
import "./question.css"

const Question = (props) => {
  return (
    <div className="q_box">
        <div className="title">
            <h3>{props.title}</h3>
        </div>
        <div className="body">
            <p>{props.response}</p>
        </div>
    </div>
  )
}

export default Question