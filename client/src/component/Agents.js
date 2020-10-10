import React, { Component } from 'react'
import AgentDetail from './AgentDetail'
import {
  Grid,
  Segment,
  Image,
  Divider,
  Header,
  Icon,
  Table } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'


class Agents extends Component {


  render() {
    // console.log("Agents", this.props.agents)
    // let Auser = this.props.agents.map(a => a.user)
    // console.log("AU", Auser[0].firstname)
    const {firstname, lastname, email, avatar, zipcode} = this.props.agent.user
    const {license} = this.props.agent
    return (

      <Grid.Column>
        <Segment>
          <Image src={avatar} size='big' />
          <Header as='h4' textAlign='center'>{firstname} {lastname}</Header>
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='bar chart' />
                    Information
                  </Header>
          </Divider>
          <Table definition>
            <Table.Body>
              <Table.Row>
                <Table.Cell>E-mail</Table.Cell>
                <Table.Cell fontSize='10px'>{email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Location</Table.Cell>
                <Table.Cell>Zip code {zipcode}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <AgentDetail agent={this.props.agent}/>
        </Segment>
      </Grid.Column>
    );
  }
}
export default Agents

