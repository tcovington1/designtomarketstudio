import React from "react"
import { Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { graphql, staticQuery } from 'gatsby'

const IndexPage = () => (
  
  <Layout>
  <>
    <SEO title="Home" />
    <StaticQuery query={graphql`
      {
        allWordpressPage {
          edges {
            node {
              id
              title 
              content
            }
          }   
        }
      }
    `}
      render={props => (
      <div>{props.allWordpressPage.edges.map(page => (
        <div key={page.node.id}>
          <h1>{page.node.title}</h1>
          <div dangerouslySetInnerHTML={{__html: page.node.content}}/>
        </div>
      ))}
      </div>
      )}
    />
      </>
  </Layout>
  
)

export default IndexPage
