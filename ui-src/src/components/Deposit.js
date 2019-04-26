import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import actions from '../actions'
import { ActionButtons, Button } from './ActionButtons'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import { InputBox, Title } from './UI'

export default connect(
  ({ balance }) => ({ balance }),
  actions
)(({ balance, sendDeposit }) => {
  const [amount, setAmount] = useState('')
  return (
    <div>
      <Title>Checking account Balance: ${balance.toLocaleString()}.00</Title>
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
        <Button icon={depositIcon} onClick={() => sendDeposit(amount)}>
          Deposit
        </Button>
        <Link to="/">
          <Button icon={exitIcon}>Cancel</Button>
        </Link>
      </ActionButtons>
    </div>
  )
})
