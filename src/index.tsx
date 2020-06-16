import React from 'react'
import ReactDOM from 'react-dom'
import { Router, RouteComponentProps } from '@reach/router'
import { StoreProvider } from './store'
import App from './App'
import HomePage from './HomePage'
import FavPage from './FavPage'

const root = document.getElementById('app-root')

// any react page and all the other props that @reach/router RouteComponentProps provides
const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps ) => props.pageComponent

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/favs" />
      </App>
    </Router>
  </StoreProvider>, root
)