import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter, faInstagramSquare, faYoutubeSquare, faTwitch, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return <div className="footer">
    <div className='footer-main'>
      <div className="footer-logo">
        <Link to="/">
          <img 
            src="https://cf.geekdo-static.com/images/logos/bgg-primary-logo-reverse.svg" 
            alt="Board Game Geek" 
          />
        </Link>
      </div>

      <div className='footer-company'>
        <h1>COMPANY</h1>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Advertise</li>
          <li>Support BGF</li>
        </ul>
      </div>

      <div className='footer-policies'>
        <h1>POLICIES</h1>
        <ul>
          <li>Community Guidelines</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Manage Cookies</li>
        </ul>
      </div>

      <div className='footer-connect'>
        <h1>CONNECT</h1>
        <ul className='footer-socials'>
          <li><FontAwesomeIcon icon={faFacebookSquare} /></li>
          <li><FontAwesomeIcon icon={faTwitter} /></li>
          <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
          <li><FontAwesomeIcon icon={faYoutubeSquare} /></li>
          <li><FontAwesomeIcon icon={faTwitch} /></li>
          <li><FontAwesomeIcon icon={faDiscord} /></li>
          
        </ul>
      </div>
    </div>

    <div className='footer-credit'>
      <p>BoardGameFreak is a clone of the website BoardGameGeek by Madeleine Pla</p>
    </div>
  </div>
}

export default Footer;