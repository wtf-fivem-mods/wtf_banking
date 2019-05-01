import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppActions, useAppState } from '../context'
import { ActionButtons, Button } from './ActionButtons'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import { InputBox, Title } from './UI'

export default () => {
  const { bankBalance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')

  function sendDeposit() {
    fetch('http://wtf_banking/sendDeposit', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }).finally(() => showUI(false))
  }

  return (
    <div>
      <Title>Bank account Balance: ${bankBalance.toLocaleString()}.00</Title>
      <InputBox>
        <p>Amount to deposit:</p>
        <input
          required
          pattern="[0-9]"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </InputBox>
      <ActionButtons>
        <Button icon={depositIcon} onClick={sendDeposit}>
          Deposit
        </Button>
        <Link to="/">
          <Button icon={exitIcon}>Back</Button>
        </Link>
      </ActionButtons>
    </div>
  )
}
