import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Form, 
  Header, 
  Button, 
  Message, 
  Grid, 
  Segment } from 'semantic-ui-react';
import './auth.css'


class userStep extends Component {

  render() {
    const { username, password, password_confirmation } = this.props.values

    return (
      <Grid className="auth-main" style={{ height: '5vh' }}>
        <div className="auth-content">
          <div className="auth-card">
            <Segment stacked>
              <Header as="h3" color="black">
                Sign up to get started
              </Header>
              <Form onSubmit={this.props.nextStep} size="large" className="auth-form" autoComplete="off">
                <label className="label-input" >Username</label>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="username"
                  placeholder="jsmith12"
                  className="auth-input-field"
                  value={username}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
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
                  value={password}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <label className="label-input" >Confirm Password</label>
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  className="auth-input-field"
                  name="password_confirmation"
                  value={password_confirmation}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <Button style={{ background: "#7a6e6c" }} fluid size="huge">
                  Save and Continue
                </Button>
                <Message size="small">
                  <Link style={{ color: '#7a6e6c' }} to="/login">
                    <strong>Already Registered?</strong>
                  </Link>
                </Message>
              </Form>
            </Segment>
          </div>
        </div>
      </Grid>
    );
  };
};
export default userStep

