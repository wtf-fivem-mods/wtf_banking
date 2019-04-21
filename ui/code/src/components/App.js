import createHashHistory from 'history/createHashHistory'
import { Component } from 'preact'
import { connect } from 'redux-zero/preact'
import Router from 'preact-router'
import actions from '../actions'
import Home from './Home'
import style from './style'
import Test from './Test'

@connect(
  ({ shown }) => ({ shown }),
  actions
)
export default class App extends Component {
  render({ shown }) {
    return (
      <div class={shown ? style.app : style.hideUI}>
        <Router history={createHashHistory()}>
          <Home path="/" />
          <Test path="/test" />
        </Router>
      </div>
    )
  }
}
