import {observable, action, computed } from 'mobx';
import TripApi from '../services/TripApi';

// In a spreadsheet all data cells that have values would form the observable state.
// Formulas and charts are computed values that can be derived from the data cells and other formulas.
// Drawing the output of a data cell or a formula on the screen is a reaction.
// Changing a data cell or formula is an action.

class TripStore {
    @observable trip = {};
    @observable checkins = [];

    constructor() {
        this.tripApi = new TripApi();
    }

    @action setTrip = trip => {
        this.trip = trip;
        this.tripApi.subscribeTrip(trip.viewer_uuid, checkin => {
            this.recordCheckin(checkin)
        })
    };

    @action createTrip = name => {
        this.tripApi.createTrip(name)
            .then(trip => {
                this.trip = trip;
                this.tripApi.subscribeTrip(trip.viewer_uuid, checkin => {
                    this.recordCheckin(checkin)
                });
                this.postCheckin();
            });
    };

    @action recordCheckin = checkin => {
        this.checkins.push({
            lat: parseFloat(checkin.lat),
            lon: parseFloat(checkin.lon),
            captured_at: parseInt(checkin.captured_at)
        });
        this.checkins = this.checkins.slice(-250);
    };

    // sends users location every 5 sec or what ever setTimeout says
    @action postCheckin = () => {
        navigator.geolocation.getCurrentPosition(position => {

            this.tripApi.postCheckin(
                this.trip.owner_uuid,
                position.coords.latitude,
                position.coords.longitude,
                position.timestamp
            );

            setTimeout(() => {this.postCheckin();}, 5000);

        });
    }
}

const store = new TripStore();
export default store