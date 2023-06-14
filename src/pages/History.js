import React from "react";
import '../css/Job.css';
import Header from "../components/common/Header";
import BottomMenu from "../components/common/BottomMenu";
import Loading from "../components/common/Loading";
import ApplyImageBox from "../components/apply/ApplyImageBox";

const History = () => {
  return (
    <div className="App">
      <Loading/>
      <Header/>
      <ApplyImageBox title={"안양 KCC 스위첸 아파트 입주관리매니저 지원"} date={"2023.06.14"} imgUrl={"/img/test/6.jpg"}/>
      <BottomMenu activeMenu="history"/>
    </div>
  );
};

export default History;