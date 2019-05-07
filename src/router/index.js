import React from 'react'
import {Route, HashRouter, Switch, BrowserRouter as Router} from 'react-router-dom'
import Index from '../pages/Index/index'
import ArtistList from '../pages/ArtistList/artistList'
import ArtistPage from '../pages/artistPage/artistPage'
import Header from '../components/Header/Header'

export default class Routers extends React.Component {
  render () {
    return (
      <div className="container">
        <HashRouter>
          <Header />
          <Switch>
            <Route path='/artist/:id' component={ArtistPage} />
            <Route path='/artist' component={ArtistList} />
            <Route path='/' component={Index} />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}