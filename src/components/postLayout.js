import React, { Component } from 'react'
import { graphql,  } from 'gatsby'
import { Link } from "gatsby"
import { DiscussionEmbed } from "disqus-react";


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
    const disqusShortname = "codewithtaylor";
    const disqusConfig = {
      identifier: markdownRemark.frontmatter.slug,
      title: markdownRemark.frontmatter.title,
    };
    return (
      <Layout location={location}>
        <SEO title="Posts" />
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p><i>Created: {markdownRemark.frontmatter.date}</i></p>
        <div dangerouslySetInnerHTML={{
          __html: markdownRemark.html
        }}/>
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        <button className='btn'><Link to='/' className='btn-link'>Back</Link></button>
        <button className='btn' style={{marginLeft: '1em', marginBottom: '1em'}}><a href='https://www.taylorjcovington.com/#contact' className='btn-link'>Send a Message</a></button>
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
      date(formatString: "MMMM DD, YYYY")
      slug
    }
  }
}
`
