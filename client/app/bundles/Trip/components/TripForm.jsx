import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import {
    Button,
    Icon,
    Sidebar,
    Segment,
    Menu,
    Image,
    Header,
    Form,
    Sticky,
    Responsive,
}
    from 'semantic-ui-react';

import { Navbar, Nav, NavItem, FormGroup, FormControl, Modal } from 'react-bootstrap/lib/';





// Injecting our TripStore into the component as a prop
@inject('TripStore')
// Makes our class 'react' (re-render) by observing to store changes
@observer
export default class TripForm extends Component {

    state = {open: false};


    // When form is submitted call create trip action passing the name.
    handleSubmit = e => {
        if (e.key == 'Enter') {
            e.preventDefault();
            const name = this.nameInput.value;
            this.props.TripStore.createTrip(name)
            this.setState({open:true})
        }
    };




    render() {


        const { TripStore } = this.props;


        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (
                <Navbar
                    inverse
                    collapseOnSelect
                    style={{
                        marginBottom: 0
                    }}
                >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a
                                href="/"
                                style={{
                                    fontFamily: 'Aladin',
                                    fontSize: 35,
                                }}
                            >
                                <Icon
                                    name='tree' />
                                Never Lost</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>


                <Modal.Dialog
                    inverse
                    open={this.state.open}>
                    <Modal.Header>
                        <Icon name='map signs' size='huge'  />
                    </Modal.Header>
                    <Modal.Body>
                            <h1><a href={trip_url}>Here's Your Link to Share, {TripStore.trip.name}!!</a></h1>
                    </Modal.Body>
                </Modal.Dialog>
                </Navbar.Collapse>
                </Navbar>

            )

        }
        return (

            <Navbar
                inverse
                collapseOnSelect
                style={{
                    marginBottom: 0
                }}

            >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a
                            href="/"
                            style={{
                                fontFamily: 'Aladin',
                                fontSize: 35,
                            }}
                        >
                            <Icon
                                name='tree' />
                            Never Lost</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form
                        pullRight

                    >
                        <FormGroup>
                            <FormControl
                                type="text"
                                placeholder="Trail Name"
                                inputRef={input => this.nameInput = input} required
                                onKeyPress={e => this.handleSubmit(e)}/>
                            {' '}

                            </FormGroup>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}