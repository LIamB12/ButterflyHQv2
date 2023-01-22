import React from 'react'
import Checkbox from './Checkbox'
import "./onboarding.css"
const Onboarding = () => {

    const tasks = [
        "Create your profile",
        "Connect to Slack",
        "Complete IT Training",
        "Introduce yourself to your coworkers",
        "Access mental health resources",
        "Complete professional training with Darrell",

    ]
  return (
    <div className="on_cont">
        {tasks.map((c) => {
            return (<Checkbox text = {c} />)
        })}
    </div>
  )
}

export default Onboarding