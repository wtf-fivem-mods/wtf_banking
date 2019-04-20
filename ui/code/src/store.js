import { createStore } from 'redux';

let ACTIONS = {
    SET_DEBUG: ({ app, ...state }, { debug }) => ({
        app: {
            ...app,
            debug: debug,
        },
        ...state
    }),
    SHOW_UI: ({ app, ...state }, { shown }) => ({
        app: {
            ...app,
            shown: shown,
        },
        ...state
    }),
}

const INITIAL = {
	app: {
        debug: false,
        shown: false,
    }
}

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)