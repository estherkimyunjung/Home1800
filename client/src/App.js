import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import moment from 'moment';
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import NavBar from './comon/NavBar'
import SlideAdv from './comon/SliderAdv'
import Footer from './comon/Footer'
import AgentCont from './container/AgentCont'
import ContactUs from './comon/ContactUs'
import AboutUs from './comon/AboutUs';
import Profile from './comon/Profile'
import ContentCont from './container/ContentCont';
import PropertiesCont from './container/PropertiesCont';
import { Button, Spinner } from 'react-bootstrap';
import Mailer from './component/Mailer';

const USER_API = 'http://localhost:3000/api/v1/users'
// const CLIENT_API = 'http://localhost:3000/api/v1/clients'
const AGENT_API = 'http://localhost:3000/api/v1/agents'
// const COMPANY_API = 'http://localhost:3000/api/v1/companies'
const PROPERTY_API = 'http://localhost:3000/api/v1/properties'
const APPOINTMENT_API = 'http://localhost:3000/api/v1/appointments'

class App extends React.Component {

  state = {
    loggedIn: true,
    token: localStorage.token,
    user: JSON.parse(localStorage.getItem('user')),
    properties: [],
    displayPro: [],
    agents: [],
    appointments: [],
    eventName: 'main',
    searchTerm: '',
    isLoading: true
  }

  componentDidMount() {
    this.fetchProperties()
    this.fetchAgents()
    this.fetchAppointments()
  }

  fetchProperties = () => {
    fetch(PROPERTY_API)
      .then(res => res.json())
      .then(properties => {
        // console.log("properties", properties)
        this.setState({
          properties: properties,
          displayPro: properties,
          isLoading: false
        })
      })
  }

  fetchAgents = () => {
    fetch(AGENT_API)
      .then(res => res.json())
      .then(agents => {
        // console.log("agents", agents)
        this.setState({
          agents: agents,
          isLoading: false
        })
      })
  }

  fetchAppointments = () => {
    fetch(APPOINTMENT_API)
      .then(res => res.json())
      .then(appointments => {
        // console.log("appointments", appointments)
        this.setState({
          appointments: appointments,
          isLoading: false
        })
      })
  }

  addAppointment = (message, Finagent, date_time, e) => {
    // console.log("ADDAPPOE", e)
    // console.log("ADDMes", message)
    // console.log("ADDAgent", Finagent)
    // console.log("ADDDate", date_time)
    // debugger
    e.preventDefault()

    // const findAgent = (Finagent) => {
    //  return this.state.agents.find( agent => (agent.user.firstname +' '+ agent.user.lastname === Finagent))
    // }
    // debugger
    // console.log("FA",findAgent(Finagent))
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        date_time: moment(date_time).format("dddd, MMMM D, YYYY h:mm"),
        message: message,
        client_id: this.state.user.client.id,
        agent_id: parseInt(Finagent.split(' ')[0])
      })
    }

    fetch(APPOINTMENT_API, options)
      .then(res => res.json())
      .then(Newappointment => {
        console.log("Newappointment", Newappointment)
        this.setState({
          appointments: [...this.state.appointments, Newappointment]
        })
        this.fetchAppointments()
      })
    e.target.reset()
  }

  fetchUser = () => {
    fetch(USER_API + `/${this.state.user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    })
      .then(res => res.json())
      .then(userInfo => {
        localStorage.setItem('user', JSON.stringify({ ...userInfo, token: this.state.token }))
        this.setState({
          user: JSON.parse(localStorage.getItem('user'))
        })
      })
  }

  editUserInfo = (user) => {
    // debugger
    const option = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        Authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        zipcode: user.zipcode
      })
    }

    fetch(USER_API + `/${user.id}`, option)
      .then(res => res.json())
      .then(userInfo => {
        this.fetchUser()
      })
  }

  handleStateChanges = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  sortProperties = (value) => {
    // console.log("SORT", value)
    let sorted = [...this.state.properties]

    switch (value) {
      case "Price (High to Low)":
        return this.setState({
          displayPro: sorted.sort((a, b) => parseInt(b.prices.replace(/,/g, '')) - parseInt(a.prices.replace(/,/g, '')))
        })
      case "Price (Low to High)":
        return this.setState({
          displayPro: sorted.sort((a, b) => parseInt(a.prices.replace(/,/g, '')) - parseInt(b.prices.replace(/,/g, '')))
        })
      case "Newest":
        return this.setState({
          displayPro: sorted.sort((a, b) => b.built - a.built)
        })
      case "Bedrooms":
        return this.setState({
          displayPro: sorted.sort((a, b) => a.beds - b.beds)
        })
      case "Bathrooms":
        return this.setState({
          displayPro: sorted.sort((a, b) => a.baths - b.baths)
        })
      case "Square Feet":
        return this.setState({
          displayPro: sorted.sort((a, b) => parseInt(b.sqft.replace(/,/g, '')) - parseInt(a.sqft.replace(/,/g, '')))
        })
      case "Zipcode":
        return this.setState({
          displayPro: sorted.sort((a, b) => a.zipcode - b.zipcode)
        })
      default:
        return sorted
    }
  }

  handleSearch = event => {
    this.setState({ searchTerm: (event.target.value).toUpperCase() })
  }

  render() {

    const searchProperty = this.state.displayPro.filter(property => property.address.includes(this.state.searchTerm))

    // console.log("EST", this.state.properties)
    return (
      <div className="App">
        {this.state.isLoading
          ? <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          Loading...
        </Button>
          : <BrowserRouter>

            {/* static components - Header: TopBar,NavBar / SliderAdv / Footer: AboutUs*/}
            <NavBar
              handleStateChange={this.handleStateChanges}
              properties={this.state.properties}
            />

            {/* Slide All Properties Advertising Images */}
            <SlideAdv
              handleStateChange={this.handleStateChanges}
              properties={this.state.properties}
            />

            {/* Condition Rendering instead of Contentcont */}
            <Switch>
              <Route path='/login' render={(routerProps) =>
                <Login
                  user={this.state.user}
                  handleStateChange={this.handleStateChanges} />}
              />
              <Route path='/signup' component={SignUp} />
              <Route exact path="/profile" component={() =>
                this.state.token
                  ? <Profile
                    addAppointment={this.addAppointment}
                    editUserInfo={this.editUserInfo}
                    user={this.state.user}
                    agents={this.state.agents}
                    appointments={this.state.appointments}
                  />
                  : <Redirect to='/login' />}
              />
              <Route exact path='/home' render={(routerProps) =>
                <ContentCont
                  properties={this.state.properties} />}
              />
              <Route exact path='/property' render={(routerProps) =>
                <PropertiesCont
                  properties={this.state.displayPro}
                  sortProperties={this.sortProperties}
                  onChange={this.handleSearch}
                  properties={searchProperty}
                  handleStateChange={this.handleStateChanges} />}
              />
              <Route exact path='/agent' render={(routerProps) =>
                <AgentCont
                  agents={this.state.agents}
                  handleStateChange={this.handleStateChanges} />}
              />
              <Route exact path='/rebate' render={(routerProps) =>
                this.state.token
                ? <Mailer
                    user={this.state.user}
                    agents={this.state.agents}
                    appointments={this.state.appointments}
                    handleStateChange={this.handleStateChanges}
                  />
                : <Redirect to='/login' />}
              />
              <Route path='/aboutUs' component={AboutUs} />
              <Route path='/contactUs' component={ContactUs} />
            </Switch>
            <Footer />
          </BrowserRouter>
        }
      </div>
    )
  }
}
export default App;

