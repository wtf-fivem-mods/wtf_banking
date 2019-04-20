import createHashHistory from 'history/createHashHistory';
import { Component } from 'preact';
import { connect } from 'preact-redux';
import Router from 'preact-router';
import * as actions from '../actions';
import reduce from '../reducers';
import Home from "./Home";
import style from './style';
import Test from "./Test";


@connect(reduce, actions)
export default class App extends Component {
	render({ app }) {
		return (
            <div class={app.shown ? style.app : style.hideUI}>
                <Router history={createHashHistory()}>
                        <Home path="/" />
                        <Test path="/test" />
                </Router>
            </div>
        );
	}
}