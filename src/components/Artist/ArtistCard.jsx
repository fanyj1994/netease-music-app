import React from 'react'
import { Link } from 'react-router-dom'

export default class ArtistCard extends React.Component {
  constructor () {
    super()
    this.state = {
      artistMessage: {}
    }
  }

  render () {
    return (
      <div className="artist-card">
        <Link to={`/artist/${this.props.artistMsg.id}`}>
          <img alt={this.props.artistMsg.name} src={this.props.artistMsg.picUrl} />
          <p className="artist-name">{this.props.artistMsg.name}</p>
        </Link>
      </div>
    )
  }
}