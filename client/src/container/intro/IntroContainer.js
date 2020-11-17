import React from "react";
import { useHistory } from "react-router-dom";

import setCookie from "../../utils/cookie";
import { ONE_WEEK } from "../../constants/date";
import Intro from "./Intro";

function IntroContainer() {
  const history = useHistory();
  const goMainMap = () => {
    setCookie("permission", "true", {
      expires: new Date(Date.now() + ONE_WEEK),
    });

    history.push("/mainMap");
  };
  const getLocation = (callback) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(postion);
    });
  };

  return <Intro goMainMap={() => history.push("/mainMap")} />;
}

export default IntroContainer;
