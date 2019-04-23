import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import actions from '../actions'
import { ActionButtons, Button } from './ActionButtons'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import { InputBox, Title } from './UI'

export default connect(
  () => {},
  actions
)(() => (
  <div>
    <Title>Checking account Balance: $999,999.00</Title>
    <InputBox>
      <p>Amount to deposit:</p>
      <input required pattern="[0-9]" />
    </InputBox>
    <ActionButtons>
      <Link to="/">
        <Button icon={depositIcon}>Deposit</Button>
      </Link>
      <Link to="/">
        <Button icon={exitIcon}>Cancel</Button>
      </Link>
    </ActionButtons>
  </div>
))
