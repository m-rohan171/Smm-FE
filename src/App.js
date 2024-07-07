import "./App.css";
import { Login } from "./auth/Login/Login";
import { Signup } from "./auth/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Setting } from "./components/Settings/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        {/* <Dashboard /> */}
      </Router>
    </div>
  );
}

export default App;
