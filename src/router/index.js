import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import Index from '../pages/Index/index'
import ArtistList from '../pages/ArtistList/artistList'
import ArtistPage from '../pages/artistPage/artistPage'

export default class Routers extends React.Component {
  render () {
    return (
      <Router>
        <Route path='/' component={Index} />
        <Route path='/artist' component={ArtistList} />
        <Route path='/artist/:id' component={ArtistPage} />
      </Router>
    )
  }
}