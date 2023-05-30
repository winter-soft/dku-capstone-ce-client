import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupInfo from "./pages/SignupInfo";
import SignupMajor from "./pages/SignupMajor";
import SignupPrivacy from "./pages/SignupPrivacy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signupInfo" element={<SignupInfo/>}></Route>
      <Route path="signupMajor" element={<SignupMajor/>}></Route>
      <Route path="signupPrivacy" element={<SignupPrivacy/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
