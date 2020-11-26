const error = (error) => {
  console.log(error);
};

const options = {
  maximumAge: 0,
  timeout: 10000,
};

export const setLocation = (mapDispatch) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        mapDispatch({
          type: "SET_CENTER",
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error,
      options
    );
  } else {
    console.log("geolocation 못씁니다.");
  }
};
