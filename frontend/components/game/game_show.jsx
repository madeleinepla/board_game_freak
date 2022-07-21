import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';

class GameShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rating
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.removeRating = this.removeRating.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestGame(this.props.match.params.gameId);
  }

  update(e) {
    if (!this.props.currentUserId) {
      this.props.history.push('/login')
    }

    const newScore = e.target.value
    this.setState({ score: parseInt(newScore) });

    for (let i = 1; i < 11; i++) {
      let star = document.getElementById(`${i}-stars-label`)

      if (i <= newScore) {
        star.classList.remove("not-starred")
        star.classList.add("starred")
      } else {
        star.classList.remove("starred")
        star.classList.add("not-starred")
      }
    }

    const btn = document.getElementById("game-rating-submit-btn")
    btn.style.display = "block"
  }

  removeRating(e) {
    e.preventDefault();
    debugger
    this.props.unrateGame(this.props.game.user_rating.id)
      .then(() => this.props.requestGame(this.props.gameId))
  }

  handleSubmit(e) {
    e.preventDefault();

    const btn = document.getElementById("game-rating-submit-btn")
    btn.style.display = "none"
    
    if (this.props.game.user_rating) {
      this.props.updateRateGame(this.state)
        .then(() => this.props.requestGame(this.props.gameId))
    } else {
      this.props.rateGame(this.state)
        .then(() => this.props.requestGame(this.props.gameId))
    }
  }

  setStars() {
    let stars = []
    let score;
    
    if( this.props.game.user_rating) {
      score = this.props.game.user_rating.score
    } else {
      score = 0
    }

    for(let i = 1; i < 11; i++) {
      if (i == score) {
        stars.push(<div key={i} >
          <input type="radio" id={`${i}-stars`} name="rating" value={i} style={{display: "none" }} defaultChecked />
          <label
            htmlFor={`${i}-stars`}
            id={`${i}-stars-label`}
            className={i <= score ? "starred" : "not-starred"}
            >★</label>
        </div>)
      } else {
        stars.push(<div key={i} >
          <input type="radio" id={`${i}-stars`} name="rating" value={i} style={{ display: "none" }} />
          <label 
            htmlFor={`${i}-stars`}
            id={`${i}-stars-label`}
            className={i <= score ? "starred" : "not-starred"}>★</label>
        </div>)
      }
    }
    return stars
  }

  render() {
    const { game, type, category, mechanisms } = this.props

    const bg = document.getElementsByClassName('game-header')
    if (bg[0]) {
      bg[0].style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url("${game.bg_img}")`
    }

    let descriptionParagraphs = []
    if (game.description) {
      descriptionParagraphs = game.description.split("\n")
    }

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
            {
              game.min_players === game.max_players ?
              <p>{game.min_players} Players</p> :
              <p>{game.min_players} - {game.max_players} Players</p>
            }
            {
              game.min_playtime === game.max_playtime ?
                <p>{game.min_playtime} Min</p> :
                <p>{game.min_playtime} - {game.max_playtime} Min</p>
            }
            <p>Ages: {game.age}+</p>
            <p>Weight: 3/5</p>
          </div>

          <div className='game-header-credits'>
            <p>Designer: {game.designer}</p>
            <p>Artist: {game.artist}</p>
            <p>Publisher: {game.publisher}</p>
          </div>

          <div className='game-header-rating'>
            <form onSubmit={this.handleSubmit} onChange={this.update} className='game-rating-form'>
              <p>My Rating </p>
              
              <div className='rating-body'>
                <div className='rating-stars'>
                  {this.setStars()}
                </div>

                {
                  game.user_rating ?
                  <div className='game-rating-btns'>
                    <input type="submit" id="game-rating-submit-btn" value="Update Rating" style={{ display: "none" }}/>
                    <button onClick={this.removeRating}>Remove Rating</button>
                  </div> :
                  <div className='game-rating-btns'>
                    <input type="submit" id="game-rating-submit-btn" value="Add Rating" style={{ display: "none" }}/>
                  </div>
                }
              </div>
            </form>
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
              {
                descriptionParagraphs.map((para, i) => {
                 return <div key={i}>
                    <p key={i}>{para}<br/></p>
                  </div>
                })
              }
              
            </div>

            <div className='game-body-awards'>
              <h1>Awards &amp; Honors</h1>
              <p>2017 Golden Geek Board Game of the Year Winner</p>
              <p>2017 Meeples' Choice Nominee</p>
              <p>2018 SXSW Tabletop Game of the Year Winner</p>
            </div>
          </div>

          <div className='game-body-classification'>
            <h1>Classification</h1>

            <h2>Type</h2>
            <ul>
              {
                type.map((el, i) => {
                  let query = "?" + el.split(" ").join("-")
                  return <li key={i}>
                    <Link to={`/games${query}`}>{el}</Link>
                  </li>
                })
              }
            </ul>

            <h2>Category</h2>
            <ul>
              {
                category.map((el, i) => {
                  let query = "?" + el.split(" ").join("-")
                  return <li key={i}>
                    <Link to={`/games${query}`}>{el}</Link>
                  </li>
                })
              }
            </ul>

            <h2>Mechanisms</h2>
            <ul>
              {
                mechanisms.map((el, i) => {
                  let query = "?" + el.split(" ").join("-")
                  return <li key={i}>
                    <Link to={`/games${query}`}>{el}</Link>
                  </li>
                })
              }
            </ul>

          </div>
        </div>
      </div>
    </div>
  }
}

export default GameShow;
