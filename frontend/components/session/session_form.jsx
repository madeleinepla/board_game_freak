import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUsername = 'demo_user';
    const demoPassword = '123123';

    let i = 0;
    const displayDemoUsername = () => {
      const displayUsernameInterval = setInterval(() => {
      this.setState({ username: demoUsername.slice(0, i + 1) })

      if (i >= demoUsername.length - 1) {
        clearInterval(displayUsernameInterval);
        displayDemoPassword();
      }

      i++;
      }, 75);
    }

    let j = 0;
    const displayDemoPassword = () => {
      const displayPasswordInterval = setInterval(() => {
      this.setState({ password: demoPassword.slice(0, j + 1) })

      if (j >= demoPassword.length - 1) {
        clearInterval(displayPasswordInterval);
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

      j++;
      }, 75);
    }
    
    displayDemoUsername();
  }

  

  renderErrors() {
    return (
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">

        <form onSubmit={this.handleSubmit} className="session-form-box">
          <img 
            src="https://cf.geekdo-static.com/images/logos/bgg-primary-logo-b1.svg" alt="BGG Logo" 
          />
          
          {this.props.formType === 'signup' ?
            <div className='session-greeting'>
              <h1>Join the Freak!</h1>
              <p>Sign up to download files, buy and trade, talk with our community of experts, and tons more.</p>
            </div>
            :
            <div className='session-greeting'>
              <h1>Welcome Back!</h1>
              <p>Sign in to download files, buy and trade, talk with our community of experts, and tons more.</p>
            </div>
          }
          
          <div className="session-form">

            <label>{ this.props.formType === 'signup' ? 'Pick a Username' : 'Username'}
              <br />
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="session-input"
              />
            </label>

            {this.props.formType === 'signup' ?
              <label>Email
                <br />
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="session-input"
                />
              </label>
              :
              ''
            }
            
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="session-input"
              />
            </label>
            <br />

            <h2 className='session-form-err'>{this.renderErrors()}</h2>
            {this.props.errors.session = []}

            <br />

            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
            { this.props.formType === 'login' ? 
            <button className='session-demo' onClick={this.handleDemoUser}>demo user</button>
            :
            ''
            }
          </div>

          <div className='switch-form-type'>
            {this.props.formType === 'login' ?
              <h1>Don't have an account? {this.props.navLink}, it's quick and free!</h1>
              :
              <h1>Already have an account? {this.props.navLink}</h1>
            }
          </div>
          
        </form>
      </div>
    );
  }
}

export default SessionForm;
