import React from "react";
import styled from "styled-components";

const DefaultLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;

  @media only screen and (min-width: 425px) {
    & {
      width: 475px;
      margin: 0 auto;
    }
  }
`;

function Layout({ children }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}

export default Layout;
