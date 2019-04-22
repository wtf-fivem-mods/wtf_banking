import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import styled from 'styled-components/macro'
import actions from '../actions'
import depositIcon from './images/wtf-deposit2-icon.png'
import withdrawalIcon from './images/wtf-withdrawal2-icon.png'
import transferIcon from './images/wtf-transfer2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'

export default connect(
  () => {},
  actions
)(({ dismissUI }) => (
  <div>
    <AccountTitle>Your Account:</AccountTitle>
    <AccountBox>
      <p>Checking ... 1337</p>
      <p>$999,999.00</p>
      <p>Available Balance</p>
    </AccountBox>
    <ActionButtons>
      <Link to="/test">
        <Button icon={depositIcon}>Deposit(test)</Button>
      </Link>
      <Button icon={withdrawalIcon}>Withdrawal</Button>
      <Button icon={transferIcon}>Transfer</Button>
      <Button icon={exitIcon} onClick={dismissUI}>
        Exit(dismiss)
      </Button>
    </ActionButtons>
  </div>
))

const Button = ({ icon, children, onClick }) => (
  <StyledButton onClick={onClick}>
    <ButtonIcon icon={icon} />
    <ButtonTitle>{children}</ButtonTitle>
  </StyledButton>
)

const AccountTitle = styled.p`
  color: #979797;
  padding-left: 15px;
  font-weight: bold;
  text-transform: uppercase;
`
const AccountBox = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  margin: 0 15px;
  margin-bottom: 150px;

  p :nth-child(1) {
    color: #979797;
    padding-left: 15px;
    font-size: 20px;
    margin: 5px 0;
  }
  p :nth-child(2) {
    color: #858585;
    font-size: 50px;
    margin: 0;
    padding: 0 15px;
    letter-spacing: 2px;
  }
  p :nth-child(3) {
    color: #979797;
    padding-left: 15px;
    font-size: 20px;
    margin-top: 2px;
    margin-bottom: 2px;
    font-weight: 100;
  }
`
const ActionButtons = styled.div`
  margin-top: 29px;
  cursor: pointer;

  a {
    color: #979797;
    text-decoration: none;
  }
`
const StyledButton = styled.div`
  background-color: #e7e6e6;
  border-top: 2px solid #858585;
  height: 80px;
  display: flex;
  align-items: flex-start;
  padding: 15px;
`

const ButtonIcon = styled.div`
  align-self: center;
  background: url(${props => props.icon});
  height: 50px;
  width: 50px;
`
const ButtonTitle = styled.div`
  align-self: center;
  margin: 0 50px;
  color: #979797;
  font-size: 30px;
`
