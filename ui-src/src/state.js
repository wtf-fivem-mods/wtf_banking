import history from './history'

export const IsDev = process.env.NODE_ENV !== 'production'

export const initialState = {
  shown: IsDev,
  balance: 0,
}

export const actions = {
  showUI: (draft, shown) => {
    if (!shown) history.push('/')
    draft.shown = shown
  },
  setBalance: (draft, balance) => {
    draft.balance = parseInt(balance)
  },
}
