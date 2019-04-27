import React from 'react'
import { Link } from 'react-router-dom'
import { useAppActions, useAppState } from '../context'
import { ActionButtons, Button } from './ActionButtons'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import { AccountBox, Title } from './UI'

export default () => {
  const { balance } = useAppState()
  const { showUI } = useAppActions()

  function handleOnDismiss() {
    fetch('http://wtf_banking/dismiss', { method: 'POST' }).finally(() =>
      showUI(false)
    )
  }

  return (
    <div>
      <Title>Your Account:</Title>
      <AccountBox>
        <p>Checking ... 1337</p>
        <p>${balance.toLocaleString()}.00</p>
        <p>Available Balance</p>
      </AccountBox>
      <ActionButtons>
        <Link to="/deposit">
          <Button icon={depositIcon}>Deposit</Button>
        </Link>
        <Link to="/withdrawal">
          <Button icon={withdrawalIcon}>Withdrawal</Button>
        </Link>
        <Link to="/transfer">
          <Button icon={transferIcon}>Transfer</Button>
        </Link>
        <Button icon={exitIcon} onClick={handleOnDismiss}>
          Exit
        </Button>
      </ActionButtons>
    </div>
  )
}
