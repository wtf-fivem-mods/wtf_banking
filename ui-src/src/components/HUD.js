import React, { memo, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'
import { useAppActions, useAppState } from '../context'

const el = document.getElementById('hud')

export default memo(() => {
  return ReactDOM.createPortal(<HUD />, el)
})

function HUD() {
  const { balance, shown, hudShown, hudItems } = useAppState()
  const { removeFromHUD } = useAppActions()
  return (
    <Container shown={shown || hudShown}>
      <Balances bank={balance} />
      <HUDItems items={hudItems} removeFromHUD={removeFromHUD} />
    </Container>
  )
}

const Balances = memo(({ bank }) => {
  return (
    <>
      <Money label="cash" color="#72cb77" value={300} />
      <Money label="bank" color="#b8e5ba" value={bank.toLocaleString()} />
    </>
  )
})

const HUDItems = memo(({ items, removeFromHUD }) => {
  return Object.keys(items).map(key => {
    const { id, type, amount, message } = items[key]
    return (
      <Fading key={id} onRemove={() => removeFromHUD(id)}>
        <Money
          prefix={type === 'credit' ? '+' : '–'}
          color={type === 'credit' ? 'white' : '#E84848'}
          value={amount}
        />
        {message ? (
          <Message dangerouslySetInnerHTML={{ __html: message }} />
        ) : null}
      </Fading>
    )
  })
})

const Fading = memo(({ children, onRemove }) => {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    setShown(true) // do after mount to trigger animation
    const fadeOutTimeout = setTimeout(() => setShown(false), 5000)
    const removeTimeout = setTimeout(onRemove, 6100)
    return () => {
      clearTimeout(fadeOutTimeout)
      clearTimeout(removeTimeout)
    }
  }, [])
  return <StyledFading shown={shown}>{children}</StyledFading>
})

const StyledFading = styled.div`
  opacity: ${props => (props.shown ? 1 : 0)};
  max-height: ${props => (props.shown ? '50vh' : '0vh')};
  transition: all 1s ease-out;
`

const Money = styled(MoneyContainer)`
  color: ${props => props.color};
  ::before {
    content: '${props => props.label}';
    padding-right: 0.5em;
    font-size: 0.7em;
  }
  span::before {
    content: '$';
    position: relative;
    display: inline-block;
    right: -0.03em;
    transform: scale(0.85, 1.12);
  }
`

function MoneyContainer({ className, prefix, value }) {
  return (
    <div className={className}>
      {prefix}
      <span>{value.toLocaleString()}</span>
    </div>
  )
}

const Message = styled.div`
  font-family: 'bankgothic';
  width: 9em;
  position: relative;
  right: 0;
  font-size: 0.5em;
`

const Container = styled.div`
  opacity: ${props => (props.shown ? 1 : 0)};
  transition: ${props => (props.shown ? null : 'opacity 1s ease-in-out')};
  transition-delay: ${props => (props.shown ? null : '2s')};
  position: absolute;
  top: 1.4em;
  right: 0.7em;
  color: white;
  font-size: 60px;
  font-family: 'Pricedown';
  user-select: none;
  text-shadow: -0.04em -0.04em 0 #000, 0 -0.04em 0 #000, 0.04em -0.04em 0 #000,
    0.06em 0 0 #000, 0.04em 0.04em 0 #000, 0 0.04em 0 #000,
    -0.06em 0.04em 0 #000, -0.04em 0 0 #000;
  text-align: right;
`
