export default actions => e => {
  switch (e.data.type) {
    case 'open':
      actions.showUI(true)
      break
    case 'setBalance':
      actions.setBalance(e.data.balance)
      break
    default:
  }
}
