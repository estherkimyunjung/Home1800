import React, { Component } from 'react';
import AboutUs from '../comon/AboutUs';
import Footer from '../comon/Footer'
import { 
  Container, 
  Grid, 
  Segment } from 'semantic-ui-react'
  

class FooderCont extends Component {

  render() {

    return (
      <div>
        <AboutUs/>
        <Footer/>
      </div>
    )
  }
}
export default FooderCont

