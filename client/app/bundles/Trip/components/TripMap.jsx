import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl';
import Pin from './Pin';
import token from '../../../Creds/Creds';
import moment from 'moment';
// import DevTools from 'mobx-react-devtools';


if (!token) {
    throw new Error('That token is bad');
}



@inject('TripStore')
@observer
export default class TripMap extends Component {

    state = {
        viewport: {
            lat: 35.5628,
            lon: -83.4984,
            zoom: 4,
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
                <Pin size={20} onClick={() => this.setState({popupInfo: city})} />

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
                <div style={{position: 'absolute', right: 0}}>
                </div>
                { TripStore.checkins.map(this.renderMarker) }
            </MapGL>
        );
    }
}