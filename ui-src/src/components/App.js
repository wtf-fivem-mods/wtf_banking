import React, { useEffect } from 'react'
import { Route } from 'react-router'
import { HashRouter as Router } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { useAppActions, useAppState } from '../context'
import messageListener from '../messageListener'
import { IsDev } from '../state'
import Debug from './Debug'
import Deposit from './Deposit'
import Header from './Header'
import Home from './Home'
import Transfer from './Transfer'
import Withdrawal from './Withdrawal'
import HUD from './HUD'

export default () => {
  const { shown } = useAppState()
  return (
    <Container shown={shown}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/withdrawal" component={Withdrawal} />
      <Route path="/transfer" component={Transfer} />
    </Container>
  )
}

function Container({ children, shown }) {
  const actions = useAppActions()
  useEventListener('message', messageListener(actions))
  return (
    <>
      <GlobalStyle />
      <Router>
        {IsDev ? <Debug /> : null}
        {shown ? <Content>{children}</Content> : null}
      </Router>
      <HUD />
    </>
  )
}

function useEventListener(type, listener) {
  useEffect(() => {
    window.addEventListener(type, listener)
    return () => {
      window.removeEventListener(type, listener)
    }
  })
}

const Content = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
`

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font: 14px/1.21 'Helvetica Neue', arial, sans-serif;
    font-weight: 400;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
  }
`
