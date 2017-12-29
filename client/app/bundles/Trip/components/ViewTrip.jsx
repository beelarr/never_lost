import React, { Component } from 'react';
import TripMap from './TripMap';
import Navbar from "./Nav";


export default class ViewTrip extends Component {
    render() {
        return (
            <div>
              <Navbar />
              <TripMap />
            </div>
        )
    }
}