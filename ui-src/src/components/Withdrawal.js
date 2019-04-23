import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import actions from '../actions'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { InputBox, Title } from './UI'

export default connect(
  () => {},
  actions
)(() => (
  <div>
    <Title>Checking account Balance: $999,999.00</Title>
    <InputBox>
      <p>Amount to withdraw:</p>
      <input required pattern="[0-9]" />
    </InputBox>
    <ActionButtons>
      <Link to="/">
        <Button icon={withdrawalIcon}>Withdraw</Button>
      </Link>
      <Link to="/">
        <Button icon={exitIcon}>Cancel</Button>
      </Link>
    </ActionButtons>
  </div>
))
