/**
|--------------------------------------------------
| all the interfaces
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<any>
  favorites: Array<any>
}

export interface IAction {
  type: string
  payload: any // for now
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