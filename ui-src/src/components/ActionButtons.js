import React from 'react'
import styled from 'styled-components/macro'

export const Button = ({ icon, children, onClick, ...props }) => (
  <StyledButton onClick={onClick} {...props}>
    <ButtonIcon icon={icon} />
    <ButtonTitle>{children}</ButtonTitle>
  </StyledButton>
)

export const ActionButtons = styled.div`
  margin-top: 15px;
  cursor: pointer;
  user-select: none;

  a {
    color: #979797;
    text-decoration: none;
  }
`
const StyledButton = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  background-color: #eaeaea;
  border: 0;
  border-top: 2px solid #858585;
  height: 80px;
  padding: 15px;
  transition: background-color 0.15s ease-in;
  outline: 0;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
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
