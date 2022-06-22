import React from 'react';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.requestGames();
  }

  render() {
    const { games } = this.props;
    // debugger;
    return <div>
      <div className='home-ad'>
        <img 
          src="https://tpc.googlesyndication.com/simgad/6733309159117902287" 
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
              src="https://cf.geekdo-images.com/o4MCll6rZQKGv_U5JEXtxVV2MWY=/825x450/filters:strip_icc()/https%3A%2F%2Fcf.geekdo-static.com%2Fcms%2F2022%2F06%2F13210641%2FApril-Store-Update-Hero-Image.png" 
              alt="June Store Update - Treebeard is Back! Primary Thumbnail" 
            />

            <h1>June Store Update - Treebeard is Back!</h1>
            <p>by LindyBurger • News</p>
          </div>

          <div className='home-top-featurettes'>
            <ul>
              <li>
                <img 
                  src="https://cf.geekdo-images.com/9VCO-3Ny_fFRLoXi16cmzdOj1xo=/80x80/filters:strip_icc()/https%3A%2F%2Fcf.geekdo-static.com%2Fcms%2F2022%2F06%2F21101755%2Fgamem.png" 
                  alt="Report from Tokyo Game Market: Spring 2022 Secondary Thumbnail"  
                />
                <div className='featurette-info'>
                  <h1>Report from Tokyo Game Market: Spring 2022</h1>
                  <p>by saige01 • BoardGameFreak News</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://cf.geekdo-images.com/MbCmKU6nxWyVZFKzVr64_j_NI7w=/80x80/filters:strip_icc()/https%3A%2F%2Fcf.geekdo-static.com%2Fcms%2F2022%2F06%2F08182611%2Fgen-sq.jpeg" 
                  alt="Gen Con 2022 Preview Secondary Thumbnail" 
                />
                <div className='featurette-info'>
                  <h1>Gen Con 2022 Preview</h1>
                  <p>by W Eric Martin</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://cf.geekdo-images.com/L2jZoD-qDOtyl5t3vk2vwV5psYo=/80x80/filters:strip_icc()/https%3A%2F%2Fcf.geekdo-static.com%2Fcms%2F2022%2F06%2F08190006%2FBGG.CON-2022-CMS-Thumbnail.png" 
                  alt="BGG.CON 2022 - Badges Go On Sale June 15th Secondary Thumbnail"  
                />
                <div className='featurette-info'>
                  <h1>BGF.CON 2022 - Badges Go On Sale June 15th</h1>
                  <p>by CaptainQwyx • BGF.CON</p>
                </div>
              </li>
              <li>
                <img 
                  src="https://cf.geekdo-images.com/7PwpcyJSTJwXJeyDpLIdLIL5YAc=/80x80/filters:strip_icc()/https%3A%2F%2Fcf.geekdo-static.com%2Fcms%2F2022%2F06%2F20080132%2Fzauberberg.jpeg" 
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
          <h1>THE HOTNESS</h1>
          <p>The top 10 trending games today.</p>
          <ul>
            {/* {
            games.map(game => <li>{game.title}</li>)
            } */}
          </ul>
        </div>

        <div className='home-ad'>
          <img 
            src="https://tpc.googlesyndication.com/simgad/3509397579391731738" 
            border="0" 
            width="1200" 
            height="125" 
          />
        </div>

        <div className='home-crowdfund'>
          <h1>CROWDFUNDING COUNTDOWN</h1>
        </div>
      </div>
    </div>
  }
}

// export default Home;

const mSTP = (state) => {
  const games = state.entities.games || [];
  // debugger;
  return {
    games
  }
}

const mDTP = (dispatch) => {
  return {
    requestGames: () => dispatch(requestGames())
  }
}

export default connect(mSTP, mDTP)(Home);