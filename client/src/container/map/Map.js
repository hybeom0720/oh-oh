import React from "react";
import * as S from "./style";

import LocationButton from "./components/locationButton/LocationButton";

function Map() {
  return (
    <S.MapWrapper>
      <S.MapBlock id="kakao-map"></S.MapBlock>
      <LocationButton></LocationButton>
    </S.MapWrapper>
  );
}

export default Map;
