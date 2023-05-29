import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpInfo from "./pages/SignUpInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signupInfo" element={<SignUpInfo/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
