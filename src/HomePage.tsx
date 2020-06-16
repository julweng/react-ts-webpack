import React, { useEffect, useContext, lazy, Suspense } from 'react'
import { Store } from './store'
import { fetchDataAction, toggleFavAction } from './action'
import { IEpisodeProps } from './interfaces'

const EpisodeList = lazy<any>(() => import('./EpisodeList'))

const renderLoader = () => <div>Loading...</div>

export default function HomePage(): JSX.Element {
  const { storeState, dispatchAction } = useContext(Store)

  const props: IEpisodeProps = {
    episodes: storeState.episodes,
    favorites: storeState.favorites,
    dispatchAction,
    toggleFavAction
  }

  useEffect(() => {
    storeState.episodes.length === 0 && fetchDataAction(dispatchAction)
  })

  return (
    <>
      <Suspense fallback={renderLoader()}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </>
  );
}

