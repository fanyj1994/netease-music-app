import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

export default class Header extends React.Component {
  render () {
    return (
      <nav>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/artist">歌手</Link></li>
        </ul>
      </nav>
    )
  }
}