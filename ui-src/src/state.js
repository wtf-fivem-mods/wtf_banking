import history from './history'

export const IsDev = process.env.NODE_ENV !== 'production'

export const initialState = {
  shown: IsDev,
  hudShown: false,
  bankBalance: 0,
  hudIDG: 0,
  hudItems: {},
}

export const actions = {
  showUI: (draft, shown) => {
    if (!shown) history.push('/')
    draft.shown = shown
  },
  setBankBalance: (draft, balance) => {
    draft.bankBalance = parseInt(balance)
  },
  addToHUD: (draft, data) => {
    const id = draft.hudIDG++
    data.id = id
    draft.hudItems[id] = data
    draft.hudShown = true
  },
  removeFromHUD: (draft, id) => {
    delete draft.hudItems[id]
    draft.hudShown = Object.keys(draft.hudItems).length > 0
  },
}
