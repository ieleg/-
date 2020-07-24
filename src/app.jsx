import * as React from 'react';
import { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import Ha from './components/footer'
import Dialog from './components/DialogFoot'

const MapGl = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYWRvbGZoZWlyIiwiYSI6ImNrNjNwdGU5YjAyeXczbG9keDB6dGc3dWgifQ.sPE1XhdGGPwDsuFl_BPXqQ"
});
function Map() {
  return(
    <Dialog
      left={()=>{
        return(
          <p
            onClick={()=>{console.log('test');
            }}
          >left</p>
        )
      }}
      center={()=>{
        return(
          <p>left</p>
        )
      }}
      right={()=>{
        return(
          <p>left</p>
        )
      }}
    />
  )
}

export default Map