import './App.css';
import Events from './pages/events/Events';
import pfp from "./3135715.png"
import bell from "./bell-icon-transparent-notification-free-png.webp"
import Library from './pages/library/Library';
import React, {useState} from "react";
import Cards from './pages/cards/Cards';
import Onboarding from './pages/onboarding/Onboarding';
import logo from "./logo.png"
import Wellness from './pages/wellness/Wellness';


function App() {

  const [page, setPage] = useState(0)

  const pages = [<Cards setter = {setPage}/>, <Library />, <Onboarding />, <Events />, <Wellness />]

  return (
    <div className="App">
      <div className="sidebar">
          <p></p>
          <p></p>
          <img src = {logo} alt = "img" />
          <p></p>
          <p></p>
          <p onClick={() => setPage(0)}>Home</p>
          <p onClick = {() => setPage(1)}>Library</p>
          <p onClick = {() => setPage(2)}>Onboarding</p>
          <p onClick = {() => setPage(3)}>Schedule</p>
          <p onClick = {() => setPage(4)}>Wellness</p>
        
      </div>
      <div className="main">
        <div id = "nav" className="bar">
          <div className="search">
            <input placeholder='Search...' />
          </div>
          <div className="notifs">
          <img src = {bell} alt="img" />
            <img src = {pfp} alt="img" />
            

          </div>
        </div>
        <div onClick={() => setPage(2)} className="bar2">
          <h6>ONBOARDING</h6>
          <p>6 Onboarding tasks to complete</p>
        </div>
        <div className="page">
          {pages[page]}
        </div>
        
      </div>
    </div>
  );
}

export default App;
