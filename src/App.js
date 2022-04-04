import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./responsive.css";
import "./style.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Welcome from "./pages/Welcome/Welcome";
import VerifyCode from "./pages/VerifyCode/VerifyCode";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import { attemptGetUser } from "./store/thunks/user";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot" element={<ForgotPassword />} />
            <Route path="verifycode" element={<VerifyCode />} />
            <Route path="register" element={<Register />} />
            <Route path="welcome" element={<Welcome />} />
            <Route path="resetpassword" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>)

}

export default App;
