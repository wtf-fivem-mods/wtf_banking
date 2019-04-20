import { Component } from 'preact';
import { connect, Provider } from 'preact-redux';
import reduce from './reducers';
import * as actions from './actions';
import App from './components/App';
import Debug from './components/Debug';
import store from './store';

if (typeof window.invokeNative === 'undefined') {
    store.dispatch(actions.showUI(true))
    store.dispatch(actions.setDebug(true))
}

window.addEventListener('message', (e) => {
    switch (e.data.type) {
        case 'open':
            store.dispatch(actions.showUI(true))
            break;
    }
});

@connect(reduce, actions)
class Main extends Component {
    render({ app }) {
        return app.debug ? (
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