import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { InputBox, Title } from './UI'
import { useAppState, useAppActions } from '../context'

export default () => {
  const { balance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')

  function sendWithdraw() {
    fetch('http://wtf_banking/sendWithdraw', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }).finally(() => showUI(false))
  }

  return (
    <div>
      <Title>Checking account Balance: ${balance.toLocaleString()}.00</Title>
      <InputBox>
        <p>Amount to withdraw:</p>
        <input
          required
          pattern="[0-9]"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </InputBox>
      <ActionButtons>
        <Button icon={withdrawalIcon} onClick={sendWithdraw}>
          Withdraw
        </Button>
        <Link to="/">
          <Button icon={exitIcon}>Back</Button>
        </Link>
      </ActionButtons>
    </div>
  )
}
