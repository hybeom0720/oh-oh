import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";

function App() {
  return (
    <>
      <GlobalStyle>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </GlobalStyle>
    </>
  );
}

export default App;
