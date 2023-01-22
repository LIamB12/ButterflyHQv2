import React from 'react'
import "./wellness.css"
const qs = [
    "How was your day?:",
    "How was your workload?:",
    "Do you feel like you had support you needed today?:",
    "Did you have a good rest before the workday?:",
    "Please rate your degree of work-related burnout?:",
    "Do you feel like you have a optimal work-life balance?:",
    "How well would you say our organization supports employees in achieving a better balance between work and other responsibilities?:",
]
const Wellness = () => {
    


  return (
    <div className="survey_cont">
        <form>
        {qs.map((c) => {
            return(
            <div className="survery_q">
                <p>{c}</p>
                <input required type="number" min = "0" max = "5"className="num" />
            </div>
            )
        })}
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Wellness