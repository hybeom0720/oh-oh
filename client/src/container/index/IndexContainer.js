import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Index from "./Index";
import { getCookie } from "../../utils/cookie";

function IndexContainer() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      if (getCookie("permission")) {
        history.push("/mainMap");
      } else {
        history.push("/intro");
      }
    }, 1000);
  }, []);

  return <Index></Index>;
}

export default IndexContainer;
