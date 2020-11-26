import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import * as S from "./style";

function NextButton({ onClick }) {
  return (
    <S.NextIconWrapper onClick={onClick}>
      <IoIosArrowForward />
    </S.NextIconWrapper>
  );
}

export default NextButton;
