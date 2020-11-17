import React from "react";
import { useHistory } from "react-router-dom";
import Intro from "./Intro";

function IntroContainer() {
  const history = useHistory();

  return <Intro goMainMap={() => history.push("/mainMap")} />;
}

export default IntroContainer;
