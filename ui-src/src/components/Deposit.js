import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppActions, useAppState } from '../context'
import { ActionButtons, Button } from './ActionButtons'
import CurrencyInput from './CurrencyInput'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import { InputBox, Title } from './UI'

export default () => {
  const { bankBalance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')

  function handleOnSubmit(e) {
    e.preventDefault()
    fetch('http://wtf_banking/sendDeposit', {
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
          <p>Amount to deposit:</p>
          <CurrencyInput required value={amount} onChange={setAmount} />
        </InputBox>
        <ActionButtons>
          <Button as="button" type="submit" icon={depositIcon}>
            Deposit
          </Button>
          <Link to="/">
            <Button icon={exitIcon}>Back</Button>
          </Link>
        </ActionButtons>
      </form>
    </div>
  )
}
