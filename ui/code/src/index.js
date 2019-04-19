import { Provider } from 'preact-redux';
import Router from 'preact-router'
import { h, render } from 'preact'
import createHashHistory from 'history/createHashHistory'

import store from './store';
import * as actions from './actions';

import Home from "./components/Home"
import Test from "./components/Test"
import './style'

window.addEventListener('message', (e) => {
    switch (e.data.type) {
        case 'open':
            store.dispatch(actions.showUI())
            break;
    }
});

const Main = () => (
    <Provider store={store}>
        <Router history={createHashHistory()}>
            <Home path="/" />
            <Test path="/test" />
        </Router>
    </Provider>
);

render(<Main />, document.getElementById('app'));