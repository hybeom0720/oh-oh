import React from "react";
import * as S from "./style";

function Button({ size, children, ...props }) {
  return (
    <S.ButtonWrapper>
      <S.ButtonBlock size={size}>{children}</S.ButtonBlock>
    </S.ButtonWrapper>
  );
}

Button.defaultProps = {
  size: "80%",
};

export default Button;
