import "./tailwind.css";
import Landing from "./Comp/Landing";
import Dashboard from "./Comp/DashBoard";
import SignupPage from "./Comp/Signup";
import LoginPage from "./Comp/Login";
import List from "./Comp/List";
import Map from "./Comp/Map";
import LocationDetails from "./Comp/LocationDetails";
import Planner from "./Comp/Planner/planner";
import CalendarComponent from "./Comp/Calendar/Calendar";
import ChangeDetail from "./Comp/ChangeDetails";
import { useState } from "react";
function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (title, date) => {
    const newEvent = {
      title: title,
      start: date,
      end: date,
    };
    setEvents([...events, newEvent]);
  };
  return (
    <div className="App">

      <Map/>
    </div>
  );
}

export default App;
