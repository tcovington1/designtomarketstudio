import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

import SiteInfo from './siteInfo'

const MainMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  background-color: white;
  position: fixed;
  z-index: 1;
  align-items: center;
  top: 0;
`

const MenuItem = styled(Link)`
  color: black;
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
`

const MainMenuInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  width: 1100px;
  height: 100%;
`

const MainMenu = () => (
  <StaticQuery  
    query={graphql`
   {
    allWordpressWpApiMenusMenusItems(filter: {
      name: {
        eq: "Main Menu"
      }
    }) {
      edges {
        node {
          name
          items {
            title
            object_slug
          }
        }
      }
  }
}

    
    `}
    render={props => (
      <MainMenuWrapper>
        <MainMenuInner >
          <SiteInfo />
          {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
            <MenuItem to={item.object_slug} key={item.title}>
              {item.title}
            </MenuItem>
          ))}
        </MainMenuInner>
      </MainMenuWrapper>
    )}
  />
);

export default MainMenu;