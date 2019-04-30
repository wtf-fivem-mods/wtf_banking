export default actions => e => {
  switch (e.data.type) {
    case 'open':
      actions.showUI(true)
      break
    case 'setBalance':
      actions.setBalance(e.data.balance)
      break
    case 'addToHUD':
      const { hudType, amount, message } = e.data
      actions.addToHUD({
        type: hudType,
        amount: amount,
        message: message,
      })
      break
    default:
  }
}
