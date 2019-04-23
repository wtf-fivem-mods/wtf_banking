import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'redux-zero/react'
import styled from 'styled-components/macro'
import actions from '../actions'
import depositIcon from './images/wtf-deposit2-icon.png'
import exitIcon from './images/wtf-exit2-icon.png'

export default connect(
  () => {},
  actions
)(({ dismissUI }) => (
  <div>
    <div>
      <div>
        <DepositTitle>Checking account Balance: $999,999.00</DepositTitle>
      </div>
      <DepositBox>
        <p>Amount to deposit:</p>
        <input required pattern="[0-9]" />
      </DepositBox>
      <ActionButtons>
        <Link to="/">
          <Button icon={depositIcon}>Deposit</Button>
        </Link>
        <Link to="/">
          <Button icon={exitIcon}>Cancel</Button>
        </Link>
      </ActionButtons>
    </div>
  </div>
))

const Button = ({ icon, children, onClick }) => (
  <StyledButton onClick={onClick}>
    <ButtonIcon icon={icon} />
    <ButtonTitle>{children}</ButtonTitle>
  </StyledButton>
)

const DepositTitle = styled.p`
  color: #979797;
  margin: 30px 0;
  padding-left: 15px;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`
const DepositBox = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  margin: 0 15px;
  padding: 15px;
  margin-bottom: 144px;

  p :nth-child(1) {
    color: #979797;
    font-size: 30px;
    margin: 5px 0;
  }
  input {
    width: 425px;
    height: 50px;
    margin-top: 30px;
    border: 2px solid #c7c7c7;
    border-radius: 5px;
    font-size: 30px;
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
