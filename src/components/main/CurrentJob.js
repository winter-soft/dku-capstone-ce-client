import React from "react";
import 'swiper/css';
import CurrentJobDetail from "./CurrentJobDetail";

const CurrentJob = ({title}) => {
  const imgExampleUrl = [
    'https://mblogthumb-phinf.pstatic.net/MjAyMDA3MDlfMjUz/MDAxNTk0MjY5NzYyMTk4.TXPT9JT66Zl4JijVM1yk4r18HXZi5JDPyGvV9uQJXcYg.ewGftr0MDQSUl6CKFytGKQzQh7UcFarHoC41d-RBJ_0g.JPEG.newcentralhq/KakaoTalk_20190429_180100343_01.jpg?type=w800',
    'https://news.pulmuone.co.kr/webfile/webedit/20161125/20161125163850_[%EC%82%AC%EC%A7%84]%20%ED%92%80%EB%AC%B4%EC%9B%90%2047%EA%B8%B0%20%EC%A3%BC%EB%B6%80%EB%AA%A8%EB%8B%88%ED%84%B0%20%EB%AA%A8%EC%A7%91.jpg',
    'https://image.edaily.co.kr/images/Photo/files/NP/S/2019/06/PS19061300760.jpg',
    'https://ojsfile.ohmynews.com/down/images/1/sowhat2_147568_2[175725].jpg',
  ];
  return (
    <div>
      <p className="mainTitle mb20">{title}</p>
      <CurrentJobDetail imgUrl={imgExampleUrl[0]} title="입주관리매니저" content="CS업무, 입주민과의 의견 조율과 갈등 해결"/>
      <CurrentJobDetail imgUrl={imgExampleUrl[1]} title="모니터 요원" content="신제품 소비자 패널, YTN, 풀무원 등"/>
      <CurrentJobDetail imgUrl={imgExampleUrl[2]} title="체험단, 출연" content="신제품 체험 및 후기글 작성, TV 프로그램 참여"/>
      <CurrentJobDetail imgUrl={imgExampleUrl[3]} title="좌담회, 리서치" content="전화조사원, 면접조사원 등"/>
      <div className="pageBottomPadding"></div>
    </div>
  );
}

export default CurrentJob;