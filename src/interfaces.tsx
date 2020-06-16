import { Dispatch, toggleFavActionType } from './types'
/**
|--------------------------------------------------
| all the interfaces
|--------------------------------------------------
*/

export interface ITodo {
  text: string
  complete: boolean
}

export interface IState {
  episodes: IEpisode[]
  favorites: IEpisode[]
}

export interface IAction {
  type: string
  payload: IEpisode[] | IEpisode
}

export interface IEpisode {
  id: number
  name: string
  airdate: string
  airstamp: string
  airtime: string
  image: {
    medium: string
    original: string
  }
  number: number
  runtime: number
  season: number
  summary: string
  url: string
}

export interface IEpisodeProps {
  episodes: IEpisode[]
  toggleFavAction: toggleFavActionType
  favorites: IEpisode[]
  dispatchAction: Dispatch
}