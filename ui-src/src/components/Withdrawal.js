import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import actions from '../actions'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { InputBox, Title } from './UI'

export default connect(
  ({ balance }) => ({ balance }),
  actions
)(({ balance, sendWithdraw }) => {
  const [amount, setAmount] = useState('')
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
        <Button icon={withdrawalIcon} onClick={() => sendWithdraw(amount)}>
          Withdraw
        </Button>
        <Link to="/">
          <Button icon={exitIcon}>Back</Button>
        </Link>
      </ActionButtons>
    </div>
  )
})
