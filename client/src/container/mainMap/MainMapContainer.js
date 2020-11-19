import React, { useCallback, useState, useEffect } from "react";

import { useMapState } from "../../context/MapContext";
import MainMap from "./MainMap";

function MainMapContainer() {
  const mapState = useMapState();

  const mainMapProps = {
    mapState,
  };

  return <MainMap mainMapProps={mainMapProps}></MainMap>;
}

export default MainMapContainer;
