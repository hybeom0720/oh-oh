import React, { useCallback, useState, useEffect } from "react";

import MainMap from "./MainMap";

function MainMapContainer() {
  const [location, setLocation] = useState(null);

  const success = (position) => {
    const locationObject = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude,
    };
    console.log(locationObject);
    setLocation(locationObject);
  };

  const error = (error) => {
    console.log(error);
  };

  const getLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, [success, error]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return <MainMap location={location}></MainMap>;
}

export default MainMapContainer;
