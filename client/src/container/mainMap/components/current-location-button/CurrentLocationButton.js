import React from "react";

import * as S from "./style";

function CurrentLocationButton({ buttonProps }) {
  return <S.ButtonBlock onClick={buttonProps}>+</S.ButtonBlock>;
}

export default CurrentLocationButton;
