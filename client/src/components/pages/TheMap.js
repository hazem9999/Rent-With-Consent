import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
    return (
        <GoogleMap defaultZoom = {10} defaultCenter={{lat:30.071410, lng: 31.358055}} />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

 function TheMap() {
    return(
        <div style= {{width: '100vw', height: '100vh'}}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{height:"100%"}} />}
            containerElement={<div style={{height:"100%"}} />}
            mapElement={<div style={{height:"100%"}} />} />
        </div>
    )
}

export default TheMap