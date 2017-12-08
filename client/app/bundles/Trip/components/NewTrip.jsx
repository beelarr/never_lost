import React, { Component } from 'react';
import TripForm from './TripForm';
import TripMap from './TripMap';


export default class NewTrip extends Component {
    render() {
        return (
            <div>
                <TripForm />
                <TripMap />
            </div>
        )
    }
}