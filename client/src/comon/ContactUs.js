import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import { 
  Container, 
  Grid, 
  Segment, 
  Divider, 
  Icon } from 'semantic-ui-react'

  
class ContactUs extends Component {

  render() {

    return (
      <Container className='contactUs'>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column className='contactInfo'>
              <Segment>
              <h3>{this.props.logo}</h3>
              <h3><strong>{this.props.name}</strong></h3>
              <h5>Location : {this.props.address}</h5>
              <h5>Phone : {this.props.phone}</h5>
              <h5>E-mail : {this.props.email}</h5>
              </Segment>
              <br/>
              <h4 style={{textAlign:'center', lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganOne}</strong></h4>
              <h4 style={{textAlign:'center',lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganTwo}</strong></h4>
              <h4 style={{textAlign:'center',lineHeight: '2em', color: "#764b28"}}><strong>{this.props.sloganThree}</strong></h4>
            </Grid.Column>
            <Grid.Column>
              <Map lat={this.props.latitude} long={this.props.longitude}/>
            </Grid.Column>
          </Grid>
          <Divider vertical><Icon name='map outline'/></Divider>
        </Segment>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    id: 1,
    logo: <Icon name='building outline'/>,
    name: state.company.name,
    address: state.company.address,
    zipcode: state.company.zipcode,
    latitude: state.company.latitude,
    longitude: state.company.longitude,
    phone: state.company.phone,
    email: state.company.email,
    sloganOne: state.company.descriptionOne,
    sloganTwo: state.company.descriptionTwo,
    sloganThree: state.company.descriptionThree
  }
}
export default connect(mapStateToProps)(ContactUs)

