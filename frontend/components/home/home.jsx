import React from 'react';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';
import { requestLists } from '../../actions/list_actions';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

class Home extends React.Component {
  componentDidMount() {
    this.props.requestGames();
    this.props.requestLists();
  }

  render() {
    const { games, lists } = this.props;
    // debugger;
    return <div>
      <div className='home-ad'>
        <img 
          src="https://i.ibb.co/cyt4SR2/home-page-ad1.png" 
          border="0" 
          width="1200" 
          height="125" 
          alt="" 
        />
      </div>

      <div className='main-content'>
        <ul className='home-nav'>
          <li>Explore</li>
          <li>Dashboard</li>
        </ul>

        <div className='home-top'>
          <div className='home-top-feature'>
            <img 
              src="https://i.ibb.co/3prQWmR/home-page-feat.webp" 
              alt="June Store Update - Treebeard is Back! Primary Thumbnail" 
            />

            <h1>June Store Update - Treebeard is Back!</h1>
            <p>by LindyBurger • News</p>
          </div>

          <div className='home-top-featurettes'>
            <ul>
              <li>
                <img 
                  src="https://i.ibb.co/0FFM5pW/home-page-featurette1.webp" 
                  alt="Report from Tokyo Game Market: Spring 2022 Secondary Thumbnail"  
                />
                <div className='featurette-info'>
                  <h1>Report from Tokyo Game Market: Spring 2022</h1>
                  <p>by saige01 • BoardGameFreak News</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://i.ibb.co/DkfbcR0/home-page-featurette2.webp" 
                  alt="Gen Con 2022 Preview Secondary Thumbnail" 
                />
                <div className='featurette-info'>
                  <h1>Gen Con 2022 Preview</h1>
                  <p>by W Eric Martin</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://i.ibb.co/qF028GL/home-page-featurette3.webp" 
                  alt="BGG.CON 2022 - Badges Go On Sale June 15th Secondary Thumbnail"  
                />
                <div className='featurette-info'>
                  <h1>BGF.CON 2022 - Badges Go On Sale June 15th</h1>
                  <p>by CaptainQwyx • BGF.CON</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://i.ibb.co/7bM822t/home-page-featurette4.webp" 
                  alt="Zauberberg Wins 2022 Kinderspiel des Jahres Secondary Thumbnail" 
                />
                <div className='featurette-info'>
                  <h1>Zauberberg Wins 2022 Kinderspiel des Jahres</h1>
                  <p>by W Eric Martin • BoardGameFreak News</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='home-hot'>
          <div className='home-title'>
            <h1>THE HOTNESS</h1>
            <p>The top 5 trending games today.</p>
          </div>

          <ul className='home-hot-carousel'>
            {
              games.slice(0, 5).map(game => {
                return <Link key={game.id} to={`/games/${game.id}`} className='home-hot-carousel-item'>
                  <div className='home-hot-thumbnail'>
                    <img 
                      src={game.header_img} 
                      alt={`${game.title} thumbnail`} 
                    />
                  </div>

                  <div className='home-hot-info'>
                    <h1>{game.id} - {game.title}</h1>
                    <p>{game.tagline}</p>
                  </div>
                </Link>
              })
            }
          </ul>
        </div>

        <div className='home-ad'>
          <img 
            src="https://i.ibb.co/C28DXgY/home-page-ad2.png" 
            border="0" 
            width="1200" 
            height="125" 
          />
        </div>

        <div className='home-lists'>
          <div className='home-title'>
            <h1>HOT FREAKLISTS</h1>
          </div>

          <div className='home-lists-carousel'>
            {
              lists.map(list => {
                // debugger;
                return <Link key={list.id} to={`/lists/${list.id}`} className='home-lists-carousel-item'>
                  <div className='home-lists-thumbnail'>
                    {
                      list.list_items.map((list_item, i) => {
                        if (i < 3 && list_item.game) {
                          let thumbnailImg = list.list_items[i].game.header_img
                          return <div key={i} className='home-lists-thumbnail-sub'>
                            <img src={thumbnailImg} alt="" />
                          </div>
                        }
                      })
                    }
                  </div>

                  <div className='home-lists-info'>
                    <h1>{list.title}</h1>
                    <p>{list.author.username} • <FontAwesomeIcon icon={faThumbsUp} /> {list.likes}</p>
                  </div>
                </Link>
              })
            }
          </div>
        </div>
      </div>
    </div>
  }
}

// export default Home;

const mSTP = (state) => {
  const games = Object.values(state.entities.games)
  const lists = Object.values(state.entities.lists).sort((a, b) => (a.likes < b.likes ? 1 : -1)).slice(0, 5)
  // debugger;
  return {
    games,
    lists
  }
}

const mDTP = (dispatch) => {
  return {
    requestGames: () => dispatch(requestGames()),
    requestLists: () => dispatch(requestLists())
  }
}

export default connect(mSTP, mDTP)(Home);