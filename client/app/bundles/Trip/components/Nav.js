import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Navbar } from 'react-bootstrap/lib/';

const navbar = (props) => {

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
                        fontSize: 34,
                    }}>
                    <Icon name='tree' />
                    NEVERLOST
                </a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
        </Navbar>
    )
};

export default navbar;


