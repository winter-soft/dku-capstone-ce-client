import React from "react";
import BottomMenuDetail from "./BottomMenuDetail";
import '../../css/BottomMenu.css';

const BottomMenu = ({activeMenu}) => {
  return (
    <div className="bottomMenu">
      <BottomMenuDetail linkTo="/main" icon={activeMenu === "main" ? "home" : "home-outline"} text="홈"/>
      <BottomMenuDetail linkTo="/job" icon={activeMenu === "job" ? "people" : "people-outline"} text="채용"/>
      <BottomMenuDetail linkTo="/education" icon={activeMenu === "education" ? "ribbon" : "ribbon-outline"} text="교육"/>
      <BottomMenuDetail linkTo="/history" icon={activeMenu === "history" ? "reader" : "reader-outline"} text="히스토리"/>
      <BottomMenuDetail linkTo="/mypage" icon={activeMenu === "mypage" ? "person" : "person-outline"} text="MY"/>
    </div>
  );
}

export default BottomMenu;