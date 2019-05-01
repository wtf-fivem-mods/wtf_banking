export default actions => e => {
  switch (e.data.type) {
    case 'open':
      actions.showUI(true)
      break
    case 'setBankBalance':
      actions.setBankBalance(e.data.bankBalance)
      break
    case 'setCashBalance':
      actions.setCashBalance(e.data.cashBalance)
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
