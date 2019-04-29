import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components/macro'
import fontBankGothic from './fonts/bankgothic.ttf'
import fontPricedown from './fonts/pdown.ttf'
import { useAppActions, useAppState } from '../context'

const el = document.getElementById('hud')

export default () => {
  const { balance, shown } = useAppState()
  // const { showHUD } = useAppActions()
  // useEffect(() => {
  //   const timeout = setTimeout(() => showHUD(false), 3000)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // })
  return ReactDOM.createPortal(
    <>
      <GlobalStyle />
      <Container shown={shown}>
        <Money label="cash" color="#72cb77" value={300} />
        <Money label="bank" color="#b8e5ba" value={balance.toLocaleString()} />
        <Money prefix="&ndash;" color="#E84848" value={100} />
        <Money prefix="+" color="white" value={500} />
        <Message>
          Transfer to <b>Bradley Booper</b>
        </Message>
      </Container>
    </>,
    el
  )
}

const Money = styled(MoneyContainer)`
  color: ${props => props.color};
  ::before {
    content: '${props => props.label}';
    padding-right: 0.5em;
    font-size: 0.7em;
  }
  span:nth-child(1)::before {
    content: '${props => props.prefix}';
  }
  span:nth-child(2)::before {
    position: relative;
    content: '$';
    display: inline-block;
    right: -0.03em;
    transform: scale(0.85, 1.12);
  }
`

function MoneyContainer({ className, value }) {
  return (
    <div className={className}>
      <span />
      <span>{value.toLocaleString()}</span>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  :root {
    --font-size: 60px;
  }

  @font-face {
      font-family: 'bankgothic';
      src: url(${fontBankGothic})
  }

  @font-face {
    font-family: 'Pricedown';
    src: url(${fontPricedown})
  }
`

const Container = styled.div`
  opacity: ${props => (props.shown ? 1 : 0)};
  transition: ${props => (props.shown ? null : 'opacity 1s ease-in-out')};
  transition-delay: ${props => (props.shown ? null : '2s')};
  position: absolute;
  top: 1.4em;
  right: 0.7em;
  color: white;
  font-size: var(--font-size);
  font-family: 'Pricedown';
  user-select: none;
  text-shadow: -0.04em -0.04em 0 #000, 0 -0.04em 0 #000, 0.04em -0.04em 0 #000,
    0.04em 0 0 #000, 0.04em 0.04em 0 #000, 0 0.04em 0 #000,
    -0.04em 0.04em 0 #000, -0.04em 0 0 #000;
  text-align: right;
`

const Message = styled.div`
  font-family: 'bankgothic';
  width: 9em;
  float: right;
  font-size: 0.5em;
`
