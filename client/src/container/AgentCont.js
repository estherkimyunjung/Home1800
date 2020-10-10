import React, { Component } from 'react'
import Agents from '../component/Agents'
import { 
  Grid, 
  Segment, 
  Container } from 'semantic-ui-react'  
import 'bootstrap/dist/css/bootstrap.min.css'


class AgentCont extends Component {

  render() {
    console.log("AgentsUUU", this.props.agents)
    // let Auser = this.props.agents.map(a => console.log(a.user.firstname))

    return (
      <Container>
        <Segment>
          <Grid stackable columns={4}>
            {this.props.agents.map(a =>
              <Agents agent={a} key={a.id}/>
            )}
          </Grid>
        </Segment>
      </Container>
    );
  }
}
export default AgentCont

