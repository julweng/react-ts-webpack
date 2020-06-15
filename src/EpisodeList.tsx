import React from 'react'
import { IEpisode } from './interfaces'

const EpisodesList = (props: any): JSX.Element => {
  const { episodes, toggleFavAction, favorites, dispatchAction } = props
  return (
    <>
      {episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className="episode-box">
            <a href={episode.url} rel="noreferrer noopener" target="_blank">
              <img src={episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
            </a>
            <div>{episode.name}</div>
            <section>
              Season: {episode.season} Number: {episode.number}
            </section>
            <button type="button" onClick={() => toggleFavAction(episode, favorites, dispatchAction)}>
              {favorites.find((fav: IEpisode) => fav.id === episode.id) ? 'Unfav' : 'Fav'}
            </button>
          </section>
        )
      })}
    </>
  )
}

export default EpisodesList