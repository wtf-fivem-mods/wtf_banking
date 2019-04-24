import React from 'react'
import styled from 'styled-components/macro'

export const Button = ({ icon, children, onClick }) => (
  <StyledButton onClick={onClick}>
    <ButtonIcon icon={icon} />
    <ButtonTitle>{children}</ButtonTitle>
  </StyledButton>
)

export const ActionButtons = styled.div`
  margin-top: 15px;
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
