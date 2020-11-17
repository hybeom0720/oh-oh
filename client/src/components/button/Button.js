import React from "react";
import * as S from "./style";

function Button({ buttonProps }) {
  const { size, type, content, onClick } = buttonProps;

  return (
    <S.ButtonWrapper>
      <S.ButtonBlock size={size} type={type} onClick={onClick}>
        {content}
      </S.ButtonBlock>
    </S.ButtonWrapper>
  );
}

Button.defaultProps = {
  buttonProps: {
    size: "80%",
    type: "plain",
    content: "확인",
    onClick: null,
  },
};

export default Button;
