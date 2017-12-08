import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';

// Injecting our TripStore into the component as a prop
@inject('TripStore')
// Makes our class 'react' (re-render) by observing to store changes
@observer
export default class TripForm extends Component {
    // When form is submitted call create trip action passing the name.
    handleSubmit = e => {
        e.preventDefault();
        const name = this.nameInput.value;
        this.props.TripStore.createTrip(name)
    }

    render() {
        const { TripStore } = this.props;

        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (
                <section className="trip-form-container">
                  <p>
                    Tracking <b>{TripStore.trip.name}</b>,
                    share this link: <a href={trip_url}>Here's Your Link</a>
                  </p>

                </section>
            )

        }
        return (
            <section className="trip-form-container">
              <form id="form" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    ref={input => this.nameInput = input} required/>
                <button type="submit">Never Lost</button>
              </form>
            </section>
        )
    }
}