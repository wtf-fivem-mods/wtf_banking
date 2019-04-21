import { Component } from 'preact'
import { connect } from 'redux-zero/preact'
import { Link } from 'preact-router/match'
import actions from '../actions'

@connect(
  state => state,
  actions
)
export default class Home extends Component {
  render({ dismissUI }) {
    return (
      <div>
        <h1>Hello, WTF Banking!</h1>
        <Link href="/test">Test</Link>
        <button onClick={dismissUI}>Dismiss</button>
      </div>
    )
  }
}
