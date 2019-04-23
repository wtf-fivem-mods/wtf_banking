import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import actions from '../actions'
import { ActionButtons, Button } from './ActionButtons'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { AccountBox, Title } from './UI'

export default connect(
  () => {},
  actions
)(({ dismissUI }) => (
  <div>
    <Title>Your Account:</Title>
    <AccountBox>
      <p>Checking ... 1337</p>
      <p>$999,999.00</p>
      <p>Available Balance</p>
    </AccountBox>
    <ActionButtons>
      <Link to="/deposit">
        <Button icon={depositIcon}>Deposit</Button>
      </Link>
      <Link to="/withdrawal">
        <Button icon={withdrawalIcon}>Withdrawal</Button>
      </Link>
      <Link to="/test">
        <Button icon={transferIcon}>Transfer(test)</Button>
      </Link>
      <Button icon={exitIcon} onClick={dismissUI}>
        Exit(dismiss)
      </Button>
    </ActionButtons>
  </div>
))
