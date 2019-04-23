import styled from 'styled-components/macro'

export const Title = styled.div`
  color: #979797;
  margin: 30px 0;
  padding-left: 15px;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
`

export const InputBox = styled.div`
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

export const AccountBox = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  margin: 0 15px;
  margin-bottom: 52px;

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
