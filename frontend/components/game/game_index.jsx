import React from 'react';
import { Link } from 'react-router-dom';

class GameIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGames();
  }

  render() {
    const { games } = this.props;
    return (
      <div>
        <h1>Games Index</h1>
        <ul>
          {
            games.map(game => (
              <li key={game.id}>
                <Link to={`/games/${game.id}`}>{game.title}</Link>
                <ul>
                  <li>{game.tagline}</li>
                </ul>
              </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default GameIndex;
