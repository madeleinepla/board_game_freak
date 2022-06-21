import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCoffee } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ currentUser, logout }) => {

  const display = currentUser ? (
    <div className='dropdown'>
      <button className="nav-btn">
        {currentUser.username} <FontAwesomeIcon icon={faCaretDown} className='caret'/>
      </button>
      <div className="dropdown-content">
        <a href="#">Profile</a>
        <a href="#">Account</a>
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  ) : (
    <div>
      <Link className="nav-btn" to="/login">Sign In</Link>
      <Link className="nav-btn" to="/signup">Join (it's free)!</Link>
    </div>
  );

  return <div className='navbar'>

    <Link to="/">
      <img
        width="80"
        height="38"
        aria-hidden="true"
        src="https://cf.geekdo-static.com/images/logos/navbar-logo-bgg-b2.svg"
        alt="boardgame geek logo">
      </img>
    </Link>
    <div className='dropdown'>
      <button className="nav-btn">
        Browse <FontAwesomeIcon icon={faCaretDown} className='caret'/>
      </button>
      <div className="dropdown-content">
        <Link to="/games">All Boardgames</Link>
        <a href="#">Categories</a>
        <a href="#">Artists</a>
      </div>
    </div>

    <div className='dropdown'>
      <button className="nav-btn">
        FreakLists <FontAwesomeIcon icon={faCaretDown} className='caret' />
      </button>
      <div className="dropdown-content">
        <Link to="/lists">Hot</Link>
        <a href="#">Recent</a>
        <a href="#">Create New</a>
      </div>
    </div>
    
    {display}


  </div>
};

export default NavBar;
