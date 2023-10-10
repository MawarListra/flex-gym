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
import Registrasi from "./pages/Register";
import Login from "./pages/Login";
import ChangePassword from "./pages/ChangePassword";
import SendOTP from "./pages/Verification/SendOTP";
import SuccessOTP from "./pages/Verification/Success";
import HomepageProfile from "./pages/Account/Homepage";

function App() {
  return (
    <Router>
      {/* <div className="flex max-h-screen flex-col w-screen overflow-auto bg-black"> */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/registration" exact element={<Registrasi />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/change-password" exac element={<ChangePassword />} />
        <Route path="/verif-account" exac element={<SendOTP />} />
        <Route path="/otp-success" exac element={<SuccessOTP />} />
        <Route path="/account" exac element={<HomepageProfile />} />
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
