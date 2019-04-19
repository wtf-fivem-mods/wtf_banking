import { Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Test extends Component {
	render() {
		return (<div>
			<h1>This is test</h1>
			<Link href="/">Home</Link>
		</div>)
	}
}
