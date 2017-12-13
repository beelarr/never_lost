import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import AppBar from 'material-ui/AppBar';





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
        };




    render() {




        const { TripStore } = this.props;

        console.log("Trip Store", TripStore);

        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (





            )

        }
        return (

            <AppBar
                title="Never Lost"
                iconClassNameRight="muidocs-icon-navigation-expand-more"

            />






        )
    }
}