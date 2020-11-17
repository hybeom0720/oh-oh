import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import * as S from "./style";
function PrevButton({ onClick }) {
  return (
    <S.PrevIconWrapper onClick={onClick}>
      <IoIosArrowBack />
    </S.PrevIconWrapper>
  );
}

export default PrevButton;
