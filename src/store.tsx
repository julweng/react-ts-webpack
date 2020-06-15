import React, { createContext, useReducer } from 'react'

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

export const Store = createContext<IState | any>(initialState)

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    default:
      return state
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatchAction] = useReducer(reducer, initialState)
  return <Store.Provider value={{state, dispatchAction}}>{props.children}</Store.Provider>
}