export function hideUI(text) {
    fetch('http://wtf_banking/dismiss', { method: 'POST' });
	return {
		type: 'DISPLAY_UI',
		shown: false
	};
}

export function showUI(text) {
	return {
		type: 'DISPLAY_UI',
		shown: true
	};
}