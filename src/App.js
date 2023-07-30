import "./tailwind.css";
import Landing from "./Comp/Landing";
import Dashboard from "./Comp/DashBoard";
import SignupPage from "./Comp/Signup";
import LoginPage from "./Comp/Login";
import List from "./Comp/List";
import Map from "./Comp/Map";
import LocationDetails from "./Comp/LocationDetails";
import ChangeDetail from "./Comp/ChangeDetails";
function App() {
  return (
    <div className="App">
      <LocationDetails />
    </div>
  );
}

export default App;
