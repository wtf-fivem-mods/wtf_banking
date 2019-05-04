import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { InputBox, Title } from './UI'
import { useAppState, useAppActions } from '../context'
import CurrencyInput from './CurrencyInput'

export default () => {
  const { bankBalance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')

  function handleOnSubmit(e) {
    e.preventDefault()
    fetch('http://wtf_banking/sendWithdraw', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.status === 'ok') {
          return showUI(false)
        }
      })
  }

  return (
    <div>
      <Title>Bank account Balance: ${bankBalance.toLocaleString()}.00</Title>
      <form onSubmit={handleOnSubmit}>
        <InputBox>
          <p>Amount to withdraw:</p>
          <CurrencyInput value={amount} onChange={setAmount} required />
        </InputBox>
        <ActionButtons>
          <Button as="button" type="submit" icon={withdrawalIcon}>
            Withdraw
          </Button>
          <Link to="/">
            <Button icon={exitIcon}>Back</Button>
          </Link>
        </ActionButtons>
      </form>
    </div>
  )
}
