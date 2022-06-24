import React from 'react';
import { Link } from 'react-router-dom';

class GameShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestGame(this.props.match.params.gameId)
    // const bg = document.getElementsByClassName('game-header')
    // bg[0].style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${this.props.game.bg_img})`
    // debugger;
  }

  render() {
    const { game, type, category, mechanisms } = this.props
    const bg = document.getElementsByClassName('game-header')
    if (bg[0]) {
      bg[0].style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("${game.bg_img}")`
    }

    let descriptionParagraphs = []
    if (game.description) {
      descriptionParagraphs = game.description.split("\n")
    }

    // debugger;

    return <div className='main-content'>
      <div className='game-header'>

        <div className='game-header-image'>
          <img
            src={game.header_img}
            alt={`${game.title} Cover Artwork`}
          />
        </div>

        <div className='game-header-body'>
          <div className='game-header-title-container'>
            <div className='game-header-title-rating'>
              <div className='hexagon'>
                <div className='hexagon1'></div>
                <div className='hexagon2'></div>
                <div className='hexagon3'></div>
              </div>
              
              <p className='rating'>10</p>
            </div>

            <div className='game-header-title-info'>
              <div className='game-header-title'>
                <div className='title'>{game.title}</div>
                <div className='year'>({game.year})</div>
              </div>
              <p>{game.tagline}</p>
            </div>
          </div>

          <div className='game-header-gameplay'>
            {
              game.min_players === game.max_players ?
              <p>{game.min_players} Players</p> :
              <p>{game.min_players} - {game.max_players} Players</p>
            }
            {
              game.min_playtime === game.max_playtime ?
                <p>{game.min_playtime} Min</p> :
                <p>{game.min_playtime} - {game.max_playtime} Min</p>
            }
            <p>Ages: {game.age}+</p>
            <p>Weight: 3/5</p>
          </div>

          <div className='game-header-credits'>
            <p>Designer: {game.designer}</p>
            <p>Artist: {game.artist}</p>
            <p>Publisher: {game.publisher}</p>
          </div>

          <div className='game-header-primary-actions'>
            {/* add buttons to buy, subscribe, etc. */}
          </div>
        </div>
      </div> 

      <div className='game-body'>
        <div className='game-body-description-title'>
          Description
        </div>

        <div className='game-body-main'>

          <div className='game-body-main-content'>
            <div className='game-body-description'>
              {
                descriptionParagraphs.map((para, i) => {
                 return <div key={i}>
                    <p key={i}>{para}<br/></p>
                  </div>
                })
              }
              
            </div>

            <div className='game-body-awards'>
              <h1>Awards &amp; Honors</h1>
              <p>2017 Golden Geek Board Game of the Year Winner</p>
              <p>2017 Meeples' Choice Nominee</p>
              <p>2018 SXSW Tabletop Game of the Year Winner</p>
            </div>
          </div>

          <div className='game-body-classification'>
            <h1>Classification</h1>

            <h2>Type</h2>
            <ul>
              {
                type.map((el, i) => {
                  return <li key={i}>
                    <Link to="/games">{el}</Link>
                  </li>
                })
              }
            </ul>

            <h2>Category</h2>
            <ul>
              {
                category.map((el, i) => {
                  return <li key={i}>
                    <Link to="/games">{el}</Link>
                  </li>
                })
              }
            </ul>

            <h2>Mechanisms</h2>
            <ul>
              {
                mechanisms.map((el, i) => {
                  return <li key={i}>
                    <Link to="/games">{el}</Link>
                  </li>
                })
              }
            </ul>

          </div>
        </div>
      </div>
    </div>
  }
}

export default GameShow;
