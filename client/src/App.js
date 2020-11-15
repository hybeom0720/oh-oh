import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle, Layout } from "./styles/index.js";

function App() {
  return (
    <GlobalStyle>
      <Layout>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Layout>
    </GlobalStyle>
  );
}

export default App;
