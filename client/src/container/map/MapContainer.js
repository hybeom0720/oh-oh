import React, { useState, useEffect } from "react";

import Map from "./Map";
import { KAKAO_APP_KEY } from "../../config/keys";

function MapContainer({ location }) {
  const [map, setMap] = useState(null);

  const createMap = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        let container = document.getElementById("kakao-map");
        let options = {
          center: new kakao.maps.LatLng(37.504783, 127.053617),
          level: 3,
        };
        const createdMap = new kakao.maps.Map(container, options);
        setMap(createdMap);
      });
    };
  };

  useEffect(() => {
    createMap();
  }, []);

  return <Map></Map>;
}

export default MapContainer;
