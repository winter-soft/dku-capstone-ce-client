import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import {confirmLogout, getItemByKey} from "../common";

const Mypage = () => {
  return (
    <div className="App">
      <Header/>
      <div className="mypage">
        <img src={getItemByKey("profileImageUrl")} alt="" className="profile"/>
        <input type="text" className="customInput" value={getItemByKey("nickName")}/>
        <input type="text" className="customInput" value={getItemByKey("email")}/>
        <button className="snsButton black">수정하기</button>
        <button className="snsButton primary" onClick={confirmLogout}>로그아웃</button>
      </div>
      <BottomMenu activeMenu="mypage"/>
    </div>
  );
};

export default Mypage;