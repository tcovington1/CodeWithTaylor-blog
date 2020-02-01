import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query SitePostQuery {
      allMarkdownRemark {
    edges {
      node {
        excerpt
        frontmatter {
          title
          # date(formatString: "MMM DD, YYYY")
          slug
        }
      }
    }
  }
    }
  `)
  return (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
  {/* <p>{data.allMarkdownRemark.edges.node.frontmatter.title}</p> */}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
  }

export default SecondPage
