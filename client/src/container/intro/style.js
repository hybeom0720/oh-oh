import React from "react";
import styled from "styled-components";

export const IntroPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.8rem;
  background-color: ${({ theme }) => theme.palette["ohLigthGray"]};
`;
