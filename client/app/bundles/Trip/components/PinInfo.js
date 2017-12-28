import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {

    render() {
        const checkin = this.props;

        return (
            <a href={`mailto:?Subject=Never%20Lost%20--%20Track%20Me%20on%20My%20Hike.&body=On%20${moment(checkin.captured_at).format('MMMM Do YYYY')}%20at%20${moment(checkin.captured_at).format('h:mm:ss a')}%0D%0AMy%20location%20was%3A%0D%0ALat%3A%20${checkin.lat}%0D%0ALong%3A%20${checkin.lon}%0D%0A%0D%0Ahttps://www.google.com/maps/search/${checkin.lat},${checkin.lon}%0D%0A%0D%0A`}>
                <div className="station">
                    <span>Check-In </span>
                    <span>Date:  {moment(checkin.captured_at).format('MMMM Do YYYY')}</span>
                    <span>Time:  {moment(checkin.captured_at).format('h:mm:ss a')}</span>
                    <span>Latitude: {checkin.lat} </span>
                    <span>Longitude: {checkin.lon} </span>
                </div>
            </a>
        );
    }
}