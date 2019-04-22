import React from 'react'
import styled from 'styled-components/macro'
import logo from './images/wtf-txt-logo.png'

export default () => (
  <Container>
    <HamburgerMenu>
      <input type="checkbox" />
      <span />
      <span />
      <span />
    </HamburgerMenu>
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

const HamburgerMenu = styled.div`
  flex: 1;
  display: block;
  position: relative;
  top: 5px;
  left: 15px;
  z-index: 1;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: rgb(255, 255, 255);
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`
