import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'redux-zero/react'
import { bindActions } from 'redux-zero/utils'
import actions from './actions'
import App from './components/App'
import Debug from './components/Debug'
import store from './store'
import { HashRouter as Router } from 'react-router-dom'

const boundActions = bindActions(actions, store)

if (typeof window.invokeNative === 'undefined') {
  boundActions.showUI(true)
  boundActions.setDebug(true)
}

window.addEventListener('message', e => {
  switch (e.data.type) {
    case 'open':
      boundActions.showUI(true)
      break
    default:
  }
})

@connect(
  ({ debug }) => ({ debug }),
  actions
)
class Main extends Component {
  render() {
    const { debug } = this.props
    return (
      <Router>
        {debug ? <Debug /> : null}
        <App />
      </Router>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)
