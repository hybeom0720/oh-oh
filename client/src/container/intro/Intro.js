import React from "react";

import Button from "../../components/button/Button";
import * as SIZE_OPTION from "../../constants/size";
import * as S from "./style";

function Intro() {
  const { LARGE_BUTTON } = SIZE_OPTION;

  return (
    <S.IntroPage>
      <S.BannerBlock>
        <S.BannerHeadText>붕어빵, 오늘도 오나요?</S.BannerHeadText>
        <S.BannerSubText>여러분의 제보로 만들어 가는</S.BannerSubText>
        <S.BannerSubText>당신 근처의 붕어빵 트럭!</S.BannerSubText>
      </S.BannerBlock>
      <Button size={LARGE_BUTTON}>확인하고 시작</Button>
    </S.IntroPage>
  );
}

export default Intro;
