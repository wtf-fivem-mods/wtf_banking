import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppActions, useAppState } from '../context'
import { ActionButtons, Button } from './ActionButtons'
import CurrencyInput from './CurrencyInput'
import exitIcon from './images/wtf-exit2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import { Title, TransferBox } from './UI'

export default () => {
  const { bankBalance } = useAppState()
  const { showUI } = useAppActions()
  const [amount, setAmount] = useState('')
  const [payee, setPayee] = useState('')

  function handleOnSubmit(e) {
    e.preventDefault()
    fetch('http://wtf_banking/sendTransfer', {
      method: 'POST',
      body: JSON.stringify({
        amount: parseInt(amount),
        payee: parseInt(payee),
      }),
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
        <TransferBox>
          <p>Transfer amount:</p>
          <CurrencyInput value={amount} onChange={setAmount} required />
          <p>Payee account number:</p>
          <input
            value={payee}
            onChange={e => setPayee(e.target.value)}
            required
            pattern="[0-9]+"
          />
        </TransferBox>
        <ActionButtons>
          <Button as="button" type="submit" icon={transferIcon}>
            Transfer
          </Button>
          <Link to="/">
            <Button icon={exitIcon}>Back</Button>
          </Link>
        </ActionButtons>
      </form>
    </div>
  )
}
