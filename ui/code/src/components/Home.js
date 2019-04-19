import { Component } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router/match';
import reduce from '../reducers';
import * as actions from '../actions';

@connect(reduce, actions)
export default class Home extends Component {
	dismiss() {
		this.props.hideUI()
	}
	render({ app }) {
		return (<div style={{ display: app.shown ? 'block' : 'none' }}>
			<h1>Hello, WTF Banking!</h1>
			<Link href="/test">Test</Link>
			<button onClick={this.dismiss.bind(this)}>Dismiss</button>
		</div>);
	}
}