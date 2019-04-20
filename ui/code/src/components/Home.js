import { Component } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router/match';
import reduce from '../reducers';
import * as actions from '../actions';

@connect(reduce, actions)
export default class Home extends Component {
	dismiss() {
		this.props.showUI(false)
	}
	render({ app }) {
		return (<div>
			<h1>Hello, WTF Banking!</h1>
			<Link href="/test">Test</Link>
			<button onClick={this.dismiss.bind(this)}>Dismiss</button>
		</div>);
	}
}