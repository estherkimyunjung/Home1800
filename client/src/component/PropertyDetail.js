import React, { Component } from 'react'
import AdvMap from './AdvMap'
import {
  Image,
  Header,
  Icon,
  Table,
  Modal,
  Button,
  Form,
  Label } from 'semantic-ui-react'
import './component.css'


class PropertyDetail extends Component {

  state = {
    display: false
  }

  handleClick = () => {
    let newState = !this.state.display
    this.setState({
      display: newState
    })
  }

  render() {
    // console.log("DETAIL", this.props.property)
    const { image, status, category, schooldist, address, latitude, longitude, prices, beds, baths, sqft, built } = this.props.property

    const agent = this.props.property.agent.user
    // console.log("NAME", agent.firstname)

    return (

      <Modal trigger={
        <Button className="propSort"
          style={{display:'inline',  width: '200px'}} textAlign='center'>
          <strong>Show Property Detail Information</strong>
        </Button>} centered={false}>
        <Modal.Header className="ui center aligned">{address}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={image} />
          <Modal.Description>
            <Header>Property Description</Header>
            <Table definition>
              <Table.Body style={{fontSize: '13px'}}>
                <Table.Row>
                  <Table.Cell width={2}>Prices</Table.Cell>
                  <Table.Cell>${prices}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Status</Table.Cell>
                  <Table.Cell>{status}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Category</Table.Cell>
                  <Table.Cell>{category}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Beds</Table.Cell>
                  <Table.Cell>{beds}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Baths</Table.Cell>
                  <Table.Cell>{baths}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Sqft</Table.Cell>
                  <Table.Cell>{sqft}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Built</Table.Cell>
                  <Table.Cell>{built}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Address</Table.Cell>
                  <Table.Cell>{address}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Modal.Description>
        </Modal.Content>
        <AdvMap className='property-map' lat={latitude} long={longitude} address={address} schooldist={schooldist}/>
        <Modal.Actions>
          <Button onClick={this.handleClick} primary>
            Agent Information <Icon name='chevron down' />
          </Button>
          <div style={{ display: (this.state.display ? null : 'none') }}>
            <Form>
              <Form.Field>
                <Label pointing prompt>
                  <h2 textAlign='center'>{agent.firstname} {agent.lastname}</h2>
                  <h5>E-mail</h5>
                  <h4>{agent.email}</h4>
                  <h5>Location</h5>
                  <h4>Zip code {agent.zipcode}</h4>
                  <h5>License</h5>
                  <h4>{this.props.property.agent.license}</h4>
                </Label>
              </Form.Field>
            </Form>
          </div>
        </Modal.Actions>
      </Modal>
    )
  }
}
export default PropertyDetail;

