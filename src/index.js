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
import Main from "./pages/Main";
import Job from "./pages/Job";
import Education from "./pages/Education";
import History from "./pages/History";
import Mypage from "./pages/Mypage";
import Jobs from "./pages/Jobs";
import ScrollToTop from "./components/common/ScrollToTop";
import Apply from "./pages/Apply";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="signupInfo" element={<SignupInfo/>}></Route>
      <Route path="signupMajor" element={<SignupMajor/>}></Route>
      <Route path="signupPrivacy" element={<SignupPrivacy/>}></Route>
      <Route path="main" element={<Main/>}></Route>
      <Route path="job" element={<Job/>}></Route>
      <Route path="jobs" element={<Jobs/>}></Route>
      <Route path="education" element={<Education/>}></Route>
      <Route path="history" element={<History/>}></Route>
      <Route path="mypage" element={<Mypage/>}></Route>
      <Route path="apply" element={<Apply/>}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
