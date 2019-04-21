import { Component } from 'preact';
import { connect } from 'redux-zero/preact';
import { Link } from 'preact-router/match';
import actions from '../actions';
import style from './style';

@connect(({ shown }) => ({ shown }), actions)
export default class Home extends Component {
    componentWillMount() {
        document.body.classList.add(style.debugBg)
    }
    componentWillUnmount() {
        document.body.classList.remove(style.debugBg)
    }
    render({ shown, showUI }) {
        return (
            <header class={style.debugHeader}>
                <nav>
                    <span>DEBUG MENU</span>
                    <Link href="/">Home</Link>
                    <Link href="/test">Test</Link>
                    {shown ?
                        <a onclick={() => showUI(false)}>Hide</a> :
                        <a onclick={() => showUI(true)}>Show</a>}
                </nav>
            </header>
        );
    }
}