import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectTitle = this.selectTitle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.matches = this.matches.bind(this);
  }

  handleInput(event) {
    this.setState({ inputVal: event.currentTarget.value });
  }

  matches() {
    const matches = [];

    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.games.forEach(game => {
      const sub = game.title.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(game);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectTitle(event) {
    const title = event.currentTarget.innerText;
    this.setState({ inputVal: title });
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });

    return (
      <div>
        <h1>Autocomplete</h1>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...' 
          />

        </div>
      </div>
    );
  }
};


// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: '',
//       games: this.props.games
//     }
//   }

//   componentDidMount() {
//     this.props.requestGames();
//   }

//   update() {
//     return e => this.setState({
//       query: e.currentTarget.value
//     });
//   }

//   render() {

//     return <div className='search'>
//       <input 
//         type="text"
//         value={this.state.query} 
//         onChange={this.update()}
//       />

//       <div className="dropdown-content">
        
//       </div>
//     </div>
//   }
// }

export default Search;
