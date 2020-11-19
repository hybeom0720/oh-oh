import React from "react";

import * as S from "./style";
import MapContainer from "../map/MapContainer";

function MainMap({ mainMapProps }) {
  const { mapState } = mainMapProps;

  return (
    <S.MapBlock>
      <MapContainer></MapContainer>
    </S.MapBlock>
  );
}

export default MainMap;
