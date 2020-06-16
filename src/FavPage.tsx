import React, { useContext, lazy, Suspense } from 'react'
import { Store } from './store'
import { toggleFavAction } from './action'
import { IEpisodeProps } from './interfaces'

const EpisodeList = lazy<any>(() => import('./EpisodeList'))

const renderLoader = () => <div>Loading...</div>

export default function FavPage(): JSX.Element {
  const { storeState, dispatchAction } = useContext(Store)

  const props: IEpisodeProps = {
    // all the favorites
    episodes: storeState.favorites,
    // favorites after unfav or fav click
    favorites: storeState.favorites,
    dispatchAction,
    toggleFavAction
  }

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
