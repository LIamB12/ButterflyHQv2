import React from 'react'
import Card from './Card'
import "./cards.css"
import check from "./todos.png"
import clock from "./clock.png"
import comp from "./computer.png"
import speech from "./confrence.png"
import cal from "./calendar.png"
import health from "./wellness.png"

const Cards = (props) => {
  return (
    <div className="card_container">
        <Card page = {2} setter = {props.setter} source = {check} head = "Daily Tasks" text = {["Create daily reports", "Review investor documents with team", "Follow up with Olivia about onboarding", "Shadow Luke 10-11"]}/>
        <Card page = {3}setter = {props.setter} source = {speech} head = "Meetings" text = {["11:00am Progress Report", "12:30pm Performance Review", "4:00pm End of Week Wrap-Up"]}/>
        <Card page = {3}setter = {props.setter}source = {cal} head = "Upcoming Events" text = {["Jan 25 IT Training Seminar", "Jan 27 Team Retreat"]}/>
        <Card page = {3}setter = {props.setter}source = {comp} head = "Technical Support" text = {["Appointments Open 9:00 - 12:00am"]}/>
        <Card page = {3}setter = {props.setter}source = {clock} head = "Clock In/Out" text = {["Remember to clock in and out of your shifts accordingly!"]}/>
        <Card page = {3}setter = {props.setter} source = {health} head = "Wellness" text = {["Mental Health Resources", "Peer Advisory", "Chat with a coworker"]}/>

    </div>
  )
}

export default Cards