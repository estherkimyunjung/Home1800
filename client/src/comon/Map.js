import _ from "lodash"
import React from "react"
import { compose, withProps } from "recompose"
import keys from '../api/keys'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker } from "react-google-maps"


const MyMapComponent = compose(
    withProps({
    googleMapURL:
    `https://maps.googleapis.com/maps/api/js?key=${keys.API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
    }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 29.723549, lng: -95.797884 }}>
    <Marker position={{ lat: 29.723549, lng: -95.797884 }} />
  </GoogleMap>
))

const enhance = _.identity;

const ReactGoogleMaps = () => [
  <MyMapComponent key="map" />
]

export default enhance(ReactGoogleMaps)

