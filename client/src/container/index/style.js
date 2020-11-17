import styled from "styled-components";

export const IndexPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 4.8rem 2.4rem;

  color: white;
  background-color: ${({ theme }) => theme.palette["ohRed"]};
  font-size: 3.2rem;
  font-weight: bold;
`;
