import React, { memo } from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'
import { useAppActions, useAppState } from '../context'
import gtaBg from './images/gtabg.png'

export default memo(() => {
  return (
    <Header>
      <GTABackgroundStyle />
      <nav>
        <span>DEBUG MENU</span>
        <DebugApp />
        <DebugBalances />
        <DebugHUD />
      </nav>
    </Header>
  )
})

function DebugApp() {
  const { shown } = useAppState()
  const { showUI } = useAppActions()
  return (
    <button onClick={() => showUI(!shown)}>{shown ? 'Hide' : 'Show'}</button>
  )
}

function DebugBalances() {
  const { balance } = useAppState()
  const { setBalance } = useAppActions()
  return (
    <input
      value={balance}
      onChange={e => setBalance(e.target.value)}
      placeholder="setBalance"
      type="text"
    />
  )
}

function DebugHUD() {
  return <span>TODO: DebugHUD</span>
}

const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  color: #ccc;
  background: #6d3333;
  line-height: 56px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  nav {
    display: inline-block;
    padding: 0 10px;
  }
  nav a,
  button {
    background: none;
    border: none;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: 300;
    height: 100%;
    letter-spacing: 0.05em;
    outline: 0;
    padding: 0 10px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`

const GTABackgroundStyle = createGlobalStyle`
  body {
    background: url(${gtaBg});
    background-size: cover;
  }
`
