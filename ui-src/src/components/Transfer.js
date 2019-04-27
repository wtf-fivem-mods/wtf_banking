import React from 'react'
import { Link } from 'react-router-dom'
import { ActionButtons, Button } from './ActionButtons'
import exitIcon from './images/wtf-exit2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import { TransferBox, Title } from './UI'

export default () => {
  return (
    <div>
      <Title>Checking account Balance: $999,999.00</Title>
      <TransferBox>
        <p>Transfer amount:</p>
        <input required pattern="[0-9]" />
        <p>Payee account number:</p>
        <input required pattern="[0-9]" />
      </TransferBox>
      <ActionButtons>
        <Link to="/">
          <Button icon={transferIcon}>Transfer</Button>
        </Link>
        <Link to="/">
          <Button icon={exitIcon}>Cancel</Button>
        </Link>
      </ActionButtons>
    </div>
  )
}
