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
      <div className='main-content'>
        <table className='index-table'>
          <thead>
            <tr className='index-table-headers'>
              <th className='table-rank'>Board Game Rank</th>
              <th className='table-img'></th>
              <th className='table-title'>Title</th>
              <th className='table-your-rating'>Your Rating</th>
              <th className='table-freak-rating'>Freak Rating</th>
              <th className='table-avg-rating'>Avg Rating</th>
              <th className='table-num-voters'>Num Voters</th>
              <th className='table-status'>Status</th>
              <th className='table-your-plays'>Your Plays</th>
              <th className='table-shop'>Shop</th>
            </tr>
          </thead>

          <tbody>
          {
            games.map((game, i) => (
              <tr key={i}>
                <td className='table-rank'>{game.id}</td>
                <td className='table-img'>
                  <Link to={`/games/${game.id}`}>
                    <img src={game.header_img} width='65'alt="" />
                  </Link>
                </td>
                <td className='table-title'>
                  <div>
                    <Link to={`/games/${game.id}`} className='table-title-link'>{game.title}</Link>
                    <p>({game.year})</p>
                  </div>
                  <p>{game.tagline}</p>
                </td>
                <td className='table-your-rating'>N/A</td>
                <td className='table-freak-rating'>8.5</td>
                <td className='table-avg-rating'>8.6</td>
                <td className='table-num-voters'>5000</td>
                <td className='table-status'></td>
                <td className='table-your-plays'></td>
                <td className='table-shop'>link to shopping</td>
              </tr>
            )
          )
        }
          </tbody>
        </table>
      </div>
    )
  }
}

export default GameIndex;
