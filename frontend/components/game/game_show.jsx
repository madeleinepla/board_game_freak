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
      <h1>{game.title} ({game.year})</h1>
      <p>{game.tagline}</p>
      <p>Designer: {game.designer}</p>
      <p>Artist: {game.artist}</p>
      <p>Publisher: {game.publisher}</p>
      <p>{game.min_players} - {game.max_players} Players</p>
      <p>{game.min_playtime} - {game.max_playtime} Minutes</p>
      <p>Ages {game.age}+</p>
      
    </div>
  }
}

export default GameShow;
