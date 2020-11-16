import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  width: ${(props) => props.size};
  height: 4.8rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  font-size: 1.6rem;
  font-weight: bold;
`;
