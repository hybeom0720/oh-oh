import React, { useCallback, useState, useEffect } from "react";

import MainMap from "./MainMap";

function MainMapContainer() {
  const [location, setLocation] = useState({
    latitude: 37.578611,
    longitude: 126.977233,
  });

  const success = (position) => {
    const locationObject = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    setLocation(locationObject);
  };

  const error = (error) => {
    console.log(error);
  };

  // const getLocation = useCallback(() => {
  //   navigator.geolocation.getCurrentPosition(success, error, {
  //     maximumAge: 0,
  //   });
  // }, [success, error]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
    console.log("hihi");
  };

  useEffect(() => {
    getLocation();
  }, []);

  const mainMapProps = {
    location,
    getLocation,
  };

  return <MainMap mainMapProps={mainMapProps}></MainMap>;
}

export default MainMapContainer;
