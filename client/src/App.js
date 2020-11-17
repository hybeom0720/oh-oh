import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Index,
  Intro,
  MainMap,
  SearchMap,
  Report,
  Detail,
  Error,
} from "./container/index.js";
import { GlobalStyle, Layout } from "./styles/index.js";

function App() {
  return (
    <GlobalStyle>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Index />}></Route>
          <Route path="/intro" render={() => <Intro />}></Route>
          <Route path="/mainMap" render={() => <MainMap />}></Route>
          <Route path="/searchMap" render={() => <SearchMap />}></Route>
          <Route path="/report" render={() => <Report />}></Route>
          <Route path="/detail" render={() => <Detail />}></Route>
          <Route path="/*" render={() => <Error />}></Route>
        </Switch>
      </Layout>
    </GlobalStyle>
  );
}

export default App;
