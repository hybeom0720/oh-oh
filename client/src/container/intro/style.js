import styled from "styled-components";

export const IntroPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2.4rem;
  /* background-color: ${({ theme }) => theme.palette["ohLightGray"]}; */

  font-size: 1.6rem;
`;

export const BannerBlock = styled.div`
  width: 100%;
  padding: 25% 5% 10%;
`;

export const BannerHeadText = styled.p`
  padding-bottom: 1.8rem;

  font-size: 2.4rem;
  font-weight: bold;
`;

export const BannerSubText = styled.p`
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.palette["ohDarkGray"]};
`;
