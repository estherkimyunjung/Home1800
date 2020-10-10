import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import UserStep from './UserStep';
import InfoStep from './InfoStep';
import ConfirmStep from './ConfirmStep';
import './auth.css'


class Signup extends Component {

  state = {
    step: 1,
    username: '',
    password: '',
    password_confirmation: '',
    firstname: '',
    lastname: '',
    email: '',
    role: '',
    avatar: '',
    zipcode: ''
  }

  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        role: this.state.role,
        avatar: this.state.avatar,
        zipcode: this.state.zipcode
      })
    }

    fetch('http://localhost:3000/api/v1/users', options)
    .then(res => res.json())
    .then(userInfo => {
      this.props.history.push('/login')
      // localStorage.token = userInfo.token
    })
  }

  render() {
    const {username, password, password_confirmation, firstname, lastname, email, role, avatar, zipcode} = this.state;
    const values = {username, password, password_confirmation, firstname, lastname, email, role, avatar, zipcode}

    switch (this.state.step) {
      case 1:
        return <UserStep
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 2:
        return <InfoStep
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      case 3:
        return <ConfirmStep
          submit={this.submit}
          prevStep={this.prevStep}
          values={values}
        />
      default:
        return <UserStep
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
    };
  };
};
export default withRouter(Signup);

