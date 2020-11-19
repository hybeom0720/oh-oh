import React from "react";

import * as S from "./style";
import MapContainer from "../map/MapContainer";
import CurrentLocationButton from "./components/current-location-button/CurrentLocationButton";

function MainMap({ mainMapProps }) {
  const { location, getLocation } = mainMapProps;
  return (
    <S.MapBlock>
      <MapContainer location={location}></MapContainer>
      <CurrentLocationButton buttonProps={getLocation}></CurrentLocationButton>
    </S.MapBlock>
  );
}

export default MainMap;
