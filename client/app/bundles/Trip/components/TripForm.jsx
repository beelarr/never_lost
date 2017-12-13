import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import {
    Modal,
    Button
} from 'react-materialize';





// Injecting our TripStore into the component as a prop
@inject('TripStore')
// Makes our class 'react' (re-render) by observing to store changes
@observer
export default class TripForm extends Component {


    // showModal = () => {
    //
    // };


    // When form is submitted call create trip action passing the name.
    handleSubmit = e => {
        e.preventDefault();
        const name = this.nameInput.value;
        this.props.TripStore.createTrip(name)
        $('#modal').modal('open');
    };



    render() {


        const { TripStore } = this.props;

        console.log("Trip Store", TripStore);

        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (

                <Modal
                    header='Modal Header'
                    modalOptions={{ dismissible: true }}
                    id='modal'
                >
                    <section className="trip-form-container">
                        <p>
                            Tracking <b>{TripStore.trip.name}</b>,
                            share this link: <a href={trip_url}>Here's Your Link</a>
                        </p>

                    </section>
                </Modal>
            )

        }
        return (
            <section className="trip-form-container">
                <form
                    id="form"
                    onSubmit={e => this.handleSubmit(e)}
                    styles={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >

                    <input
                        type="text"
                        placeholder='Enter your name'
                        id="name"
                        ref={input => this.nameInput = input} required/>
                    <button type="submit">Never Lost</button>
                </form>
            </section>
        )
    }
}import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import {
    Modal,
    Button
} from 'react-materialize';





// Injecting our TripStore into the component as a prop
@inject('TripStore')
// Makes our class 'react' (re-render) by observing to store changes
@observer
export default class TripForm extends Component {


    // showModal = () => {
    //
    // };


    // When form is submitted call create trip action passing the name.
    handleSubmit = e => {
        e.preventDefault();
        const name = this.nameInput.value;
        this.props.TripStore.createTrip(name)
        $('#modal').modal('open');
    };



    render() {


        const { TripStore } = this.props;

        console.log("Trip Store", TripStore);

        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (

                <Modal
                    header='Modal Header'
                    modalOptions={{ dismissible: true }}
                    id='modal'
                >
                    <section className="trip-form-container">
                        <p>
                            Tracking <b>{TripStore.trip.name}</b>,
                            share this link: <a href={trip_url}>Here's Your Link</a>
                        </p>

                    </section>
                </Modal>
            )

        }
        return (
            <section className="trip-form-container">
                <form
                    id="form"
                    onSubmit={e => this.handleSubmit(e)}
                    styles={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                >

                    <input
                        type="text"
                        placeholder='Enter your name'
                        id="name"
                        ref={input => this.nameInput = input} required/>
                    <button type="submit">Never Lost</button>
                </form>
            </section>
        )
    }
}