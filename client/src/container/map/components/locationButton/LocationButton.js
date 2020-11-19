import React from "react";
import { MdMyLocation } from "react-icons/md";

import * as S from "./style";

function CurrentLocationButton({ buttonProps }) {
  return (
    <S.ButtonBlock onClick={buttonProps}>
      <MdMyLocation />
    </S.ButtonBlock>
  );
}

export default CurrentLocationButton;
