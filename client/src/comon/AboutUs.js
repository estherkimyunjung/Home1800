import React, { Component } from 'react'
import { connect } from 'react-redux'
import Map from './Map'
import {
  Grid,
  Image,
  Container,
  Segment,
  Icon
} from 'semantic-ui-react'
import GoogleFontLoader from 'react-google-font-loader';

class AboutUs extends Component {

  render() {

    return (
      <div>
        <Container>
          <GoogleFontLoader
            fonts={[
              {
                font: 'Bungee Inline',
                weights: [400],
              },
              {
                font: '"Comfortaa", cursive',
              },
              {
                font: "'Shadows Into Light', cursive",
              },
              {
                font: "'Krona One', sans-serif",
              },
            ]}
          />
          <Segment>
            <div style={{ height: '450px', backgroundImage: "url('https://www.easirent.com/wp-content/uploads/2020/03/family-home_23-2148166823.jpg')", backgroundSize: '50% 100%'}}>

              <h1 style={{ padding: '2px', fontSize: '60px', textAlign: 'center', fontFamily: 'Bungee Inline', textShadow: '5px 5px 11px #333'}} >Home 1800</h1>
              <ul>
                <h4 style={{ padding: '3px', fontSize: '25px', textAlign: 'center', fontFamily: '"Comfortaa", cursive', fontWeight: 'bold' }}>Family-like agent</h4>
                <h4 style={{ padding: '3px', fontSize: '25px', textAlign: 'center', fontFamily: '"Comfortaa", cursive', fontWeight: 'bold' }}>Proper service</h4>
                <h4 style={{ marginBottom: '50px', padding: '3px', fontSize: '25px', textAlign: 'center', fontFamily: '"Comfortaa", cursive', fontWeight: 'bold' }}>Customer interests</h4>
              </ul>
            </div>
            <Segment marginTop='10px' style={{backgroundColor: '#DCDCDC'}}>

                  <Image src='https://www.allworship.com/wp-content/uploads/2016/08/bigstock-Happy-team-of-young-business-p-82322231-640x462.jpg' style={{ marginRight: '2em', width:'300px' , boxShadow: '10px 10px 10px #333'}} floated='left' />
                  <p style={{ margin: '7px', padding: '3px', fontSize: '20px', fontFamily: "'Krona One', sans-serif" }}>
                  It's a motto that might seem a bit cliché and cliché, but I think it won't change forever. Joshua started engineering (UCLA '95 Civil Engineering), Rachel went fashion (FIDM '97) and started real estate as a couple in 2004. , Coldwell Banker, Keller Williams). So far, we have sold to real estate centered on LA & Orange County Koreans' preferred locations and have been involved in the sale of approximately $100 Million worth of homes. It's not a small career, but it's not even a top agent. It can be said that our strength is to focus on the service mind that focuses on one customer, rather than the corporate spirit of expanding the business scale.</p>
                    <Image src='https://image.freepik.com/free-photo/adult-children-hands-holding-paper-family-cutout-family-home_49149-814.jpg'  style={{width:'300px', boxShadow: '-10px -10px 10px #333'}}floated='right'/>
                  <p style={{ fontSize: '20px', fontFamily: "'Krona One', sans-serif" }}>
                    It is our philosophy of life that everything gets messed up the moment we place something on people. As we focus on people, a lot of puzzles fit together. You usually like it a lot, and you are satisfied with both the process and the results. There is not a lot of satisfaction that comes from the trust and bond that grows with our customers. So it's not easy, but it's fun and fun. We hope you will have the opportunity to show us how our efforts to become good agents can change the sale of real estate.</p>

                    </Segment>

            <Segment>
              <Map lat={this.props.latitude} long={this.props.longitude} />
            </Segment>
          </Segment>
        </Container>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    id: 1,
    logo: <Icon name='building outline' />,
    name: state.company.name,
    address: state.company.address,
    zipcode: state.company.zipcode,
    latitude: state.company.latitude,
    longitude: state.company.longitude,
    phone: state.company.phone,
    email: state.company.email,
    sloganOne: state.company.descriptionOne,
    sloganTwo: state.company.descriptionTwo,
    sloganThree: state.company.descriptionThree
  }
}
export default connect(mapStateToProps)(AboutUs)


