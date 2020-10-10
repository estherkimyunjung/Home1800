import React, { Component } from 'react'
import Appointments from '../component/Appointments'
import { 
  Grid, 
  Segment, 
  Button, 
  Form, 
  Divider, 
  Image } from 'semantic-ui-react'


class Profile extends Component {
  state = {
    edit: false,
    username: this.props.user.username,
    firstname: this.props.user.firstname,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
    role: this.props.user.role,
    avatar: this.props.user.avatar,
    zipcode: this.props.user.zipcode,
    id: this.props.user.id
  }

  handleSubmit = () => {
    let user = { id: this.state.id, username: this.state.username, firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, role: this.state.role, avatar: this.state.avatar, zipcode: this.state.zipcode }

    this.props.editUserInfo(user)
    this.handleChange("edit", !this.state.edit)
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { username, firstname, lastname, email, role, avatar, zipcode } = this.props.user
    // console.log("AV", avatar)

    return (
      <Grid doubling style={{ padding: "20px" }}>
                <Grid.Column width="3">
</Grid.Column>
        <Grid.Column width="3">
          <Segment>
            <Image src={avatar} />
            <h4>User name: </h4><em><strong style={{ color: "#764b28" }}>{username}</strong></em>
            <h4>First name: </h4><em><strong style={{ color: "#764b28" }}>{firstname}</strong></em>
            <h4>Last name: </h4><em><strong style={{ color: "#764b28" }}>{lastname}</strong></em>
            <h4>Email: </h4><em><strong style={{ color: "#764b28" }}>{email}</strong></em>
            <h4>Role: </h4><em><strong style={{ color: "#764b28" }}>{role}</strong></em>
            <h4>Zip Code: </h4><em><strong style={{ color: "#764b28" }}>{zipcode}</strong></em>
            <Divider />
            <Button 
              content="Edit User" 
              style={{ background: "#ad9d89" }} 
              onClick={() => this.handleChange("edit", !this.state.edit)} 
            />
          </Segment>
        </Grid.Column>
        <Grid.Column width="7">
          <Segment>
            {this.state.edit
              ? <div>
                <Form style={{ height: '65vh' }}>
                  <Form.Field>
                    <label style={{ marginTop: '15px'}}><strong>User name</strong></label>
                    <input 
                      value={this.state.username} 
                      name="username" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder={username} 
                      style={{ color: "#764b28", marginBottom:'15px'}} 
                    />
                  </Form.Field>
                  <Form.Field>
                    <label><strong>First name</strong></label>
                    <input 
                      value={this.state.firstname} 
                      name="firstname" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder={firstname} 
                      style={{ color: "#764b28", marginBottom:'10px'}}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label><strong>Last name</strong></label>
                    <input 
                      value={this.state.lastname} 
                      name="lastname" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder={lastname} 
                      style={{ color: "#764b28", marginBottom:'15px' }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label><strong>Email</strong></label>
                    <input 
                      value={this.state.email} 
                      name="email" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder={email} 
                      style={{ color: "#764b28", marginBottom:'15px' }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label><strong>Zipcode</strong></label>
                    <input 
                      value={this.state.zipcode} 
                      name="zipcode" 
                      type="number" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder={zipcode} 
                      style={{ color: "#764b28", marginBottom:'15px' }}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label><strong>Profile Picture / Avatar</strong></label>
                    <input 
                      value={this.state.avatar} 
                      name="avatar" 
                      type="text" 
                      onChange={(e) => this.handleChange(e.target.name, e.target.value)} 
                      placeholder='https://nofiredrills.com/wp-content/uploads/2016/10/myavatar.png' 
                      style={{ color: "#764b28", marginBottom:'55px' }}
                    />
                  </Form.Field>
                  <Button 
                    content="Cancel" 
                    onClick={() => this.handleChange("edit", !this.state.edit)} 
                    style={{ background: "#ad9d89" }}
                  />
                  <Button 
                    content="Submit" 
                    onClick={() => this.handleSubmit()} 
                    color="blue" 
                    style={{ float: "right" }}
                  />
                </Form>
              </div>
              : <div style={{minHeight: '625px'}}>
                <Appointments appointments={this.props.appointments} user={this.state} agents={this.props.agents} addAppointment={this.props.addAppointment}/>
              </div>
            }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
export default Profile

