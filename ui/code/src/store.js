import createStore from 'redux-zero'

const initialState = {
  debug: false,
  shown: false,
}

export default createStore(initialState)
