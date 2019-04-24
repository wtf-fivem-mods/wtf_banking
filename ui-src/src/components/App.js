import React from 'react'
import { Route } from 'react-router'
import { connect } from 'redux-zero/react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import actions from '../actions'
import Header from './Header'
import Home from './Home'
import Test from './Test'
import Deposit from './Deposit'
import Withdrawal from './Withdrawal'
import Transfer from './Transfer'

export default connect(
  ({ shown }) => ({ shown }),
  actions
)(({ shown }) => (
  <>
    <GlobalStyle />
    <App shown={shown}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Route path="/deposit" component={Deposit} />
      <Route path="/withdrawal" component={Withdrawal} />
      <Route path="/transfer" component={Transfer} />
    </App>
  </>
))

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
