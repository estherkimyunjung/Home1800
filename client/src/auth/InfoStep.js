import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  Segment, 
  Header, 
  Form, 
  Button, 
  Message } from 'semantic-ui-react';
import './auth.css';


class InfoStep extends Component {

  render() {
    const options = [
      { key: 's', text: 'Shopper', value: 'Shopper' },
      { key: 'a', text: 'Agent', value: 'Agent' }
    ]
    const { firstname, lastname, email, role, avatar, zipcode } = this.props.values

    return (
      <Grid className="auth-main" style={{ height: '5vh' }}>
        <div className="auth-content">
          <div className="auth-card">
            <Segment stacked >
              <Header as="h3" color="black">
                Personal Details
              </Header>
              <Form size="large" className="auth-form" autoComplete="off">
                <label className="label-input" >FIRST NAME</label>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  name="firstname"
                  placeholder="First Name"
                  className="auth-input-field"
                  value={firstname}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <label className="label-input" >LAST NAME</label>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  name="lastname"
                  placeholder="Last Name"
                  className="auth-input-field"
                  value={lastname}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <label className="label-input" >EMAIL</label>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  name="email"
                  placeholder="sample@sample.com"
                  className="auth-input-field"
                  value={email}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <label className="label-input" >ROLE</label>
                <Form.Select
                  fluid
                  options={options}
                  placeholder="Shopper or Agent?"
                  name="role"
                  className="auth-input-field"
                  value={role}
                  onChange={(e, data) => this.props.handleChange(data.name, data.value)}
                />
                <label className="label-input" >AVATAR</label>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  name="avatar"
                  placeholder="avatar"
                  className="auth-input-field"
                  value={avatar}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <label className="label-input" >ZIP CODE</label>
                <Form.Input
                  fluid
                  icon="address book"
                  iconPosition="left"
                  name="zipcode"
                  placeholder="77024"
                  className="auth-input-field"
                  value={zipcode}
                  onChange={(e) => this.props.handleChange(e.target.name, e.target.value)}
                />
                <Button onClick={this.props.prevStep} style={{ background: "#7a6e6c", "marginTop": "20px" }} size="huge">
                  Previous
                </Button>
                <Button onClick={this.props.nextStep} style={{ background: "#7a6e6c", "marginTop": "20px" }} size="huge">
                  Save and Continue
                </Button>
                <Message size="small">
                  <Link style={{ color: '#7a6e6c' }} to="/login">
                    <strong>Already Have an Account?</strong>
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
export default InfoStep

