export function setDebug(debug) {
	return {
		type: 'SET_DEBUG',
		debug 
	};
}

export function showUI(shown) {
	if (shown === false) {
		// tell game client
		fetch('http://wtf_banking/dismiss', { method: 'POST' });
	}
	return {
		type: 'SHOW_UI',
		shown
	};
}