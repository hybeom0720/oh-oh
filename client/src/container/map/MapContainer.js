import React, { useEffect, useState } from "react";

import Map from "./Map";
import { KAKAO_APP_KEY } from "../../config/keys";

function MapContainer({ location }) {
  const [map, setMap] = useState(null);

  const createMap = () => {
    document.getElementById("kakao-map").innerHTML = " ";

    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      let container = document.getElementById("kakao-map");
      const { kakao } = window;
      kakao.maps.load(() => {
        let options = {
          center: new kakao.maps.LatLng(location.latitude, location.longitude),
          level: 4,
        };
        const createdMap = new kakao.maps.Map(container, options);
        setMap(createdMap);
      });
    };
  };

  useEffect(() => {
    createMap();
  }, [location.latitude]);

  return <Map></Map>;
}

export default MapContainer;
