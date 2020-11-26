import styled from "styled-components";

export const ButtonBlock = styled.div`
  position: fixed;
  right: 5%;
  top: 3%;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1), 0 0 3px 0 rgba(0, 0, 0, 0.32);

  color: ${({ theme }) => theme.palette["ohDarkGray"]};
  font-size: 2.5rem;

  @media only screen and (min-width: 768px) {
    position: absolute;
  }
`;
