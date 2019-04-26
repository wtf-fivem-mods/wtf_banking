import createStore from 'redux-zero'

const initialState = {
  shown: false,
  balance: 0,
}

export default createStore(initialState)
