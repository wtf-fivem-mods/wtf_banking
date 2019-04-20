import { route } from 'preact-router';

const actions = store => ({
	setDebug: (state, debug) => ({ debug }),
	showUI: (state, shown) => {
		if (shown === false) {
			route('/')
		}
		return { shown }
	},
	dismissUI: (state) => {
		fetch('http://wtf_banking/dismiss', { method: 'POST' }) // ignore whether it returns or not
		return actions(store).showUI(state, false)
	}
})

export default actions