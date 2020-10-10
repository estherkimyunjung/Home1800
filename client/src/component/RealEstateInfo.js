import React, { Component } from 'react'
import { 
  Container, 
  Grid, 
  Segment, 
  Label } from 'semantic-ui-react'

  
class RealEstateInfo extends Component {
  
  render() {

    return (
      <Container>
        <Segment>
          <Grid columns={2}>
            <Grid.Column>
              <Segment raised>
                <Label as='a' color='red' ribbon style={{ lineHeight: '2em' }}>
                  How is the market these days?
                </Label>
                <span>Mortgage News</span>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>

                <Label as='a' color='blue'  ribbon style={{ lineHeight: '2em' }}>
                  Find the Right Agency for you
                </Label>
                <span>Clients Reviews</span>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment>
              <Label as='a' color='orange' ribbon='right' style={{ lineHeight: '2em' }}>
                Successful Home Buying Formula
              </Label>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>

              <Label as='a' color='teal' ribbon='right' style={{ lineHeight: '2em' }}>
                Successful Home Sales Formula
              </Label>
                <p>Lorem ipsum dolor sit amet, et elitr laoreet percipitur vix, quem mediocrem referrentur eum cu, ius diam suavitate sententiae in. Ne malis audire lobortis sea. Persius docendi delicata his te. Vim ne dolorem epicurei elaboraret, consul impedit constituto nam ea. At apeirian tincidunt sed, an quod quaeque deterruisset sea. Pri no eripuit tractatos, in qui offendit insolens.</p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    )
  }
}
export default RealEstateInfo

