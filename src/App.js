import "./App.css";
import { Login } from "./auth/Login/Login";
import { Signup } from "./auth/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Setting } from "./components/Settings/Settings";
import { ServiceForm } from "./components/ServiceForm/Serviceform";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/service" element={<ServiceForm />} />
          <Route
            path="/*"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
