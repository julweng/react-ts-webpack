import React, { createContext } from 'react'

interface IState {
  episodes: [],
  favorites: []
}

interface IAction {
  type: string,
  payload: any // for now
}

const initialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = createContext<IState>(initialState)

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}