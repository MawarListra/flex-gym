import logo from "./logo.svg";
import "./App.css";
import React, { useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <div className="flex max-h-screen flex-col w-screen overflow-hidden">
        <Routes>
          <Route path="/" exact element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
