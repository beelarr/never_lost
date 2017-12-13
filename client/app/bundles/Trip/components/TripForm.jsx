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
    Sticky
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

                        <section className="trip-form-container">
                <Modal trigger={<Button>Get Your Link</Button>} basic size='small'>
                    <Header icon='map signs'  />
                    <Modal.Content>
                            <h3><a href={trip_url}>Here's Your Link, {TripStore.trip.name}!!</a>
                            </h3>

                    </Modal.Content>

                </Modal>
                        </section>

            )

        }
        return (
            <Sticky>
                <div>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='overlay' direction='top' visible={true} inverted>
                            <Menu.Item name='home'>
                                <Icon name='home' />
                                Home
                            </Menu.Item>
                            <Menu.Item name='search'>
                                <Form onSubmit={e => this.handleSubmit(e)}>
                                    <Form.Field>
                                        <input
                                            placeholder='Name'
                                            id="name"
                                            ref={input => this.nameInput = input} required/>
                                    </Form.Field>

                                    <Button type='submit'>Submit</Button>
                                </Form>
                            </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Header as='h3'>Application Content</Header>
                                <Image src='/assets/images/wireframe/paragraph.png' />
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </div>
            </Sticky>



        )
    }
}