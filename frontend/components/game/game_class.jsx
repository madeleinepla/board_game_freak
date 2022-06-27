import React from 'react';
import { Link } from 'react-router-dom';

class 
GameClass extends React.Component {
  componentDidMount() {
    this.props.requestGames();
  }

  render() {
    const { games, path, game_classes } = this.props;
    // debugger;
    return <div>
      <div className='game-class-title'>
        <h1>Board Game {path.charAt(0).toUpperCase() + path.slice(1)}</h1>
      </div>

      <div className='game-class-body'>
        <ul>
          {
            game_classes.map((game_class => <Link to={`/games`}><li>{game_class}</li></Link> )) 
          }
        </ul>
      </div>
    </div>
  }
}

export default GameClass;

