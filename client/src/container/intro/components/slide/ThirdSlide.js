import React from "react";

import * as S from "./style";

function ThirdSlide() {
  return (
    <S.SlideBlock>
      <S.BannerBlock>
        <S.BannerHeadText>위치정보이용동의</S.BannerHeadText>
        <S.BannerSubText>위치 기반의 정보 제공을 위해</S.BannerSubText>
        <S.BannerSubText>정보 제공에 동의해주세요</S.BannerSubText>
        <S.BannerSubText>(대충 처음에만 받는다는 내용)</S.BannerSubText>
      </S.BannerBlock>
    </S.SlideBlock>
  );
}

export default ThirdSlide;
