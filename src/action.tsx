import { useContext } from 'react'
import { IAction, IEpisode, IState } from './interfaces'
import { Store } from './store'

type dispatchActionType = (action: IAction) => IAction

export const fetchDataAction = async (dispatchAction: dispatchActionType) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
  const data = await fetch(URL)
  const dataJSON = await data.json()
  return dispatchAction({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const toggleFavAction = (episode: IEpisode, favorites: [IEpisode], dispatchAction: dispatchActionType): IAction => {
  const dispatchObj = {
    type: favorites.includes(episode) ? 'REMOVE_FAV' : 'ADD_FAV',
    payload: episode
  }
  return dispatchAction(dispatchObj)
}