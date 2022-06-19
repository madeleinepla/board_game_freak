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

  handleDemoUser() {
    const demoUsername = 'demo_user';
    const demoPassword = '123123';

    let i = 0;
    const displayDemoUsername = setInterval(() => {
      this.setState({ username: demoUsername.slice(0, i + 1) })

      if (i >= demoUsername.length - 1) {
        clearInterval(displayDemoUsername);
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
      }

      i++;
    }, 100);

    let j = 0;
    const displayDemoPassword = setInterval(() => {
      this.setState({ password: demoPassword.slice(0, j + 1) })

      if (j >= demoPassword.length - 1) {
        clearInterval(displayDemoPassword);
      }

      j++;
    }, 100);


    displayDemoUsername();
    displayDemoPassword();
    
  }

  

  renderErrors() {
    return (
      <ul>
        {/* {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))} */}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Board Game Freak!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            {this.props.formType === 'signup' ?
              <div>
                <br />
                <label>Email:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
              </div>
              :
              ''
            }
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br />
            { this.props.formType === 'login' ? 
            <button onClick={this.handleDemoUser}>demo user</button>
            :
            ''
            }
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
