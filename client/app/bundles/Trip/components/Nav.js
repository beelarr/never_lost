import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Navbar } from 'react-bootstrap/lib/';

const navbar = (props) => {

    return <Navbar
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
    </Navbar.Collapse>
</Navbar>;
}


export default navbar;


// Powered By: Matt Brown