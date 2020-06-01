import React from 'react'
import Layout from '../components/layout'

export default ({pageContext}) => (
  <Layout>
      <h1>{pageContext.title}</h1>
      <h1 dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
)