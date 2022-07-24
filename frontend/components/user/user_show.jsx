import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    window.scrollTo(0, 0);
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    
    debugger
    if (!user || !user.ratings) {
      return null
    }
    
    let list_created;
    let user_join = new Date(user.created_at)
    user_join = user_join.toDateString()
    return  <div className='main-content user-profile'>
      
      <div className='profile-box'>
        <h1>{`${user.username}'s lists`}</h1>

        {
          user.lists.map((list, i) => {
            {
              list_created = new Date(list.created_at)
              list_created = list_created.toDateString()
            }

            return <li key={i} className='user-list'>
              <Link to={`/lists/${list.id}`}>{list.title}</Link>
              <p>{list_created}</p>
            </li>
          })
        }
      </div>

      <div className='profile-box'>
        <h1>{`${user.username}'s ratings`}</h1>

        {
          user.ratings.map((rating, i) => {
            let gameTitle = user.rated_games.find(x => x.id == rating.game_id).title

            return <li key={i} className='user-rating'>
              <Link to={`/games/${rating.game_id}`}>{gameTitle}</Link>
              <div className='user-rating-stars'>
                {
                  [...Array(10).keys()].map(i => {
                    return <p
                      className={i + 1 <= rating.score ? "starred" : "not-starred"}
                    >★</p>
                  })
                }
              </div>
            </li>
          })
        }
      </div>

      <div className='profile-box'>
        <h1>{`${user.username}'s activity`}</h1>

        <div className='user-activity'>
          <h2>GameFreak Since</h2>
          <p>{user_join}</p>
        </div>
        <div className='user-activity'>
          <h2>Ratings given</h2>
          <p>{user.ratings.length}</p>
        </div>
        <div className='user-activity'>
          <h2>Likes Given</h2>
          <p>{user.list_likes.length}</p>
        </div>
        <div className='user-activity'>
          <h2>Comments Given</h2>
          <p>{user.list_comments.length}</p>
        </div>
      </div>

    </div>
  }
}

export default UserShow;
