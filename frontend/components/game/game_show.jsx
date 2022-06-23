import React from 'react';

class GameShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestGame(this.props.match.params.gameId)
    // debugger;
  }

  render() {
    const { game } = this.props
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
            <p>{game.min_players} - {game.max_players} Players</p>
            <p>{game.min_playtime} - {game.max_playtime} Min</p>
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
              <p>{game.description}</p>
            </div>

            <div className='game-body-awards'>
              <h1>Awards &amp; Honors</h1>
              <p>add awards</p>
            </div>
          </div>

          <div className='game-body-classification'>
            <h1>Classification</h1>
            <ul>
              <li>Type</li>
              <li>Category</li>
              <li>Mechanisms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  }
}

export default GameShow;
