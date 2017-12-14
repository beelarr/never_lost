import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import token from '../../../Creds/Creds';
import moment from 'moment'

if (!token) {
    throw new Error('That token is bad');
}



@inject('TripStore')
@observer
export default class TripStore extends Component {

    state = {
        viewport: {
            lat: 35.5628,
            lon: -83.4984,
            zoom: 10,
            bearing: 0,
            pitch: 60,
            width: window.innerWidth,
            height: window.innerHeight,
        },
        settings: {
            dragPan: true,
            dragRotate:true,
            scrollZoom: true,
            touchZoomRotate: true,
            doubleClickZoom: true,
            minZoom: 0,
            maxZoom: 20,
            minPitch: 0,
            maxPitch: 85,
        },
    };

    // Renders a marker for each checkin location
    renderMarker = checkin => {
        return (
            <Marker
                key={checkin.captured_at}
                longitude={checkin.lon}
                latitude={checkin.lat}>
              <div className="station">
                <span>Check-In: {moment(checkin.captured_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
                <span> Longitude {checkin.lon} </span>
                <span> Latitude {checkin.lat} </span>
              </div>
            </Marker>
      );
    };

    //Call back to handles map dragging, panning ect
    onViewportChange = viewport => this.setState({viewport});

    // Helper function to set viewport to users last checkin location
    viewport = () => {
        const { TripStore } = this.props;
        let latitude = 35.5628;
        let longitude = -83.4984;

        if (TripStore.checkins.length > 0) {
            const last = TripStore.checkins[TripStore.checkins.length - 1];
            latitude = last.lat;
            longitude = last.lon
        }
        return {
            ...this.state.viewport,
            latitude,
            longitude
        };
    };

    render() {
        const { TripStore } = this.props;
        const viewport = this.viewport();
        // const flyTo = FlyToInterpolator();

        //Renders actual Map, mapping over each checkins in the TripStore
        return (
            <MapGL
                {...viewport}
                {...this.state.settings}
                mapStyle="mapbox://styles/beelarr/cjb2k1hc27uxt2sml0e1yff01"
                onViewportChange={this.onViewportChange}
                mapboxApiAccessToken={token}
                // transitionDuration={1000}
                // transitionEasing={d3.easeCubic}
                >
                { TripStore.checkins.map(this.renderMarker) }
            </MapGL>
        );
    }
}