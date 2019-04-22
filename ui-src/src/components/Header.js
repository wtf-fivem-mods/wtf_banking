import React from 'react'
import styled from 'styled-components/macro'
import HamburgerMenu from './HamburgerMenu'
import logo from './images/wtf-txt-logo.png'

export default () => (
  <Container>
    <HamburgerMenu />
    <WTFLogo />
    <div style={{ flex: 1 }} />
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: #b80e2b;
  padding-bottom: 6px;
  height: 80px;
`
const WTFLogo = styled.div`
  background: url(${logo});
  background-size: cover;
  height: 45px;
  width: 102px;
`
