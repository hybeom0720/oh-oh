import React from "react";
import * as S from "./style";

import LocationButton from "./components/locationButton/LocationButton";

function Map({ mapProps }) {
  const { setCenter } = mapProps;
  const buttonProps = {
    onClick: setCenter,
  };
  return (
    <S.MapWrapper>
      <S.MapBlock id="kakao-map"></S.MapBlock>
      <LocationButton buttonProps={buttonProps}></LocationButton>
    </S.MapWrapper>
  );
}

export default Map;
