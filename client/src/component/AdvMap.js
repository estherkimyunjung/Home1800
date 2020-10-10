import React, { Component } from 'react'
import keys from '../api/keys'
import { Icon } from 'semantic-ui-react'
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Circle } from 'google-maps-react'


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    console.log("PM", this.props)
    const lat = parseFloat(this.props.lat)
    const long = parseFloat(this.props.long)
    const coords = { lat: lat, lng: long };
    // console.log("PLEASE", lat)

    return (
      <Map
        onClick={this.onMapClicked}
        initialCenter={coords}
        google={this.props.google}
        style={{ width: '74%', height: '43%', position: 'flex', marginLeft:'20px' }}
        zoom={14}
      >
        <Circle
          radius={350}
          center={coords}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
        />
        <Marker
          onClick={this.onMarkerClick}
          title={'The marker`s title will appear as a tooltip.'}
          name={'Current location'}
          position={{ lat: lat, lng: long }}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h5 >
              <Icon name='home' />
              {this.props.address}<br/>
              <span style = {{marginLeft: '80px'}}>{this.props.schooldist.split(",")[0]}</span><br/>
              <span style = {{marginLeft: '80px'}}>{this.props.schooldist.split(",")[1]}</span><br/>
              <span style = {{marginLeft: '80px'}}>{this.props.schooldist.split(",")[2]}</span><br/>
            </h5>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: (keys.API_KEY)
})(MapContainer)

