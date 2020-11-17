import styled, { css } from "styled-components";

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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  font-size: 1.6rem;
  font-weight: bold;

  ${({ type }) =>
    type === "plain" &&
    css`
      color: ${({ theme }) => theme.palette["ohBlack"]};
      background-color: white;
    `}
  ${({ type }) =>
    type === "solid" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.palette["ohRed"]};
      transition: all 0.2s linear;
    `}
  ${({ type }) =>
    type === "ghost" &&
    css`
      color: ${({ theme }) => theme.palette["ohRed"]};
      border: 1px solid ${({ theme }) => theme.palette["ohRed"]};
      background-color: white;
    `}
  ${({ type }) =>
    type === "ouline" &&
    css`
      color: ${({ theme }) => theme.palette["ohBlack"]};
      border: 1px solid ${({ theme }) => theme.palette["ohDarkGray"]};
      background-color: white;
    `}
  ${({ type }) =>
    type === "disabled" &&
    css`
      color: white;
      background-color: ${({ theme }) => theme.palette["ohDarkGray"]};
    `}
`;
