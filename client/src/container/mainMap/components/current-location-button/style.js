import styled from "styled-components";

export const ButtonBlock = styled.div`
  position: fixed;
  right: 5%;
  bottom: 3%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette["ohRed"]};
  border-radius: 8px;
  border: 1px solid #7a1e1e;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media only screen and (min-width: 768px) {
    position: absolute;
  }
`;
