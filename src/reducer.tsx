import { IState, IAction, IEpisode } from './interfaces'

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload }
    
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] }

    case 'REMOVE_FAV':
      return { ...state, favorites: state.favorites.filter((fav: IEpisode) => fav.id !== action.payload.id)}
    
    default:
      return state
  }
}