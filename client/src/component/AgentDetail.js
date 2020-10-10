import React from 'react'
import { Popup, Card, Message } from 'semantic-ui-react'

const PopupExampleTrigger = (props) => (
  <Popup
    trigger={
      <Card>
        <Card.Content>
          <Card.Header>Addtional Information</Card.Header>
        </Card.Content>
      </Card>
    }
  >
    <Popup.Header>Agent Information</Popup.Header>
    <Popup.Content>
   <Message>
      <h5>Experience : {props.agent.experienceyears} yrs</h5>
      <h5>License # : {props.agent.license} </h5>
    </Message>
    </Popup.Content>
  </Popup>
)

export default PopupExampleTrigger
