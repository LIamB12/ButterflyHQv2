import React from 'react'
import "./card.css"
const Card = (props) => {
  return (
    <div className="card" onClick = {() => props.setter(props.page)}>
        <img alt = "img" src = {props.source}/>
        <div className="head">
            <h3>{props.head}</h3>
            {props.text.map((c) => {
                return <p>{c}</p>
            })}
        </div>
    </div>
  )
}

export default Card