import { Component } from 'preact';
import { connect } from 'preact-redux';
import { Link } from 'preact-router/match';
import * as actions from '../actions';
import reduce from '../reducers';
import style from './style';

@connect(reduce, actions)
export default class Home extends Component {
    render({ app, showUI }) {
        return (
            <header class={style.debugHeader}>
                <nav>
                    <span>DEBUG MENU</span>
                    <Link href="/">Home</Link>
                    <Link href="/test">Test</Link>
                    {app.shown ?
                        <a onclick={() => showUI(false)}>Hide</a> :
                        <a onclick={() => showUI(true)}>Show</a>}
                </nav>
            </header>
        );
    }
}