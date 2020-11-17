import React from "react";

import * as S from "./style";

function SecondSlide() {
  return (
    <S.SlideBlock>
      <S.BannerBlock>
        <S.BannerHeadText>주의사항</S.BannerHeadText>
        <S.BannerSubText>여러분의 제보로 이용됩니다.</S.BannerSubText>
        <S.BannerSubText>부정확 할 수 있습니다.</S.BannerSubText>
        <S.BannerSubText>(대충 정보수정 요청해달라는 내용)</S.BannerSubText>
      </S.BannerBlock>
    </S.SlideBlock>
  );
}

export default SecondSlide;
