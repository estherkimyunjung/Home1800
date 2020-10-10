import React, { Component } from 'react'
import PropertiesList from '../component/PropertiesList'
import {
  Grid,
  Segment,
  Container,
  Select,
  Input } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css'


class PropertiesCont extends Component {

  render() {
    const ProperitesSearch = [
      { key: 'd', value: 'd', text: 'Select Option' },
      { key: 'phl', value: 'plh', text: 'Price (High to Low)' },
      { key: 'price', value: 'price', text: 'Price (Low to High)' },
      { key: 'built', value: 'built', text: 'Newest' },
      { key: 'beds', value: 'beds', text: 'Bedrooms' },
      { key: 'baths', value: 'baths', text: 'Bathrooms' },
      { key: 'sqft', value: 'sqft', text: 'Square Feet' },
      { key: 'zipcode', value: 'zipcode', text: 'Zipcode' },
    ]

    return (
      <Container>
        <Segment>
          <Segment>
            <Grid columns={3} divided style={{ marginLeft: '50px' }}>
              <Grid.Row >
                <Grid.Column width={11}>
                  <span style={{color: '#868161', fontWeight: 'Bold', fontSize: '17px'}}>
                    Search by Stree Address or City or Zipcode
                  </span>
                  <Input onChange={this.props.onChange}fluid icon='search' placeholder='Search...' />
                </Grid.Column>
                <Grid.Column width={4}>
                  <span style={{color: '#868161', fontWeight: 'Bold', fontSize: '17px'}}>
                    Sort by options
                  </span>
                  <Select 
                    style={{ float: 'right' }} 
                    placeholder='Find Home for You' 
                    options={ProperitesSearch} 
                    onChange={(e)=>{
                      this.props.sortProperties(e.target.textContent)}}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Grid stackable columns={3}>
            {this.props.properties.map(p =>
              <PropertiesList property={p} Key={p.id} />
            )}
          </Grid>
        </Segment>
      </Container>
    );
  }
}
export default PropertiesCont

