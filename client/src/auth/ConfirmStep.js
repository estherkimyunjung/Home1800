import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Segment,
  Header,
  Button,
  Message
} from 'semantic-ui-react';


class ConfirmStep extends Component {

  render() {

    const { username, firstname, lastname, email, role, avatar, zipcode } = this.props.values
    
    return (
      <Grid className="auth-main" style={{ height: '5vh' }}>
        <div className="auth-content">
          <div className="auth-card">
            <Segment stacked>
              <Header as="h3" color="black">
                Confirm Information
              </Header>
              <h4>Username: {username}</h4>
              <h4>Firstname: {firstname}</h4>
              <h4>Lastname: {lastname}</h4>
              <h4>Email: {email}</h4>
              <h4>Shopper or Agent: {role}</h4>
              <h4>Avatar: {avatar}</h4>
              <h4>Zipcode: {zipcode}</h4>
              <Button onClick={this.props.prevStep} style={{ background: "#7a6e6c", "marginTop": "20px" }} size="huge">
                Previous
              </Button>
              <Button onClick={this.props.submit} style={{ background: "#7a6e6c", "marginTop": "20px" }} size="huge">
                Submit
              </Button>
              <Message size="small">
                <Link style={{ color: '#7a6e6c' }} to="/login">
                  <strong>Already Registered?</strong>
                </Link>
              </Message>
            </Segment>
          </div>
        </div>
      </Grid>
    );
  };
};
export default ConfirmStep

