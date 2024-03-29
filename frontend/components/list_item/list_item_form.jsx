import React from 'react';

class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listItem;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.requestGames()
  }

  update(field) {
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
    this.props.errors.listItem = []
    const listId = this.props.match.params.listId;
    
    this.props.action(listId, this.state)
      .then(() => (this.props.history.push(`/lists/${listId}`)))
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.listItem.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { games } = this.props;
    if (games.length === 0) return null;
    const game = games.filter(game => game.id === parseInt(this.state.game_id))

    return <div className='main-content'>
      <h1 className='list-item-form-title'>{this.props.formType}</h1>

      <form onSubmit={this.handleSubmit} className='list-item-form'>
        <h2 className='list-item-form-err'>{this.renderErrors()}</h2>

        <table>
          <tbody>
            <tr>
              <td>Enter Board Game:</td>
              <td>
                <select value={this.props.formType === 'Add Item' ? 'default' : [this.state.game_id, this.state.title]} id="game" onChange={this.update('game_id')}>
                  <option value="default" disabled>Select Game</option>
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
                    src={game[0].header_img}
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