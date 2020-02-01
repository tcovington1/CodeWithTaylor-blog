import React, { Component } from 'react'
import { graphql,  } from 'gatsby'
import { Link } from "gatsby"


import SEO from '../components/seo'
import Layout from './layout'

// Static Query
// Used anywhere, doesn't accept variables, can't use context

//Page Query
//Must be use on pages

export default class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { location } = this.props;
    return (
      <Layout location={location}>
        <SEO title="Posts" />
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }}/>
        <button className='btn'><Link to='/' className='btn-link'>Back</Link></button>
      </Layout>
    )
  }
}

export const query = graphql`
 query PostQuery($slug: String!) {
  markdownRemark(frontmatter: {
    slug: {
      eq: $slug
    }
  }) {
    html
    frontmatter {
      title
      date
      slug
    }
  }
}
`
