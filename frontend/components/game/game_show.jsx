import React from 'react';

class GameShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestGame(this.props.match.params.gameId)
  }

  render() {
    const { game } = this.props
    console.log(this.props)
    return <div>
      <h1>Game show page</h1>
      {/* <p>{game.title}</p>
      <p>{game.tagline}</p>
      <p>{game.year}</p>
      <p>{game.description}</p> */}
    </div>
  }
}

export default GameShow;
