import React, {Component} from 'react';
import {
  Button,
  Form,
  Container,
  Segment,
  TextArea,
  Input,
  Label,
  Select
} from 'semantic-ui-react'
import '../auth/auth.css'


class Mailer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: 'Esther',
      lastname: 'Kim',
      address: '',
      message: '',
      agent: 'Newton Williams',
      email: '',
      file: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fileHandleChange = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.setState({ file: fileReader.result.slice(28) });
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }


  handleSubmit(event) {
    event.preventDefault();
    event.target.reset()

    fetch(`http://localhost:8080/api/mail`, {
      headers: {
        'Content-type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        address: this.state.address,
        message: this.state.message,
        agent: this.state.agent,
        email: this.state.email,  
        file: this.state.file
      })
    })
      .then(response => response.json())
      .then(state => this.setState(state))
      .catch(console.log)
  }

  render() {

    const genderOptions = [
      { key: '0', text: 'Select Options', value: ' ' },
      { key: '1', text: 'Olivia Lee', value: 'Olivia Lee' },
      { key: '2', text: 'Newton Williams', value: 'Newton Williams' },
      { key: '3', text: 'John Smith', value: 'John Smith' },
      { key: '4', text: 'Grace Davis', value: 'Grace Davis' },
      { key: '5', text: 'Evelyn Lopez', value: 'Evelyn Lopez' },
      { key: '6', text: 'Michael Miller', value: 'Michael Miller' },
    ]

    return (

      <div>
        <Container>
          <br />
          <Segment padded>
            <br />
            <Label attached='top'>
              <h3 style={{ textAlign: 'right', lineHeight: '2em' }}>Rebate Request Here</h3>
            </Label>
            <br /><br /><br />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group unstackable widths={2}>
                <Form.Input onChange={this.handleChange} name='firstname' label='First name' value = {this.props.user.firstname} />
                <Form.Input onChange={this.handleChange} name='lastname' label='Last name' value = {this.props.user.lastname} />
              </Form.Group>
              <Form.Group unstackable widths={2}>
              <Form.Input onChange={this.handleChange} name='address' label='Address' placeholder='Address' />
              <Form.Input 
                onChange={this.fileHandleChange} 
                type='file' 
                name='pdf' 
                accept="application/pdf"
                label='Rebate Form' 
                placeholder='attach file here' />
              </Form.Group>
              <Form.Field
                onChange={this.handleChange}
                name='message'
                id='form-textarea-control-message'
                control={TextArea}
                label='Message'
                placeholder='Message'
              />
              <Form.Group widths={2}>
                <Form.Field
                  onChange={this.handleChange}
                  name='agent'
                  control={Select}
                  options={genderOptions}
                  label={{ children: 'Agent', htmlFor: 'form-select-control-agent' }}
                  placeholder='Agent'
                  search
                  searchInput={{ id: 'form-select-control-agent' }}
                />
                <Form.Field
                  onChange={this.handleChange}
                  name='email'
                  id='form-input-control-error-email'
                  control={Input}
                  label='Email'
                  placeholder='joe@schmoe.com'
                  error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                  }}
                />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>
      // <div className="App">
      //     <form onSubmit={this.handleSubmit}>
      //       <label htmlFor="name">Select a PDF: </label>
      //       <input 
      //         type="file"
      //         name="pdf" 
      //         accept="application/pdf"
      //         onChange={this.handleChange} /><br></br><br></br>
      //       <button type="submit">Submit</button>
      //     </form>
      //     <p>{this.state.greeting}</p>
      //     </div>
    );
  }
 
}

export default Mailer;