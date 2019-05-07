import React from 'react'
import API from '../../request/api'
import ArtistCard from '../../components/Artist/ArtistCard.jsx'
import './artistList.scss'

export default class MusicList extends React.Component {
  constructor () {
    super()
    this.artistCategory = [
      {
        category: '入驻歌手',
        cat: 5001
      }, 
      {
        category: '华语男歌手',
        cat: 1001
      }, 
      {
        category: '华语女歌手',
        cat: 1002
      }, 
      {
        category: '华语组合/乐队',
        cat: 1003
      }, 
      {
        category: '欧美男歌手',
        cat: 2001
      }, 
      {
        category: '欧美女歌手',
        cat: 2002
      },
      {
        category: '欧美组合/乐队',
        cat: 2003
      },
      {
        category: '日本男歌手',
        cat: 6001
      },
      {
        category: '日本女歌手',
        cat: 6002
      },
      {
        category: '日本组合/乐队',
        cat: 6003
      },
      {
        category: '韩国男歌手',
        cat: 7001
      },
      {
        category: '韩国女歌手',
        cat: 7002
      }, 
      {
        category: '韩国组合/乐队',
        cat: 7003
      },
      {
        category: '其他男歌手',
        cat: 4001
      }, 
      {
        category: '其他女歌手',
        cat: 4002
      },
      {
        category: '其他组合/乐队',
        cat: 4003
      }, 
    ]
    this.state = {
      artists: [],
      isCrrentIndex: 0
    }
  }

  componentWillMount () {
    this.getArtistList(5001, 0)
  }

  async getArtistList (cat, index) {
    let result = await API.get('/artist/list', { cat })
    console.log()
    this.setState({
      artists: result.data.artists,
      isCrrentIndex: index
    })
  }

  render () {
    return (
      <div id="musicList" className="music-list">
        <div className="artist-category">
        {
          this.artistCategory.map((item, index) => (
            <span key={index} className={this.state.isCrrentIndex === index ? 'active' : '' } onClick={this.getArtistList.bind(this, item.cat, index)}>{item.category}</span>
          ))
        }
        </div>
        <div className="artist-wrapper">
        {
          this.state.artists.map(item => (
            <ArtistCard key={item.id} artistMsg={item} />
          ))
        }
        </div>
      </div>
    )
  }
}