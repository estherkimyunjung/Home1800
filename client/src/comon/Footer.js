import React, { Component } from 'react';
import Chat from './Chat'
import { 
  Container, 
  Grid,
  Icon,
  Segment } from 'semantic-ui-react'
  

class Footer extends Component {

  render() {

    return (
      <Segment inverted color='grey' className="footer">
        <Container>
          <Segment inverted color='grey'>
            <Grid columns={3} divided>
              <Grid.Row >
                <Grid.Column>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.Pri no eripuit tractatos, in qui offendit insolens.Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
                <Grid.Column>
                  <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.Pri no eripuit tractatos, in qui offendit insolens.Pri no eripuit tractatos, in qui offendit insolens.</p>
                </Grid.Column>
                <Grid.Column>
                <p> Design by <strong style={{fontSize:'20px'}}> Esther Kim</strong> (Full-stack Developer)</p>
                  <ul>
                    <li style={{height:'27px'}}><strong>Email : estherkimyunjung@gmail.com</strong></li>
                    <li style={{height:'27px'}}><strong><a href='https://www.linkedin.com/in/estherkim-yunjung/' style={{color:'white'}}>Linkedin : <Icon name='linkedin' color='white' size='large'/></a></strong></li>
                    <li style={{height:'27px'}}><strong><a href='https://www.linkedin.com/in/estherkim-yunjung/' style={{color:'white'}}>GitHub : <Icon name='github square' color='white' size='large'/></a></strong></li>
                  </ul>
                  <p>Thank You</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Chat/>
          </Segment>
        </Container>
      </Segment>
    )
  }
}
export default Footer

