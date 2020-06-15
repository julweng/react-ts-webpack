import React, { createContext, useReducer } from 'react'
import { IState } from './interfaces'
import { reducer } from './reducer'

const initialState: IState = {
  episodes: [],
  favorites: []
}

export const Store = createContext<IState | any>(initialState)

export const StoreProvider = (props: any): JSX.Element => {
  const [storeState, dispatchAction] = useReducer(reducer, initialState)
  return <Store.Provider value={{storeState, dispatchAction}}>{props.children}</Store.Provider>
}