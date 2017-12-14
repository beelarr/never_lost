import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import { Icon } from 'semantic-ui-react';

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
                    style={{ marginBottom: 0 }}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a
                                href="/"
                                style={{
                                    fontFamily: 'Aladin',
                                    fontSize: 35,
                                }}>
                                <Icon name='tree' />
                                Never Lost
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Modal.Dialog
                            inverse
                            href={trip_url}
                            open={this.state.open}>
                            <Modal.Header>
                                <Icon name='map signs' size='huge'  />
                            </Modal.Header>
                            <Modal.Body>
                            <h1 style={{ fontFamily: 'Ubuntu'}}>
                                {TripStore.trip.name}, you are now being tracked!!<br/>
                                <a
                                style={{ textDecoration: 'none' }}
                                href={ trip_url }
                                >
                                    Click for your link to share.</a>
                            </h1>
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
                style={{ marginBottom: 0 }}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a
                            href="/"
                            style={{
                                fontFamily: 'Aladin',
                                fontSize: 35,
                            }}>
                            <Icon name='tree' />
                            Never Lost
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl
                                type="text"
                                placeholder="Trail Name"
                                style={{ fontFamily: 'Aladin' }}
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