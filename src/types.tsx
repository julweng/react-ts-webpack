import { IAction, IEpisode } from './interfaces'
/**
|--------------------------------------------------
| all the types
|--------------------------------------------------
*/
export type FormElem = React.FormEvent<HTMLFormElement>

export type dispatchActionType = (action: IAction) => IAction

export type toggleFavActionType = (episode: IEpisode, favorites: IEpisode[], dispatchAction: dispatchActionType | Dispatch) => IAction

export type Dispatch = React.Dispatch<IAction>
