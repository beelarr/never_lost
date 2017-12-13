import React, { Component }  from 'react';
import { observer, inject } from 'mobx-react';
import {
    Button,
    Icon,
    Modal,
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


        if (TripStore.trip.name) {
            const trip_url = `${window.location.protocol}//${window.location.host}/trips/${TripStore.trip.viewer_uuid}`;
            return (

                <Sticky>

                    <Sidebar as={Menu}
                             animation='overlay'
                             direction='top'
                             visible={true}
                             width='thin'
                             inverted
                             style={{
                                 height: '2%',

                             }}>
                        <Menu.Item
                            name='logo'
                            style={{
                                fontFamily: 'Aladin',
                                fontSize: 30,
                                display: 'flex',
                                justifyContent: 'flex-start'

                            }}
                        >
                            <Icon
                                name='tree' />
                            NeverLost

                        </Menu.Item>

                <Modal trigger={<Menu.Item><Button>Get Your Link</Button></Menu.Item>} basic size='small'>
                    <Header icon='map signs' size='huge'  />
                    <Modal.Content>
                            <h1><a href={trip_url}>Here's Your Link, {TripStore.trip.name}!!</a>
                            </h1>

                    </Modal.Content>

                </Modal>

                    </Sidebar>
                </Sticky>
            )

        }
        return (
            <Sticky>

                        <Sidebar as={Menu}
                                 animation='overlay'
                                 direction='top'
                                 visible={true}
                                 width='thin'
                                 inverted
                                 style={{
                                     height: '2%',

                                 }}>
                            <Menu.Item
                                name='logo'
                                style={{
                                    fontFamily: 'Aladin',
                                    fontSize: 30,
                                    display: 'flex',
                                    justifyContent: 'flex-start'

                                }}
                            >
                                <Icon
                                    name='tree' />
                                NeverLost

                            </Menu.Item>


                                <Menu.Item name='search'>
                                    <Form
                                        onSubmit={e => this.handleSubmit(e)}
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end'

                                        }}>
                                        <Form.Field>
                                            <input
                                                placeholder='Name'
                                                id="name"
                                                ref={input => this.nameInput = input} required/>
                                        </Form.Field>

                                    </Form>
                                </Menu.Item>

                        </Sidebar>

            </Sticky>



        )
    }
}