import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({ currentUser, logout }) => {

  return <div className='navbar'>
    
    <div className='navbar-nav'>
      <div>
        <Link to="/" className='home-icon'>
          <img
            width="80"
            height="38"
            aria-hidden="true"
            src="https://i.ibb.co/Q9vqCck/navlogo.png"
            alt="boardgame geek logo">
          </img>
        </Link>
      </div>

      <div className='dropdown'>
        <button className="nav-btn">
          Browse <FontAwesomeIcon icon={faCaretDown} className='caret'/>
        </button>
        <div className="dropdown-content">
          <Link to="/games">All Boardgames</Link>
          <Link to="/games/types">Types</Link>
          <Link to="/games/categories">Categories</Link>
          <Link to="/games/mechanics">Mechanics</Link>
        </div>
      </div>

      <div className='dropdown'>
        <button className="nav-btn">
          FreakLists <FontAwesomeIcon icon={faCaretDown} className='caret' />
        </button>
        <div className="dropdown-content">
          <Link to="/lists/hot">Hot</Link>
          <Link to="/lists/recent">Recent</Link>
          <Link to="/lists/mylists">My FreakLists</Link>
          <Link to="/lists/new">Create New</Link>
        </div>
      </div>

    </div>
      
    <div className='navbar-user-info'>
      {
        currentUser ? 
        <div className='dropdown'>
          <button className="nav-btn">
            {currentUser.username} <FontAwesomeIcon icon={faCaretDown} className='caret' />
          </button>
          <div className="dropdown-content">
            {/* <a href="#">Profile</a>
            <a href="#">Account</a> */}
              <Link to={`/users/${currentUser.id}`}>Profile</Link>
            <Link to="/lists/mylists">FreakLists</Link>
            <button onClick={logout}><FontAwesomeIcon icon={faPowerOff} /> Sign Out</button>
          </div>
        </div>
        : 
        <div>
          <Link className="nav-btn" to="/login">Sign In</Link>
          <Link className="nav-btn" to="/signup">Join (it's free)!</Link>
        </div>
      }

      
    </div>

    {/* <div className='navbar-search'>
      <SearchContainer></SearchContainer>
    </div> */}
  </div>
};

export default NavBar;
