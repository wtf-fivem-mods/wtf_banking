import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import { TransferBox, Title } from './UI'
import { useAppState, useAppActions } from '../context'

export default () => {
  const { bankBalance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')
  const [payee, setPayee] = useState('')

  function sendTransfer() {
    fetch('http://wtf_banking/sendTransfer', {
      method: 'POST',
      body: JSON.stringify({
        amount: parseInt(amount),
        payee: parseInt(payee),
      }),
    }).finally(() => showUI(false))
  }

  return (
    <div>
      <Title>Bank account Balance: ${bankBalance.toLocaleString()}.00</Title>
      <TransferBox>
        <p>Transfer amount:</p>
        <input
          required
          pattern="[0-9]"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <p>Payee account number:</p>
        <input
          required
          pattern="[0-9]"
          value={payee}
          onChange={e => setPayee(e.target.value)}
        />
      </TransferBox>
      <ActionButtons>
        <Button icon={transferIcon} onClick={sendTransfer}>
          Transfer
        </Button>
        <Link to="/">
          <Button icon={exitIcon}>Back</Button>
        </Link>
      </ActionButtons>
    </div>
  )
}
