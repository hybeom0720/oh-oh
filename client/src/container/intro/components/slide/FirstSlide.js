import React from "react";

import * as S from "./style";

function FirstSlide() {
  return (
    <S.SlideBlock>
      <S.BannerBlock>
        <S.BannerHeadText>붕어빵, 오늘도 오나요?</S.BannerHeadText>
        <S.BannerSubText>여러분의 제보로 만들어 가는</S.BannerSubText>
        <S.BannerSubText>당신 근처의 붕어빵 트럭!</S.BannerSubText>
      </S.BannerBlock>
    </S.SlideBlock>
  );
}

export default FirstSlide;
