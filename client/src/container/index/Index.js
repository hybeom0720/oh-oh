import React from "react";

import Loader from "../../components/loader/Loader";
import * as S from "./style";

function Index() {
  return (
    <S.IndexPage>
      <h1>오늘도 오나요?</h1>
      <Loader />
    </S.IndexPage>
  );
}

export default Index;
