export default actions => e =>
  [e.data].flat().map(data => handleMessage(actions, data))

function handleMessage(actions, data) {
  switch (data.type) {
    case 'open':
      actions.showUI(true)
      break
    case 'setBankBalance':
      actions.setBankBalance(data.balance)
      break
    case 'setCashBalance':
      actions.setCashBalance(data.balance)
      break
    case 'addToHUD':
      const { hudType, amount, message } = data
      actions.addToHUD({
        type: hudType,
        amount: amount,
        message: message,
      })
      break
    default:
  }
}
