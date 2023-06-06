import React from "react";
import BottomMenuDetail from "./BottomMenuDetail";
import '../../css/BottomMenu.css';

const BottomMenu = () => {
  return (
    <div className="bottomMenu">
      <BottomMenuDetail icon="home-outline" text="홈"/>
      <BottomMenuDetail icon="people-outline" text="채용"/>
      <BottomMenuDetail icon="ribbon-outline" text="교육"/>
      <BottomMenuDetail icon="reader-outline" text="히스토리"/>
      <BottomMenuDetail icon="person-outline" text="MY"/>
    </div>
  );
}

export default BottomMenu;