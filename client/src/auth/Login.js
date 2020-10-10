import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { 
  Button, 
  Form, 
  Message, 
  Header, 
  Segment, 
  Grid } from "semantic-ui-react";
import './auth.css';


class Login extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  logIn = (e) => {
    e.preventDefault()

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }

    fetch('http://localhost:3000/api/v1/login', options)
    .then(res => res.json())
    .then(userInfo => {
      console.log("TOKEN_Login", userInfo.token)
      console.log("Info_Login", userInfo)
      localStorage.token = userInfo.token
      localStorage.setItem("user", JSON.stringify({ ...userInfo }))
      this.props.handleStateChange("token", userInfo.token)
      this.props.handleStateChange("user", userInfo)
      this.props.history.push('/home')
    })
  }

  render() {

    return (
      <div className="auth-main" style={{ height: '5vh' }}>
        <Grid>
          <div className="auth-content">
            <div className="auth-card">
              <Segment stacked>
                <Header as="h3" color="black">
                  Welcome Please Login
                </Header>
                <Form onSubmit={this.logIn} size="large" className="auth-form" autoComplete="off">
                  <label className="label-input" >Username</label>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    name="username"
                    placeholder="est123"
                    className="auth-input-field"
                    onChange={this.handleChange}
                  />
                  <label className="label-input" >Password</label>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    className="auth-input-field"
                    onChange={this.handleChange}
                  />
                  <Button style={{ background: "#7a6e6c" }} fluid size="huge">
                    Login
                  </Button>
                  <Message size="small">
                    <Link style={{ color: '#7a6e6c' }} to="/signup">
                      <strong>Not enrolled ?  Sign up now</strong>
                    </Link>
                  </Message>
                </Form>
              </Segment>
            </div>
          </div>
        </Grid>
      </div>
    );
  };
};
export default withRouter(Login);

