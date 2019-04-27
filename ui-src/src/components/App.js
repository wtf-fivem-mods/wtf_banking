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
import Test from './Test'
import Transfer from './Transfer'
import Withdrawal from './Withdrawal'

export default () => {
  const { shown } = useAppState()
  const actions = useAppActions()
  useEventListener('message', messageListener(actions))

  return (
    <Router>
      <GlobalStyle />
      {IsDev ? <Debug /> : null}
      <App shown={shown}>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/withdrawal" component={Withdrawal} />
        <Route path="/transfer" component={Transfer} />
      </App>
    </Router>
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

const App = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  display: ${props => (props.shown ? 'block' : 'none')};
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
