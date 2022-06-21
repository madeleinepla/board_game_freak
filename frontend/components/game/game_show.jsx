import React from 'react';

class GameShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGame(this.props.match.params.gameId)
    // debugger;
  }

  render() {
    const { game } = this.props
    // debugger;
    return <div>
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
    </div>
  }
}

export default GameShow;
