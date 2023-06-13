import React from "react";
import '../css/Apply.css';
import Header from "../components/common/Header";
import ApplyBox from "../components/apply/ApplyBox";
import {getItemByKey} from "../common";

const Apply = () => {
  return (
    <div className="App">
      <Header/>
      <div>
        <p className="applyTitle">지원 정보</p>
        <div>
          <label htmlFor="name" className="applyLabel">이름</label>
          <input type="text" id="name" className="applyInput" value={getItemByKey("nickName")}/>
          <label htmlFor="email" className="applyLabel">이메일</label>
          <input type="text" id="email" className="applyInput" value={getItemByKey("email")}/>
          <label htmlFor="phoneNumber" className="applyLabel">휴대폰 번호</label>
          <input type="text" id="phoneNumber" className="applyInput" defaultValue="010-8225-0640"/>
          <label htmlFor="recommender" className="applyLabel">추천인</label>
          <input type="text" id="recommender" className="applyInput"/>
        </div>

        <div className="mt50">
          <p className="applyTitle">이력사항</p>
          <div className="checkElement">
            <label htmlFor="choiceAll" className="checkboxLabel">전체 선택하기</label>
            <input type="checkbox" id="choiceAll"/>
          </div>
          <p className="applyDescription">주식회사 가화에 보낼 이력사항을 선택해주세요.</p>
        </div>
        <div className="mb50">
          <ApplyBox title={"입주관리매니저"} company={"KCC 스위첸 하버뷰"} date={"2022.11 ~ 2023.02"}/>
          <ApplyBox title={"입주관리매니저"} company={"KCC 스위첸 하버뷰"} date={"2022.11 ~ 2023.02"}/>
          <ApplyBox title={"입주관리매니저"} company={"KCC 스위첸 하버뷰"} date={"2022.11 ~ 2023.02"}/>
        </div>
      </div>

      <button className="bottomNextBtn" onClick="">지원하기</button>
    </div>
  );
};

export default Apply;