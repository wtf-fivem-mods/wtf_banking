import history from './history'

const actions = store => ({
  setDebug: (state, debug) => ({ debug }),
  showUI: (state, shown) => {
    if (shown === false) {
      history.push('/')
    }
    return { shown }
  },
  dismissUI: state => {
    fetch('http://wtf_banking/dismiss', { method: 'POST' }) // ignore whether it returns or not
    return actions(store).showUI(state, false)
  },
})

export default actions
