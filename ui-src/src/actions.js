import history from './history'

const actions = store => ({
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
  setBalance: (state, balance) => ({ balance: parseInt(balance) }),
  sendDeposit: (state, amount) =>
    fetch('http://wtf_banking/sendDeposit', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }).then(r => actions(store).showUI(state, false)),
  sendWithdraw: (state, amount) =>
    fetch('http://wtf_banking/sendWithdraw', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    }).then(r => actions(store).showUI(state, false)),
})

export default actions
