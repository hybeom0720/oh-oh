import styled from "styled-components";

export const SlideBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BannerBlock = styled.div`
  width: 100%;
  padding: 25% 8% 10%;
`;

export const BannerHeadText = styled.p`
  padding-bottom: 1.8rem;

  font-size: 2.8rem;
  font-weight: bold;
`;

export const BannerSubText = styled.p`
  margin: 0.4rem 0;
  color: ${({ theme }) => theme.palette["ohDarkGray"]};
`;

export const IndicatorBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15%;
  height: 5vh;
`;

export const IndicatorElement = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  transition: background 0.2s linear;
  background-color: ${(props) => (props.isSelected ? "#D64634" : "#dee2e6")};
`;

export const PrevIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  color: #dee2e6;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const NextIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  color: #dee2e6;
  font-size: 2.5rem;
  cursor: pointer;
  transition: color 0.2s linear;

  &::focus {
    color: "#D64634";
  }
`;
