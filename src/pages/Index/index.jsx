import React from 'react'
import { Link } from 'react-router-dom'

export default class Index extends React.Component {
  render () {
    return (
      <div className="index-page">
        <Link to="/">首页</Link>
        <Link to="/artist">歌手</Link>
      </div>
    )
  }
}