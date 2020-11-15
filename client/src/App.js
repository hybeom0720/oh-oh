import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Intro,
  MainMap,
  SearchMap,
  Report,
  Detail,
  Error,
} from "./pages/index.js";
import { GlobalStyle, Layout } from "./styles/index.js";

function App() {
  return (
    <GlobalStyle>
      <Layout>
        <Switch>
          <Route exact path="/" component={Intro}></Route>
          <Route path="/mainMap" component={MainMap}></Route>
          <Route path="/searchMap" component={SearchMap}></Route>
          <Route path="/report" component={Report}></Route>
          <Route path="/report" component={Detail}></Route>
          <Route path="/*" component={Error}></Route>
        </Switch>
      </Layout>
    </GlobalStyle>
  );
}

export default App;
