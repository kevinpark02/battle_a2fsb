import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      gender: "",
      team: "",
      class_of: "",
      password: "",
      errors: this.props.errors
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.props.removeSessionErrors();
  }

  handleInput(type) {
      return (e) => {
          this.setState({ [type]: e.target.value })
      };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors(){

      const errors = this.props.errors;

      return(
            <ul className="session-errors">
                {errors.map((error, i) => (
                    <li key={i}>
                        {error}
                    </li>
                ))}
            </ul>
      )
   }

  render() {
      const formType = this.props.formType;
      const linkType = formType === "Sign up" ? "login" : "signup"
      const otherLinkName = linkType === "login" ? "Have an account already? Please log in" : "Sign up for an account"
      const sessionHeading = formType === "Sign up" ? "Sign up for your account" : "Log in to Dorello"

      return(
          <div className="signup-form">
              <form onSubmit={this.handleSubmit}>
                  <div className="signup-form-inputs">
                      {this.renderErrors()}
                        <h4>{sessionHeading}</h4>
            
                        <input type="text"
                                value={this.state.email}
                                placeholder="Enter email"
                                onChange={this.handleInput('email')}
                                className="input-fields"/>

                        <input type="password"
                                value={this.state.password}
                                placeholder="Enter password"
                                onChange={this.handleInput('password')}
                                className="input-fields"/>

                        <input type="text"
                                value={this.state.first_name}
                                placeholder="First Name"
                                onChange={this.handleInput('first_name')}
                                className="input-fields"/>

                        <input type="text"
                                value={this.state.last_name}
                                placeholder="Last Name"
                                onChange={this.handleInput('last_name')}
                                className="input-fields"/>

                        <input type="text"
                                value={this.state.username}
                                placeholder="Your Unique Username"
                                onChange={this.handleInput('username')}
                                className="input-fields"/>


                        <input type="text"
                               value={this.state.class_of}
                               placeholder="Graduating Year (ex. 2014)"
                               onChange={this.handleInput('class_of')}
                               className="input-fields"/>

                        <div className="gender-options">
                            <select onChange={this.handleInput('gender')}>
                                <option selected disabled>
                                Please select
                                </option>
                                <option value="Bro">Bro</option>
                                <option value="Sis">Sis</option>
                            </select>
                        </div>
                
                        <input type="submit" value={formType} className ="yellow-btn sign-up-form-btn"/>

                        <Link className="session-form-alt" to={`/${linkType}`}>{otherLinkName}</Link>
                  </div>
              </form>
          </div>
      )
   }
}

export default SignupForm;