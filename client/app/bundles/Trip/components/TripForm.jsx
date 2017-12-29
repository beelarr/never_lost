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
                                    fontFamily: 'Montserrat Alternates',
                                    fontSize: 31,
                                }}>
                                <Icon name='tree' />
                                NEVERLOST
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                        <Modal.Dialog
                            inverse
                            href={trip_url}
                            open={this.state.open}>
                            <Modal.Header>
                                <Icon className='modalIcon' name='tree' size='huge'/>
                            </Modal.Header>
                            <Modal.Body>
                            <h4 style={{
                                    fontFamily: 'Ubuntu',
                                    display: 'flex',
                                    justifyContent: 'center'

                            }}>
                                {TripStore.trip.name}, you are now being tracked!<br/>
                            </h4>
                            <h5
                                style={{
                                    fontFamily: 'Ubuntu',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                Share your trip.
                            </h5>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}
                            >
                                <a

                                    href={`mailto:?Subject=Never%20Lost%20--%20Track%20Me%20on%20My%20Hike.&body=Follow%20me%20while%20I%20hike%20via%20NeverLost.%0A${trip_url}`}
                                >
                                    <Icon name="mail outline" size='large' />
                                </a>
                                <a

                                    href={`sms:''&body=Follow%20me%20while%20I%20hike%20via%20NeverLost.%0A${trip_url}`}
                                >
                                    <Icon name="share" size='large' />
                                </a>
                            </div>
                                <br/>
                                <a href={trip_url}>
                                    <h5
                                        style={{
                                            fontFamily: 'Ubuntu',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                        My Trip
                                    </h5>
                                </a>
                            </Modal.Body>
                        </Modal.Dialog>
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
                                fontFamily: 'Montserrat Alternates',
                                fontSize: 31,
                            }}>
                            <Icon name='tree' />
                            NEVERLOST
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
                                style={{ fontFamily: 'Ubuntu' }}
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