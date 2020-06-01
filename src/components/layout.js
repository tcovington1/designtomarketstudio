import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Header from "./header"
import MainMenu from "./mainMenu"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  *,
  *::after,
  *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

  body {
    box-sizing: border-box;
    margin: 0;
  padding: 0;
    font-family: 'Lato', sans-serif;
  }
`;

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 5rem auto;
`;



const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children }
    </LayoutWrapper>
  </>
)

export default Layout
