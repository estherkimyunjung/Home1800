{/* component about us / contact us */ }
{/* <Route exact path='/houses' render={() => <HouseDisplay houses={this.state.houses}/> with props*/ }
{/* <Route path='/houses' render={(routerProps) => <HouseDisplay {...routerProps}houses={this.state.houses}/> with routerProps and props*/ }
{/* <Route path='/houses/:id' component={HouseDiplay}/> without props but info component currnet house id is: {this.props.match.params.id}*/ }
{/* <Route path='/houses/new' render={(routerProps) => <HouseForm {...routerProps} addHouse={this.addHouse}/> */ }
{/* <Link to='/home'>Go to Home</Link> import {Link} from react-router-dom redireact the rout*/ }
{/* handleSubmit = () => {this.props.history.push('/house')} redirect after submit*/ }
{/* <Link to='/home'>Go to Home</Link> */ }
{/* <Route path='/profile' component={Profile}/> */ }
{/* <Route exact path="/dashboard" component={() => 
                this.state.token 
                ? <Dashboard/> 
                : <Redirect to='/login'/>} />
              <Route exact path="/about" component={About}/> */}

// //Modal

// <Modal trigger={<Button>Show Modal</Button>} centered={false}>
//     <Modal.Header>Select a Photo</Modal.Header>
//     <Modal.Content image>
//       <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
//       <Modal.Description>
//         <Header>Default Profile Image</Header>
//         <p>
//           We've found the following gravatar image associated with your e-mail
//           address.
//         </p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//     <Modal.Actions>
//       <Button primary>
//         Proceed <Icon name='right chevron' />
//       </Button>
//     </Modal.Actions>
//   </Modal>

// <button class="ui button">Show Modal</button>

// import React, { Component } from 'react'
// import { Button, Icon, Modal } from 'semantic-ui-react'

// class NestedModal extends Component {
//   state = { open: false }

//   open = () => this.setState({ open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open } = this.state

//     return (
//       <Modal
//         open={open}
//         onOpen={this.open}
//         onClose={this.close}
//         size='small'
//         trigger={
//           <Button primary icon>
//             Proceed <Icon name='right chevron' />
//           </Button>
//         }
//       >
//         <Modal.Header>Modal #2</Modal.Header>
//         <Modal.Content>
//           <p>That's everything!</p>
//         </Modal.Content>
//         <Modal.Actions>
//           <Button icon='check' content='All Done' onClick={this.close} />
//         </Modal.Actions>
//       </Modal>
//     )
//   }
// }

// const ModalExampleMultiple = () => (
//   <Modal trigger={<Button>Multiple Modals</Button>}>
//     <Modal.Header>Modal #1</Modal.Header>
//     <Modal.Content image>
//       <div className='image'>
//         <Icon name='right arrow' />
//       </div>
//       <Modal.Description>
//         <p>We have more to share with you. Follow us along to modal 2</p>
//       </Modal.Description>
//     </Modal.Content>
//     <Modal.Actions>
//       <NestedModal />
//     </Modal.Actions>
//   </Modal>
// )

// export default ModalExampleMultiple
