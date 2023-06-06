import React from "react";

const JobDetailInfo = () => {
  return (
    <div className="jobDetailInfo">
      <p>자세한 채용 정보</p>
      <div className="infoBox">
        <span className="number">2</span>
        <span className="text">모집인원</span>
      </div>
      <div className="infoBox">
        <span className="number">7</span>
        <span className="text">지원자 수</span>
      </div>
    </div>
  );
}

export default JobDetailInfo;