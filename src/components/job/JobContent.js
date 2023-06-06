import React from "react";
import JobDetailInfo from "./JobDetailInfo";

const JobContent = () => {
  return (
    <div className="jobContent">
      <p className="jobName">
        입주관리매니저
        <span className="statusBox">지원률 높음</span>
      </p>
      <p className="company">KCC 부산 센텀</p>
      <p className="address">부산시 해운대구 반여로 42 (우)48042</p>
      <JobDetailInfo/>
      <div className="content">
        [입주관리매니저가 하는 일]
        주거용 부동산을 관리하며, 관리 및 유지보수에 대한
        책임을 집니다. 입주 신청서 및 계약서 작성, 임대료 징수,
        유지보수 및 수리 요청 처리, 퇴거 절차 관리 등 일상적인
        부동산 관리 업무를 수행합니다.
        입주민과의 의견 조율과 갈등 해결,
        새로운 입주민 모집과 관련된 마케팅 및 홍보활동도
        담당할 수 있습니다.
      </div>
      <div className="pageBottomPadding"></div>
    </div>
  );
}

export default JobContent;