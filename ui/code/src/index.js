import { connect, Provider } from 'redux-zero/preact';
import { bindActions } from 'redux-zero/utils';
import actions from './actions';
import App from './components/App';
import Debug from './components/Debug';
import store from './store';
import { Component } from 'preact';

const boundActions = bindActions(actions, store)

if (typeof window.invokeNative === 'undefined') {
    boundActions.showUI(true)
    boundActions.setDebug(true)
}

window.addEventListener('message', (e) => {
    switch (e.data.type) {
        case 'open':
            boundActions.showUI(true)
            break;
    }
});

@connect(({ debug }) => ({ debug }), actions)
class Main extends Component {
    render({ debug }) {
        return debug ? (
            <div>
                <Debug />
                <App />
            </div>
        ) : <App />
    }
}

export default () => (
    <Provider store={store}>
        <Main />
    </Provider>
)