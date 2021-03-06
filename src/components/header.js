import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'


import logo from '../images/lion-logo-transp.png'
import cwt from '../images/cwt.svg'

const HeaderWrapper = styled.div`
  background: #f1f3f3;
  color: black;
  img {
    margin-bottom: 0;
  }

`;

const HeaderContainer = styled.div`
display: flex;
  margin: 0 auto;
  max-width: 850;
  /* padding: 0.5rem; */
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <img style={{width: '100px'}} src={logo} alt="logo"/>
          {/* <img src={cwt} style={{ marginLeft: '1em', marginTop: '.2em'}}/> */}
        </Link>
      </h1>
          {/* <h1 style={{paddingTop: '.5em', fontFamily: 'Questrial, sans-serif'}}>{siteTitle}</h1> */}
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
