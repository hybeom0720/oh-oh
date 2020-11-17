export const getLocation = (callback) => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(postion);
  });
};
