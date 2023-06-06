import React from "react";
import 'swiper/css';
import CurrentJobDetail from "./CurrentJobDetail";

const CurrentJob = ({title}) => {
  const imgExampleUrl = 'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MDlfMjUz/MDAxNTk0MjY5NzYyMTk4.TXPT9JT66Zl4JijVM1yk4r18HXZi5JDPyGvV9uQJXcYg.ewGftr0MDQSUl6CKFytGKQzQh7UcFarHoC41d-RBJ_0g.JPEG.newcentralhq/KakaoTalk_20190429_180100343_01.jpg?type=w800';
  return (
    <div>
      <p className="mainTitle mb20">{title}</p>
      <CurrentJobDetail imgUrl={imgExampleUrl} title="입주관리매니저" content="CS업무, 입주민과의 의견 조율과 갈등 해결"/>
      <CurrentJobDetail imgUrl={imgExampleUrl} title="입주관리매니저" content="CS업무, 입주민과의 의견 조율과 갈등 해결"/>
      <div className="pageBottomPadding"></div>
    </div>
  );
}

export default CurrentJob;