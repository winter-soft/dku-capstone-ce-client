import React from "react";
import MajorButton from "./MajorButton";

const MajorButtons = () => {
  return (
    <div className="majorBtnBox">
      <MajorButton title={"입주관리매니저"} content={["CS업무, 입주민과의", <br/>, "의견 조율과 갈등 해결"]}></MajorButton>
      <MajorButton title={"모니터 요원"} content={["주제에 맞는 보고서", <br/>, "작성 및 검사"]}></MajorButton>
      <MajorButton title={"체험단"} content={["기업 상품 후기 작성", <br/>, "또는 홍보대사"]}></MajorButton>
      <MajorButton title={"좌담회"} content={["제품에 대한 다양한 ", <br/>, "의견과 견해 제출"]}></MajorButton>
    </div>
  );
}

export default MajorButtons;