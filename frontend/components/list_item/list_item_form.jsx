import React from 'react';
// import { Link, Routes, Route, useNavigate, Redirect } from 'react-router-dom';

class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listItem;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // this.setState({ list_id: this.props.match.params.listId })
    this.props.requestGames()
  }

  update(field) {
    // debugger;
    // return e => this.setState({ [field]: e.target.value })
    if(field === 'game_id') {
      return e => {
        let gameInfo = e.target.value.split(",");
        return this.setState({ game_id: gameInfo[0], title: gameInfo[1] })
      }
    } else {
      return e => this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.props.games[this.state.game_id - 1].title;
    this.setState({ title: title });
    const listId = this.props.match.params.listId;
    this.props.action(listId, this.state);
    this.props.history.push(`/lists/${listId}`);
  }

  render() {
    const { games } = this.props;
    // debugger;
    return <div className='main-content'>
      <h1 className='list-item-form-title'>{this.props.formType}</h1>

      <form onSubmit={this.handleSubmit} className='list-item-form'>
        <table>
          <tbody>
            <tr>
              <td>Enter Board Game:</td>
              <td>
                <select value={this.state.value} id="game" onChange={this.update('game_id')}>
                  <option value="" disabled defaultValue>Select Game</option>
                  {
                    games.map((game, i) => <option key={i} value={[game.id,game.title]}>{game.title}</option>)
                  }
                </select>
                
              </td>
            </tr>

            {
              this.state.game_id === '' ? ''
              :
              <tr>
                <td>Image: </td>
                <td>
                  <img
                    src={games[this.state.game_id - 1].header_img}
                    height="100"
                  />
                </td>
              </tr>
            }

            <tr>
              <td>Comments:</td>
              <td>
                <textarea
                  value={this.state.body}
                  rows="30"
                  cols="90"
                  onChange={this.update('body')}
                />
              </td>
            </tr>

            <tr>
              <th></th>
              <td><input type="submit" value='Save' /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  }
}

export default ListItemForm;