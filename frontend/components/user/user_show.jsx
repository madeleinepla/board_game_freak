import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    window.scrollTo(0, 0);
    this.props.requestUser(this.props.match.params.userId);
  }

  render() {
    const { user } = this.props;
    // debugger
    if (!user.ratings) {
      return null
    }
    return  <div className='main-content user-profile'>
      
      <div className='profile-box'>
        <h1>{`${user.username}'s lists`}</h1>
        
      </div>

      <div className='profile-box'>
        <h1>{`${user.username}'s ratings`}</h1>

      </div>

      <div className='profile-box'>
        <h1>{`${user.username}'s activity`}</h1>

      </div>

    </div>
  }
}

export default UserShow;
