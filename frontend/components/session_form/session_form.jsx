import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.path !== nextProps.match.path) {
      this.props.clearErrors();
    }
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
  }

  signUpButtonText() {
    if (this.props.formType === 'login') {
      return "Login";
    } else {
      return "Sign up";
    }
  }





  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className='login-splash-div'>

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <br/>


            <div className="login-form">

              {this.renderErrors()}
              <br/>
              <label className="username_password_label">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                />
              </label>
              <br/>
              <label className="username_password_label">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                />
              </label>
              <br/>
              <input type="submit" value={this.signUpButtonText()} className="authsubmitbutton"/>
            </div>
          </form>
        </div>


      </div>
    );
  }
}

export default withRouter(SessionForm);
