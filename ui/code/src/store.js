import { createStore } from 'redux';

let ACTIONS = {
    DISPLAY_UI: ({ app, ...state}, { shown }) => ({
        app: {
            ...app,
            shown: shown
        },
        ...state
    })
}

const INITIAL = {
	app: {
        shown: false
    }
}

export default createStore( (state, action) => (
	action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state
), INITIAL, typeof devToolsExtension==='function' ? devToolsExtension() : undefined)