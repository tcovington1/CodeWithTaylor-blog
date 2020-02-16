/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */


import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Spring } from 'react-spring/renderprops'
import { Icon, InlineIcon } from '@iconify/react';
import twitterIcon from '@iconify/icons-logos/twitter';
import githubIcon from '@iconify/icons-logos/github-icon';




import Header from "./header"
import Archive from './archive'
import "./layout.css"
import "./styles.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;

  @media only screen and (max-device-width : 800px) {
    max-width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    padding: 1em;
  }

`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
      file(relativePath: {
        regex: "/bg/"
        }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{height: location.pathname === '/' ? 100 : 200}}
        to={{height: location.pathname === '/' ? 200 : 100}}
        // from={{height: {location.pathname === '/' ? 100 : 200}}
        // to={{height: {location.pathname === '/' 200 : 100}}
      >
        {styles => (
          <div style={{overflow: 'hidden', ...styles}}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* { {location.pathname === '/' && 
       <Img fluid={data.file.childImageSharp.fluid} />

       } */}
      <MainLayout>
        <div>
          {children}
        </div>
        <Archive />
      </MainLayout>
      <footer style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
        <div className="footer-flex footer-link">
          <a href="https://www.taylorjcovington.com">My Portfolio</a>
        </div>
        <div className="footer-flex footer-link">
          <a href="https://www.taylorjcovington.com/#contact">Send a Message</a>
        </div>
        <div className="footer-flex">
          © {new Date().getFullYear()} {data.site.siteMetadata.author}, Built with Gatsby
        </div>
        <div className="footer-flex">
          {/* <Link to='https://twitter.com/codewithtaylor'>
            <img src={twitterIcon}/>
          </Link> */}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
