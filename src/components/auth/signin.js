import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    console.log('here', this.props)
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} type="email" className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} type="password" className="form-control"/>
        </fieldset>
        {console.log('hi', this.props)}
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  console.log("ST", state, state.auth.error)
  return {errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
