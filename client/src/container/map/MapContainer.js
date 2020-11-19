import React, { useEffect, useState } from "react";

import Map from "./Map";
import { useMapState, useMapDispatch } from "../../context/MapContext";
import { setLocation } from "../../utils/locaiton";
import { KAKAO_APP_KEY } from "../../config/keys";

function MapContainer({}) {
  const { center } = useMapState();
  const mapDispatch = useMapDispatch();
  // const [map, setMap] = useState(null);

  const createMap = (center) => {
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
          center: new kakao.maps.LatLng(center.latitude, center.longitude),
          level: 4,
        };
        const createdMap = new kakao.maps.Map(container, options);
      });
    };
  };

  useEffect(() => {
    if (center) {
      createMap(center);
      console.log("실행했냐");
    } else {
      setLocation(mapDispatch);
    }
    console.log("가냐");
  }, [center]);

  return <Map></Map>;
}

export default MapContainer;
